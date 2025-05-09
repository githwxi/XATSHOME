(* ****** ****** *)
(* ****** ****** *)
//
#include
"prelude/HATS/prelude_dats.hats"
//
#include
"prelude/HATS/prelude_JS_dats.hats"
#include
"prelude/HATS/prelude_NODE_dats.hats"
//
(* ****** ****** *)
//
#staload
"./../../..\
/xatslib/DATS/mylib00.dats"
#staload
"./../../..\
/xatslib/DATS/CATS/JS/NODE/mylib00.dats"
//
(* ****** ****** *)
(* ****** ****** *)
//
val tally =
strm_vt_folditm0(lines, 0)
where
{
//
#typedef x0 = strn
#typedef r0 = sint
//
val lines =
g_stdin$line$strmize$exn<>()
//
#impltmp
folditm$fopr0<x0><r0>(r0, x0) =
case+
g_parse$opt(x0) of
| ~optn_vt_nil() => r0
| ~optn_vt_cons(i0) => (r0+i0) }
//
val ((*0*)) = printsln("tally = ", tally)
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [githwxi/pground/proj001@250424/misc002/tally000.dats] *)
(***********************************************************************)
