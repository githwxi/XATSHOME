# Tail-Recursion via State Transition

## DATE

<pre>
Wed Jan 14 10:50:52 AM EST 2026
</pre>
  
## Description

The compiler xats2js_jsemit01 in
[xassets](./../../../../../xassets/JS/xats2js) does not support
tail-recursion optimization (TRO), that is, it does not automatically
turn a tail-recursive function into some form of loop-based
implementation.  While a future version of xats2js is expected to
support TRO, it is nonetheless interesting to see how TRO can be
handled *manually*. One can readily implement a tail-recursive
function in a special style so that no potential stack overflow caused
by executing this function is guaranteed.

## State Transition

Given a type ST for states, a *functional* state transition function
is one of the type `(ST) -> ST`. For instance, such a function `fupdt`
is declared as follows where ST is assumed to be non-linear:

```
fun fupdt(st: ST): ST
```

In the case where ST is linear, a *functional* state transition function
is one of the type `(!ST) -> ST`. For instance, such a function `fupdt1`
is declared as follows:

```
fun fupdt1(st: !ST): ST
```

Tail-recursion can be readily built on top of functional state transition.
Let us see a concrete example. The following function `fibo$trec` computes
Fibonacci numbers, where the inner function `loop` is tail-recursive:


```
fun
fibo$trec
(n: sint): sint =
(
loop(n, 0, 1)) where
{
fun
loop(i, r1, r2) =
(
if (i > 0)
then loop(i-1, r2, r1+r2) else r1)
}
```

We implement as follows a state transition function `loop$trans` based
the tail-recursive `loop`:

```
#typedef
state =
(sint, sint, sint)

fun
loop$trans
(st: state): state =
let
val
(i, r1, r2) = st
in//let
if (i > 0) then (i-1, r2, r1+r2) else st)
end//let//end-of-[loop$trans]
  
```

Given ST0 = (n, 0, 1) as the initial state, we can construct a linear
stream (strx_vt) of states beginning with ST0 such that the next state
of each state ST is obtained from applying `loop$trans` to ST. Note
that the stream is infinite.  We then search for the first state ST in
this stream such that (ST.0 = 0) holds; then ST.1 is the value of applying
`fibo$trec` to n (that is, Fibonacci(n)).

Please find further details in [fibo000.dats](./fibo000.dats).

Happy ATS programming!
