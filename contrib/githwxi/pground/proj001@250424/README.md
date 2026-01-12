# Some Programming Features in ATS3

We are not here to systematically present programming features in
ATS3.  Instead, we, more or less, randomly choose some features that
we think may be of importance for those interested in doing practical
programming in ATS3.

## [misc000](./misc000)

This example shows how to print "Hello, world!" in ATS3.  There is
some explanation on how to use xats2py and xats2js to compile it to
Python3 and JavaScript, respectively.

## [misc001](./misc001)

Here one can find some code making use of linear streams.

## [misc002](./misc002)

There are several examples here showing compilation from ATS3 to PY
(Python3) via the XATS2PY compiler.

## [misc003](./misc003)

Like [misc001](./misc001), one can find here some code making use of
linear streams.

## [misc004](./misc004)

Some code is present for testing the abstype lsrt (for sorted lists).

## [misc005](./misc005)

This example (mydict00) builds a stream of words, where
[gseq_segmentize0] is called to turn a linear stream of chars into a
linear stream of lines. And compiling to both JS and PY is supported.

## [misc006](./misc006)

This example (debug000) shows a simple of way of using [g_debug] for
debugging.

## [misc007](./misc007)

This example (STmonad0) gives in ATS3 a direct implementation
of the so-called state monad. In particular, runST is implemented
in a type-safe manner.

## [misc008](./misc008)

Streamization means turning a collection of values into a *linear*
stream of these values.  It is truly a bit of magic of ATS3 :)

## [misc009](./misc009)

What is GSEQ? GSEQ is for generic sequences.  Whenever a value
supports streamization, then the value can be treated as a GSEQ (via
the supported streamization).  What is GASQ? Similar to GSEQ, GASQ is
for generic array-like sequences. Hence, a GASQ is a GSEQ, but not
vice versa.

## [misc010](./misc010)

The support for symbol overloading in ATS3 is versatile. However, one
may not want to use "elegant syntax" during code construction as
symbol overloading inevitable complicates error-message reporting,
making it harder, especially for a non-expert, to comprehend the
meaning of error (especially, type-error) messages.
  
Happy ATS programming!
