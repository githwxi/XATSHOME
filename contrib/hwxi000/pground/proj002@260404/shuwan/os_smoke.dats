#include "prelude/HATS/prelude_dats.hats"

#if defq(_XATS2PY_)
#include "prelude/HATS/prelude_PY_dats.hats"
#endif

#if defq(_XATS2JS_)
#include "prelude/HATS/prelude_JS_dats.hats"
#include "prelude/HATS/prelude_NODE_dats.hats"
#endif

#include "./os.dats"

val cwd = os_cwd()
val path = os_path_join(cwd, ".xats-os-smoke.txt")

val () =
if os_file_exists(path)
then os_remove_file(path)
else ()

val () = os_write_text(path, "ATS")
val () = assertloc(os_file_exists(path), "write did not create file")
val () = assertloc(os_read_text(path) = "ATS", "file read mismatch")
val () = os_append_text(path, "-3")
val () = assertloc(os_read_text(path) = "ATS-3", "file append mismatch")
val () = assertloc(os_path_basename(path) = ".xats-os-smoke.txt", "basename mismatch")
val () = assertloc(os_path_dirname(path) = cwd, "dirname mismatch")
val () = assertloc(os_path_extname(path) = ".txt", "extension mismatch")
val () = assertloc(os_path_is_absolute(path), "absolute path query failed")
val () = assertloc(not(os_path_is_absolute(".xats-os-smoke.txt")), "relative path query failed")
val () = assertloc(os_env_get("SHUWAN_OS_SMOKE_MISSING", "fallback") = "fallback", "environment fallback mismatch")
val () = os_env_set("SHUWAN_OS_SMOKE_VALUE", "present")
val () = assertloc(os_env_get("SHUWAN_OS_SMOKE_VALUE", "fallback") = "present", "environment lookup mismatch")
val () = os_chdir(cwd)
val () = assertloc(os_cwd() = cwd, "working directory mismatch")
val () = assertloc(length(os_platform()) > 0, "platform query returned an empty value")
val () = assertloc(os_pid() > 0, "process ID is not positive")
val () = os_remove_file(path)
val () = assertloc(not(os_file_exists(path)), "file removal failed")
val () = printsln("OS interface smoke test passed")
