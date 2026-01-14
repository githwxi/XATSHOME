# GSEQ and GASQ

## DATE

<pre>
Sun Jan 11 09:10:52 PM EST 2026
</pre>
  
## What is GSEQ?

GSEQ is for generic sequences.  Whenever a value supports
streamization, then the value can be treated as a GSEQ (via the
supported streamization). A typical example of GSEQ is list.

Suppose there is a type XS and each value xs of type XS can be turned
into a stream of values of some type X0. Then xs can be `cast` into a
value of the type GSEQ(XS, X0), indicating that it can be treated as a
sequence of values of type X0.

For instance, given a natural number N, we can streamize it into the
sequence (0, 1, ..., N-1); this streamization yields a cast of nint
(the type for natural numbers) into GSEQ(nint, nint) (where the second
nint is for the natural numbers less than N). It also makes sense to
streamize N into the sequence ((), (), ..., ()) of N void-values,
which yields a cast of nint into GSEQ(nint, void).

What happens if we want a GSEQ based on the streamization of N into
the sequence (N, N-1, ..., 1). This streamization also yields a cast
of nint into GSEQ(nint, nint). At the type level, we cannot
distinguish this cast from the aformentioned one (which is based on
the streamization of N into the sequence (0, 1, ..., N-1)). To address
such a situation, we can introduce an abstract type as follows
(as a named GSEQ in place of the plain GSEQ):

```
#abstype GSEQ$nint_dn$streamize
```

Then we can introduce the following cast functions for encoding and
decoding:

```
#extern
fcast
GSEQ$nint_dn$streamize: nint -> GSEQ$nint_dn$streamize
#extern
fcast
GSEQ$nint_dn$streamize_un: GSEQ$nint_dn$streamize -> nint
```

This abstype-based solution clearly reminds one of newtypes in
Haskell.

Please see [misc009.dats](./misc009.dats) for a completed example,
where the involved streamization turns a natural number into a
sequence of digits.  The very point being made in the example is that
we can compute the sum of the digits in a given natural number based
on a form of digitization of the number while not actually turning the
number into a sequence of digits. There is zero overhead here in the
sense that the code for summation is the same as a corresponding
loop-based implementation.

## What is GASQ?

Similar to GSEQ, GASQ is for generic array-like sequences. Hence, a
GASQ is a GSEQ, but not vice versa. A typical example of GASQ is a1sz.

The following declared cast function `GASQ_GSEQ$cast` allows one to
cast a GASQ into a GSEQ:

```
fcast
GASQ_GSEQ$cast
{xs:t0}{x0:t0}
(gasq: GASQ(xs, x0)): GSEQ(xs, x0)
#symload GSEQ with GASQ_GSEQ$cast of 1000
```

## What is GSEQ_vt?

GSEQ_vt, which can also be referred to as GLSEQ, is the linear
counterpart of GSEQ.  A typical example of GLSEQ is list_vt.

## What is GASQ_vt?

GASQ_vt, which can also be referred to as GLASQ, is the linear
counterpart of GASQ.  A typical example of GLASQ is a1sz_vt.

Happy ATS programming!
