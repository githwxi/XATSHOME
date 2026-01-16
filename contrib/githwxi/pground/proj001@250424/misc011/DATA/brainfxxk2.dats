(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-01-15:
The following code was written
by Gavin Zhao around 2023/2024?
https://github.com/GZGavinZhao
Thu Jan 15 07:31:38 PM EST 2026
The code is in ATS2, making use of
dependent types to ensure mem safety.
Hopefully, we will soon be able to
type-checking such code in ATS3!!!
*)
(* ****** ****** *)
(* ****** ****** *)

#include "share/atspre_define.hats"
#include "share/atspre_staload.hats"
#include "share/atspre_staload_libats_ML.hats"
#include "share/HATS/atslib_staload_libats_libc.hats"

#define TAPE_SIZE 4096

staload "libats/libc/SATS/stdio.sats"

typedef cell = uintLte(UCHAR_MAX)
typedef mptr = uintLt(TAPE_SIZE)
typedef mstate = (arrszref(cell), mptr)

exception Underflow of ()
exception Overflow of ()
exception RBNotFound of ()
exception LBNotFound of ()

fun interp {pl:nat} (prog: string(pl)): void = let
  val proglen: int(pl) = sz2i (string_length prog)
  and state: arrszref(cell) = arrszref_make_elt(g0i2u TAPE_SIZE, 0u)
  
  fun find_match_rb 
    {pn:nat | pn < pl} 
    (start: int(pn)): [px: nat | pn < px && px < pl] int(px) = let
      fun loop 
        {pi:nat | pn < pi && pi <= pl}
        .<pl - pi>.
        (idx: int(pi), acc: intGte(1)): [pr: nat | pn < pr && pr < pl] int(pr) = 
          if idx = proglen
          then $raise RBNotFound()
          else (
            case prog[idx] of
            | '\[' => loop (idx + 1, acc + 1)
            | '\]' => if acc = 1 then idx else loop (idx + 1, acc - 1)
            | _ => loop (idx + 1, acc)
          )
  in
    loop (start + 1, 1)
  end

  fun find_match_lb 
    {pn:nat | pn < pl} 
    (start: int(pn)): [px: nat | px < pn] int(px) = let
      fun loop 
        {pi:int | ~1 <= pi && pi < pn}
        .<pi + 1>.
        (idx: int(pi), acc: intGte(1)): [pr: nat | pr < pn] int(pr) = 
          if idx = ~1
          then $raise LBNotFound()
          else (
            case prog[idx] of
            | '\[' => if acc = 1 then idx else loop (idx - 1, acc - 1)
            | '\]' => loop (idx - 1, acc + 1)
            | _ => loop (idx - 1, acc)
          )
  in
    loop (start - 1, 1)
  end

  fun loop {pn:nat| pn <= pl + 1} (pc: int(pn), ptr: mptr): void =
    if pc >= proglen
    then ()
    else
      let
        val cur = state[ptr]
      in
        case prog[pc] of
        | '+' => 
          (state[ptr] := (if cur = UCHAR_MAX then 0u else cur + 1u: cell); loop (pc + 1, ptr))
        | '-' =>
          (state[ptr] := (if cur = 0 then i2u UCHAR_MAX else cur - 1u: cell); loop (pc + 1, ptr))
        | '<' =>
          if ptr = 0
          then $raise Underflow()
          else loop (pc + 1, ptr - 1u)
        | '>' =>
          if ptr + 1u = TAPE_SIZE
          then $raise Overflow()
          else loop (pc + 1, ptr + 1u)
        | '.' => (let val _ = putchar1(g0ofg1 (u2i cur)) in loop (pc + 1, ptr) end)
		| ',' => (state[ptr] := i2u (max (getchar1(), 0)); loop (pc + 1, ptr))
        | '\[' => 
          if cur = 0
          then loop (find_match_rb pc, ptr)
          else loop (pc + 1, ptr)
        | '\]' =>
          if cur != 0
          then loop (find_match_lb pc, ptr)
          else loop (pc + 1, ptr)
        | _ => loop (pc + 1, ptr)
      end
in
  loop (0, 0u)
end

implement main0 (argc, argv) =
    if argc < 2
    then println! "brainfuck <file-to-interpret>"
    else let
      val f: FILEref = fileref_open_exn (argv[1], file_mode_r)
      val raw = fileref_get_file_string f
      val () = fileref_close f
      val len = strptr_length raw
      val content: string = strptr2string raw
      (*
      val p: Strnptr1 = strptr2strnptr(raw)
      *)
    in
      if string_length content < 0
      then ()
      else interp content
    end

(***********************************************************************)
(* end of [githwxi/pground/proj001@250424/misc011/DATA/brainfxxk2.dats] *)
(***********************************************************************)
