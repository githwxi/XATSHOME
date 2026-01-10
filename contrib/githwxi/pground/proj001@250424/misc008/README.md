# Streamization

## DATE

<pre>
Sat Jan 10 12:55:03 PM EST 2026
</pre>
  
## Description

We use the word *streamization* in ATS3 to mean turning a collection
of values into a linear stream of these values. By the way, there is
also *listization* in ATS3, which turns a collection of values into a
linear list of these values.

Let us use T(A) for the type of some collection of values of type
A. Then T(A) supports streamization via a function `strmize` if the
function turns a given collection xs of type T(A) into a linear stream
of type `strm_vt(A)` such that each value in the given collection xs
"occurs" in the returned linear stream.

## Commentary by Hongwei Xi

In Haskell, there is a type class of the name `Traversable`, which is
intimately related to the notion of streamization. The `traverse` function
associated with `Traversable` is given the following type:

```
traverse ::
(Applicative F, Traversable T) => (A -> F B) -> T A -> F (T B)
```

Haskell often makes use of some higher-order and higher-rank "tricks" to
compensate (or circumvent) its lack of proper handling of linear states
(or linear values in general). In the above type assigned to `traverse`,
the type `A -> F B` essentially amounts to `(!ST, A) -> B` in ATS3, which
is for a function that turns A to B while updating the linear state ST.
Then `traverse` can be given the following type:

```
traverse :: (Traversable T) => ((!ST, A) -> B) -> ((!ST, T A) -> T B)
```

which, by the way, is just the type for `map$e1nv` in ATS3.


It seems to me that another possiblity is for `traverse` to be
assgined the following type, where `[B]` replaces `T B` in the
aformentioned one:

```
traverse ::
(Applicative F, Traversable T) => (A -> F B) -> T A -> F ([B])
```

The rationale for this change is easily understood. After the
traversal is done, what is accumulated can be naturally represented
as a list. Why is it necessary to build a `T B` as the return value
of `traverse`?

Happy ATS programming!
