# XATS2CM-CMEMIT01-ATS2

This is a compiler from ATS3 to Scheme.

This compiler is written in ATS3 and it is compiled by
another compiler written in ATS2 (for compiling ATS3 to Javascript).

One can invoke the compiler as follows to compile ATS3 code (stored
inside a given file mycode.dats) into Scheme code:

```
npx @npmhwxi/xats2cm-cmemit01-ats2 mycode.dats
```

Happy programming in ATS!

<!--
Copy xats2cm_cmemit01_ats2_opt1.js to bin/.; then
add at the top of bin/xats2cm_cmemit01_ats2_opt1.js
the following line:
#!/usr/bin/env node
Then do 'npm pack' and 'npm publish --access public'
-->