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
A. Then T(A) can support streamization via a function `strmize` if the
function turns a given collection xs of type T(A) into a linear stream
of type `strm_vt(A)` such that each value in the given collection xs
"occurs" in the returned linear stream. Clearly, there can be more
than one way for T(A) to support streamization. For instance, for a
tree of values, there are dfs-streamization (based on depth-first
traversal), bfs-streamization (based on breadth-first traversal), etc.

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

which, by the way, corresponds to `map$e1nv_list` in ATS3 (if `[B]` in
Haskell translates to `list(B)` in ATS3).

The rationale for this change is easily understood. After the
traversal is *sequentially* done, what is accumulated can be naturally
represented as a list. Then why is it necessary or even beneficial to
build a `T B` as the return value of `traverse`? 

I often read that `Functor` in Haskell gives us a way to map a pure
function and preserve shape and `Traversable` gives us a way to map an
effectful function and preserve shape. Preserving shape makes good
sense for the `fmap` function in `Functor` as one can imagine that
`fmap` *simultaneously* maps a given function to each value in a given
collection. But preserving shape makes less sense for `traverse` in
`Traversable` as `traverse` *sequentially* maps a given (effectful)
function to each value in a given collection (unless the underlying
effects are commutable).

In ATS3, preserving shape is treated as an optional (but not
essential) part of `map` (corresponding to `fmap` in `Functor`) or
`map$e1nv` (corresponding to `traverse` in `Traversable`).

Happy ATS programming!
