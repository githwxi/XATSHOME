(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-01-04:
Sun Jan  4 11:22:57 AM EST 2026
*)
(* ****** ****** *)
(* ****** ****** *)
//
#staload
"./../misc008/gtree.dats"
//
(* ****** ****** *)
(* ****** ****** *)
//
(*
HX-2026-01-04:
For getting the subtrees
Tue Dec 23 11:19:09 AM EST 2025
*)
#extern
fun
<node:t0>
ggrph$node_equal
( nd1: node
, nd2: node): bool
#extern
fun
<node:t0>
ggrph$node_adjs$get
(nd0: node): strm_vt(node)
//
#extern
fun
<node:t0>
ggrph$node_bfs$strmize
(nd0: node): strm_vt(node)
#extern
fun
<node:t0>
ggrph$nodelst_bfs$strmize
(nds: strm_vt(node)): strm_vt(node)
//
(* ****** ****** *)
(* ****** ****** *)
//
#impltmp
<node:t0>
ggrph$node_equal
  (*nd1,nd2*) =
g_equal<node>(*nd1,nd2*)
//
(* ****** ****** *)
(* ****** ****** *)
//
#impltmp
<node:t0>
ggrph$node_bfs$strmize
  ( node ) =
let
val nds0 =
strm_vt_sing(node)
in//let
ggrph$nodelst_bfs$strmize<node>(nds0)
end(*let*)//end-of-[ggrph$node_bfs$strmize(node)]
//
(* ****** ****** *)
(* ****** ****** *)
//
(*
HX-2026-01-04:
This one does not
address the issue of cycles!
Sun Jan  4 12:41:26 PM EST 2026
*)
#impltmp
<node:t0>
ggrph$nodelst_bfs$strmize
  (  nds  ) =
(
gtree$nodelst_bfs$strmize
<    node    >(    nds    )
) where
{
#impltmp
gtree$node_subs$get
<  node  >(  nd0  ) =
(
  ggrph$node_adjs$get<node>(nd0))
}(*where*)//end-of-[ggrph$nodelst_bfs$strmize(node)]
//
(* ****** ****** *)
(* ****** ****** *)
//
#impltmp
<node:t0>
ggrph$nodelst_bfs$strmize
  (  nds  ) =
let
//
(*
HX-2026-01-05:
This ref
acts like a channel!
*)
val c00 =
ref(list_nil<node>())
//
in//let
(
auxmain(res, c00)) where
{
//
#typedef
nds1 = list(node)
#vwtpdef
nds2 = strm_vt(node)
//
val res =
let
#impltmp
gtree$node_subs$get
<  node  >(  nd0  ) =
strm_vt_filter0
(
ggrph$node_adjs$get<node>(nd0))
where
{
//
#impltmp
filter$test1
<node>( nd1 ) =
(
  not(list_memberq(c00[], nd1)))
where
{
#impltmp
g_equal<node> =
ggrph$node_equal<node>(*nd1,nd2*) }
//
}
in//let
(
gtree$nodelst_bfs$strmize<node>(nds))
end//let
//
fun
auxmain
(
nds: nds2,
c00: ref(nds1)): nds2 =
$llazy(
//
case+ !nds of
|
strmcon_vt_nil
(  (*void*)  ) =>
(
  strmcon_vt_nil(*void*))
|
strmcon_vt_cons
(  nd1 , nds  ) =>
let
val () =
(c00[] := list_cons(nd1, c00[]))
in//let
strmcon_vt_cons(nd1, auxmain(nds, c00))
end//let
//
)(*case+*)//end(auxmain(nds:nds2,c00:ref(nds1)))
//
}(*where*)
end(*let*)//end-of-[ggrph$nodelst_bfs$strmize(node)]
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(*
The end of
[XATSHOME/contrib/githwxi/pground/proj002@250507/misc011/ggrph.dats]
*)
(***********************************************************************)
