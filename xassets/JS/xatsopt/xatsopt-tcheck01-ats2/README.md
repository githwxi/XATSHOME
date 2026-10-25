# XATSOPT-TCHECK01-ATS2

This is a type-checker for ATS3.

This type-checker is written in ATS3 and it is compiled by
a compiler written in ATS2 (for compiling ATS3 to Javascript).

One can invoke the type-checker as follows to type-check ATS3
code (stored inside a given file mycode.dats):

```
npx @npmhwxi/xatsopt-tcheck01-ats2 mycode.dats
```

Happy programming in ATS!

<!--
Copy xats2js_tcheck01_ats2_opt1.js to bin/.; then
add at the top of bin/xats2js_tcheck01_ats2_opt1.js
the following line:
#!/usr/bin/env node
then do 'npm pack' and 'npm publish --access public'
-->
