(* ****** ****** *)
(* ****** ****** *)
#include
"prelude/HATS/prelude_dats.hats"
#include
"prelude/HATS/prelude_JS_dats.hats"
(* ****** ****** *)
(* ****** ****** *)
#define N 8
(* ****** ****** *)
#abstbox board
(* ****** ****** *)
(* ****** ****** *)
#extern
fun
board_nil(): board
#extern
fun
board_cons
(x0: sint, xs: board): board
(* ****** ****** *)
(* ****** ****** *)
//
local
//
#absimpl
board = list(int)
//
in(*in-of(local)*)
//
#implfun
board_nil
((*0*)) = list_nil(*void*)
#implfun
board_cons
(x0, xs) = list_cons(x0, xs)
//
#impltmp
gseq_strmize
<board><sint> = list_strmize<sint>
#impltmp
gseq_rstrmize
<board><sint>(xs) =
strmize0(list_reverse_vt<sint>(xs))
//
endloc//local//end-of-[local(absimpl(board))]
//
(* ****** ****** *)
(* ****** ****** *)
//
#impltmp
g_print
<board>(xs) =
(
gseq_rforitm<xs><x0>(xs)
) where
{
//
#typedef x0 = sint
#typedef xs = board
//
#impltmp
rforitm$work
<     x0     >
(     x0     ) =
(
  loop(0)) where{
//
fun
loop
(i0: sint): void =
if
i0 >= N
then
(
printsln((*void*))) else
(
(
if
(i0 = x0)
then print "Q "
else print ". "); loop(i0+1))
}
//
}(*where*)//end-of-[g_print<board>(xs)]
//
(* ****** ****** *)
//
fun
board_check
( xs
: board, x0: sint): bool =
(
gseq_iforall<board><int>(xs)
) where
{
#impltmp
iforall$test<int>(i1, x1) =
(
if // if
(x0 != x1) then
(abs(x0 - x1) != i1 + 1) else false)
}(*where*)//end-of-[board_check(xs, x0)]
//
(* ****** ****** *)
//
fun
board_extend
( xs
: board)
: list(board) =
(
  auxmain(0) ) where
{
fun
auxmain(i0) =
if
(i0 >= N)
then
list_nil(*void*)
else
(
if
~board_check
 ( xs , i0 )
then
(
  auxmain(i0+1))
else
list_cons
(board_cons(i0, xs), auxmain(i0+1))
)
}(*where*)//end-of-[board_extend(xs)]
//
(* ****** ****** *)
//
fun
boardlst_extend
(xz: list(board)) =
(
gseq_rfolditm
< xz >< xs >< r0 >
(xz, list_nil(*void*)))
where
{
//
#typedef xs = board
#typedef xz = list(board)
#typedef r0 = list(board)
//
#impltmp
rfolditm$fopr
<xs><r0>(xs, r0) =
list_append(board_extend(xs), r0)
}(*where*)//end-of-[boardlst_extend(xz)]
//
(* ****** ****** *)
//
fun
qsolve() =
(
loop(0,
list_sing(board_nil())))
where
{
fun
loop
(i0: sint, xz) =
(
if // if
(i0 < N) then
loop(i0+1,
  boardlst_extend(xz)) else xz)
}(*where*)//end-of-[qsolve((*void*))]
//
(* ****** ****** *)
//
val () =
let
//
val
xz = qsolve()
//
val () =
(
list_iforitm(xz))
where
{
#impltmp
iforitm$work
<   board   >(i0, xs) =
(
printsln("Solution#", i0+1, ":\n", xs))
}
end(*let*)//end-of-[val]
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
[XATSHOME/contrib/githwxi/pground/proj002@250507/misc005/queen_puzzle.dats]
*)
(***********************************************************************)
