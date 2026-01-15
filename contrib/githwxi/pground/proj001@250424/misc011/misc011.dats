(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-01-14:
Wed Jan 14 08:36:03 PM EST 2026
Plz find the original version of
this program in DATS/brainfxxk.dats
(written by Gavin Zhao around 2026/01)
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
#include
"prelude/HATS/prelude_JS_dats.hats"
//
(* ****** ****** *)
(* ****** ****** *)
val UCHARMAX = 255
val TAPESIZE = 4096
(*
#define UCHARMAX 255
#define TAPE_SIZE 4096 // not supported
*)
(* ****** ****** *)
(* ****** ****** *)
#typedef cell = uint
#typedef mptr = uint
(* ****** ****** *)
(* ****** ****** *)
excptcon Overflow of ()
excptcon Underflow of ()
excptcon RBNotFound of ()
excptcon LBNotFound of ()
(* ****** ****** *)
(* ****** ****** *)
//
fun
max(x:si, y:si): si =
(
  if x >= y then x else y)
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [githwxi/pground/proj001@250424/misc011/misc011.dats] *)
(***********************************************************************)
