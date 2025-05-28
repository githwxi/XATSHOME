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
#include
"prelude/HATS/prelude_JS_dats.hats"
(*
#endif // end of [#if(defq(_XATS2JS_))]
*)
#elsif
defq(_XATS2PY_)
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
val I = TMlam("x", x)
//
val K = TMlam("x", TMlam("y", x))
//
val S =
TMlam("x",
TMlam("y",
TMlam("z",
TMapp(TMapp(x, z), TMapp(y, z)))))
//
val K1 = TMlam("x", TMlam("y", y))
//
val omega = TMlam("x", TMapp(x, x))
val Omega =
(
  TMapp(omega(*fun*), omega(*arg*)))
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
val
TMadd =
lam(a1, a2) => TMopr("+", list@(a1, a2))
val
TMsub =
lam(a1, a2) => TMopr("-", list@(a1, a2))
val
TMmul =
lam(a1, a2) => TMopr("*", list@(a1, a2))
val
TMdiv =
lam(a1, a2) => TMopr("/", list@(a1, a2))
val
TMmod =
lam(a1, a2) => TMopr("%", list@(a1, a2))
//
(* ****** ****** *)
(* ****** ****** *)
//
val
TMone =
TMlam
(
"f",
TMlam("x", TMapp(f, x)))
where
{
val f =
TMvar"f" and  x = TMvar"x" }
val
TMtwo =
TMlam
(
"f",
TMlam
(
"x",
TMapp(f, TMapp(f, x))))
where
{
val f =
TMvar"f" and  x = TMvar"x" }
//
val ((*0*)) =
printsln("TMone = ", TMone)
val ((*0*)) =
printsln("TMtwo = ", TMtwo)
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
#extern
fun
term_subst
( tm0: term
, x00: tvar, sub: term): term
//
#implfun
term_subst
(tm0, x00, sub) =
let
//
val subst =
lam(tm0) =>
term_subst(tm0, x00, sub)
//
in//let
//
case+ tm0 of
//
|TMint _ => tm0
|TMbtf _ => tm0
//
|TMvar(x01) =>
if
x00=x01 then sub else tm0
//
|TMlam(x01, tm1) =>
if
(x00=x01)
then (tm0)
else TMlam(x01, subst(tm1))
//
|TMapp(tm1, tm2) =>
(
  TMapp(subst(tm1), subst(tm2)))
//
|TMopr(f00, tms) =>
TMopr(f00, list_map(tms, subst))
|TMif0(tm1, tm2, tm3) =>
TMif0(subst(tm1), subst(tm2), subst(tm3))
//
end(*let*)//endof(term_subst(tm0,x00,sub))
//
(* ****** ****** *)
(* ****** ****** *)
//
fun
term_interp
(tm0: term): term =
(
case+ tm0 of
//
|TMint _ => tm0
|TMbtf _ => tm0
//
|TMvar _ => tm0
|TMlam _ => tm0
|TMapp
(tm1, tm2) =>
let
(*
HX: call-by-name
*)
val
tm1 = term_interp(tm1)
in//let
case+ tm1 of
|
TMlam(x01, tmx) =>
term_interp
(term_subst(tmx, x01, tm2))
|
_(*non-TMlam*) =>
TMapp(tm1, term_interp(tm2))
end//let//end-of-[TMapp(...)]
//
|TMopr
(pnm, tms) =>
(
case- pnm of
|"+" =>
(
TMint(i01+i02)) where
{
val-
list_cons(tm1, tms) = tms
val-
list_cons(tm2, tms) = tms
val-
TMint(i01) = term_interp(tm1)
val-
TMint(i02) = term_interp(tm2)
}
|"-" =>
(
TMint(i01-i02)) where
{
val-
list_cons(tm1, tms) = tms
val-
list_cons(tm2, tms) = tms
val-
TMint(i01) = term_interp(tm1)
val-
TMint(i02) = term_interp(tm2)
}
|"*" =>
(
TMint(i01*i02)) where
{
val-
list_cons(tm1, tms) = tms
val-
list_cons(tm2, tms) = tms
val-
TMint(i01) = term_interp(tm1)
val-
TMint(i02) = term_interp(tm2)
}
|"/" =>
(
TMint(i01/i02)) where
{
val-
list_cons(tm1, tms) = tms
val-
list_cons(tm2, tms) = tms
val-
TMint(i01) = term_interp(tm1)
val-
TMint(i02) = term_interp(tm2)
}
//
|"<" =>
(
TMbtf(i01<i02)) where
{
val-
list_cons(tm1, tms) = tms
val-
list_cons(tm2, tms) = tms
val-
TMint(i01) = term_interp(tm1)
val-
TMint(i02) = term_interp(tm2)
}
|">" =>
(
TMbtf(i01>i02)) where
{
val-
list_cons(tm1, tms) = tms
val-
list_cons(tm2, tms) = tms
val-
TMint(i01) = term_interp(tm1)
val-
TMint(i02) = term_interp(tm2)
}
|"=" =>
(
TMbtf(i01=i02)) where
{
val-
list_cons(tm1, tms) = tms
val-
list_cons(tm2, tms) = tms
val-
TMint(i01) = term_interp(tm1)
val-
TMint(i02) = term_interp(tm2)
}
|"<=" =>
(
TMbtf(i01<=i02)) where
{
val-
list_cons(tm1, tms) = tms
val-
list_cons(tm2, tms) = tms
val-
TMint(i01) = term_interp(tm1)
val-
TMint(i02) = term_interp(tm2)
}
|">=" =>
(
TMbtf(i01>=i02)) where
{
val-
list_cons(tm1, tms) = tms
val-
list_cons(tm2, tms) = tms
val-
TMint(i01) = term_interp(tm1)
val-
TMint(i02) = term_interp(tm2)
}
|"!=" =>
(
TMbtf(i01!=i02)) where
{
val-
list_cons(tm1, tms) = tms
val-
list_cons(tm2, tms) = tms
val-
TMint(i01) = term_interp(tm1)
val-
TMint(i02) = term_interp(tm2)
}
//
)(*case+*)//end-of-[TMopr(...)]
//
|TMif0
(tm1, tm2, tm3) =>
let
val tm1 = term_interp(tm1)
in
case- tm1 of
|
TMbtf(btf) =>
term_interp(if btf then tm2 else tm3)
end//let//end-of-[TMif0(...)]
//
)
//
(* ****** ****** *)
(* ****** ****** *)

