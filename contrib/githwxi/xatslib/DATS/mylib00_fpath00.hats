(* ****** ****** *)
(* ****** ****** *)
(*
HX-2025-04-25:
For processing file paths
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
#symload fpath with fpath_encode
//
(* ****** ****** *)
(* ****** ****** *)
//
#extern
fun<>
fpath_char$strmize$exn
  (fpx: fpath): strm_vt(char)
#extern
fun<>
fpath_cgtz$strmize$exn
  (fpx: fpath): strm_vt(cgtz)
//
(* ****** ****** *)
//
#impltmp
<(*tmp*)>
fpath_cgtz$strmize$exn
  (fpx) =
(
strm_vt_filter0(
fpath_char$strmize$exn<>(fpx))
)
where
{
#typedef x0 = char
#typedef y0 = cgtz
#impltmp
filter$test1<x0><y0>(c0) = neqz(c0)
}
//
(* ****** ****** *)
(* ****** ****** *)
//
#extern
fun<>
g_stdin$char$strmize$exn
  ( (*void*) ): strm_vt(char)
#extern
fun<>
g_stdin$chunk$strmize$exn
  ( (*void*) ): strm_vt(strn)
//
(* ****** ****** *)
//
#impltmp
<(*tmp*)>
g_stdin$char$strmize$exn
  ( (*void*) ) =
(
auxmain
(
g_stdin$chunk$strmize$exn())
) where
{
fun
auxmain
(xs: strm_vt(strn)) =
$llazy(
case+ !xs of
| ~
strmcon_vt_nil() => strmcon_vt_nil()
| ~
strmcon_vt_cons(x1, xs) => !
strm_vt_append00(strn_strmize(x1), auxmain(xs))
)//$llazy
}(*where*)//end-of-[impltmp(g_stdin$char$strmize$exn)]
//
(* ****** ****** *)
(* ****** ****** *)
//
(* ****** ****** *)(* ****** ****** *)(* ****** ****** *)
(* end of [XATSHOME/contrib/githwxi/xatslib/DATS/mylib00_fpath00.hats]
(* ****** ****** *)(* ****** ****** *)(* ****** ****** *)
