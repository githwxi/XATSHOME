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
#staload
"./../../../xatslib/DATS/mylib00.dats"
(* ****** ****** *)
(* ****** ****** *)
//
#typedef
dflt2 = @(dflt, dflt)
//
(* ****** ****** *)
//
fun
f1un_zero$bsrch_lstrx
( f0: (dflt) -> dflt
, lb: dflt, ub: dflt): strx_vt(dflt2) =
let
//
fun
auxmain
( lb : dflt
, ub : dflt)
: strx_vt(dflt2) = $llazy
let
//
  val m0 = (lb + ub) / 2
//
in//let
//
if
f0(m0) >= 0
then
strxcon_vt_cons(@(lb, m0), auxmain(lb, m0))
else
strxcon_vt_cons(@(m0, ub), auxmain(m0, ub))
// end of [if]
end // let // end of [auxmain(lb, ub)]
//
in
  auxmain(lb, ub)
end // end of [f1un_zero$bsrch_lstrx(f0, lb, ub)]
//
(* ****** ****** *)
(* ****** ****** *)
//
val EPSILON = 1E-6
//
val f0 =
lam(x: dflt): dflt => (x * x - 2.0)
//
val
dflt2s =
f1un_zero$bsrch_lstrx(f0, 1.0, 2.0)
val
dflt2s = strx_vt_filter0$f1un
(dflt2s, lam(df2) => (df2.1 - df2.0) < EPSILON)
//
val () = print0s("dflt2s = ", strmize0(dflt2s), "\n")
//
(***********************************************************************)
(* end of [githwxi/pground/proj001@250424/misc002/bsrch000.dats] *)
(***********************************************************************)
