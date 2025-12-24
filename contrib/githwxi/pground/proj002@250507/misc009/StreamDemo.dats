(* ****** ****** *)
(* ****** ****** *)
(*
HX-2025-12-23:
For streax demonstration.
Tue Dec 23 07:45:56 PM EST 2025
This one is adapted from a version
written in December, 2020, when the
first ATS3 to JS compiler was ready
for testing.
*)
(* ****** ****** *)
(* ****** ****** *)
#include
"prelude/HATS/prelude_dats.hats"
#include
"prelude/HATS/prelude_JS_dats.hats"
(* ****** ****** *)
(* ****** ****** *)
#define none optn_nil
#define some optn_cons
(* ****** ****** *)
(* ****** ****** *)
//
(*
HX-2025-12-23:
For direction:
1(next) and -1(prev)
*)
#extern
fun<>
StreamDemo$dir(): sint
//
#extern
fun
<a:t0>
StreamDemo_moves
(xs: strm(a)): strx(optn(a))
//
(* ****** ****** *)
(* ****** ****** *)
//
#impltmp
<a>(*tmp*)
StreamDemo_moves
  (xs) =
(
let
val ys = list_nil()
and zs = list_nil()
in//let
(
  helper1(xs, ys, zs)) end
) where
{
//
(* ****** ****** *)
//
fun
helper0
( ys: list(a)
, zs: list(a)): strx(optn(a)) =
$lazy
(
let
val dir = StreamDemo$dir<>()
in//let
if
(dir > 0)
then
(
case+ zs of
|list_nil() =>
(
strxcon_cons(none(), helper0(ys, zs)))
|list_cons(z0, xs) =>
(
strxcon_cons(
some(z0), helper0(list_cons(z0, ys), zs))))
else
(
case+ ys of
|list_nil() =>
(
strxcon_cons(none(), helper0(ys, zs)))
|list_cons(y0, ys) =>
(
strxcon_cons(
some(y0), helper0(ys, list_cons(y0, zs)))))
end//let
//
)(*l0azy*)//end-of-[helper0(ys:list(a),zs:list(a))]
//
(* ****** ****** *)
fun
helper1
( xs: strm(a)
, ys: list(a)
, zs: list(a)): strx(optn(a)) =
$lazy
(
let
val dir = StreamDemo$dir<>()
in
if
(dir > 0)
then
(
case+ zs of
//
|list_nil() =>
(
case+ !xs of
|strmcon_nil() =>
(
strxcon_cons
(none(), helper0(ys, zs)))
|strmcon_cons(x0, xs) =>
(
strxcon_cons
( some(x0)
, helper1(xs, list_cons(x0, ys), zs))))
//
|list_cons(z0, zs) =>
(
strxcon_cons
(some(z0), helper1(xs, list_cons(z0, ys), zs))))
else
(
case+ ys of
|list_nil() =>
(
strxcon_cons
(none(), helper1(xs, ys, zs)))
|list_cons(y0, ys) =>
(
strxcon_cons
(some(y0), helper1(xs, ys, list_cons(y0, zs)))))
//
end//let
//
)(*l0azy*)//end-of-[helper1(xs:strm(a),ys:list(a),zs:list(a))]
//
(* ****** ****** *)
//
}(*where*)//end-of-[StreamDemo_moves(xs:strm(a))]
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(*
The end of
[XATSHOME/contrib/githwxi/pground/proj002@250507/misc008/StreamDemo.dats]
*)
(***********************************************************************)
