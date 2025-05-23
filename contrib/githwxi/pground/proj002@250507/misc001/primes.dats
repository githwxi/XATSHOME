(* ****** ****** *)
(* ****** ****** *)
#include
"prelude/HATS/prelude_dats.hats"
#include
"prelude/HATS/prelude_JS_dats.hats"
(* ****** ****** *)
(* ****** ****** *)
#extern
fun
DATS_prime$onclick
(work: strn -> void): void = $extnam()
(* ****** ****** *)
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
fun
onclick_make_lstrx
(xs: strx_vt(sint)) =
let
val
arf1 = a0rf_make_1val(0)
val
arf2 = a0rf_make_1val(xs)
in//let
lam(
work: strn->void): void =>
let
//
val pn =
a0rf_get(arf1)
val () =
a0rf_set(arf1, pn + 1)
//
val
(pf|xs) = a0rf_lget(arf2)
val ~
strxcon_vt_cons(x1, xs) = !xs
val ( ) = a0rf_lset(pf | arf2, xs)
in//let
work(
tostrs("Prime(", pn+1, ") = ", x1))
end//let
end//let//end-of-[onclick_make_lstrx]
//
(* ****** ****** *)
(* ****** ****** *)
//
#implval
DATS_prime$onclick = onclick_make_lstrx(the_primes)
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [githwxi/pground/proj002@250507/misc001/primes.dats] *)
(***********************************************************************)
