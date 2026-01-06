(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-01-02:
Fri Jan  2 10:52:14 AM EST 2026
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
#include
"prelude/HATS/prelude_JS_dats.hats"
//
(* ****** ****** *)
(* ****** ****** *)
//
#extern
fun
spelling$main
( dt: strn
, c1: cgtz, cs: strn): strm_vt(strn)
//
#extern
fun
spelling$filter
( ws
: strm_vt(strn)
, c1: cgtz, cs: strn): strm_vt(strn)
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
#implfun
gseq_strmize0
<strn><cgtz> =
gasq_strmize<strn><cgtz>
//
(* ****** ****** *)
//
#implfun
spelling$main
(dt, c1, cs) =
let
val ws =
dict_line$split(dt)
in//let
spelling$filter(ws, c1, cs)
end where // end-of-(let)
{
//
(*
val () =
printsln("spelling$main: dt = ", dt)
*)
//
fun
dict_line$split
 ( dt: strn ): strm_vt(strn) =
(
strm_vt_map0$f1un<rs>(css, lam(cs) => strn_make_llist(cs))
) where
{
#typedef
c0 = cgtz
#vwtpdef
cs = strn
#vwtpdef
rs = list_vt(cgtz)
val css =
gseq_segmentize0$f1un_lstrm$llist<cs><c0>(dt, lam(ch) => (ch = '\n'))
}(*where*)//end-of-[dict_line$split(dt)]
//
}(*where*)//end-of-[spelling$main(dt,c1,cs)]
//
(* ****** ****** *)
(* ****** ****** *)
//
#implfun
spelling$filter
(ws, c1, cs) =
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
where
{
(*
val () =
printsln("spelling$filter: w0 = ", w0)
*)
}
//
}(*where*)//end-of-[spelling$filter(ws,c1,cs)]
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(*
The end of
[XATSHOME/contrib/githwxi/pground/proj002@250507/misc010/spelling.dats]
*)
(***********************************************************************)
