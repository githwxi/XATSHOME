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
Wed Apr 29 09:30:57 AM EDT 2026
This is Shuwan's original version
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
(*
(*
HX-2026-04-29:
Wed Apr 29 11:44:43 AM EDT 2026
This is Shuwan's original version
*)
fun insert_helper
(x: nint, ys: list0(nint)): list0(nint) =
  case+ ys of
  | list0_nil() => list0_cons(x, list0_nil())
  | list0_cons(y, ys_tail) =>
      if x <= y then 
        list0_cons(x, ys)
      else 
        list0_cons(y, insert_helper(x, ys_tail))

fun insertsort (xs: list0(nint)): list0(nint) =
  case+ xs of
  | list0_nil() => list0_nil()
  | list0_cons(x, xs_tail) => insert_helper(x, insertsort(xs_tail))
*)
//
#extern
fun
list_insertsort(xs: list(sint)): list(sint)
//
#implfun
list_insertsort
(      xs      ) =
(
case+ xs of
|
list_nil() => list_nil(*void*)
|
list_cons(x1, xs) =>
(
helper(x1, list_insertsort(xs)))
) where
{
fun
helper(x1, ys) =
case+ ys of
|
list_nil() => list_cons(x1, list_nil())
|
list_cons(y1, tl) =>
if (x1 <= y1) then // HX: for stableness
list_cons(x1, ys) else list_cons(y1, helper(x1, tl))
}
//
val () = printsln("\
insertsort(1,2,3,4,5,1,2,3,4,5) = ",
list_insertsort(list@(1,2,3,4,5)\append(list@(1,2,3,4,5))))
//
(* ****** ****** *)
(* ****** ****** *)
//
(*
HX-2026-04-29:
This is pretty much
Shuwan's original version
Wed Apr 29 12:00:00 PM EDT 2026
*)
//
fun
list_bubblesort
( xs
: list(sint)): list(sint) =
(
bubblesort_loop
(xs, list_length<sint>(xs))
) where
{
//
fun
bubble_pass
(xs: list(sint)): list(sint) =
case+ xs of
|
list_nil
((*0*)) => list_nil()
|
list_cons
(x, tail1) =>
(
case+ tail1 of
|
list_nil() =>
list_cons(x, list_nil())
|
list_cons(y, tail2) =>
(
if x > y then 
list_cons(y,
  bubble_pass(list_cons(x, tail2)))
else 
(
  list_cons(x, bubble_pass(tail1))))
)
//
fnx
bubblesort_loop
(
xs:
list(sint), n: sint): list(sint) =
(
if n <= 1 then xs else 
bubblesort_loop(bubble_pass(xs), n - 1))
//
}(*where*)//end-of-[list_bubblesort(xs:list(sint)]
//
val () = printsln("\
bubblesort(1,2,3,4,5,1,2,3,4,5) = ",
list_bubblesort(list@(1,2,3,4,5)\append(list@(1,2,3,4,5))))
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [hwxi000/pground/proj002@260404/shuwan/sorting.dats] *)
(***********************************************************************)
