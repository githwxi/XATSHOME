(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-04-29:
Wed Apr 29 09:28:28 AM EDT 2026
*)
(* ****** ****** *)
(* ****** ****** *)
//
(*
HX-2026-04-29:
This one for ATS3/prelude
*)
#include
"prelude/HATS/prelude_dats.hats"
//
(*
HX-2026-04-29:
This one for ATS3/prelude/JS
*)
#include
"prelude/HATS/prelude_JS_dats.hats"
//
(*
HX-2026-04-29:
This one for ATS3/prelude/JS/NODE
*)
#include
"prelude/HATS/prelude_NODE_dats.hats"
//
(* ****** ****** *)
(* ****** ****** *)
//
(*
(*
HX-2026-04-29:
This is Shuwan's original version
Wed Apr 29 09:30:57 AM EDT 2026
*)
fun quicksort (xs: list0(nint)): list0(nint) =
  case+ xs of
  | list0_nil() => list0_nil()
  | list0_cons(pivot, rest) => 
      let
        val lesser = list0_filter<nint>(rest, lam(x) => x <= pivot)
        val greater = list0_filter<nint>(rest, lam(x) => x > pivot)
      in
        list0_append<nint>(quicksort(lesser), list0_cons(pivot, quicksort(greater)))
      end
*)
//
(* ****** ****** *)
//
(*
//
HX-2026-04-29:
Naming convention:
'list' in 'list_quicksort' is the object
'quicksort' in 'list_quicksort' is the verb phrase
//
HX-2026-04-29:
This is really not quicksort
as the pivot is not chosen in a randomized manner!!!
//
*)
//
#extern
fun
list_quicksort
(xs: list(sint)): list(sint)
//
#implfun
list_quicksort
(     xs     ) =
(
case+ xs of
|
list_nil() =>
list_nil((*0*))
|
list_cons(x1, xs) =>
let
//
val pivot = x1
val lesser =
filter // list_filter$f1un
(xs, lam(x: sint) => x <= pivot)
val greater =
filter // list_filter$f1un
(xs, lam(x: sint) => x  >  pivot)
//
in//let
//
list_append(
list_quicksort(lesser),
list_cons(x1, list_quicksort(greater)))
//
end(*let*)//end-of-[list_cons(x1,xs)]
)
//
val () = printsln("\
quicksort(1,2,3,4,5,1,2,3,4,5) = ",
list_quicksort(list@(1,2,3,4,5)\append(list@(1,2,3,4,5))))
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [hwxi000/pground/proj002@260404/shuwan/coin2.dats] *)
(***********************************************************************)
