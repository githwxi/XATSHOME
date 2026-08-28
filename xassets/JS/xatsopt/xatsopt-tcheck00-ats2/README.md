# XATSOPT-TCHECK00-ATS2

This is a type-checker for ATS3.
And it is mainly used by ATS3 developers to type-check
code that processes ATS3 syntax trees.

This type-checker is written in ATS3 and it is compiled by
a compiler written in ATS2 (for compiling ATS3 to Javascript).

One can invoke the type-checker as follows to type-check ATS3
code (stored inside a given file mycode.dats):

```
npx @npmhwxi/xatsopt-tcheck00-ats2 mycode.dats
```

Happy programming in ATS!

<!--
Copy xatsopt_jsemit00_ats2.js to bin/xatsopt.js;
then add the following line at the top of bin/xatsopt.js:
#!/usr/bin/env node; then do 'npm pack' and 'npm publish --access'
-->
