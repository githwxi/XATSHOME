(* ****** ****** *)
(* ****** ****** *)
(*
HX-2025-12-25:
For testing lsrt (sorted list)
Thu Dec 25 02:39:15 PM EST 2025
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
<x0:t0>
insrtsort
( xs
: list(x0)): lsrt(x0) =
(
  loop(xs, lsrt_nil()))
where
{
//
val xs = list_reverse_vt(xs)
//
fun
loop(xs, rs) =
(
case+ xs of
| ~
list_vt_nil() => rs
| ~
list_vt_cons(x1, xs) =>
(
loop(xs, lsrt_insert<x0>(rs, x1))))
//
}(*where*)//end-of-[insrtsort<x0>(xs)]
//
(* ****** ****** *)
(* ****** ****** *)
//
val xs =
appends(
  list@(3,1,4,6,2)
, list@(8,9,0,7,5))
val () = printsln("xs(bef) = ", xs)
val xs = insrtsort<sint>(xs)
val () = printsln("xs(aft) = ", xs)
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
(* end of [githwxi/pground/proj001@250424/misc004/insrt000.dats] *)
(***********************************************************************)
