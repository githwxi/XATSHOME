# Line Splitting

## DATE

Fri Jan  2 09:55:14 AM EST 2026
  
## Description

This example (mydict00) builds a stream of words, where
[gseq_segmentize0] is called to turn a linear stream of chars into a
linear stream of lines.

## Tail-Recursion Optimization

At this moment, ATS3/srcgen2/xats2js/srcgen1 is not yet translating
tail-recursion into loop-based implementation. This example shows that
one can avoid stack-overflow by providing loop-based implementation
externally for functions like strm_vt_forall0 and strm_vt_filter0.

Happy ATS programming!
