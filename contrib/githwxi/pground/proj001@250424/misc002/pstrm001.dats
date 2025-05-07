(* ****** ****** *)
(* ****** ****** *)
(*
HX-2025-04-24:
This example shows how to
generate a linear stream of
all the prime numbers, which
are infinite.
*)
(* ****** ****** *)
(* ****** ****** *)
//
#include
"prelude/HATS/prelude_dats.hats"
//
#include
"prelude/HATS/prelude_PY_dats.hats"
//
(* ****** ****** *)
//
#staload
"./../../../xatslib/DATS/mylib00.dats"
//
(* ****** ****** *)
//
val
sint_gte$strxize =
fix f(n: sint) =>
$llazy(
strxcon_vt_cons(n, f(n+1)))
//
val
the_primes =
sieve
(
sint_gte$strxize(2))
where
{
//
#define
filter0
strx_vt_filter0$f1un
//
val sieve =
fix
f(xs: strx_vt(sint)) =>
$llazy(
let
val ~
strxcon_vt_cons(x0, xs) = !xs
in//let
strxcon_vt_cons(x0,
f(filter0(xs, lam(x1) => x1%x0 > 0)))end)
}
//
(* ****** ****** *)
(* ****** ****** *)
//
val () =
print0s("the_primes = ", strmize0(the_primes), "\n")
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [githwxi/pground/proj001@250424/misc002/pstrm001.dats] *)
(***********************************************************************)
