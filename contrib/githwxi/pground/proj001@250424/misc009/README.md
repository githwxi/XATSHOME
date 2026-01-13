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
