(* ****** ****** *)
(* ****** ****** *)
#include
"prelude/HATS/prelude_dats.hats"
#include
"prelude/HATS/prelude_JS_dats.hats"
(* ****** ****** *)
(* ****** ****** *)
(*
//
Game-of-24:
//
Given four integers n1, n2, n3 and n4, one chooses two and uses
them to produce a rational number r1 by applying either addition,
subtraction, multiplication or division; one mixes r1 with the
remaining two numbers and chooses two of them to produce a rational
number r2 by applying either addition, subtraction, multiplication or
division; one then takes r2 and the last remaining number to produce a
rational number r3 by applying addition, subtraction, multiplication,
or division. If there exists a way to make r3 equal 24, then (n1, n2,
n3, n4) is said to be a good quad. For instance, (10,10,4,4) is a good
quad since we have: (10*10-4)/4 = 24. And (5,7,7,11) is also a good
quad since we have: (5-11/7)*7 = 24. Game-of-24 is a game that
determines whether four given integers form a good quad or not.
//
*)
(* ****** ****** *)
(* ****** ****** *)
//
#typedef
rat = double
#abstype
rat_type == rat
//
#typedef rat = rat_type
//
(* ****** ****** *)
(* ****** ****** *)
#impltmp
g_ptype
< rat >
((*void*)) = pstrn("rat")
(* ****** ****** *)
//
#symload < with g_lt of 100
#symload > with g_gt of 100
#symload = with g_eq of 100
//
#symload + with g_add of 100
#symload - with g_sub of 100
#symload * with g_mul of 100
#symload / with g_div of 100
//
#symload abs with g_abs of 100
#symload neg with g_neg of 100
//
(* ****** ****** *)
(* ****** ****** *)
//
local
//
#absimpl
rat_type = dflt
//
in//let
//
fun
rat_mkof_dflt
(df: dflt): rat = df
fun
rat_mkof_sint
(si: sint): rat =
rat_mkof_dflt(g_si<dflt>(si))
#symload rat with rat_mkof_dflt
#symload rat with rat_mkof_sint
//
#impltmp
g_si<rat> = g_si<dflt>
//
#impltmp g_abs<rat> = dflt_abs<>
//
#impltmp g_cmp<rat> = dflt_cmp$dflt<>
//
#impltmp g_add<rat> = dflt_add$dflt<>
#impltmp g_sub<rat> = dflt_sub$dflt<>
#impltmp g_mul<rat> = dflt_mul$dflt<>
#impltmp g_div<rat> = dflt_div$dflt<>
//
(*
#impltmp g_print<rat> = g_print<dflt>
*)
//
endloc//end-of-[local(absopen(rat_type))]
//
(* ****** ****** *)
(* ****** ****** *)
//
datatype expr =
| Int of (int)
| Add of (expr, expr) | Sub of (expr, expr)
| Mul of (expr, expr) | Div of (expr, expr)
//
(* ****** ****** *)
(* ****** ****** *)
//
#impltmp
g_print<expr>
(    exp0    ) =
(
  auxpr(exp0)) where
{
//
fun
auxpr(x0: expr): void =
(
case+ x0 of
|Int(i0) => print(i0)
|Add(x1, x2) =>
(
  prints("(", x1, "+", x2, ")"))
|Sub(x1, x2) =>
(
  prints("(", x1, "-", x2, ")"))
|Mul(x1, x2) =>
(
  prints("(", x1, "*", x2, ")"))
|Div(x1, x2) =>
(
  prints("(", x1, "/", x2, ")"))
) where
{
#impltmp g_print<expr> = auxpr(*expr*)
}
//
}(*where*)//end-of-[g_print<expr>(exp0)]
//
(* ****** ****** *)
//
val () =
printsln("Int(1) = ", Int(1))
val () =
printsln("Add(Int(1), Mul(Int(2), Int(3))) = ", Add(Int(1), Mul(Int(2), Int(3))))
//
(* ****** ****** *)
(* ****** ****** *)
//
fun
expr_eval
(x0: expr): rat =
(
case+ x0 of
| Int(i0) => g_si<rat>(i0)
| Add(x1, x2) =>
  expr_eval(x1) + expr_eval(x2)
| Sub(x1, x2) =>
  expr_eval(x1) - expr_eval(x2)
| Mul(x1, x2) =>
  expr_eval(x1) * expr_eval(x2)
| Div(x1, x2) =>
  expr_eval(x1) / expr_eval(x2))
//
#symload eval with expr_eval of 1000
//
(* ****** ****** *)
//
val () = printsln("\
eval(Add(Int(1), Mul(Int(2), Int(3)))) = ", eval(Add(Int(1), Mul(Int(2), Int(3)))))
//
(* ****** ****** *)
(* ****** ****** *)
//
val
EPSILON = rat(1E-6)
//
fun
expr_iseqz
(x0: expr): bool =
abs(expr_eval(x0)) < EPSILON
//
fun
expr_iseq24
(x0: expr): bool =
abs(
expr_eval(x0)-g_si(24)) < EPSILON
//
#symload iseqz with expr_iseqz
#symload iseq24 with expr_iseq24
//
(* ****** ****** *)
//
val () = printsln("iseq24(Int(24)) = ", iseq24(Int(24)))
val () = printsln("iseq24(Int(25)) = ", iseq24(Int(25)))
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
(*
The end of
[XATSHOME/contrib/githwxi/pground/proj002@250507/misc004/Game-of-24.dats]
*)
(***********************************************************************)
