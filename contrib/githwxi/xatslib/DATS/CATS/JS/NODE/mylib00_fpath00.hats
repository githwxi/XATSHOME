(* ****** ****** *)
(* ****** ****** *)
#staload
"xatslib\
/libcats/DATS/gbas000.dats"
(* ****** ****** *)
(* ****** ****** *)
#staload
"./../../../../DATS/mylib00.dats"
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
function
GITHWXI_NODE_fpath_readFileSync$exn(fpx, enc)
{
  return XATS2JS_NODE_fs.readFileSync(fpx, enc);
}
*)
//
#impltmp
<(*tmp*)>
fpath_char$strmize$exn(fpx) =
(
strn_strmize
(
GITHWXI_NODE_fpath_readFileSync$exn(fpx, "utf-8")))
where{
#extern
fun
GITHWXI_NODE_fpath_readFileSync$exn(fpx: fpath, enc: strn): strn = $extnam()
}(*where*)//end-of-[impltmp(fpath_char$strmize$exn<>(fpx))]
//
(* ****** ****** *)
(* ****** ****** *)
//
#impltmp
<(*tmp*)>
g_stdin$chunk$strmize$exn
  ( (*void*) ) =
(
  auxmain(buffer)
) where
{
//
val STDIN = 0(*fd*)
(*
val BUFSZ = ( 1024 )
*)
val BUFSZ =
g_stdin$chunk$bufsz<>()
//
val buffer =
GITHWXI_Buffer_alloc(BUFSZ)
//
fun
auxmain
( buffer
: Buffer): strm_vt(strn) = $llazy
let
val nread =
GITHWXI_NODE_readSyn$exn(STDIN, buffer)
in//let
if
(nread = 0)
then strmcon_vt_nil() else
(
strmcon_vt_cons(string, auxmain(buffer)))
where
{
val string = // start: 0; finish: nread
GITHWXI_Buffer_toString(buffer, "utf-8", 0, nread)
}
end//let
} where
{
  #abstype Buffer
  #extern
  fun
  GITHWXI_Buffer_alloc
  (bufsz: sint): Buffer = $extnam()
  #extern
  fun
  GITHWXI_Buffer_toString
  (Buffer, strn, sint, sint): strn = $extnam()
  #extern
  fun
  GITHWXI_NODE_readSyn$exn(sint, Buffer): sint = $extnam()
}(*where*)//end-of-[impltmp(g_stdin$chunk$strmize$exn((*void*)))]
//
(* ****** ****** *)
(* ****** ****** *)
//
(* ****** ****** *)(* ****** ****** *)(* ****** ****** *)
(* end of [XATSHOME/contrib/githwxi/xatslib/DATS/CATS/JS/NODE/mylib00_fpath00.hats]
(* ****** ****** *)(* ****** ****** *)(* ****** ****** *)
