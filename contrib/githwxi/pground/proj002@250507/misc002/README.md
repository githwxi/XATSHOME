# Implementing a Counter (1)

Let us build a webpage containing a counter whose count can be
increased and decreased by clicking buttons.

We first create a simple html file `counter.html`, where there are
three buttons for increasing the count (of the counter), decreasing
the count, and resetting the count to 0.  The following two lines in
`counter.html` are for loading JS code from the directory where the
files are stored:

```
  <script src="./OUTS/counter_cats.js"></script>
  <script src="./OUTS/counter_dats.js"></script>
```

The first file `counter_cats.js` is manually written that contains the
following functions:
  
```
function
theCount$update(msg) {
  $("#theCount").text(msg);
}
function
CATS_Up$button$onclick() {
  DATS_Up$button$onclick(theCount$update);
}
function
CATS_Down$button$onclick() {
  DATS_Down$button$onclick(theCount$update);
}
function
CATS_Reset$button$onclick() {
  DATS_Reset$button$onclick(theCount$update);
}
```

For instance, the function `CATS_Up$button$onclick` is the callback attached to the
button in `counter.html` for increasing the count of the counter by 1. And the implementation
of `DATS_Up$button$onclick` is given in `counter.dats`, which contains the following lines:

```
//
#extern
fun
DATS_Up$button$onclick
(work: strn -> void): void = $extnam()
//
val theCount = a0rf(0)
//
#implfun
DATS_Up$button$onclick
  (update) =
(
  update(tostr(n0+1)))
where
{
val n0 = a0rf_get(theCount)
val () = a0rf_set(theCount, n0+1)
}(*where*)//end-of-[DATS_Up$button$onclick]
//
```

In ATS3, `a0rf` creates a reference (that is, an array of size 1);
`a0rf_get` and `a0rf_set` are the corresponding `get` and `set`
functions for references. Note that a reference is also referred to as
a 0-dimensional array in ATS3.

The rest of the code in `counter.dats` should be readily accessible, and
we omit further explanation.

Happy ATS programming!
