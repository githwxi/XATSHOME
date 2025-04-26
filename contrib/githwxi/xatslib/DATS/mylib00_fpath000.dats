(* ****** ****** *)
(* ****** ****** *)
(*
HX-2025-04-25:
For printing linear streams
Fri Apr 25 07:58:44 PM EDT 2025
*)
(* ****** ****** *)
(* ****** ****** *)
#staload
"xatslib\
/libcats/DATS/gbas000.dats"
(* ****** ****** *)
(* ****** ****** *)
//
#abstype
fpath_tbox <= p0tr
//
#typedef fpath = fpath_tbox
//
(* ****** ****** *)
(* ****** ****** *)
//
#extern
fcast
fpath_encode(strn): fpath
#extern
fcast
fpath_decode(fpath): (strn)
//
(* ****** ****** *)
(* ****** ****** *)
//
#extern
fun
fpath_char$strmize
  (fpx: fpath): strm_vt(char)
#extern
fun
fpath_line$strmize
  (fpx: fpath): strm_vt(strn)
//
(* ****** ****** *)
(* ****** ****** *)
//
#extern
fun
g_stdin$char$strmize
  ( (*void*) ): strm_vt(char)
#extern
fun
g_stdin$line$strmize
  ( (*void*) ): strm_vt(strn)
//
(* ****** ****** *)
//
#impltmp
<(*tmp*)>
g_stdin$line$strmize
  ((*void*)) =
(
auxloop((*0*))) where
{
fun
auxloop((*0*)) = $llazy
(
let
//
val sopt =
g_stdin$line$opt<>((*0*))
//
in//let
//
case+ sopt of
| ~
optn_vt_nil() =>
strmcon_vt_nil()
| ~
optn_vt_cons(ln) =>
strmcon_vt_cons(ln, auxloop()) end)
}(*where*)//end-of-[g_stdin$line$strmize())]
//
(* ****** ****** *)
//
(* ****** ****** *)(* ****** ****** *)(* ****** ****** *)
(* end of [XATSHOME/contrib/githwxi/xatslib/DATS/mylib00_fpath000.dats]
(* ****** ****** *)(* ****** ****** *)(* ****** ****** *)
