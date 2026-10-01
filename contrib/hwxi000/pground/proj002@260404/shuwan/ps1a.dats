(* ps1a.dats *)
(* Problem Set 1, Part A: House Hunting *)
(* 硬编码测试用例 1：annual_salary=120000, portion_saved=0.10, total_cost=1000000 *)
(* 期望输出：Number of months: 183 *)

#include "prelude/HATS/prelude_dats.hats"
#include "prelude/almanac/HATS/pre2026_dats.hats"

#if defq(_XATS2PY_)
#include "prelude/HATS/prelude_PY_dats.hats"
#endif

#if defq(_XATS2JS_)
#include "prelude/HATS/prelude_JS_dats.hats"
#include "prelude/HATS/prelude_NODE_dats.hats"
#endif

(* ****** ****** *)

(* 递归计算需要多少个月 *)
fun
months_needed
( months: dflt
, current_savings: dflt
, down_payment: dflt
, monthly_savings: dflt): dflt =
if current_savings >= down_payment then months
else
  let
    val interest = current_savings * 0.04 / 12.0
    val new_savings = current_savings + interest + monthly_savings
  in
    months_needed(months + 1, new_savings, down_payment, monthly_savings)
  end

(* ****** ****** *)
(* ****** ****** *)

(* 硬编码测试值 *)
val annual_salary = 120000.0
val portion_saved = 0.10
val total_cost = 1000000.0
val down_payment = total_cost * 0.25
val monthly_savings = annual_salary / 12.0 * portion_saved

val result = months_needed(0.0, 0.0, down_payment, monthly_savings)

val () = printsln("Number of months: ", result)

(* ****** ****** *)
(* ****** ****** *)
