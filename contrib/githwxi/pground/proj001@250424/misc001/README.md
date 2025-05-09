# XATS2JS: Compiling ATS3 to JS

There are several examples here showing compilation
from ATS3 to JS (JavaScript) via the XATS2JS compiler.

In `pstrm000.dats`, the code constructs a linear stream of
all the prime numbers in the increasing order: 2, 3, 5, 7, 11, etc.

The following code is taken from `pstrm000.dats`:

```
val
sint_gte$strmize =
fix f(n: sint) => $llazy(strmcon_vt_cons(n, f(n+1)))
```

The value `sint_gte$strmize` represents a function, which
takes an integer `n` and returns a linear stream of all the
integers starting from $n$.

Note that `fix` is a keyword in ATS3 for constructing an anonymous
recursive function. In addition, `$llazy` is a keyword for suspending
the evaluation of the expression following it. What `$llazy` forms is
essentially a linear thunk (that is, a linear nullary function), which
can be safely freed by the programmer.

Let us give further explanation on `fix`. The following code
implements a function for computing the cube of its integer argument:

```
fun cube(x: sint): sint = x * x * x 
```

where `sint` is for signed integers. We can also define `cube` as follows:

```
val cube = lam(x: sint) => x * x * x
```

where the keyword `lam` is for constructing an anonymouse
non-recursive function (like `cube`). Let us define a recursive
function `fact` as follows for computing factorials:

```
fun
fact(x: sint): sint =
if x > 0 then x * fact(x-1) else 1
```

How can we turn `fact` into an anonymous function?  We cannot define
`fact` as follows:

```
val fact =
lam(x: sint) =>
if x > 0 then x * fact(x-1) else 1
```

where the name `fact` in the body of the anonymous function is unbound
(since `val` is not recursive). However, we can use `fix` to construct
an anonymous function as follows:

```
val fact =
fix f(x: sint) => if x > 0 then x * f(x-1) else 1
```


Happy ATS programming!
