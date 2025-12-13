#include
"prelude/HATS/prelude_dats.hats"
#include
"prelude/HATS/prelude_JS_dats.hats"

#extern
fun
DATS_hello$onclick
(work: strn -> void): void = $extnam()
#implfun
DATS_hello$onclick(work) = work("Hello from ATS3!")

(***********************************************************************)
(*
The end of
[XATSHOME/contrib/githwxi/pground/proj002@250507/misc001/hello.dats] *)
(***********************************************************************)
