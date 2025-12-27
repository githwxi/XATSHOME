(* ****** ****** *)
(* ****** ****** *)
//
#include
"prelude/HATS/prelude_dats.hats"
//
#include
"prelude/HATS/prelude_JS_dats.hats"
#include
"prelude/HATS/prelude_NODE_dats.hats"
//
(* ****** ****** *)
(* ****** ****** *)
//
fun
ktally_strmize
( xs
: list(sint))
: strm_vt((sint)->sint) = $llazy
(
case+ xs of
|
list_nil
( (*0*) ) =>
(
strmcon_vt_nil())
|
list_cons
( x1, xs ) =>
strmcon_vt_cons(
lam(r0) => x1+r0, ktally_strmize(xs)))
//
fun tally
(xs: list(sint)): sint =
let
//
val ks =
ktally_strmize(xs)
val ks =
strm_vt_listize0(ks)
val ks = list_vt2t(ks)
//
in//let
//
folditm(ks, 0, lam(r0, k1) => k1(r0))
//
end//let//end-of-[tally(xs:list(sint))]
//
(* ****** ****** *)
//
val xs =
list_vt2t(
listize0(nint_strmize(10)))
val () =
printsln("tally(", xs, ") = ", tally(xs))
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [githwxi/pground/proj001@250424/misc002/tally001.dats] *)
(***********************************************************************)
