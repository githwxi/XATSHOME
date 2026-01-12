# GSEQ and GASQ

## DATE

<pre>
Sun Jan 11 09:10:52 PM EST 2026
</pre>
  
## What is GSEQ?

GSEQ is for generic sequences.  Whenever a value supports
streamization, then the value can be treated as a GSEQ (via the
supported streamization).

Suppose there is a type XS and each value xs of type XS can be turned
into a stream of values of some type X0. Then xs can be cast into a
value of the type GSEQ(XS, X0), indicating that it can be treated as a
sequence of values of type X0.

## What is GASQ?

Similar to GSEQ, GASQ is for array-like generic sequences. Hence, a
GASQ is a GSEQ, but not vice versa.

Happy ATS programming!
