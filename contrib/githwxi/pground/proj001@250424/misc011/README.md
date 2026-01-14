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

Happy ATS programming!
