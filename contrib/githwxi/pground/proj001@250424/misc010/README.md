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
  fun sieve(xs) =
    let val (p :: xs) = !xs in
      $llazy(p :: sieve(xs.filter0(lam(x:si)=>x%p>0))) end
  }
```

The version in ATS3 is slightly more verbose for some inherent reasons.
Unlike Haskell, evaluation in ATS3 is eager by default. Hence, the keyword
`$llazy` is used to indicate a stream (that is, a lazy list) is constructed.

Happy ATS programming!
