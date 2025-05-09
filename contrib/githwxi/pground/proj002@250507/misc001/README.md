# Presenting Streams

[comment]: # HX-2025-05-08: It is ongoing.

Let us build a webpage for presenting the elements in a (lazy) stream.
For instance, we can build a stream of all the prime numbers and
present these primes by clicking a button. One prime is shown after a
clicking and the next prime is shown after the next clicking.

We first create a simple html file `prime.html`, where we have
the following two lines for loading JS code from the directory where
the file is stored:

```
  <script src="./OUTS/prime_cats.js"></script>
  <script src="./OUTS/prime_dats.js"></script>
```

The first file `prime_cats.js` is manually written that contains the
following function:
  
```
function CATS_prime$onclick() {
    DATS_prime$onclick((msg) => alert(msg))
}
```
The function `CATS_prime$onclick` is the callback attached to the
button declared in `prime.html`. The function `DATS_prime$onclick`,
which does the actual work, is implemented in `prime.dats`, which
contains the following lines:

```
#extern
fun
DATS_prime$onclick
(work: strn -> void): void = $extnam()
#implval
DATS_prime$onclick = onclick_make_lstrx(the_primes)
```

We skip the code for creating `the_primes`, which is a linear infinite
stream (strx_vt) of all the primes listed in the increasing order. The
function `onclick_make_lstrx` saves a given stream (of integers) in a
reference and returns a higher-order function; this higher-order
function, when called, passes to its argument (which itself is a
function) some representation of the first element of the stream saved
in the reference and then reset the reference with the tail of the
stream.

We can see the following kind of code in the implementation of
`onclick_make_lstrx`:  

```
lam(work) => ... work(tostrs("Prime(", pn+1, ") = ", x1)) ...
```

Note that `tostrs` is a handy function that returns the concatenation
of the strings obtained from applying the `tostr` function to each of
the arguments of `tostrs`.


Happy ATS programming!
