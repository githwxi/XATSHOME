(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-04-04:
Sat Apr  4 03:32:04 PM EDT 2026
*)
(* ****** ****** *)
(* ****** ****** *)
//
#include
"prelude/HATS/prelude_dats.hats"
#include
"prelude\
/almanac/HATS/pre2026_dats.hats"
//
(* ****** ****** *)
(* ****** ****** *)
//
#if
defq(_XATS2PY_)
#include
"prelude/HATS/prelude_PY_dats.hats"
#endif//#ifdefq
//
(* ****** ****** *)
//
#if
defq(_XATS2JS_)
#include
"prelude/HATS/prelude_JS_dats.hats"
#include
"prelude/HATS/prelude_NODE_dats.hats"
#endif//#ifdefq
//
(* ****** ****** *)
(* ****** ****** *)
//
val () =
printsln("\
Hello from [bsearch.dats]!")
//
(* ****** ****** *)
(* ****** ****** *)
(*
//
HX-2026-04-04:
The following code was written
by Shuwan Zhao (shuwan) in SML
Sat Apr  4 03:32:04 PM EDT 2026
//
fun bsearch_fun(f,x0,lb,ub)=
   if lb < ub then 
      let val mid = lb + (ub - lb) div 2
      in 
        if x0 < f(mid) then
                bsearch_fun (f, x0, lb, mid - 1)
            else
                bsearch_fun (f, x0, mid + 1, ub)
        end
       else  
           ub
fun icrt (x: int) =
    let
        fun cube n = n * n * n
    in
        bsearch_fun (cube, x, 0, 1260)
    end;
val res1 = icrt 30;   
val res2 = icrt 1000; 
//
*)
(* ****** ****** *)
(* ****** ****** *)
//
(*
HX-2026-04-04:
This is actually
an incorrect algorithm!!!
Please see the tests below:
icrt(1001) returns 10 but it
should return 11, which is the
least number whose cube is not
below 1001.
*)
fun
bsearch_fun
(f
:sint->sint
,x0:sint
,lb:sint,ub:sint) =
if
(lb < ub)
then//then
( 
let
val mid = lb+(ub-lb)/2
in//let
if // if
(x0 < f(mid))
then
bsearch_fun(f, x0, lb, mid-1)
else
bsearch_fun(f, x0, mid+1, ub)
end
) else (ub)//end-of-[if(lb < ub)]
//
fun icrt (x: sint) =
  let
    fn0 cube n = n * n * n
  in
    bsearch_fun (cube, x, 0, 1260)
  end
//
val res1 = icrt 30   
val (  ) = printsln("icrt(30) = ", res1)
val res2 = icrt 999
val (  ) = printsln("icrt(999) = ", res2)
//
val res3 = icrt 1000
val (  ) = printsln("icrt(1000) = ", res3)
val res4 = icrt 1001
val (  ) = printsln("icrt(1001) = ", res4)
//
(* ****** ****** *)
(* ****** ****** *)
//
(*
HX-2026-04-04:
This one is correct:
Given n, it returns the
greatest number x satisfying
(x^3 <= n).
*)
fun
bsearch2_fun
(f
:sint->sint
,x0:sint
,lb:sint,ub:sint) =
(
if//if
(lb < ub)
then//then
( 
let
val mid = lb+(ub-lb)/2
in//let
if // if
(x0 < f(mid))
then
bsearch2_fun(f, x0, lb, mid)
else
bsearch2_fun(f, x0, mid+1, ub)
end
) else (lb-1)//end-of-[if(lb < ub)]
)
//
fun icrt2 (x: sint) =
  let
    fn0 cube n = n * n * n
  in
    bsearch2_fun (cube, x, 0, 1260)
  end
//
val r2es1 = icrt2 30   
val (   ) = printsln("icrt2(30) = ", r2es1)
val r2es2 = icrt2 999
val (   ) = printsln("icrt2(999) = ", r2es2)
//
val r2es3 = icrt2 1000
val (   ) = printsln("icrt2(1000) = ", r2es3)
val r2es4 = icrt2 1001
val (   ) = printsln("icrt2(1001) = ", r2es4)
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [hwxi000/pground/proj002@260404/shuwan/bsearch.dats] *)
(***********************************************************************)
