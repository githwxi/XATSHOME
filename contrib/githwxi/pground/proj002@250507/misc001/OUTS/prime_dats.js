// Fri May  9 12:02:54 AM EDT 2025
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
// HX-2024-06-22:
// ATS3-XANADU/srcgen2/xats2js/srcgen1
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.

'use strict';

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
let XATSTOP0 = undefined
//
////////////////////////////////////////////////////////////////////////.
//
let XATSINT0 = (i0) => i0
//
let XATSINT1 = (i0) => i0
let XATSBOOL = (b0) => b0
let XATSFLT1 = (f0) => f0
/*
let XATSSFLT = (sf) => sf
let XATSDFLT = (df) => df
*/
let XATSSTRN = (cs) => cs
//
let XATSCNUL = (  ) => (0)
let XATSCHR1 = (  ) => (0)
let XATSCHAR =
    (ch) => ch.charCodeAt(0)
let XATSCHR2 =
    (ch) => ch.charCodeAt(0)
//
let XATSCHR3 = (ch) => {
    var c1 // current one
    c1 = ch.charCodeAt(1)
    if (c1 < 48||c1 > 55)
    {
      return c1 ; // ascii
    } else {
	var i1 = 2;
	var d1 = (c1 - 48);
	while (i1 < ch.length) {
	    c1 = ch.charCodeAt(i1);
	    if (c1===39) // SQUOTE=39
	    {
		return d1; // ascii
	    } else {
		d1 = 8*d1 + (c1 - 48)
	    }
	}
	return d1 ; // ascii code of [ch]
    }
}
//
////////////////////////////////////////////////////////////////////////.
/*
HX: this is historic:
let XATSVAR0 = () => [null]
let XATSVAR1 = (init) => [init]
let XATSFLAT = (addr) => addr[0]
*/
////////////////////////////////////////////////////////////////////////.

let XATSDAPP = (dapp) => dapp
let XATSCAPP = (_, capp) => capp
let XATSCAST = (_, args) => args[0]

////////////////////////////////////////////////////////////////////////.
//
let XATSPCON =
  (pcon, argi) => pcon[argi+1]
//
let XATSPFLT = (pflt) => pflt
let XATSPROJ = (proj) => proj
let XATSP0RJ = (p0rj) => p0rj
let XATSP1RJ = (_, p1rj) => p1rj
let XATSP1CN = (_, p1cn) => p1cn
//
////////////////////////////////////////////////////////////////////////.
//
let XATSTRCD = (knd0) => knd0
//
let XATSTUP0 = (tpl0) => tpl0
let XATSTUP1 = (knd0, tpl1) => tpl1
let XATSRCD2 = (knd0, rcd2) => rcd2
//
////////////////////////////////////////////////////////////////////////.
//
let XATSROOT = (x) => [0, x]
let XATSLPFT = (i, x) => [1+0, x, i]
let XATSLPBX = (i, x) => [1+1, x, i]
let XATSLPCN = (i, x) => [1+2, x, i+1]
//
let XATSVAR0 = (    ) => XATSROOT([null])
let XATSVAR1 = (init) => XATSROOT([init])
//
let XATSADDR = (addr) => addr // HX: no-op
let XATSFLAT = (addr) => XATS000_lvget(addr)
//
////////////////////////////////////////////////////////////////////////.
//
let XATSCTAG = (_, t) => t
//
let XATS000_inteq = (x, y) => (x===y)
let XATS000_btfeq = (x, y) => (x===y)
let XATS000_chreq = (x, y) => (x===y)
//
let XATS000_streq = (x, y) => (x == y)
//
let XATS000_ctgeq = (v, t) => (v[0] == t)
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
function
XATS2JS_optn_nil()
{
  return XATSCAPP("optn_nil", [0])
}
function
XATS2JS_optn_cons(x0)
{
  return XATSCAPP("optn_cons", [1, x0])
}
////////////////////////////////////////////////////////////////////////.
function
XATS2JS_list_nil()
{
  return XATSCAPP("list_nil", [0])
}
function
XATS2JS_list_cons(x0, xs)
{
  return XATSCAPP("list_cons", [1, x0, xs])
}
////////////////////////////////////////////////////////////////////////.
function
XATS2JS_optn_vt_nil()
{
  return XATSCAPP("optn_vt_nil", [0])
}
function
XATS2JS_optn_vt_cons(x0)
{
  return XATSCAPP("optn_vt_cons", [1, x0])
}
////////////////////////////////////////////////////////////////////////.
function
XATS2JS_list_vt_nil()
{
  return XATSCAPP("list_vt_nil", [0])
}
function
XATS2JS_list_vt_cons(x0, xs)
{
  return XATSCAPP("list_vt_cons", [1, x0, xs])
}
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.

let XATS000_cfail = function()
  {
    throw new Error("XATS000_cfail");
  }

let XATS000_patck = function(pck)
  {
    if (!pck) {
      throw new Error("XATS000_patck");
    } // end-of-[if]
  }

////////////////////////////////////////////////////////////////////////.

let XATS000_fold = (pcon) => null
let XATS000_free = (pcon) => null

////////////////////////////////////////////////////////////////////////.
//
let XATS000_dp2tr =
  (p2tr) => XATS000_lvget(p2tr)
//
let XATS000_dl0az = (dlaz) => dlaz()
let XATS000_dl1az = (dlaz) => dlaz(1)
//
let XATS000_assgn =
  (lval, rval) => XATS000_lvset(lval, rval)
//
////////////////////////////////////////////////////////////////////////.
//
let XATS000_ftset =
  function(tpl0, idx1, rval)
  {
    let tpl1 = tpl0.slice();
    tpl1[idx1] = rval; return tpl1
  }
//
let XATS000_lvget = function(lval)
  {
    let ctag = lval[0]
    if (ctag === 0)
      return lval[1][0]
    if (ctag === 1+0)
      return XATS000_lvget(lval[1])[lval[2]]
    if (ctag === 1+1)
      return lval[1][lval[2]]
    if (ctag === 1+2)
      return lval[1][lval[2]]
  }
//
let XATS000_lvset = function(lval, rval)
  {
    let ctag = lval[0]
    if (ctag === 0) return ( lval[1][0] = rval )
    if (ctag === 1+0)
    {
      return XATS000_lvset
	(lval[1], XATS000_ftset(XATS000_lvget(lval[1]), lval[2], rval))
    }
    if (ctag === 1+1) return ( lval[1][lval[2]] = rval )
    if (ctag === 1+2) return ( lval[1][lval[2]] = rval )
  }
