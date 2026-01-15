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
  #vwtpdef xs = lsm(si) // lsm for strm_vt // si for sint
  fun sieve(xs: xs): xs =
    let val (p :: xs) = !xs in
      $llazy(p :: sieve(filter0(xs, lam(x:si)=>x%p>0))) end
}
```

This version in ATS3 is slightly more verbose for some
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
finite (strq) and infinite (strx). That is, a strm-stream can be
either finite or infinite; a strq-stream must be finite; a strx-stream
must be infinite.

Often, one needs to supply type annotations (e.g., `xs:xs` where the
type annotation `xs` is a shorthand for `lsm(si)` and `lsm` for
`strm_vt` and `si` for `sint`) so as to help the compiler to resolve
overloaded symbols. And such annotations are primarily added for
function arguments.

By the way, with just a single change of `lsm` into `lsx` (which is
for `strx_vt`), a strx-stream of all the prime numbers is constructed:


```
val thePrimes = sieve(from(2)) where {
  #vwtpdef xs = lsx(si) // lsx for strx_vt // si for sint
  fun sieve(xs: xs): xs =
    let val (p :: xs) = !xs in
      $llazy(p :: sieve(filter0(xs, lam(x:si)=>x%p>0))) end
}
```

## The cost of "elegant syntax"

Haskellers are often very proud of the "elegant syntax" of Haskell,
which tends to be concise and "mathematical". A lot of ideas on
supporting symbol overloading in ATS3 are motivated by a desire to
compete with Haskell in terms of syntax design.


In ATS3, "elegant syntax" is good for code presentation but may not be
so good for constructing the presented code. Symbol overloading can
readily "get in the way" as it inevitably complicates error-message
reporting.  I (Hongwei Xi) tend to use verbose syntax during code
development and then do "code beautification" after the development
phase is over.

By the way, I have not yet caught the fever of creating esoteric
symbolic names (e.g., `<$>`, `<*>`, `^.`, `~.`, `%~`) for
overloading. Syntactic crimes are bound to be made in the name of
elegance.  Please stay tuned :)

## Commentary by Hongwei Xi

*Programming language design is more art than mathematics, and it
 needs to take a holistic view.*

In the literature of programming language studies, there is a BIG
portion on type inference. Probably the most famous type inference
algorithm is given the name Hindley-Milner. And countless efforts have
been spent on "improving" it.

In Hindley-Milner, let-generalization (of free type variables) is
performed.  When a variable is bound by let, the type inference
algorithm automatically quantifies over any free type variables in its
inferred type that are not constrained by the surrounding scope (i.e.,
the type environment). This allows the bound variable to be used at
different types within the scope of the let expression, thus achieving
a form of polymorphism (which is referred to as `let-polymorphism`).

But what is the cost of performing let-generalization?  In programming
language design, features are often fighting each other.  With
Hindley-Milner, it becomes very difficult to support overloading of
symbols. In Standard ML (and many of its dialects), support for symbol
overloading is poor at best.  And heroic efforts are made in Haskell
in order to reconcile type inference and symbol overloading.

It took a very long time for me to finally decide to fully abandon
let-generalization in ATS3. Essentially, type inference in ATS3 makes
only use of the Hindley part of Hindley-Milner. This decision has
opened so many opportunities in the design space for ATS3. In
particular, the current versatile support of symbol overloading in
ATS3 owes its very existence to this decision.

Happy ATS programming!
