(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-04-01:
This is just for
testing [strm_vt_dedup0],
which removes duplicates.
Wed Apr  1 12:33:42 PM EDT 2026
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
val
sint_gte$strmize =
fix f(n: sint) =>
$llazy(
strmcon_vt_cons(n, f(n+1)))
//
(* ****** ****** *)
(* ****** ****** *)
//
val
the_primes =
strm_vt_dedup0
(
sint_gte$strmize(2)
) where
{
#impltmp
dedup$equal
< sint >(x1, x2) = (x2%x1) = 0 }
//
(* ****** ****** *)
(* ****** ****** *)
//
val () =
print0s("the_primes = ", the_primes, "\n")
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
(* end of [githwxi/pground/proj001@250424/misc001/pstrm002.dats] *)
(***********************************************************************)
