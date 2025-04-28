(* ****** ****** *)
(* ****** ****** *)
(*
HX-2025-04-28:
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
"prelude/HATS/prelude_PY_dats.hats"
//
(* ****** ****** *)
//
#staload
"./../../..\
/xatslib/DATS/mylib00.dats"
#staload
"./../../..\
/xatslib/DATS/CATS/PY/mylib00.dats"
//
(* ****** ****** *)
//
val
cstrm =
fpath_cgtz$strmize$exn
(fpath("./fpath000.dats"))
val () =
strm_vt_foritm0$f1un(cstrm, lam c => print(c))
//
(* ****** ****** *)
(* ****** ****** *)
//
(* ****** ****** *)(* ****** ****** *)(* ****** ****** *)
(* ****** ****** *)(* ****** ****** *)(* ****** ****** *)

(* end of [githwxi/pground/proj001@250424/misc002/fpath000.dats] *)
