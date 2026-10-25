# XATS2PY-PYEMIT01-ATS2

This is a compiler from ATS3 to Python~3.

This compiler is written in ATS3 and it is compiled by
another compiler written in ATS2 (for compiling ATS3 to Javascript).

One can invoke the compiler as follows to compile ATS3 code (stored
inside a given file mycode.dats) into PY code:

```
npx @npmhwxi/xats2py-pyemit01-ats2 mycode.dats
```

Happy programming in ATS!

<!--
Copy xats2py_pyemit01_ats2_opt1.js to bin/.; then
add at the top of bin/xats2py_pyemit01_ats2_opt1.js
the following line:
#!/usr/bin/env node
Then do 'npm pack' and 'npm publish --access public'
-->