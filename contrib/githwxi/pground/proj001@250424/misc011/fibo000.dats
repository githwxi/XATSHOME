(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-01-12:
Mon Jan 12 09:26:32 AM EST 2026
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
//
fun
fibo$trec
(n: sint): sint =
(
  loop(n, 0, 1)) where
{
fun
loop(i, r1, r2) =
(
if (i > 0)
then loop(i-1, r2, r1+r2) else r1)
}
//
(* ****** ****** *)
(* ****** ****** *)
//
val () =
printsln("fibo$trec(10) = ", fibo$trec(10))
//
(* ****** ****** *)
(* ****** ****** *)
//
fun
fibo$iter
(n: sint): sint =
(
(
g_state$trans
<state>( st0 )).1
) where
{
//
#typedef
state =
(sint, sint, sint)
//
val st0 = (n, 0, 1)
//
#impltmp
state$trans$test
< state >(  st  ) = (st.0 <= 0)
//
#impltmp
state$trans$fupdt
< state >(  st  ) =
let
val (i, r1, r2) = st in//let
(
if (i > 0)
then @(i-1, r2, r1+r2) else st) end
//
}(*where*)//endof[fibo$iter(n:sint):sint]
//
(* ****** ****** *)
(* ****** ****** *)
//
val () =
printsln("fibo$iter(10) = ", fibo$iter(10))
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
(* end of [githwxi/pground/proj001@250424/misc011/fibo000.dats] *)
(***********************************************************************)
