(* ****** ****** *)
(* ****** ****** *)
#staload UN =
"prelude/SATS/unsfx00.sats"
(* ****** ****** *)
#staload DB = "./doublets.dats"
(* ****** ****** *)
(* ****** ****** *)
#include
"prelude\
/almanac/HATS/pre2026_sats.hats"
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
#include
"prelude/HATS/prelude_JS_cats.hats"
#include
"prelude/HATS/prelude_JS_dats.hats"
//
(* ****** ****** *)
(* ****** ****** *)
//
#extern
fun
JS_doublets_arg1
  ( (*void*) ): strn = $extnam()
#extern
fun
JS_doublets_arg2
  ( (*void*) ): strn = $extnam()
#extern
fun
JS_doublets_dict
  ( (*void*) ): strn = $extnam()
//
(* ****** ****** *)
(* ****** ****** *)
//
#extern
fun
JS_doublets_main
  ( (*void*) ): void = $extnam()
//
#implfun
JS_doublets_main
  ( (*void*) ) =
let
//
val arg1 =
JS_doublets_arg1()
val arg2 =
JS_doublets_arg2()
//
val dct0 =
JS_doublets_dict()
val dct1 =
dict_line$split(dct0)
val dct2 =
UN_asrt_encd(
a1sz_make_lstrm(dct1))
//
val sols =
$DB.doublets_solve(arg1, arg2, dct2)
//
in//let
//
case+ !sols of
| ~
strmcon_vt_nil() =>
printsln
( "[", arg1
, "] and [", arg2, "] are not a doublet!")
| ~
strmcon_vt_cons
( wpth , sols ) =>
let
val () = free(sols)
in//let
//
printsln(
"[", arg1, "] and [", arg2, "] are a doublet:\n")
;
list_rforitm$f1un(wpth, lam(wdx) => println(wdx))
//
end//let
//
end where // end-of-(let)
{
//
fun
dict_line$split
 ( dt: strn ): strm_vt(strn) =
(
strm_vt_map0$f1un<rs>(css, lam(cs) => strn_make_llist(cs))
) where
{
#typedef
c0 = cgtz
#vwtpdef
cs = strn
#vwtpdef
rs = list_vt(cgtz)
val css =
gseq_segmentize0$f1un_lstrm$llist<cs><c0>(dt, lam(ch) => (ch = '\n'))
}(*where*)//end-of-[dict_line$split(dt)]
//
}(*where*)//end-of-[JS_doublets_main((*void*))]
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(*
The end of
[XATSHOME/contrib/githwxi/pground/proj002@250507/misc011/JS_doublets.dats]
*)
(***********************************************************************)
