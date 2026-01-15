(* ****** ****** *)
(* ****** ****** *)
(*
HX-2026-01-14:
Wed Jan 14 08:36:03 PM EST 2026
Plz find the original version of
this program in DATS/brainfxxk.dats
(written by Gavin Zhao around 2025/01)
This version is mainly for testing
a methold for performing so-called
"manual tail-recursion optimization"
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
val UCHARMAX = 255
val TAPESIZE = 4096
(* ****** ****** *)
(* ****** ****** *)
#typedef cell = uint
#typedef mptr = uint
(* ****** ****** *)
(* ****** ****** *)
excptcon Overflow of ()
excptcon Underflow of ()
excptcon RBNotFound of ()
excptcon LBNotFound of ()
(* ****** ****** *)
(* ****** ****** *)
//
fun
<a:vt>
raise$Underflow
( (*void*) ): (a) =
(
$raise Underflow())
where
{
val () =
console_log("raise$Underflow")
}
//
fun
<a:vt>
raise$Overflow
( (*void*) ): (a) =
(
$raise Overflow())
where
{
val () =
console_log("raise$Overflow")
}
//
fun
<a:vt>
raise$RBNotFound
( (*void*) ): (a) =
(
$raise RBNotFound())
where
{
val () =
console_log("raise$RBNotFound")}
//
fun
<a:vt>
raise$LBNotFound
( (*void*) ): (a) =
(
$raise LBNotFound())
where
{
val () =
console_log("raise$LBNotFound")}
//
(* ****** ****** *)
(* ****** ****** *)
//
fun
bf$interp
(src: strn): void =
let
  val pln: sint = strn_length(src)
  and pst: a1rf(sint) = a1rf_make_ncpy(TAPESIZE, 0)
  
  fun find_match_rb 
    (sta: sint): sint = let
      fun loop 
        (idx: sint, acc: sint): sint = 
          if idx >= pln
          then raise$RBNotFound()
          else (
            case+ 0 of
            | _ when (src[idx] = '[') => loop (idx + 1, acc + 1)
            | _ when (src[idx] = ']') => if acc = 1 then idx else loop (idx + 1, acc - 1)
            | _ => loop (idx + 1, acc)
          )
  in
    loop (sta + 1, 1)
  end

  fun find_match_lb 
    (sta: sint): sint = let
      fun loop 
        (idx: sint, acc: sint): sint = 
          if idx = (-1)
          then raise$LBNotFound()
          else (
            case+ 0  of
            | _ when (src[idx] = '[') => if acc = 1 then idx else loop (idx - 1, acc - 1)
            | _ when (src[idx] = ']') => loop (idx - 1, acc + 1)
            | _ => loop (idx - 1, acc)
          )
  in
    loop (sta - 1, 1)
  end
  
  #typedef frm3 = (sint, sint)
//
  fun loop
  ( pct: sint
  , ptr: sint): void =
  let
  val frm =
    search0(
      f1un_iter<frm3>
      (loop$trans, (pct, ptr)))
  end where
  {
  #impltmp
  search$test1<frm3>(frm) = (frm.0 >= pln)
  }
//
  and
  loop$frame
  ( pct: sint
  , ptr: sint) = (pct, ptr)
//
  and
  loop$trans(frm: frm3): frm3 =
  let
    val
    (pct, ptr) = frm
  in
    if
    (pct >= pln)
    then (frm) else
    let
      val cur = pst[ptr]
    in
      case+ 0 of
      | _ when src[pct] = '+' => 
        (pst[ptr] := ifval(cur = UCHARMAX, 0, cur + 1); loop$frame(pct + 1, ptr))
      | _ when src[pct] = '-' =>
        (pst[ptr] := ifval(cur = 0, UCHARMAX, cur - 1); loop$frame(pct + 1, ptr))
      | _ when src[pct] = '<' =>
        if ptr = 0 then raise$Underflow() else loop$frame(pct + 1, ptr - 1)
      | _ when src[pct] = '>' =>
        if ptr + 1 = TAPESIZE then raise$Overflow() else loop$frame(pct + 1, ptr + 1)
      | _ when src[pct] = '.' =>
        let val () = print(char(cur)) in loop$frame(pct + 1, ptr) end
      | _ when src[pct] = ',' =>
        let val () = (pst[ptr] := 255) in loop$frame(pct + 1, ptr) end
      | _ when src[pct] = '[' => 
        if cur = 0 then loop$frame(find_match_rb pct, ptr) else loop$frame(pct + 1, ptr)
      | _ when src[pct] = ']' =>
        if cur != 0 then loop$frame(find_match_lb pct, ptr) else loop$frame(pct + 1, ptr)
      | _ (*otherwise*) => loop$frame(pct + 1, ptr)
    end
  end
in
  loop(0, 0)
end
//
(* ****** ****** *)
(* ****** ****** *)
//
val
hello_bf = "\
++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++."
val (  ) = bf$interp(hello_bf)
val (  ) = console_log(the_print_store_flush((*void*)))
//
(* ****** ****** *)
(* ****** ****** *)
//
val
hello2_bf = "\
+[-->-[>>+>-----<<]<--<---]>-.>>>+.>>..+++[.>]<<<<.+++.------.<<-.>>>>+."
val (  ) =
try
bf$interp
(hello2_bf)
with
| ~Overflow() =>
(
  printsln("Overflow() is raised!"))
| ~Underflow() =>
(
  printsln("Underflow() is raised!"))
| ~LBNotFound() =>
(
  printsln("LBNotFound() is raised!"))
| ~RBNotFound() =>
(
  printsln("RBNotFound() is raised!"))
// end-of-[try(bf$interp(hello2_bf))]
val (  ) = console_log(the_print_store_flush((*void*)))
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [githwxi/pground/proj001@250424/misc011/misc011.dats] *)
(***********************************************************************)
