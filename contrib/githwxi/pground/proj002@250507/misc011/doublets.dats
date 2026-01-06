(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-01-04:
Sun Jan  4 02:59:06 PM EST 2026
*)
(* ****** ****** *)
(* ****** ****** *)
//
#staload "./ggrph.dats"
//
#staload _ =
"./../misc008/gtree.dats"
//
(* ****** ****** *)
(* ****** ****** *)
//
#include
"prelude\
/almanac/HATS/pre2026_sats.hats"
//
(* ****** ****** *)
(* ****** ****** *)
//
#include
"prelude/HATS/prelude_dats.hats"
#include
"prelude\
/almanac/HATS/pre2026_dats.hats"
//
#include
"prelude/HATS/prelude_JS_dats.hats"
//
(* ****** ****** *)
(* ****** ****** *)
//
fun
word_adjs$get
( wd0: strn )
: strm_vt(strn) =
(
  helper0(0)) where
{
//
val ln = length(wd0)
//
fun
helper0
(i0: nint) =
(
if
(i0 >= ln)
then
(
strm_vt_nil((*0*)))
else
(
helper1(i0, c0, c1))
where
{
val c0 =
wd0[i0] and c1 = 'a'})
//
and
helper1
( i0: nint
, c0: char
, c1: char)
: strm_vt(strn) = $llazy
(
if
(c1 > 'z')
then !
(
helper0(i0+1))
else
(
if
(c0 = c1)
then !
(
helper1(i0, c0, c1+1))
else
let
val wd1 =
(
  fset$at(wd0, i0, c1))
in//let
strmcon_vt_cons(
wd1, helper1(i0, c0, c1+1))
end//let//end(else)//end(if(c0=c1))
))
//
}(*where*)//end-of-[word_adjs$get(node)]
//
(* ****** ****** *)
//
(*
//
val wd0 = "abc"
val wds =
word_adjs$get(wd0)
local
#impltmp
strm_vt_print$len<>() = -1
in//local
val ( ) =
print0s("word_adjs$get(\"xyz\") = ", wds, "\n")
end//local
//
*)
//
(* ****** ****** *)
(* ****** ****** *)
//
(*
//
fun
word_test
(wd0: strn): bool =
gasq_sortedq<strn><char>(wd0)
//
fn0
word_adjs$get
( wd0: strn )
: strm_vt(strn) =
strm_vt_filter0$f1un
(
word_adjs$get(wd0), word_test)
//
#impltmp
ggrph$node_adjs$get
<  strn  >(  wd0  ) =
(
  word_adjs$get(  wd0  ))
//
val wd0 = "abc"
val wds =
ggrph$node_bfs$strmize<strn>(wd0)
//
local
#impltmp
strm_vt_print$len<>() = 1000
in//local
val ( ) = print0s("\
node_adjs$get(\"",wd0,"\") = ",wds,"\n")
end//local
//
*)
//
(* ****** ****** *)
(* ****** ****** *)
//
fun
dict_wordize
( dict: strn ): strm_vt(strn) =
(
strm_vt_map0$f1un<rs>
(css, lam(cs) => strn_make_llist(cs)))
where
{
//
#typedef c0 = cgtz
#vwtpdef cs = strn
#vwtpdef rs = list_vt(cgtz)
//
val css =
gseq_segmentize0$f1un_lstrm$llist<cs><c0>(dict, lam(ch) => (ch = '\n'))
//
}(*where*)//end-of-[dict_wordize(dict)]
//
(* ****** ****** *)
(* ****** ****** *)
//
#extern
fun
doublets_solve
( wd1: strn
, wd2: strn
, dct: asrt(strn)
) : strm_vt(list(strn))
//
#implfun
doublets_solve
(wd1, wd2, dct) =
let
//
#typedef
node = list(strn)
//
fun
word_test
(wd0: strn): bool =
(
asrt_memberq(dct, wd0))
//
#impltmp
ggrph$node_equal
<     node     >
(   nd1, nd2   ) =
(
g_equal
<strn>(wd1, wd2))
where
{
val-list_cons(wd1, _) = nd1
val-list_cons(wd2, _) = nd2 }
//
fun
node_adjs$get
( nd0: node )
: strm_vt(node) =
let
val-
list_cons(wd0, _) = nd0
//
val wds =
word_adjs$get(wd0)
val wds =
strm_vt_filter0(wds)
where
{
#impltmp
filter$test1<strn> = word_test}
//
in//let
strm_vt_map0$f1un
( wds
, lam wd1 => list_cons(wd1, nd0))
end//let
//
in//let
//
let
//
val nd0 = 
list_sing(wd1)
//
#impltmp
ggrph$node_adjs$get
<  node  >(  nd0  ) =
(
  node_adjs$get(  nd0  ))
//
fun
node_test
(ndx: node): bool =
let
val-
list_cons
(wdx, _) = ndx in (wd2=wdx) end
//
in//let
(
strm_vt_filter0<node>
(
  ggrph$node_bfs$strmize<node>(nd0)))
where
{
#impltmp filter$test1<node> = node_test
}
end//let
//
end(*let*)//end-of-[doublets_solve(wd1,wd2,dct)]
//
(* ****** ****** *)
(* ****** ****** *)
//
val () = console_log(the_print_store_flush((*void*)))
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(*
The end of
[XATSHOME/contrib/githwxi/pground/proj002@250507/misc010/doublets.dats]
*)
(***********************************************************************)
