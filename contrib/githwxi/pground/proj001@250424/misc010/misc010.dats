(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-01-12:
Mon Jan 12 09:26:32 AM EST 2026
*)
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
#include
"prelude/HATS/prelude_JS_dats.hats"
//
(* ****** ****** *)
(* ****** ****** *)

(*
-- HX-2026-01-12:
-- Here is a Haskell version:
primes = sieve [2..] where
  sieve (p:xs) =
    p : sieve [x | x <- xs, x `mod` p /= 0]
*)

(* ****** ****** *)
(* ****** ****** *)
//
#sexpdef ls = strm_vt
//
#symload :: with list_cons
#symload :: with list_vt_cons
#symload :: with strmcon_cons
#symload :: with strqcon_cons
#symload :: with strxcon_cons
#symload :: with strmcon_vt_cons
#symload :: with strqcon_vt_cons
#symload :: with strxcon_vt_cons
//
#symload from with sint_gte$strmize
//
(* ****** ****** *)
(* ****** ****** *)
//
val
thePrimes =
sieve(from(2)) where
{
  #vwtpdef xs = ls(si)
  fun sieve(xs: xs): xs =
    let val (p :: xs) = !xs in
      $llazy(
        p :: sieve(filter0(xs,lam(x:si)=>x%p>0)))
    end // end-of-[let val (p :: xs) = !xs in ...]
}
//
(* ****** ****** *)
//
val () = print0s("thePrimes = ", thePrimes, '\n')
val () = console_log(the_print_store_flush((*void*)))
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [githwxi/pground/proj001@250424/misc010/misc010.dats] *)
(***********************************************************************)
