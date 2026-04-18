(* ****** ****** *)
(* ****** ****** *)
//
(*
HX-2026-04-17:
Fri Apr 17 05:58:25 PM EDT 2026
*)
//
(* ****** ****** *)
(* ****** ****** *)
#staload "./Payroll.sats"
(* ****** ****** *)
#staload "\
prelude/almanac/pre2026/SATS/i1range.sats"
(* ****** ****** *)
//
#implval
INITIAL_MAXIMUM_SIZE = 1024
//
(* ****** ****** *)
(* ****** ****** *)
//
#absimpl
Payroll_type = @{
  current_size= nint,
  maximum_size= nint,
  employee_a1sz= a1sz(optn(Employee))
}
//
(* ****** ****** *)
(* ****** ****** *)
//
#impltmp
<(*tmp*)>
Payroll_Employee$foritm
  (this) =
(
  forall(this.employee_a1sz)
) where
{
//
#typedef e1 = Employee
#typedef x0 = optn(Employee)
//
impltmp
forall$test<x0>(x0) =
(
case+ x0 of
|optn_nil() => false
|optn_cons(e1) =>
(
let
val () =
(
  foritm$work<e1>(e1)) in (true) end)
}
//
(* ****** ****** *)
(* ****** ****** *)
//
#implfun
Payroll_add$employee$raw
( this:
& Payroll, x0: Employee) =
(
  this.employee_a1sz[n0] := t0)
where
{
val t0 = optn_cons(x0)
val n0 = this.current_size
val () = this.current_size := n0+1 }
//
(* ****** ****** *)
(* ****** ****** *)
//
#implfun
Payroll_index$remove$raw
( this:
& Payroll, i0: nint) =
(
GSEQ(range(i0, n0-1)).foritm(
lam(i1:sint) => A0[i1] := A0[i1+1])
)
where
{
val n0 = this.current_size
val () = this.current_size := n0-1
val A0 = this.employee_a1sz(*void*) }
//
(* ****** ****** *)
(* ****** ****** *)
//
#implfun
Payroll_add$payroll
( this:
& Payroll, source: Payroll) =
(
Payroll_Employee$foritm(source))
where
{
#typedef
x0 = Empyloyee
#impltmp
foritm$work<x0>(x0) =
Payroll_add$employee$raw(this, x0) }
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [hwxi000/pground/proj002@260404/bucs392/assigns/01/Solution/Payroll.sats] *)
(***********************************************************************)
