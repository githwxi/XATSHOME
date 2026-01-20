# Hello, world!

The following program in ATS3 prints
the string "Hello, world!" plus a newline:

```
val () = println("Hello, world!")
```

The syntax of ATS3 used here follows the tradition of
Standard ML (SML). For example, in the above line, `()`
refers to a pattern that only matches the void value (containing
zero number of bits), which is returned by a call to `println`.

However, in order to compile and then execute the program, we need to
indicate explicitly where library code for implementing `println` can
be located. In this regard, ATS3 is quite different from most
programming languages out there; it is particularly designed to
produce code that can be embedded in programs written in other
programming languages.

Let us put the following lines of code into a file named `hello.dats`:

```
#include
"prelude/HATS/prelude_dats.hats"
#include
"prelude/HATS/prelude_PY_dats.hats"
val () = println("Hello, world!")
```

We can use `xats2py` to compile `hello.dats` to generate some PY
code. In order to run the code, we need a few extra lines of PY code
implementing certain functions (emitted by the compiler) in the
generated PY code. Here is a way to compile and execute the program
from the current directory:

```
XATS2JPD=./../../../../../xassets/JS/xats2py; \
XATS2PYD=./../../../../../xassets/PY/xats2py; \
node --stack-size=8800 \
  ${XATS2JPD}/xats2py_pyemit01_ats3_opt1.js hello.dats | cat \
  ${XATS2PYD}/runtime/xats2py_py1emit.py ${XATS2PYD}/runtime/srcgen2_prelude.py - | python3
```

We can also use `xats2js` to compile `hello.dats` (properly modified
for targeting JS) to generate some JS code. We also need a few extra
lines of JS code implementing certain functions (emitted by the
compiler) in the generated JS code in order to run it. Here is a way
to compile and execute the program from the current directory:

```
XATS2JSD=./../../../../../xassets/JS/xats2js; \
node --stack-size=8800 \
  ${XATS2JSD}/xats2js_jsemit01_ats3_opt1.js hello.dats | cat \
  ${XATS2JSD}/runtime/xats2js_js1emit.js \
  ${XATS2JSD}/runtime/srcgen2_prelude.js ${XATS2JSD}/runtime/srcgen2_prelude_node.js - | node
```

One can use a Makefile like `Makefile_jpemit01` and
`Makefile_jsemit01` to streamline the process of compiling and
executing a program written in ATS3.

There are also versions of ATS3 compilers that are programs in
Python. Please see `Makefile_pjemit01` and `Makefile_pyemit01` for
information on using them.

By the way, we can also use the following line to print "Hello,
world!" plus a newline. According to the naming convention of ATS3,
`prints` is a plural form of `print`, meaning to apply `print`
multiple times.

```
val () = printsln("Hello", ", ", "world", "!")
```

Happy ATS programming!
