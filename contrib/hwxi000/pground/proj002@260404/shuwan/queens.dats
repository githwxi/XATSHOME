(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-04-10:
Fri Apr 10 02:35:57 PM EDT 2026
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
HX-2026-04-10:
The following code is translated
from SML into ATS3 by ZHAO Shuwan
(github/shuwan1208)
Fri Apr 10 02:35:57 PM EDT 2026
*)
(* ****** ****** *)
(*
#include "prelude/HATS/prelude_dats.hats"
*)
(* ****** ****** *)

#define N 8
datatype intlist =
  | intlist_nil
  | intlist_cons of (sint, intlist)

fun abs_sint (x: sint): sint =
  if x < 0 then (0 - x) else x

fun is_safe (i0: sint, j0: sint, bd: intlist, i: sint): bool =
  case+ bd of
  | intlist_nil() => true
  | intlist_cons(j, js) =>
    let
      val column_safe = (j0 != j)
      val diagonal_safe = (abs_sint(i0 - i) != abs_sint(j0 - j))
    in
      if column_safe then
        (if diagonal_safe then is_safe(i0, j0, js, i - 1) else false)
      else false
    end

fun print_dots (n: sint): void =
  if n = 0 then ()
  else let val () = print(". ") in print_dots(n - 1) end

fun print_row (col: sint): void =
  let
    val () = print_dots(col)
    val () = print("Q ")
    val () = print_dots(N - col - 1)
    val () = print("\n")
  in () end

fun loop_bd (bd: intlist): void =
  case+ bd of
  | intlist_nil() => ()
  | intlist_cons(c, cs) =>
    let val () = print_row(c) in loop_bd(cs) end

fun rev_append (xs: intlist, ys: intlist): intlist =
  case+ xs of
  | intlist_nil() => ys
  | intlist_cons(x, xs_rest) => rev_append(xs_rest, intlist_cons(x, ys))

fun print_board (bd: intlist): void =
  let
    val () = loop_bd(rev_append(bd, intlist_nil()))
    val () = print("\n")
  in () end

fun try_cols (j: sint, current_nsol: sint, row: sint, bd: intlist): sint =
  if j = N then current_nsol
  else
    if is_safe(row, j, bd, row - 1) then
      let
        val next_nsol = search(intlist_cons(j, bd), row + 1, current_nsol)
      in
        try_cols(j + 1, next_nsol, row, bd)
      end
    else
      try_cols(j + 1, current_nsol, row, bd)

and search (bd: intlist, row: sint, nsol: sint): sint =
  if row = N then
    let
      val () = printsln("Solution #", nsol + 1, ":")
      val () = print_board(bd)
    in
      nsol + 1
    end
  else
    try_cols(0, nsol, row, bd)

fun solve_8_queens (): sint = search(intlist_nil(), 0, 0)

val total_solutions = solve_8_queens ()
val () = printsln("Total solutions found: ", total_solutions)

(*
(*
The following code is the source of the above translation
*)
val N = 8
fun is_safe (i0, j0, [], _) = true
  | is_safe (i0, j0, j::js, i) =
    let
        val column_safe = (j0 <> j)
        val diagonal_safe = (abs(i0 - i) <> abs(j0 - j))
    in
        column_safe andalso diagonal_safe andalso is_safe (i0, j0, js, i - 1)
    end

fun print_board bd =
    let
        fun print_dots 0 = ()
          | print_dots n = (print ". "; print_dots (n-1))
        
        fun print_row col =
            (print_dots col; print "Q "; print_dots (N - col - 1); print "\n")
            
        fun loop [] = ()
          | loop (c::cs) = (print_row c; loop cs)
    in
        loop (rev bd); 
        print "\n"
    end
fun search (bd, row, nsol) =
    if row = N then
        (print ("Solution #" ^ Int.toString(nsol + 1) ^ ":\n");
         print_board bd;
         nsol + 1)
    else
        let
            fun try_cols (j, current_nsol) =
                if j = N then current_nsol
                else
                    if is_safe (row, j, bd, row - 1) then
                        let
                            val next_nsol = search (j::bd, row + 1, current_nsol)
                        in
                            try_cols (j + 1, next_nsol)
                        end
                    else
                        try_cols (j + 1, current_nsol)
        in
            try_cols (0, nsol)
        end

fun solve_8_queens () = search ([], 0, 0)
*)

(***********************************************************************)
(* end of [hwxi000/pground/proj002@260404/shuwan/queens.dats] *)
(***********************************************************************)
