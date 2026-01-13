(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-01-13:
Super cool "trick"!
This is the idea behind glens.
Tue Jan 13 10:37:50 AM EST 2026
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
#abstype
GSEQ$nint$rdigitize
#extern
fcast
GSEQ$nint$rdigitize:
nint -> GSEQ$nint$rdigitize
#extern
fcast
GSEQ$nint$rdigitize_un
(ds: GSEQ$nint$rdigitize): nint
//
(* ****** ****** *)
//
#impltmp
gseq_forall
<
GSEQ$nint$rdigitize
><   ni   >(  xs  ) =
let
val n =
GSEQ$nint$rdigitize_un(xs)
in//let
(
fix f(n:nint): bool =>
if
(n <= 0)
then true else
(
if
forall$test<ni>(n%10)
then f(n/10) else false))(n)end//let
//
(* ****** ****** *)
(* ****** ****** *)
//
fun
nint_digit$length(n: nint): nint =
gseq_length<
GSEQ$nint$rdigitize><ni>(GSEQ$nint$rdigitize(n))
//
(* ****** ****** *)
(* ****** ****** *)
//
//
val () =
printsln("\
digit$length(12345) = ", nint_digit$length(12345))
val () = console_log(the_print_store_flush((*void*)))
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [githwxi/pground/proj001@250424/misc009/misc009.dats] *)
(***********************************************************************)
