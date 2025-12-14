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
(*
val () =
printsln("Int(1) = ", Int(1))
val () =
printsln("Add(Int(1), Mul(Int(2), Int(3))) = ", Add(Int(1), Mul(Int(2), Int(3))))
*)
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
(*
val () = printsln("\
eval(Add(Int(1), Mul(Int(2), Int(3)))) = ", eval(Add(Int(1), Mul(Int(2), Int(3)))))
*)
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
(*
val () = printsln("iseq24(Int(24)) = ", iseq24(Int(24)))
val () = printsln("iseq24(Int(25)) = ", iseq24(Int(25)))
*)
//
(* ****** ****** *)
(* ****** ****** *)
//
fun
expr_aops$expr
( x1: expr
, x2: expr): list(expr) =
(
  xs
) where
{
//
val xs =
list_nil()
//
val xs =
if
expr_iseqz(x1)
then xs
else list_cons(Div(x2, x1), xs)
//
val xs =
if
iseqz(x2)
then xs
else list_cons(Div(x1, x2), xs)
//
val xs = list_cons(Mul(x1, x2), xs)
val xs = list_cons(Sub(x2, x1), xs)
val xs = list_cons(Sub(x1, x2), xs)
val xs = list_cons(Add(x1, x2), xs)
}
//
#symload aops with expr_aops$expr of 1000
//
(* ****** ****** *)
//
(*
val () = printsln
("expr_aops$expr(Int(1), Int(2)) = ", expr_aops$expr(Int(1), Int(2)))
*)
//
(* ****** ****** *)
(* ****** ****** *)
//
(*
HX-2025-12-14:
This part is now
in the prelude library.
*)
#extern
fun
<a:t0>
list_list$concat
(xss: list(list(a))): list(a)
#extern
fun
<a:t0>
list_list$concat_vt
(xss: list(list(a))): list_vt(a)
//
#impltmp
< a:t0 >
list_list$concat
  (   xss   ) =
list_vt2t(
list_list$concat_vt<a>(xss))
//
#impltmp
< a:t0 >
list_list$concat_vt
  (   xss   ) =
(
  loop(xss, res)) where
{
//
val res = list_vt_nil(*0*)
//
fun
loop
( xss
: list(list(a))
, res: list_vt(a)): list_vt(a) =
(
case+ xss of
|
list_nil() =>
list_vt_reverse0(res)
|
list_cons(xs1, xss) =>
loop(xss, list_rappendx0_vt(xs1, res)))
//
}(*where*)//end-of-[list$list_concat_vt(xss)]
//
(* ****** ****** *)
(* ****** ****** *)
//
fun
expr_aops$exprlst
( x0: expr
, xs: list(expr)): list(expr) =
list_list$concat(
list_map$f1un(xs, lam(x1) => x0\aops(x1)))
#symload aops with expr_aops$exprlst of 1000
//
fun
exprlst_aops$expr
( xs: list(expr)
, x0: expr(*00*)): list(expr) =
list_list$concat(
list_map$f1un(xs, lam(x1) => x1\aops(x0)))
#symload aops with exprlst_aops$expr of 1000
//
fun
exprlst_aops$exprlst
( xs: list(expr)
, ys: list(expr)): list(expr) =
list_list$concat(
list_map$f1un(xs, lam(x1) => x1\aops(ys)))
#symload aops with exprlst_aops$exprlst of 1000
//
(* ****** ****** *)
(* ****** ****** *)
//
(*
val () = printsln
("(Int(1)\aops(Int(2)))\aops(Int(2)\aops(Int(3))) = ", (Int(1)\aops(Int(2)))\aops(Int(2)\aops(Int(3))))
*)
//
(* ****** ****** *)
(* ****** ****** *)
//
fun
sint2_combine
(n1: sint, n2: sint): list(expr) =
Int(n1)\aops(Int(n2))
fun
sint3_combine
(n1: sint
,n2: sint, n3: sint): list(expr) =
appends(
Int(n1)\aops(sint2_combine(n2, n3)),
Int(n2)\aops(sint2_combine(n1, n3)),
Int(n3)\aops(sint2_combine(n1, n2)))
fun
sint4_combine
( n1: sint, n2: sint
, n3: sint, n4: sint): list(expr) =
appends(
Int(n1)\aops(sint3_combine(n2, n3, n4)),
Int(n2)\aops(sint3_combine(n1, n3, n4)),
Int(n3)\aops(sint3_combine(n1, n2, n4)),
Int(n4)\aops(sint3_combine(n1, n2, n3)),
sint2_combine(n1, n2)\aops(sint2_combine(n3, n4)),
sint2_combine(n1, n3)\aops(sint2_combine(n2, n4)),
sint2_combine(n1, n4)\aops(sint2_combine(n2, n3)))
//
(* ****** ****** *)
(* ****** ****** *)
//
(*
val () = printsln("sint4_combine(1,2,3,4) = ", sint4_combine(1,2,3,4))
*)
//
(* ****** ****** *)
(* ****** ****** *)
//
fun
GameOf24_solve
( n1: sint, n2: sint
, n3: sint, n4: sint): list(expr) =
gseq_filter$f1un_list
(sint4_combine(n1, n2, n3, n4), expr_iseq24)
//
(*
val () = printsln("GameOf24_solve(3, 3, 8, 8) = ", GameOf24_solve(3, 3, 8, 8))
val () = printsln("GameOf24_solve(5, 5, 7, 11) = ", GameOf24_solve(5, 5, 7, 11))
val () = printsln("GameOf24_solve(5, 7, 7, 11) = ", GameOf24_solve(5, 7, 7, 11))
val () = printsln("GameOf24_solve(4, 4, 10, 10) = ", GameOf24_solve(4, 4, 10, 10))
*)
//
(* ****** ****** *)
(* ****** ****** *)
//
#extern
fun
GameOf24_solve$print
( n1: sint, n2: sint
, n3: sint, n4: sint): void = $extnam()
//
#implfun
GameOf24_solve$print
( n1 , n2 , n3 , n4 ) =
let
val sols = GameOf24_solve(n1, n2, n3, n4)
in//let
//
if // if
list_nilq(sols) then
println("No solution found!") else
(
println("The solutions found:");
list_foritm$f1un(sols, lam(sol) => println(sol)))
//
end(*let*)//end-of-[GameOf24_solve$print(n1,n2,n3,n4)]
//
(*
val () = GameOf24_solve$print(3, 3, 8, 8)
val () = GameOf24_solve$print(4, 4, 10, 10)
*)
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
