# [XATSHOME](https://github.com/xatshome)
For hosting ATS3 and developing CodeDepot

## Project Description

ATS3 refers to the third edition of ATS, which is currently
being developed at [ATS-Xanadu](https://github.com/githwxi/ATS-Xanadu).
XATSHOME is a place for one to learn ATS3 and also contribute to ATS3.

### A Quick Method for Trying ATS3

There is a directory of the name 'contrib'. For now, there is
'contrib/githwxi'. You should set up a directory for your own use by
following the example or from scratch. There will be other examples
in this directory that you can follow in the future.

Please set the envionment variable XATSHOME to the directory where
XATSHOME is located. For instance, I set it to '~/Research/XATSHOME'
on one of my computers (running bash):

```
export XATSHOME=${HOME}/Research/XATSHOME
```

Currently, there are compilers from ATS3 to JavaScript (JS) and
Python-3 (PY) in XATSHOME.

#### XATS2JS for compiling ATS3 to JS

The currently released ATS3-to-JS compiler is stored in the following
BIG file:

```
xassets/JS/xats2js/xats2js_jsemit01_ats3_opt1.js
```

which is bootstrapped from the source of the compiler.

In the directory 'contrib/githwxi', the compiler can be invoked
as follows:

```
node --stack-size=8800 \
  ./../../xassets/JS/xats2js/xats2js_jsemit01_ats3_opt1.js mycode.dats
```

where mycode.dats contains some ATS3 code to be compiled. The output
of the compiler is JS code. However, the generated JS code needs some
code in the following directory in order to run:

```
./../../xassets/JS/xats2js/runtime/xats2js_js1emit.js
./../../xassets/JS/xats2js/runtime/srcgen2_prelude.js
```

Please see the following Makefile for a complete example of compiling
ATS3 to JS:

```
contrib/githwxi/pground/proj001@250424/misc001/Makefile
```

#### XATS2PY for compiling ATS3 to PY

The currently released ATS3-to-PY compiler is stored in the following
BIG file:

```
xassets/JS/xats2py/xats2py_pyemit01_ats3_opt1.js
```

It can be used in a way very similar to the above ATS3-to-JS compiler.
The generated PY code needs some code in the following directory in
order to run:

```
./../../xassets/PY/xats2py/runtime/xats2py_py1emit.py
./../../xassets/PY/xats2py/runtime/srcgen2_prelude.py
```

Please see the following Makefile for a complete example of compiling
ATS3 to PY:

```
contrib/githwxi/pground/proj001@250424/misc002/Makefile
```
