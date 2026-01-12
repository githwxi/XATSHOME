# Symbol Overloading

## DATE

<pre>
Mon Jan 12 01:27:56 AM EST 2026
</pre>
  
## Description

The support for symbol overloading in ATS3 is versatile.
Let us see a short example so as to acquire some concrete
feel for what symbol overloading can do in ATS3.

Haskell is a functional programming language that puts a great deal of
emphasis on supporting syntax inspired by mathematics.  For instance,
the following short program constructs a (lazy) list of all the prime
numbers (via Eratosthenes' famous sieve):

```
primes = sieve [2..] where
  sieve (p:xs) =
    p : sieve [x | x <- xs, x `mod` p /= 0]
```

A counterpart in ATS3 of the above Haskell program can be given as
follows:


```
val thePrimes = sieve(from(2)) where {
  fun sieve(xs:ls(si)) =
    let val (p :: xs) = !xs in
      $llazy(p :: sieve(filter0(xs, lam(x:si)=>x%p>0))) end
}
```

The version in ATS3 is slightly more verbose for some inherent
reasons.  Unlike Haskell, evaluation in ATS3 is eager by
default. Hence, the keyword `$llazy` is used to indicate a stream
(that is, a lazy list) is constructed.  There is no support in ATS3
for list comprehension (yet): The set formation syntax in Haskell
(often referred to as list comprehension) needs to be replaced with
higher-order function calls in ATS3.

The infix operator `::` is an overloaded symbol:

```
#symload :: with list_cons
#symload :: with list_vt_cons
#symload :: with strmcon_cons
#symload :: with strqcon_cons // finite
#symload :: with strxcon_cons // infinite
#symload :: with strmcon_vt_cons
#symload :: with strqcon_vt_cons // finite
#symload :: with strxcon_vt_cons // infinite
```

In ATS3, there are a variety of lists: functional (list), linear
function (list_vt), lazy functional (strm), and linear lazy functional
(strm_vt). Also, for each lazy kind, there are two more versions:
finite (strq) and infinite (strx). Often, one needs to supply type
annotations (e.g., `xs:ls(si)` where ls is a shorthand for strm_vt and
si for sint) so as to help the compiler to resolve overloaded
symbols. And such annotations are primarily for function arguments.

## Commentary by Hongwei Xi

*Programming language design needs to take a holistic view.*

Happy ATS programming!
