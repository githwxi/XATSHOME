(* ****** ****** *)
(* ****** ****** *)
(*
HX-2025-12-21:
This example shows how to
generate a functional stream
of all the prime numbers, which
are infinite.
Sun Dec 21 12:41:05 PM EST 2025
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
$lazy(
strmcon_cons(n, f(n+1)))
//
#define // a shorthand
cons = strmcon_cons
#define // a shorthand
filter = strm_filter$f1un
//
val
the_primes =
sieve
(
sint_gte$strmize(2))
where
{
val sieve =
fix
f(xs: strm(sint)) =>
$lazy(
let
val-
cons(x0, xs) = !xs
in//let
cons(x0,
f(filter(xs, lam(x1) => x1%x0 > 0)))end)
}
//
(* ****** ****** *)
(* ****** ****** *)
//
val () = print0s("\
the_primes = ", strmize(the_primes), "\n")
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
(* end of [githwxi/pground/proj001@250424/misc001/pstrm001.dats] *)
(***********************************************************************)
