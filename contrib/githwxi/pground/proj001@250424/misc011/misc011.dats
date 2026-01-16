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
(*
val () =
console_log("raise$Underflow")
*)
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
(*
val () =
console_log("raise$Overflow")
*)
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
(*
val () =
console_log("raise$RBNotFound")
*)
}
//
fun
<a:vt>
raise$LBNotFound
( (*void*) ): (a) =
(
$raise LBNotFound())
where
{
(*
val () =
console_log("raise$LBNotFound")
*)
}
//
(* ****** ****** *)
(* ****** ****** *)
//
#extern
fun<>
bf$getchar(): nint
#extern
fun<>
bf$putchar(chr: sint): void
//
(* ****** ****** *)
//
fun<>
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
        let val () = bf$putchar<>(cur) in loop$frame(pct + 1, ptr) end
      | _ when src[pct] = ',' =>
        let val () = (pst[ptr] := bf$getchar<>()) in loop$frame(pct + 1, ptr) end
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
fun 
bf$interp$try
(src: strn): void =
(
try
bf$interp<>(src)
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
) where
{
#impltmp
<(*tmp*)>
bf$getchar() = 0
#impltmp
<(*tmp*)>
bf$putchar(chr) = print(char(chr))
}(*where*)//end-of-[bf$interp$try(src)]
//
(* ****** ****** *)
(* ****** ****** *)
//
fun 
bf$interp$try__inp
(src: strn, inp: strn): void =
(
try
bf$interp<>(src)
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
) where // end-of-(try(bf$interp<>(src))
{
//
val
len = length(inp)
//
var
idx: nint = ( 0 )
#impltmp
<(*tmp*)>
bf$getchar() =
if // if
idx >= len
then 255 else
let
val
chr = inp[idx] in//let
idx:=idx+1; char_to$code(chr) end
//
(*
val
getchar =
f0un_enum$make_strx_vt
(     auxmain(0)     )
where
{
fun
auxmain
(i: sint) = $llazy
(
strxcon_vt_cons
(ch, auxmain(i+1))) where
{
val ch =
ifval(i < len,
char_to$code(inp[i]), 255)}}
#impltmp
<(*tmp*)>
bf$getchar() = getchar((*0*))
*)
//
#impltmp
<(*tmp*)>
bf$putchar(chr) = print(char(chr))
//
}(*where*)//end-of-[bf$interp$try(src)]
//
(* ****** ****** *)
(* ****** ****** *)
//
val
hello_bf = "\
++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++."
val (  ) =
printsln("\
bf$interp$try(hello_bf):")
val (  ) = bf$interp$try(hello_bf)
val (  ) = console_log(the_print_store_flush((*void*)))
//
(* ****** ****** *)
(* ****** ****** *)
//
val
hello2_bf = "\
[\
This doesn't work because the tape is not growable and the address\
pointer starts at the left end of the tape\
]\
+[-->-[>>+>-----<<]<--<---]>-.>>>+.>>..+++[.>]<<<<.+++.------.<<-.>>>>+."
val (  ) =
printsln("\
bf$interp$try(hello2_bf):")
val (  ) = bf$interp$try(hello2_bf)
val (  ) = console_log(the_print_store_flush((*void*)))
//
(* ****** ****** *)
(* ****** ****** *)
//
val rot13_bf = "\
-,+[                         Read first character and start outer character reading loop\
    -[                       Skip forward if character is 0\
        >>++++[>++++++++<-]  Set up divisor (32) for division loop\
                               (MEMORY LAYOUT: dividend copy remainder divisor quotient zero zero)\
        <+<-[                Set up dividend (x minus 1) and enter division loop\
            >+>+>-[>>>]      Increase copy and remainder / reduce divisor / Normal case: skip forward\
            <[[>+<-]>>+>]    Special case: move remainder back to divisor and increase quotient\
            <<<<<-           Decrement dividend\
        ]                    End division loop\
    ]>>>[-]+                 End skip loop; zero former divisor and reuse space for a flag\
    >--[-[<->+++[-]]]<[         Zero that flag unless quotient was 2 or 3; zero quotient; check flag\
        ++++++++++++<[       If flag then set up divisor (13) for second division loop\
                               (MEMORY LAYOUT: zero copy dividend divisor remainder quotient zero zero)\
            >-[>+>>]         Reduce divisor; Normal case: increase remainder\
            >[+[<+>-]>+>>]   Special case: increase remainder / move it back to divisor / increase quotient\
            <<<<<-           Decrease dividend\
        ]                    End division loop\
        >>[<+>-]             Add remainder back to divisor to get a useful 13\
        >[                   Skip forward if quotient was 0\
            -[               Decrement quotient and skip forward if quotient was 1\
                -<<[-]>>     Zero quotient and divisor if quotient was 2\
            ]<<[<<->>-]>>    Zero divisor and subtract 13 from copy if quotient was 1\
        ]<<[<<+>>-]          Zero divisor and add 13 to copy if quotient was 0\
    ]                        End outer skip loop (jump to here if ((character minus 1)/32) was not 2 or 3)\
    <[-]                     Clear remainder from first division if second division was skipped\
    <.[-]                    Output ROT13ed character from copy and clear it\
    <-,+                     Read next character\
]                            End character reading loop\
" // end-of-(val rot13_bf = ...)
//
val (  ) = printsln("rot13_bf(abcdefghijklmnopqrstuvwxyz):")
val (  ) = bf$interp$try__inp(rot13_bf, "abcdefghijklmnopqrstuvwxyz")
val (  ) = console_log(the_print_store_flush((*____________________*)))
//
val (  ) = printsln("rot13_bf(nopqrstuvwxyzabcdefghijklm):")
val (  ) = bf$interp$try__inp(rot13_bf, "nopqrstuvwxyzabcdefghijklm")
val (  ) = console_log(the_print_store_flush((*____________________*)))
//
(* ****** ****** *)
(* ****** ****** *)
//
(***********************************************************************)
(* end of [githwxi/pground/proj001@250424/misc011/misc011.dats] *)
(***********************************************************************)
