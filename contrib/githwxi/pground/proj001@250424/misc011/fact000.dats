(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-01-12:
Mon Jan 12 09:26:32 AM EST 2026
*)
(* ****** ****** *)
(* ****** ****** *)
#include
"prelude\
/almanac/HATS/pre2026_sats.hats"
(* ****** ****** *)
(* ****** ****** *)
//
#include
"prelude/HATS/prelude_dats.hats"
#include
"prelude\
/almanac/HATS/pre2026_dats.hats"
#include
"prelude/HATS/prelude_JS_dats.hats"
//
(* ****** ****** *)
(* ****** ****** *)
//
fun
fact_trec
(n: sint): sint =
(
  loop(n, 1)) where
{
fun
loop(i, r) =
(
if (i > 0)
then loop(i-1, i*r) else (r))
}
//
(* ****** ****** *)
(* ****** ****** *)
//
val () =
printsln("fact_trec(10) = ", fact_trec(10))
//
(* ****** ****** *)
(* ****** ****** *)
//
fun
fact_iter
(n: sint): sint =
let
//
#typedef
frame = @(sint, sint)
//
fun//fun
trans(fm: frame): frame =
let
val
(i, r) = fm in//let
(
if(i > 0)then(i-1, i*r)else(i, r))
end//let
//
in(*let*)
//
(
search0
(
f1un_iter(trans, (n, 1))).1
) where
{
#impltmp
search$test1<frame>(fm) = (fm.0 <= 0)}
end//let
//
(* ****** ****** *)
(* ****** ****** *)
//
val () =
printsln("fact_iter(10) = ", fact_iter(10))
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
(* end of [githwxi/pground/proj001@250424/misc011/fact000.dats] *)
(***********************************************************************)
