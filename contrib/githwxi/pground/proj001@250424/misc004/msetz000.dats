(* ****** ****** *)
(* ****** ****** *)
(*
HX-2025-12-26:
Fri Dec 26 08:51:20 PM EST 2025
*)
(* ****** ****** *)
(* ****** ****** *)
//
#include
"prelude/HATS/prelude_dats.hats"
#include
"prelude/HATS/prelude_JS_dats.hats"
//
(* ****** ****** *)
(* ****** ****** *)
//
fun
strn_msetize(cs: strn) =
lsrt_msetize(
UN_lsrt_encd(
list_vt2t(mergesort0(listize(cs)))))
//
(* ****** ****** *)
(* ****** ****** *)
//
val mcs =
strn_msetize("Hello, world!")
val ( ) = printsln("mcs = ", mcs)
//
local
#impltmp
g_print<char>(ch) =
prints("'", ch, "'")
in//local
val mcs = UN_lsrt_encd(mcs)
val ( ) = printsln("mcs = ", mcs)
end//local
//
(* ****** ****** *)
//
#typedef k0 = char
#typedef x0 = sint
#typedef m0 = lsrt@(k0, x0)
//
val
mymap_get$at = 
gmap_get$at<m0><k0><x0>(*void*)
#symload [] with mymap_get$at of 1000
//
val ( ) = printsln("H: ", mcs['H'])
val ( ) = printsln("e: ", mcs['e'])
val ( ) = printsln("l: ", mcs['l'])
val ( ) = printsln("l: ", mcs['l'])
val ( ) = printsln("o: ", mcs['o'])
//
val ( ) =
printsln("w: ", mymap_get$at(mcs, 'w'))
val ( ) =
printsln("o: ", mymap_get$at(mcs, 'o'))
val ( ) =
printsln("r: ", mymap_get$at(mcs, 'r'))
val ( ) =
printsln("l: ", mymap_get$at(mcs, 'l'))
val ( ) =
printsln("d: ", mymap_get$at(mcs, 'd'))
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
(* end of [githwxi/pground/proj001@250424/misc004/msetz000.dats] *)
(***********************************************************************)
