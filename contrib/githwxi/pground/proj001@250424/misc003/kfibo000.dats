(* ****** ****** *)
(* ****** ****** *)
(*
HX-2025-12-27:
Sat Dec 27 10:51:39 PM EST 2025
It is still unclear how one can
streamize a function with multiple
recursive calls!
What is presented below is not
a good answer. It is kept here to
serve as a reference.
*)
(* ****** ****** *)
(* ****** ****** *)
//
#include
"prelude/HATS/prelude_dats.hats"
//
#include
"prelude/HATS/prelude_JS_dats.hats"
#include
"prelude/HATS/prelude_NODE_dats.hats"
//
(* ****** ****** *)
(* ****** ****** *)
//
fun
kfibo
( n0
: sint): sint =
if
(n0 <= 1)
then n0 else
let
//
val ks =
kfibo_strmize(n0)
val ks =
strm_vt_rlistize0(ks)
//
in//let
(
list_vt_folditm0(ks, r0))
where
{
//
val r0:sint = (0)
//
#typedef r0 = sint
#typedef k0 = (sint)->sint
//
#impltmp
folditm$fopr0<k0><r0>(r0, k0) = k0(r0)
}
end(*let*)//end-of-[kfibo(n:sint)]
//
and
kfibo_strmize
( n0
: sint)
: strm_vt((sint)->sint) =
(
if // if1
(n0 <= 1)
then // if1
(
strm_vt_sing
<(sint)->sint>
(
lam
(r0)=>(r0+n0)))
else // if1
$llazy(
strmcon_vt_cons(
lam(r0) =>
(r0 + kfibo(n0-1)), kfibo_strmize(n0-2)))
)(*if(n0<=1)*)//end-of-[kfibo_strmize(n0)]
//
(* ****** ****** *)
(* ****** ****** *)
//
val () =
printsln("kfibo(", 2, ") = ", kfibo(2))
val () =
printsln("kfibo(", 3, ") = ", kfibo(3))
val () =
printsln("kfibo(", 10, ") = ", kfibo(10))
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [githwxi/pground/proj001@250424/misc002/kfibo000.dats] *)
(***********************************************************************)
