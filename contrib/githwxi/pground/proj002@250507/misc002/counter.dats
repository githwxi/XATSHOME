(* ****** ****** *)
(* ****** ****** *)
#include
"prelude/HATS/prelude_dats.hats"
#include
"prelude/HATS/prelude_JS_dats.hats"
(* ****** ****** *)
(* ****** ****** *)
#extern
fun
DATS_Up$button$onclick
(work: strn -> void): void = $extnam()
#extern
fun
DATS_Down$button$onclick
(work: strn -> void): void = $extnam()
#extern
fun
DATS_Reset$button$onclick
(work: strn -> void): void = $extnam()
(* ****** ****** *)
(* ****** ****** *)
//
val theCount = a0rf(0)
//
(* ****** ****** *)
//
#implfun
DATS_Up$button$onclick
  (update) =
(
  update(tostr(n0+1)))
where
{
val n0 = a0rf_get(theCount)
val () = a0rf_set(theCount, n0+1)
}(*where*)//end-of-[DATS_Up$button$onclick]
//
#implfun
DATS_Down$button$onclick
  (update) =
(
  update(tostr(n0-1)))
where
{
val n0 = a0rf_get(theCount)
val () = a0rf_set(theCount, n0-1)
}(*where*)//end-of-[DATS_Reset$button$onclick]
//
#implfun
DATS_Reset$button$onclick
  (update) =
(
  update(tostr(  0  )))
where
{
val () = a0rf_set(theCount, ( 0 ))
}(*where*)//end-of-[DATS_Reset$button$onclick]
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [githwxi/pground/proj002@250507/misc002/counter.dats] *)
(***********************************************************************)
