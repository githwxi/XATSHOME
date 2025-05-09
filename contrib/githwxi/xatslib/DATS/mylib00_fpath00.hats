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
//
(* ****** ****** *)
//
#extern
fun<>
g_stdin$line$strmize$exn
  ( (*void*) ): strm_vt(strn)
//
(* ****** ****** *)
//
#extern
fun<>
g_stdin$chunk$bufsz
  ( (*void*) ): sintgte(1)
#impltmp
<(*tmp*)>
g_stdin$chunk$bufsz() = 1024
//
#extern
fun<>
g_stdin$chunk$strmize$exn
  ( (*void*) ): strm_vt(strn)
//
(* ****** ****** *)
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
#impltmp
<(*tmp*)>
g_stdin$line$strmize$exn
  ( (*void*) ) =
let
val cs =
g_stdin$char$strmize$exn<>
  ( (*void*) )
//
in//let
//
$llazy
(
auxloop(cs, list_vt_nil())
) where
{
//
#define rev0 = list_vt_reverse0
//
fnx
auxloop
( cs
: strm_vt(char)
, rs
: list_vt(char)): strmcon_vt(strn) =
(
case+ !cs of
|
strmcon_vt_nil() =>
(
case+ rs of
|
list_vt_nil() =>
strmcon_vt_nil()
|
list_vt_cons _ =>
strmcon_vt_cons(strn(rev0(rs)), strm_vt_nil())
)
|
strmcon_vt_cons(c1, cs) =>
if
(c1 != '\n')
then
auxloop(cs, list_vt_cons(c1, rs))
else
strmcon_vt_cons
(strn(rev0(rs)), $llazy(auxloop(cs, list_vt_nil())))
)(*case+*)//end-of-[auxloop(cs, rs)]
}(*where*)//end-of-[auxloop(cs, list_vt_nil())]
//
end(*let*)//end-of-[impltmp(g_stdin$line$strmize$exn)]
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [XATSHOME/contrib/githwxi/xatslib/DATS/mylib00_fpath00.hats]
(***********************************************************************)
