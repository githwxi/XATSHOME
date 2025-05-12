(* ****** ****** *)
(* ****** ****** *)
#include
"prelude/HATS/prelude_dats.hats"
#include
"prelude/HATS/prelude_JS_dats.hats"
(* ****** ****** *)
(* ****** ****** *)
//
(*
HX: it is just [setTimeout]!
*)
#extern
fun
CATS_call$after
( fopr
: () -> void
, msec: sint): void = $extnam()
//
(* ****** ****** *)
//
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
val theStamp = a0rf(0)
val theCount = a0rf(0)
//
(* ****** ****** *)
//
#implfun
DATS_Up$button$onclick
  (update) =
let//0
//
val p0 =
a0rf_get(theStamp)
val () =
a0rf_set(theStamp, p0+1)
//
fun loop() =
let//1
//
val p1 = a0rf_get(theStamp)
//
in//let1
//
if p0+1 >= p1 then
let//2
val n0 = a0rf_get(theCount)
val () = a0rf_set(theCount, n0+1)
in//let2
  update(tostr(n0+1));
  CATS_call$after(loop, 1000(*ms*))
end(*let2*)//then//end-of-(if)
//
end(*let1*)//end-of-[loop((*void*))]
//
in//let0
//
let
val n0 = a0rf_get(theCount)
val () = a0rf_set(theCount, n0+1)
in//let1
  update(tostr(n0+1));
  CATS_call$after(loop, 1000(*ms*))
end//let1
//
end(*let0*)//end-of-[DATS_Up$button$onclick]
//
(* ****** ****** *)
//
#implfun
DATS_Down$button$onclick
  (update) =
let//0
//
val p0 =
a0rf_get(theStamp)
val () =
a0rf_set(theStamp, p0+1)
//
fun loop() =
let//1
val p1 = a0rf_get(theStamp)
in//let1
//
if p0+1 >= p1 then
let//2
val n0 = a0rf_get(theCount)
val () = a0rf_set(theCount, n0-1)
in//let2
  update(tostr(n0-1));
  CATS_call$after(loop, 1000(*ms*))
end(*let2*)//then//end-of-(if)
//
end(*let1*)//end-of-[loop((*void*))]
//
in//let0
//
let
val n0 = a0rf_get(theCount)
val () = a0rf_set(theCount, n0-1)
in//let1
  update(tostr(n0-1));
  CATS_call$after(loop, 1000(*ms*))
end//let1
//
end(*let0*)//end-of-[DATS_Down$button$onclick]
//
(* ****** ****** *)
//
#implfun
DATS_Reset$button$onclick
  (update) =
(
  update(tostr(0)))
where
{
//
val () = theCount.set(0)
val p0 = a0rf_get(theStamp)
val () = a0rf_set(theStamp, p0+1)
}(*where*)//end-of-[DATS_Reset$button$onclick]
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [githwxi/pground/proj002@250507/misc003/counter.dats] *)
(***********************************************************************)
