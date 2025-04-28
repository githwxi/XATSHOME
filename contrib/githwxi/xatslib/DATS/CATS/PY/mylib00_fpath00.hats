(* ****** ****** *)
(* ****** ****** *)
#staload
"xatslib\
/libcats/DATS/gbas000.dats"
(* ****** ****** *)
(* ****** ****** *)
#staload
"./../../../DATS/mylib00.dats"
(* ****** ****** *)
(* ****** ****** *)
//
(*
#extern
fun<>
fpath_char$strmize$exn
  (fpx: fpath): strm_vt(char)
*)
//
(*
def GITHWXI_fpath_readfile$exn(fpx):
  fhandle = open(fpx, "r")
  content = file.read()
  fhandle.close()
  return content
*)
//
#impltmp
<(*tmp*)>
fpath_char$strmize$exn(fpx) =
(
strn_strmize
(
GITHWXI_fpath_readfile$exn(fpx)))
where{
#extern
fun
GITHWXI_fpath_readfile$exn(fpx: fpath): strn = $extnam()
}(*where*)//end-of-[impltmp(fpath_char$strmize$exn(fpx))]
//
(* ****** ****** *)
(* ****** ****** *)
//
#impltmp
<(*tmp*)>
g_stdin$chunk$strmize$exn
  ( (*void*) ) =
(
  auxmain((*0*))
) where
{
//
fun
auxmain
((*0*)):
strm_vt(strn) = $llazy
let
//
val
line = // with newline
GITHWXI_stdin$readline$exn()
//
in//let
//
if
(length(line) = 0)
then strmcon_vt_nil() else
(
strmcon_vt_cons(line, auxmain((*0*))))
//
end(*let*)//end-of-[fun(auxmain((*0*)))]
//
} where
{
//
  #extern
  fun
  GITHWXI_stdin$readline$exn(): strn = $extnam()
//
}(*where*)//end-of-[impltmp(g_stdin$chunk$strmize$exn<>()]
//
(* ****** ****** *)
(* ****** ****** *)
//
(* ****** ****** *)(* ****** ****** *)(* ****** ****** *)
(* end of [XATSHOME/contrib/githwxi/xatslib/DATS/CATS/PY/mylib00_fpath00.hats]
(* ****** ****** *)(* ****** ****** *)(* ****** ****** *)
