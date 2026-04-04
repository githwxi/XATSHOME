(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-04-04:
Sat Apr  4 03:19:28 PM EDT 2026
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
Hello from [puzzle.dats]!")
//
(* ****** ****** *)
(* ****** ****** *)
(*
//
HX-2026-04-04:
The following code was written
by Shuwan Zhao (shuwan) in SML
Sat Apr  4 03:19:28 PM EDT 2026
//
fun twice f = fn x => f (f x)

val S = fn x => x + 1
val Z = 0

val ans0 = twice S Z
val ans1 = twice twice S Z
val ans2 = twice (twice twice) S Z
val ans3 = twice (twice (twice twice)) S Z

val _ = print ("ans0 = " ^ Int.toString(ans0) ^ "\n")
val _ = print ("ans1 = " ^ Int.toString(ans1) ^ "\n")
val _ = print ("ans2 = " ^ Int.toString(res2) ^ "\n")
//
*)
(* ****** ****** *)
(* ****** ****** *)
//
fun
<a:type>
twice(f: a -> a) = lam x => f(f(x))
//
val Z = 0
val S = lam (x:sint) => x + 1
//
val ans0 = twice S Z
val (  ) = printsln("ans0 = ", ans0)
val ans1 = twice twice S Z
val (  ) = printsln("ans1 = ", ans1)
val ans2 = twice (twice twice) S Z
val (  ) = printsln("ans2 = ", ans2)
val ans3 = twice (twice (twice twice)) S Z
val (  ) = printsln("ans3 = ", ans3)
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [githwxi/pground/proj002@260404/shuwan/puzzle.dats] *)
(***********************************************************************)
