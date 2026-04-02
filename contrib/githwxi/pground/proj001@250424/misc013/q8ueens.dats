(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-04-01:
Mon Jan 12 09:26:32 AM EST 2026
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
(*
HX-2026-04-01:
The following code was written
by Zhan Zhuo (louvrre) in ATS2.
Wed Apr  1 07:39:10 PM EDT 2026
*)
(* ****** ****** *)
(* ****** ****** *)

(*
fun
andso(x, y) = if x then y else false
fun
orels(x, y) = if x then (true) else y
*)

(* ****** ****** *)
(* ****** ****** *)

#define N 8
#sexpdef N = 8

fun check {n:nat} (c: int, xs: list(int, n), d: int): bool =
  case+ xs of
  | list_nil() => true
  | list_cons(x, rest) => 
(*
      if (c = x || abs(c-x) = d) then false
*)
      if c = x then false else (
        if abs(c-x) = d then false else check(c, rest, d + 1))

fun solve {n:nat | n <= N} (n: int n, current: list(int, N-n)): void =
(
  if n = 0 then (
    let
      val () = printsln("Solution: ", current)
    in () end
  ) else (
    loop(0, n, current)
  )
) where {
  fun loop {n:pos | n <= N} {i:nat | i <= N} (
    i: int i, n: int n, current: list(int, N-n)
  ): void =
    if i < N then (
      if check(i, current, 1) then 
        solve(n - 1, list_cons(i, current));
      loop(i + 1, n, current)
    ) // else ()
}

val () = solve(N, list_nil())

(***********************************************************************)
(* end of [githwxi/pground/proj001@250424/misc013/q8ueens.dats] *)
(***********************************************************************)
