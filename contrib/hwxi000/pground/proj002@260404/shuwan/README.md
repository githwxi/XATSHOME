# OS interface

`os.sats` declares a shared ATS-3 interface for file I/O, path operations,
environment variables, the working directory, platform identification, and
the current process ID. Include `os.dats` in an ATS-3 program after its
prelude headers to select the Node.js or Python bindings at compile time.

Text file reads and writes use UTF-8. File operations raise the host runtime's
error if they fail; `os_file_exists` is true only for regular files.
`os_path_extname` returns the extension including its leading dot, or an empty
string when there is no extension. `os_env_get` returns its fallback when the
named variable is unset.

Build and run the generated-backend smoke tests from this directory with:

```sh
make -f Makefile_jpemit01 testall_os
```

The target compiles and executes the same ATS-3 smoke test for Node.js and
Python 3.
