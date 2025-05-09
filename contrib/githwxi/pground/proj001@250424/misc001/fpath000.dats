(* ****** ****** *)
(* ****** ****** *)
(*
HX-2025-04-26:
This example shows how
to process file contents.
*)
(* ****** ****** *)
(* ****** ****** *)
//
#include
"prelude/HATS/prelude_dats.hats"
//
#include
"prelude/HATS/prelude_JS_cats.hats"
#include
"prelude/HATS/prelude_JS_dats.hats"
#include
"prelude/HATS/prelude_NODE_dats.hats"
//
(* ****** ****** *)
//
#staload
"./../../..\
/xatslib/DATS/mylib00.dats"
#staload
"./../../..\
/xatslib/DATS/CATS/JS/NODE/mylib00.dats"
//
(* ****** ****** *)
//
(*
val
chars =
g_stdin$char$strmize$exn()
val () =
let
#impltmp
strm_vt_print$len<>() = -1
in//let
  print0s("chars = ", chars, "\n")
end//let
*)
//
(* ****** ****** *)
//
val
cstrm =
fpath_cgtz$strmize$exn
(fpath("./fpath000.dats"))
//
val () =
strm_vt_foritm0$f1un(cstrm, lam c => print(c))
//
(* ****** ****** *)
(* ****** ****** *)
//
(* ****** ****** *)(* ****** ****** *)(* ****** ****** *)
(* ****** ****** *)(* ****** ****** *)(* ****** ****** *)

(* end of [githwxi/pground/proj001@250424/misc001/fpath000.dats] *)
