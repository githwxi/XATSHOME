(**********************************************************************)
(**********************************************************************)
(*
HX-2026-11-03:
Tue Nov  3 09:38:54 PM EST 2026
*)
(**********************************************************************)
(**********************************************************************)
//
#staload "./../SATS/types.sats"
//
(**********************************************************************)
(**********************************************************************)
//
#extern
fun<>
sys_argv(): pylist(strn)
//
#extern
fun<>
sys_path(): pylist(strn)
//
#extern
fun<>
sys_stdin((*void*)): TextIO
#extern
fun<>
sys_stdout((*void*)): TextIO
#extern
fun<>
sys_stderr((*void*)): TextIO
//
#extern
fun<>
sys_platform((*void*)): (strn)
//
(**********************************************************************)
(**********************************************************************)
//
#extern
fun<>
io_open
(path: fpath, mode: fmode): TextIO
#impltmp
io_open<>
(path, mode) =
(
XATS2PY_io_open(path, mode))
where
{
#extern
fun
XATS2PY_io_open
(path: fpath, mode: fmode): TextIO = $extnam()
}
//
(* ****** ****** *)
//
#extern
fun<>
io_BytesIO(): BytesIO
#extern
fun<>
io_StringIO(): StringIO
//
(**********************************************************************)
(**********************************************************************)
//
#extern
fun<>
os_getcwd(): strn
#impltmp
os_getcwd<>() =
(
XATS2PY_os_getcwd())
where
{
#extern
fun
XATS2PY_os_getcwd(): strn = $extnam()
}
//
#extern
fun<>
os_chdir(path: fpath): void
#impltmp
os_chdir<>(path) =
(
XATS2PY_os_chdir(path))
where
{
#extern
fun
XATS2PY_os_chdir(path: fpath): void = $extnam()
}
//
#extern
fun<>
os_mkdir(path: fpath): void
#impltmp
os_mkdir<>(path) =
(
XATS2PY_os_mkdir(path))
where
{
#extern
fun
XATS2PY_os_mkdir(path: fpath): void = $extnam()
}
//
#extern
fun<>
os_listdir(path: fpath): pylist(strn)
#impltmp
os_listdir<>(path) =
(
XATS2PY_os_listdir(path))
where
{
#extern
fun
XATS2PY_os_listdir(path: fpath): pylist(strn) = $extnam()
}
//
(**********************************************************************)
(**********************************************************************)
(*
end of
[
XATSHOME\
/contrib/hwxi000/pground/proj002@260404/interop/PY/DATS/system.dats]
*)
(**********************************************************************)
(**********************************************************************)
