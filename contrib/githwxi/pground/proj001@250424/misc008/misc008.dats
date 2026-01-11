(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-01-11:
Sun Jan 11 12:05:43 AM EST 2026
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
datatype
mytree(a:t0) =
E | B of (a, mytree(a), mytree(a))
//
(* ****** ****** *)
(* ****** ****** *)
//
fun
<a:t0>
mytree_preorder$strmize
( xs
: mytree(a)): strm_vt(a) =
(
  auxmain(xs)) where
{
//
fun
auxmain
( xs
: mytree(a)) = $llazy(
//
case+ xs of
|E((*void*)) =>
(
strmcon_vt_nil(*void*))
|B(x1, tl, tr) =>
(
strmcon_vt_cons(x1,
  strm_vt_append00(auxmain(tl), auxmain(tr)))))
}(*where*)//end-of-[mytree_preorder$strmize(xs:mytree(a))]
//
(* ****** ****** *)
(* ****** ****** *)
//
#impltmp
{ a:t0 }
gseq_strmize
<mytree(a)><a> = mytree_preorder$strmize<a>
//
(* ****** ****** *)
(* ****** ****** *)
//
fun
<a:t0>
mytree_size
(xs: mytree(a)): sint = gseq_length<mytree(a)><a>(xs)
//
(* ****** ****** *)
(* ****** ****** *)
//
val
mytree1 =
B(1, B(2, E(), E()),
  B(3, E(), B(4, E(), E())))
val
mytree2 = B(5, mytree1, mytree1)
//
val
((*0*)) = printsln("\
length(mytree1) = ", mytree_size(mytree1))
val
((*0*)) = printsln("\
length(mytree2) = ", mytree_size(mytree2))
//
(* ****** ****** *)
(* ****** ****** *)
//
val () = console_log(the_print_store_flush((*void*)))
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [githwxi/pground/proj001@250424/misc007/misc008.dats] *)
(***********************************************************************)
