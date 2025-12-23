(* ****** ****** *)
(* ****** ****** *)
(*
HX-2025-12-22:
Mon Dec 22 11:07:16 PM EST 2025
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
gtree$node_dfs$enumerate
(nd0: node): strm_vt(node)
#extern
fun
<node:t0>
gtree$nodelst_dfs$enumerate
(nds: strm_vt(node)): strm_vt(node)
//
(* ****** ****** *)
(* ****** ****** *)
//
#impltmp
<node:t0>
gtree$node_dfs$enumerate
  ( node ) =
let
val nds0 =
strm_vt_sing(node)
in//let
gtree$nodelst_dfs$enumerate<node>(nds0)
end//let//end-of-[gtree$node_dfs$enumerate(node)]
//
(* ****** ****** *)
//
#impltmp
<node:t0>
gtree$nodelst_dfs$enumerate
  ( nds0 ) =
(
  auxmain(frnt, rest)) where
{
//
val frnt = nds0
val rest = list_vt_nil(*void*)
//
fun
auxmain
( frnt
: strm_vt(node)
, rest
: list_vt
  (strm_vt(node))): strm_vt(node) =
$llazy(
case+ !frnt of
//
| ~
strmcon_vt_nil
(  (*void*)  ) =>
(
case+ rest of
| ~
list_vt_nil
(  (*void*)  ) =>
(
  strmcon_vt_nil())
| ~
list_vt_cons
( nds1 , rest ) => !
(
  auxmain(nds1, rest)))
//
| ~
strmcon_vt_cons
( node , frnt ) =>
let
val rest =
list_vt_cons(frnt, rest)
val frnt = // HX: depth-first!
gtree$node_subs$get<node>(node)
in//let
strmcon_vt_cons(node, auxmain(frnt, rest))
end//let//end-of-[strmcon_vt_cons(node,frnt)]
)(*case+*)//(*llazy*)//end-of-[auxmain(frnt,rest)]
//
}(*where*)//end-of-[gtree$nodelst_dfs$enumerate(nds)]
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(*
The end of
[XATSHOME/contrib/githwxi/pground/proj002@250507/misc007/gtree.dats]
*)
(***********************************************************************)
