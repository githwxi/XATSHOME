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
sints_gte =
fix f(n: sint) =>
$lazy(
strmcon_cons(n, f(n+1)))
//
#define // a shorthand
cons = strmcon_cons
#define // a shorthand
filter = strm_filter$f1un
//
(* ****** ****** *)
(* ****** ****** *)
//
val
the_primes =
sieve
(
sints_gte(2)
) where
{
val sieve =
fix
f(xs: strm(sint)) =>
$lazy(
let
val-
cons(x0, xs) = !xs
(*
val () =
printsln("fix(f): x0 = ", x0)
*)
in//let
cons(x0,
f(filter(xs, lam(x1) => x1%x0 > 0)))end)
}
//
(* ****** ****** *)
val ps = the_primes
(* ****** ****** *)
//
val-
strmcon_cons(p1, ps) = !ps
val () = printsln("p1 = ", p1)
val-
strmcon_cons(p2, ps) = !ps
val () = printsln("p2 = ", p2)
val-
strmcon_cons(p3, ps) = !ps
val () = printsln("p3 = ", p3)
val-
strmcon_cons(p4, ps) = !ps
val () = printsln("p4 = ", p4)
val-
strmcon_cons(p5, ps) = !ps
val () = printsln("p5 = ", p5)
val-
strmcon_cons(p6, ps) = !ps
val () = printsln("p6 = ", p6)
val-
strmcon_cons(p7, ps) = !ps
val () = printsln("p7 = ", p7)
val-
strmcon_cons(p8, ps) = !ps
val () = printsln("p8 = ", p8)
val-
strmcon_cons(p9, ps) = !ps
val () = printsln("p9 = ", p9)
val-
strmcon_cons(p10, ps) = !ps
val () = printsln("p10 = ", p10)
//
(* ****** ****** *)
(* ****** ****** *)
//
local
#impltmp
strm_print$len<>() = 100
in//let
val () =
printsln("the_primes = ", the_primes)
end//local//end-of-(strm_print$len<>())
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
