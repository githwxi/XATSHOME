(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-01-07:
For testing gdbg000 functions
Wed Jan  7 01:43:49 AM EST 2026
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
<a:t0>
listrev
( xs
: list(a)): list(a) =
(
  auxmain(xs)) where
{
//
fun
auxmain
(xs: list(a)): list(a) =
g_debug(
(
case+ xs of
|
list_nil() => list_nil()
|
list_cons(x1, xs) =>
list_extend(auxmain(xs), x1)))
where
{
#typedef
rs = list(a)
#impltmp
g_debug<rs>(rs) =
(
g_debug<rs>(rs)) where
{
val () = prints("\
listrev:auxmain(", xs, ") = ")}
}
//
}(*where*)//end-of-[listrev<a>(xs)]
//
(* ****** ****** *)
(* ****** ****** *)
//
val xs =
list_vt2t(nint_listize(10))
val () = printsln("xs = ", xs)
val ys = listrev<nint>(xs)
val () = printsln("ys = ", ys)
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
(* end of [githwxi/pground/proj001@250424/misc006/debug001.dats] *)
(***********************************************************************)
