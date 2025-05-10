# Linear Streamization

Linear streams are a wonderful feature in ATS3.  To quite a large
extent, a linear stream resembles a generator in Python (and many
other languages). However, the underlying mechanism of linear streams
is fundamentally different from that of generators.

## Reading from STDIN

In `tally.dats`, the following lines of code computes and
then prints the tally of some integer numbers input from the
standard input (STDIN).

```
//
val tally =
strm_vt_folditm0(lines, 0)
where
{
//
#typedef x0 = strn
#typedef r0 = sint
//
val lines =
g_stdin$line$strmize$exn<>()
//
#impltmp
folditm$fopr0<x0><r0>(r0, x0) =
case+
g_parse$opt(x0) of
| ~optn_vt_nil() => r0
| ~optn_vt_cons(i0) => (r0+i0) }
//
val ((*0*)) = printsln("tally = ", tally)
//
```

The function call `g_stdin$line$strmize$exn<>()` return a linear
stream of lines (of the type `strn`). This is an illusion in the sense
that these lines are not yet produced. However, we can readily proceed
to write code to process these lines as if they were available.

The function `strm_vt_folditm0` is the standard left-folding operator
on linear streams. In this case, left-folding with integer addition
computes the tally of the numbers represented by the lines read from
STDIN. If we replace integer addition with integer multiplication,
then what is computed is the product of these numbers (as long as the
initial value of `r0` is properly changed to 1).
  
## Streamizing an Iterative Loop

In the paper "Why Functional Programming Matters" by John Hughes,
which can be readily found on-line, an example of using the
Newton-Raphson method for computing square roots is given (in Section
4.1). In `bsrch000.dats`, an example of using binary search to find
the square root of 2 is given. This example is of the same programming
style as is advocated in the paper by Hughes, though its
implementation is much superior due to the use of a linear stream
(which is similar but different from the kind of streams supported in
the Haskell programming language). Alas! It is truly a pity that
Haskell formed too early to allow it to be greatly influenced by
_linear_ lazy evaluation.
  

Happy ATS programming!
