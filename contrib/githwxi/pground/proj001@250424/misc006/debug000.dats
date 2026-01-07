(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-01-06:
For testing gdbg000 functions
Tue Jan  6 11:26:47 PM EST 2026
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
fact(n: nint): nint =
g_debug(
if n > 0
then n*fact(n-1) else 1)
where
{
#typedef
x0 = nint
#impltmp
g_debug<x0>(x0) =
(
g_debug<x0>(x0)) where
{
val () = prints("\
debug: fact(", n, ") = ")}}
//
(* ****** ****** *)
//
val fact10 = fact(10)
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
(* end of [githwxi/pground/proj001@250424/misc006/debug000.dats] *)
(***********************************************************************)
