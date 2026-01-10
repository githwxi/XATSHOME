# State Monad

## DATE

<pre>
Thu Jan  8 11:07:30 PM EST 2026
</pre>
  
## Description

In [STmonad0.dats](./STmonad0.dats), one can find an implementation
of state monad in ATS3. Given a type T0, the monadic version M(T0) of
T0 is defined as (!ST) -> T0, where ST is the (linear) type for the
underlying state in M. Naturally, the monadic operators associated with
M can be define as follows:

```
fun return(x0: T0) = lam(st: !ST) => (x0)

fun binder
( mx: M(T0)
, fx: (!ST, T0) -> T1) = lam(st: !ST) => fx(mx(st))
```

Note that the type (!ST, T0) -> T1 is assigned to fx
instead of T0 -> M(T1).
  
Also, runST can be readily defined as follows in a type-safe manner:

```
fun
runST
(mx: M(T0)): T0 =
let
val st = STinit()
val x0 = mx(st) in STfree(st); x0 end
```

where STinit creates an initial state and STfree frees a state.

This example showcases the power of linear types. In Haskell,
implementing runST often relies on some internal "magic". For
instance, the actual GHC.ST implementation often uses *unsafeCoerce*,
essentially mapping the ST monad to the same machinery as IO without
the external side effects.

## Commentary by Hongwei Xi

The state monad in Haskell is a very interesting higher-order and
higher-rank mechanism (of great intellectual appeal). While it can
certainly be supported in ATS3, what is not so certain is whether it
should be supported in the first place since the motivating factor
for supporting it in Haskell does not exist in ATS3.

Given that the notion of state underlying a state monad can be modeled
as a linear abstract type, ATS3 can directly support safe imperative
programming (where a state can be modified) with no explicit need for
a state monad. Please see [myeval00.dats](./myeval00.dats) for a concrete
example of programming with linear state.

Fundamentally, linear states are just (linear) values in ATS3. And
this has opened up so many possibilities!

Happy ATS programming!
