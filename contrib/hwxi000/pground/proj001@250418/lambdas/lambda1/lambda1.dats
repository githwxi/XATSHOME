(* ****** ****** *)
(* ****** ****** *)
(*
HX-2024-09-10:
Tue 10 Sep 2024 01:39:29 PM EDT
*)
(* ****** ****** *)
(* ****** ****** *)
#staload UN =
"prelude/SATS/unsfx00.sats"
(* ****** ****** *)
(* ****** ****** *)
//
#include
"prelude/HATS/prelude_dats.hats"
(* ****** ****** *)
(* ****** ****** *)
//
#if
defq(_XATS2JS_)
#then
#include
"prelude/HATS/prelude_JS_dats.hats"
#endif // end of [#if(defq(_XATS2JS_))]
//
#if
defq(_XATS2PY_)
#then
#include
"prelude/HATS/prelude_PY_dats.hats"
#endif // end of [#if(defq(_XATS2PY_))]
//
(* ****** ****** *)
(* ****** ****** *)
//
val () = prints
("Hello from [lambda1]!\n")
//
(* ****** ****** *)
(* ****** ****** *)
#typedef tvar = strn
#typedef topr = strn
(* ****** ****** *)
//
datatype term =
//
|TMint of sint
|TMbtf of bool
//
(*
HX:
This is Church's
pure lambda-calculus
*)
|TMvar of tvar
|TMlam of (tvar, term)
|TMapp of (term, term)
//
|TMopr of (topr, list(term))
|TMif0 of (term, term, term)
//
(*
|TMfix of (tvar, tvar, term)
*)
//
#typedef termlst = list(term)
//
(* ****** ****** *)
(* ****** ****** *)

local
//
val x = TMvar("x")
and y = TMvar("y")
and z = TMvar("z")
//
in(*local*)
//
val I =
TMlam("x", x)
//
val K =
TMlam("x", TMlam("y", x))
//
val S =
TMlam("x",
TMlam("y",
TMlam("z",
TMapp(TMapp(x, z), TMapp(y, z)))))
//
val K1 =
TMlam("x", TMlam("y", y))
//
val omega =
(
  TMlam("x", TMapp(x, x)))
val Omega = TMapp(omega, omega)
//
end//local(for-various-common-combinators)

(* ****** ****** *)
(* ****** ****** *)
//
#extern
fun<>
term_print(tm0: term): void
//
#impltmp
<(*tmp*)>
term_print
 ( tm0 ) =
(
auxpr(tm0)) where
{
fun
auxpr
(tm0: term): void =
(
//
case+ tm0 of
|
TMint(int) =>
prints("TMint(", int, ")")
|
TMbtf(btf) =>
prints("TMbtf(", btf, ")")
|
TMvar(nam) =>
prints("TMvar(", nam, ")")
|
TMlam(nam, tm1) =>
prints("TMlam(", nam, ";", tm1, ")")
|
TMapp(tm1, tm2) =>
prints("TMapp(", tm1, ";", tm2, ")")
//
|
TMopr(opr, tms) =>
prints("TMopr(", opr, ";", tms, ")")
|
TMif0(tm1, tm2, tm3) =>
prints(
"TMif0(", tm1, ";", tm2, ";", tm3, ")")
//
) where
{
  #impltmp g_print<term> = auxpr }
}(*where*)//end-of-[term_print<>(tm0)]
//
(* ****** ****** *)
//
local
val
term_print__ = term_print<>
in//local
#impltmp
g_print<term> = term_print__
end//local
//
(* ****** ****** *)
(* ****** ****** *)
//
val () = printsln("I = ", I)
val () = printsln("K = ", K)
val () = printsln("S = ", S)
val () = printsln("K1 = ", K1)
val () = printsln("omega = ", omega)
val () = printsln("Omega = ", Omega)
//
(* ****** ****** *)
(* ****** ****** *)
//
(*
#symload list with list_make_2val
*)
//
val TMadd =
lam(a1, a2) => TMopr("+", list@(a1, a2))
val TMsub =
lam(a1, a2) => TMopr("-", list@(a1, a2))
val TMmul =
lam(a1, a2) => TMopr("*", list@(a1, a2))
val TMdiv =
lam(a1, a2) => TMopr("/", list@(a1, a2))
val TMmod =
lam(a1, a2) => TMopr("%", list@(a1, a2))
//
(* ****** ****** *)
(* ****** ****** *)
//
val TMdbl =
let
val x =
TMvar"x" in
TMlam("x", TMadd(x, x)) end
val TMtpl =
let
val x =
TMvar"x" in
TMlam("x", TMadd(x, TMadd(x, x))) end
//
val ((*0*)) = printsln("TMdbl = ", TMdbl)
val ((*0*)) = printsln("TMtpl = ", TMtpl)
//
(* ****** ****** *)
(* ****** ****** *)
//
val TMsqr =
let
val x =
TMvar"x" in
TMlam("x", TMmul(x, x)) end
val TMcbr =
let
val x =
TMvar"x" in
TMlam("x", TMmul(x, TMmul(x, x))) end
//
val ((*0*)) = printsln("TMsqr = ", TMsqr)
val ((*0*)) = printsln("TMcbr = ", TMcbr)
//
(* ****** ****** *)
(* ****** ****** *)
//
#if
defq(_XATS2JS_)
#then
val () =
console_log(the_print_store_flush((*void*)))
#endif // end of [#if(defq(_XATS2JS_))]
//
(* ****** ****** *)
(* ****** ****** *)
//
(* ****** ****** *)(* ****** ****** *)(* ****** ****** *)
(* ****** ****** *)(* ****** ****** *)(* ****** ****** *)

(* end of [hwxi/pground/proj001@250418/lambdas/lambda1/lambda1.dats] *)
