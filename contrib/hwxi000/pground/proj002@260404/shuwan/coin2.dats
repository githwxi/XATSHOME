(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-04-08:
Wed Apr  8 10:24:35 PM EDT 2026
*)
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
#if
defq(_XATS2PY_)
#include
"prelude/HATS/prelude_PY_dats.hats"
#endif//#ifdefq
//
(* ****** ****** *)
//
#if
defq(_XATS2JS_)
#include
"prelude/HATS/prelude_JS_dats.hats"
#include
"prelude/HATS/prelude_NODE_dats.hats"
#endif//#ifdefq
//
(* ****** ****** *)
(* ****** ****** *)
//
val () =
printsln("\
Hello from [coin2.dats]!")
//
(* ****** ****** *)
(* ****** ****** *)
(*
//
HX-2026-04-04:
The following code was written
by Shuwan Zhao (shuwan) in SML
Sat Apr  4 03:05:09 PM EDT 2026
//
fun count (0, _) = 1
  | count (_, []) = 0
  | count (sum, c::cs) =
    if sum < 0 then 0 
    else count (sum, cs) + count (sum - c, c::cs);
val test_result = count(10, [25, 10, 5, 1]);
//
*)
(* ****** ****** *)
(* ****** ****** *)
//
fun
count
(sum: sint
,cs : !list_vt(nint)) =
case+
(sum, cs) of
|
( 0, _ ) => 1
|
( _
, list_vt_nil()) => 0
|
( sum
, list_vt_cons(c1, ds)) =>
(
if // if
(sum < 0) then (0) else
(count(sum, ds) + count(sum - c1, cs)))
//
val cs =
list_vt@(25, 10, 5, 1)
val
test_result = count(10, cs)
val () = list_vt_free(  cs  )
//
val () = printsln("test_result = ", test_result)
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [hwxi000/pground/proj002@260404/shuwan/coin2.dats] *)
(***********************************************************************)
