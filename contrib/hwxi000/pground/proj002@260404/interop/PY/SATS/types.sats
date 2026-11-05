(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-11-03:
Tue Nov  3 05:37:38 PM EST 2026
*)
(* ****** ****** *)
(* ****** ****** *)
#abstype
pylist_type(a:type)
#sexpdef
pylist = pylist_type
(* ****** ****** *)
(* ****** ****** *)
#abstype fpath_type
#typedef fpath = fpath_type
#abstype fmode_type
#typedef fmode = fmode_type
#abstype fdesc_type
#typedef fdesc = fdesc_type
(* ****** ****** *)
(* ****** ****** *)
#abstype TextIO_type
#typedef TextIO = TextIO_type
#abstype BytesIO_type
#typedef BytesIO = BytesIO_type
#abstype StringIO_type
#typedef StringIO = StringIO_type
(* ****** ****** *)
(* ****** ****** *)
//
(**********************************************************************)
(**********************************************************************)
//
#extern
fcast
fpath_strn$encd(path: strn): fpath
#extern
fcast
fpath_strn$decd(path: fpath): strn
//
#symload fpath with fpath_strn$encd
#symload strn$decd with fpath_strn$decd
//
(**********************************************************************)
(**********************************************************************)
(*
end of
[
XATSHOME\
/contrib/hwxi000/pground/proj002@260404/interop/PY/SATS/types.sats]
*)
(**********************************************************************)
(**********************************************************************)
