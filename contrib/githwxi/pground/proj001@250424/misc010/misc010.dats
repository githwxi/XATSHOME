(*
primes = filterPrime [2..] where
  filterPrime (p:xs) =
    p : filterPrime [x | x <- xs, x `mod` p /= 0]
*)

#symload :: with strmcon_vt_cons
#symload from with sint_gte$strmize

val
thePrimes =
sieve(from(2)) where{
  fun
  sieve(xs) =
  let val (p :: xs) = !xs in
    $llazy(
      p :: sieve(xs.filter0(lam(x:si)=>x%p>0)))
  end // end-of-[let val (p :: xs) = !xs in ...]
}
