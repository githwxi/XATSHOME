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
Check a specific version:
npm \
view <package-name>@<version> version

Remove a specific version: 
npm unpublish <package-name>@<version>

Steps for upload a version:
Copy xats2js_tcheck00_ats2_opt1.js to bin/.; then
add at the top of bin/xats2js_tcheck00_ats2_opt1.js
the following line:
#!/usr/bin/env node
Then do 'npm pack' and 'npm publish --access public'
-->
