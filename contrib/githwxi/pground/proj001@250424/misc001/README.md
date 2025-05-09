# XATS2JS: Compiling ATS3 to JS

There are several examples here showing compilation
from ATS3 to JS (JavaScript) via the XATS2JS compiler.

Let us focus on the code in `pstrm000.dats`, which constructs a linear
stream of all the prime numbers in the increasing order: 2, 3, 5, 7,
11, etc.

The following code is taken from `pstrm000.dats`:

```
val
sint_gte$strmize =
fix f(n: sint) => $llazy(strmcon_vt_cons(n, f(n+1)))
```

The value `sint_gte$strmize` implements a function, which
takes an integer `n` and returns a linear stream of all the
integers starting from $n$. ATS3 supports a relatively involved
convention for naming functions. For instance, in the name
`sint_gte$strmize`, `sint` is the type for the first argument
of the function, which happens to be the only argument;
and `gte$strmize` is a so-called `verb phrase`, which roughly
describes what the function does; the verb `strmize` means to
generate a linear stream (more precisely, a value of `strm_vt`),
and the `gte` prefix indicates that the generated stream consists
of integers greater than or equal to the integer argument passed
to `sint_gte$strmize`.

Note that `fix` is a keyword in ATS3 for constructing an anonymous
recursive function. In addition, `$llazy` is a keyword for suspending
the evaluation of the expression following it. What `$llazy` forms is
essentially a linear thunk (that is, a linear nullary function), which
can be safely freed by the programmer.

Let us give further explanation on `fix`. The following code
implements a function for computing the cube of its integer argument:

```
fun cube(x: sint): sint = x * x * x 
```

where `sint` is for signed integers. We can also define `cube` as follows:

```
val cube = lam(x: sint) => x * x * x
```

where the keyword `lam` is for constructing an anonymouse
non-recursive function (like `cube`). Let us define a recursive
function `fact` as follows for computing factorials:

```
fun
fact(x: sint): sint =
if x > 0 then x * fact(x-1) else 1
```

How can we turn `fact` into an anonymous function?  We cannot define
`fact` as follows:

```
val fact =
lam(x: sint) =>
if x > 0 then x * fact(x-1) else 1
```

where the name `fact` in the body of the anonymous function is unbound
(since `val` is not recursive). One solution is to introduce `vlr`, the
recursive version of `val`:

```
vlr fact =
lam(x: sint) =>
if x > 0 then x * fact(x-1) else 1
```

However, the above lam-expression is not a stand-alone expression that
can be used elsewhere. In ATS3, one can use the keyword `fix` to
construct an anonymous recursive function as follows:

```
val fact = // [fix] for fixed-point
fix f(x: sint) => if x > 0 then x * f(x-1) else 1
```

The fix-expression is a stand-alone expression that can be used elsewhere
in an expression context. For instance, we can write the following code
to compute the factorial of 10:

```
val fact10 =
(fix f(x: sint) => if x > 0 then x * f(x-1) else 1)10
```

Let us revist the code for implementing `sint_gte$strmize`:

```
val
sint_gte$strmize =
fix f(n: sint) => $llazy(strmcon_vt_cons(n, f(n+1)))
```

Without `$llazy`, `sint_gte$strmize` would be a non-terminating
function. The keyword `$llazy` used here stops the evaluation of the
expression following it, forming a thunk (that is, a nullary
function). For instance, the following lines of code binds `x0` to 0,
`x1` to 1, and `x2` to 2, where the bang symbol `!` resumes a
suspended evaluation (that is, calling the thunk following it).

```
//
val ints$gte$0 = sint_gte$strmize(0)
//
val strmcon_vt_cons(x0, ints$gte$1) = !ints$gte$0
val strmcon_vt_cons(x1, ints$gte$2) = !ints$gte$1
val strmcon_vt_cons(x2, ints$gte$3) = !ints$gte$2
//
```

Happy ATS programming!
