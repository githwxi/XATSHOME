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
}(*where*)//end-of-[impltmp(fpath_char$strmize$exn<>(fpx))]
//
(* ****** ****** *)
(* ****** ****** *)
//
(* ****** ****** *)(* ****** ****** *)(* ****** ****** *)
(* end of [XATSHOME/contrib/githwxi/xatslib/DATS/CATS/PY/mylib00_fpath00.hats]
(* ****** ****** *)(* ****** ****** *)(* ****** ****** *)
