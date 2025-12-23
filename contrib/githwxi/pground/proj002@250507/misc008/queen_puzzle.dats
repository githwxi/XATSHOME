(* ****** ****** *)
(* ****** ****** *)
#staload "./gtree.dats"
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
#extern
fun
board_length(xs: board): sint
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
( (*0*) ) = list_nil(*void*)
#implfun
board_cons
( x0, xs ) = list_cons(x0, xs)
//
#implfun
board_length = list_length<sint>
//
#impltmp
gseq_strmize
<board><sint> = list_strmize<sint>
#impltmp
gseq_rstrmize
<board><sint> = list_rstrmize<sint>
//
endloc//local//end-of-[local(absimpl(board))]
//
#symload length with board_length of 1000000
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
println((*0*))) else
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
: strm_vt(board) =
(
  auxmain(0) ) where
{
fun
auxmain
(i0: nint) = $llazy
(
if
(i0 >= N)
then
strmcon_vt_nil(*void*)
else
(
if
~board_check
 ( xs , i0 )
then !
(
  auxmain(i0+1))
else
strmcon_vt_cons
(board_cons(i0, xs), auxmain(i0+1)))
)
}(*where*)//end-of-[board_extend(xs)]
//
(* ****** ****** *)
(* ****** ****** *)
#impltmp
gtree$node_subs$get
<      board      > = board_extend(*0*)
(* ****** ****** *)
(* ****** ****** *)
//
fun
qsolve
(
// empty
) : strm_vt(board) =
strm_vt_filter0
(
gtree$node_bfs$enumerate
<board>(board_nil((*void*))),
lam(xs:board) => (board_length(xs) >= N))
//
(* ****** ****** *)
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
strm_vt_iforitm0(xz))
where
{
//
#impltmp
iforitm$work
<   board   >(i0, xs) =
(
if
length(xs) >= N then
(
printsln("Solution#", i0+1, ":\n", xs))
)
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
[XATSHOME/contrib/githwxi/pground/proj002@250507/misc008/queen_puzzle.dats]
*)
(***********************************************************************)
