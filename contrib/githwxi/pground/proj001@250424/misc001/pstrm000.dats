(* ****** ****** *)
(* ****** ****** *)
//
#include
"prelude/HATS/prelude_dats.hats"
//
#include
"prelude/HATS/prelude_JS_cats.hats"
#include
"prelude/HATS/prelude_JS_dats.hats"
//
(* ****** ****** *)
#staload
"./../../../xatslib/DATS/mylib00.dats"
(* ****** ****** *)
//
val
sint_gte$strmize =
fix f(n: sint) =>
$llazy(
strmcon_vt_cons(n, f(n+1)))
//
#define
filter0 =
strm_vt_filter0$f1un
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
f(xs: strm_vt(sint)) =>
$llazy(
let
val- ~
strmcon_vt_cons(x0, xs) = !xs
in//let
strmcon_vt_cons(x0,
f(filter0(xs, lam(x1) => x1%x0 > 0))) end)}
//
(* ****** ****** *)
(* ****** ****** *)
//
val () =
print0s
("sint(>=2) = ", the_primes, "\n")
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
(* ****** ****** *)(* ****** ****** *)(* ****** ****** *)
(* ****** ****** *)(* ****** ****** *)(* ****** ****** *)

(* end of [githwxi/pground/proj001@250424/misc001/pstrm000.dats] *)