//
////////////////////////////////////////////////////////////////////////.
//
let XATS000_raise = (xcon) => { throw(xcon) }
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
the end of
[ATS3-XANADU/srcgen2/xats2js/srcgen1/xshared/runtime/xats2js_js1emit.js]
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// Thu May  8 11:06:34 PM EDT 2025
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/*
the beg of
[ATS3-XANADU/srcgen2/xats2js/srcgen1/xshared/runtime/xats2js_prelude.js]
*/
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Thu 05 Sep 2024 11:21:07 AM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_console_log
  (x0)
{
  return console.log(x0) // HX: void
}
//
////////////////////////////////////////////////////////////////////////.
//
const
XATS2JS_the_print_store = [] // HX: for prints?
//
const
XATS2JS_the_prout_store = [] // HX: for general output
//
const
XATS2JS_the_prerr_store = [] // HX: for reporting errors
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_the_print_store_flush
  ( /*void*/ )
{
  let cs =
  XATS2JS_the_print_store.join("")
  XATS2JS_the_print_store.length = 0; return cs
}
//
function
XATS2JS_the_prout_store_flush
  ( /*void*/ )
{
  let cs =
  XATS2JS_the_prout_store.join("")
  XATS2JS_the_prout_store.length = 0; return cs
}
//
function
XATS2JS_the_prerr_store_flush
  ( /*void*/ )
{
  let cs =
  XATS2JS_the_prerr_store.join("")
  XATS2JS_the_prerr_store.length = 0; return cs
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_xtop000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Mon 09 Sep 2024 09:31:27 AM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_g_tostr
  ( obj )
{
  return String(obj) }
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_sint$parse$fwork
  (rep0, work)
{
  let i0 = parseInt(rep0)
  if (!isNaN(i0)) { work(i0) }; return
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_dflt$parse$fwork
  (rep0, work)
{
  let f0 = parseFloat(rep0)
  if (!isNaN(f0)) { work(f0) }; return
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_gbas000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Fri Sep 20 09:05:02 AM EDT 2024
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_bool_assert$errmsg
  (cond, emsg)
{
  if (!cond) {
    throw new Error("XATS2JS_bool_assert$errmsg: emsg = " + emsg)
  } ; return // HX: void is returned!
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_gdbg000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Sun 01 Sep 2024 04:27:52 PM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_sint_neg
  ( i1 )
{
  return ( -i1 ) // HX: neg
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_sint_lt$sint
  (i1, i2)
{
  return (i1 < i2) // HX: lt
}
function
XATS2JS_sint_gt$sint
  (i1, i2)
{
  return (i1 > i2) // HX: gt
}
//
function
XATS2JS_sint_lte$sint
  (i1, i2)
{
  return (i1 <= i2) // HX: lte
}
function
XATS2JS_sint_gte$sint
  (i1, i2)
{
  return (i1 >= i2) // HX: gte
}
//
function
XATS2JS_sint_eq$sint
  (i1, i2)
{
  return (i1 === i2) // HX: equal
}
function
XATS2JS_sint_neq$sint
  (i1, i2)
{
  return (i1 !== i2) // HX: noteq
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_sint_add$sint
  (i1, i2)
{
  return (i1 + i2) // HX: add
}
//
function
XATS2JS_sint_sub$sint
  (i1, i2)
{
  return (i1 - i2) // HX: sub
}
//
function
XATS2JS_sint_mul$sint
  (i1, i2)
{
  return (i1 * i2) // HX: mul
}
//
function
XATS2JS_sint_div$sint
  (i1, i2)
{
  return Math.trunc(i1 / i2)
}
//
function
XATS2JS_sint_mod$sint
  (i1, i2)
{
  return (i1 % i2) // HX: mod
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_sint_print
  ( i0 )
{
  let cs = i0.toString()
  XATS2JS_the_print_store.push(cs); return
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_gint000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Sun 01 Sep 2024 05:07:38 PM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_bool_lt
  (b1, b2)
{
  return (b1 < b2) // HX: lt
}
function
XATS2JS_bool_gt
  (b1, b2)
{
  return (b1 > b2) // HX: gt
}
//
function
XATS2JS_bool_lte
  (b1, b2)
{
  return (b1 <= b2) // HX: lte
}
function
XATS2JS_bool_gte
  (b1, b2)
{
  return (b1 >= b2) // HX: gte
}
//
function
XATS2JS_bool_eq
  (b1, b2)
{
  return (b1 === b2) // HX: equal
}
function
XATS2JS_bool_neq
  (b1, b2)
{
  return (b1 !== b2) // HX: noteq
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_bool000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Sun 01 Sep 2024 05:08:01 PM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_char_lt
  (c1, c2)
{
  return (c1 < c2) // HX: lt
}
function
XATS2JS_char_gt
  (c1, c2)
{
  return (c1 > c2) // HX: gt
}
//
function
XATS2JS_char_lte
  (c1, c2)
{
  return (c1 <= c2) // HX: lte
}
function
XATS2JS_char_gte
  (c1, c2)
{
  return (c1 >= c2) // HX: gte
}
//
function
XATS2JS_char_eq
  (c1, c2)
{
  return (c1 === c2) // HX: equal
}
function
XATS2JS_char_neq
  (c1, c2)
{
  return (c1 !== c2) // HX: noteq
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_char_add$sint
  (c1, i2)
{
  let c2 = c1+i2
  return (c2%256) // HX: char=int8
}
//
function
XATS2JS_char_sub$char
  (c1, c2)
{
  return (c1 - c2) // HX: char=int8
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_char_print
  ( c0 )
{
  let cs = String.fromCharCode(c0)
  XATS2JS_the_print_store.push(cs); return
}
//
////////////////////////////////////////////////////////////////////////.
//
/*
HX-2025-01-10: from gavinz
Sun Jan 19 01:11:19 AM EST 2025
*/
function
XATS2JS_char_make_sint( i0 ) { return i0 }
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_char000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Mon 09 Sep 2024 06:14:11 PM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_neg
  ( df )
{
  return ( -df ) //HX:neg
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_abs
  ( df )
{
  if (df >= 0.0)
    return df
  else
    return (-df) //HX:abs
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_sqrt
  ( df )
{
  return Math.sqrt(  df  )
}
//
function
XATS2JS_dflt_cbrt
  ( df )
{
  return Math.cbrt(  df  )
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_lt$dflt
  (f1, f2)
{
  return (f1 < f2) // HX: lt
}
function
XATS2JS_dflt_gt$dflt
  (f1, f2)
{
  return (f1 > f2) // HX: gt
}
//
function
XATS2JS_dflt_lte$dflt
  (f1, f2)
{
  return (f1 <= f2) // HX: lte
}
function
XATS2JS_dflt_gte$dflt
  (f1, f2)
{
  return (f1 >= f2) // HX: gte
}
//
function
XATS2JS_dflt_eq$dflt
  (f1, f2)
{
  return (f1 === f2) // HX: equal
}
function
XATS2JS_dflt_neq$dflt
  (f1, f2)
{
  return (f1 !== f2) // HX: noteq
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_add$dflt
  (f1, f2)
{
  return (f1 + f2) // HX: add
}
//
function
XATS2JS_dflt_sub$dflt
  (f1, f2)
{
  return (f1 - f2) // HX: sub
}
//
//
function
XATS2JS_dflt_mul$dflt
  (f1, f2)
{
  return (f1 * f2) // HX: mul
}
//
function
XATS2JS_dflt_div$dflt
  (f1, f2)
{
  return (f1 / f2) // HX: div
}
//
function
XATS2JS_dflt_mod$dflt
  (f1, f2)
{
  return (f1 % f2) // HX: mod
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_ceil
  ( df )
{
  return Math.ceil(df) // (1.2) = 2
}
function
XATS2JS_dflt_floor
  ( df )
{
  return Math.floor(df) // (1.2) = 1
}
function
XATS2JS_dflt_round
  ( df )
{
  // HX: (1.2) = 1 // (1.5) = 2
  return Math.round(df) // (-1.5) = 1
}
function
XATS2JS_dflt_trunc
  ( df )
{
  // HX: (1.2) = 1 // (1.9) = 1
  return Math.trunc(df) // (-1.2) = -1
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_dflt_print
  ( f0 )
{
  let cs = f0.toString()
  XATS2JS_the_print_store.push(cs); return
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_gflt000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Fri 16 Aug 2024 05:26:45 PM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_cmp
  (x1, x2)
{
  var df
  var i0 = 0
  var n1 = x1.length;
  var n2 = x2.length;
  var n0 =
  (n1 <= n2) ? n1 : n2;
  while (i0 < n0) {
    df =
    x1.charCodeAt(i0)
    -
    x2.charCodeAt(i0)
    if (df !== 0) return df;
    i0 = (  i0 + 1  )
  }
  return (      n1 - n2      );
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_length
  (cs)
{
  return cs.length // HX: field
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_get$at$raw
  (cs, i0)
{
  return cs.charCodeAt(i0) // HX: ascii
}
function
XATS000_strn_get$at$raw
  (cs, i0)
{
  return XATS2JS_strn_get$at$raw(cs, i0)
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_fmake_fwork
  (fwork)
{
  var cs = []
  fwork((ch) => {cs.push(ch);return})
  return String.fromCharCode.apply(null, cs)
}
//
function
XATS000_strn_fmake_fwork
  (fwork)
{
  return XATS2JS_strn_fmake_fwork(fwork)
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strn_print
  ( cs )
{
  XATS2JS_the_print_store.push(cs); return
}
//
////////////////////////////////////////////////////////////////////////.
//
/*
HX-2025-04-26:
Sat Apr 26 08:48:02 PM EDT 2025
*/
//
function
XATS2JS_strn_fmake0_env$fwork
  (env, fwork)
{
  var cs = []
  fwork(env, (ch) => {cs.push(ch);return})
  return String.fromCharCode.apply(null, cs)
}
function
XATS2JS_strn_fmake1_env$fwork
  (env, fwork)
{
  var cs = []
  fwork(env, (ch) => {cs.push(ch);return})
  return String.fromCharCode.apply(null, cs)
}
//
function
XATS000_strn_fmake0_env$fwork
  (env, fwork)
{
  return XATS2JS_strn_fmake0_env$fwork(env, fwork)
}
function
XATS000_strn_fmake1_env$fwork
  (env, fwork)
{
  return XATS2JS_strn_fmake1_env$fwork(env, fwork)
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_strn000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Mon 12 Aug 2024 09:36:59 AM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_a0rf_lget
  ( A0 )
{
  return A0[0]
}
function
XATS2JS_a0rf_lset
  (A0, x1)
{
  A0[0] = x1; return
}
//
function
XATS2JS_a0rf_make_1val
  ( x0 )
{
  return [x0] // HX: singleton
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_a1rf_lget$at
  (A0, i0)
{
  return A0[i0]
}
function
XATS2JS_a1rf_lset$at
  (A0, i0, x1)
{
  A0[i0] = x1; return
}
//
function
XATS2JS_a1rf_make_ncpy
  (n0, x0)
{
  var i0 = 0
  var A0 = new Array(n0);
  while (i0 < n0) {
    A0[i0] = x0; i0 = i0 + 1
  }
  return A0 // HX: A0=[x0, x0, ..., x0]
}
//
function
XATS2JS_a1rf_make_nfun
  (n0, fopr)
{
  var i0 = 0
  var A0 = new Array(n0);
  while (i0 < n0) {
    A0[i0] = fopr(i0); i0 = i0 + 1
  }
  return A0 // HX: A0 = [fopr(0),...,fopr(n-1)]
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_axrf000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2024 Hongwei Xi, ATS Trustful Software, Inc.
** All rights reserved
**
** ATS is free software;  you can  redistribute it and/or modify it under
** the terms of  the GNU GENERAL PUBLIC LICENSE (GPL) as published by the
** Free Software Foundation; either version 3, or (at  your  option)  any
** later version.
** 
** ATS is distributed in the hope that it will be useful, but WITHOUT ANY
** WARRANTY; without  even  the  implied  warranty  of MERCHANTABILITY or
** FITNESS FOR A PARTICULAR PURPOSE.  See the  GNU General Public License
** for more details.
** 
** You  should  have  received  a  copy of the GNU General Public License
** along  with  ATS;  see the  file COPYING.  If not, please write to the
** Free Software Foundation,  51 Franklin Street, Fifth Floor, Boston, MA
** 02110-1301, USA.
*/

////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
/*
Author: Hongwei Xi
Thu 15 Aug 2024 01:42:20 PM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_a1sz_length
  ( A0 )
{
  return A0.length
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_a1sz_lget$at
  (A0, i0)
{
  return A0[i0]
}
function
XATS2JS_a1sz_lset$at
  (A0, i0, x1)
{
  A0[i0] = x1; return
}
//
////////////////////////////////////////////////////////////////////////.
/*
HX-2024-09-06:
Fri 06 Sep 2024 04:18:38 PM EDT
*/
//
function
XATS2JS_a1sz_make_none
  ( n0 )
{
  var A0 = new Array(n0)
  return A0 // HX: A0 = [?, ..., ?]
}
////////////////////////////////////////////////////////////////////////.
//
/*
HX-2024-08-15:
Thu 15 Aug 2024 01:50:45 PM EDT
*/
//
function
XATS2JS_a1sz_make_ncpy
  (n0, x0)
{
  var i0 = 0
  var A0 = new Array(n0)
  while (i0 < n0) {
    A0[i0] = x0; i0 = i0 + 1
  }
  return A0 // HX: A0 = [x0, ..., x0]
}
//
function
XATS2JS_a1sz_make_nfun
  (n0, fopr)
{
  var i0 = 0
  var A0 = new Array(n0)
  while (i0 < n0) {
    A0[i0] = fopr(i0); i0 = i0 + 1
  }
  return A0 // HX: A0 = [fopr(0),...,fopr(n-1)]
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_a1sz_fmake_fwork
  (fwork)
{
  var A0 = []
  fwork((x0) => {A0.push(x0);return}); return A0
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_axsz000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// I1Dinclude(LCSRCsome1(prime.dats)@(41(line=3,offs=1)--82(line=4,offs=33)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(244(line=17,offs=1)--291(line=19,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gbas000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gbas000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(292(line=20,offs=1)--339(line=22,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gbas001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gbas001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(340(line=23,offs=1)--387(line=25,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gbas002.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gbas002.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(414(line=29,offs=1)--461(line=31,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gdbg000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gdbg000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(488(line=35,offs=1)--541(line=37,offs=34))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gbas000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gbas000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(542(line=38,offs=1)--595(line=40,offs=34))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gbas001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gbas001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(767(line=51,offs=1)--807(line=51,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gxyz000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gxyz000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(854(line=56,offs=1)--894(line=56,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/unsfx00.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/unsfx00.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1035(line=64,offs=1)--1075(line=64,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gnum000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gnum000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1076(line=65,offs=1)--1116(line=65,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gord000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gord000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1117(line=66,offs=1)--1157(line=66,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gfun000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gfun000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1158(line=67,offs=1)--1198(line=67,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gseq000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gseq000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1199(line=68,offs=1)--1239(line=68,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gseq001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gseq001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1240(line=69,offs=1)--1280(line=69,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gseq002.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gseq002.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1281(line=70,offs=1)--1321(line=70,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gasz000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gasz000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1322(line=71,offs=1)--1362(line=71,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gasz001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gasz001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1363(line=72,offs=1)--1403(line=72,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gcls000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gcls000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1404(line=73,offs=1)--1444(line=73,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gsyn000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1445(line=74,offs=1)--1485(line=74,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gsyn001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gsyn001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1506(line=76,offs=1)--1546(line=76,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/bool000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/bool000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1547(line=77,offs=1)--1587(line=77,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/char000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/char000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1588(line=78,offs=1)--1628(line=78,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gint000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gint000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1629(line=79,offs=1)--1669(line=79,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gint001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gint001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1670(line=80,offs=1)--1710(line=80,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gflt000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/gflt000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1731(line=82,offs=1)--1771(line=82,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strn000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/strn000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1772(line=83,offs=1)--1812(line=83,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strn001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/strn001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1833(line=85,offs=1)--1873(line=85,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/axrf000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/axrf000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1874(line=86,offs=1)--1914(line=86,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/axrf001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/axrf001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1915(line=87,offs=1)--1955(line=87,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/axsz000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/axsz000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1956(line=88,offs=1)--1996(line=88,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/axsz001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/axsz001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(1997(line=89,offs=1)--2037(line=89,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/tupl000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/tupl000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2038(line=90,offs=1)--2078(line=90,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/tupl001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/tupl001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2079(line=91,offs=1)--2119(line=91,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/tupl002.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/tupl002.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2120(line=92,offs=1)--2160(line=92,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/list000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/list000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2161(line=93,offs=1)--2201(line=93,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/list001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/list001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2202(line=94,offs=1)--2242(line=94,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/list002.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/list002.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2243(line=95,offs=1)--2283(line=95,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/optn000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/optn000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2284(line=96,offs=1)--2324(line=96,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/optn001.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/optn001.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2325(line=97,offs=1)--2365(line=97,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strm000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/strm000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2366(line=98,offs=1)--2406(line=98,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strx000.dats";27)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/strx000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2450(line=102,offs=1)--2495(line=102,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/gbas000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/gbas000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2499(line=104,offs=1)--2544(line=104,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/bool000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/bool000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2545(line=105,offs=1)--2590(line=105,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/char000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/char000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2594(line=107,offs=1)--2639(line=107,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/gint000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/gint000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2640(line=108,offs=1)--2685(line=108,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/gflt000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/gflt000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2689(line=110,offs=1)--2734(line=110,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/strn000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2738(line=112,offs=1)--2783(line=112,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/axrf000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/axrf000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2784(line=113,offs=1)--2829(line=113,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/axsz000.dats";32)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/axsz000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2873(line=117,offs=1)--2919(line=117,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gnum000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gnum000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2920(line=118,offs=1)--2966(line=118,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gord000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gord000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(2967(line=119,offs=1)--3013(line=119,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gfun000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gfun000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3014(line=120,offs=1)--3060(line=120,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gcls000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gcls000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3061(line=121,offs=1)--3107(line=121,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gseq000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gseq000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3108(line=122,offs=1)--3154(line=122,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gseq001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gseq001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3155(line=123,offs=1)--3201(line=123,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gseq002_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gseq002_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3202(line=124,offs=1)--3248(line=124,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gasz000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gasz000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3249(line=125,offs=1)--3295(line=125,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gasz001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gasz001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3296(line=126,offs=1)--3342(line=126,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gsyn000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gsyn000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3363(line=128,offs=1)--3409(line=128,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strn000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/strn000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3433(line=131,offs=1)--3479(line=131,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/axrf000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/axrf000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3480(line=132,offs=1)--3526(line=132,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/axsz000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/axsz000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3527(line=133,offs=1)--3573(line=133,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/tupl000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/tupl000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3577(line=135,offs=1)--3623(line=135,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/list000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/list000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3624(line=136,offs=1)--3670(line=136,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/list001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/list001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3671(line=137,offs=1)--3717(line=137,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/optn000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/optn000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3718(line=138,offs=1)--3764(line=138,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/optn001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/optn001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3768(line=140,offs=1)--3814(line=140,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strm000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/strm000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3815(line=141,offs=1)--3861(line=141,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strm001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/strm001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3862(line=142,offs=1)--3908(line=142,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strm002_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/strm002_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3909(line=143,offs=1)--3955(line=143,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strx000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/strx000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(3956(line=144,offs=1)--4002(line=144,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strx001_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/strx001_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4173(line=155,offs=1)--4219(line=155,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gxyz000_vt.dats";33)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/VT/gxyz000_vt.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4543(line=163,offs=1)--4543(line=163,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_dats.hats)@(4543(line=163,offs=1)--4543(line=163,offs=1));D3Cnone0()))
// I1Dinclude(LCSRCsome1(prime.dats)@(83(line=5,offs=1)--127(line=6,offs=36)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(197(line=15,offs=1)--249(line=16,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/xtop000.dats";35));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/xtop000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(296(line=21,offs=1)--344(line=22,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gbas000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gbas000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(345(line=23,offs=1)--393(line=24,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gdbg000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gdbg000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(440(line=29,offs=1)--488(line=30,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/bool000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/bool000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(489(line=31,offs=1)--537(line=32,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/char000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/char000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(538(line=33,offs=1)--586(line=34,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gint000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(587(line=35,offs=1)--635(line=36,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gflt000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gflt000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(682(line=41,offs=1)--730(line=42,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/strn000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(777(line=47,offs=1)--825(line=48,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/axrf000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(826(line=49,offs=1)--874(line=50,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/axsz000.dats";35)));$optn(FPATH(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axsz000.dats));...)))
// LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(1063(line=59,offs=1)--1063(line=59,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(../../../../../../XATSHOME/prelude/HATS/prelude_JS_dats.hats)@(1063(line=59,offs=1)--1063(line=59,offs=1));D3Cnone0()))
// I1Dextern(LCSRCsome1(prime.dats)@(168(line=9,offs=1)--237(line=12,offs=39)))
// LCSRCsome1(prime.dats)@(176(line=10,offs=1)--237(line=12,offs=39))
// I1FUNDCL
// DATS_prime$onclick_179
  // FJARGdarg($list(I1BNDcons(I1TNM(1);I0Pvar(work(4145));$list(work(4145)I1Vtnm(I1TNM(1))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(DATS_prime$onclick);G1Nlist($list())) // I1CMP:return
// I1Dvaldclist(LCSRCsome1(prime.dats)@(281(line=16,offs=1)--357(line=20,offs=28)))
// I1VALDCL
let jsxtnm15
let jsxtnm14 = function f_307(arg1) { // fix0(T_FIX(0))
  let jsxtnm2 = arg1
  // I1CMP:start
  let jsxtnm13 = function (tlaz) { // l1azy
    // I1CMP:start
    // LCSRCsome1(prime.dats)@(352(line=20,offs=23)--353(line=20,offs=24))
    // I0Etapq(I0Ecst(sint_add$sint(825));$list(T2JAG($list())))
    // T1IMPallx(sint_add$sint(825), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
    // T1IMPallx(sint_add$sint(825), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(825);$list()))))
    let jsxtnm9 = function (arg1, arg2) { // timp: sint_add$sint(825)
      let jsxtnm3 = arg1
      let jsxtnm4 = arg2
      // I1CMP:start
      let jsxtnm8 // let
      { // let
        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
        // I1FUNDCL
        // XATS2JS_sint_add$sint_2778
          // FJARGdarg($list(I1BNDcons(I1TNM(5);I0Pvar(i1(3953));$list(i1(3953)I1Vtnm(I1TNM(5)))),I1BNDcons(I1TNM(6);I0Pvar(i2(3954));$list(i2(3954)I1Vtnm(I1TNM(6))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list())) // I1CMP:return
        let jsxtnm7 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm3, jsxtnm4))
        jsxtnm8 = jsxtnm7
      } // endlet
      // I1CMP:return:jsxtnm8
      return jsxtnm8
    } // endtimp(sint_add$sint(825))
    let jsxtnm10 = XATSDAPP(jsxtnm9(jsxtnm2, XATSINT1(1)))
    let jsxtnm11 = XATSDAPP(f_307(jsxtnm10))
    let jsxtnm12 = XATSCAPP("strxcon_vt_cons", [0, jsxtnm2, jsxtnm11])
    // I1CMP:return:jsxtnm12
    return jsxtnm12
  } // endfun(l1azy)
  // I1CMP:return:jsxtnm13
  return jsxtnm13
} // endfun(fix0)
jsxtnm15 = jsxtnm14
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(prime.dats)@(361(line=22,offs=1)--617(line=44,offs=2)))
// I1VALDCL
let jsxtnm80
let jsxtnm79 // let
{ // let
  // LCSRCsome1(prime.dats)@(426(line=31,offs=1)--454(line=32,offs=21))
  // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Cd1ecl(D1Cdefine(T_SRP_DEFINE();T_IDALP(filter0);$list();$optn(G1Eid0(strx_vt_filter0$f1un)))))))
  // I1Dvaldclist(LCSRCsome1(prime.dats)@(458(line=34,offs=1)--615(line=43,offs=42)))
  // I1VALDCL
  let jsxtnm76
  let jsxtnm75 = function f_473(arg1) { // fix0(T_FIX(0))
    let jsxtnm16 = arg1
    // I1CMP:start
    let jsxtnm74 = function (tlaz) { // l1azy
      // I1CMP:start
      let jsxtnm73 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(prime.dats)@(510(line=39,offs=1)--545(line=40,offs=30)))
        // I1VALDCL
        let jsxtnm18
        let jsxtnm17 = XATS000_dl1az(jsxtnm16)
        jsxtnm18 = jsxtnm17
        XATS000_patck(XATS000_ctgeq(jsxtnm17, XATSCTAG("strxcon_vt_cons",0)))
        // LCSRCsome1(prime.dats)@(576(line=43,offs=3)--583(line=43,offs=10))
        // I0Etapq(I0Ecst(strx_vt_filter0$f1un(1769));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
        // T1IMPallx(strx_vt_filter0$f1un(1769), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strx001_vt.dats)@(3122(line=179,offs=1)--3253(line=188,offs=33)))
        // T1IMPallx(strx_vt_filter0$f1un(1769), I1Dtmpsub($list(x0[6965]T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())));I1Dimplmnt0(DIMPLone2(strx_vt_filter0$f1un(1769);$list(x0[4496]T2Pvar(x0[6965]))))))
        let jsxtnm51 = function (arg1, arg2) { // timp: strx_vt_filter0$f1un(1769)
          let jsxtnm19 = arg1
          let jsxtnm20 = arg2
          // I1CMP:start
          let jsxtnm50 // let
          { // let
            // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strx001_vt.dats)@(3212(line=187,offs=1)--3252(line=188,offs=32)))
            // I1Dimplmnt0(DIMPLone2(filter$test1(1182);$list(x0[3089]T2Pvar(x0[6965])))):timp
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strx001_vt.dats)@(3179(line=184,offs=1)--3194(line=184,offs=16))
            // I0Etapq(I0Ecst(strx_vt_filter0(1767));$list(T2JAG($list(T2Pvar(x0[6965])))))
            // T1IMPallx(strx_vt_filter0(1767), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strx001_vt.dats)@(2702(line=143,offs=1)--3079(line=177,offs=2)))
            // T1IMPallx(strx_vt_filter0(1767), I1Dtmpsub($list(x0[6964]T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())));I1Dimplmnt0(DIMPLone2(strx_vt_filter0(1767);$list(x0[4494]T2Pvar(x0[6964]))))))
            let jsxtnm48 = function (arg1) { // timp: strx_vt_filter0(1767)
              let jsxtnm23 = arg1
              // I1CMP:start
              let jsxtnm47 // let
              { // let
                // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strx001_vt.dats)@(2836(line=155,offs=1)--3077(line=176,offs=2)))
                // I1FUNDCL
                function auxloop_2839(arg1)
                { // fun
                  let jsxtnm24 = arg1
                  // I1CMP:start
                  let jsxtnm43 // cas
                  do {
                    // { // cls
                    // I1GPTpat(I1BNDcons(I1TNM(25);I0Pfree(I0Pdapp(I0Pcon(strxcon_vt_cons(17));$list(I0Pvar(x1(3699)),I0Pvar(xs(3700)))));$list(x1(3699)I1Vp1cn(I0Pcon(strxcon_vt_cons(17));I1Vtnm(I1TNM(25));0),xs(3700)I1Vp1cn(I0Pcon(strxcon_vt_cons(17));I1Vtnm(I1TNM(25));1))))
                    if (XATS000_ctgeq(jsxtnm24, XATSCTAG("strxcon_vt_cons",0))) { // gpt
                      let jsxtnm25 = jsxtnm24
                      let jsxtnm42 // let
                      { // let
                        // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strx001_vt.dats)@(2940(line=165,offs=1)--2971(line=167,offs=21)))
                        // I1VALDCL
                        let jsxtnm30
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strx001_vt.dats)@(2951(line=167,offs=1)--2963(line=167,offs=13))
                        // I0Etapq(I0Ecst(filter$test1(1182));$list(T2JAG($list(T2Pvar(x0[6964])))))
                        // T1IMPallx(filter$test1(1182), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strx001_vt.dats)@(3212(line=187,offs=1)--3252(line=188,offs=32)))
                        // T1IMPallx(filter$test1(1182), I1Dtmpsub($list(x0[6965]T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())));I1Dimplmnt0(DIMPLone2(filter$test1(1182);$list(x0[3089]T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))
                        let jsxtnm28 = function (arg1) { // timp: filter$test1(1182)
                          let jsxtnm26 = arg1
                          // I1CMP:start
                          let jsxtnm27 = XATSDAPP(jsxtnm20(jsxtnm26))
                          // I1CMP:return:jsxtnm27
                          return jsxtnm27
                        } // endtimp(filter$test1(1182))
                        let jsxtnm29 = XATSDAPP(jsxtnm28(XATSP1CN("strxcon_vt_cons", jsxtnm25[0+1])))
                        jsxtnm30 = jsxtnm29
                        XATS000_patck(true)
                        let jsxtnm41 // ift
                        if (jsxtnm30) // ift
                        {
                          let jsxtnm33 = function (tlaz) { // l1azy
                            // I1CMP:start
                            let jsxtnm31 = XATS000_dl1az(XATSP1CN("strxcon_vt_cons", jsxtnm25[1+1]))
                            let jsxtnm32 = XATSDAPP(auxloop_2839(jsxtnm31))
                            // I1CMP:return:jsxtnm32
                            return jsxtnm32
                          } // endfun(l1azy)
                          let jsxtnm34 = XATSCAPP("strxcon_vt_cons", [0, XATSP1CN("strxcon_vt_cons", jsxtnm25[0+1]), jsxtnm33])
                          jsxtnm41 = jsxtnm34
                        } else {
                          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/VT/strx001_vt.dats)@(3042(line=175,offs=2)--3048(line=175,offs=8))
                          // I0Etapq(I0Ecst(g_free(23));$list(T2JAG($list(T2Pvar(x0[6964])))))
                          // T1IMPallx(g_free(23), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gbas000.dats)@(1632(line=59,offs=1)--1672(line=61,offs=22)))
                          // T1IMPallx(g_free(23), I1Dtmpsub($list(x0[4506]T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())));I1Dimplmnt0(DIMPLone2(g_free(23);$list(a[361]T2Pvar(x0[4506]))))))
                          let jsxtnm37 = function (arg1) { // timp: g_free(23)
                            let jsxtnm35 = arg1
                            // I1CMP:start
                            let jsxtnm36 = XATSTUP0([])
                            // I1CMP:return:jsxtnm36
                            return jsxtnm36
                          } // endtimp(g_free(23))
                          let jsxtnm38 = XATSDAPP(jsxtnm37(XATSP1CN("strxcon_vt_cons", jsxtnm25[0+1])))
                          let jsxtnm39 = XATS000_dl1az(XATSP1CN("strxcon_vt_cons", jsxtnm25[1+1]))
                          let jsxtnm40 = XATSDAPP(auxloop_2839(jsxtnm39))
                          jsxtnm41 = jsxtnm40
                        } // end(if)
                        jsxtnm42 = jsxtnm41
                      } // endlet
                      jsxtnm43 = jsxtnm42
                      break // cls
                    } // gpt
                    // } // cls
                    XATS000_cfail()
                  } while (false) // end-of(do)
                  // I1CMP:return:jsxtnm43
                  return jsxtnm43
                } // endfun(auxloop_2839)
                let jsxtnm46 = function (tlaz) { // l1azy
                  // I1CMP:start
                  let jsxtnm44 = XATS000_dl1az(jsxtnm23)
                  let jsxtnm45 = XATSDAPP(auxloop_2839(jsxtnm44))
                  // I1CMP:return:jsxtnm45
                  return jsxtnm45
                } // endfun(l1azy)
                jsxtnm47 = jsxtnm46
              } // endlet
              // I1CMP:return:jsxtnm47
              return jsxtnm47
            } // endtimp(strx_vt_filter0(1767))
            let jsxtnm49 = XATSDAPP(jsxtnm48(jsxtnm19))
            jsxtnm50 = jsxtnm49
          } // endlet
          // I1CMP:return:jsxtnm50
          return jsxtnm50
        } // endtimp(strx_vt_filter0$f1un(1769))
        let jsxtnm69 = function (arg1) { // lam0(T_LAM(0))
          let jsxtnm52 = arg1
          // I1CMP:start
          // LCSRCsome1(prime.dats)@(605(line=43,offs=32)--606(line=43,offs=33))
          // I0Etapq(I0Ecst(sint_gt$sint(819));$list(T2JAG($list())))
          // T1IMPallx(sint_gt$sint(819), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1777(line=70,offs=1)--1938(line=82,offs=2)))
          // T1IMPallx(sint_gt$sint(819), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_gt$sint(819);$list()))))
          let jsxtnm59 = function (arg1, arg2) { // timp: sint_gt$sint(819)
            let jsxtnm53 = arg1
            let jsxtnm54 = arg2
            // I1CMP:start
            let jsxtnm58 // let
            { // let
              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1865(line=78,offs=1)--1936(line=81,offs=39)))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(1873(line=79,offs=1)--1936(line=81,offs=39))
              // I1FUNDCL
              // XATS2JS_sint_gt$sint_1876
                // FJARGdarg($list(I1BNDcons(I1TNM(55);I0Pvar(i1(3928));$list(i1(3928)I1Vtnm(I1TNM(55)))),I1BNDcons(I1TNM(56);I0Pvar(i2(3929));$list(i2(3929)I1Vtnm(I1TNM(56))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_gt$sint);G1Nlist($list())) // I1CMP:return
              let jsxtnm57 = XATSDAPP(XATS2JS_sint_gt$sint(jsxtnm53, jsxtnm54))
              jsxtnm58 = jsxtnm57
            } // endlet
            // I1CMP:return:jsxtnm58
            return jsxtnm58
          } // endtimp(sint_gt$sint(819))
          // LCSRCsome1(prime.dats)@(601(line=43,offs=28)--602(line=43,offs=29))
          // I0Etapq(I0Ecst(sint_mod$sint(829));$list(T2JAG($list())))
          // T1IMPallx(sint_mod$sint(829), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(3349(line=201,offs=1)--3513(line=213,offs=2)))
          // T1IMPallx(sint_mod$sint(829), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_mod$sint(829);$list()))))
          let jsxtnm66 = function (arg1, arg2) { // timp: sint_mod$sint(829)
            let jsxtnm60 = arg1
            let jsxtnm61 = arg2
            // I1CMP:start
            let jsxtnm65 // let
            { // let
              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(3439(line=209,offs=1)--3511(line=212,offs=39)))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(3447(line=210,offs=1)--3511(line=212,offs=39))
              // I1FUNDCL
              // XATS2JS_sint_mod$sint_3450
                // FJARGdarg($list(I1BNDcons(I1TNM(62);I0Pvar(i1(3973));$list(i1(3973)I1Vtnm(I1TNM(62)))),I1BNDcons(I1TNM(63);I0Pvar(i2(3974));$list(i2(3974)I1Vtnm(I1TNM(63))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_mod$sint);G1Nlist($list())) // I1CMP:return
              let jsxtnm64 = XATSDAPP(XATS2JS_sint_mod$sint(jsxtnm60, jsxtnm61))
              jsxtnm65 = jsxtnm64
            } // endlet
            // I1CMP:return:jsxtnm65
            return jsxtnm65
          } // endtimp(sint_mod$sint(829))
          let jsxtnm67 = XATSDAPP(jsxtnm66(jsxtnm52, XATSP1CN("strxcon_vt_cons", jsxtnm18[0+1])))
          let jsxtnm68 = XATSDAPP(jsxtnm59(jsxtnm67, XATSINT1(0)))
          // I1CMP:return:jsxtnm68
          return jsxtnm68
        } // endfun(lam0)
        let jsxtnm70 = XATSDAPP(jsxtnm51(XATSP1CN("strxcon_vt_cons", jsxtnm18[1+1]), jsxtnm69))
        let jsxtnm71 = XATSDAPP(f_473(jsxtnm70))
        let jsxtnm72 = XATSCAPP("strxcon_vt_cons", [0, XATSP1CN("strxcon_vt_cons", jsxtnm18[0+1]), jsxtnm71])
        jsxtnm73 = jsxtnm72
      } // endlet
      // I1CMP:return:jsxtnm73
      return jsxtnm73
    } // endfun(l1azy)
    // I1CMP:return:jsxtnm74
    return jsxtnm74
  } // endfun(fix0)
  jsxtnm76 = jsxtnm75
  XATS000_patck(true)
  let jsxtnm77 = XATSDAPP(jsxtnm15(XATSINT1(2)))
  let jsxtnm78 = XATSDAPP(jsxtnm76(jsxtnm77))
  jsxtnm79 = jsxtnm78
} // endlet
jsxtnm80 = jsxtnm79
XATS000_patck(true)
// I1Dfundclist(LCSRCsome1(prime.dats)@(664(line=49,offs=1)--1041(line=76,offs=4)))
// I1FUNDCL
function onclick_make_lstrx_667(arg1)
{ // fun
  let jsxtnm81 = arg1
  // I1CMP:start
  let jsxtnm499 // let
  { // let
    // I1Dvaldclist(LCSRCsome1(prime.dats)@(713(line=53,offs=1)--741(line=54,offs=25)))
    // I1VALDCL
    let jsxtnm88
    // LCSRCsome1(prime.dats)@(724(line=54,offs=8)--738(line=54,offs=22))
    // I0Etapq(I0Ecst(a0rf_make_1val(971));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
    // T1IMPallx(a0rf_make_1val(971), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(2098(line=95,offs=1)--2259(line=107,offs=2)))
    // T1IMPallx(a0rf_make_1val(971), I1Dtmpsub($list(a[7105]T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())));I1Dimplmnt0(DIMPLone2(a0rf_make_1val(971);$list(a[2649]T2Pvar(a[7105]))))))
    let jsxtnm86 = function (arg1) { // timp: a0rf_make_1val(971)
      let jsxtnm82 = arg1
      // I1CMP:start
      let jsxtnm85 // let
      { // let
        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(2186(line=103,offs=1)--2257(line=106,offs=37)))
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(2194(line=104,offs=1)--2257(line=106,offs=37))
        // I1FUNDCL
        // XATS2JS_a0rf_make_1val_2197
          // FJARGdarg($list(I1BNDcons(I1TNM(83);I0Pvar(x1(4086));$list(x1(4086)I1Vtnm(I1TNM(83))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_a0rf_make_1val);G1Nlist($list())) // I1CMP:return
        let jsxtnm84 = XATSDAPP(XATS2JS_a0rf_make_1val(jsxtnm82))
        jsxtnm85 = jsxtnm84
      } // endlet
      // I1CMP:return:jsxtnm85
      return jsxtnm85
    } // endtimp(a0rf_make_1val(971))
    let jsxtnm87 = XATSDAPP(jsxtnm86(XATSINT1(0)))
    jsxtnm88 = jsxtnm87
    XATS000_patck(true)
    // I1Dvaldclist(LCSRCsome1(prime.dats)@(742(line=55,offs=1)--771(line=56,offs=26)))
    // I1VALDCL
    let jsxtnm95
    // LCSRCsome1(prime.dats)@(753(line=56,offs=8)--767(line=56,offs=22))
    // I0Etapq(I0Ecst(a0rf_make_1val(971));$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strxcon_vt);$list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))
    // T1IMPallx(a0rf_make_1val(971), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(2098(line=95,offs=1)--2259(line=107,offs=2)))
    // T1IMPallx(a0rf_make_1val(971), I1Dtmpsub($list(a[7105]T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strxcon_vt);$list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(a0rf_make_1val(971);$list(a[2649]T2Pvar(a[7105]))))))
    let jsxtnm93 = function (arg1) { // timp: a0rf_make_1val(971)
      let jsxtnm89 = arg1
      // I1CMP:start
      let jsxtnm92 // let
      { // let
        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(2186(line=103,offs=1)--2257(line=106,offs=37)))
        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(2194(line=104,offs=1)--2257(line=106,offs=37))
        // I1FUNDCL
        // XATS2JS_a0rf_make_1val_2197
          // FJARGdarg($list(I1BNDcons(I1TNM(90);I0Pvar(x1(4086));$list(x1(4086)I1Vtnm(I1TNM(90))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_a0rf_make_1val);G1Nlist($list())) // I1CMP:return
        let jsxtnm91 = XATSDAPP(XATS2JS_a0rf_make_1val(jsxtnm89))
        jsxtnm92 = jsxtnm91
      } // endlet
      // I1CMP:return:jsxtnm92
      return jsxtnm92
    } // endtimp(a0rf_make_1val(971))
    let jsxtnm94 = XATSDAPP(jsxtnm93(jsxtnm81))
    jsxtnm95 = jsxtnm94
    XATS000_patck(true)
    let jsxtnm498 = function (arg1) { // lam0(T_LAM(0))
      let jsxtnm96 = arg1
      // I1CMP:start
      let jsxtnm497 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(prime.dats)@(819(line=62,offs=1)--842(line=63,offs=15)))
        // I1VALDCL
        let jsxtnm110
        // LCSRCsome1(prime.dats)@(828(line=63,offs=1)--836(line=63,offs=9))
        // I0Etapq(I0Ecst(a0rf_get(972));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
        // T1IMPallx(a0rf_get(972), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/axrf000.dats)@(2631(line=130,offs=1)--2737(line=138,offs=28)))
        // T1IMPallx(a0rf_get(972), I1Dtmpsub($list(x0[5883]T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())));I1Dimplmnt0(DIMPLone2(a0rf_get(972);$list(a[2650]T2Pvar(x0[5883]))))))
        let jsxtnm108 = function (arg1) { // timp: a0rf_get(972)
          let jsxtnm97 = arg1
          // I1CMP:start
          let jsxtnm107 // let
          { // let
            // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/axrf000.dats)@(2668(line=134,offs=1)--2698(line=136,offs=17)))
            // I1VALDCL
            let jsxtnm104
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/axrf000.dats)@(2682(line=136,offs=1)--2691(line=136,offs=10))
            // I0Etapq(I0Ecst(a0rf_lget(976));$list(T2JAG($list(T2Pvar(x0[5883])))))
            // T1IMPallx(a0rf_lget(976), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(1722(line=59,offs=1)--1879(line=74,offs=2)))
            // T1IMPallx(a0rf_lget(976), I1Dtmpsub($list(a[7101]T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())));I1Dimplmnt0(DIMPLone2(a0rf_lget(976);$list(a[2654]T2Pvar(a[7101]))))))
            let jsxtnm102 = function (arg1) { // timp: a0rf_lget(976)
              let jsxtnm98 = arg1
              // I1CMP:start
              let jsxtnm101 // let
              { // let
                // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(1798(line=67,offs=1)--1877(line=73,offs=28)))
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(1806(line=68,offs=1)--1877(line=73,offs=28))
                // I1FUNDCL
                // XATS2JS_a0rf_lget_1809
                  // FJARGdarg($list(I1BNDcons(I1TNM(99);I0Pvar(A(4076));$list(A(4076)I1Vtnm(I1TNM(99))))))
                  // I1CMP:start
                  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_a0rf_lget);G1Nlist($list())) // I1CMP:return
                let jsxtnm100 = XATSDAPP(XATS2JS_a0rf_lget(jsxtnm98))
                jsxtnm101 = jsxtnm100
              } // endlet
              // I1CMP:return:jsxtnm101
              return jsxtnm101
            } // endtimp(a0rf_lget(976))
            let jsxtnm103 = XATSDAPP(jsxtnm102(jsxtnm97))
            jsxtnm104 = jsxtnm103
            XATS000_patck(true)
            // I1Dprvdclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/axrf000.dats)@(2699(line=137,offs=1)--2727(line=138,offs=18)))
            // I1VALDCL
            // I1BNDcons(I1TNM(106);I0Ptup0($list());$list())
            // I1CMP:start
            // I1LETnew1(I1TNM(105);...)
              // I1INSdapp(I1Vcst(owed_t0_elim0(5));$list(I1Vnone0()))
            // I1CMP(ival):I1Vtnm(I1TNM(105)) // I1CMP:return
            jsxtnm107 = jsxtnm104
          } // endlet
          // I1CMP:return:jsxtnm107
          return jsxtnm107
        } // endtimp(a0rf_get(972))
        let jsxtnm109 = XATSDAPP(jsxtnm108(jsxtnm88))
        jsxtnm110 = jsxtnm109
        XATS000_patck(true)
        // I1Dvaldclist(LCSRCsome1(prime.dats)@(843(line=64,offs=1)--874(line=65,offs=23)))
        // I1VALDCL
        let jsxtnm134
        // LCSRCsome1(prime.dats)@(852(line=65,offs=1)--860(line=65,offs=9))
        // I0Etapq(I0Ecst(a0rf_set(973));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
        // T1IMPallx(a0rf_set(973), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/axrf000.dats)@(2738(line=139,offs=1)--2845(line=145,offs=29)))
        // T1IMPallx(a0rf_set(973), I1Dtmpsub($list(x0[5884]T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())));I1Dimplmnt0(DIMPLone2(a0rf_set(973);$list(a[2651]T2Pvar(x0[5884]))))))
        let jsxtnm124 = function (arg1, arg2) { // timp: a0rf_set(973)
          let jsxtnm111 = arg1
          let jsxtnm112 = arg2
          // I1CMP:start
          let jsxtnm123 // let
          { // let
            // I1Dprvdclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/axrf000.dats)@(2778(line=143,offs=1)--2808(line=144,offs=20)))
            // I1VALDCL
            // I1BNDcons(I1TNM(114);I0Pvar(pf(2010));$list(pf(2010)I1Vtnm(I1TNM(114))))
            // I1CMP:start
            // I1LETnew1(I1TNM(113);...)
              // I1INSdapp(I1Vcst(owed_t0_make(4));$list())
            // I1CMP(ival):I1Vtnm(I1TNM(113)) // I1CMP:return
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/axrf000.dats)@(2817(line=145,offs=1)--2826(line=145,offs=10))
            // I0Etapq(I0Ecst(a0rf_lset(977));$list(T2JAG($list(T2Pvar(x0[5884])))))
            // T1IMPallx(a0rf_lset(977), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(1883(line=76,offs=1)--2051(line=90,offs=2)))
            // T1IMPallx(a0rf_lset(977), I1Dtmpsub($list(a[7103]T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())));I1Dimplmnt0(DIMPLone2(a0rf_lset(977);$list(a[2655]T2Pvar(a[7103]))))))
            let jsxtnm121 = function (arg1, arg2) { // timp: a0rf_lset(977)
              let jsxtnm115 = arg1
              let jsxtnm116 = arg2
              // I1CMP:start
              let jsxtnm120 // let
              { // let
                // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(1967(line=84,offs=1)--2049(line=89,offs=35)))
                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(1975(line=85,offs=1)--2049(line=89,offs=35))
                // I1FUNDCL
                // XATS2JS_a0rf_lset_1978
                  // FJARGdarg($list(I1BNDcons(I1TNM(117);I0Pvar(A(4082));$list(A(4082)I1Vtnm(I1TNM(117)))),I1BNDcons(I1TNM(118);I0Pvar(x(4083));$list(x(4083)I1Vtnm(I1TNM(118))))))
                  // I1CMP:start
                  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_a0rf_lset);G1Nlist($list())) // I1CMP:return
                let jsxtnm119 = XATSDAPP(XATS2JS_a0rf_lset(jsxtnm115, jsxtnm116))
                jsxtnm120 = jsxtnm119
              } // endlet
              // I1CMP:return:jsxtnm120
              return jsxtnm120
            } // endtimp(a0rf_lset(977))
            let jsxtnm122 = XATSDAPP(jsxtnm121(jsxtnm111, jsxtnm112))
            jsxtnm123 = jsxtnm122
          } // endlet
          // I1CMP:return:jsxtnm123
          return jsxtnm123
        } // endtimp(a0rf_set(973))
        // LCSRCsome1(prime.dats)@(870(line=65,offs=19)--871(line=65,offs=20))
        // I0Etapq(I0Ecst(sint_add$sint(825));$list(T2JAG($list())))
        // T1IMPallx(sint_add$sint(825), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
        // T1IMPallx(sint_add$sint(825), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(825);$list()))))
        let jsxtnm131 = function (arg1, arg2) { // timp: sint_add$sint(825)
          let jsxtnm125 = arg1
          let jsxtnm126 = arg2
          // I1CMP:start
          let jsxtnm130 // let
          { // let
            // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
            // I1FUNDCL
            // XATS2JS_sint_add$sint_2778
              // FJARGdarg($list(I1BNDcons(I1TNM(127);I0Pvar(i1(3953));$list(i1(3953)I1Vtnm(I1TNM(127)))),I1BNDcons(I1TNM(128);I0Pvar(i2(3954));$list(i2(3954)I1Vtnm(I1TNM(128))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list())) // I1CMP:return
            let jsxtnm129 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm125, jsxtnm126))
            jsxtnm130 = jsxtnm129
          } // endlet
          // I1CMP:return:jsxtnm130
          return jsxtnm130
        } // endtimp(sint_add$sint(825))
        let jsxtnm132 = XATSDAPP(jsxtnm131(jsxtnm110, XATSINT1(1)))
        let jsxtnm133 = XATSDAPP(jsxtnm124(jsxtnm88, jsxtnm132))
        jsxtnm134 = jsxtnm133
        XATS000_patck(true)
        // I1Dvaldclist(LCSRCsome1(prime.dats)@(878(line=67,offs=1)--907(line=68,offs=26)))
        // I1VALDCL
        let jsxtnm141
        // LCSRCsome1(prime.dats)@(892(line=68,offs=11)--901(line=68,offs=20))
        // I0Etapq(I0Ecst(a0rf_lget(976));$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strxcon_vt);$list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))
        // T1IMPallx(a0rf_lget(976), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(1722(line=59,offs=1)--1879(line=74,offs=2)))
        // T1IMPallx(a0rf_lget(976), I1Dtmpsub($list(a[7101]T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strxcon_vt);$list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(a0rf_lget(976);$list(a[2654]T2Pvar(a[7101]))))))
        let jsxtnm139 = function (arg1) { // timp: a0rf_lget(976)
          let jsxtnm135 = arg1
          // I1CMP:start
          let jsxtnm138 // let
          { // let
            // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(1798(line=67,offs=1)--1877(line=73,offs=28)))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(1806(line=68,offs=1)--1877(line=73,offs=28))
            // I1FUNDCL
            // XATS2JS_a0rf_lget_1809
              // FJARGdarg($list(I1BNDcons(I1TNM(136);I0Pvar(A(4076));$list(A(4076)I1Vtnm(I1TNM(136))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_a0rf_lget);G1Nlist($list())) // I1CMP:return
            let jsxtnm137 = XATSDAPP(XATS2JS_a0rf_lget(jsxtnm135))
            jsxtnm138 = jsxtnm137
          } // endlet
          // I1CMP:return:jsxtnm138
          return jsxtnm138
        } // endtimp(a0rf_lget(976))
        let jsxtnm140 = XATSDAPP(jsxtnm139(jsxtnm95))
        jsxtnm141 = jsxtnm140
        XATS000_patck(true)
        // I1Dvaldclist(LCSRCsome1(prime.dats)@(908(line=69,offs=1)--943(line=70,offs=30)))
        // I1VALDCL
        let jsxtnm143
        let jsxtnm142 = XATS000_dl1az(jsxtnm141)
        jsxtnm143 = jsxtnm142
        XATS000_patck(XATS000_ctgeq(jsxtnm142, XATSCTAG("strxcon_vt_cons",0)))
        // I1Dvaldclist(LCSRCsome1(prime.dats)@(944(line=71,offs=1)--978(line=71,offs=35)))
        // I1VALDCL
        let jsxtnm152
        // LCSRCsome1(prime.dats)@(954(line=71,offs=11)--963(line=71,offs=20))
        // I0Etapq(I0Ecst(a0rf_lset(977));$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strxcon_vt);$list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))
        // T1IMPallx(a0rf_lset(977), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(1883(line=76,offs=1)--2051(line=90,offs=2)))
        // T1IMPallx(a0rf_lset(977), I1Dtmpsub($list(a[7103]T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strxcon_vt);$list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(a0rf_lset(977);$list(a[2655]T2Pvar(a[7103]))))))
        let jsxtnm150 = function (arg1, arg2) { // timp: a0rf_lset(977)
          let jsxtnm144 = arg1
          let jsxtnm145 = arg2
          // I1CMP:start
          let jsxtnm149 // let
          { // let
            // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(1967(line=84,offs=1)--2049(line=89,offs=35)))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/axrf000.dats)@(1975(line=85,offs=1)--2049(line=89,offs=35))
            // I1FUNDCL
            // XATS2JS_a0rf_lset_1978
              // FJARGdarg($list(I1BNDcons(I1TNM(146);I0Pvar(A(4082));$list(A(4082)I1Vtnm(I1TNM(146)))),I1BNDcons(I1TNM(147);I0Pvar(x(4083));$list(x(4083)I1Vtnm(I1TNM(147))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_a0rf_lset);G1Nlist($list())) // I1CMP:return
            let jsxtnm148 = XATSDAPP(XATS2JS_a0rf_lset(jsxtnm144, jsxtnm145))
            jsxtnm149 = jsxtnm148
          } // endlet
          // I1CMP:return:jsxtnm149
          return jsxtnm149
        } // endtimp(a0rf_lset(977))
        let jsxtnm151 = XATSDAPP(jsxtnm150(jsxtnm95, XATSP1CN("strxcon_vt_cons", jsxtnm143[1+1])))
        jsxtnm152 = jsxtnm151
        XATS000_patck(true)
        // LCSRCsome1(prime.dats)@(993(line=74,offs=1)--999(line=74,offs=7))
        // I0Etapq(I0Ecst(gs_tostr_a4(688));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
        // T1IMPallx(gs_tostr_a4(688), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(18781(line=1133,offs=1)--19072(line=1153,offs=2)))
        // T1IMPallx(gs_tostr_a4(688), I1Dtmpsub($list(x0[5607]T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),x1[5608]T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())),x2[5609]T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),x3[5610]T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())));I1Dimplmnt0(DIMPLone2(gs_tostr_a4(688);$list(x0[2128]T2Pvar(x0[5607]),x1[2129]T2Pvar(x1[5608]),x2[2130]T2Pvar(x2[5609]),x3[2131]T2Pvar(x3[5610]))))))
        let jsxtnm486 = function (arg1, arg2, arg3, arg4) { // timp: gs_tostr_a4(688)
          let jsxtnm153 = arg1
          let jsxtnm154 = arg2
          let jsxtnm155 = arg3
          let jsxtnm156 = arg4
          // I1CMP:start
          // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(18863(line=1141,offs=1)--18879(line=1141,offs=17))
          // I0Etapq(I0Ecst(strn_fmake_fwork(965));$list(T2JAG($list())))
          // T1IMPallx(strn_fmake_fwork(965), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2479(line=126,offs=1)--2661(line=139,offs=2)))
          // T1IMPallx(strn_fmake_fwork(965), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_fmake_fwork(965);$list()))))
          let jsxtnm161 = function (arg1) { // timp: strn_fmake_fwork(965)
            let jsxtnm157 = arg1
            // I1CMP:start
            let jsxtnm160 // let
            { // let
              // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2573(line=134,offs=1)--2659(line=138,offs=42)))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2581(line=135,offs=1)--2659(line=138,offs=42))
              // I1FUNDCL
              // XATS000_strn_fmake_fwork_2584
                // FJARGdarg($list(I1BNDcons(I1TNM(158);I0Pvar(fwork(2585));$list(fwork(2585)I1Vtnm(I1TNM(158))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS000_strn_fmake_fwork);G1Nlist($list())) // I1CMP:return
              let jsxtnm159 = XATSDAPP(XATS000_strn_fmake_fwork(jsxtnm157))
              jsxtnm160 = jsxtnm159
            } // endlet
            // I1CMP:return:jsxtnm160
            return jsxtnm160
          } // endtimp(strn_fmake_fwork(965))
          let jsxtnm484 = function (arg1) { // lam0(T_LAM(0))
            let jsxtnm162 = arg1
            // I1CMP:start
            let jsxtnm483 // let
            { // let
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(19019(line=1151,offs=1)--19037(line=1151,offs=19))
              // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(c1;S2Ecst(cgtz)))))
              // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(19038(line=1152,offs=1)--19069(line=1152,offs=32)))
              // I1Dimplmnt0(DIMPLone2(foritm$work(50);$list(x0[393]T2Pcst(c1)))):timp
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(18899(line=1145,offs=1)--18910(line=1145,offs=12))
              // I0Etapq(I0Ecst(strn_foritm(957));$list(T2JAG($list())))
              // T1IMPallx(strn_foritm(957), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(3914(line=233,offs=1)--3970(line=236,offs=24)))
              // T1IMPallx(strn_foritm(957), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_foritm(957);$list()))))
              let jsxtnm235
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(3947(line=236,offs=1)--3958(line=236,offs=12))
              // I0Etapq(I0Ecst(gseq_foritm(354));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))
              // T1IMPallx(gseq_foritm(354), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6023(line=377,offs=1)--6210(line=394,offs=2)))
              // T1IMPallx(gseq_foritm(354), I1Dtmpsub($list(xs[4893]T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),x0[4894]T2Papps(T2Pcst(char_type);$list(T2Pnone0())));I1Dimplmnt0(DIMPLone2(gseq_foritm(354);$list(xs[1068]T2Pvar(xs[4893]),x0[1069]T2Pvar(x0[4894]))))))
              let jsxtnm234 = function (arg1) { // timp: gseq_foritm(354)
                let jsxtnm163 = arg1
                // I1CMP:start
                let jsxtnm233 // let
                { // let
                  // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6133(line=389,offs=1)--6208(line=393,offs=32)))
                  // I1Dimplmnt0(DIMPLone2(forall$test(46);$list(x0[389]T2Pvar(x0[4894])))):timp
                  let jsxtnm232 // let
                  { // let
                    // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6081(line=384,offs=1)--6113(line=386,offs=13)))
                    // I1VALDCL
                    let jsxtnm231
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6089(line=385,offs=1)--6100(line=385,offs=12))
                    // I0Etapq(I0Ecst(gseq_forall(338));$list(T2JAG($list(T2Pvar(xs[4893]))),T2JAG($list(T2Pvar(x0[4894])))))
                    // T1IMPallx(gseq_forall(338), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1976(line=85,offs=1)--2025(line=87,offs=29)))
                    // T1IMPallx(gseq_forall(338), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gseq_forall(338);$list(xs[1020]T2Pcst(strn),x0[1021]T2Pcst(cgtz))))))
                    let jsxtnm229
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(2012(line=87,offs=16)--2023(line=87,offs=27))
                    // I0Etapq(I0Ecst(strn_forall(949));$list(T2JAG($list())))
                    // T1IMPallx(strn_forall(949), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1556(line=51,offs=1)--1772(line=72,offs=2)))
                    // T1IMPallx(strn_forall(949), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_forall(949);$list()))))
                    let jsxtnm228 = function (arg1) { // timp: strn_forall(949)
                      let jsxtnm168 = arg1
                      // I1CMP:start
                      let jsxtnm227 // let
                      { // let
                        // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1627(line=59,offs=1)--1658(line=61,offs=21)))
                        // I1VALDCL
                        let jsxtnm175
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1640(line=61,offs=3)--1651(line=61,offs=14))
                        // I0Etapq(I0Ecst(strn_length(917));$list(T2JAG($list())))
                        // T1IMPallx(strn_length(917), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1430(line=40,offs=1)--1576(line=52,offs=2)))
                        // T1IMPallx(strn_length(917), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_length(917);$list()))))
                        let jsxtnm173 = function (arg1) { // timp: strn_length(917)
                          let jsxtnm169 = arg1
                          // I1CMP:start
                          let jsxtnm172 // let
                          { // let
                            // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1512(line=48,offs=1)--1574(line=51,offs=31)))
                            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1520(line=49,offs=1)--1574(line=51,offs=31))
                            // I1FUNDCL
                            // XATS2JS_strn_length_1523
                              // FJARGdarg($list(I1BNDcons(I1TNM(170);I0Pvar(cs(4065));$list(cs(4065)I1Vtnm(I1TNM(170))))))
                              // I1CMP:start
                              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_length);G1Nlist($list())) // I1CMP:return
                            let jsxtnm171 = XATSDAPP(XATS2JS_strn_length(jsxtnm169))
                            jsxtnm172 = jsxtnm171
                          } // endlet
                          // I1CMP:return:jsxtnm172
                          return jsxtnm172
                        } // endtimp(strn_length(917))
                        let jsxtnm174 = XATSDAPP(jsxtnm173(jsxtnm168))
                        jsxtnm175 = jsxtnm174
                        XATS000_patck(true)
                        // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1662(line=63,offs=1)--1770(line=71,offs=2)))
                        // I1Dimplmnt0(DIMPLone2(forall$test(46);$list(x0[389]T2Pcst(ni)))):timp
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1597(line=55,offs=3)--1608(line=55,offs=14))
                        // I0Etapq(I0Ecst(nint_forall(838));$list(T2JAG($list())))
                        // T1IMPallx(nint_forall(838), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2796(line=146,offs=1)--2981(line=160,offs=33)))
                        // T1IMPallx(nint_forall(838), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(nint_forall(838);$list()))))
                        let jsxtnm225 = function (arg1) { // timp: nint_forall(838)
                          let jsxtnm181 = arg1
                          // I1CMP:start
                          let jsxtnm224 // let
                          { // let
                            // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2859(line=151,offs=1)--2980(line=160,offs=32)))
                            // I1FUNDCL
                            function loop_2862(arg1, arg2)
                            { // fun
                              let jsxtnm182 = arg1
                              let jsxtnm183 = arg2
                              // I1CMP:start
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2900(line=155,offs=5)--2902(line=155,offs=7))
                              // I0Etapq(I0Ecst(sint_gte$sint(822));$list(T2JAG($list())))
                              // T1IMPallx(sint_gte$sint(822), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2298(line=114,offs=1)--2462(line=126,offs=2)))
                              // T1IMPallx(sint_gte$sint(822), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_gte$sint(822);$list()))))
                              let jsxtnm190 = function (arg1, arg2) { // timp: sint_gte$sint(822)
                                let jsxtnm184 = arg1
                                let jsxtnm185 = arg2
                                // I1CMP:start
                                let jsxtnm189 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2388(line=122,offs=1)--2460(line=125,offs=39)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2396(line=123,offs=1)--2460(line=125,offs=39))
                                  // I1FUNDCL
                                  // XATS2JS_sint_gte$sint_2399
                                    // FJARGdarg($list(I1BNDcons(I1TNM(186);I0Pvar(i1(3943));$list(i1(3943)I1Vtnm(I1TNM(186)))),I1BNDcons(I1TNM(187);I0Pvar(i2(3944));$list(i2(3944)I1Vtnm(I1TNM(187))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_gte$sint);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm188 = XATSDAPP(XATS2JS_sint_gte$sint(jsxtnm184, jsxtnm185))
                                  jsxtnm189 = jsxtnm188
                                } // endlet
                                // I1CMP:return:jsxtnm189
                                return jsxtnm189
                              } // endtimp(sint_gte$sint(822))
                              let jsxtnm191 = XATSDAPP(jsxtnm190(jsxtnm183, jsxtnm182))
                              let jsxtnm222 // ift
                              if (jsxtnm191) // ift
                              {
                                jsxtnm222 = XATSBOOL(true)
                              } else {
                                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2929(line=159,offs=1)--2940(line=159,offs=12))
                                // I0Etapq(I0Ecst(forall$test(46));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
                                // T1IMPallx(forall$test(46), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1662(line=63,offs=1)--1770(line=71,offs=2)))
                                // T1IMPallx(forall$test(46), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(forall$test(46);$list(x0[389]T2Pcst(ni))))))
                                let jsxtnm210 = function (arg1) { // timp: forall$test(46)
                                  let jsxtnm192 = arg1
                                  // I1CMP:start
                                  let jsxtnm209 // let
                                  { // let
                                    // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1728(line=69,offs=1)--1768(line=70,offs=32)))
                                    // I1VALDCL
                                    let jsxtnm201
                                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1743(line=70,offs=7)--1758(line=70,offs=22))
                                    // I0Etapq(I0Ecst(strn_get$at$raw(1809));$list(T2JAG($list())))
                                    // T1IMPallx(strn_get$at$raw(1809), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2200(line=104,offs=1)--2376(line=116,offs=2)))
                                    // T1IMPallx(strn_get$at$raw(1809), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_get$at$raw(1809);$list()))))
                                    let jsxtnm199 = function (arg1, arg2) { // timp: strn_get$at$raw(1809)
                                      let jsxtnm193 = arg1
                                      let jsxtnm194 = arg2
                                      // I1CMP:start
                                      let jsxtnm198 // let
                                      { // let
                                        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2298(line=112,offs=1)--2374(line=115,offs=41)))
                                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2306(line=113,offs=1)--2374(line=115,offs=41))
                                        // I1FUNDCL
                                        // XATS000_strn_get$at$raw_2309
                                          // FJARGdarg($list(I1BNDcons(I1TNM(195);I0Pvar(cs(2581));$list(cs(2581)I1Vtnm(I1TNM(195)))),I1BNDcons(I1TNM(196);I0Pvar(i0(2582));$list(i0(2582)I1Vtnm(I1TNM(196))))))
                                          // I1CMP:start
                                          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS000_strn_get$at$raw);G1Nlist($list())) // I1CMP:return
                                        let jsxtnm197 = XATSDAPP(XATS000_strn_get$at$raw(jsxtnm193, jsxtnm194))
                                        jsxtnm198 = jsxtnm197
                                      } // endlet
                                      // I1CMP:return:jsxtnm198
                                      return jsxtnm198
                                    } // endtimp(strn_get$at$raw(1809))
                                    let jsxtnm200 = XATSDAPP(jsxtnm199(jsxtnm168, jsxtnm192))
                                    jsxtnm201 = jsxtnm200
                                    XATS000_patck(true)
                                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1697(line=66,offs=3)--1708(line=66,offs=14))
                                    // I0Etapq(I0Ecst(forall$test(46));$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))
                                    // T1IMPallx(forall$test(46), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6133(line=389,offs=1)--6208(line=393,offs=32)))
                                    // T1IMPallx(forall$test(46), I1Dtmpsub($list(xs[4893]T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),x0[4894]T2Papps(T2Pcst(char_type);$list(T2Pnone0())));I1Dimplmnt0(DIMPLone2(forall$test(46);$list(x0[389]T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))))
                                    let jsxtnm207 = function (arg1) { // timp: forall$test(46)
                                      let jsxtnm202 = arg1
                                      // I1CMP:start
                                      let jsxtnm206 // let
                                      { // let
                                        // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6168(line=392,offs=1)--6196(line=393,offs=20)))
                                        // I1VALDCL
                                        let jsxtnm205
                                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6177(line=393,offs=1)--6188(line=393,offs=12))
                                        // I0Etapq(I0Ecst(foritm$work(50));$list(T2JAG($list(T2Pvar(x0[4894])))))
                                        // T1IMPallx(foritm$work(50), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(19038(line=1152,offs=1)--19069(line=1152,offs=32)))
                                        // T1IMPallx(foritm$work(50), I1Dtmpsub($list(x0[5607]T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),x1[5608]T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())),x2[5609]T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),x3[5610]T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())));I1Dimplmnt0(DIMPLone2(foritm$work(50);$list(x0[393]T2Pcst(c1))))))
                                        let jsxtnm203
                                        jsxtnm203 = jsxtnm162
                                        let jsxtnm204 = XATSDAPP(jsxtnm203(jsxtnm202))
                                        jsxtnm205 = jsxtnm204
                                        XATS000_patck(true)
                                        jsxtnm206 = XATSBOOL(true)
                                      } // endlet
                                      // I1CMP:return:jsxtnm206
                                      return jsxtnm206
                                    } // endtimp(forall$test(46))
                                    let jsxtnm208 = XATSDAPP(jsxtnm207(jsxtnm201))
                                    jsxtnm209 = jsxtnm208
                                  } // endlet
                                  // I1CMP:return:jsxtnm209
                                  return jsxtnm209
                                } // endtimp(forall$test(46))
                                let jsxtnm211 = XATSDAPP(jsxtnm210(jsxtnm183))
                                let jsxtnm221 // ift
                                if (jsxtnm211) // ift
                                {
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2965(line=160,offs=17)--2966(line=160,offs=18))
                                  // I0Etapq(I0Ecst(sint_add$sint(825));$list(T2JAG($list())))
                                  // T1IMPallx(sint_add$sint(825), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
                                  // T1IMPallx(sint_add$sint(825), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(825);$list()))))
                                  let jsxtnm218 = function (arg1, arg2) { // timp: sint_add$sint(825)
                                    let jsxtnm212 = arg1
                                    let jsxtnm213 = arg2
                                    // I1CMP:start
                                    let jsxtnm217 // let
                                    { // let
                                      // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
                                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
                                      // I1FUNDCL
                                      // XATS2JS_sint_add$sint_2778
                                        // FJARGdarg($list(I1BNDcons(I1TNM(214);I0Pvar(i1(3953));$list(i1(3953)I1Vtnm(I1TNM(214)))),I1BNDcons(I1TNM(215);I0Pvar(i2(3954));$list(i2(3954)I1Vtnm(I1TNM(215))))))
                                        // I1CMP:start
                                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list())) // I1CMP:return
                                      let jsxtnm216 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm212, jsxtnm213))
                                      jsxtnm217 = jsxtnm216
                                    } // endlet
                                    // I1CMP:return:jsxtnm217
                                    return jsxtnm217
                                  } // endtimp(sint_add$sint(825))
                                  let jsxtnm219 = XATSDAPP(jsxtnm218(jsxtnm183, XATSINT1(1)))
                                  let jsxtnm220 = XATSDAPP(loop_2862(jsxtnm182, jsxtnm219))
                                  jsxtnm221 = jsxtnm220
                                } else {
                                  jsxtnm221 = XATSBOOL(false)
                                } // end(if)
                                jsxtnm222 = jsxtnm221
                              } // end(if)
                              // I1CMP:return:jsxtnm222
                              return jsxtnm222
                            } // endfun(loop_2862)
                            let jsxtnm223 = XATSDAPP(loop_2862(jsxtnm181, XATSINT1(0)))
                            jsxtnm224 = jsxtnm223
                          } // endlet
                          // I1CMP:return:jsxtnm224
                          return jsxtnm224
                        } // endtimp(nint_forall(838))
                        let jsxtnm226 = XATSDAPP(jsxtnm225(jsxtnm175))
                        jsxtnm227 = jsxtnm226
                      } // endlet
                      // I1CMP:return:jsxtnm227
                      return jsxtnm227
                    } // endtimp(strn_forall(949))
                    jsxtnm229 = jsxtnm228
                    let jsxtnm230 = XATSDAPP(jsxtnm229(jsxtnm163))
                    jsxtnm231 = jsxtnm230
                    XATS000_patck(true)
                    jsxtnm232 = []
                  } // endlet
                  jsxtnm233 = jsxtnm232
                } // endlet
                // I1CMP:return:jsxtnm233
                return jsxtnm233
              } // endtimp(gseq_foritm(354))
              jsxtnm235 = jsxtnm234
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(18911(line=1145,offs=13)--18916(line=1145,offs=18))
              // I0Etapq(I0Ecst(g_tostr(37));$list(T2JAG($list(T2Pvar(x0[5607])))))
              // T1IMPallx(g_tostr(37), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gbas000.dats)@(1430(line=40,offs=1)--1562(line=51,offs=2)))
              // T1IMPallx(g_tostr(37), I1Dtmpsub($list(x0[7093]T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())));I1Dimplmnt0(DIMPLone2(g_tostr(37);$list(a[375]T2Pvar(x0[7093]))))))
              let jsxtnm240 = function (arg1) { // timp: g_tostr(37)
                let jsxtnm236 = arg1
                // I1CMP:start
                let jsxtnm239 // let
                { // let
                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gbas000.dats)@(1499(line=47,offs=1)--1560(line=50,offs=34)))
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gbas000.dats)@(1507(line=48,offs=1)--1560(line=50,offs=34))
                  // I1FUNDCL
                  // XATS2JS_g_tostr_1510
                    // FJARGdarg($list(I1BNDcons(I1TNM(237);I0Pvar(x0(3814));$list(x0(3814)I1Vtnm(I1TNM(237))))))
                    // I1CMP:start
                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_g_tostr);G1Nlist($list())) // I1CMP:return
                  let jsxtnm238 = XATSDAPP(XATS2JS_g_tostr(jsxtnm236))
                  jsxtnm239 = jsxtnm238
                } // endlet
                // I1CMP:return:jsxtnm239
                return jsxtnm239
              } // endtimp(g_tostr(37))
              let jsxtnm241 = XATSDAPP(jsxtnm240(jsxtnm153))
              let jsxtnm242 = XATSDAPP(jsxtnm235(jsxtnm241))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(18927(line=1146,offs=1)--18938(line=1146,offs=12))
              // I0Etapq(I0Ecst(strn_foritm(957));$list(T2JAG($list())))
              // T1IMPallx(strn_foritm(957), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(3914(line=233,offs=1)--3970(line=236,offs=24)))
              // T1IMPallx(strn_foritm(957), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_foritm(957);$list()))))
              let jsxtnm315
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(3947(line=236,offs=1)--3958(line=236,offs=12))
              // I0Etapq(I0Ecst(gseq_foritm(354));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))
              // T1IMPallx(gseq_foritm(354), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6023(line=377,offs=1)--6210(line=394,offs=2)))
              // T1IMPallx(gseq_foritm(354), I1Dtmpsub($list(xs[4893]T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),x0[4894]T2Papps(T2Pcst(char_type);$list(T2Pnone0())));I1Dimplmnt0(DIMPLone2(gseq_foritm(354);$list(xs[1068]T2Pvar(xs[4893]),x0[1069]T2Pvar(x0[4894]))))))
              let jsxtnm314 = function (arg1) { // timp: gseq_foritm(354)
                let jsxtnm243 = arg1
                // I1CMP:start
                let jsxtnm313 // let
                { // let
                  // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6133(line=389,offs=1)--6208(line=393,offs=32)))
                  // I1Dimplmnt0(DIMPLone2(forall$test(46);$list(x0[389]T2Pvar(x0[4894])))):timp
                  let jsxtnm312 // let
                  { // let
                    // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6081(line=384,offs=1)--6113(line=386,offs=13)))
                    // I1VALDCL
                    let jsxtnm311
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6089(line=385,offs=1)--6100(line=385,offs=12))
                    // I0Etapq(I0Ecst(gseq_forall(338));$list(T2JAG($list(T2Pvar(xs[4893]))),T2JAG($list(T2Pvar(x0[4894])))))
                    // T1IMPallx(gseq_forall(338), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1976(line=85,offs=1)--2025(line=87,offs=29)))
                    // T1IMPallx(gseq_forall(338), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gseq_forall(338);$list(xs[1020]T2Pcst(strn),x0[1021]T2Pcst(cgtz))))))
                    let jsxtnm309
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(2012(line=87,offs=16)--2023(line=87,offs=27))
                    // I0Etapq(I0Ecst(strn_forall(949));$list(T2JAG($list())))
                    // T1IMPallx(strn_forall(949), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1556(line=51,offs=1)--1772(line=72,offs=2)))
                    // T1IMPallx(strn_forall(949), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_forall(949);$list()))))
                    let jsxtnm308 = function (arg1) { // timp: strn_forall(949)
                      let jsxtnm248 = arg1
                      // I1CMP:start
                      let jsxtnm307 // let
                      { // let
                        // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1627(line=59,offs=1)--1658(line=61,offs=21)))
                        // I1VALDCL
                        let jsxtnm255
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1640(line=61,offs=3)--1651(line=61,offs=14))
                        // I0Etapq(I0Ecst(strn_length(917));$list(T2JAG($list())))
                        // T1IMPallx(strn_length(917), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1430(line=40,offs=1)--1576(line=52,offs=2)))
                        // T1IMPallx(strn_length(917), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_length(917);$list()))))
                        let jsxtnm253 = function (arg1) { // timp: strn_length(917)
                          let jsxtnm249 = arg1
                          // I1CMP:start
                          let jsxtnm252 // let
                          { // let
                            // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1512(line=48,offs=1)--1574(line=51,offs=31)))
                            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1520(line=49,offs=1)--1574(line=51,offs=31))
                            // I1FUNDCL
                            // XATS2JS_strn_length_1523
                              // FJARGdarg($list(I1BNDcons(I1TNM(250);I0Pvar(cs(4065));$list(cs(4065)I1Vtnm(I1TNM(250))))))
                              // I1CMP:start
                              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_length);G1Nlist($list())) // I1CMP:return
                            let jsxtnm251 = XATSDAPP(XATS2JS_strn_length(jsxtnm249))
                            jsxtnm252 = jsxtnm251
                          } // endlet
                          // I1CMP:return:jsxtnm252
                          return jsxtnm252
                        } // endtimp(strn_length(917))
                        let jsxtnm254 = XATSDAPP(jsxtnm253(jsxtnm248))
                        jsxtnm255 = jsxtnm254
                        XATS000_patck(true)
                        // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1662(line=63,offs=1)--1770(line=71,offs=2)))
                        // I1Dimplmnt0(DIMPLone2(forall$test(46);$list(x0[389]T2Pcst(ni)))):timp
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1597(line=55,offs=3)--1608(line=55,offs=14))
                        // I0Etapq(I0Ecst(nint_forall(838));$list(T2JAG($list())))
                        // T1IMPallx(nint_forall(838), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2796(line=146,offs=1)--2981(line=160,offs=33)))
                        // T1IMPallx(nint_forall(838), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(nint_forall(838);$list()))))
                        let jsxtnm305 = function (arg1) { // timp: nint_forall(838)
                          let jsxtnm261 = arg1
                          // I1CMP:start
                          let jsxtnm304 // let
                          { // let
                            // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2859(line=151,offs=1)--2980(line=160,offs=32)))
                            // I1FUNDCL
                            function loop_2862(arg1, arg2)
                            { // fun
                              let jsxtnm262 = arg1
                              let jsxtnm263 = arg2
                              // I1CMP:start
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2900(line=155,offs=5)--2902(line=155,offs=7))
                              // I0Etapq(I0Ecst(sint_gte$sint(822));$list(T2JAG($list())))
                              // T1IMPallx(sint_gte$sint(822), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2298(line=114,offs=1)--2462(line=126,offs=2)))
                              // T1IMPallx(sint_gte$sint(822), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_gte$sint(822);$list()))))
                              let jsxtnm270 = function (arg1, arg2) { // timp: sint_gte$sint(822)
                                let jsxtnm264 = arg1
                                let jsxtnm265 = arg2
                                // I1CMP:start
                                let jsxtnm269 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2388(line=122,offs=1)--2460(line=125,offs=39)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2396(line=123,offs=1)--2460(line=125,offs=39))
                                  // I1FUNDCL
                                  // XATS2JS_sint_gte$sint_2399
                                    // FJARGdarg($list(I1BNDcons(I1TNM(266);I0Pvar(i1(3943));$list(i1(3943)I1Vtnm(I1TNM(266)))),I1BNDcons(I1TNM(267);I0Pvar(i2(3944));$list(i2(3944)I1Vtnm(I1TNM(267))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_gte$sint);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm268 = XATSDAPP(XATS2JS_sint_gte$sint(jsxtnm264, jsxtnm265))
                                  jsxtnm269 = jsxtnm268
                                } // endlet
                                // I1CMP:return:jsxtnm269
                                return jsxtnm269
                              } // endtimp(sint_gte$sint(822))
                              let jsxtnm271 = XATSDAPP(jsxtnm270(jsxtnm263, jsxtnm262))
                              let jsxtnm302 // ift
                              if (jsxtnm271) // ift
                              {
                                jsxtnm302 = XATSBOOL(true)
                              } else {
                                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2929(line=159,offs=1)--2940(line=159,offs=12))
                                // I0Etapq(I0Ecst(forall$test(46));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
                                // T1IMPallx(forall$test(46), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1662(line=63,offs=1)--1770(line=71,offs=2)))
                                // T1IMPallx(forall$test(46), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(forall$test(46);$list(x0[389]T2Pcst(ni))))))
                                let jsxtnm290 = function (arg1) { // timp: forall$test(46)
                                  let jsxtnm272 = arg1
                                  // I1CMP:start
                                  let jsxtnm289 // let
                                  { // let
                                    // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1728(line=69,offs=1)--1768(line=70,offs=32)))
                                    // I1VALDCL
                                    let jsxtnm281
                                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1743(line=70,offs=7)--1758(line=70,offs=22))
                                    // I0Etapq(I0Ecst(strn_get$at$raw(1809));$list(T2JAG($list())))
                                    // T1IMPallx(strn_get$at$raw(1809), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2200(line=104,offs=1)--2376(line=116,offs=2)))
                                    // T1IMPallx(strn_get$at$raw(1809), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_get$at$raw(1809);$list()))))
                                    let jsxtnm279 = function (arg1, arg2) { // timp: strn_get$at$raw(1809)
                                      let jsxtnm273 = arg1
                                      let jsxtnm274 = arg2
                                      // I1CMP:start
                                      let jsxtnm278 // let
                                      { // let
                                        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2298(line=112,offs=1)--2374(line=115,offs=41)))
                                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2306(line=113,offs=1)--2374(line=115,offs=41))
                                        // I1FUNDCL
                                        // XATS000_strn_get$at$raw_2309
                                          // FJARGdarg($list(I1BNDcons(I1TNM(275);I0Pvar(cs(2581));$list(cs(2581)I1Vtnm(I1TNM(275)))),I1BNDcons(I1TNM(276);I0Pvar(i0(2582));$list(i0(2582)I1Vtnm(I1TNM(276))))))
                                          // I1CMP:start
                                          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS000_strn_get$at$raw);G1Nlist($list())) // I1CMP:return
                                        let jsxtnm277 = XATSDAPP(XATS000_strn_get$at$raw(jsxtnm273, jsxtnm274))
                                        jsxtnm278 = jsxtnm277
                                      } // endlet
                                      // I1CMP:return:jsxtnm278
                                      return jsxtnm278
                                    } // endtimp(strn_get$at$raw(1809))
                                    let jsxtnm280 = XATSDAPP(jsxtnm279(jsxtnm248, jsxtnm272))
                                    jsxtnm281 = jsxtnm280
                                    XATS000_patck(true)
                                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1697(line=66,offs=3)--1708(line=66,offs=14))
                                    // I0Etapq(I0Ecst(forall$test(46));$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))
                                    // T1IMPallx(forall$test(46), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6133(line=389,offs=1)--6208(line=393,offs=32)))
                                    // T1IMPallx(forall$test(46), I1Dtmpsub($list(xs[4893]T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),x0[4894]T2Papps(T2Pcst(char_type);$list(T2Pnone0())));I1Dimplmnt0(DIMPLone2(forall$test(46);$list(x0[389]T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))))
                                    let jsxtnm287 = function (arg1) { // timp: forall$test(46)
                                      let jsxtnm282 = arg1
                                      // I1CMP:start
                                      let jsxtnm286 // let
                                      { // let
                                        // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6168(line=392,offs=1)--6196(line=393,offs=20)))
                                        // I1VALDCL
                                        let jsxtnm285
                                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6177(line=393,offs=1)--6188(line=393,offs=12))
                                        // I0Etapq(I0Ecst(foritm$work(50));$list(T2JAG($list(T2Pvar(x0[4894])))))
                                        // T1IMPallx(foritm$work(50), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(19038(line=1152,offs=1)--19069(line=1152,offs=32)))
                                        // T1IMPallx(foritm$work(50), I1Dtmpsub($list(x0[5607]T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),x1[5608]T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())),x2[5609]T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),x3[5610]T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())));I1Dimplmnt0(DIMPLone2(foritm$work(50);$list(x0[393]T2Pcst(c1))))))
                                        let jsxtnm283
                                        jsxtnm283 = jsxtnm162
                                        let jsxtnm284 = XATSDAPP(jsxtnm283(jsxtnm282))
                                        jsxtnm285 = jsxtnm284
                                        XATS000_patck(true)
                                        jsxtnm286 = XATSBOOL(true)
                                      } // endlet
                                      // I1CMP:return:jsxtnm286
                                      return jsxtnm286
                                    } // endtimp(forall$test(46))
                                    let jsxtnm288 = XATSDAPP(jsxtnm287(jsxtnm281))
                                    jsxtnm289 = jsxtnm288
                                  } // endlet
                                  // I1CMP:return:jsxtnm289
                                  return jsxtnm289
                                } // endtimp(forall$test(46))
                                let jsxtnm291 = XATSDAPP(jsxtnm290(jsxtnm263))
                                let jsxtnm301 // ift
                                if (jsxtnm291) // ift
                                {
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2965(line=160,offs=17)--2966(line=160,offs=18))
                                  // I0Etapq(I0Ecst(sint_add$sint(825));$list(T2JAG($list())))
                                  // T1IMPallx(sint_add$sint(825), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
                                  // T1IMPallx(sint_add$sint(825), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(825);$list()))))
                                  let jsxtnm298 = function (arg1, arg2) { // timp: sint_add$sint(825)
                                    let jsxtnm292 = arg1
                                    let jsxtnm293 = arg2
                                    // I1CMP:start
                                    let jsxtnm297 // let
                                    { // let
                                      // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
                                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
                                      // I1FUNDCL
                                      // XATS2JS_sint_add$sint_2778
                                        // FJARGdarg($list(I1BNDcons(I1TNM(294);I0Pvar(i1(3953));$list(i1(3953)I1Vtnm(I1TNM(294)))),I1BNDcons(I1TNM(295);I0Pvar(i2(3954));$list(i2(3954)I1Vtnm(I1TNM(295))))))
                                        // I1CMP:start
                                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list())) // I1CMP:return
                                      let jsxtnm296 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm292, jsxtnm293))
                                      jsxtnm297 = jsxtnm296
                                    } // endlet
                                    // I1CMP:return:jsxtnm297
                                    return jsxtnm297
                                  } // endtimp(sint_add$sint(825))
                                  let jsxtnm299 = XATSDAPP(jsxtnm298(jsxtnm263, XATSINT1(1)))
                                  let jsxtnm300 = XATSDAPP(loop_2862(jsxtnm262, jsxtnm299))
                                  jsxtnm301 = jsxtnm300
                                } else {
                                  jsxtnm301 = XATSBOOL(false)
                                } // end(if)
                                jsxtnm302 = jsxtnm301
                              } // end(if)
                              // I1CMP:return:jsxtnm302
                              return jsxtnm302
                            } // endfun(loop_2862)
                            let jsxtnm303 = XATSDAPP(loop_2862(jsxtnm261, XATSINT1(0)))
                            jsxtnm304 = jsxtnm303
                          } // endlet
                          // I1CMP:return:jsxtnm304
                          return jsxtnm304
                        } // endtimp(nint_forall(838))
                        let jsxtnm306 = XATSDAPP(jsxtnm305(jsxtnm255))
                        jsxtnm307 = jsxtnm306
                      } // endlet
                      // I1CMP:return:jsxtnm307
                      return jsxtnm307
                    } // endtimp(strn_forall(949))
                    jsxtnm309 = jsxtnm308
                    let jsxtnm310 = XATSDAPP(jsxtnm309(jsxtnm243))
                    jsxtnm311 = jsxtnm310
                    XATS000_patck(true)
                    jsxtnm312 = []
                  } // endlet
                  jsxtnm313 = jsxtnm312
                } // endlet
                // I1CMP:return:jsxtnm313
                return jsxtnm313
              } // endtimp(gseq_foritm(354))
              jsxtnm315 = jsxtnm314
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(18939(line=1146,offs=13)--18944(line=1146,offs=18))
              // I0Etapq(I0Ecst(g_tostr(37));$list(T2JAG($list(T2Pvar(x1[5608])))))
              // T1IMPallx(g_tostr(37), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gbas000.dats)@(1430(line=40,offs=1)--1562(line=51,offs=2)))
              // T1IMPallx(g_tostr(37), I1Dtmpsub($list(x0[7093]T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())));I1Dimplmnt0(DIMPLone2(g_tostr(37);$list(a[375]T2Pvar(x0[7093]))))))
              let jsxtnm320 = function (arg1) { // timp: g_tostr(37)
                let jsxtnm316 = arg1
                // I1CMP:start
                let jsxtnm319 // let
                { // let
                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gbas000.dats)@(1499(line=47,offs=1)--1560(line=50,offs=34)))
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gbas000.dats)@(1507(line=48,offs=1)--1560(line=50,offs=34))
                  // I1FUNDCL
                  // XATS2JS_g_tostr_1510
                    // FJARGdarg($list(I1BNDcons(I1TNM(317);I0Pvar(x0(3814));$list(x0(3814)I1Vtnm(I1TNM(317))))))
                    // I1CMP:start
                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_g_tostr);G1Nlist($list())) // I1CMP:return
                  let jsxtnm318 = XATSDAPP(XATS2JS_g_tostr(jsxtnm316))
                  jsxtnm319 = jsxtnm318
                } // endlet
                // I1CMP:return:jsxtnm319
                return jsxtnm319
              } // endtimp(g_tostr(37))
              let jsxtnm321 = XATSDAPP(jsxtnm320(jsxtnm154))
              let jsxtnm322 = XATSDAPP(jsxtnm315(jsxtnm321))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(18955(line=1147,offs=1)--18966(line=1147,offs=12))
              // I0Etapq(I0Ecst(strn_foritm(957));$list(T2JAG($list())))
              // T1IMPallx(strn_foritm(957), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(3914(line=233,offs=1)--3970(line=236,offs=24)))
              // T1IMPallx(strn_foritm(957), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_foritm(957);$list()))))
              let jsxtnm395
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(3947(line=236,offs=1)--3958(line=236,offs=12))
              // I0Etapq(I0Ecst(gseq_foritm(354));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))
              // T1IMPallx(gseq_foritm(354), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6023(line=377,offs=1)--6210(line=394,offs=2)))
              // T1IMPallx(gseq_foritm(354), I1Dtmpsub($list(xs[4893]T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),x0[4894]T2Papps(T2Pcst(char_type);$list(T2Pnone0())));I1Dimplmnt0(DIMPLone2(gseq_foritm(354);$list(xs[1068]T2Pvar(xs[4893]),x0[1069]T2Pvar(x0[4894]))))))
              let jsxtnm394 = function (arg1) { // timp: gseq_foritm(354)
                let jsxtnm323 = arg1
                // I1CMP:start
                let jsxtnm393 // let
                { // let
                  // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6133(line=389,offs=1)--6208(line=393,offs=32)))
                  // I1Dimplmnt0(DIMPLone2(forall$test(46);$list(x0[389]T2Pvar(x0[4894])))):timp
                  let jsxtnm392 // let
                  { // let
                    // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6081(line=384,offs=1)--6113(line=386,offs=13)))
                    // I1VALDCL
                    let jsxtnm391
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6089(line=385,offs=1)--6100(line=385,offs=12))
                    // I0Etapq(I0Ecst(gseq_forall(338));$list(T2JAG($list(T2Pvar(xs[4893]))),T2JAG($list(T2Pvar(x0[4894])))))
                    // T1IMPallx(gseq_forall(338), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1976(line=85,offs=1)--2025(line=87,offs=29)))
                    // T1IMPallx(gseq_forall(338), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gseq_forall(338);$list(xs[1020]T2Pcst(strn),x0[1021]T2Pcst(cgtz))))))
                    let jsxtnm389
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(2012(line=87,offs=16)--2023(line=87,offs=27))
                    // I0Etapq(I0Ecst(strn_forall(949));$list(T2JAG($list())))
                    // T1IMPallx(strn_forall(949), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1556(line=51,offs=1)--1772(line=72,offs=2)))
                    // T1IMPallx(strn_forall(949), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_forall(949);$list()))))
                    let jsxtnm388 = function (arg1) { // timp: strn_forall(949)
                      let jsxtnm328 = arg1
                      // I1CMP:start
                      let jsxtnm387 // let
                      { // let
                        // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1627(line=59,offs=1)--1658(line=61,offs=21)))
                        // I1VALDCL
                        let jsxtnm335
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1640(line=61,offs=3)--1651(line=61,offs=14))
                        // I0Etapq(I0Ecst(strn_length(917));$list(T2JAG($list())))
                        // T1IMPallx(strn_length(917), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1430(line=40,offs=1)--1576(line=52,offs=2)))
                        // T1IMPallx(strn_length(917), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_length(917);$list()))))
                        let jsxtnm333 = function (arg1) { // timp: strn_length(917)
                          let jsxtnm329 = arg1
                          // I1CMP:start
                          let jsxtnm332 // let
                          { // let
                            // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1512(line=48,offs=1)--1574(line=51,offs=31)))
                            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1520(line=49,offs=1)--1574(line=51,offs=31))
                            // I1FUNDCL
                            // XATS2JS_strn_length_1523
                              // FJARGdarg($list(I1BNDcons(I1TNM(330);I0Pvar(cs(4065));$list(cs(4065)I1Vtnm(I1TNM(330))))))
                              // I1CMP:start
                              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_length);G1Nlist($list())) // I1CMP:return
                            let jsxtnm331 = XATSDAPP(XATS2JS_strn_length(jsxtnm329))
                            jsxtnm332 = jsxtnm331
                          } // endlet
                          // I1CMP:return:jsxtnm332
                          return jsxtnm332
                        } // endtimp(strn_length(917))
                        let jsxtnm334 = XATSDAPP(jsxtnm333(jsxtnm328))
                        jsxtnm335 = jsxtnm334
                        XATS000_patck(true)
                        // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1662(line=63,offs=1)--1770(line=71,offs=2)))
                        // I1Dimplmnt0(DIMPLone2(forall$test(46);$list(x0[389]T2Pcst(ni)))):timp
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1597(line=55,offs=3)--1608(line=55,offs=14))
                        // I0Etapq(I0Ecst(nint_forall(838));$list(T2JAG($list())))
                        // T1IMPallx(nint_forall(838), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2796(line=146,offs=1)--2981(line=160,offs=33)))
                        // T1IMPallx(nint_forall(838), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(nint_forall(838);$list()))))
                        let jsxtnm385 = function (arg1) { // timp: nint_forall(838)
                          let jsxtnm341 = arg1
                          // I1CMP:start
                          let jsxtnm384 // let
                          { // let
                            // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2859(line=151,offs=1)--2980(line=160,offs=32)))
                            // I1FUNDCL
                            function loop_2862(arg1, arg2)
                            { // fun
                              let jsxtnm342 = arg1
                              let jsxtnm343 = arg2
                              // I1CMP:start
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2900(line=155,offs=5)--2902(line=155,offs=7))
                              // I0Etapq(I0Ecst(sint_gte$sint(822));$list(T2JAG($list())))
                              // T1IMPallx(sint_gte$sint(822), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2298(line=114,offs=1)--2462(line=126,offs=2)))
                              // T1IMPallx(sint_gte$sint(822), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_gte$sint(822);$list()))))
                              let jsxtnm350 = function (arg1, arg2) { // timp: sint_gte$sint(822)
                                let jsxtnm344 = arg1
                                let jsxtnm345 = arg2
                                // I1CMP:start
                                let jsxtnm349 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2388(line=122,offs=1)--2460(line=125,offs=39)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2396(line=123,offs=1)--2460(line=125,offs=39))
                                  // I1FUNDCL
                                  // XATS2JS_sint_gte$sint_2399
                                    // FJARGdarg($list(I1BNDcons(I1TNM(346);I0Pvar(i1(3943));$list(i1(3943)I1Vtnm(I1TNM(346)))),I1BNDcons(I1TNM(347);I0Pvar(i2(3944));$list(i2(3944)I1Vtnm(I1TNM(347))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_gte$sint);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm348 = XATSDAPP(XATS2JS_sint_gte$sint(jsxtnm344, jsxtnm345))
                                  jsxtnm349 = jsxtnm348
                                } // endlet
                                // I1CMP:return:jsxtnm349
                                return jsxtnm349
                              } // endtimp(sint_gte$sint(822))
                              let jsxtnm351 = XATSDAPP(jsxtnm350(jsxtnm343, jsxtnm342))
                              let jsxtnm382 // ift
                              if (jsxtnm351) // ift
                              {
                                jsxtnm382 = XATSBOOL(true)
                              } else {
                                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2929(line=159,offs=1)--2940(line=159,offs=12))
                                // I0Etapq(I0Ecst(forall$test(46));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
                                // T1IMPallx(forall$test(46), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1662(line=63,offs=1)--1770(line=71,offs=2)))
                                // T1IMPallx(forall$test(46), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(forall$test(46);$list(x0[389]T2Pcst(ni))))))
                                let jsxtnm370 = function (arg1) { // timp: forall$test(46)
                                  let jsxtnm352 = arg1
                                  // I1CMP:start
                                  let jsxtnm369 // let
                                  { // let
                                    // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1728(line=69,offs=1)--1768(line=70,offs=32)))
                                    // I1VALDCL
                                    let jsxtnm361
                                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1743(line=70,offs=7)--1758(line=70,offs=22))
                                    // I0Etapq(I0Ecst(strn_get$at$raw(1809));$list(T2JAG($list())))
                                    // T1IMPallx(strn_get$at$raw(1809), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2200(line=104,offs=1)--2376(line=116,offs=2)))
                                    // T1IMPallx(strn_get$at$raw(1809), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_get$at$raw(1809);$list()))))
                                    let jsxtnm359 = function (arg1, arg2) { // timp: strn_get$at$raw(1809)
                                      let jsxtnm353 = arg1
                                      let jsxtnm354 = arg2
                                      // I1CMP:start
                                      let jsxtnm358 // let
                                      { // let
                                        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2298(line=112,offs=1)--2374(line=115,offs=41)))
                                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2306(line=113,offs=1)--2374(line=115,offs=41))
                                        // I1FUNDCL
                                        // XATS000_strn_get$at$raw_2309
                                          // FJARGdarg($list(I1BNDcons(I1TNM(355);I0Pvar(cs(2581));$list(cs(2581)I1Vtnm(I1TNM(355)))),I1BNDcons(I1TNM(356);I0Pvar(i0(2582));$list(i0(2582)I1Vtnm(I1TNM(356))))))
                                          // I1CMP:start
                                          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS000_strn_get$at$raw);G1Nlist($list())) // I1CMP:return
                                        let jsxtnm357 = XATSDAPP(XATS000_strn_get$at$raw(jsxtnm353, jsxtnm354))
                                        jsxtnm358 = jsxtnm357
                                      } // endlet
                                      // I1CMP:return:jsxtnm358
                                      return jsxtnm358
                                    } // endtimp(strn_get$at$raw(1809))
                                    let jsxtnm360 = XATSDAPP(jsxtnm359(jsxtnm328, jsxtnm352))
                                    jsxtnm361 = jsxtnm360
                                    XATS000_patck(true)
                                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1697(line=66,offs=3)--1708(line=66,offs=14))
                                    // I0Etapq(I0Ecst(forall$test(46));$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))
                                    // T1IMPallx(forall$test(46), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6133(line=389,offs=1)--6208(line=393,offs=32)))
                                    // T1IMPallx(forall$test(46), I1Dtmpsub($list(xs[4893]T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),x0[4894]T2Papps(T2Pcst(char_type);$list(T2Pnone0())));I1Dimplmnt0(DIMPLone2(forall$test(46);$list(x0[389]T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))))
                                    let jsxtnm367 = function (arg1) { // timp: forall$test(46)
                                      let jsxtnm362 = arg1
                                      // I1CMP:start
                                      let jsxtnm366 // let
                                      { // let
                                        // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6168(line=392,offs=1)--6196(line=393,offs=20)))
                                        // I1VALDCL
                                        let jsxtnm365
                                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6177(line=393,offs=1)--6188(line=393,offs=12))
                                        // I0Etapq(I0Ecst(foritm$work(50));$list(T2JAG($list(T2Pvar(x0[4894])))))
                                        // T1IMPallx(foritm$work(50), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(19038(line=1152,offs=1)--19069(line=1152,offs=32)))
                                        // T1IMPallx(foritm$work(50), I1Dtmpsub($list(x0[5607]T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),x1[5608]T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())),x2[5609]T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),x3[5610]T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())));I1Dimplmnt0(DIMPLone2(foritm$work(50);$list(x0[393]T2Pcst(c1))))))
                                        let jsxtnm363
                                        jsxtnm363 = jsxtnm162
                                        let jsxtnm364 = XATSDAPP(jsxtnm363(jsxtnm362))
                                        jsxtnm365 = jsxtnm364
                                        XATS000_patck(true)
                                        jsxtnm366 = XATSBOOL(true)
                                      } // endlet
                                      // I1CMP:return:jsxtnm366
                                      return jsxtnm366
                                    } // endtimp(forall$test(46))
                                    let jsxtnm368 = XATSDAPP(jsxtnm367(jsxtnm361))
                                    jsxtnm369 = jsxtnm368
                                  } // endlet
                                  // I1CMP:return:jsxtnm369
                                  return jsxtnm369
                                } // endtimp(forall$test(46))
                                let jsxtnm371 = XATSDAPP(jsxtnm370(jsxtnm343))
                                let jsxtnm381 // ift
                                if (jsxtnm371) // ift
                                {
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2965(line=160,offs=17)--2966(line=160,offs=18))
                                  // I0Etapq(I0Ecst(sint_add$sint(825));$list(T2JAG($list())))
                                  // T1IMPallx(sint_add$sint(825), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
                                  // T1IMPallx(sint_add$sint(825), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(825);$list()))))
                                  let jsxtnm378 = function (arg1, arg2) { // timp: sint_add$sint(825)
                                    let jsxtnm372 = arg1
                                    let jsxtnm373 = arg2
                                    // I1CMP:start
                                    let jsxtnm377 // let
                                    { // let
                                      // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
                                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
                                      // I1FUNDCL
                                      // XATS2JS_sint_add$sint_2778
                                        // FJARGdarg($list(I1BNDcons(I1TNM(374);I0Pvar(i1(3953));$list(i1(3953)I1Vtnm(I1TNM(374)))),I1BNDcons(I1TNM(375);I0Pvar(i2(3954));$list(i2(3954)I1Vtnm(I1TNM(375))))))
                                        // I1CMP:start
                                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list())) // I1CMP:return
                                      let jsxtnm376 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm372, jsxtnm373))
                                      jsxtnm377 = jsxtnm376
                                    } // endlet
                                    // I1CMP:return:jsxtnm377
                                    return jsxtnm377
                                  } // endtimp(sint_add$sint(825))
                                  let jsxtnm379 = XATSDAPP(jsxtnm378(jsxtnm343, XATSINT1(1)))
                                  let jsxtnm380 = XATSDAPP(loop_2862(jsxtnm342, jsxtnm379))
                                  jsxtnm381 = jsxtnm380
                                } else {
                                  jsxtnm381 = XATSBOOL(false)
                                } // end(if)
                                jsxtnm382 = jsxtnm381
                              } // end(if)
                              // I1CMP:return:jsxtnm382
                              return jsxtnm382
                            } // endfun(loop_2862)
                            let jsxtnm383 = XATSDAPP(loop_2862(jsxtnm341, XATSINT1(0)))
                            jsxtnm384 = jsxtnm383
                          } // endlet
                          // I1CMP:return:jsxtnm384
                          return jsxtnm384
                        } // endtimp(nint_forall(838))
                        let jsxtnm386 = XATSDAPP(jsxtnm385(jsxtnm335))
                        jsxtnm387 = jsxtnm386
                      } // endlet
                      // I1CMP:return:jsxtnm387
                      return jsxtnm387
                    } // endtimp(strn_forall(949))
                    jsxtnm389 = jsxtnm388
                    let jsxtnm390 = XATSDAPP(jsxtnm389(jsxtnm323))
                    jsxtnm391 = jsxtnm390
                    XATS000_patck(true)
                    jsxtnm392 = []
                  } // endlet
                  jsxtnm393 = jsxtnm392
                } // endlet
                // I1CMP:return:jsxtnm393
                return jsxtnm393
              } // endtimp(gseq_foritm(354))
              jsxtnm395 = jsxtnm394
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(18967(line=1147,offs=13)--18972(line=1147,offs=18))
              // I0Etapq(I0Ecst(g_tostr(37));$list(T2JAG($list(T2Pvar(x2[5609])))))
              // T1IMPallx(g_tostr(37), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gbas000.dats)@(1430(line=40,offs=1)--1562(line=51,offs=2)))
              // T1IMPallx(g_tostr(37), I1Dtmpsub($list(x0[7093]T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())));I1Dimplmnt0(DIMPLone2(g_tostr(37);$list(a[375]T2Pvar(x0[7093]))))))
              let jsxtnm400 = function (arg1) { // timp: g_tostr(37)
                let jsxtnm396 = arg1
                // I1CMP:start
                let jsxtnm399 // let
                { // let
                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gbas000.dats)@(1499(line=47,offs=1)--1560(line=50,offs=34)))
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gbas000.dats)@(1507(line=48,offs=1)--1560(line=50,offs=34))
                  // I1FUNDCL
                  // XATS2JS_g_tostr_1510
                    // FJARGdarg($list(I1BNDcons(I1TNM(397);I0Pvar(x0(3814));$list(x0(3814)I1Vtnm(I1TNM(397))))))
                    // I1CMP:start
                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_g_tostr);G1Nlist($list())) // I1CMP:return
                  let jsxtnm398 = XATSDAPP(XATS2JS_g_tostr(jsxtnm396))
                  jsxtnm399 = jsxtnm398
                } // endlet
                // I1CMP:return:jsxtnm399
                return jsxtnm399
              } // endtimp(g_tostr(37))
              let jsxtnm401 = XATSDAPP(jsxtnm400(jsxtnm155))
              let jsxtnm402 = XATSDAPP(jsxtnm395(jsxtnm401))
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(18983(line=1148,offs=1)--18994(line=1148,offs=12))
              // I0Etapq(I0Ecst(strn_foritm(957));$list(T2JAG($list())))
              // T1IMPallx(strn_foritm(957), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(3914(line=233,offs=1)--3970(line=236,offs=24)))
              // T1IMPallx(strn_foritm(957), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_foritm(957);$list()))))
              let jsxtnm475
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(3947(line=236,offs=1)--3958(line=236,offs=12))
              // I0Etapq(I0Ecst(gseq_foritm(354));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))
              // T1IMPallx(gseq_foritm(354), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6023(line=377,offs=1)--6210(line=394,offs=2)))
              // T1IMPallx(gseq_foritm(354), I1Dtmpsub($list(xs[4893]T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),x0[4894]T2Papps(T2Pcst(char_type);$list(T2Pnone0())));I1Dimplmnt0(DIMPLone2(gseq_foritm(354);$list(xs[1068]T2Pvar(xs[4893]),x0[1069]T2Pvar(x0[4894]))))))
              let jsxtnm474 = function (arg1) { // timp: gseq_foritm(354)
                let jsxtnm403 = arg1
                // I1CMP:start
                let jsxtnm473 // let
                { // let
                  // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6133(line=389,offs=1)--6208(line=393,offs=32)))
                  // I1Dimplmnt0(DIMPLone2(forall$test(46);$list(x0[389]T2Pvar(x0[4894])))):timp
                  let jsxtnm472 // let
                  { // let
                    // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6081(line=384,offs=1)--6113(line=386,offs=13)))
                    // I1VALDCL
                    let jsxtnm471
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6089(line=385,offs=1)--6100(line=385,offs=12))
                    // I0Etapq(I0Ecst(gseq_forall(338));$list(T2JAG($list(T2Pvar(xs[4893]))),T2JAG($list(T2Pvar(x0[4894])))))
                    // T1IMPallx(gseq_forall(338), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1976(line=85,offs=1)--2025(line=87,offs=29)))
                    // T1IMPallx(gseq_forall(338), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gseq_forall(338);$list(xs[1020]T2Pcst(strn),x0[1021]T2Pcst(cgtz))))))
                    let jsxtnm469
                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(2012(line=87,offs=16)--2023(line=87,offs=27))
                    // I0Etapq(I0Ecst(strn_forall(949));$list(T2JAG($list())))
                    // T1IMPallx(strn_forall(949), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1556(line=51,offs=1)--1772(line=72,offs=2)))
                    // T1IMPallx(strn_forall(949), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_forall(949);$list()))))
                    let jsxtnm468 = function (arg1) { // timp: strn_forall(949)
                      let jsxtnm408 = arg1
                      // I1CMP:start
                      let jsxtnm467 // let
                      { // let
                        // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1627(line=59,offs=1)--1658(line=61,offs=21)))
                        // I1VALDCL
                        let jsxtnm415
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1640(line=61,offs=3)--1651(line=61,offs=14))
                        // I0Etapq(I0Ecst(strn_length(917));$list(T2JAG($list())))
                        // T1IMPallx(strn_length(917), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1430(line=40,offs=1)--1576(line=52,offs=2)))
                        // T1IMPallx(strn_length(917), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_length(917);$list()))))
                        let jsxtnm413 = function (arg1) { // timp: strn_length(917)
                          let jsxtnm409 = arg1
                          // I1CMP:start
                          let jsxtnm412 // let
                          { // let
                            // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1512(line=48,offs=1)--1574(line=51,offs=31)))
                            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/strn000.dats)@(1520(line=49,offs=1)--1574(line=51,offs=31))
                            // I1FUNDCL
                            // XATS2JS_strn_length_1523
                              // FJARGdarg($list(I1BNDcons(I1TNM(410);I0Pvar(cs(4065));$list(cs(4065)I1Vtnm(I1TNM(410))))))
                              // I1CMP:start
                              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_length);G1Nlist($list())) // I1CMP:return
                            let jsxtnm411 = XATSDAPP(XATS2JS_strn_length(jsxtnm409))
                            jsxtnm412 = jsxtnm411
                          } // endlet
                          // I1CMP:return:jsxtnm412
                          return jsxtnm412
                        } // endtimp(strn_length(917))
                        let jsxtnm414 = XATSDAPP(jsxtnm413(jsxtnm408))
                        jsxtnm415 = jsxtnm414
                        XATS000_patck(true)
                        // I1Dimplmnt0(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1662(line=63,offs=1)--1770(line=71,offs=2)))
                        // I1Dimplmnt0(DIMPLone2(forall$test(46);$list(x0[389]T2Pcst(ni)))):timp
                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1597(line=55,offs=3)--1608(line=55,offs=14))
                        // I0Etapq(I0Ecst(nint_forall(838));$list(T2JAG($list())))
                        // T1IMPallx(nint_forall(838), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2796(line=146,offs=1)--2981(line=160,offs=33)))
                        // T1IMPallx(nint_forall(838), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(nint_forall(838);$list()))))
                        let jsxtnm465 = function (arg1) { // timp: nint_forall(838)
                          let jsxtnm421 = arg1
                          // I1CMP:start
                          let jsxtnm464 // let
                          { // let
                            // I1Dfundclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2859(line=151,offs=1)--2980(line=160,offs=32)))
                            // I1FUNDCL
                            function loop_2862(arg1, arg2)
                            { // fun
                              let jsxtnm422 = arg1
                              let jsxtnm423 = arg2
                              // I1CMP:start
                              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2900(line=155,offs=5)--2902(line=155,offs=7))
                              // I0Etapq(I0Ecst(sint_gte$sint(822));$list(T2JAG($list())))
                              // T1IMPallx(sint_gte$sint(822), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2298(line=114,offs=1)--2462(line=126,offs=2)))
                              // T1IMPallx(sint_gte$sint(822), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_gte$sint(822);$list()))))
                              let jsxtnm430 = function (arg1, arg2) { // timp: sint_gte$sint(822)
                                let jsxtnm424 = arg1
                                let jsxtnm425 = arg2
                                // I1CMP:start
                                let jsxtnm429 // let
                                { // let
                                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2388(line=122,offs=1)--2460(line=125,offs=39)))
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2396(line=123,offs=1)--2460(line=125,offs=39))
                                  // I1FUNDCL
                                  // XATS2JS_sint_gte$sint_2399
                                    // FJARGdarg($list(I1BNDcons(I1TNM(426);I0Pvar(i1(3943));$list(i1(3943)I1Vtnm(I1TNM(426)))),I1BNDcons(I1TNM(427);I0Pvar(i2(3944));$list(i2(3944)I1Vtnm(I1TNM(427))))))
                                    // I1CMP:start
                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_gte$sint);G1Nlist($list())) // I1CMP:return
                                  let jsxtnm428 = XATSDAPP(XATS2JS_sint_gte$sint(jsxtnm424, jsxtnm425))
                                  jsxtnm429 = jsxtnm428
                                } // endlet
                                // I1CMP:return:jsxtnm429
                                return jsxtnm429
                              } // endtimp(sint_gte$sint(822))
                              let jsxtnm431 = XATSDAPP(jsxtnm430(jsxtnm423, jsxtnm422))
                              let jsxtnm462 // ift
                              if (jsxtnm431) // ift
                              {
                                jsxtnm462 = XATSBOOL(true)
                              } else {
                                // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2929(line=159,offs=1)--2940(line=159,offs=12))
                                // I0Etapq(I0Ecst(forall$test(46));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
                                // T1IMPallx(forall$test(46), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1662(line=63,offs=1)--1770(line=71,offs=2)))
                                // T1IMPallx(forall$test(46), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(forall$test(46);$list(x0[389]T2Pcst(ni))))))
                                let jsxtnm450 = function (arg1) { // timp: forall$test(46)
                                  let jsxtnm432 = arg1
                                  // I1CMP:start
                                  let jsxtnm449 // let
                                  { // let
                                    // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1728(line=69,offs=1)--1768(line=70,offs=32)))
                                    // I1VALDCL
                                    let jsxtnm441
                                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1743(line=70,offs=7)--1758(line=70,offs=22))
                                    // I0Etapq(I0Ecst(strn_get$at$raw(1809));$list(T2JAG($list())))
                                    // T1IMPallx(strn_get$at$raw(1809), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2200(line=104,offs=1)--2376(line=116,offs=2)))
                                    // T1IMPallx(strn_get$at$raw(1809), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_get$at$raw(1809);$list()))))
                                    let jsxtnm439 = function (arg1, arg2) { // timp: strn_get$at$raw(1809)
                                      let jsxtnm433 = arg1
                                      let jsxtnm434 = arg2
                                      // I1CMP:start
                                      let jsxtnm438 // let
                                      { // let
                                        // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2298(line=112,offs=1)--2374(line=115,offs=41)))
                                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/strn000.dats)@(2306(line=113,offs=1)--2374(line=115,offs=41))
                                        // I1FUNDCL
                                        // XATS000_strn_get$at$raw_2309
                                          // FJARGdarg($list(I1BNDcons(I1TNM(435);I0Pvar(cs(2581));$list(cs(2581)I1Vtnm(I1TNM(435)))),I1BNDcons(I1TNM(436);I0Pvar(i0(2582));$list(i0(2582)I1Vtnm(I1TNM(436))))))
                                          // I1CMP:start
                                          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS000_strn_get$at$raw);G1Nlist($list())) // I1CMP:return
                                        let jsxtnm437 = XATSDAPP(XATS000_strn_get$at$raw(jsxtnm433, jsxtnm434))
                                        jsxtnm438 = jsxtnm437
                                      } // endlet
                                      // I1CMP:return:jsxtnm438
                                      return jsxtnm438
                                    } // endtimp(strn_get$at$raw(1809))
                                    let jsxtnm440 = XATSDAPP(jsxtnm439(jsxtnm408, jsxtnm432))
                                    jsxtnm441 = jsxtnm440
                                    XATS000_patck(true)
                                    // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/strn001.dats)@(1697(line=66,offs=3)--1708(line=66,offs=14))
                                    // I0Etapq(I0Ecst(forall$test(46));$list(T2JAG($list(T2Papps(T2Pcst(char_type);$list(T2Pnone0()))))))
                                    // T1IMPallx(forall$test(46), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6133(line=389,offs=1)--6208(line=393,offs=32)))
                                    // T1IMPallx(forall$test(46), I1Dtmpsub($list(xs[4893]T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),x0[4894]T2Papps(T2Pcst(char_type);$list(T2Pnone0())));I1Dimplmnt0(DIMPLone2(forall$test(46);$list(x0[389]T2Papps(T2Pcst(char_type);$list(T2Pnone0())))))))
                                    let jsxtnm447 = function (arg1) { // timp: forall$test(46)
                                      let jsxtnm442 = arg1
                                      // I1CMP:start
                                      let jsxtnm446 // let
                                      { // let
                                        // I1Dvaldclist(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6168(line=392,offs=1)--6196(line=393,offs=20)))
                                        // I1VALDCL
                                        let jsxtnm445
                                        // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gseq001.dats)@(6177(line=393,offs=1)--6188(line=393,offs=12))
                                        // I0Etapq(I0Ecst(foritm$work(50));$list(T2JAG($list(T2Pvar(x0[4894])))))
                                        // T1IMPallx(foritm$work(50), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(19038(line=1152,offs=1)--19069(line=1152,offs=32)))
                                        // T1IMPallx(foritm$work(50), I1Dtmpsub($list(x0[5607]T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),x1[5608]T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())),x2[5609]T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),x3[5610]T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())));I1Dimplmnt0(DIMPLone2(foritm$work(50);$list(x0[393]T2Pcst(c1))))))
                                        let jsxtnm443
                                        jsxtnm443 = jsxtnm162
                                        let jsxtnm444 = XATSDAPP(jsxtnm443(jsxtnm442))
                                        jsxtnm445 = jsxtnm444
                                        XATS000_patck(true)
                                        jsxtnm446 = XATSBOOL(true)
                                      } // endlet
                                      // I1CMP:return:jsxtnm446
                                      return jsxtnm446
                                    } // endtimp(forall$test(46))
                                    let jsxtnm448 = XATSDAPP(jsxtnm447(jsxtnm441))
                                    jsxtnm449 = jsxtnm448
                                  } // endlet
                                  // I1CMP:return:jsxtnm449
                                  return jsxtnm449
                                } // endtimp(forall$test(46))
                                let jsxtnm451 = XATSDAPP(jsxtnm450(jsxtnm423))
                                let jsxtnm461 // ift
                                if (jsxtnm451) // ift
                                {
                                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gint001.dats)@(2965(line=160,offs=17)--2966(line=160,offs=18))
                                  // I0Etapq(I0Ecst(sint_add$sint(825));$list(T2JAG($list())))
                                  // T1IMPallx(sint_add$sint(825), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
                                  // T1IMPallx(sint_add$sint(825), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(825);$list()))))
                                  let jsxtnm458 = function (arg1, arg2) { // timp: sint_add$sint(825)
                                    let jsxtnm452 = arg1
                                    let jsxtnm453 = arg2
                                    // I1CMP:start
                                    let jsxtnm457 // let
                                    { // let
                                      // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
                                      // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
                                      // I1FUNDCL
                                      // XATS2JS_sint_add$sint_2778
                                        // FJARGdarg($list(I1BNDcons(I1TNM(454);I0Pvar(i1(3953));$list(i1(3953)I1Vtnm(I1TNM(454)))),I1BNDcons(I1TNM(455);I0Pvar(i2(3954));$list(i2(3954)I1Vtnm(I1TNM(455))))))
                                        // I1CMP:start
                                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list())) // I1CMP:return
                                      let jsxtnm456 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm452, jsxtnm453))
                                      jsxtnm457 = jsxtnm456
                                    } // endlet
                                    // I1CMP:return:jsxtnm457
                                    return jsxtnm457
                                  } // endtimp(sint_add$sint(825))
                                  let jsxtnm459 = XATSDAPP(jsxtnm458(jsxtnm423, XATSINT1(1)))
                                  let jsxtnm460 = XATSDAPP(loop_2862(jsxtnm422, jsxtnm459))
                                  jsxtnm461 = jsxtnm460
                                } else {
                                  jsxtnm461 = XATSBOOL(false)
                                } // end(if)
                                jsxtnm462 = jsxtnm461
                              } // end(if)
                              // I1CMP:return:jsxtnm462
                              return jsxtnm462
                            } // endfun(loop_2862)
                            let jsxtnm463 = XATSDAPP(loop_2862(jsxtnm421, XATSINT1(0)))
                            jsxtnm464 = jsxtnm463
                          } // endlet
                          // I1CMP:return:jsxtnm464
                          return jsxtnm464
                        } // endtimp(nint_forall(838))
                        let jsxtnm466 = XATSDAPP(jsxtnm465(jsxtnm415))
                        jsxtnm467 = jsxtnm466
                      } // endlet
                      // I1CMP:return:jsxtnm467
                      return jsxtnm467
                    } // endtimp(strn_forall(949))
                    jsxtnm469 = jsxtnm468
                    let jsxtnm470 = XATSDAPP(jsxtnm469(jsxtnm403))
                    jsxtnm471 = jsxtnm470
                    XATS000_patck(true)
                    jsxtnm472 = []
                  } // endlet
                  jsxtnm473 = jsxtnm472
                } // endlet
                // I1CMP:return:jsxtnm473
                return jsxtnm473
              } // endtimp(gseq_foritm(354))
              jsxtnm475 = jsxtnm474
              // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/gsyn000.dats)@(18995(line=1148,offs=13)--19000(line=1148,offs=18))
              // I0Etapq(I0Ecst(g_tostr(37));$list(T2JAG($list(T2Pvar(x3[5610])))))
              // T1IMPallx(g_tostr(37), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gbas000.dats)@(1430(line=40,offs=1)--1562(line=51,offs=2)))
              // T1IMPallx(g_tostr(37), I1Dtmpsub($list(x0[7093]T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())));I1Dimplmnt0(DIMPLone2(g_tostr(37);$list(a[375]T2Pvar(x0[7093]))))))
              let jsxtnm480 = function (arg1) { // timp: g_tostr(37)
                let jsxtnm476 = arg1
                // I1CMP:start
                let jsxtnm479 // let
                { // let
                  // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gbas000.dats)@(1499(line=47,offs=1)--1560(line=50,offs=34)))
                  // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gbas000.dats)@(1507(line=48,offs=1)--1560(line=50,offs=34))
                  // I1FUNDCL
                  // XATS2JS_g_tostr_1510
                    // FJARGdarg($list(I1BNDcons(I1TNM(477);I0Pvar(x0(3814));$list(x0(3814)I1Vtnm(I1TNM(477))))))
                    // I1CMP:start
                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_g_tostr);G1Nlist($list())) // I1CMP:return
                  let jsxtnm478 = XATSDAPP(XATS2JS_g_tostr(jsxtnm476))
                  jsxtnm479 = jsxtnm478
                } // endlet
                // I1CMP:return:jsxtnm479
                return jsxtnm479
              } // endtimp(g_tostr(37))
              let jsxtnm481 = XATSDAPP(jsxtnm480(jsxtnm156))
              let jsxtnm482 = XATSDAPP(jsxtnm475(jsxtnm481))
              jsxtnm483 = jsxtnm482
            } // endlet
            // I1CMP:return:jsxtnm483
            return jsxtnm483
          } // endfun(lam0)
          let jsxtnm485 = XATSDAPP(jsxtnm161(jsxtnm484))
          // I1CMP:return:jsxtnm485
          return jsxtnm485
        } // endtimp(gs_tostr_a4(688))
        // LCSRCsome1(prime.dats)@(1012(line=74,offs=20)--1013(line=74,offs=21))
        // I0Etapq(I0Ecst(sint_add$sint(825));$list(T2JAG($list())))
        // T1IMPallx(sint_add$sint(825), LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
        // T1IMPallx(sint_add$sint(825), I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(825);$list()))))
        let jsxtnm493 = function (arg1, arg2) { // timp: sint_add$sint(825)
          let jsxtnm487 = arg1
          let jsxtnm488 = arg2
          // I1CMP:start
          let jsxtnm492 // let
          { // let
            // I1Dextern(LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
            // LCSRCsome1(../../../../../../XATSHOME/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
            // I1FUNDCL
            // XATS2JS_sint_add$sint_2778
              // FJARGdarg($list(I1BNDcons(I1TNM(489);I0Pvar(i1(3953));$list(i1(3953)I1Vtnm(I1TNM(489)))),I1BNDcons(I1TNM(490);I0Pvar(i2(3954));$list(i2(3954)I1Vtnm(I1TNM(490))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list())) // I1CMP:return
            let jsxtnm491 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm487, jsxtnm488))
            jsxtnm492 = jsxtnm491
          } // endlet
          // I1CMP:return:jsxtnm492
          return jsxtnm492
        } // endtimp(sint_add$sint(825))
        let jsxtnm494 = XATSDAPP(jsxtnm493(jsxtnm110, XATSINT1(1)))
        let jsxtnm495 = XATSDAPP(jsxtnm486(XATSSTRN("Prime("), jsxtnm494, XATSSTRN(") = "), XATSP1CN("strxcon_vt_cons", jsxtnm143[0+1])))
        let jsxtnm496 = XATSDAPP(jsxtnm96(jsxtnm495))
        jsxtnm497 = jsxtnm496
      } // endlet
      // I1CMP:return:jsxtnm497
      return jsxtnm497
    } // endfun(lam0)
    jsxtnm499 = jsxtnm498
  } // endlet
  // I1CMP:return:jsxtnm499
  return jsxtnm499
} // endfun(onclick_make_lstrx_667)
// I1Dimplmnt0(LCSRCsome1(prime.dats)@(1122(line=81,offs=1)--1182(line=82,offs=52)))
let DATS_prime$onclick = function () { // impl
  // I1CMP:start
  let jsxtnm500 = XATSDAPP(onclick_make_lstrx_667(jsxtnm80))
  // I1CMP:return:jsxtnm500
  return jsxtnm500
} () // endgen(impl)
// LCSRCsome1(prime.dats)@(1442(line=90,offs=1)--1442(line=90,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(prime.dats)@(1442(line=90,offs=1)--1442(line=90,offs=1));D3Cnone0()))
