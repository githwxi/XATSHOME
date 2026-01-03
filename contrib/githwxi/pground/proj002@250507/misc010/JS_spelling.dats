(* ****** ****** *)
(* ****** ****** *)
#staload UN =
"prelude/SATS/unsfx00.sats"
(* ****** ****** *)
#staload SP = "./spelling.dats"
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
(* ****** ****** *)
//
#include
"prelude/HATS/prelude_JS_cats.hats"
#include
"prelude/HATS/prelude_JS_dats.hats"
//
(* ****** ****** *)
(* ****** ****** *)
//
#extern
fun
JS_spelling_arg0
  ( (*void*) ): strn = $extnam()
#extern
fun
JS_spelling_arg1
  ( (*void*) ): strn = $extnam()
#extern
fun
JS_spelling_dict
  ( (*void*) ): strn = $extnam()
//
(* ****** ****** *)
(* ****** ****** *)
//
#impltmp
<(*tmp*)>
char_lower
 ( c0 ) =
(
if
(c0 < 'A')
then c0 else
if
(c0 > 'Z')
then c0 else ('a'+(c0-'A')))
//
(* ****** ****** *)
//
fun
JS_spelling_char1
 ((*void*)): cgtz =
let
val cs =
JS_spelling_arg0()
in//let
char_lower(
$UN.strn_head$raw(cs))
end//end(JS_spelling_char1())
//
fun
JS_spelling_chars
  ((*void*)): strn =
strn_lower<>(JS_spelling_arg1())
//
(* ****** ****** *)
(* ****** ****** *)
//
#extern
fun
JS_spelling$main
  ( (*void*) ): void = $extnam()
//
#implfun
JS_spelling$main
  ( (*void*) ) =
let
//
val dt =
JS_spelling_dict()
val c1 =
JS_spelling_char1()
val cs =
JS_spelling_chars()
//
val solns =
$SP.spelling$main(dt, c1, cs)
//
in//let
//
let
val solns =
strm_vt_listize0(solns)
in//let
(
list_vt_iforitm0<strn>(solns))
where
{
#impltmp
iforitm$work0
<strn>(i, sol) = printsln("Word(", i+1, "): ", sol) }
end//let
//
end//let//end-of-[JS_spelling$main()]
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(*
The end of
[XATSHOME/contrib/githwxi/pground/proj002@250507/misc010/JS_spelling.dats]
*)
(***********************************************************************)
