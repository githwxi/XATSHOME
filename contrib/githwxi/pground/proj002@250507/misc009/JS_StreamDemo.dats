(* ****** ****** *)
(* ****** ****** *)
#staload "./StreamDemo.dats"
(* ****** ****** *)
(* ****** ****** *)
#include
"prelude/HATS/prelude_dats.hats"
#include
"prelude/HATS/prelude_JS_dats.hats"
(* ****** ****** *)
(* ****** ****** *)

val
thePrimes =
helper(fromto(2)) where
{
fun
fromto
(n: sint): strm(sint) =
$lazy
(
strmcon_cons(n, fromto(n+1))
)
fun
helper
(xs: strm(sint)): strm(sint) =
$lazy
(
let
val-
strmcon_cons(x0, xs) = !xs
in
strmcon_cons
(x0, helper(strm_filter(xs))) where
{
#impltmp filter$test<sint>(x1) = (x1 % x0 > 0)
}
end
) (* end of [helper] *)
} (* en dof [thePrimes] *)

(* ****** ****** *)

local
val
the_dir = a0rf(0)
in//local
//
fun
dir_set_next
((*void*)) = set(the_dir,  1)
fun
dir_set_prev
((*void*)) = set(the_dir, -1)
//
#impltmp
<(*tmp*)>
StreamDemo$dir() = get(the_dir)
//
end // end of [val]

(* ****** ****** *)
(* ****** ****** *)
//
#extern
fun
JS_StreamDemo_next(): void = $extnam()
#extern
fun
JS_StreamDemo_prev(): void = $extnam()
#extern
fun
JS_StreamDemo_show_none(): void = $extnam()
#extern
fun
JS_StreamDemo_show_some(x0: sint): void = $extnam()
//
(* ****** ****** *)
(* ****** ****** *)
//
val
thePrimes_moves_ref =
(
a0rf
(thePrimes_moves)) where
{
val
thePrimes_moves =
StreamDemo_moves(thePrimes)
}
//
(* ****** ****** *)
(* ****** ****** *)
//
#implfun
JS_StreamDemo_next() =
let
//
val () =
dir_set_next()
//
val xs =
get(thePrimes_moves_ref)
//
val+
strxcon_cons(x0, xs) = !xs
//
val () =
set(thePrimes_moves_ref, xs)
//
in//let
//
case- x0 of
|optn_cons(p0) => JS_StreamDemo_show_some(p0)
//
end(*let*)//end-of-[JS_StreamDemo_next((*void*))]
//
(* ****** ****** *)
//
#implfun
JS_StreamDemo_prev() =
let
//
val () =
dir_set_prev()
//
val xs =
get(thePrimes_moves_ref)
//
val+
strxcon_cons(x0, xs) = !xs
//
val () =
set(thePrimes_moves_ref, xs)
//
in//let
//
case+ x0 of
|optn_nil() => JS_StreamDemo_show_none()
|optn_cons(p0) => JS_StreamDemo_show_some(p0)
//
end(*let*)//end-of-[JS_StreamDemo_prev((*void*))]
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(*
The end of
[XATSHOME/contrib/githwxi/pground/proj002@250507/misc009/StreamDemo.dats]
*)
(***********************************************************************)
