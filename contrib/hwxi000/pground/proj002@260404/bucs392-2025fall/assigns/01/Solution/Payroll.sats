(* ****** ****** *)
(* ****** ****** *)
//
(*
HX-2026-04-17:
Fri Apr 17 04:17:31 PM EDT 2026
*)
//
(* ****** ****** *)
(* ****** ****** *)
//
#abstype Payroll_type
#typedef Payroll = Payroll_type
#abstype Employee_type
#typedef Employee = Employee_type
//
(* ****** ****** *)
(* ****** ****** *)
//
fun
Payroll_make(): Payroll
//
val
INITIAL_MAXIMUM_SIZE: nint // = 1024
//
fun
Payroll_add$employee$raw
  (this: Payroll, x: Employee): void
//
fun
Payroll_index$remove$raw
  (this: Payroll, index: nint): void
//
(* ****** ****** *)

(*
fun<>
Payroll_Employee$forall(this: Payroll): bool
*)
fun<>
Payroll_Employee$foritm(this: Payroll): void

(* ****** ****** *)

fun
Payroll_name$find(this: Payroll, name: strn): sint

(* ****** ****** *)
//
fun
Payroll_add$payroll(this: Payroll, source: Payroll): void
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [hwxi000/pground/proj002@260404/bucs392-2025fall/assigns/01/Solution/Payroll.sats] *)
(***********************************************************************)
