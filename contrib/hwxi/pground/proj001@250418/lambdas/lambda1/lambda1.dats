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
#staload _ =
"prelude/DATS/gdbg000.dats"
(* ****** ****** *)
(* ****** ****** *)
//
#include
"prelude/HATS/prelude_dats.hats"
#include
"prelude/HATS/prelude_JS_cats.hats"
#include
"prelude/HATS/prelude_JS_dats.hats"
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
(*
|TMopr of (topr, list(term))
|TMif0 of (term, term, term)
*)
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
val () =
prints("I = ", I, "\n")
val () =
prints("K = ", K, "\n")
val () =
prints("S = ", S, "\n")
val () =
prints("K1 = ", K1, "\n")
val () =
prints("omega = ", omega, "\n")
val () =
prints("Omega = ", Omega, "\n")
//
(* ****** ****** *)
(* ****** ****** *)
//
#ifexp
NODEJS
#then0
#else1
//
val () =
console_log(the_print_store_flush((*void*)))
//
#endif//end-of-[#ifexp(NODEJS)]
//
(* ****** ****** *)
(* ****** ****** *)
//
(* ****** ****** *)(* ****** ****** *)(* ****** ****** *)
(* ****** ****** *)(* ****** ****** *)(* ****** ****** *)

(* end of [HWXI/PGROUND/proj001@250418/lambdas/lambda1/lambda1.dats] *)
