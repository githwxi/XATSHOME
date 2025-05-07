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
(*
HX-2025-04-24:
This is for loading the prelude library for ATS3.
which is needed for the compiler to locate all the
basic function templates.
*)
#include
"prelude/HATS/prelude_dats.hats"
//
(*
HX-2025-04-24:
This is for concretizing in PY the most basic
function templates (e.g., arithmetic and printing)
*)
#include
"prelude/HATS/prelude_PY_dats.hats"
//
(* ****** ****** *)
//
(*
HX-2025-04-24:
This is for printing linear streams. I suppose
the code can be moved into the prelude library for
ATS3. I leave it here as an example of doing one's
own library.
*)
//
#staload
"./../../../xatslib/DATS/mylib00.dats"
//
(* ****** ****** *)
(*
//
HX-2024-04-25:
//
There are some conventions one should follow to name
functions and templates in ATS3.
//
For instance, in the name [sint_gte$strmize], [sint]
is the type of the 1st argument and [gte$strmize] is
a verb phrase indicating the generation of a (linear)
stream consisting of the numbers greater than or equal
to the first argument.
//
As another example, the name [strm_vt_filter0$f1un]
is for a filter function on a linear stream (strm_vt);
the lense of the function is 0, indicating that the
first argument of the function is consumed, that is,
it is not available for any subsequent use.
//
*)
(* ****** ****** *)
(*
HX-2024-04-25:
There is versatile support for overloading of names in
ATS3. However, one probably should avoid using too much
overloading at the beginning.
*)
(* ****** ****** *)
//
val
sint_gte$strmize =
fix f(n: sint) =>
$llazy(
strmcon_vt_cons(n, f(n+1)))
//
#define // a shorthand
cons_vt = strmcon_vt_cons
#define // a shorthand
filter0 = strm_vt_filter0$f1un
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
cons_vt(x0, xs) = !xs
in//let
cons_vt(x0,
f(filter0(xs, lam(x1) => x1%x0 > 0)))end)
}
//
(* ****** ****** *)
(* ****** ****** *)
//
(*
HX-2025-04-25:
The name [prints] means calling [print] multiple times.
The name [print0s] means calling [print0] multiple times.
Why is [print0] called? Note that the value [the_primes]
is linear and needs to be consumed by printing. Hence, the
lense of the verb needs to be 0 (for consuming).
*)
//
val () =
print0s("the_primes = ", the_primes, "\n")
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [githwxi/pground/proj001@250424/misc002/pstrm000.dats] *)
(***********************************************************************)