val () =
printsln("TMapp(TMdbl, TMint(10)) = ", TMapp(TMdbl, TMint(10)))
val () =
printsln("TMapp(TMdbl, TMint(10)) = ", term_interp(TMapp(TMdbl, TMint(10))))

val () =
printsln("TMapp(TMsqr, TMint(10)) = ", TMapp(TMsqr, TMint(10)))
val () =
printsln("TMapp(TMsqr, TMint(10)) = ", term_interp(TMapp(TMsqr, TMint(10))))

val () =
printsln("TMapp(TMapp(TMtwo, TMtpl), TMint(10)) = ", term_interp(TMapp(TMapp(TMtwo, TMtpl), TMint(10))))

val () =
printsln("TMapp(TMapp(TMapp(TMtwo, TMtwo), TMtpl), TMint(10)) = ", term_interp(TMapp(TMapp(TMapp(TMtwo, TMtwo), TMtpl), TMint(10))))

(* ****** ****** *)
(* ****** ****** *)

val Y =
TMlam
(
"f",
TMapp(fomega, fomega)) where
{
val f = TMvar"f"
val x = TMvar"x"
val fomega = TMlam("x", TMapp(f, TMapp(x, x)))
}

(* ****** ****** *)
(* ****** ****** *)

fun
TMlt
(tm1: term, tm2: term) =
TMopr("<", list@(tm1, tm2))
fun
TMgt
(tm1: term, tm2: term) =
TMopr(">", list@(tm1, tm2))
fun
TMeq
(tm1: term, tm2: term) =
TMopr("=", list@(tm1, tm2))
fun
TMlte
(tm1: term, tm2: term) =
TMopr("<=", list@(tm1, tm2))
fun
TMgte
(tm1: term, tm2: term) =
TMopr(">=", list@(tm1, tm2))
fun
TMneq
(tm1: term, tm2: term) =
TMopr("!=", list@(tm1, tm2))

(* ****** ****** *)
(* ****** ****** *)

val
TMfact =
TMapp(Y, F) where
{
//
val f =
TMvar"f" and x = TMvar"x"
//
val F =
TMlam
("f", TMlam
("x", TMif0
(TMlte(x, TMint(0))
,TMint(1), TMmul(x, TMapp(f, TMsub(x, TMint(1)))))))
//
}(*where*)//end-of-[val(TMfact)]

val () = printsln
("TMapp(TMfact, TMint(5)) = ", term_interp(TMapp(TMfact, TMint(5))))

(* ****** ****** *)
(* ****** ****** *)
//
#if
defq(_XATS2JS_)
#then
val () =
console_log(the_print_store_flush((*void*)))
#endif // end-of-[#if(defq(_XATS2JS_))]
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [hwxi/pground/proj001@250418/lambdas/lambda1/lambda1.dats] *)
(***********************************************************************)
