(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-11-05:
Thu Nov  5 09:20:27 AM EST 2026
*)
(* ****** ****** *)
(* ****** ****** *)
//
#include
"prelude/HATS/prelude_dats.hats"
#include
"prelude/HATS/prelude_PY_dats.hats"
//
(* ****** ****** *)
//
#staload "./../DATS/types.dats"
#staload "./../DATS/system.dats"
//
(* ****** ****** *)
(* ****** ****** *)
//
val cwd = os_getcwd()
val ( ) = printsln("cwd = ", cwd)
//
val cwd_files = os_listdir(fpath(cwd))
val ( ) = printsln("cwd_files = ", cwd_files)
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(***********************************************************************)
(*
end of
[
XATSHOME/contrib\
/hwxi000/pground/proj002@260404/interop/PY/TEST/test01_interop.dats] *)
(***********************************************************************)
(***********************************************************************)
