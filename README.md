# XATSHOME
For hosting ATS3 and developing CodeDepot

## Project Description

ATS3 refers to the third edition of ATS, which is currently
being developed at [ATS-Xanadu](https://github.com/githwxi/ATS-Xanadu).
XATSHOME is a place for one to learn ATS3 and also contribute to ATS3.

There is a directory of the name 'contrib'. For now, there is
contrib/githwxi. You should set up a directory for your own use by
following the example or from scratch.

The currently released ATS3-to-JS compiler is stored in the following
BIG file:

xassets/JS/xats2js/xats2js_jsemit01_dats_out.js

In the directory 'contrib/githwxi', the compiler can be invoked
as follows:

```
node --stack-size=8000 \
  ./../../xassets/JS/xats2js/xats2js_jsemit01_dats_out.js mycode.dats
```

where mycode.dats contains some ATS3 code to be compiled. The output of
the compiler is JS code. However, the generated JS code needs some code
in the following directory in order to run:

```
./../../xassets/JS/xats2js/runtime/xats2js_js1emit.js
./../../xassets/JS/xats2js/runtime/xats2js_prelude.js
```

Please see the following Makefile for a complete example of compiling
ATS3 to JS:

```
contrib/githwxi/pground/proj001@250424/misc001/Makefile
```
