(* ****** ****** *)
(* ****** ****** *)
#include
"prelude/HATS/prelude_dats.hats"
#include
"prelude/HATS/prelude_JS_dats.hats"
(* ****** ****** *)
(* ****** ****** *)
#extern
fun<>
spelling$main
  ((*void*)): strm_vt(strn)
(* ****** ****** *)
//
#extern
fun<>
spelling$char1((*0*)): char
#extern
fun<>
spelling$chars((*0*)): strn
#extern
fun<>
spelling$words((*0*)): strm_vt(strn)
//
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
//
#impltmp
spelling$main
<(*tmp*)>((*void*)) =
(
strm_vt_filter0
(
  spelling$words<>()))
where
{
//
val c0 = spelling$char1<>()
val cs = spelling$chars<>()
//
#impltmp
filter$test0<strn>(w0) =
if wtest1(w0, c0) then wtest2(w0, cs) else false
}
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
