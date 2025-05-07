(* ****** ****** *)
#include
"prelude/HATS/prelude_dats.hats"
(* ****** ****** *)
//
#if
defq(_XATS2PY_)
#include
"prelude/HATS/prelude_PY_dats.hats"
#endif//#ifdefq
//
#if
defq(_XATS2JS_)
#include
"prelude/HATS/prelude_JS_dats.hats"
#include
"prelude/HATS/prelude_NODE_dats.hats"
#endif//#ifdefq
//
(* ****** ****** *)
//
val () = println("Hello, world!")
//
(* ****** ****** *)(* ****** ****** *)(* ****** ****** *)
(* ****** ****** *)(* ****** ****** *)(* ****** ****** *)
