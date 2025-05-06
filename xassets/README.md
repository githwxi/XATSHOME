# XATSHOME/xassets
For various pre-built code and head files.

## File Description

### ATS3-to-JS-in-ATS3.js ###

This is a compiler from ATS3 to JS:

```
JS/xats2js/xats2js_jsemit01_ats3_opt1.js
```

One can invoke the compiler as follows (where
SOME_PATH_TO refers some proper path leading to the compiler):

```
node --stack-size=8800 $(SOME_PATH_TO)/xats2js_jsemit01_ats3_opt1.js mycode.dats
```

The expected output of the above command-line is some code in JavaScript,
which be readily mixed with other code in JavaScript obtained elsewhere.
Please find some running examples inside `contrib/githwxi/pground` for
more details.

### ATS3-to-PY-in-ATS3.js ###

This is a compiler from ATS3 to PY:

```
JS/xats2py/xats2py_pyemit01_ats3_opt1.js
```

One can invoke the compiler as follows (where
SOME_PATH_TO refers some proper path leading to the compiler):

```
node --stack-size=8800 $(SOME_PATH_TO)/xats2py_pyemit01_ats3_opt1.js mycode.dats
```

The expected output of the above command-line is some code in Python3,
which be readily mixed with other code in Python3 obtained elsewhere. Please
find some running examples inside `contrib/githwxi/pground` for more details.
