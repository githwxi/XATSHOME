# XATS2JS-JSEMIT00-ATS2

This is a compiler from ATS3 to Javascript.
And it is mainly used by ATS3 developers to compile
code that processes ATS3 syntax trees.

This compiler is written in ATS3 and it is compiled by
another compiler written in ATS2 (for compiling ATS3 to Javascript).

One can invoke the compiler as follows to compile ATS3 code (stored
inside a given file mycode.dats) into JS code:

```
npx @npmhwxi/xats2js-jsemit00-ats2 mycode.dats
```

Happy programming in ATS!

<!--
Copy xats2js_jsemit00_ats2.js to bin/xats2js.js;
then add the following line at the top of bin/xats2js.js:
#!/usr/bin/env node; then do 'npm pack' and 'npm publish --access'
-->
