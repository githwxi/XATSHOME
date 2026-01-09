(* ****** ****** *)
(*
HX-2026-01-08:
Just this little bit of code
should already convince one to
adopt linear types :) Cheers!!!
Thu Jan  8 11:07:30 PM EST 2026
*)
(* ****** ****** *)
//
#extern
fun
<st:vt>
STmonad$init(): st
#extern
fun
<st:vt>
STmonad$free(st: st): void
//
(* ****** ****** *)
(* ****** ****** *)
//
#extern
fun
<st:vt>
<x0:vt>
STmonad$return
(   x0: x0   ): (!st) -> x0
#impltmp
< st:vt >
< x0:vt >
STmonad$return(x0) = lam(st) => (x0)
//
(* ****** ****** *)
(* ****** ****** *)
//
#extern
fun
<st:vt>
<x0:vt>
<y0:vt>
STmonad$bind
( mx: (!st) -> x0
, fopr: (!st, x0) -> y0): (!st) -> y0
#impltmp
< st:vt >
< x0:vt >
< y0:vt >
STmonad$bind(mx, fopr) =
lam(st) =>
let val x0 = mx(st) in fopr(st, x0) end
//
(* ****** ****** *)
(* ****** ****** *)
//
#extern
fun
<st:vt>
<x0:vt>
STmonad$runST(mx: (!st) -> x0): x0
#impltmp
< st:vt >
< x0:vt >
STmonad$runST(mx) =
let
val st =
STmonad$init<st>()
in//let
let
val x0 = mx(st)
val () = STmonad$free<st>(st) in x0 end
end//let//end-of-[STmonad$runST<st><x0>(mx)]
//
(***********************************************************************)
(* end of [githwxi/pground/proj001@250424/misc007/STmonad0.dats] *)
(***********************************************************************)
