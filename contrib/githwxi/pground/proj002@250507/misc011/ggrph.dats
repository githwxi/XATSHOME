(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-01-04:
Sun Jan  4 11:22:57 AM EST 2026
*)
(* ****** ****** *)
(* ****** ****** *)
//
#staload "./../misc008/gtree.dats"
//
(* ****** ****** *)
(* ****** ****** *)
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
ggrph$node_bfs$strmize
  ( node ) =
let
val nds0 =
strm_vt_sing(node)
in//let
ggrph$nodelst_bfs$strmize<node>(nds0)
end//let//end-of-[ggrph$node_bfs$strmize(node)]
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
