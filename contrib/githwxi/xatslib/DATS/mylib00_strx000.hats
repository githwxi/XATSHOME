(* ****** ****** *)
(* ****** ****** *)
(*
HX-2025-05-01:
For processing strx-values
(representing infinite streams)
Thu May  1 04:31:37 PM EDT 2025
*)
(* ****** ****** *)
(* ****** ****** *)
//
#extern
fun
<x0:vt>
<y0:vt>
strx_vt_map0_lstrm
(xs: ~strx_vt(x0)): strm_vt(y0)
//
#impltmp
<x0:vt>
<y0:vt>
strx_vt_map0
 (  xs  ) =
(
  auxmain(xs)) where
{
fun
auxmain
( xs:
~ strx_vt(x0)): strx_vt(y0) = $llazy
(
case+ !xs of
| ~
strxcon_vt_cons(x0, xs) =>
strxcon_vt_cons(map$fopr0<x0><y0>(x0), auxmain(xs))
)
}
//
#impltmp
<x0:vt>
<y0:vt>
strx_vt_map0_lstrm
 (  xs  ) =
(
  auxmain(xs)) where
{
fun
auxmain
( xs:
~ strx_vt(x0)): strm_vt(y0) = $llazy
(
case+ !xs of
| ~
strxcon_vt_cons(x0, xs) =>
strmcon_vt_cons(map$fopr0<x0><y0>(x0), auxmain(xs))
)
}
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [XATSHOME/contrib/githwxi/xatslib/DATS/mylib00_strx000.hats]
(***********************************************************************)
