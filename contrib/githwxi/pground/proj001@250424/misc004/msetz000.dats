(* ****** ****** *)
(* ****** ****** *)
(*
HX-2025-12-26:
Fri Dec 26 08:51:20 PM EST 2025
*)
(* ****** ****** *)
(* ****** ****** *)
//
#include
"prelude/HATS/prelude_dats.hats"
#include
"prelude/HATS/prelude_JS_dats.hats"
//
(* ****** ****** *)
(* ****** ****** *)
//
fun
strn_msetize(cs: strn) =
lsrt_msetize(
UN_lsrt_encd(
list_vt2t(mergesort0(listize(cs)))))
//
(* ****** ****** *)
(* ****** ****** *)
//
val mcs =
strn_msetize("hello, world!")
local
#impltmp
g_print<char>(ch) =
prints("'", ch, "'")
in//local
val ( ) = printsln("mcs = ", mcs)
end//local
//
(* ****** ****** *)
(* ****** ****** *)
//
val () =
console_log(the_print_store_flush((*void*)))
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [githwxi/pground/proj001@250424/misc004/msetz000.dats] *)
(***********************************************************************)
