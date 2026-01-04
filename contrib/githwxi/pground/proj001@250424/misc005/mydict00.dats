(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-01-01:
Thu Jan  1 05:54:01 PM EST 2026
*)
(* ****** ****** *)
(* ****** ****** *)
#include
"prelude\
/almanac/HATS/pre2026_sats.hats"
(* ****** ****** *)
(* ****** ****** *)
//
#include
"prelude/HATS/prelude_dats.hats"
#include
"prelude\
/almanac/HATS/pre2026_dats.hats"
//
(* ****** ****** *)
//
#if
defq(_XATS2PY_)
#include
"prelude/HATS/prelude_PY_dats.hats"
#endif//#ifdefq
//
#if
defq(_XATS2JS_)
#include
"prelude/HATS/prelude_JS_dats.hats"
#include
"prelude/HATS/prelude_NODE_dats.hats"
#endif//#ifdefq
//
(* ****** ****** *)
(* ****** ****** *)
//
#staload
"./../../..\
/xatslib/DATS/mylib00.dats"
//
#if
defq(_XATS2PY_)
#staload
"./../../..\
/xatslib/DATS/CATS/PY/mylib00.dats"
#endif//#ifdefq
//
#if
defq(_XATS2JS_)
#staload
"./../../..\
/xatslib/DATS/CATS/JS/NODE/mylib00.dats"
#endif//#ifdefq
//
(* ****** ****** *)
(* ****** ****** *)
//
val
words_cstrm =
fpath_cgtz$strmize$exn
(
fpath(
"/usr/share/dict/words"))
//
(* ****** ****** *)
//
(*
val
_(*bool*) =
strm_vt_iforall0$f2un<cgtz>
(
words_cstrm,
lam(i, c) =>
if (i < 100)
then (print(c); true) else false)
*)
//
(* ****** ****** *)
(* ****** ****** *)
//
fun
strm$cgtz_vt_line$split_lstrm$strn
  (cs: strm_vt(cgtz)): strm_vt(strn) =
(
strm_vt_map0$f1un<rs>
(css, lam(cs) => strn_make_llist(cs))
) where
{
#typedef
c0 = cgtz
#vwtpdef
cs = strm_vt(cgtz)
#vwtpdef
rs = list_vt(cgtz)
val css =
gseq_segmentize0$f1un_lstrm$llist<cs><c0>(cs, lam(ch) => (ch = '\n'))
}(*let*)//end-of-[strm$cgtz_vt_line$split_lstrm$strn]
//
(* ****** ****** *)
(* ****** ****** *)
//
val
words_wstrm =
strm$cgtz_vt_line$split_lstrm$strn
  (words_cstrm)
//
(*
val
_(*bool*) =
strm_vt_iforall0$f2un<strn>
(
words_wstrm,
lam(i, w) =>
if (i < 100)
then (println(w); true) else false)
*)
//
(* ****** ****** *)
(* ****** ****** *)
//
fun
wtest1
( xs: strn
, c0: char): bool =
gseq_exists
<strn><char>(xs) where
{
#impltmp
exists$test<char>(x0) = (c0 = x0)
}
//
(* ****** ****** *)
//
fun
wtest2
( xs: strn
, cs: strn): bool =
gseq_forall
<strn><char>(xs) where
{
#impltmp
forall$test<char>(x0) = wtest1(cs, x0)
}
//
(* ****** ****** *)
(* ****** ****** *)
//
fun
spelling$main
( ws
: strm_vt
  ( strn )
, c1: char
, cs: strn)
: strm_vt(strn) =
(
strm_vt_filter0(ws))
where
{
//
#impltmp
filter$test1
<strn>( w0 ) =
(
if
(
length(w0)<6)
then false else
(
if // if
wtest1(w0, c1)
then wtest2(w0, cs) else false))
//
}(*where*)//end-of-[spelling$game(ws,c1,cs)]
//
(* ****** ****** *)
(* ****** ****** *)
//
val
solns_wstrm =
spelling$main(words_wstrm, 'y', "aecinty")
//
val
_(*bool*) =
strm_vt_iforall0$f2un<strn>
(
solns_wstrm,
lam(i, w) =>
if (i < 100) then (println(w); true) else false)
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [githwxi/pground/proj001@250424/misc004/mydict00.dats] *)
(***********************************************************************)
