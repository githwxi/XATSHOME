(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-01-09:
Fri Jan  9 01:56:20 PM EST 2026
Linear states are far more direct!
*)
(* ****** ****** *)
(* ****** ****** *)
//
#include
"prelude/HATS/prelude_dats.hats"
#include
"prelude/HATS/prelude_JS_dats.hats"
//
(* ****** ****** *)
(* ****** ****** *)
//
datatype
token =
| TOKint of sint
| TOKopr of strn
//
(* ****** ****** *)
(* ****** ****** *)
//
#absvtbx state_vx
#vwtpdef state = state_vx
//
(* ****** ****** *)

local
//
#vwtpdef
stack = list_vt(sint)
#absimpl
state_vx = a0rf_vt(stack)
//
in//local
//
(* ****** ****** *)
//
fun
state_init
(  (*0*)  ): state =
(
ref_vt<stack>
(list_vt_nil((*void*))))
//
fun
state_free
( st: state): void =
(
  a0rf_vt_free<stack>(st))
//
(* ****** ****** *)
//
fun
state_popout
(st: !state): sint =
let
val sk =
a0rf_vt_lget(st)
val ~
list_vt_cons
(  i0, sk  ) = sk
val () =
a0rf_vt_lset(st, sk) in i0 end
//
fun
state_pushin
( st:
! state, i0: sint): void =
let
val sk =
a0rf_vt_lget(  st  )
in//let
a0rf_vt_lset(
  st, list_vt_cons(i0, sk)) end
//
(* ****** ****** *)
//
end(*local*)//end-of-(absimpl(state_vx))

(* ****** ****** *)
(* ****** ****** *)
//
fun
myeval
( tks
: list(token)): sint =
let
val
st0 = state_init()
val
res = auxloop(st0, tks)
in//let
(
  state_free(st0); res)
end where // end-of-(let)
{
//
fun
auxopr
( f0: strn
, i1: sint
, i2: sint): sint =
(
case- f0 of
| "+" => (i1 + i2)
| "-" => (i1 - i2)
| "*" => (i1 * i2)
| "/" => (i1 / i2)
| "%" => (i1 % i2))
//
fun
auxloop
( st0: !state
, tks: list(token)): sint =
(
case+ tks of
|
list_nil
((*void*)) =>
(
state_popout(st0))
|
list_cons
(tk1, tks) =>
(
auxloop(st0, tks))
where
{
val () =
(
case+ tk1 of
|
TOKint(i0) =>
(
state_pushin(st0, i0))
|
TOKopr(f0) =>
let
val i1 =
state_popout(st0)
val i2 =
state_popout(st0) in
state_pushin(
  st0, auxopr(f0, i1, i2)) end)
}
)(*case+*)//end-of-[auxloop(st0,tks)]
//
}(*where*)//end-of-[ myeval(  tks  ) ]
//
(* ****** ****** *)
(* ****** ****** *)
//
val tks =
list_3val(
TOKopr("+"), TOKint(3), TOKopr("*"))
val tks =
list_cons(
TOKint(1), list_cons(TOKint(2), tks))
val (  ) = // HX: (1 + 2) * 3 = 9
printsln("myeval(tks) = ", myeval(tks))
//
(* ****** ****** *)
(* ****** ****** *)
//
val () =
console_log(the_print_store_flush((*void*)))
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [githwxi/pground/proj001@250424/misc007/myeval00.dats] *)
(***********************************************************************)
