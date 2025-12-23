(* ****** ****** *)
(* ****** ****** *)
(*
HX-2025-12-23:
Tue Dec 23 01:25:40 PM EST 2025
*)
(* ****** ****** *)
(* ****** ****** *)
//
(*
HX-2025-12-23:
For getting the subtrees
Tue Dec 23 11:19:09 AM EST 2025
*)
#extern
fun
<node:t0>
gtree$node_subs$get
(nd0: node): strm_vt(node)
//
#extern
fun
<node:t0>
gtree$node_bfs$enumerate
(nd0: node): strm_vt(node)
#extern
fun
<node:t0>
gtree$nodelst_bfs$enumerate
(nds: strm_vt(node)): strm_vt(node)
//
(* ****** ****** *)
(* ****** ****** *)
//
#impltmp
<node:t0>
gtree$node_bfs$enumerate
  ( node ) =
let
val nds0 =
strm_vt_sing(node)
in//let
gtree$nodelst_bfs$enumerate<node>(nds0)
end//let//end-of-[gtree$node_bfs$enumerate(node)]
//
(* ****** ****** *)
//
#impltmp
<node:t0>
gtree$nodelst_bfs$enumerate
  ( nds0 ) =
(
  auxmain(frst, r1st, r2st)
) where
{
//
val frst = nds0
val r1st = list_vt_nil(*void*)
val r2st = list_vt_nil(*void*)
//
fun
auxmain
( frst
: strm_vt(node)
, r1st
: list_vt
  (strm_vt(node))
, r2st
: list_vt
  (strm_vt(node))): strm_vt(node) =
$llazy(
//
case+ !frst of
//
| ~
strmcon_vt_nil
(  (*void*)  ) =>
(
//
case+ r1st of
| ~
list_vt_nil
(  (*void*)  ) =>
(
case+ r2st of
| ~
list_vt_nil() =>
(
  strmcon_vt_nil())
| // !
list_vt_cons _ =>
let
val r1st =
list_vt_reverse0(r2st)
val r2st = list_vt_nil()
in//let
let
val-
list_vt_cons
(frst, r1st) = r1st in//let
!
(
  auxmain(frst, r1st, r2st))
end//let
end//let
//
)(*case+*)//endof(nilq(r1st))
| ~
list_vt_cons
( nds1 , r1st ) =>
!
(
  auxmain(nds1, r1st, r2st)))
//
| ~
strmcon_vt_cons
( node , frst ) =>
let
//
val r2st =
// HX: breadth-first!
(
list_vt_cons(subs, r2st))
where{
val subs =
gtree$node_subs$get<node>(node)}
in//let
(
  strmcon_vt_cons
  (node, auxmain(frst, r1st, r2st)))
end//let//end-of-[strmcon_vt_cons(node,frst)]
//
)(*case+*)//(*llazy*)//end-of-[auxmain(frst,...)]
//
}(*where*)//end-of-[gtree$nodelst_bfs$enumerate(nds)]
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(*
The end of
[XATSHOME/contrib/githwxi/pground/proj002@250507/misc008/gtree.dats]
*)
(***********************************************************************)
