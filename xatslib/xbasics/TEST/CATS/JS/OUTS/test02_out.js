// Tue Oct 6 12:35:54 AM EDT 2026
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
let XATSVOID = 0
let XATSTOP0 = undefined
//
////////////////////////////////////////////////////////////////////////.
//
let XATSINT0 = (i0) => i0
let XATSINT1 = (i0) => i0
//
let XATSBTF0 = (b0) => b0
let XATSBOOL = (b0) => b0
//
let XATSFLT0 = (f0) => f0
let XATSFLT1 = (f0) => f0
/*
let XATSSFLT = (sf) => sf
let XATSDFLT = (df) => df
*/
let XATSSTR0 = (cs) => cs
let XATSSTRN = (cs) => cs
//
let XATSCNUL = (  ) => (0)
let XATSCHR1 = (  ) => (0)
//
let XATSCHR0 =
    (ch) => ch.charCodeAt(0)
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
	var ds = (c1 - 48);
	while (i1 < ch.length) {
	    c1 = ch.charCodeAt(i1);
	    if (c1===39) // SQUOTE=39
	    {
		return ds // HX: ascii
	    } else {
		i1 = i1 + 1
		ds = (8*ds) + (c1-48)
	    }
	}
	return ds ; // ascii code of [ch]
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
let XATS000_l0azy = function(lfun)
{
  return [0, lfun]
}
let XATS000_dl0az = function(l0az)
{
  if (l0az[0] > 0) {
    l0az[0] += 1; return l0az[1]
  } else {
    let res = l0az[1]()
    l0az[0] = 0+1; l0az[1] = res; return res
  }
}
//
let XATS000_l1azy = (lfun) => lfun
let XATS000_dl1az = (l1az) => l1az(1)
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
// Wed Aug  5 06:17:43 PM EDT 2026
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/*
the beg of
[ATS3-XANADU/srcgen2/xats2js/srcgen1/xshared/runtime/srcgen2_precats.js]
*/
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
// Fri Jan 16 11:31:07 PM EST 2026
// LCSRCsome1(precats.dats)@(1291(line=30,offs=1)--1332(line=31,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(0;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(UN);G1Estr(T_STRN1_clsd("prelude/SATS/unsfx00.sats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/unsfx00.sats));...)))
// I1Dextern(LCSRCsome1(precats.dats)@(1958(line=80,offs=1)--2028(line=85,offs=29)))
// LCSRCsome1(precats.dats)@(1966(line=81,offs=1)--2028(line=85,offs=29))
// I1FUNDCL
// XATS2JS_optn_nilq_1969
  // FJARGdarg($list(I1BNDcons(I1TNM(1);I0Pvar(xs(3));$list(@(xs(3),I1Vtnm(I1TNM(1)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_optn_nilq);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(2029(line=86,offs=1)--2118(line=90,offs=43)))
let XATS2JS_optn_nilq = function (arg1) { // impl
  let jsxtnm2 = arg1
  // I1CMP:start
  let jsxtnm5 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(3);I0Pdapp(I0Pcon(optn_nil(4));$list());$list()))
    if (XATS000_ctgeq(jsxtnm2, XATSCTAG("optn_nil",0))) { // gpt
      let jsxtnm3 = jsxtnm2
      jsxtnm5 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(4);I0Pdap1(I0Pcon(optn_cons(5)));$list()))
    if (XATS000_ctgeq(jsxtnm2, XATSCTAG("optn_cons",1))) { // gpt
      let jsxtnm4 = jsxtnm2
      jsxtnm5 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm5
  return jsxtnm5
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(2122(line=92,offs=1)--2193(line=97,offs=29)))
// LCSRCsome1(precats.dats)@(2130(line=93,offs=1)--2193(line=97,offs=29))
// I1FUNDCL
// XATS2JS_optn_consq_2133
  // FJARGdarg($list(I1BNDcons(I1TNM(6);I0Pvar(xs(6));$list(@(xs(6),I1Vtnm(I1TNM(6)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_optn_consq);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(2194(line=98,offs=1)--2286(line=102,offs=45)))
let XATS2JS_optn_consq = function (arg1) { // impl
  let jsxtnm7 = arg1
  // I1CMP:start
  let jsxtnm10 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(8);I0Pdapp(I0Pcon(optn_nil(4));$list());$list()))
    if (XATS000_ctgeq(jsxtnm7, XATSCTAG("optn_nil",0))) { // gpt
      let jsxtnm8 = jsxtnm7
      jsxtnm10 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(9);I0Pdap1(I0Pcon(optn_cons(5)));$list()))
    if (XATS000_ctgeq(jsxtnm7, XATSCTAG("optn_cons",1))) { // gpt
      let jsxtnm9 = jsxtnm7
      jsxtnm10 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm10
  return jsxtnm10
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(2313(line=106,offs=1)--2386(line=111,offs=28)))
// LCSRCsome1(precats.dats)@(2321(line=107,offs=1)--2386(line=111,offs=28))
// I1FUNDCL
// XATS2JS_optn_head$raw_2324
  // FJARGdarg($list(I1BNDcons(I1TNM(11);I0Pvar(xs(9));$list(@(xs(9),I1Vtnm(I1TNM(11)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_optn_head$raw);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(2387(line=112,offs=1)--2460(line=115,offs=35)))
let XATS2JS_optn_head$raw = function (arg1) { // impl
  let jsxtnm12 = arg1
  // I1CMP:start
  let jsxtnm14 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(13);I0Pdapp(I0Pcon(optn_cons(5));$list(I0Pvar(x0(11))));$list(@(x0(11),I1Vp1cn(I0Pcon(optn_cons(5));I1Vtnm(I1TNM(13));0)))))
    if (XATS000_ctgeq(jsxtnm12, XATSCTAG("optn_cons",1))) { // gpt
      let jsxtnm13 = jsxtnm12
      jsxtnm14 = XATSP1CN("optn_cons", jsxtnm13[0+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm14
  return jsxtnm14
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(2464(line=117,offs=1)--2539(line=122,offs=28)))
// LCSRCsome1(precats.dats)@(2472(line=118,offs=1)--2539(line=122,offs=28))
// I1FUNDCL
// XATS2JS_optn_uncons$raw_2475
  // FJARGdarg($list(I1BNDcons(I1TNM(15);I0Pvar(xs(13));$list(@(xs(13),I1Vtnm(I1TNM(15)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_optn_uncons$raw);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(2540(line=123,offs=1)--2615(line=126,offs=35)))
let XATS2JS_optn_uncons$raw = function (arg1) { // impl
  let jsxtnm16 = arg1
  // I1CMP:start
  let jsxtnm18 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(17);I0Pdapp(I0Pcon(optn_cons(5));$list(I0Pvar(x0(15))));$list(@(x0(15),I1Vp1cn(I0Pcon(optn_cons(5));I1Vtnm(I1TNM(17));0)))))
    if (XATS000_ctgeq(jsxtnm16, XATSCTAG("optn_cons",1))) { // gpt
      let jsxtnm17 = jsxtnm16
      jsxtnm18 = XATSP1CN("optn_cons", jsxtnm17[0+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm18
  return jsxtnm18
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(3007(line=159,offs=1)--3077(line=164,offs=29)))
// LCSRCsome1(precats.dats)@(3015(line=160,offs=1)--3077(line=164,offs=29))
// I1FUNDCL
// XATS2JS_list_nilq_3018
  // FJARGdarg($list(I1BNDcons(I1TNM(19);I0Pvar(xs(17));$list(@(xs(17),I1Vtnm(I1TNM(19)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_list_nilq);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(3078(line=165,offs=1)--3167(line=169,offs=43)))
let XATS2JS_list_nilq = function (arg1) { // impl
  let jsxtnm20 = arg1
  // I1CMP:start
  let jsxtnm23 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(21);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
    if (XATS000_ctgeq(jsxtnm20, XATSCTAG("list_nil",0))) { // gpt
      let jsxtnm21 = jsxtnm20
      jsxtnm23 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(22);I0Pdap1(I0Pcon(list_cons(9)));$list()))
    if (XATS000_ctgeq(jsxtnm20, XATSCTAG("list_cons",1))) { // gpt
      let jsxtnm22 = jsxtnm20
      jsxtnm23 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm23
  return jsxtnm23
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(3171(line=171,offs=1)--3242(line=176,offs=29)))
// LCSRCsome1(precats.dats)@(3179(line=172,offs=1)--3242(line=176,offs=29))
// I1FUNDCL
// XATS2JS_list_consq_3182
  // FJARGdarg($list(I1BNDcons(I1TNM(24);I0Pvar(xs(20));$list(@(xs(20),I1Vtnm(I1TNM(24)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_list_consq);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(3243(line=177,offs=1)--3335(line=181,offs=45)))
let XATS2JS_list_consq = function (arg1) { // impl
  let jsxtnm25 = arg1
  // I1CMP:start
  let jsxtnm28 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(26);I0Pdapp(I0Pcon(list_nil(8));$list());$list()))
    if (XATS000_ctgeq(jsxtnm25, XATSCTAG("list_nil",0))) { // gpt
      let jsxtnm26 = jsxtnm25
      jsxtnm28 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(27);I0Pdap1(I0Pcon(list_cons(9)));$list()))
    if (XATS000_ctgeq(jsxtnm25, XATSCTAG("list_cons",1))) { // gpt
      let jsxtnm27 = jsxtnm25
      jsxtnm28 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm28
  return jsxtnm28
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(3362(line=185,offs=1)--3435(line=190,offs=28)))
// LCSRCsome1(precats.dats)@(3370(line=186,offs=1)--3435(line=190,offs=28))
// I1FUNDCL
// XATS2JS_list_head$raw_3373
  // FJARGdarg($list(I1BNDcons(I1TNM(29);I0Pvar(xs(23));$list(@(xs(23),I1Vtnm(I1TNM(29)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_list_head$raw);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(3436(line=191,offs=1)--3513(line=194,offs=39)))
let XATS2JS_list_head$raw = function (arg1) { // impl
  let jsxtnm30 = arg1
  // I1CMP:start
  let jsxtnm32 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(31);I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x1(25)),I0Pvar(xs(26))));$list(@(x1(25),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(31));0)),@(xs(26),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(31));1)))))
    if (XATS000_ctgeq(jsxtnm30, XATSCTAG("list_cons",1))) { // gpt
      let jsxtnm31 = jsxtnm30
      jsxtnm32 = XATSP1CN("list_cons", jsxtnm31[0+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm32
  return jsxtnm32
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(3560(line=199,offs=1)--3638(line=204,offs=32)))
// LCSRCsome1(precats.dats)@(3568(line=200,offs=1)--3638(line=204,offs=32))
// I1FUNDCL
// XATS2JS_lazy_make_f0un_3571
  // FJARGdarg($list(I1BNDcons(I1TNM(33);I0Pvar(f0(28));$list(@(f0(28),I1Vtnm(I1TNM(33)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_lazy_make_f0un);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(3639(line=205,offs=1)--3688(line=206,offs=41)))
let XATS2JS_lazy_make_f0un = function (arg1) { // impl
  let jsxtnm34 = arg1
  // I1CMP:start
  let jsxtnm36 = XATS000_l0azy(function () { // l0azy
    // I1CMP:start
    let jsxtnm35 = XATSDAPP(jsxtnm34())
    // I1CMP:return:jsxtnm35
    return jsxtnm35
  }) // endfun(l0azy)
  // I1CMP:return:jsxtnm36
  return jsxtnm36
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(3735(line=211,offs=1)--3805(line=215,offs=32)))
// LCSRCsome1(precats.dats)@(3743(line=212,offs=1)--3805(line=215,offs=32))
// I1FUNDCL
// XATS2JS_strmcon_nil_3746
  // FJARGdarg($list())
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_nil);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(3806(line=216,offs=1)--3852(line=217,offs=38)))
let XATS2JS_strmcon_nil = function () { // impl
  // I1CMP:start
  let jsxtnm37 = XATSCAPP("strmcon_nil", [0])
  // I1CMP:return:jsxtnm37
  return jsxtnm37
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(3856(line=219,offs=1)--3946(line=224,offs=38)))
// LCSRCsome1(precats.dats)@(3864(line=220,offs=1)--3946(line=224,offs=38))
// I1FUNDCL
// XATS2JS_strmcon_cons_3867
  // FJARGdarg($list(I1BNDcons(I1TNM(38);I0Pvar(x1(32));$list(@(x1(32),I1Vtnm(I1TNM(38))))),I1BNDcons(I1TNM(39);I0Pvar(xs(33));$list(@(xs(33),I1Vtnm(I1TNM(39)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_cons);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(3947(line=225,offs=1)--4005(line=226,offs=50)))
let XATS2JS_strmcon_cons = function (arg1, arg2) { // impl
  let jsxtnm40 = arg1
  let jsxtnm41 = arg2
  // I1CMP:start
  let jsxtnm42 = XATSCAPP("strmcon_cons", [1, jsxtnm40, jsxtnm41])
  // I1CMP:return:jsxtnm42
  return jsxtnm42
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(4009(line=228,offs=1)--4099(line=233,offs=38)))
// LCSRCsome1(precats.dats)@(4017(line=229,offs=1)--4099(line=233,offs=38))
// I1FUNDCL
// XATS2JS_strxcon_cons_4020
  // FJARGdarg($list(I1BNDcons(I1TNM(43);I0Pvar(x1(37));$list(@(x1(37),I1Vtnm(I1TNM(43))))),I1BNDcons(I1TNM(44);I0Pvar(xs(38));$list(@(xs(38),I1Vtnm(I1TNM(44)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strxcon_cons);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(4100(line=234,offs=1)--4158(line=235,offs=50)))
let XATS2JS_strxcon_cons = function (arg1, arg2) { // impl
  let jsxtnm45 = arg1
  let jsxtnm46 = arg2
  // I1CMP:start
  let jsxtnm47 = XATSCAPP("strxcon_cons", [0, jsxtnm45, jsxtnm46])
  // I1CMP:return:jsxtnm47
  return jsxtnm47
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(4185(line=239,offs=1)--4261(line=244,offs=32)))
// LCSRCsome1(precats.dats)@(4193(line=240,offs=1)--4261(line=244,offs=32))
// I1FUNDCL
// XATS2JS_strmcon_nilq_4196
  // FJARGdarg($list(I1BNDcons(I1TNM(48);I0Pvar(xs(42));$list(@(xs(42),I1Vtnm(I1TNM(48)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_nilq);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(4262(line=245,offs=1)--4360(line=249,offs=49)))
let XATS2JS_strmcon_nilq = function (arg1) { // impl
  let jsxtnm49 = arg1
  // I1CMP:start
  let jsxtnm52 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(50);I0Pdapp(I0Pcon(strmcon_nil(12));$list());$list()))
    if (XATS000_ctgeq(jsxtnm49, XATSCTAG("strmcon_nil",0))) { // gpt
      let jsxtnm50 = jsxtnm49
      jsxtnm52 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(51);I0Pdap1(I0Pcon(strmcon_cons(13)));$list()))
    if (XATS000_ctgeq(jsxtnm49, XATSCTAG("strmcon_cons",1))) { // gpt
      let jsxtnm51 = jsxtnm49
      jsxtnm52 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm52
  return jsxtnm52
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(4364(line=251,offs=1)--4441(line=256,offs=32)))
// LCSRCsome1(precats.dats)@(4372(line=252,offs=1)--4441(line=256,offs=32))
// I1FUNDCL
// XATS2JS_strmcon_consq_4375
  // FJARGdarg($list(I1BNDcons(I1TNM(53);I0Pvar(xs(45));$list(@(xs(45),I1Vtnm(I1TNM(53)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_consq);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(4442(line=257,offs=1)--4543(line=261,offs=51)))
let XATS2JS_strmcon_consq = function (arg1) { // impl
  let jsxtnm54 = arg1
  // I1CMP:start
  let jsxtnm57 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(55);I0Pdapp(I0Pcon(strmcon_nil(12));$list());$list()))
    if (XATS000_ctgeq(jsxtnm54, XATSCTAG("strmcon_nil",0))) { // gpt
      let jsxtnm55 = jsxtnm54
      jsxtnm57 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(56);I0Pdap1(I0Pcon(strmcon_cons(13)));$list()))
    if (XATS000_ctgeq(jsxtnm54, XATSCTAG("strmcon_cons",1))) { // gpt
      let jsxtnm56 = jsxtnm54
      jsxtnm57 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm57
  return jsxtnm57
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(4570(line=265,offs=1)--4649(line=270,offs=31)))
// LCSRCsome1(precats.dats)@(4578(line=266,offs=1)--4649(line=270,offs=31))
// I1FUNDCL
// XATS2JS_strmcon_head$raw_4581
  // FJARGdarg($list(I1BNDcons(I1TNM(58);I0Pvar(xs(48));$list(@(xs(48),I1Vtnm(I1TNM(58)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_head$raw);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(4650(line=271,offs=1)--4733(line=274,offs=42)))
let XATS2JS_strmcon_head$raw = function (arg1) { // impl
  let jsxtnm59 = arg1
  // I1CMP:start
  let jsxtnm61 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(60);I0Pdapp(I0Pcon(strmcon_cons(13));$list(I0Pvar(x1(50)),I0Pvar(xs(51))));$list(@(x1(50),I1Vp1cn(I0Pcon(strmcon_cons(13));I1Vtnm(I1TNM(60));0)),@(xs(51),I1Vp1cn(I0Pcon(strmcon_cons(13));I1Vtnm(I1TNM(60));1)))))
    if (XATS000_ctgeq(jsxtnm59, XATSCTAG("strmcon_cons",1))) { // gpt
      let jsxtnm60 = jsxtnm59
      jsxtnm61 = XATSP1CN("strmcon_cons", jsxtnm60[0+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm61
  return jsxtnm61
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(4737(line=276,offs=1)--4820(line=281,offs=35)))
// LCSRCsome1(precats.dats)@(4745(line=277,offs=1)--4820(line=281,offs=35))
// I1FUNDCL
// XATS2JS_strmcon_tail$raw_4748
  // FJARGdarg($list(I1BNDcons(I1TNM(62);I0Pvar(xs(53));$list(@(xs(53),I1Vtnm(I1TNM(62)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_tail$raw);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(4821(line=282,offs=1)--4904(line=285,offs=42)))
let XATS2JS_strmcon_tail$raw = function (arg1) { // impl
  let jsxtnm63 = arg1
  // I1CMP:start
  let jsxtnm65 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(64);I0Pdapp(I0Pcon(strmcon_cons(13));$list(I0Pvar(x1(55)),I0Pvar(xs(56))));$list(@(x1(55),I1Vp1cn(I0Pcon(strmcon_cons(13));I1Vtnm(I1TNM(64));0)),@(xs(56),I1Vp1cn(I0Pcon(strmcon_cons(13));I1Vtnm(I1TNM(64));1)))))
    if (XATS000_ctgeq(jsxtnm63, XATSCTAG("strmcon_cons",1))) { // gpt
      let jsxtnm64 = jsxtnm63
      jsxtnm65 = XATSP1CN("strmcon_cons", jsxtnm64[1+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm65
  return jsxtnm65
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(4931(line=289,offs=1)--5032(line=297,offs=31)))
// LCSRCsome1(precats.dats)@(4939(line=290,offs=1)--5032(line=297,offs=31))
// I1FUNDCL
// XATS2JS_strxcon_head$raw_4964
  // FJARGdarg($list(I1BNDcons(I1TNM(66);I0Pvar(xs(58));$list(@(xs(58),I1Vtnm(I1TNM(66)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strxcon_head$raw);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(5033(line=298,offs=1)--5116(line=301,offs=42)))
let XATS2JS_strxcon_head$raw = function (arg1) { // impl
  let jsxtnm67 = arg1
  // I1CMP:start
  let jsxtnm69 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(68);I0Pdapp(I0Pcon(strxcon_cons(14));$list(I0Pvar(x1(60)),I0Pvar(xs(61))));$list(@(x1(60),I1Vp1cn(I0Pcon(strxcon_cons(14));I1Vtnm(I1TNM(68));0)),@(xs(61),I1Vp1cn(I0Pcon(strxcon_cons(14));I1Vtnm(I1TNM(68));1)))))
    if (XATS000_ctgeq(jsxtnm67, XATSCTAG("strxcon_cons",0))) { // gpt
      let jsxtnm68 = jsxtnm67
      jsxtnm69 = XATSP1CN("strxcon_cons", jsxtnm68[0+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm69
  return jsxtnm69
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(5120(line=303,offs=1)--5225(line=311,offs=35)))
// LCSRCsome1(precats.dats)@(5128(line=304,offs=1)--5225(line=311,offs=35))
// I1FUNDCL
// XATS2JS_strxcon_tail$raw_5153
  // FJARGdarg($list(I1BNDcons(I1TNM(70);I0Pvar(xs(63));$list(@(xs(63),I1Vtnm(I1TNM(70)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strxcon_tail$raw);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(5226(line=312,offs=1)--5309(line=315,offs=42)))
let XATS2JS_strxcon_tail$raw = function (arg1) { // impl
  let jsxtnm71 = arg1
  // I1CMP:start
  let jsxtnm73 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(72);I0Pdapp(I0Pcon(strxcon_cons(14));$list(I0Pvar(x1(65)),I0Pvar(xs(66))));$list(@(x1(65),I1Vp1cn(I0Pcon(strxcon_cons(14));I1Vtnm(I1TNM(72));0)),@(xs(66),I1Vp1cn(I0Pcon(strxcon_cons(14));I1Vtnm(I1TNM(72));1)))))
    if (XATS000_ctgeq(jsxtnm71, XATSCTAG("strxcon_cons",0))) { // gpt
      let jsxtnm72 = jsxtnm71
      jsxtnm73 = XATSP1CN("strxcon_cons", jsxtnm72[1+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm73
  return jsxtnm73
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(5767(line=352,offs=1)--5845(line=357,offs=32)))
// LCSRCsome1(precats.dats)@(5775(line=353,offs=1)--5845(line=357,offs=32))
// I1FUNDCL
// XATS2JS_optn_vt_nilq1_5778
  // FJARGdarg($list(I1BNDcons(I1TNM(74);I0Pvar(xs(68));$list(@(xs(68),I1Vtnm(I1TNM(74)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_optn_vt_nilq1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(5846(line=358,offs=1)--5942(line=362,offs=46)))
let XATS2JS_optn_vt_nilq1 = function (arg1) { // impl
  let jsxtnm75 = arg1
  // I1CMP:start
  let jsxtnm78 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(76);I0Pdapp(I0Pcon(optn_vt_nil(6));$list());$list()))
    if (XATS000_ctgeq(jsxtnm75, XATSCTAG("optn_vt_nil",0))) { // gpt
      let jsxtnm76 = jsxtnm75
      jsxtnm78 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(77);I0Pdapp(I0Pcon(optn_vt_cons(7));$list(I0Pvar(x0(70))));$list(@(x0(70),I1Vp1cn(I0Pcon(optn_vt_cons(7));I1Vtnm(I1TNM(77));0)))))
    if (XATS000_ctgeq(jsxtnm75, XATSCTAG("optn_vt_cons",1))) { // gpt
      let jsxtnm77 = jsxtnm75
      jsxtnm78 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm78
  return jsxtnm78
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(5946(line=364,offs=1)--6025(line=369,offs=32)))
// LCSRCsome1(precats.dats)@(5954(line=365,offs=1)--6025(line=369,offs=32))
// I1FUNDCL
// XATS2JS_optn_vt_consq1_5957
  // FJARGdarg($list(I1BNDcons(I1TNM(79);I0Pvar(xs(72));$list(@(xs(72),I1Vtnm(I1TNM(79)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_optn_vt_consq1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(6026(line=370,offs=1)--6125(line=374,offs=48)))
let XATS2JS_optn_vt_consq1 = function (arg1) { // impl
  let jsxtnm80 = arg1
  // I1CMP:start
  let jsxtnm83 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(81);I0Pdapp(I0Pcon(optn_vt_nil(6));$list());$list()))
    if (XATS000_ctgeq(jsxtnm80, XATSCTAG("optn_vt_nil",0))) { // gpt
      let jsxtnm81 = jsxtnm80
      jsxtnm83 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(82);I0Pdapp(I0Pcon(optn_vt_cons(7));$list(I0Pvar(x0(74))));$list(@(x0(74),I1Vp1cn(I0Pcon(optn_vt_cons(7));I1Vtnm(I1TNM(82));0)))))
    if (XATS000_ctgeq(jsxtnm80, XATSCTAG("optn_vt_cons",1))) { // gpt
      let jsxtnm82 = jsxtnm80
      jsxtnm83 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm83
  return jsxtnm83
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(6152(line=378,offs=1)--6232(line=383,offs=31)))
// LCSRCsome1(precats.dats)@(6160(line=379,offs=1)--6232(line=383,offs=31))
// I1FUNDCL
// XATS2JS_optn_vt_head$raw0_6163
  // FJARGdarg($list(I1BNDcons(I1TNM(84);I0Pvar(xs(76));$list(@(xs(76),I1Vtnm(I1TNM(84)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_optn_vt_head$raw0);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(6233(line=384,offs=1)--6314(line=387,offs=39)))
let XATS2JS_optn_vt_head$raw0 = function (arg1) { // impl
  let jsxtnm85 = arg1
  // I1CMP:start
  let jsxtnm87 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(86);I0Pfree(I0Pdapp(I0Pcon(optn_vt_cons(7));$list(I0Pvar(x0(78)))));$list(@(x0(78),I1Vp1cn(I0Pcon(optn_vt_cons(7));I1Vtnm(I1TNM(86));0)))))
    if (XATS000_ctgeq(jsxtnm85, XATSCTAG("optn_vt_cons",1))) { // gpt
      let jsxtnm86 = jsxtnm85
      jsxtnm87 = XATSP1CN("optn_vt_cons", jsxtnm86[0+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm87
  return jsxtnm87
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(6318(line=389,offs=1)--6400(line=394,offs=31)))
// LCSRCsome1(precats.dats)@(6326(line=390,offs=1)--6400(line=394,offs=31))
// I1FUNDCL
// XATS2JS_optn_vt_uncons$raw0_6329
  // FJARGdarg($list(I1BNDcons(I1TNM(88);I0Pvar(xs(80));$list(@(xs(80),I1Vtnm(I1TNM(88)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_optn_vt_uncons$raw0);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(6401(line=395,offs=1)--6484(line=398,offs=39)))
let XATS2JS_optn_vt_uncons$raw0 = function (arg1) { // impl
  let jsxtnm89 = arg1
  // I1CMP:start
  let jsxtnm91 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(90);I0Pfree(I0Pdapp(I0Pcon(optn_vt_cons(7));$list(I0Pvar(x0(82)))));$list(@(x0(82),I1Vp1cn(I0Pcon(optn_vt_cons(7));I1Vtnm(I1TNM(90));0)))))
    if (XATS000_ctgeq(jsxtnm89, XATSCTAG("optn_vt_cons",1))) { // gpt
      let jsxtnm90 = jsxtnm89
      jsxtnm91 = XATSP1CN("optn_vt_cons", jsxtnm90[0+1])
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm91
  return jsxtnm91
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(6903(line=431,offs=1)--6981(line=436,offs=32)))
// LCSRCsome1(precats.dats)@(6911(line=432,offs=1)--6981(line=436,offs=32))
// I1FUNDCL
// XATS2JS_list_vt_nilq1_6914
  // FJARGdarg($list(I1BNDcons(I1TNM(92);I0Pvar(xs(84));$list(@(xs(84),I1Vtnm(I1TNM(92)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_list_vt_nilq1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(6982(line=437,offs=1)--7078(line=441,offs=46)))
let XATS2JS_list_vt_nilq1 = function (arg1) { // impl
  let jsxtnm93 = arg1
  // I1CMP:start
  let jsxtnm96 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(94);I0Pdapp(I0Pcon(list_vt_nil(10));$list());$list()))
    if (XATS000_ctgeq(jsxtnm93, XATSCTAG("list_vt_nil",0))) { // gpt
      let jsxtnm94 = jsxtnm93
      jsxtnm96 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(95);I0Pdap1(I0Pcon(list_vt_cons(11)));$list()))
    if (XATS000_ctgeq(jsxtnm93, XATSCTAG("list_vt_cons",1))) { // gpt
      let jsxtnm95 = jsxtnm93
      jsxtnm96 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm96
  return jsxtnm96
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(7082(line=443,offs=1)--7161(line=448,offs=32)))
// LCSRCsome1(precats.dats)@(7090(line=444,offs=1)--7161(line=448,offs=32))
// I1FUNDCL
// XATS2JS_list_vt_consq1_7093
  // FJARGdarg($list(I1BNDcons(I1TNM(97);I0Pvar(xs(87));$list(@(xs(87),I1Vtnm(I1TNM(97)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_list_vt_consq1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(7162(line=449,offs=1)--7261(line=453,offs=48)))
let XATS2JS_list_vt_consq1 = function (arg1) { // impl
  let jsxtnm98 = arg1
  // I1CMP:start
  let jsxtnm101 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(99);I0Pdapp(I0Pcon(list_vt_nil(10));$list());$list()))
    if (XATS000_ctgeq(jsxtnm98, XATSCTAG("list_vt_nil",0))) { // gpt
      let jsxtnm99 = jsxtnm98
      jsxtnm101 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(100);I0Pdap1(I0Pcon(list_vt_cons(11)));$list()))
    if (XATS000_ctgeq(jsxtnm98, XATSCTAG("list_vt_cons",1))) { // gpt
      let jsxtnm100 = jsxtnm98
      jsxtnm101 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm101
  return jsxtnm101
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(7288(line=457,offs=1)--7368(line=462,offs=31)))
// LCSRCsome1(precats.dats)@(7296(line=458,offs=1)--7368(line=462,offs=31))
// I1FUNDCL
// XATS2JS_list_vt_head$raw1_7299
  // FJARGdarg($list(I1BNDcons(I1TNM(102);I0Pvar(xs(90));$list(@(xs(90),I1Vtnm(I1TNM(102)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_list_vt_head$raw1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(7369(line=463,offs=1)--7509(line=472,offs=42)))
let XATS2JS_list_vt_head$raw1 = function (arg1) { // impl
  let jsxtnm103 = arg1
  // I1CMP:start
  let jsxtnm109 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(104);I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pvar(x1(92)),I0Pvar(xs(93))));$list(@(x1(92),I1Vp1cn(I0Pcon(list_vt_cons(11));I1Vtnm(I1TNM(104));0)),@(xs(93),I1Vp1cn(I0Pcon(list_vt_cons(11));I1Vtnm(I1TNM(104));1)))))
    if (XATS000_ctgeq(jsxtnm103, XATSCTAG("list_vt_cons",1))) { // gpt
      let jsxtnm104 = jsxtnm103
      let jsxtnm108 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(precats.dats)@(7459(line=471,offs=1)--7484(line=472,offs=17)))
        // I1VALDCL
        let jsxtnm106
        let jsxtnm105 = XATSCAST("datacopy_1720", [XATSP1CN("list_vt_cons", jsxtnm104[0+1])])
        jsxtnm106 = jsxtnm105
        XATS000_patck(true)
        let jsxtnm107 = XATSCAST("enlinear_1756", [jsxtnm106])
        jsxtnm108 = jsxtnm107
      } // endlet
      jsxtnm109 = jsxtnm108
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm109
  return jsxtnm109
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(7513(line=474,offs=1)--7601(line=479,offs=38)))
// LCSRCsome1(precats.dats)@(7521(line=475,offs=1)--7601(line=479,offs=38))
// I1FUNDCL
// XATS2JS_list_vt_tail$raw0_7524
  // FJARGdarg($list(I1BNDcons(I1TNM(110);I0Pvar(xs(96));$list(@(xs(96),I1Vtnm(I1TNM(110)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_list_vt_tail$raw0);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(7602(line=480,offs=1)--7732(line=487,offs=43)))
let XATS2JS_list_vt_tail$raw0 = function (arg1) { // impl
  let jsxtnm111 = arg1
  // I1CMP:start
  let jsxtnm116 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(112);I0Pfree(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pvar(x1(98)),I0Pvar(xs(99)))));$list(@(x1(98),I1Vp1cn(I0Pcon(list_vt_cons(11));I1Vtnm(I1TNM(112));0)),@(xs(99),I1Vp1cn(I0Pcon(list_vt_cons(11));I1Vtnm(I1TNM(112));1)))))
    if (XATS000_ctgeq(jsxtnm111, XATSCTAG("list_vt_cons",1))) { // gpt
      let jsxtnm112 = jsxtnm111
      let jsxtnm115 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(precats.dats)@(7696(line=487,offs=7)--7721(line=487,offs=32)))
        // I1VALDCL
        let jsxtnm114
        let jsxtnm113 = XATSCAST("delinear_1667", [XATSP1CN("list_vt_cons", jsxtnm112[0+1])])
        jsxtnm114 = jsxtnm113
        XATS000_patck(true)
        jsxtnm115 = XATSP1CN("list_vt_cons", jsxtnm112[1+1])
      } // endlet
      jsxtnm116 = jsxtnm115
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm116
  return jsxtnm116
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(7779(line=492,offs=1)--7855(line=497,offs=31)))
// LCSRCsome1(precats.dats)@(7787(line=493,offs=1)--7855(line=497,offs=31))
// I1FUNDCL
// XATS2JS_lazy_vt_eval_7790
  // FJARGdarg($list(I1BNDcons(I1TNM(117);I0Pvar(lz(102));$list(@(lz(102),I1Vtnm(I1TNM(117)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_lazy_vt_eval);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(7856(line=498,offs=1)--7901(line=499,offs=37)))
let XATS2JS_lazy_vt_eval = function (arg1) { // impl
  let jsxtnm118 = arg1
  // I1CMP:start
  let jsxtnm119 = XATS000_dl1az(jsxtnm118)
  // I1CMP:return:jsxtnm119
  return jsxtnm119
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(7905(line=501,offs=1)--7982(line=506,offs=32)))
// LCSRCsome1(precats.dats)@(7913(line=502,offs=1)--7982(line=506,offs=32))
// I1FUNDCL
// XATS2JS_lazy_vt_free_7916
  // FJARGdarg($list(I1BNDcons(I1TNM(120);I0Pvar(lz(105));$list(@(lz(105),I1Vtnm(I1TNM(120)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_lazy_vt_free);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(7983(line=507,offs=1)--8028(line=508,offs=37)))
let XATS2JS_lazy_vt_free = function (arg1) { // impl
  let jsxtnm121 = arg1
  // I1CMP:start
  XATS000_free(jsxtnm121)
  // I1CMP:return:[]
  return []
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(8055(line=512,offs=1)--8139(line=517,offs=35)))
// LCSRCsome1(precats.dats)@(8063(line=513,offs=1)--8139(line=517,offs=35))
// I1FUNDCL
// XATS2JS_lazy_vt_make_f0un_8066
  // FJARGdarg($list(I1BNDcons(I1TNM(122);I0Pvar(f0(108));$list(@(f0(108),I1Vtnm(I1TNM(122)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_lazy_vt_make_f0un);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(8140(line=518,offs=1)--8193(line=519,offs=45)))
let XATS2JS_lazy_vt_make_f0un = function (arg1) { // impl
  let jsxtnm123 = arg1
  // I1CMP:start
  let jsxtnm125 = XATS000_l1azy(function (tlaz) { // l1azy
    // I1CMP:start
    let jsxtnm124 = XATSDAPP(jsxtnm123())
    // I1CMP:return:jsxtnm124
    return jsxtnm124
  }) // endfun(l1azy)
  // I1CMP:return:jsxtnm125
  return jsxtnm125
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(8240(line=524,offs=1)--8316(line=528,offs=35)))
// LCSRCsome1(precats.dats)@(8248(line=525,offs=1)--8316(line=528,offs=35))
// I1FUNDCL
// XATS2JS_strmcon_vt_nil_8251
  // FJARGdarg($list())
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_vt_nil);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(8317(line=529,offs=1)--8369(line=530,offs=44)))
let XATS2JS_strmcon_vt_nil = function () { // impl
  // I1CMP:start
  let jsxtnm126 = XATSCAPP("strmcon_vt_nil", [0])
  // I1CMP:return:jsxtnm126
  return jsxtnm126
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(8373(line=532,offs=1)--8472(line=537,offs=44)))
// LCSRCsome1(precats.dats)@(8381(line=533,offs=1)--8472(line=537,offs=44))
// I1FUNDCL
// XATS2JS_strmcon_vt_cons_8384
  // FJARGdarg($list(I1BNDcons(I1TNM(127);I0Pvar(x1(112));$list(@(x1(112),I1Vtnm(I1TNM(127))))),I1BNDcons(I1TNM(128);I0Pvar(xs(113));$list(@(xs(113),I1Vtnm(I1TNM(128)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_vt_cons);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(8473(line=538,offs=1)--8537(line=539,offs=56)))
let XATS2JS_strmcon_vt_cons = function (arg1, arg2) { // impl
  let jsxtnm129 = arg1
  let jsxtnm130 = arg2
  // I1CMP:start
  let jsxtnm131 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm129, jsxtnm130])
  // I1CMP:return:jsxtnm131
  return jsxtnm131
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(8541(line=541,offs=1)--8640(line=546,offs=44)))
// LCSRCsome1(precats.dats)@(8549(line=542,offs=1)--8640(line=546,offs=44))
// I1FUNDCL
// XATS2JS_strxcon_vt_cons_8552
  // FJARGdarg($list(I1BNDcons(I1TNM(132);I0Pvar(x1(117));$list(@(x1(117),I1Vtnm(I1TNM(132))))),I1BNDcons(I1TNM(133);I0Pvar(xs(118));$list(@(xs(118),I1Vtnm(I1TNM(133)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strxcon_vt_cons);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(8641(line=547,offs=1)--8705(line=548,offs=56)))
let XATS2JS_strxcon_vt_cons = function (arg1, arg2) { // impl
  let jsxtnm134 = arg1
  let jsxtnm135 = arg2
  // I1CMP:start
  let jsxtnm136 = XATSCAPP("strxcon_vt_cons", [0, jsxtnm134, jsxtnm135])
  // I1CMP:return:jsxtnm136
  return jsxtnm136
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(8732(line=552,offs=1)--8816(line=557,offs=35)))
// LCSRCsome1(precats.dats)@(8740(line=553,offs=1)--8816(line=557,offs=35))
// I1FUNDCL
// XATS2JS_strmcon_vt_nilq1_8743
  // FJARGdarg($list(I1BNDcons(I1TNM(137);I0Pvar(xs(122));$list(@(xs(122),I1Vtnm(I1TNM(137)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_vt_nilq1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(8817(line=558,offs=1)--8921(line=562,offs=51)))
let XATS2JS_strmcon_vt_nilq1 = function (arg1) { // impl
  let jsxtnm138 = arg1
  // I1CMP:start
  let jsxtnm141 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(139);I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list());$list()))
    if (XATS000_ctgeq(jsxtnm138, XATSCTAG("strmcon_vt_nil",0))) { // gpt
      let jsxtnm139 = jsxtnm138
      jsxtnm141 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(140);I0Pdap1(I0Pcon(strmcon_vt_cons(16)));$list()))
    if (XATS000_ctgeq(jsxtnm138, XATSCTAG("strmcon_vt_cons",1))) { // gpt
      let jsxtnm140 = jsxtnm138
      jsxtnm141 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm141
  return jsxtnm141
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(8925(line=564,offs=1)--9010(line=569,offs=35)))
// LCSRCsome1(precats.dats)@(8933(line=565,offs=1)--9010(line=569,offs=35))
// I1FUNDCL
// XATS2JS_strmcon_vt_consq1_8936
  // FJARGdarg($list(I1BNDcons(I1TNM(142);I0Pvar(xs(125));$list(@(xs(125),I1Vtnm(I1TNM(142)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_vt_consq1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(9011(line=570,offs=1)--9118(line=574,offs=53)))
let XATS2JS_strmcon_vt_consq1 = function (arg1) { // impl
  let jsxtnm143 = arg1
  // I1CMP:start
  let jsxtnm146 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(144);I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list());$list()))
    if (XATS000_ctgeq(jsxtnm143, XATSCTAG("strmcon_vt_nil",0))) { // gpt
      let jsxtnm144 = jsxtnm143
      jsxtnm146 = XATSBOOL(false)
      break // cls
    } // gpt
    // } // cls
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(145);I0Pdap1(I0Pcon(strmcon_vt_cons(16)));$list()))
    if (XATS000_ctgeq(jsxtnm143, XATSCTAG("strmcon_vt_cons",1))) { // gpt
      let jsxtnm145 = jsxtnm143
      jsxtnm146 = XATSBOOL(true)
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm146
  return jsxtnm146
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(9145(line=578,offs=1)--9232(line=583,offs=34)))
// LCSRCsome1(precats.dats)@(9153(line=579,offs=1)--9232(line=583,offs=34))
// I1FUNDCL
// XATS2JS_strmcon_vt_head$raw1_9156
  // FJARGdarg($list(I1BNDcons(I1TNM(147);I0Pvar(xs(128));$list(@(xs(128),I1Vtnm(I1TNM(147)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_vt_head$raw1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(9233(line=584,offs=1)--9382(line=593,offs=42)))
let XATS2JS_strmcon_vt_head$raw1 = function (arg1) { // impl
  let jsxtnm148 = arg1
  // I1CMP:start
  let jsxtnm154 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(149);I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(130)),I0Pvar(xs(131))));$list(@(x1(130),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(149));0)),@(xs(131),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(149));1)))))
    if (XATS000_ctgeq(jsxtnm148, XATSCTAG("strmcon_vt_cons",1))) { // gpt
      let jsxtnm149 = jsxtnm148
      let jsxtnm153 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(precats.dats)@(9332(line=592,offs=1)--9357(line=593,offs=17)))
        // I1VALDCL
        let jsxtnm151
        let jsxtnm150 = XATSCAST("datacopy_1720", [XATSP1CN("strmcon_vt_cons", jsxtnm149[0+1])])
        jsxtnm151 = jsxtnm150
        XATS000_patck(true)
        let jsxtnm152 = XATSCAST("enlinear_1756", [jsxtnm151])
        jsxtnm153 = jsxtnm152
      } // endlet
      jsxtnm154 = jsxtnm153
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm154
  return jsxtnm154
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(9386(line=595,offs=1)--9480(line=600,offs=41)))
// LCSRCsome1(precats.dats)@(9394(line=596,offs=1)--9480(line=600,offs=41))
// I1FUNDCL
// XATS2JS_strmcon_vt_tail$raw0_9397
  // FJARGdarg($list(I1BNDcons(I1TNM(155);I0Pvar(xs(134));$list(@(xs(134),I1Vtnm(I1TNM(155)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strmcon_vt_tail$raw0);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(9481(line=601,offs=1)--9620(line=608,offs=43)))
let XATS2JS_strmcon_vt_tail$raw0 = function (arg1) { // impl
  let jsxtnm156 = arg1
  // I1CMP:start
  let jsxtnm161 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(157);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x1(136)),I0Pvar(xs(137)))));$list(@(x1(136),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(157));0)),@(xs(137),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(157));1)))))
    if (XATS000_ctgeq(jsxtnm156, XATSCTAG("strmcon_vt_cons",1))) { // gpt
      let jsxtnm157 = jsxtnm156
      let jsxtnm160 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(precats.dats)@(9584(line=608,offs=7)--9609(line=608,offs=32)))
        // I1VALDCL
        let jsxtnm159
        let jsxtnm158 = XATSCAST("delinear_1667", [XATSP1CN("strmcon_vt_cons", jsxtnm157[0+1])])
        jsxtnm159 = jsxtnm158
        XATS000_patck(true)
        jsxtnm160 = XATSP1CN("strmcon_vt_cons", jsxtnm157[1+1])
      } // endlet
      jsxtnm161 = jsxtnm160
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm161
  return jsxtnm161
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(9669(line=615,offs=1)--9756(line=620,offs=34)))
// LCSRCsome1(precats.dats)@(9677(line=616,offs=1)--9756(line=620,offs=34))
// I1FUNDCL
// XATS2JS_strxcon_vt_head$raw1_9680
  // FJARGdarg($list(I1BNDcons(I1TNM(162);I0Pvar(xs(140));$list(@(xs(140),I1Vtnm(I1TNM(162)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strxcon_vt_head$raw1);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(9757(line=621,offs=1)--9906(line=630,offs=42)))
let XATS2JS_strxcon_vt_head$raw1 = function (arg1) { // impl
  let jsxtnm163 = arg1
  // I1CMP:start
  let jsxtnm169 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(164);I0Pdapp(I0Pcon(strxcon_vt_cons(17));$list(I0Pvar(x1(142)),I0Pvar(xs(143))));$list(@(x1(142),I1Vp1cn(I0Pcon(strxcon_vt_cons(17));I1Vtnm(I1TNM(164));0)),@(xs(143),I1Vp1cn(I0Pcon(strxcon_vt_cons(17));I1Vtnm(I1TNM(164));1)))))
    if (XATS000_ctgeq(jsxtnm163, XATSCTAG("strxcon_vt_cons",0))) { // gpt
      let jsxtnm164 = jsxtnm163
      let jsxtnm168 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(precats.dats)@(9856(line=629,offs=1)--9881(line=630,offs=17)))
        // I1VALDCL
        let jsxtnm166
        let jsxtnm165 = XATSCAST("datacopy_1720", [XATSP1CN("strxcon_vt_cons", jsxtnm164[0+1])])
        jsxtnm166 = jsxtnm165
        XATS000_patck(true)
        let jsxtnm167 = XATSCAST("enlinear_1756", [jsxtnm166])
        jsxtnm168 = jsxtnm167
      } // endlet
      jsxtnm169 = jsxtnm168
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm169
  return jsxtnm169
} // endfun(impl)
// I1Dextern(LCSRCsome1(precats.dats)@(9932(line=635,offs=1)--10026(line=640,offs=41)))
// LCSRCsome1(precats.dats)@(9940(line=636,offs=1)--10026(line=640,offs=41))
// I1FUNDCL
// XATS2JS_strxcon_vt_tail$raw0_9943
  // FJARGdarg($list(I1BNDcons(I1TNM(170);I0Pvar(xs(146));$list(@(xs(146),I1Vtnm(I1TNM(170)))))))
  // I1CMP:start
  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strxcon_vt_tail$raw0);G1Nlist($list())) // I1CMP:return
// I1Dimplmnt0(LCSRCsome1(precats.dats)@(10027(line=641,offs=1)--10166(line=648,offs=43)))
let XATS2JS_strxcon_vt_tail$raw0 = function (arg1) { // impl
  let jsxtnm171 = arg1
  // I1CMP:start
  let jsxtnm176 // cas
  do {
    // { // cls
    // I1GPTpat(I1BNDcons(I1TNM(172);I0Pfree(I0Pdapp(I0Pcon(strxcon_vt_cons(17));$list(I0Pvar(x1(148)),I0Pvar(xs(149)))));$list(@(x1(148),I1Vp1cn(I0Pcon(strxcon_vt_cons(17));I1Vtnm(I1TNM(172));0)),@(xs(149),I1Vp1cn(I0Pcon(strxcon_vt_cons(17));I1Vtnm(I1TNM(172));1)))))
    if (XATS000_ctgeq(jsxtnm171, XATSCTAG("strxcon_vt_cons",0))) { // gpt
      let jsxtnm172 = jsxtnm171
      let jsxtnm175 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(precats.dats)@(10130(line=648,offs=7)--10155(line=648,offs=32)))
        // I1VALDCL
        let jsxtnm174
        let jsxtnm173 = XATSCAST("delinear_1667", [XATSP1CN("strxcon_vt_cons", jsxtnm172[0+1])])
        jsxtnm174 = jsxtnm173
        XATS000_patck(true)
        jsxtnm175 = XATSP1CN("strxcon_vt_cons", jsxtnm172[1+1])
      } // endlet
      jsxtnm176 = jsxtnm175
      break // cls
    } // gpt
    // } // cls
    XATS000_cfail()
  } while (false) // end-of(do)
  // I1CMP:return:jsxtnm176
  return jsxtnm176
} // endfun(impl)
// LCSRCsome1(precats.dats)@(10422(line=656,offs=1)--10422(line=656,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(precats.dats)@(10422(line=656,offs=1)--10422(line=656,offs=1));D3Cnone0()))
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// Wed Aug  5 06:17:43 PM EDT 2026
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/*
the beg of
[ATS3-XANADU/srcgen2/xats2js/srcgen1/xshared/runtime/srcgen2_prelude.js]
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
XATS2JS_the_print_store_clear
  ( /*void*/ )
{
  XATS2JS_the_print_store.length = 0; return
}
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
//
// HX-2025-09-27:
// for unsigned ints
// Sat Sep 27 12:38:38 PM EDT 2025
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_uint_print
  ( u0 )
{
  let cs = u0.toString()
  XATS2JS_the_print_store.push(cs); return
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_sint_to$uint
  ( i0 )
{
  if (i0>=0)
  {
    return i0 // i0>=0
  } else {
    throw new Error("XATS2JS_sint_to$uint: i0 = " + i0.toString())
  } // end of [if(i0>=0)]
}
function
XATS2JS_uint_to$sint
  ( u0 )
{
  if (u0>=0)
  {
    return u0 // always?
  } else {
    throw new Error("XATS2JS_uint_to$sint: u0 = " + u0.toString())
  } // end of [if(u0>=0)]
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
HX-2025-01-10:
Taken from gavinz
Sun Jan 19 01:11:19 AM EST 2025
*/
function
XATS2JS_char_make_sint( i0 ) { return i0 }
//
/*
HX-2026-01-15:
Thu Jan 15 06:47:03 PM EST 2026
*/
function
XATS2JS_sint_make_char( ch ) { return ch }
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
  return (f1 === f2) // HX: eq
}
function
XATS2JS_dflt_neq$dflt
  (f1, f2)
{
  return (f1 !== f2) // HX: neq
}
//
/*
HX-2025-12-13:
Sat Dec 13 05:19:31 PM EST 2025
*/
//
function
XATS2JS_dflt_cmp$dflt
  (f1, f2)
{
  if (f1 < f2)
    return (-1) // lt
  else // f1 >= f2
    return (f1 > f2 ? 1 : 0)
  // HX: end-of-if( f1 < f2 )
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
function
XATS000_strn_length
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
XATS2JS_strn_make_fwork
  (fwork)
{
  var cs = []
  fwork((ch) => {cs.push(ch);return})
  return String.fromCharCode.apply(null, cs)
}
//
function
XATS000_strn_make_fwork
  (fwork)
{
  return XATS2JS_strn_make_fwork(fwork)
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS000_strn_print
  ( cs )
{
  return XATS2JS_strn_print(cs)
}
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
XATS2JS_strn_make_env$fwork
  (env, fwork)
{
  var cs = []
  fwork(env, (ch) => {cs.push(ch);return})
  return String.fromCharCode.apply(null, cs)
}
function
XATS2JS_strn_make1_env$fwork
  (env, fwork)
{
  var cs = []
  fwork(env, (ch) => {cs.push(ch);return})
  return String.fromCharCode.apply(null, cs)
}
//
function
XATS000_strn_make_env$fwork
  (env, fwork)
{
  return XATS2JS_strn_make_env$fwork(env, fwork)
}
function
XATS000_strn_make1_env$fwork
  (env, fwork)
{
  return XATS2JS_strn_make1_env$fwork(env, fwork)
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
** Copyright (C) 2026 Hongwei Xi, ATS Trustful Software, Inc.
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
Fri Jan  2 03:23:26 PM EST 2026
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_list_vt_foritm0$f1un
  (xs, work)
{
  let nilq1 =
    XATS2JS_list_vt_nilq1
  while (1) {
    if (nilq1(xs)) {
      break;
    } else {
      let x1 =
        XATS2JS_list_vt_head$raw1(xs)
      work(x1)
      xs = XATS2JS_list_vt_tail$raw0(xs)
    }
  }
  return // XATS2JS_list_vt_foritm0$f1un
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_list_vt_forall0$f1un
  (xs, test, free)
{
  let nilq1 =
    XATS2JS_list_vt_nilq1
  while (1) {
    if (nilq1(xs)) {
      break;
    } else {
      let x1 =
        XATS2JS_list_vt_head$raw1(xs)
      if (test(x1)) {
        xs = XATS2JS_list_vt_tail$raw0(xs)
      } else {
        xs = XATS2JS_list_vt_tail$raw0(xs)
        XATS2JS_list_vt_foritm0$f1un(xs, free); return false
      }
    }
  }
  return true // XATS2JS_list_vt_forall0$f1un
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_list000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2026 Hongwei Xi, ATS Trustful Software, Inc.
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
Fri Jan  2 03:23:26 PM EST 2026
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
// HX: It is yet to be populated!
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_optn000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2026 Hongwei Xi, ATS Trustful Software, Inc.
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
Fri Jan  2 03:23:26 PM EST 2026
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strm_vt_forall0$f1un
  (fxs, test)
{
  let nilq1 =
    XATS2JS_strmcon_vt_nilq1
  while (1) {
    let cxs =
      XATS2JS_lazy_vt_eval(fxs)
    if (nilq1(cxs))
    {
      break;
    } else {
      let x01 =
        XATS2JS_strmcon_vt_head$raw1(cxs)
      if (test(x01))
      {
        fxs = XATS2JS_strmcon_vt_tail$raw0(cxs)
      } else {
        fxs = XATS2JS_strmcon_vt_tail$raw0(cxs)
        XATS2JS_lazy_vt_free(fxs); return false
      }
    }
  }
  return true // XATS2JS_strm_vt_forall0$f1un(...)
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strm_vt_filter0$f1un
  (fxs, test, free)
{
  return XATS2JS_lazy_vt_make_f0un(
    () => XATS2JS_strmcon_vt_filter0$f1un(XATS2JS_lazy_vt_eval(fxs), test, free)
  )
}
//
function
XATS2JS_strmcon_vt_filter0$f1un
  (cxs, test, free)
{
  let nilq1 =
    XATS2JS_strmcon_vt_nilq1
  while (1) {
    if (nilq1(cxs))
    {
      return XATS2JS_strmcon_vt_nil()
    } else {
      let x01 = XATS2JS_strmcon_vt_head$raw1(cxs)
      let fxs = XATS2JS_strmcon_vt_tail$raw0(cxs)
      if (test(x01)) {
        return XATS2JS_strmcon_vt_cons(x01, XATS2JS_strm_vt_filter0$f1un(fxs, test, free))
      } else {
        free(x01);
        cxs = XATS2JS_lazy_vt_eval(fxs); continue;
      }
    }
  }
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_strm000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//                                                                    //.
//                         Applied Type System                        //.
//                                                                    //.
////////////////////////////////////////////////////////////////////////.

/*
** ATS/Xanadu - Unleashing the Potential of Types!
** Copyright (C) 2026 Hongwei Xi, ATS Trustful Software, Inc.
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
Wed Jan 14 01:17:42 PM EST 2026
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strx_vt_forall0$f1un
  (fxs, test)
{
  while (1) {
    let cxs =
      XATS2JS_lazy_vt_eval(fxs)
    let x01 =
      XATS2JS_strxcon_vt_head$raw1(cxs)
    if (test(x01))
    {
      fxs = XATS2JS_strxcon_vt_tail$raw0(cxs)
    } else {
      fxs = XATS2JS_strxcon_vt_tail$raw0(cxs)
      XATS2JS_lazy_vt_free(fxs); return false
    }
  }
  return true // XATS2JS_strx_vt_forall0$f1un(...)
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_strx_vt_filter0$f1un
  (fxs, test, free)
{
  return XATS2JS_lazy_vt_make_f0un(
    () => XATS2JS_strxcon_vt_filter0$f1un(XATS2JS_lazy_vt_eval(fxs), test, free)
  )
}
//
function
XATS2JS_strxcon_vt_filter0$f1un
  (cxs, test, free)
{
  while (1) {
    let x01 = XATS2JS_strxcon_vt_head$raw1(cxs)
    let fxs = XATS2JS_strxcon_vt_tail$raw0(cxs)
    if (test(x01)) {
      return XATS2JS_strxcon_vt_cons(x01, XATS2JS_strx_vt_filter0$f1un(fxs, test, free))
    } else {
      free(x01);
      cxs = XATS2JS_lazy_vt_eval(fxs); continue;
    }
  }
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_strx000.cats]
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
XATS2JS_a1sz_make_fwork
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
// Wed Aug  5 06:17:43 PM EDT 2026
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/*
the beg of
[ATS3-XANADU/srcgen2/xats2js/srcgen1/xshared/runtime/srcgen2_xatslib.js]
*/
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//                                                                     //
//                         Applied Type System                         //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////
//
/*
Author: Hongwei Xi
(*
Sun 21 Jul 2024 01:21:25 AM EDT
*)
Authoremail: gmhwxiATgmailDOTcom
*/
//
/////////////////////////////////////////////////////////////////////////
//
function
XATS2JS_jsdasz_length
  ( A )
{
  return A.length
}
//
/////////////////////////////////////////////////////////////////////////
//
function
XATS2JS_jsdasz_get$at
  (A, i)
{
  return A[i]
}
function
XATS2JS_jsdasz_set$at
  (A, i, x)
{
  return (A[i] = x)
}
//
/////////////////////////////////////////////////////////////////////////
//
function
XATS2JS_jsdasz_make_ncpy
  (n, x) // HX: [x]: nonlin
{
  let i
  let A = new Array(n)
  for (i = 0; i < n; i += 1)
  {
    A[i] = x
  }
  return A // HX: A = [x, x, ..., x]
}
//
function
XATS2JS_jsdasz_make_nfun
  (n, f)
{
  let i
  let A = new Array(n)
  for (i = 0; i < n; i += 1)
  {
    A[i] = f(i)
  }
  return A // HX: A = [f(0),...,f(n-1)]
}
//
/////////////////////////////////////////////////////////////////////////
//
function
XATS2JS_jsdasz_make_1val
  ( x1 )
{
  return [x1]; // len = 1
}
function
XATS2JS_jsdasz_make_2val
  ( x1, x2 )
{
  return [x1, x2]; // len = 2
}
function
XATS2JS_jsdasz_make_3val
  ( x1, x2, x3 )
{
  return [x1, x2, x3]; // len = 3
}
//
/////////////////////////////////////////////////////////////////////////
//
// HX-2024-07-25:
// Thu 25 Jul 2024 06:03:30 PM EDT
//
function
XATS2JS_jsdasz_make_fwork
  (fwork)
{
  let A = []
  fwork((x) => A.push(x)); return A
}
//
/////////////////////////////////////////////////////////////////////////
//
function
XATS2JS_jsdasz_forall$f1un
  (A, test)
{
  let i0
  let n0 = A.length
  for (i0 = 0; i0 < n0; i0 += 1)
  {
    if (!test(A[i0])) return false
  }
  return true // all xs in A pass the test
}
//
/////////////////////////////////////////////////////////////////////////
//
function
XATS2JS_jsdasz_rforall$f1un
  (A, test)
{
  let i0
  let n0 = A.length
  for (i0 = 0; i0 < n0; i0 += 1)
  {
    if (!test(A[n0-1-i0])) return false
  }
  return true // all xs in A pass the test
}
//
/////////////////////////////////////////////////////////////////////////
//
function
XATS2JS_jsdasz_mapref$f1un
  (A, fopr)
{
  let i0
  let n0 = A.length
  for (i0 = 0; i0 < n0; i0 += 1)
  {
    A[i0] = fopr(A[i0])
  }
  return // HX: Applying (x)=>fopr(x) to [A]
}
//
/////////////////////////////////////////////////////////////////////////
//
function
XATS2JS_jsdasz_sortref$f2un
  (A, cmpr)
{
  A.sort(cmpr); return // HX: [A] is mutated!
}
//
/////////////////////////////////////////////////////////////////////////
//
function
XATS2JS_jsdasz_iforall$f2un
  (A, test)
{
  let i0
  let n0 = A.length
  for (i0 = 0; i0 < n0; i0 += 1)
  {
    if (!test(i0, A[i0])) return false
  }
  return true // HX: all xs in A have passed the test!
}
/*
// HX-2024-08-09:
// This is likely to be less efficient!
function
XATS2JS_jsdasz_iforall$f2un
  (A, test)
{
  for (const ix of A.entries()) {
    if (!test(ix[0], ix[1])) return false
  }
  return true // HX: all xs in A have passed the test!
}
*/
//
/////////////////////////////////////////////////////////////////////////
//
/*
HX-2024-08-14:
Wed 14 Aug 2024 03:37:41 PM EDT
*/
function
XATS2JS_jsdasz$iter_make
  ( A )
{
  return A.entries() // HX: Array iterator
}
//
function
XATS2JS_jsdasz$iter_next$work
  (iter, work)
{
  var next = iter.next()
  if (next.done) return false // HX: it is done!
  var value = next.value
  // HX: value != undefined
  work(value[0], value[1]); return true // HX: more to do!
}
//
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//
// end of [ATS3/XANADU_xatslib_xbasics_DATS_CATS_JS_dynarr0.cats]
//
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//                                                                     //
//                         Applied Type System                         //
//                                                                     //
/////////////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////
//
/*
Author: Hongwei Xi
(*
Fri 09 Aug 2024 07:40:11 AM EDT
*)
Authoremail: gmhwxiATgmailDOTcom
*/
//
/////////////////////////////////////////////////////////////////////////
//
function
XATS2JS_jshmap_size
  (map)
{
  return map.size // HX: field!
}
//
/////////////////////////////////////////////////////////////////////////
//
function
XATS2JS_jshmap_make_nil
  (   )
{
  var map = new Map(); return map
}
//
/////////////////////////////////////////////////////////////////////////
//
function
XATS2JS_jshmap_keyq
  (map, key)
{
  return map.has(key) // HX: bool
}
//
/////////////////////////////////////////////////////////////////////////
//
function
XATS2JS_jshmap_search$tst
  (map, key)
{
  return map.has(key) // HX: bool
}
//
/////////////////////////////////////////////////////////////////////////
//
/*
fun<>
UN_jshmap_get$at$raw
 {k:t0}{x:t0}
(map: jshmap(k,x), key: k): ( x )
fun<>
UN_jshmap_set$at$raw
 {k:t0}{x:t0}
(map: jshmap(k,x), key: k, itm: x): void
*/
//
function
XATS2JS_jshmap_get$at$raw
  (map, key)
{
  return map.get(key)
}
function
XATS2JS_jshmap_set$at$raw
  (map, key, itm)
{
  map.set(key, itm); return // HX: void
}
//
/////////////////////////////////////////////////////////////////////////
//
function
XATS2JS_jshmap_insert$raw
  (map, key, itm)
{
  map.set(key, itm); return // HX: void
}
//
/////////////////////////////////////////////////////////////////////////
//
function
XATS2JS_jshmap_forall$f2un
  (map, test)
{
  for (const kx of map.entries()) {
    if (!test(kx[0], kx[1])) return false
  }
  return true // HX: all the key-value pairs have passed!
}
//
/////////////////////////////////////////////////////////////////////////
//
/*
HX-2024-08-14:
Wed 14 Aug 2024 03:38:56 PM EDT
*/
function
XATS2JS_jshmap$iter_make
  ( A )
{
  return A.entries() // HX: Hmap iterator
}
//
function
XATS2JS_jshmap$iter_next$work
  (iter, work)
{
  var next = iter.next()
  if (next.done) return false // HX: done!
  var value = next.value
  // HX: value != undefined
  work(value[0], value[1]); return true // HX: more to do!
}
//
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
//
// end of [ATS3/XANADU_xatslib_xbasics_DATS_CATS_JS_hashmp0.cats]
//
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
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
Sun 01 Sep 2024 08:04:48 AM EDT
Authoremail: gmhwxiATgmailDOTcom
*/
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
const
XATS2JS_NODE_fs =
require('node:fs')
// HX: the same as require('fs')
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_NODE_g_print
  (x0)
{
  let rep = x0.toString();
  process.stdout.write(rep);
  return; // XATS2JS_NODE_g_print
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_NODE_sint_print
  (i0)
{
  XATS2JS_NODE_g_print(i0);
  return; // XATS2JS_NODE_sint_print
}
//
function
XATS2JS_NODE_uint_print
  (u0)
{
  XATS2JS_NODE_g_print(u0);
  return; // XATS2JS_NODE_uint_print
}
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_NODE_bool_print
  (b0)
{
  XATS2JS_NODE_g_print(b0);
  return; // XATS2JS_NODE_bool_print
}
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_NODE_char_print
  (c0)
{
  let cs =
  String.fromCharCode(c0)
  XATS2JS_NODE_g_print(cs);
  return; // XATS2JS_NODE_char_print
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_NODE_dflt_print
  (f0)
{
  XATS2JS_NODE_g_print(f0);
  return; // XATS2JS_NODE_dflt_print
}
//
////////////////////////////////////////////////////////////////////////.
//
function
XATS2JS_NODE_strn_print
  (cs)
{
  XATS2JS_NODE_g_print(cs);
  return; // XATS2JS_NODE_strn_print
}
//
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// end of [ATS3/XANADU_prelude_DATS_CATS_JS_NODE_node000.cats]
////////////////////////////////////////////////////////////////////////.
////////////////////////////////////////////////////////////////////////.
// LCSRCsome1(test02_jshmap0.dats)@(106(line=8,offs=1)--146(line=9,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gdbg000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats));...)))
// I1Dinclude(LCSRCsome1(test02_jshmap0.dats)@(187(line=12,offs=1)--228(line=13,offs=33)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(352(line=24,offs=1)--399(line=26,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gdbg000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(446(line=31,offs=1)--493(line=33,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gbas000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(494(line=34,offs=1)--541(line=36,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gbas001.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas001.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(542(line=37,offs=1)--589(line=39,offs=28))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gbas002.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas002.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(616(line=43,offs=1)--669(line=45,offs=34))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gbas000_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gbas000_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(670(line=46,offs=1)--723(line=48,offs=34))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gbas001_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gbas001_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(895(line=59,offs=1)--935(line=59,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gxyz000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gxyz000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(982(line=64,offs=1)--1022(line=64,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/unsfx00.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/unsfx00.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(1166(line=73,offs=1)--1206(line=73,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gnum000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gnum000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(1207(line=74,offs=1)--1247(line=74,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gord000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gord000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(1248(line=75,offs=1)--1288(line=75,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gfun000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gfun000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(1292(line=77,offs=1)--1332(line=77,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gseq000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(1333(line=78,offs=1)--1373(line=78,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gseq001.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq001.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(1374(line=79,offs=1)--1414(line=79,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gseq002.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq002.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(1418(line=81,offs=1)--1458(line=81,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gasq000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gasq000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(1459(line=82,offs=1)--1499(line=82,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gasq001.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gasq001.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(1500(line=83,offs=1)--1540(line=83,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gasq002.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gasq002.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(1544(line=85,offs=1)--1584(line=85,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gmap000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gmap000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(1585(line=86,offs=1)--1625(line=86,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gmap001.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gmap001.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(1629(line=88,offs=1)--1669(line=88,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gcls000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gcls000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(1670(line=89,offs=1)--1710(line=89,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gsyn000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(1711(line=90,offs=1)--1751(line=90,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gsyn001.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn001.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(1778(line=94,offs=1)--1818(line=94,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/bool000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/bool000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(1819(line=95,offs=1)--1859(line=95,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/char000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/char000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(1860(line=96,offs=1)--1900(line=96,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gint000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gint000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(1901(line=97,offs=1)--1941(line=97,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gint001.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gint001.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(1942(line=98,offs=1)--1982(line=98,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/gflt000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gflt000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(2009(line=102,offs=1)--2049(line=102,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strn000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(2050(line=103,offs=1)--2090(line=103,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strn001.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn001.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(2117(line=107,offs=1)--2157(line=107,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/axrf000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/axrf000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(2158(line=108,offs=1)--2198(line=108,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/axrf001.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/axrf001.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(2199(line=109,offs=1)--2239(line=109,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/axsz000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/axsz000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(2240(line=110,offs=1)--2280(line=110,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/axsz001.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/axsz001.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(2281(line=111,offs=1)--2321(line=111,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/asrt000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/asrt000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(2322(line=112,offs=1)--2362(line=112,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/tupl000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(2363(line=113,offs=1)--2403(line=113,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/tupl001.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl001.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(2404(line=114,offs=1)--2444(line=114,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/tupl002.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl002.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(2445(line=115,offs=1)--2485(line=115,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/list000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/list000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(2486(line=116,offs=1)--2526(line=116,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/list001.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/list001.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(2527(line=117,offs=1)--2567(line=117,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/list002.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/list002.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(2568(line=118,offs=1)--2608(line=118,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/lsrt000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/lsrt000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(2609(line=119,offs=1)--2649(line=119,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/optn000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/optn000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(2650(line=120,offs=1)--2690(line=120,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/optn001.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/optn001.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(2691(line=121,offs=1)--2731(line=121,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strm000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strm000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(2732(line=122,offs=1)--2772(line=122,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strm001.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strm001.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(2773(line=123,offs=1)--2813(line=123,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strx000.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strx000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(2814(line=124,offs=1)--2854(line=124,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/strx001.dats";27)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strx001.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(2901(line=129,offs=1)--2946(line=129,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/gbas000.dats";32)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/gbas000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(2950(line=131,offs=1)--2995(line=131,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/bool000.dats";32)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/bool000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(2996(line=132,offs=1)--3041(line=132,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/char000.dats";32)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/char000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(3045(line=134,offs=1)--3090(line=134,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/gint000.dats";32)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/gint000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(3091(line=135,offs=1)--3136(line=135,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/gflt000.dats";32)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/gflt000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(3140(line=137,offs=1)--3185(line=137,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/strn000.dats";32)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/strn000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(3189(line=139,offs=1)--3234(line=139,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/axrf000.dats";32)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/axrf000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(3235(line=140,offs=1)--3280(line=140,offs=46))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/axsz000.dats";32)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/axsz000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(3386(line=148,offs=1)--3432(line=148,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gnum000_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gnum000_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(3433(line=149,offs=1)--3479(line=149,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gord000_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gord000_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(3480(line=150,offs=1)--3526(line=150,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gfun000_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gfun000_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(3527(line=151,offs=1)--3573(line=151,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gcls000_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gcls000_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(3574(line=152,offs=1)--3620(line=152,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gseq000_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(3621(line=153,offs=1)--3667(line=153,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gseq001_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(3668(line=154,offs=1)--3714(line=154,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gseq002_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq002_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(3715(line=155,offs=1)--3761(line=155,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gasq000_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gasq000_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(3762(line=156,offs=1)--3808(line=156,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gasq001_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gasq001_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(3809(line=157,offs=1)--3855(line=157,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gsyn000_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gsyn000_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(3882(line=161,offs=1)--3928(line=161,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strn000_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strn000_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(3955(line=165,offs=1)--4001(line=165,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/axrf000_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/axrf000_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(4002(line=166,offs=1)--4048(line=166,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/axsz000_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/axsz000_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(4049(line=167,offs=1)--4095(line=167,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/tupl000_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(4099(line=169,offs=1)--4145(line=169,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/list000_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/list000_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(4146(line=170,offs=1)--4192(line=170,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/list001_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/list001_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(4193(line=171,offs=1)--4239(line=171,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/lsrt000_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/lsrt000_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(4240(line=172,offs=1)--4286(line=172,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/optn000_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/optn000_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(4287(line=173,offs=1)--4333(line=173,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/optn001_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/optn001_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(4337(line=175,offs=1)--4383(line=175,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strm000_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(4384(line=176,offs=1)--4430(line=176,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strm001_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm001_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(4431(line=177,offs=1)--4477(line=177,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strm002_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm002_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(4478(line=178,offs=1)--4524(line=178,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strx000_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strx000_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(4525(line=179,offs=1)--4571(line=179,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/strx001_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strx001_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(4742(line=190,offs=1)--4788(line=190,offs=47))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/VT/gxyz000_vt.dats";33)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(5117(line=198,offs=1)--5117(line=198,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_dats.hats)@(5117(line=198,offs=1)--5117(line=198,offs=1));D3Cnone0()))
// I1Dinclude(LCSRCsome1(test02_jshmap0.dats)@(249(line=15,offs=1)--293(line=16,offs=36)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_JS_dats.hats)@(197(line=15,offs=1)--249(line=16,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/xtop000.dats";35));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/xtop000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_JS_dats.hats)@(296(line=21,offs=1)--344(line=22,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gbas000.dats";35)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gbas000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_JS_dats.hats)@(345(line=23,offs=1)--393(line=24,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gdbg000.dats";35)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gdbg000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_JS_dats.hats)@(440(line=29,offs=1)--488(line=30,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/bool000.dats";35)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/bool000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_JS_dats.hats)@(489(line=31,offs=1)--537(line=32,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/char000.dats";35)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/char000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_JS_dats.hats)@(538(line=33,offs=1)--586(line=34,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gint000.dats";35)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_JS_dats.hats)@(587(line=35,offs=1)--635(line=36,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/gflt000.dats";35)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gflt000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_JS_dats.hats)@(682(line=41,offs=1)--730(line=42,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/strn000.dats";35)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/strn000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_JS_dats.hats)@(777(line=47,offs=1)--825(line=48,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/list000.dats";35)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/list000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_JS_dats.hats)@(826(line=49,offs=1)--874(line=50,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/optn000.dats";35)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/optn000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_JS_dats.hats)@(901(line=54,offs=1)--949(line=55,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/strm000.dats";35)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/strm000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_JS_dats.hats)@(950(line=56,offs=1)--998(line=57,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/strx000.dats";35)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/strx000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_JS_dats.hats)@(1045(line=62,offs=1)--1093(line=63,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/axrf000.dats";35)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/axrf000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_JS_dats.hats)@(1094(line=64,offs=1)--1142(line=65,offs=36))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/axsz000.dats";35)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/axsz000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_JS_dats.hats)@(1398(line=73,offs=1)--1398(line=73,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_JS_dats.hats)@(1398(line=73,offs=1)--1398(line=73,offs=1));D3Cnone0()))
// I1Dinclude(LCSRCsome1(test02_jshmap0.dats)@(314(line=18,offs=1)--360(line=19,offs=38)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_NODE_dats.hats)@(202(line=15,offs=1)--255(line=16,offs=41))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Ea2pp(G1Eid0(=);G1Eid0(_);G1Estr(T_STRN1_clsd("prelude/DATS/CATS/JS/NODE/node000.dats";40)));$optn(FPATH(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats));...)))
// LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_NODE_dats.hats)@(513(line=24,offs=1)--513(line=24,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/HATS/prelude_NODE_dats.hats)@(513(line=24,offs=1)--513(line=24,offs=1));D3Cnone0()))
// I1Dinclude(LCSRCsome1(test02_jshmap0.dats)@(404(line=23,offs=1)--451(line=24,offs=39)))
// LCSRCsome1(../../../HATS/xbasics_JS_dats.hats)@(150(line=10,offs=1)--191(line=11,offs=33))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../DATS/CATS/JS/dynarr0.dats";32));$optn(FPATH(../../../DATS/CATS/JS/dynarr0.dats));...)))
// LCSRCsome1(../../../HATS/xbasics_JS_dats.hats)@(212(line=13,offs=1)--253(line=14,offs=33))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../DATS/CATS/JS/hashmp0.dats";32));$optn(FPATH(../../../DATS/CATS/JS/hashmp0.dats));...)))
// LCSRCsome1(../../../HATS/xbasics_JS_dats.hats)@(374(line=22,offs=1)--421(line=23,offs=39))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../DATS/CATS/JS/VT/dynarr0_vt.dats";38));$optn(FPATH(../../../DATS/CATS/JS/VT/dynarr0_vt.dats));...)))
// LCSRCsome1(../../../HATS/xbasics_JS_dats.hats)@(442(line=25,offs=1)--489(line=26,offs=39))
// I1Di0dcl(I0Dd3ecl(D3Cstaload(1;T_SRP_STALOAD();G1Estr(T_STRN1_clsd("./../DATS/CATS/JS/VT/hashmp0_vt.dats";38));$optn(FPATH(../../../DATS/CATS/JS/VT/hashmp0_vt.dats));...)))
// LCSRCsome1(../../../HATS/xbasics_JS_dats.hats)@(750(line=33,offs=1)--750(line=33,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(../../../HATS/xbasics_JS_dats.hats)@(750(line=33,offs=1)--750(line=33,offs=1));D3Cnone0()))
// I1Dvaldclist(LCSRCsome1(test02_jshmap0.dats)@(498(line=29,offs=1)--549(line=32,offs=23)))
// I1VALDCL
let jsxtnm54
// LCSRCsome1(test02_jshmap0.dats)@(509(line=30,offs=1)--515(line=30,offs=7))
// I0Etapq(I0Ecst(jshmap_make_list(2756)(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(2910(line=142,offs=1)--2926(line=142,offs=17))));$list(T2JAG($list())))
// T1IMPallx(jshmap_make_list(2756);LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(6792(line=400,offs=1)--7085(line=424,offs=4)))
// T1IMPallx(jshmap_make_list(2756)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(jshmap_make_list(2756);$list()))))
let jsxtnm43 = function (arg1) { // timp: jshmap_make_list(2756)
  let jsxtnm1 = arg1
  // I1CMP:start
  let jsxtnm42 // let
  { // let
    // I1Dvaldclist(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(6856(line=406,offs=1)--6885(line=407,offs=20)))
    // I1VALDCL
    let jsxtnm6
    // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(6866(line=407,offs=1)--6881(line=407,offs=16))
    // I0Etapq(I0Ecst(jshmap_make_nil(2755)(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(2834(line=136,offs=1)--2849(line=136,offs=16))));$list(T2JAG($list())))
    // T1IMPallx(jshmap_make_nil(2755);LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(6586(line=384,offs=1)--6765(line=396,offs=2)))
    // T1IMPallx(jshmap_make_nil(2755)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(jshmap_make_nil(2755);$list()))))
    let jsxtnm4 = function () { // timp: jshmap_make_nil(2755)
      // I1CMP:start
      let jsxtnm3 // let
      { // let
        // I1Dextern(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(6689(line=392,offs=1)--6763(line=395,offs=39)))
        // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(6697(line=393,offs=1)--6763(line=395,offs=39))
        // I1FUNDCL: XATS2JS_jshmap_make_nil(5478)
        // XATS2JS_jshmap_make_nil_6700
          // FJARGdarg($list())
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_jshmap_make_nil);G1Nlist($list()))// I1CMP:return
        let jsxtnm2 = XATSDAPP(XATS2JS_jshmap_make_nil())
        jsxtnm3 = jsxtnm2
      } // endlet
      // I1CMP:return:I1Vtnm(I1TNM(3))
      return jsxtnm3
    } // endtimp(jshmap_make_nil(2755))
    let jsxtnm5 = XATSDAPP(jsxtnm4())
    jsxtnm6 = jsxtnm5
    XATS000_patck(true)
    let jsxtnm41 // let
    { // let
      // I1Dimplmnt0(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(6956(line=417,offs=1)--7048(line=422,offs=4)))
      // I1Dimplmnt0(DIMPLone2(foritm$work(51);$list(@(x0[464],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Pvar(k[9098])),S2LAB(LABint(1);T2Pvar(x[9099])))))))):timp
      let jsxtnm40 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(6911(line=413,offs=1)--6943(line=414,offs=24)))
        // I1VALDCL
        let jsxtnm39
        // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(6920(line=414,offs=1)--6931(line=414,offs=12))
        // I0Etapq(I0Ecst(list_foritm(1234)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/list001.sats)@(3916(line=174,offs=1)--3927(line=174,offs=12))));$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Pvar(k[9098])),S2LAB(LABint(1);T2Pvar(x[9099]))))))))
        // T1IMPallx(list_foritm(1234);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/list001.dats)@(4774(line=295,offs=1)--4993(line=314,offs=2)))
        // T1IMPallx(list_foritm(1234)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Pvar(k[9098])),S2LAB(LABint(1);T2Pvar(x[9099])))))))>;I1Dtmpsub($list(@(x0[7530],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Pvar(k[9098])),S2LAB(LABint(1);T2Pvar(x[9099]))))));I1Dimplmnt0(DIMPLone2(list_foritm(1234);$list(@(x0[3434],T2Pvar(x0[7530])))))))
        let jsxtnm37 = function (arg1) { // timp: list_foritm(1234)
          let jsxtnm11 = arg1
          // I1CMP:start
          let jsxtnm36 // let
          { // let
            // I1Dfundclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/list001.dats)@(4840(line=302,offs=1)--4991(line=313,offs=37)))
            // I1FUNDCL
            function loop_4843(arg1)
            { // fun
              let jsxtnm12 = arg1
              // I1CMP:start
              let jsxtnm34 // cas
              do {
                // { // cls
                // I1GPTpat(I1BNDcons(I1TNM(13);I0Pfree(I0Pdapp(I0Pcon(list_nil(8));$list()));$list()))
                if (XATS000_ctgeq(jsxtnm12, XATSCTAG("list_nil",0))) { // gpt
                  let jsxtnm13 = jsxtnm12
                  let jsxtnm14 = XATSTUP0([])
                  jsxtnm34 = jsxtnm14
                  break // cls
                } // gpt
                // } // cls
                // { // cls
                // I1GPTpat(I1BNDcons(I1TNM(15);I0Pfree(I0Pdapp(I0Pcon(list_cons(9));$list(I0Pvar(x1(2600)),I0Pvar(xs(2601)))));$list(@(x1(2600),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(15));0)),@(xs(2601),I1Vp1cn(I0Pcon(list_cons(9));I1Vtnm(I1TNM(15));1)))))
                if (XATS000_ctgeq(jsxtnm12, XATSCTAG("list_cons",1))) { // gpt
                  let jsxtnm15 = jsxtnm12
                  let jsxtnm33 // let
                  { // let
                    // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/list001.dats)@(4946(line=312,offs=1)--4974(line=313,offs=20)))
                    // I1VALDCL
                    let jsxtnm31
                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/list001.dats)@(4955(line=313,offs=1)--4966(line=313,offs=12))
                    // I0Etapq(I0Ecst(foritm$work(51)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas001.sats)@(2341(line=124,offs=1)--2352(line=124,offs=12))));$list(T2JAG($list(T2Pvar(x0[7530])))))
                    // T1IMPallx(foritm$work(51);LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(6956(line=417,offs=1)--7048(line=422,offs=4)))
                    // T1IMPallx(foritm$work(51)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Pvar(k[9098])),S2LAB(LABint(1);T2Pvar(x[9099])))))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(foritm$work(51);$list(@(x0[464],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Pvar(k[9098])),S2LAB(LABint(1);T2Pvar(x[9099]))))))))))
                    let jsxtnm29 = function (arg1) { // timp: foritm$work(51)
                      let jsxtnm16 = arg1
                      // I1CMP:start
                      let jsxtnm28 // let
                      { // let
                        // I1Dvaldclist(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(6994(line=420,offs=1)--7009(line=420,offs=16)))
                        // I1VALDCL
                        let jsxtnm17
                        jsxtnm17 = jsxtnm16
                        XATS000_patck(true)
                        // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(7013(line=421,offs=1)--7033(line=421,offs=21))
                        // I0Etapq(I0Ecst(UN_jshmap_insert$raw(2774)(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(5911(line=332,offs=1)--5931(line=332,offs=21))));$list(T2JAG($list())))
                        // T1IMPallx(UN_jshmap_insert$raw(2774);LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(9888(line=635,offs=1)--10109(line=649,offs=2)))
                        // T1IMPallx(UN_jshmap_insert$raw(2774)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(UN_jshmap_insert$raw(2774);$list()))))
                        let jsxtnm26 = function (arg1, arg2, arg3) { // timp: UN_jshmap_insert$raw(2774)
                          let jsxtnm18 = arg1
                          let jsxtnm19 = arg2
                          let jsxtnm20 = arg3
                          // I1CMP:start
                          let jsxtnm25 // let
                          { // let
                            // I1Dextern(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(10003(line=643,offs=1)--10107(line=648,offs=47)))
                            // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(10011(line=644,offs=1)--10107(line=648,offs=47))
                            // I1FUNDCL: XATS2JS_jshmap_insert$raw(5536)
                            // XATS2JS_jshmap_insert$raw_10014
                              // FJARGdarg($list(I1BNDcons(I1TNM(21);I0Pvar(map(5537));$list(@(map(5537),I1Vtnm(I1TNM(21))))),I1BNDcons(I1TNM(22);I0Pvar(key(5538));$list(@(key(5538),I1Vtnm(I1TNM(22))))),I1BNDcons(I1TNM(23);I0Pvar(itm(5539));$list(@(itm(5539),I1Vtnm(I1TNM(23)))))))
                              // I1CMP:start
                              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_jshmap_insert$raw);G1Nlist($list()))// I1CMP:return
                            let jsxtnm24 = XATSDAPP(XATS2JS_jshmap_insert$raw(jsxtnm18, jsxtnm19, jsxtnm20))
                            jsxtnm25 = jsxtnm24
                          } // endlet
                          // I1CMP:return:I1Vtnm(I1TNM(25))
                          return jsxtnm25
                        } // endtimp(UN_jshmap_insert$raw(2774))
                        let jsxtnm27 = XATSDAPP(jsxtnm26(jsxtnm6, XATSP0RJ(jsxtnm17[0]), XATSP0RJ(jsxtnm17[1])))
                        jsxtnm28 = jsxtnm27
                      } // endlet
                      // I1CMP:return:I1Vtnm(I1TNM(28))
                      return jsxtnm28
                    } // endtimp(foritm$work(51))
                    let jsxtnm30 = XATSDAPP(jsxtnm29(XATSP1CN("list_cons", jsxtnm15[0+1])))
                    jsxtnm31 = jsxtnm30
                    XATS000_patck(true)
                    let jsxtnm32 = XATSDAPP(loop_4843(XATSP1CN("list_cons", jsxtnm15[1+1])))
                    jsxtnm33 = jsxtnm32
                  } // endlet
                  jsxtnm34 = jsxtnm33
                  break // cls
                } // gpt
                // } // cls
                XATS000_cfail()
              } while (false) // end-of(do)
              // I1CMP:return:I1Vtnm(I1TNM(34))
              return jsxtnm34
            } // endfun(loop_4843)
            let jsxtnm35 = XATSDAPP(loop_4843(jsxtnm11))
            jsxtnm36 = jsxtnm35
          } // endlet
          // I1CMP:return:I1Vtnm(I1TNM(36))
          return jsxtnm36
        } // endtimp(list_foritm(1234))
        let jsxtnm38 = XATSDAPP(jsxtnm37(jsxtnm1))
        jsxtnm39 = jsxtnm38
        XATS000_patck(true)
        jsxtnm40 = jsxtnm6
      } // endlet
      jsxtnm41 = jsxtnm40
    } // endlet
    jsxtnm42 = jsxtnm41
  } // endlet
  // I1CMP:return:I1Vtnm(I1TNM(42))
  return jsxtnm42
} // endtimp(jshmap_make_list(2756))
// LCSRCsome1(test02_jshmap0.dats)@(517(line=31,offs=2)--526(line=31,offs=11))
// I0Etapq(I0Ecst(list_make_2val(1182)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/list000.sats)@(2519(line=130,offs=1)--2533(line=130,offs=15))));$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))
// T1IMPallx(list_make_2val(1182);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/list000.dats)@(8411(line=584,offs=1)--8499(line=589,offs=30)))
// T1IMPallx(list_make_2val(1182)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(x0[7481],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(list_make_2val(1182);$list(@(a[3344],T2Pvar(x0[7481])))))))
let jsxtnm49 = function (arg1, arg2) { // timp: list_make_2val(1182)
  let jsxtnm44 = arg1
  let jsxtnm45 = arg2
  // I1CMP:start
  let jsxtnm46 = XATSCAPP("list_nil", [0])
  let jsxtnm47 = XATSCAPP("list_cons", [1, jsxtnm45, jsxtnm46])
  let jsxtnm48 = XATSCAPP("list_cons", [1, jsxtnm44, jsxtnm47])
  // I1CMP:return:I1Vtnm(I1TNM(48))
  return jsxtnm48
} // endtimp(list_make_2val(1182))
let jsxtnm50 = XATSTUP1(XATSTRCD(0), [XATSSTRN("a"), XATSINT1(0)])
let jsxtnm51 = XATSTUP1(XATSTRCD(0), [XATSSTRN("b"), XATSINT1(1)])
let jsxtnm52 = XATSDAPP(jsxtnm49(jsxtnm50, jsxtnm51))
let jsxtnm53 = XATSDAPP(jsxtnm43(jsxtnm52))
jsxtnm54 = jsxtnm53
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(test02_jshmap0.dats)@(550(line=33,offs=1)--609(line=34,offs=42)))
// I1VALDCL
let jsxtnm300
// LCSRCsome1(test02_jshmap0.dats)@(561(line=33,offs=12)--567(line=33,offs=18))
// I0Etapq(I0Ecst(gs_print_a5(810)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gsyn000.sats)@(12006(line=769,offs=1)--12017(line=769,offs=12))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(type_vw_t0);$list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
// T1IMPallx(gs_print_a5(810);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(21886(line=1350,offs=1)--22194(line=1368,offs=4)))
// T1IMPallx(gs_print_a5(810)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(type_vw_t0);$list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7032],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[7033],T2Papps(T2Pcst(type_vw_t0);$list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))),@(x2[7034],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[7035],T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),@(x4[7036],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a5(810);$list(@(x0[2496],T2Pvar(x0[7032])),@(x1[2497],T2Pvar(x1[7033])),@(x2[2498],T2Pvar(x2[7034])),@(x3[2499],T2Pvar(x3[7035])),@(x4[2500],T2Pvar(x4[7036])))))))
let jsxtnm293 = function (arg1, arg2, arg3, arg4, arg5) { // timp: gs_print_a5(810)
  let jsxtnm55 = arg1
  let jsxtnm56 = arg2
  let jsxtnm57 = arg3
  let jsxtnm58 = arg4
  let jsxtnm59 = arg5
  // I1CMP:start
  let jsxtnm292 // let
  { // let
    // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(21986(line=1360,offs=1)--22009(line=1361,offs=15)))
    // I1VALDCL
    let jsxtnm63
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(21995(line=1361,offs=1)--22007(line=1361,offs=13))
    // I0Etapq(I0Ecst(gs_print$beg(802)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
    // T1IMPallx(gs_print$beg(802);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(20714(line=1268,offs=1)--20752(line=1270,offs=20)))
    // T1IMPallx(gs_print$beg(802)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(802);$list()))))
    let jsxtnm61 = function () { // timp: gs_print$beg(802)
      // I1CMP:start
      let jsxtnm60 = XATSTUP0([])
      // I1CMP:return:I1Vtnm(I1TNM(60))
      return jsxtnm60
    } // endtimp(gs_print$beg(802))
    let jsxtnm62 = XATSDAPP(jsxtnm61())
    jsxtnm63 = jsxtnm62
    XATS000_patck(true)
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22022(line=1363,offs=3)--22029(line=1363,offs=10))
    // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x0[7032])))))
    // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
    // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(strn)))))))
    let jsxtnm67
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
    // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
    // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
    // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
    let jsxtnm66
    let jsxtnm65 // let
    { // let
      // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
      // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
      // XATS2JS_NODE_strn_print_2214
        // FJARGdarg($list(I1BNDcons(I1TNM(64);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(64)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
      jsxtnm65 = XATS2JS_NODE_strn_print
    } // endlet
    jsxtnm66 = jsxtnm65
    jsxtnm67 = jsxtnm66
    let jsxtnm68 = XATSDAPP(jsxtnm67(jsxtnm55))
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22039(line=1363,offs=20)--22051(line=1363,offs=32))
    // I0Etapq(I0Ecst(gs_print$sep(803)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
    // T1IMPallx(gs_print$sep(803);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(20753(line=1271,offs=1)--20791(line=1273,offs=20)))
    // T1IMPallx(gs_print$sep(803)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(803);$list()))))
    let jsxtnm70 = function () { // timp: gs_print$sep(803)
      // I1CMP:start
      let jsxtnm69 = XATSTUP0([])
      // I1CMP:return:I1Vtnm(I1TNM(69))
      return jsxtnm69
    } // endtimp(gs_print$sep(803))
    let jsxtnm71 = XATSDAPP(jsxtnm70())
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22056(line=1364,offs=3)--22063(line=1364,offs=10))
    // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x1[7033])))))
    // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(4710(line=318,offs=1)--4814(line=324,offs=32)))
    // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(type_vw_t0);$list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))>;I1Dtmpsub($list(@(vw[5785],T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))));I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Papps(T2Pcst(type);$list(T2Pvar(vw[5785])))))))))
    let jsxtnm109 = function (arg1) { // timp: g_print(39)
      let jsxtnm72 = arg1
      // I1CMP:start
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(4760(line=323,offs=1)--4767(line=323,offs=8))
      // I0Etapq(I0Ecst(g_ptype(202)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(2386(line=100,offs=1)--2393(line=100,offs=8))));$list(T2JAG($list(T2Pvar(vw[5785])))))
      // T1IMPallx(g_ptype(202);LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(2041(line=77,offs=1)--2166(line=87,offs=23)))
      // T1IMPallx(g_ptype(202)<$list(T2JAG($list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))>;I1Dtmpsub($list(@(k[9036],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x[9037],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_ptype(202);$list(@(vw[773],T2Papps(T2Pcst(jsm1);$list(T2Pvar(k[9036]),T2Pvar(x[9037])))))))))
      let jsxtnm97 = function () { // timp: g_ptype(202)
        // I1CMP:start
        // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(2104(line=84,offs=1)--2109(line=84,offs=6))
        // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
        // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
        // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
        let jsxtnm75
        let jsxtnm74 // let
        { // let
          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
          // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
          // XATS2JS_NODE_strn_print_2214
            // FJARGdarg($list(I1BNDcons(I1TNM(73);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(73)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
          jsxtnm74 = XATS2JS_NODE_strn_print
        } // endlet
        jsxtnm75 = jsxtnm74
        let jsxtnm76 = XATSDAPP(jsxtnm75(XATSSTRN("jshmap(")))
        // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(2121(line=86,offs=1)--2128(line=86,offs=8))
        // I0Etapq(I0Ecst(g_ptype(202)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(2386(line=100,offs=1)--2393(line=100,offs=8))));$list(T2JAG($list(T2Pvar(k[9036])))))
        // T1IMPallx(g_ptype(202);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(2934(line=164,offs=1)--2988(line=167,offs=29)))
        // T1IMPallx(g_ptype(202)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_ptype(202);$list(@(vw[773],T2Pcst(strn)))))))
        let jsxtnm81 = function () { // timp: g_ptype(202)
          // I1CMP:start
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(2975(line=167,offs=16)--2980(line=167,offs=21))
          // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
          // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
          // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
          let jsxtnm79
          let jsxtnm78 // let
          { // let
            // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
            // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
            // XATS2JS_NODE_strn_print_2214
              // FJARGdarg($list(I1BNDcons(I1TNM(77);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(77)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
            jsxtnm78 = XATS2JS_NODE_strn_print
          } // endlet
          jsxtnm79 = jsxtnm78
          let jsxtnm80 = XATSDAPP(jsxtnm79(XATSSTRN("strn")))
          // I1CMP:return:I1Vtnm(I1TNM(80))
          return jsxtnm80
        } // endtimp(g_ptype(202))
        let jsxtnm82 = XATSDAPP(jsxtnm81())
        // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(2134(line=86,offs=14)--2139(line=86,offs=19))
        // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
        // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
        // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
        let jsxtnm85
        let jsxtnm84 // let
        { // let
          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
          // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
          // XATS2JS_NODE_strn_print_2214
            // FJARGdarg($list(I1BNDcons(I1TNM(83);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(83)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
          jsxtnm84 = XATS2JS_NODE_strn_print
        } // endlet
        jsxtnm85 = jsxtnm84
        let jsxtnm86 = XATSDAPP(jsxtnm85(XATSSTRN(",")))
        // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(2144(line=87,offs=1)--2151(line=87,offs=8))
        // I0Etapq(I0Ecst(g_ptype(202)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(2386(line=100,offs=1)--2393(line=100,offs=8))));$list(T2JAG($list(T2Pvar(x[9037])))))
        // T1IMPallx(g_ptype(202);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(2708(line=146,offs=1)--2762(line=149,offs=29)))
        // T1IMPallx(g_ptype(202)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_ptype(202);$list(@(vw[773],T2Pcst(sint)))))))
        let jsxtnm91 = function () { // timp: g_ptype(202)
          // I1CMP:start
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(2749(line=149,offs=16)--2754(line=149,offs=21))
          // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
          // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
          // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
          let jsxtnm89
          let jsxtnm88 // let
          { // let
            // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
            // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
            // XATS2JS_NODE_strn_print_2214
              // FJARGdarg($list(I1BNDcons(I1TNM(87);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(87)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
            jsxtnm88 = XATS2JS_NODE_strn_print
          } // endlet
          jsxtnm89 = jsxtnm88
          let jsxtnm90 = XATSDAPP(jsxtnm89(XATSSTRN("sint")))
          // I1CMP:return:I1Vtnm(I1TNM(90))
          return jsxtnm90
        } // endtimp(g_ptype(202))
        let jsxtnm92 = XATSDAPP(jsxtnm91())
        // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(2157(line=87,offs=14)--2162(line=87,offs=19))
        // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
        // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
        // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
        let jsxtnm95
        let jsxtnm94 // let
        { // let
          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
          // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
          // XATS2JS_NODE_strn_print_2214
            // FJARGdarg($list(I1BNDcons(I1TNM(93);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(93)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
          jsxtnm94 = XATS2JS_NODE_strn_print
        } // endlet
        jsxtnm95 = jsxtnm94
        let jsxtnm96 = XATSDAPP(jsxtnm95(XATSSTRN(")")))
        // I1CMP:return:I1Vtnm(I1TNM(96))
        return jsxtnm96
      } // endtimp(g_ptype(202))
      let jsxtnm98 = XATSDAPP(jsxtnm97())
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(4783(line=324,offs=1)--4788(line=324,offs=6))
      // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
      // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
      let jsxtnm101
      let jsxtnm100 // let
      { // let
        // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
        // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
        // XATS2JS_NODE_strn_print_2214
          // FJARGdarg($list(I1BNDcons(I1TNM(99);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(99)))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
        jsxtnm100 = XATS2JS_NODE_strn_print
      } // endlet
      jsxtnm101 = jsxtnm100
      let jsxtnm102 = XATSDAPP(jsxtnm101(XATSSTRN(":")))
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(4792(line=324,offs=10)--4799(line=324,offs=17))
      // I0Etapq(I0Ecst(g_psort(201)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(2346(line=97,offs=1)--2353(line=97,offs=8))));$list(T2JAG($list(T2Pvar(vw[5785])))))
      // T1IMPallx(g_psort(201);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(1831(line=74,offs=1)--1885(line=78,offs=22)))
      // T1IMPallx(g_psort(201)<$list(T2JAG($list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))>;I1Dtmpsub($list(@(tx[5760],T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))));I1Dimplmnt0(DIMPLone2(g_psort(201);$list(@(vw[772],T2Pvar(tx[5760])))))))
      let jsxtnm107 = function () { // timp: g_psort(201)
        // I1CMP:start
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(1866(line=78,offs=3)--1876(line=78,offs=13))
        // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
        // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
        // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
        let jsxtnm105
        let jsxtnm104 // let
        { // let
          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
          // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
          // XATS2JS_NODE_strn_print_2214
            // FJARGdarg($list(I1BNDcons(I1TNM(103);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(103)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
          jsxtnm104 = XATS2JS_NODE_strn_print
        } // endlet
        jsxtnm105 = jsxtnm104
        let jsxtnm106 = XATSDAPP(jsxtnm105(XATSSTRN("tbox")))
        // I1CMP:return:I1Vtnm(I1TNM(106))
        return jsxtnm106
      } // endtimp(g_psort(201))
      let jsxtnm108 = XATSDAPP(jsxtnm107())
      // I1CMP:return:I1Vtnm(I1TNM(108))
      return jsxtnm108
    } // endtimp(g_print(39))
    let jsxtnm110 = XATSDAPP(jsxtnm109(jsxtnm56))
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22073(line=1364,offs=20)--22085(line=1364,offs=32))
    // I0Etapq(I0Ecst(gs_print$sep(803)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
    // T1IMPallx(gs_print$sep(803);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(20753(line=1271,offs=1)--20791(line=1273,offs=20)))
    // T1IMPallx(gs_print$sep(803)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(803);$list()))))
    let jsxtnm112 = function () { // timp: gs_print$sep(803)
      // I1CMP:start
      let jsxtnm111 = XATSTUP0([])
      // I1CMP:return:I1Vtnm(I1TNM(111))
      return jsxtnm111
    } // endtimp(gs_print$sep(803))
    let jsxtnm113 = XATSDAPP(jsxtnm112())
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22090(line=1365,offs=3)--22097(line=1365,offs=10))
    // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x2[7034])))))
    // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
    // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(strn)))))))
    let jsxtnm117
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
    // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
    // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
    // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
    let jsxtnm116
    let jsxtnm115 // let
    { // let
      // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
      // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
      // XATS2JS_NODE_strn_print_2214
        // FJARGdarg($list(I1BNDcons(I1TNM(114);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(114)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
      jsxtnm115 = XATS2JS_NODE_strn_print
    } // endlet
    jsxtnm116 = jsxtnm115
    jsxtnm117 = jsxtnm116
    let jsxtnm118 = XATSDAPP(jsxtnm117(jsxtnm57))
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22107(line=1365,offs=20)--22119(line=1365,offs=32))
    // I0Etapq(I0Ecst(gs_print$sep(803)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
    // T1IMPallx(gs_print$sep(803);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(20753(line=1271,offs=1)--20791(line=1273,offs=20)))
    // T1IMPallx(gs_print$sep(803)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(803);$list()))))
    let jsxtnm120 = function () { // timp: gs_print$sep(803)
      // I1CMP:start
      let jsxtnm119 = XATSTUP0([])
      // I1CMP:return:I1Vtnm(I1TNM(119))
      return jsxtnm119
    } // endtimp(gs_print$sep(803))
    let jsxtnm121 = XATSDAPP(jsxtnm120())
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22124(line=1366,offs=3)--22131(line=1366,offs=10))
    // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x3[7035])))))
    // T1IMPallx(g_print(39);LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(2252(line=93,offs=1)--2519(line=114,offs=4)))
    // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))>;I1Dtmpsub($list(@(k[9038],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x[9039],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Papps(T2Pcst(jsm1);$list(T2Pvar(k[9038]),T2Pvar(x[9039])))))))))
    let jsxtnm279 = function (arg1) { // timp: g_print(39)
      let jsxtnm122 = arg1
      // I1CMP:start
      let jsxtnm278 // let
      { // let
        // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(2318(line=101,offs=1)--2338(line=101,offs=21))
        // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(x0;S2Etrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);S2Evar(S2Tbas(T2Bimpr(0;type));k[9038])),S2LAB(LABint(1);S2Evar(S2Tbas(T2Bimpr(2;vwtp));x[9039]))))))))
        // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(2339(line=102,offs=1)--2362(line=102,offs=24))
        // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(xs;S2Eapps(S2Ecst(S2Tfun1($list(S2Tbas(T2Bimpr(0;type)),S2Tbas(T2Bimpr(2;vwtp)));S2Tbas(T2Bimpr(1;tbox)));jsm1);$list(S2Evar(S2Tbas(T2Bimpr(0;type));k[9038]),S2Evar(S2Tbas(T2Bimpr(2;vwtp));x[9039])))))))
        // I1Dimplmnt0(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(2366(line=104,offs=1)--2399(line=105,offs=25)))
        // I1Dimplmnt0(DIMPLone2(gseq$sep(348);$list(@(xs[1071],T2Pcst(xs)),@(x0[1072],T2Pcst(x0))))):timp
        // I1Dimplmnt0(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(2400(line=106,offs=1)--2433(line=107,offs=25)))
        // I1Dimplmnt0(DIMPLone2(gseq$end(347);$list(@(xs[1069],T2Pcst(xs)),@(x0[1070],T2Pcst(x0))))):timp
        // I1Dimplmnt0(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(2434(line=108,offs=1)--2473(line=109,offs=31)))
        // I1Dimplmnt0(DIMPLone2(gseq$beg(346);$list(@(xs[1067],T2Pcst(xs)),@(x0[1068],T2Pcst(x0))))):timp
        // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(2489(line=113,offs=3)--2500(line=113,offs=14))
        // I0Etapq(I0Ecst(gseq_print1(1688)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gseq000_vt.sats)@(3999(line=245,offs=1)--4010(line=245,offs=12))));$list(T2JAG($list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Pvar(k[9038]),T2Pvar(x[9039]))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Pvar(k[9038])),S2LAB(LABint(1);T2Pvar(x[9039]))))))))
        // T1IMPallx(gseq_print1(1688);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4483(line=284,offs=1)--4800(line=309,offs=7)))
        // T1IMPallx(gseq_print1(1688)<$list(T2JAG($list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[7932],T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),@(x0[7933],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq_print1(1688);$list(@(xs[4222],T2Pvar(xs[7932])),@(x0[4223],T2Pvar(x0[7933])))))))
        let jsxtnm276 = function (arg1) { // timp: gseq_print1(1688)
          let jsxtnm123 = arg1
          // I1CMP:start
          let jsxtnm275 // let
          { // let
            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4534(line=289,offs=1)--4576(line=291,offs=21)))
            // I1VALDCL
            let jsxtnm130
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4543(line=290,offs=1)--4553(line=290,offs=11))
            // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
            // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
            // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
            let jsxtnm126
            let jsxtnm125 // let
            { // let
              // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
              // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
              // XATS2JS_NODE_strn_print_2214
                // FJARGdarg($list(I1BNDcons(I1TNM(124);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(124)))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
              jsxtnm125 = XATS2JS_NODE_strn_print
            } // endlet
            jsxtnm126 = jsxtnm125
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4557(line=291,offs=2)--4565(line=291,offs=10))
            // I0Etapq(I0Ecst(gseq$beg(346)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gseq000.sats)@(2390(line=130,offs=1)--2398(line=130,offs=9))));$list(T2JAG($list(T2Pvar(xs[7932]))),T2JAG($list(T2Pvar(x0[7933])))))
            // T1IMPallx(gseq$beg(346);LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(2434(line=108,offs=1)--2473(line=109,offs=31)))
            // T1IMPallx(gseq$beg(346)<$list(T2JAG($list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(k[9038],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x[9039],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq$beg(346);$list(@(xs[1067],T2Papps(T2Pcst(jsm1);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),@(x0[1068],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))
            let jsxtnm127 = function () { // timp: gseq$beg(346)
              // I1CMP:start
              // I1CMP:return:I1Vstr(...)
              return XATSSTRN("jshmap(")
            } // endtimp(gseq$beg(346))
            let jsxtnm128 = XATSDAPP(jsxtnm127())
            let jsxtnm129 = XATSDAPP(jsxtnm126(jsxtnm128))
            jsxtnm130 = jsxtnm129
            XATS000_patck(true)
            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4577(line=292,offs=1)--4751(line=306,offs=2)))
            // I1VALDCL
            let jsxtnm267
            let jsxtnm266 // let
            { // let
              // I1Dimplmnt0(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4624(line=297,offs=1)--4749(line=305,offs=2)))
              // I1Dimplmnt0(DIMPLone2(iforitm$work1(1450);$list(@(x0[3793],T2Pvar(x0[7933]))))):timp
              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4588(line=294,offs=1)--4601(line=294,offs=14))
              // I0Etapq(I0Ecst(gseq_iforitm1(1761)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gseq001_vt.sats)@(10899(line=588,offs=1)--10912(line=588,offs=14))));$list(T2JAG($list(T2Pvar(xs[7932]))),T2JAG($list(T2Pvar(x0[7933])))))
              // T1IMPallx(gseq_iforitm1(1761);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(9997(line=678,offs=1)--10202(line=695,offs=2)))
              // T1IMPallx(gseq_iforitm1(1761)<$list(T2JAG($list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[8067],T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),@(x0[8068],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq_iforitm1(1761);$list(@(xs[4405],T2Pvar(xs[8067])),@(x0[4406],T2Pvar(x0[8068])))))))
              let jsxtnm264 = function (arg1) { // timp: gseq_iforitm1(1761)
                let jsxtnm140 = arg1
                // I1CMP:start
                let jsxtnm263 // let
                { // let
                  // I1Dimplmnt0(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(10113(line=690,offs=1)--10200(line=694,offs=38)))
                  // I1Dimplmnt0(DIMPLone2(iforall$test1(1434);$list(@(x0[3777],T2Pvar(x0[8068]))))):timp
                  let jsxtnm262 // let
                  { // let
                    // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(10057(line=685,offs=1)--10093(line=687,offs=15)))
                    // I1VALDCL
                    let jsxtnm261
                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(10065(line=686,offs=1)--10078(line=686,offs=14))
                    // I0Etapq(I0Ecst(gseq_iforall1(1737)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gseq001_vt.sats)@(6529(line=346,offs=1)--6542(line=346,offs=14))));$list(T2JAG($list(T2Pvar(xs[8067]))),T2JAG($list(T2Pvar(x0[8068])))))
                    // T1IMPallx(gseq_iforall1(1737);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6019(line=377,offs=1)--6322(line=403,offs=2)))
                    // T1IMPallx(gseq_iforall1(1737)<$list(T2JAG($list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[8035],T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),@(x0[8036],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq_iforall1(1737);$list(@(xs[4357],T2Pvar(xs[8035])),@(x0[4358],T2Pvar(x0[8036])))))))
                    let jsxtnm259 = function (arg1) { // timp: gseq_iforall1(1737)
                      let jsxtnm146 = arg1
                      // I1CMP:start
                      let jsxtnm258 // let
                      { // let
                        // I1Dvardclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6087(line=384,offs=1)--6103(line=384,offs=17)))
                        // I1VARDCL
                        // I1CMP:start
                        // I1CMP:return:I1Vint(T_INT01(0))
                        let jsxtnm147 = XATSVAR1(XATSINT1(0))
                        // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6107(line=386,offs=1)--6125(line=386,offs=19)))
                        // I1VALDCL
                        let jsxtnm148
                        jsxtnm148 = XATSADDR(jsxtnm147)
                        XATS000_patck(true)
                        // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6129(line=388,offs=1)--6317(line=401,offs=2)))
                        // I1VALDCL
                        let jsxtnm257
                        let jsxtnm256 // let
                        { // let
                          // I1Dimplmnt0(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6175(line=393,offs=1)--6315(line=400,offs=37)))
                          // I1Dimplmnt0(DIMPLone2(forall$test1(1424);$list(@(x0[3767],T2Pvar(x0[8036]))))):timp
                          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6140(line=390,offs=1)--6152(line=390,offs=13))
                          // I0Etapq(I0Ecst(gseq_forall1(1721)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gseq001_vt.sats)@(3696(line=185,offs=1)--3708(line=185,offs=13))));$list(T2JAG($list(T2Pvar(xs[8035]))),T2JAG($list(T2Pvar(x0[8036])))))
                          // T1IMPallx(gseq_forall1(1721);LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(8244(line=513,offs=1)--8375(line=521,offs=35)))
                          // T1IMPallx(gseq_forall1(1721)<$list(T2JAG($list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(k[9106],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x[9107],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_forall1(1721);$list(@(xs[4325],T2Papps(T2Pcst(jsm1);$list(T2Pvar(k[9106]),T2Pvar(x[9107])))),@(x0[4326],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Pvar(k[9106])),S2LAB(LABint(1);T2Pvar(x[9107]))))))))))
                          let jsxtnm254 = function (arg1) { // timp: gseq_forall1(1721)
                            let jsxtnm157 = arg1
                            // I1CMP:start
                            // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(8315(line=519,offs=1)--8333(line=519,offs=19))
                            // I0Etapq(I0Ecst(jshmap_forall$f2un(2764)(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(4300(line=230,offs=1)--4318(line=230,offs=19))));$list(T2JAG($list())))
                            // T1IMPallx(jshmap_forall$f2un(2764);LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(8379(line=523,offs=1)--8600(line=538,offs=2)))
                            // T1IMPallx(jshmap_forall$f2un(2764)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(jshmap_forall$f2un(2764);$list()))))
                            let jsxtnm164 = function (arg1, arg2) { // timp: jshmap_forall$f2un(2764)
                              let jsxtnm158 = arg1
                              let jsxtnm159 = arg2
                              // I1CMP:start
                              let jsxtnm163 // let
                              { // let
                                // I1Dextern(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(8485(line=531,offs=1)--8598(line=537,offs=37)))
                                // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(8493(line=532,offs=1)--8598(line=537,offs=37))
                                // I1FUNDCL: XATS2JS_jshmap_forall$f2un(5508)
                                // XATS2JS_jshmap_forall$f2un_8496
                                  // FJARGdarg($list(I1BNDcons(I1TNM(160);I0Pvar(map(5509));$list(@(map(5509),I1Vtnm(I1TNM(160))))),I1BNDcons(I1TNM(161);I0Pvar(test(5510));$list(@(test(5510),I1Vtnm(I1TNM(161)))))))
                                  // I1CMP:start
                                  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_jshmap_forall$f2un);G1Nlist($list()))// I1CMP:return
                                let jsxtnm162 = XATSDAPP(XATS2JS_jshmap_forall$f2un(jsxtnm158, jsxtnm159))
                                jsxtnm163 = jsxtnm162
                              } // endlet
                              // I1CMP:return:I1Vtnm(I1TNM(163))
                              return jsxtnm163
                            } // endtimp(jshmap_forall$f2un(2764))
                            let jsxtnm252 = function (arg1, arg2) { // lam0(T_LAM(0))
                              let jsxtnm165 = arg1
                              let jsxtnm166 = arg2
                              // I1CMP:start
                              // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(8355(line=521,offs=15)--8367(line=521,offs=27))
                              // I0Etapq(I0Ecst(forall$test1(1424)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas001_vt.sats)@(2148(line=110,offs=1)--2160(line=110,offs=13))));$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Pvar(k[9106])),S2LAB(LABint(1);T2Pvar(x[9107]))))))))
                              // T1IMPallx(forall$test1(1424);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6175(line=393,offs=1)--6315(line=400,offs=37)))
                              // T1IMPallx(forall$test1(1424)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[8035],T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),@(x0[8036],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(forall$test1(1424);$list(@(x0[3767],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))
                              let jsxtnm249 = function (arg1) { // timp: forall$test1(1424)
                                let jsxtnm167 = arg1
                                // I1CMP:start
                                let jsxtnm248 // let
                                { // let
                                  // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6249(line=399,offs=1)--6278(line=399,offs=30)))
                                  // I1VALDCL
                                  let jsxtnm172
                                  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6262(line=399,offs=14)--6270(line=399,offs=22))
                                  // I0Etapq(I0Ecst(p2tr_get(2312)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/unsfx00.sats)@(2573(line=124,offs=1)--2581(line=124,offs=9))));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
                                  // T1IMPallx(p2tr_get(2312);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/unsfx00.dats)@(197(line=15,offs=1)--245(line=18,offs=17)))
                                  // T1IMPallx(p2tr_get(2312)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(a[5913],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(p2tr_get(2312);$list(@(a[5712],T2Pvar(a[5913])))))))
                                  let jsxtnm170 = function (arg1) { // timp: p2tr_get(2312)
                                    let jsxtnm168 = arg1
                                    // I1CMP:start
                                    let jsxtnm169 = XATS000_dp2tr(jsxtnm168)
                                    // I1CMP:return:I1Vtnm(I1TNM(169))
                                    return jsxtnm169
                                  } // endtimp(p2tr_get(2312))
                                  let jsxtnm171 = XATSDAPP(jsxtnm170(jsxtnm148))
                                  jsxtnm172 = jsxtnm171
                                  XATS000_patck(true)
                                  // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6279(line=400,offs=1)--6313(line=400,offs=35)))
                                  // I1VALDCL
                                  let jsxtnm235
                                  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6288(line=400,offs=10)--6301(line=400,offs=23))
                                  // I0Etapq(I0Ecst(iforall$test1(1434)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas001_vt.sats)@(2611(line=148,offs=1)--2624(line=148,offs=14))));$list(T2JAG($list(T2Pvar(x0[8036])))))
                                  // T1IMPallx(iforall$test1(1434);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(10113(line=690,offs=1)--10200(line=694,offs=38)))
                                  // T1IMPallx(iforall$test1(1434)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[8067],T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),@(x0[8068],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(iforall$test1(1434);$list(@(x0[3777],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))
                                  let jsxtnm233 = function (arg1, arg2) { // timp: iforall$test1(1434)
                                    let jsxtnm173 = arg1
                                    let jsxtnm174 = arg2
                                    // I1CMP:start
                                    let jsxtnm232 // let
                                    { // let
                                      // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(10154(line=693,offs=1)--10188(line=694,offs=26)))
                                      // I1VALDCL
                                      let jsxtnm231
                                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(10163(line=694,offs=1)--10176(line=694,offs=14))
                                      // I0Etapq(I0Ecst(iforitm$work1(1450)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas001_vt.sats)@(3334(line=206,offs=1)--3347(line=206,offs=14))));$list(T2JAG($list(T2Pvar(x0[8068])))))
                                      // T1IMPallx(iforitm$work1(1450);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4624(line=297,offs=1)--4749(line=305,offs=2)))
                                      // T1IMPallx(iforitm$work1(1450)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[7932],T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),@(x0[7933],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(iforitm$work1(1450);$list(@(x0[3793],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))
                                      let jsxtnm229 = function (arg1, arg2) { // timp: iforitm$work1(1450)
                                        let jsxtnm175 = arg1
                                        let jsxtnm176 = arg2
                                        // I1CMP:start
                                        let jsxtnm228 // let
                                        { // let
                                          // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4691(line=302,offs=1)--4747(line=304,offs=33)))
                                          // I1VALDCL
                                          let jsxtnm192
                                          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4706(line=303,offs=7)--4707(line=303,offs=8))
                                          // I0Etapq(I0Ecst(sint_gt$sint(928)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gint000.sats)@(2103(line=87,offs=1)--2115(line=87,offs=13))));$list(T2JAG($list())))
                                          // T1IMPallx(sint_gt$sint(928);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1777(line=70,offs=1)--1938(line=82,offs=2)))
                                          // T1IMPallx(sint_gt$sint(928)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_gt$sint(928);$list()))))
                                          let jsxtnm183 = function (arg1, arg2) { // timp: sint_gt$sint(928)
                                            let jsxtnm177 = arg1
                                            let jsxtnm178 = arg2
                                            // I1CMP:start
                                            let jsxtnm182 // let
                                            { // let
                                              // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1865(line=78,offs=1)--1936(line=81,offs=39)))
                                              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1873(line=79,offs=1)--1936(line=81,offs=39))
                                              // I1FUNDCL: XATS2JS_sint_gt$sint(4913)
                                              // XATS2JS_sint_gt$sint_1876
                                                // FJARGdarg($list(I1BNDcons(I1TNM(179);I0Pvar(i1(4914));$list(@(i1(4914),I1Vtnm(I1TNM(179))))),I1BNDcons(I1TNM(180);I0Pvar(i2(4915));$list(@(i2(4915),I1Vtnm(I1TNM(180)))))))
                                                // I1CMP:start
                                                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_gt$sint);G1Nlist($list()))// I1CMP:return
                                              let jsxtnm181 = XATSDAPP(XATS2JS_sint_gt$sint(jsxtnm177, jsxtnm178))
                                              jsxtnm182 = jsxtnm181
                                            } // endlet
                                            // I1CMP:return:I1Vtnm(I1TNM(182))
                                            return jsxtnm182
                                          } // endtimp(sint_gt$sint(928))
                                          let jsxtnm184 = XATSDAPP(jsxtnm183(jsxtnm175, XATSINT1(0)))
                                          let jsxtnm191 // ift
                                          if (jsxtnm184) // ift
                                          {
                                            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4715(line=304,offs=1)--4725(line=304,offs=11))
                                            // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                                            // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                                            // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                                            let jsxtnm187
                                            let jsxtnm186 // let
                                            { // let
                                              // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                                              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                                              // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                                              // XATS2JS_NODE_strn_print_2214
                                                // FJARGdarg($list(I1BNDcons(I1TNM(185);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(185)))))))
                                                // I1CMP:start
                                                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                                              jsxtnm186 = XATS2JS_NODE_strn_print
                                            } // endlet
                                            jsxtnm187 = jsxtnm186
                                            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4728(line=304,offs=14)--4736(line=304,offs=22))
                                            // I0Etapq(I0Ecst(gseq$sep(348)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gseq000.sats)@(2474(line=138,offs=1)--2482(line=138,offs=9))));$list(T2JAG($list(T2Pvar(xs[7932]))),T2JAG($list(T2Pvar(x0[7933])))))
                                            // T1IMPallx(gseq$sep(348);LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(2366(line=104,offs=1)--2399(line=105,offs=25)))
                                            // T1IMPallx(gseq$sep(348)<$list(T2JAG($list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(k[9038],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x[9039],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq$sep(348);$list(@(xs[1071],T2Papps(T2Pcst(jsm1);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),@(x0[1072],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))
                                            let jsxtnm188 = function () { // timp: gseq$sep(348)
                                              // I1CMP:start
                                              // I1CMP:return:I1Vstr(...)
                                              return XATSSTRN(",")
                                            } // endtimp(gseq$sep(348))
                                            let jsxtnm189 = XATSDAPP(jsxtnm188())
                                            let jsxtnm190 = XATSDAPP(jsxtnm187(jsxtnm189))
                                            jsxtnm191 = jsxtnm190
                                          } else {
                                          } // end(if)
                                          jsxtnm192 = jsxtnm191
                                          XATS000_patck(true)
                                          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4665(line=300,offs=3)--4673(line=300,offs=11))
                                          // I0Etapq(I0Ecst(g_print1(1413)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas000_vt.sats)@(2117(line=109,offs=1)--2125(line=109,offs=9))));$list(T2JAG($list(T2Pvar(x0[7933])))))
                                          // T1IMPallx(g_print1(1413);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1714(line=64,offs=1)--1932(line=82,offs=4)))
                                          // T1IMPallx(g_print1(1413)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(a0[8495],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(a1[8496],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_print1(1413);$list(@(x0[3751],T2Papps(T2Pcst(t0up_vt);$list(T2Pvar(a0[8495]),T2Pvar(a1[8496])))))))))
                                          let jsxtnm226 = function (arg1) { // timp: g_print1(1413)
                                            let jsxtnm193 = arg1
                                            // I1CMP:start
                                            let jsxtnm225 // let
                                            { // let
                                              // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1786(line=72,offs=1)--1816(line=74,offs=20)))
                                              // I1VALDCL
                                              let jsxtnm198
                                              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1799(line=74,offs=3)--1809(line=74,offs=13))
                                              // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                                              // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                                              // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                                              let jsxtnm196
                                              let jsxtnm195 // let
                                              { // let
                                                // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                                                // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                                                // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                                                // XATS2JS_NODE_strn_print_2214
                                                  // FJARGdarg($list(I1BNDcons(I1TNM(194);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(194)))))))
                                                  // I1CMP:start
                                                  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                                                jsxtnm195 = XATS2JS_NODE_strn_print
                                              } // endlet
                                              jsxtnm196 = jsxtnm195
                                              let jsxtnm197 = XATSDAPP(jsxtnm196(XATSSTRN("@(")))
                                              jsxtnm198 = jsxtnm197
                                              XATS000_patck(true)
                                              // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1820(line=76,offs=1)--1848(line=76,offs=29)))
                                              // I1VALDCL
                                              let jsxtnm206
                                              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1829(line=76,offs=10)--1837(line=76,offs=18))
                                              // I0Etapq(I0Ecst(g_print1(1413)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas000_vt.sats)@(2117(line=109,offs=1)--2125(line=109,offs=9))));$list(T2JAG($list(T2Pvar(a0[8495])))))
                                              // T1IMPallx(g_print1(1413);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1635(line=59,offs=1)--1680(line=61,offs=27)))
                                              // T1IMPallx(g_print1(1413)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8832],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_print1(1413);$list(@(x0[3751],T2Pvar(x0[8832])))))))
                                              let jsxtnm203
                                              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1669(line=61,offs=16)--1676(line=61,offs=23))
                                              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x0[8832])))))
                                              // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                                              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(strn)))))))
                                              let jsxtnm202
                                              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                                              // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                                              // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                                              // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                                              let jsxtnm201
                                              let jsxtnm200 // let
                                              { // let
                                                // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                                                // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                                                // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                                                // XATS2JS_NODE_strn_print_2214
                                                  // FJARGdarg($list(I1BNDcons(I1TNM(199);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(199)))))))
                                                  // I1CMP:start
                                                  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                                                jsxtnm200 = XATS2JS_NODE_strn_print
                                              } // endlet
                                              jsxtnm201 = jsxtnm200
                                              jsxtnm202 = jsxtnm201
                                              jsxtnm203 = jsxtnm202
                                              let jsxtnm204 = XATSPFLT(jsxtnm193[0])
                                              let jsxtnm205 = XATSDAPP(jsxtnm203(jsxtnm204))
                                              jsxtnm206 = jsxtnm205
                                              XATS000_patck(true)
                                              // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1849(line=77,offs=1)--1868(line=77,offs=20)))
                                              // I1VALDCL
                                              let jsxtnm211
                                              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1858(line=77,offs=10)--1863(line=77,offs=15))
                                              // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                                              // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                                              // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                                              let jsxtnm209
                                              let jsxtnm208 // let
                                              { // let
                                                // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                                                // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                                                // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                                                // XATS2JS_NODE_strn_print_2214
                                                  // FJARGdarg($list(I1BNDcons(I1TNM(207);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(207)))))))
                                                  // I1CMP:start
                                                  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                                                jsxtnm208 = XATS2JS_NODE_strn_print
                                              } // endlet
                                              jsxtnm209 = jsxtnm208
                                              let jsxtnm210 = XATSDAPP(jsxtnm209(XATSSTRN(",")))
                                              jsxtnm211 = jsxtnm210
                                              XATS000_patck(true)
                                              // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1869(line=78,offs=1)--1897(line=78,offs=29)))
                                              // I1VALDCL
                                              let jsxtnm219
                                              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1878(line=78,offs=10)--1886(line=78,offs=18))
                                              // I0Etapq(I0Ecst(g_print1(1413)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas000_vt.sats)@(2117(line=109,offs=1)--2125(line=109,offs=9))));$list(T2JAG($list(T2Pvar(a1[8496])))))
                                              // T1IMPallx(g_print1(1413);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1635(line=59,offs=1)--1680(line=61,offs=27)))
                                              // T1IMPallx(g_print1(1413)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8832],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_print1(1413);$list(@(x0[3751],T2Pvar(x0[8832])))))))
                                              let jsxtnm216
                                              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1669(line=61,offs=16)--1676(line=61,offs=23))
                                              // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x0[8832])))))
                                              // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gint000.dats)@(2286(line=96,offs=1)--2321(line=97,offs=27)))
                                              // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(si)))))))
                                              let jsxtnm215
                                              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gint000.dats)@(2309(line=97,offs=15)--2319(line=97,offs=25))
                                              // I0Etapq(I0Ecst(sint_print(922)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gint000.sats)@(1506(line=49,offs=1)--1516(line=49,offs=11))));$list(T2JAG($list())))
                                              // T1IMPallx(sint_print(922);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(1430(line=40,offs=1)--1551(line=48,offs=2)))
                                              // T1IMPallx(sint_print(922)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_print(922);$list()))))
                                              let jsxtnm214
                                              let jsxtnm213 // let
                                              { // let
                                                // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(1486(line=45,offs=1)--1549(line=47,offs=52)))
                                                // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(1494(line=46,offs=1)--1549(line=47,offs=52))
                                                // I1FUNDCL: XATS2JS_NODE_sint_print(5220)
                                                // XATS2JS_NODE_sint_print_1497
                                                  // FJARGdarg($list(I1BNDcons(I1TNM(212);I0Pvar(i0(5221));$list(@(i0(5221),I1Vtnm(I1TNM(212)))))))
                                                  // I1CMP:start
                                                  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_sint_print);G1Nlist($list()))// I1CMP:return
                                                jsxtnm213 = XATS2JS_NODE_sint_print
                                              } // endlet
                                              jsxtnm214 = jsxtnm213
                                              jsxtnm215 = jsxtnm214
                                              jsxtnm216 = jsxtnm215
                                              let jsxtnm217 = XATSPFLT(jsxtnm193[1])
                                              let jsxtnm218 = XATSDAPP(jsxtnm216(jsxtnm217))
                                              jsxtnm219 = jsxtnm218
                                              XATS000_patck(true)
                                              // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1901(line=80,offs=1)--1925(line=80,offs=25)))
                                              // I1VALDCL
                                              let jsxtnm224
                                              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1910(line=80,offs=10)--1920(line=80,offs=20))
                                              // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                                              // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                                              // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                                              let jsxtnm222
                                              let jsxtnm221 // let
                                              { // let
                                                // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                                                // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                                                // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                                                // XATS2JS_NODE_strn_print_2214
                                                  // FJARGdarg($list(I1BNDcons(I1TNM(220);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(220)))))))
                                                  // I1CMP:start
                                                  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                                                jsxtnm221 = XATS2JS_NODE_strn_print
                                              } // endlet
                                              jsxtnm222 = jsxtnm221
                                              let jsxtnm223 = XATSDAPP(jsxtnm222(XATSSTRN(")")))
                                              jsxtnm224 = jsxtnm223
                                              XATS000_patck(true)
                                              jsxtnm225 = XATSVOID
                                            } // endlet
                                            // I1CMP:return:I1Vtnm(I1TNM(225))
                                            return jsxtnm225
                                          } // endtimp(g_print1(1413))
                                          let jsxtnm227 = XATSDAPP(jsxtnm226(jsxtnm176))
                                          jsxtnm228 = jsxtnm227
                                        } // endlet
                                        // I1CMP:return:I1Vtnm(I1TNM(228))
                                        return jsxtnm228
                                      } // endtimp(iforitm$work1(1450))
                                      let jsxtnm230 = XATSDAPP(jsxtnm229(jsxtnm173, jsxtnm174))
                                      jsxtnm231 = jsxtnm230
                                      XATS000_patck(true)
                                      jsxtnm232 = XATSBOOL(true)
                                    } // endlet
                                    // I1CMP:return:I1Vtnm(I1TNM(232))
                                    return jsxtnm232
                                  } // endtimp(iforall$test1(1434))
                                  let jsxtnm234 = XATSDAPP(jsxtnm233(jsxtnm172, jsxtnm167))
                                  jsxtnm235 = jsxtnm234
                                  XATS000_patck(true)
                                  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6213(line=396,offs=5)--6221(line=396,offs=13))
                                  // I0Etapq(I0Ecst(p2tr_set(2313)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/unsfx00.sats)@(2611(line=127,offs=1)--2619(line=127,offs=9))));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
                                  // T1IMPallx(p2tr_set(2313);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/unsfx00.dats)@(246(line=19,offs=1)--305(line=22,offs=27)))
                                  // T1IMPallx(p2tr_set(2313)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(a[5914],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(p2tr_set(2313);$list(@(a[5713],T2Pvar(a[5914])))))))
                                  let jsxtnm238 = function (arg1, arg2) { // timp: p2tr_set(2313)
                                    let jsxtnm236 = arg1
                                    let jsxtnm237 = arg2
                                    // I1CMP:start
                                    XATS000_assgn(jsxtnm236, jsxtnm237)
                                    // I1CMP:return:I1V000()
                                    return XATSVOID
                                  } // endtimp(p2tr_set(2313))
                                  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6232(line=396,offs=24)--6233(line=396,offs=25))
                                  // I0Etapq(I0Ecst(sint_add$sint(936)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gint000.sats)@(3081(line=142,offs=1)--3094(line=142,offs=14))));$list(T2JAG($list())))
                                  // T1IMPallx(sint_add$sint(936);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
                                  // T1IMPallx(sint_add$sint(936)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(936);$list()))))
                                  let jsxtnm245 = function (arg1, arg2) { // timp: sint_add$sint(936)
                                    let jsxtnm239 = arg1
                                    let jsxtnm240 = arg2
                                    // I1CMP:start
                                    let jsxtnm244 // let
                                    { // let
                                      // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
                                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
                                      // I1FUNDCL: XATS2JS_sint_add$sint(4938)
                                      // XATS2JS_sint_add$sint_2778
                                        // FJARGdarg($list(I1BNDcons(I1TNM(241);I0Pvar(i1(4939));$list(@(i1(4939),I1Vtnm(I1TNM(241))))),I1BNDcons(I1TNM(242);I0Pvar(i2(4940));$list(@(i2(4940),I1Vtnm(I1TNM(242)))))))
                                        // I1CMP:start
                                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list()))// I1CMP:return
                                      let jsxtnm243 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm239, jsxtnm240))
                                      jsxtnm244 = jsxtnm243
                                    } // endlet
                                    // I1CMP:return:I1Vtnm(I1TNM(244))
                                    return jsxtnm244
                                  } // endtimp(sint_add$sint(936))
                                  let jsxtnm246 = XATSDAPP(jsxtnm245(jsxtnm172, XATSINT1(1)))
                                  let jsxtnm247 = XATSDAPP(jsxtnm238(jsxtnm148, jsxtnm246))
                                  jsxtnm248 = jsxtnm235
                                } // endlet
                                // I1CMP:return:I1Vtnm(I1TNM(248))
                                return jsxtnm248
                              } // endtimp(forall$test1(1424))
                              let jsxtnm250 = XATSTUP1(XATSTRCD(0), [jsxtnm165, jsxtnm166])
                              let jsxtnm251 = XATSDAPP(jsxtnm249(jsxtnm250))
                              // I1CMP:return:I1Vtnm(I1TNM(251))
                              return jsxtnm251
                            } // endfun(lam0)
                            let jsxtnm253 = XATSDAPP(jsxtnm164(jsxtnm157, jsxtnm252))
                            // I1CMP:return:I1Vtnm(I1TNM(253))
                            return jsxtnm253
                          } // endtimp(gseq_forall1(1721))
                          let jsxtnm255 = XATSDAPP(jsxtnm254(jsxtnm146))
                          jsxtnm256 = jsxtnm255
                        } // endlet
                        jsxtnm257 = jsxtnm256
                        XATS000_patck(true)
                        jsxtnm258 = jsxtnm257
                      } // endlet
                      // I1CMP:return:I1Vtnm(I1TNM(258))
                      return jsxtnm258
                    } // endtimp(gseq_iforall1(1737))
                    let jsxtnm260 = XATSDAPP(jsxtnm259(jsxtnm140))
                    jsxtnm261 = jsxtnm260
                    XATS000_patck(true)
                    jsxtnm262 = XATSVOID
                  } // endlet
                  jsxtnm263 = jsxtnm262
                } // endlet
                // I1CMP:return:I1Vtnm(I1TNM(263))
                return jsxtnm263
              } // endtimp(gseq_iforitm1(1761))
              let jsxtnm265 = XATSDAPP(jsxtnm264(jsxtnm123))
              jsxtnm266 = jsxtnm265
            } // endlet
            jsxtnm267 = jsxtnm266
            XATS000_patck(true)
            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4752(line=307,offs=1)--4793(line=308,offs=33)))
            // I1VALDCL
            let jsxtnm274
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4761(line=308,offs=1)--4771(line=308,offs=11))
            // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
            // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
            // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
            let jsxtnm270
            let jsxtnm269 // let
            { // let
              // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
              // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
              // XATS2JS_NODE_strn_print_2214
                // FJARGdarg($list(I1BNDcons(I1TNM(268);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(268)))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
              jsxtnm269 = XATS2JS_NODE_strn_print
            } // endlet
            jsxtnm270 = jsxtnm269
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4774(line=308,offs=14)--4782(line=308,offs=22))
            // I0Etapq(I0Ecst(gseq$end(347)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gseq000.sats)@(2432(line=134,offs=1)--2440(line=134,offs=9))));$list(T2JAG($list(T2Pvar(xs[7932]))),T2JAG($list(T2Pvar(x0[7933])))))
            // T1IMPallx(gseq$end(347);LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(2400(line=106,offs=1)--2433(line=107,offs=25)))
            // T1IMPallx(gseq$end(347)<$list(T2JAG($list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(k[9038],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x[9039],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq$end(347);$list(@(xs[1069],T2Papps(T2Pcst(jsm1);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),@(x0[1070],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))
            let jsxtnm271 = function () { // timp: gseq$end(347)
              // I1CMP:start
              // I1CMP:return:I1Vstr(...)
              return XATSSTRN(")")
            } // endtimp(gseq$end(347))
            let jsxtnm272 = XATSDAPP(jsxtnm271())
            let jsxtnm273 = XATSDAPP(jsxtnm270(jsxtnm272))
            jsxtnm274 = jsxtnm273
            XATS000_patck(true)
            jsxtnm275 = XATSVOID
          } // endlet
          // I1CMP:return:I1Vtnm(I1TNM(275))
          return jsxtnm275
        } // endtimp(gseq_print1(1688))
        let jsxtnm277 = XATSDAPP(jsxtnm276(jsxtnm122))
        jsxtnm278 = jsxtnm277
      } // endlet
      // I1CMP:return:I1Vtnm(I1TNM(278))
      return jsxtnm278
    } // endtimp(g_print(39))
    let jsxtnm280 = XATSDAPP(jsxtnm279(jsxtnm58))
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22141(line=1366,offs=20)--22153(line=1366,offs=32))
    // I0Etapq(I0Ecst(gs_print$sep(803)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
    // T1IMPallx(gs_print$sep(803);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(20753(line=1271,offs=1)--20791(line=1273,offs=20)))
    // T1IMPallx(gs_print$sep(803)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(803);$list()))))
    let jsxtnm282 = function () { // timp: gs_print$sep(803)
      // I1CMP:start
      let jsxtnm281 = XATSTUP0([])
      // I1CMP:return:I1Vtnm(I1TNM(281))
      return jsxtnm281
    } // endtimp(gs_print$sep(803))
    let jsxtnm283 = XATSDAPP(jsxtnm282())
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22158(line=1367,offs=3)--22165(line=1367,offs=10))
    // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x4[7036])))))
    // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
    // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(strn)))))))
    let jsxtnm287
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
    // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
    // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
    // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
    let jsxtnm286
    let jsxtnm285 // let
    { // let
      // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
      // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
      // XATS2JS_NODE_strn_print_2214
        // FJARGdarg($list(I1BNDcons(I1TNM(284);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(284)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
      jsxtnm285 = XATS2JS_NODE_strn_print
    } // endlet
    jsxtnm286 = jsxtnm285
    jsxtnm287 = jsxtnm286
    let jsxtnm288 = XATSDAPP(jsxtnm287(jsxtnm59))
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22175(line=1367,offs=20)--22187(line=1367,offs=32))
    // I0Etapq(I0Ecst(gs_print$end(804)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
    // T1IMPallx(gs_print$end(804);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(20792(line=1274,offs=1)--20830(line=1276,offs=20)))
    // T1IMPallx(gs_print$end(804)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(804);$list()))))
    let jsxtnm290 = function () { // timp: gs_print$end(804)
      // I1CMP:start
      let jsxtnm289 = XATSTUP0([])
      // I1CMP:return:I1Vtnm(I1TNM(289))
      return jsxtnm289
    } // endtimp(gs_print$end(804))
    let jsxtnm291 = XATSDAPP(jsxtnm290())
    jsxtnm292 = jsxtnm291
  } // endlet
  // I1CMP:return:I1Vtnm(I1TNM(292))
  return jsxtnm292
} // endtimp(gs_print_a5(810))
// LCSRCsome1(test02_jshmap0.dats)@(578(line=34,offs=11)--582(line=34,offs=15))
// I0Etapq(I0Ecst(g_type(196)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(1861(line=63,offs=1)--1867(line=63,offs=7))));$list(T2JAG($list())))
// T1IMPallx(g_type(196);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(1498(line=45,offs=1)--1558(line=49,offs=22)))
// T1IMPallx(g_type(196)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_type(196);$list()))))
let jsxtnm297 = function (arg1) { // timp: g_type(196)
  let jsxtnm294 = arg1
  // I1CMP:start
  let jsxtnm295 = XATSCAPP("unit", [0])
  let jsxtnm296 = XATSCAST("castxy_1839", [jsxtnm295])
  // I1CMP:return:I1Vtnm(I1TNM(296))
  return jsxtnm296
} // endtimp(g_type(196))
let jsxtnm298 = XATSDAPP(jsxtnm297(jsxtnm54))
let jsxtnm299 = XATSDAPP(jsxtnm293(XATSSTRN("map1("), jsxtnm298, XATSSTRN(") = "), jsxtnm54, XATSSTRN("\n")))
jsxtnm300 = jsxtnm299
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(test02_jshmap0.dats)@(636(line=38,offs=1)--674(line=39,offs=28)))
// I1VALDCL
let jsxtnm406
// LCSRCsome1(test02_jshmap0.dats)@(651(line=39,offs=5)--674(line=39,offs=28))
// I0Etapq(I0Ecst(jshmap_listize(2761)(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(3756(line=194,offs=1)--3770(line=194,offs=15))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
// T1IMPallx(jshmap_listize(2761);LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(8647(line=543,offs=1)--8753(line=549,offs=28)))
// T1IMPallx(jshmap_listize(2761)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(k[9110],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x[9111],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(jshmap_listize(2761);$list(@(k[9056],T2Pvar(k[9110])),@(x[9057],T2Pvar(x[9111])))))))
let jsxtnm404 = function (arg1) { // timp: jshmap_listize(2761)
  let jsxtnm301 = arg1
  // I1CMP:start
  // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(8702(line=548,offs=1)--8718(line=548,offs=17))
  // I0Etapq(I0Ecst(list_vt_reverse0(2049)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/list000_vt.sats)@(4847(line=282,offs=1)--4863(line=282,offs=17))));$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Pvar(k[9110])),S2LAB(LABint(1);T2Pvar(x[9111]))))))))
  // T1IMPallx(list_vt_reverse0(2049);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/list000_vt.dats)@(7234(line=490,offs=1)--7321(line=493,offs=46)))
  // T1IMPallx(list_vt_reverse0(2049)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(a[8557],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(list_vt_reverse0(2049);$list(@(x0[5269],T2Pvar(a[8557])))))))
  let jsxtnm320 = function (arg1) { // timp: list_vt_reverse0(2049)
    let jsxtnm302 = arg1
    // I1CMP:start
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/list000_vt.dats)@(7276(line=493,offs=1)--7293(line=493,offs=18))
    // I0Etapq(I0Ecst(list_vt_rappend00(2052)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/list000_vt.sats)@(5228(line=308,offs=1)--5245(line=308,offs=18))));$list(T2JAG($list(T2Pvar(a[8557])))))
    // T1IMPallx(list_vt_rappend00(2052);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/list000_vt.dats)@(6564(line=441,offs=1)--6973(line=473,offs=2)))
    // T1IMPallx(list_vt_rappend00(2052)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(a[8553],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(list_vt_rappend00(2052);$list(@(x0[5276],T2Pvar(a[8553])))))))
    let jsxtnm317 = function (arg1, arg2) { // timp: list_vt_rappend00(2052)
      let jsxtnm303 = arg1
      let jsxtnm304 = arg2
      // I1CMP:start
      let jsxtnm316 // let
      { // let
        // I1Dfundclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/list000_vt.dats)@(6643(line=449,offs=1)--6934(line=471,offs=2)))
        // I1FUNDCL
        function loop_6646(arg1, arg2)
        { // fun
          let jsxtnm305 = arg1
          let jsxtnm306 = arg2
          // I1CMP:start
          let jsxtnm314 // cas
          do {
            // { // cls
            // I1GPTpat(I1BNDcons(I1TNM(307);I0Pfree(I0Pdapp(I0Pcon(list_vt_nil(10));$list()));$list()))
            if (XATS000_ctgeq(jsxtnm305, XATSCTAG("list_vt_nil",0))) { // gpt
              let jsxtnm307 = jsxtnm305
              jsxtnm314 = jsxtnm306
              break // cls
            } // gpt
            // } // cls
            // { // cls
            // I1GPTpat(I1BNDcons(I1TNM(308);I0Pflat(I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pany(),I0Pany())));$list()))
            if (XATS000_ctgeq(jsxtnm305, XATSCTAG("list_vt_cons",1))) { // gpt
              let jsxtnm308 = jsxtnm305
              let jsxtnm313 // let
              { // let
                // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/list000_vt.dats)@(6817(line=465,offs=3)--6832(line=465,offs=18)))
                // I1VALDCL
                let jsxtnm310
                let jsxtnm309 = XATSPCON(jsxtnm305, 1)
                jsxtnm310 = jsxtnm309
                XATS000_patck(true)
                // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/list000_vt.dats)@(6835(line=466,offs=3)--6857(line=466,offs=25)))
                // I1VALDCL
                let jsxtnm311
                XATS000_assgn(XATSLPCN(1, jsxtnm305), jsxtnm306)
                jsxtnm311 = XATSVOID
                XATS000_patck(true)
                XATS000_fold(jsxtnm305)
                let jsxtnm312 = XATSDAPP(loop_6646(jsxtnm310, jsxtnm305))
                jsxtnm313 = jsxtnm312
              } // endlet
              jsxtnm314 = jsxtnm313
              break // cls
            } // gpt
            // } // cls
            XATS000_cfail()
          } while (false) // end-of(do)
          // I1CMP:return:I1Vtnm(I1TNM(314))
          return jsxtnm314
        } // endfun(loop_6646)
        let jsxtnm315 = XATSDAPP(loop_6646(jsxtnm303, jsxtnm304))
        jsxtnm316 = jsxtnm315
      } // endlet
      // I1CMP:return:I1Vtnm(I1TNM(316))
      return jsxtnm316
    } // endtimp(list_vt_rappend00(2052))
    let jsxtnm318 = XATSCAPP("list_vt_nil", [0])
    let jsxtnm319 = XATSDAPP(jsxtnm317(jsxtnm302, jsxtnm318))
    // I1CMP:return:I1Vtnm(I1TNM(319))
    return jsxtnm319
  } // endtimp(list_vt_reverse0(2049))
  // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(8727(line=549,offs=2)--8742(line=549,offs=17))
  // I0Etapq(I0Ecst(jshmap_rlistize(2763)(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(4047(line=215,offs=1)--4062(line=215,offs=16))));$list(T2JAG($list(T2Pvar(k[9110]))),T2JAG($list(T2Pvar(x[9111])))))
  // T1IMPallx(jshmap_rlistize(2763);LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(8757(line=551,offs=1)--8853(line=557,offs=40)))
  // T1IMPallx(jshmap_rlistize(2763)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(k[9112],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x[9113],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(jshmap_rlistize(2763);$list(@(k[9060],T2Pvar(k[9112])),@(x[9061],T2Pvar(x[9113])))))))
  let jsxtnm401 = function (arg1) { // timp: jshmap_rlistize(2763)
    let jsxtnm321 = arg1
    // I1CMP:start
    // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(8816(line=557,offs=3)--8830(line=557,offs=17))
    // I0Etapq(I0Ecst(gseq_rlistize1(1715)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gseq001_vt.sats)@(2583(line=117,offs=1)--2597(line=117,offs=15))));$list(T2JAG($list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Pvar(k[9112]),T2Pvar(x[9113]))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Pvar(k[9112])),S2LAB(LABint(1);T2Pvar(x[9113]))))))))
    // T1IMPallx(gseq_rlistize1(1715);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(3083(line=161,offs=1)--3312(line=178,offs=2)))
    // T1IMPallx(gseq_rlistize1(1715)<$list(T2JAG($list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[8009],T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),@(x0[8010],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq_rlistize1(1715);$list(@(xs[4301],T2Pvar(xs[8009])),@(x0[4302],T2Pvar(x0[8010])))))))
    let jsxtnm399 = function (arg1) { // timp: gseq_rlistize1(1715)
      let jsxtnm322 = arg1
      // I1CMP:start
      let jsxtnm398 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(3184(line=171,offs=1)--3206(line=171,offs=23)))
        // I1VALDCL
        let jsxtnm324
        let jsxtnm323 = XATSCAPP("list_vt_nil", [0])
        jsxtnm324 = jsxtnm323
        XATS000_patck(true)
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(3207(line=172,offs=1)--3232(line=172,offs=26))
        // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(r0;S2Eapps(S2Ecst(S2Tfun1($list(S2Tbas(T2Bimpr(2;vwtp)));S2Tbas(T2Bimpr(3;vtbx)));list_vt);$list(S2Evar(S2Tbas(T2Bimpr(2;vwtp));x0[8010])))))))
        // I1Dimplmnt0(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(3233(line=173,offs=1)--3310(line=177,offs=34)))
        // I1Dimplmnt0(DIMPLone2(folditm$fopr1(1456);$list(@(x0[3800],T2Pvar(x0[8010])),@(r0[3801],T2Pcst(r0))))):timp
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(3140(line=167,offs=1)--3153(line=167,offs=14))
        // I0Etapq(I0Ecst(gseq_folditm1(1769)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gseq001_vt.sats)@(12397(line=671,offs=1)--12410(line=671,offs=14))));$list(T2JAG($list(T2Pvar(xs[8009]))),T2JAG($list(T2Pvar(x0[8010]))),T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Pvar(x0[8010]),T2Pnone0()))))))
        // T1IMPallx(gseq_folditm1(1769);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(11956(line=820,offs=1)--12268(line=846,offs=2)))
        // T1IMPallx(gseq_folditm1(1769)<$list(T2JAG($list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))),T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[8084],T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),@(x0[8085],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),@(r0[8086],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_folditm1(1769);$list(@(xs[4422],T2Pvar(xs[8084])),@(x0[4423],T2Pvar(x0[8085])),@(r0[4424],T2Pvar(r0[8086])))))))
        let jsxtnm396 = function (arg1, arg2) { // timp: gseq_folditm1(1769)
          let jsxtnm329 = arg1
          let jsxtnm330 = arg2
          // I1CMP:start
          let jsxtnm395 // let
          { // let
            // I1Dvardclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(12036(line=828,offs=1)--12051(line=828,offs=16)))
            // I1VARDCL
            // I1CMP:start
            // I1CMP:return:I1Vtnm(I1TNM(330))
            let jsxtnm331 = XATSVAR1(jsxtnm330)
            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(12055(line=830,offs=1)--12073(line=830,offs=19)))
            // I1VALDCL
            let jsxtnm332
            jsxtnm332 = XATSADDR(jsxtnm331)
            XATS000_patck(true)
            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(12077(line=832,offs=1)--12263(line=844,offs=41)))
            // I1VALDCL
            let jsxtnm393
            let jsxtnm392 // let
            { // let
              // I1Dimplmnt0(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(12123(line=837,offs=1)--12262(line=844,offs=40)))
              // I1Dimplmnt0(DIMPLone2(foritm$work1(1444);$list(@(x0[3787],T2Pvar(x0[8085]))))):timp
              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(12088(line=834,offs=1)--12100(line=834,offs=13))
              // I0Etapq(I0Ecst(gseq_foritm1(1753)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gseq001_vt.sats)@(9472(line=507,offs=1)--9484(line=507,offs=13))));$list(T2JAG($list(T2Pvar(xs[8084]))),T2JAG($list(T2Pvar(x0[8085])))))
              // T1IMPallx(gseq_foritm1(1753);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(8250(line=546,offs=1)--8441(line=563,offs=2)))
              // T1IMPallx(gseq_foritm1(1753)<$list(T2JAG($list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[8051],T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),@(x0[8052],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq_foritm1(1753);$list(@(xs[4389],T2Pvar(xs[8051])),@(x0[4390],T2Pvar(x0[8052])))))))
              let jsxtnm390 = function (arg1) { // timp: gseq_foritm1(1753)
                let jsxtnm340 = arg1
                // I1CMP:start
                let jsxtnm389 // let
                { // let
                  // I1Dimplmnt0(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(8362(line=558,offs=1)--8439(line=562,offs=33)))
                  // I1Dimplmnt0(DIMPLone2(forall$test1(1424);$list(@(x0[3767],T2Pvar(x0[8052]))))):timp
                  let jsxtnm388 // let
                  { // let
                    // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(8309(line=553,offs=1)--8342(line=555,offs=13)))
                    // I1VALDCL
                    let jsxtnm387
                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(8317(line=554,offs=1)--8329(line=554,offs=13))
                    // I0Etapq(I0Ecst(gseq_forall1(1721)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gseq001_vt.sats)@(3696(line=185,offs=1)--3708(line=185,offs=13))));$list(T2JAG($list(T2Pvar(xs[8051]))),T2JAG($list(T2Pvar(x0[8052])))))
                    // T1IMPallx(gseq_forall1(1721);LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(8244(line=513,offs=1)--8375(line=521,offs=35)))
                    // T1IMPallx(gseq_forall1(1721)<$list(T2JAG($list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(k[9106],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x[9107],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_forall1(1721);$list(@(xs[4325],T2Papps(T2Pcst(jsm1);$list(T2Pvar(k[9106]),T2Pvar(x[9107])))),@(x0[4326],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Pvar(k[9106])),S2LAB(LABint(1);T2Pvar(x[9107]))))))))))
                    let jsxtnm385 = function (arg1) { // timp: gseq_forall1(1721)
                      let jsxtnm345 = arg1
                      // I1CMP:start
                      // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(8315(line=519,offs=1)--8333(line=519,offs=19))
                      // I0Etapq(I0Ecst(jshmap_forall$f2un(2764)(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(4300(line=230,offs=1)--4318(line=230,offs=19))));$list(T2JAG($list())))
                      // T1IMPallx(jshmap_forall$f2un(2764);LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(8379(line=523,offs=1)--8600(line=538,offs=2)))
                      // T1IMPallx(jshmap_forall$f2un(2764)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(jshmap_forall$f2un(2764);$list()))))
                      let jsxtnm352 = function (arg1, arg2) { // timp: jshmap_forall$f2un(2764)
                        let jsxtnm346 = arg1
                        let jsxtnm347 = arg2
                        // I1CMP:start
                        let jsxtnm351 // let
                        { // let
                          // I1Dextern(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(8485(line=531,offs=1)--8598(line=537,offs=37)))
                          // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(8493(line=532,offs=1)--8598(line=537,offs=37))
                          // I1FUNDCL: XATS2JS_jshmap_forall$f2un(5508)
                          // XATS2JS_jshmap_forall$f2un_8496
                            // FJARGdarg($list(I1BNDcons(I1TNM(348);I0Pvar(map(5509));$list(@(map(5509),I1Vtnm(I1TNM(348))))),I1BNDcons(I1TNM(349);I0Pvar(test(5510));$list(@(test(5510),I1Vtnm(I1TNM(349)))))))
                            // I1CMP:start
                            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_jshmap_forall$f2un);G1Nlist($list()))// I1CMP:return
                          let jsxtnm350 = XATSDAPP(XATS2JS_jshmap_forall$f2un(jsxtnm346, jsxtnm347))
                          jsxtnm351 = jsxtnm350
                        } // endlet
                        // I1CMP:return:I1Vtnm(I1TNM(351))
                        return jsxtnm351
                      } // endtimp(jshmap_forall$f2un(2764))
                      let jsxtnm383 = function (arg1, arg2) { // lam0(T_LAM(0))
                        let jsxtnm353 = arg1
                        let jsxtnm354 = arg2
                        // I1CMP:start
                        // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(8355(line=521,offs=15)--8367(line=521,offs=27))
                        // I0Etapq(I0Ecst(forall$test1(1424)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas001_vt.sats)@(2148(line=110,offs=1)--2160(line=110,offs=13))));$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Pvar(k[9106])),S2LAB(LABint(1);T2Pvar(x[9107]))))))))
                        // T1IMPallx(forall$test1(1424);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(8362(line=558,offs=1)--8439(line=562,offs=33)))
                        // T1IMPallx(forall$test1(1424)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[8051],T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),@(x0[8052],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(forall$test1(1424);$list(@(x0[3767],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))
                        let jsxtnm380 = function (arg1) { // timp: forall$test1(1424)
                          let jsxtnm355 = arg1
                          // I1CMP:start
                          let jsxtnm379 // let
                          { // let
                            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(8398(line=561,offs=1)--8427(line=562,offs=21)))
                            // I1VALDCL
                            let jsxtnm378
                            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(8407(line=562,offs=1)--8419(line=562,offs=13))
                            // I0Etapq(I0Ecst(foritm$work1(1444)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas001_vt.sats)@(3082(line=186,offs=1)--3094(line=186,offs=13))));$list(T2JAG($list(T2Pvar(x0[8052])))))
                            // T1IMPallx(foritm$work1(1444);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(12123(line=837,offs=1)--12262(line=844,offs=40)))
                            // T1IMPallx(foritm$work1(1444)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[8084],T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),@(x0[8085],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),@(r0[8086],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(foritm$work1(1444);$list(@(x0[3787],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))
                            let jsxtnm376 = function (arg1) { // timp: foritm$work1(1444)
                              let jsxtnm356 = arg1
                              // I1CMP:start
                              let jsxtnm375 // let
                              { // let
                                // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(12193(line=843,offs=1)--12222(line=843,offs=30)))
                                // I1VALDCL
                                let jsxtnm361
                                // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(12206(line=843,offs=14)--12214(line=843,offs=22))
                                // I0Etapq(I0Ecst(p2tr_get(2312)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/unsfx00.sats)@(2573(line=124,offs=1)--2581(line=124,offs=9))));$list(T2JAG($list(T2Pvar(r0[8086])))))
                                // T1IMPallx(p2tr_get(2312);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/unsfx00.dats)@(197(line=15,offs=1)--245(line=18,offs=17)))
                                // T1IMPallx(p2tr_get(2312)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0())))))>;I1Dtmpsub($list(@(a[5913],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(p2tr_get(2312);$list(@(a[5712],T2Pvar(a[5913])))))))
                                let jsxtnm359 = function (arg1) { // timp: p2tr_get(2312)
                                  let jsxtnm357 = arg1
                                  // I1CMP:start
                                  let jsxtnm358 = XATS000_dp2tr(jsxtnm357)
                                  // I1CMP:return:I1Vtnm(I1TNM(358))
                                  return jsxtnm358
                                } // endtimp(p2tr_get(2312))
                                let jsxtnm360 = XATSDAPP(jsxtnm359(jsxtnm332))
                                jsxtnm361 = jsxtnm360
                                XATS000_patck(true)
                                // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(12223(line=844,offs=1)--12261(line=844,offs=39)))
                                // I1VALDCL
                                let jsxtnm370
                                // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(12232(line=844,offs=10)--12245(line=844,offs=23))
                                // I0Etapq(I0Ecst(folditm$fopr1(1456)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas001_vt.sats)@(3630(line=230,offs=1)--3643(line=230,offs=14))));$list(T2JAG($list(T2Pvar(x0[8085]))),T2JAG($list(T2Pvar(r0[8086])))))
                                // T1IMPallx(folditm$fopr1(1456);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(3233(line=173,offs=1)--3310(line=177,offs=34)))
                                // T1IMPallx(folditm$fopr1(1456)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))),T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0())))))>;I1Dtmpsub($list(@(xs[8009],T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),@(x0[8010],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(folditm$fopr1(1456);$list(@(x0[3800],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),@(r0[3801],T2Papps(T2Pcst(list_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))))
                                let jsxtnm368 = function (arg1, arg2) { // timp: folditm$fopr1(1456)
                                  let jsxtnm362 = arg1
                                  let jsxtnm363 = arg2
                                  // I1CMP:start
                                  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(3290(line=177,offs=14)--3296(line=177,offs=20))
                                  // I0Etapq(I0Ecst(g_copy(24)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(1625(line=60,offs=1)--1631(line=60,offs=7))));$list(T2JAG($list(T2Pvar(x0[8010])))))
                                  // T1IMPallx(g_copy(24);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(2872(line=148,offs=1)--2934(line=151,offs=36)))
                                  // T1IMPallx(g_copy(24)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(a0[8505],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(a1[8506],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_copy(24);$list(@(a[432],T2Papps(T2Pcst(t0up_vt);$list(T2Pvar(a0[8505]),T2Pvar(a1[8506])))))))))
                                  let jsxtnm365 = function (arg1) { // timp: g_copy(24)
                                    let jsxtnm364 = arg1
                                    // I1CMP:start
                                    // I1CMP:return:I1Vtnm(I1TNM(364))
                                    return jsxtnm364
                                  } // endtimp(g_copy(24))
                                  let jsxtnm366 = XATSDAPP(jsxtnm365(jsxtnm363))
                                  let jsxtnm367 = XATSCAPP("list_vt_cons", [1, jsxtnm366, jsxtnm362])
                                  // I1CMP:return:I1Vtnm(I1TNM(367))
                                  return jsxtnm367
                                } // endtimp(folditm$fopr1(1456))
                                let jsxtnm369 = XATSDAPP(jsxtnm368(jsxtnm361, jsxtnm356))
                                jsxtnm370 = jsxtnm369
                                XATS000_patck(true)
                                // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(12163(line=840,offs=7)--12171(line=840,offs=15))
                                // I0Etapq(I0Ecst(p2tr_set(2313)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/unsfx00.sats)@(2611(line=127,offs=1)--2619(line=127,offs=9))));$list(T2JAG($list(T2Pvar(r0[8086])))))
                                // T1IMPallx(p2tr_set(2313);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/unsfx00.dats)@(246(line=19,offs=1)--305(line=22,offs=27)))
                                // T1IMPallx(p2tr_set(2313)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0())))))>;I1Dtmpsub($list(@(a[5914],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(p2tr_set(2313);$list(@(a[5713],T2Pvar(a[5914])))))))
                                let jsxtnm373 = function (arg1, arg2) { // timp: p2tr_set(2313)
                                  let jsxtnm371 = arg1
                                  let jsxtnm372 = arg2
                                  // I1CMP:start
                                  XATS000_assgn(jsxtnm371, jsxtnm372)
                                  // I1CMP:return:I1V000()
                                  return XATSVOID
                                } // endtimp(p2tr_set(2313))
                                let jsxtnm374 = XATSDAPP(jsxtnm373(jsxtnm332, jsxtnm370))
                                jsxtnm375 = jsxtnm374
                              } // endlet
                              // I1CMP:return:I1Vtnm(I1TNM(375))
                              return jsxtnm375
                            } // endtimp(foritm$work1(1444))
                            let jsxtnm377 = XATSDAPP(jsxtnm376(jsxtnm355))
                            jsxtnm378 = jsxtnm377
                            XATS000_patck(true)
                            jsxtnm379 = XATSBOOL(true)
                          } // endlet
                          // I1CMP:return:I1Vtnm(I1TNM(379))
                          return jsxtnm379
                        } // endtimp(forall$test1(1424))
                        let jsxtnm381 = XATSTUP1(XATSTRCD(0), [jsxtnm353, jsxtnm354])
                        let jsxtnm382 = XATSDAPP(jsxtnm380(jsxtnm381))
                        // I1CMP:return:I1Vtnm(I1TNM(382))
                        return jsxtnm382
                      } // endfun(lam0)
                      let jsxtnm384 = XATSDAPP(jsxtnm352(jsxtnm345, jsxtnm383))
                      // I1CMP:return:I1Vtnm(I1TNM(384))
                      return jsxtnm384
                    } // endtimp(gseq_forall1(1721))
                    let jsxtnm386 = XATSDAPP(jsxtnm385(jsxtnm340))
                    jsxtnm387 = jsxtnm386
                    XATS000_patck(true)
                    jsxtnm388 = XATSVOID
                  } // endlet
                  jsxtnm389 = jsxtnm388
                } // endlet
                // I1CMP:return:I1Vtnm(I1TNM(389))
                return jsxtnm389
              } // endtimp(gseq_foritm1(1753))
              let jsxtnm391 = XATSDAPP(jsxtnm390(jsxtnm329))
              jsxtnm392 = jsxtnm391
            } // endlet
            jsxtnm393 = jsxtnm392
            XATS000_patck(true)
            let jsxtnm394 = XATSFLAT(jsxtnm331)
            jsxtnm395 = jsxtnm394
          } // endlet
          // I1CMP:return:I1Vtnm(I1TNM(395))
          return jsxtnm395
        } // endtimp(gseq_folditm1(1769))
        let jsxtnm397 = XATSDAPP(jsxtnm396(jsxtnm322, jsxtnm324))
        jsxtnm398 = jsxtnm397
      } // endlet
      // I1CMP:return:I1Vtnm(I1TNM(398))
      return jsxtnm398
    } // endtimp(gseq_rlistize1(1715))
    let jsxtnm400 = XATSDAPP(jsxtnm399(jsxtnm321))
    // I1CMP:return:I1Vtnm(I1TNM(400))
    return jsxtnm400
  } // endtimp(jshmap_rlistize(2763))
  let jsxtnm402 = XATSDAPP(jsxtnm401(jsxtnm301))
  let jsxtnm403 = XATSDAPP(jsxtnm320(jsxtnm402))
  // I1CMP:return:I1Vtnm(I1TNM(403))
  return jsxtnm403
} // endtimp(jshmap_listize(2761))
let jsxtnm405 = XATSDAPP(jsxtnm404(jsxtnm54))
jsxtnm406 = jsxtnm405
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(test02_jshmap0.dats)@(675(line=40,offs=1)--735(line=41,offs=42)))
// I1VALDCL
let jsxtnm650
// LCSRCsome1(test02_jshmap0.dats)@(686(line=40,offs=12)--693(line=40,offs=19))
// I0Etapq(I0Ecst(gs_print1_a5(1991)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gsyn000_vt.sats)@(3775(line=235,offs=1)--3787(line=235,offs=13))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(type_vw_t0);$list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0())))))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
// T1IMPallx(gs_print1_a5(1991);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gsyn000_vt.dats)@(5881(line=297,offs=1)--6112(line=308,offs=21)))
// T1IMPallx(gs_print1_a5(1991)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(type_vw_t0);$list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0())))))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8415],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[8416],T2Papps(T2Pcst(type_vw_t0);$list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0()))))),@(x2[8417],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[8418],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0()))),@(x4[8419],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print1_a5(1991);$list(@(x0[5127],T2Pvar(x0[8415])),@(x1[5128],T2Pvar(x1[8416])),@(x2[5129],T2Pvar(x2[8417])),@(x3[5130],T2Pvar(x3[8418])),@(x4[5131],T2Pvar(x4[8419])))))))
let jsxtnm643 = function (arg1, arg2, arg3, arg4, arg5) { // timp: gs_print1_a5(1991)
  let jsxtnm407 = arg1
  let jsxtnm408 = arg2
  let jsxtnm409 = arg3
  let jsxtnm410 = arg4
  let jsxtnm411 = arg5
  // I1CMP:start
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gsyn000_vt.dats)@(5980(line=305,offs=3)--5993(line=305,offs=16))
  // I0Etapq(I0Ecst(gs_print1$beg(1973)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gsyn000_vt.sats)@(1528(line=52,offs=1)--1541(line=52,offs=14))));$list(T2JAG($list())))
  // T1IMPallx(gs_print1$beg(1973);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gsyn000_vt.dats)@(5090(line=241,offs=1)--5129(line=243,offs=21)))
  // T1IMPallx(gs_print1$beg(1973)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print1$beg(1973);$list()))))
  let jsxtnm413 = function () { // timp: gs_print1$beg(1973)
    // I1CMP:start
    let jsxtnm412 = XATSTUP0([])
    // I1CMP:return:I1Vtnm(I1TNM(412))
    return jsxtnm412
  } // endtimp(gs_print1$beg(1973))
  let jsxtnm414 = XATSDAPP(jsxtnm413())
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gsyn000_vt.dats)@(6001(line=306,offs=3)--6009(line=306,offs=11))
  // I0Etapq(I0Ecst(g_print1(1413)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas000_vt.sats)@(2117(line=109,offs=1)--2125(line=109,offs=9))));$list(T2JAG($list(T2Pvar(x0[8415])))))
  // T1IMPallx(g_print1(1413);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1635(line=59,offs=1)--1680(line=61,offs=27)))
  // T1IMPallx(g_print1(1413)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8832],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_print1(1413);$list(@(x0[3751],T2Pvar(x0[8832])))))))
  let jsxtnm419
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1669(line=61,offs=16)--1676(line=61,offs=23))
  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x0[8832])))))
  // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(strn)))))))
  let jsxtnm418
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
  // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
  // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
  // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
  let jsxtnm417
  let jsxtnm416 // let
  { // let
    // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
    // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
    // XATS2JS_NODE_strn_print_2214
      // FJARGdarg($list(I1BNDcons(I1TNM(415);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(415)))))))
      // I1CMP:start
      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
    jsxtnm416 = XATS2JS_NODE_strn_print
  } // endlet
  jsxtnm417 = jsxtnm416
  jsxtnm418 = jsxtnm417
  jsxtnm419 = jsxtnm418
  let jsxtnm420 = XATSDAPP(jsxtnm419(jsxtnm407))
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gsyn000_vt.dats)@(6019(line=306,offs=21)--6027(line=306,offs=29))
  // I0Etapq(I0Ecst(g_print1(1413)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas000_vt.sats)@(2117(line=109,offs=1)--2125(line=109,offs=9))));$list(T2JAG($list(T2Pvar(x1[8416])))))
  // T1IMPallx(g_print1(1413);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1635(line=59,offs=1)--1680(line=61,offs=27)))
  // T1IMPallx(g_print1(1413)<$list(T2JAG($list(T2Papps(T2Pcst(type_vw_t0);$list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0())))))))>;I1Dtmpsub($list(@(x0[8832],T2Papps(T2Pcst(type_vw_t0);$list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0()))))));I1Dimplmnt0(DIMPLone2(g_print1(1413);$list(@(x0[3751],T2Pvar(x0[8832])))))))
  let jsxtnm469
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1669(line=61,offs=16)--1676(line=61,offs=23))
  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x0[8832])))))
  // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(4710(line=318,offs=1)--4814(line=324,offs=32)))
  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(type_vw_t0);$list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0())))))))>;I1Dtmpsub($list(@(vw[5785],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Papps(T2Pcst(type);$list(T2Pvar(vw[5785])))))))))
  let jsxtnm468 = function (arg1) { // timp: g_print(39)
    let jsxtnm421 = arg1
    // I1CMP:start
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(4760(line=323,offs=1)--4767(line=323,offs=8))
    // I0Etapq(I0Ecst(g_ptype(202)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(2386(line=100,offs=1)--2393(line=100,offs=8))));$list(T2JAG($list(T2Pvar(vw[5785])))))
    // T1IMPallx(g_ptype(202);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/list000_vt.dats)@(1573(line=55,offs=1)--1681(line=62,offs=32)))
    // T1IMPallx(g_ptype(202)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0())))))>;I1Dtmpsub($list(@(vt[8516],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(g_ptype(202);$list(@(vw[773],T2Papps(T2Pcst(list_vt);$list(T2Pvar(vt[8516])))))))))
    let jsxtnm456 = function () { // timp: g_ptype(202)
      // I1CMP:start
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/list000_vt.dats)@(1631(line=61,offs=1)--1636(line=61,offs=6))
      // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
      // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
      let jsxtnm424
      let jsxtnm423 // let
      { // let
        // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
        // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
        // XATS2JS_NODE_strn_print_2214
          // FJARGdarg($list(I1BNDcons(I1TNM(422);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(422)))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
        jsxtnm423 = XATS2JS_NODE_strn_print
      } // endlet
      jsxtnm424 = jsxtnm423
      let jsxtnm425 = XATSDAPP(jsxtnm424(XATSSTRN("list_vt(")))
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/list000_vt.dats)@(1650(line=62,offs=1)--1657(line=62,offs=8))
      // I0Etapq(I0Ecst(g_ptype(202)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(2386(line=100,offs=1)--2393(line=100,offs=8))));$list(T2JAG($list(T2Pvar(vt[8516])))))
      // T1IMPallx(g_ptype(202);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(1835(line=66,offs=1)--1973(line=74,offs=29)))
      // T1IMPallx(g_ptype(202)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(a0[7357],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(a1[7358],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_ptype(202);$list(@(vw[773],T2Papps(T2Pcst(t0up);$list(T2Pvar(a0[7357]),T2Pvar(a1[7358])))))))))
      let jsxtnm450 = function () { // timp: g_ptype(202)
        // I1CMP:start
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(1903(line=72,offs=3)--1908(line=72,offs=8))
        // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
        // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
        // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
        let jsxtnm428
        let jsxtnm427 // let
        { // let
          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
          // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
          // XATS2JS_NODE_strn_print_2214
            // FJARGdarg($list(I1BNDcons(I1TNM(426);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(426)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
          jsxtnm427 = XATS2JS_NODE_strn_print
        } // endlet
        jsxtnm428 = jsxtnm427
        let jsxtnm429 = XATSDAPP(jsxtnm428(XATSSTRN("t0up2(")))
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(1919(line=73,offs=3)--1926(line=73,offs=10))
        // I0Etapq(I0Ecst(g_ptype(202)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(2386(line=100,offs=1)--2393(line=100,offs=8))));$list(T2JAG($list(T2Pvar(a0[7357])))))
        // T1IMPallx(g_ptype(202);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(2934(line=164,offs=1)--2988(line=167,offs=29)))
        // T1IMPallx(g_ptype(202)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_ptype(202);$list(@(vw[773],T2Pcst(strn)))))))
        let jsxtnm434 = function () { // timp: g_ptype(202)
          // I1CMP:start
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(2975(line=167,offs=16)--2980(line=167,offs=21))
          // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
          // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
          // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
          let jsxtnm432
          let jsxtnm431 // let
          { // let
            // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
            // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
            // XATS2JS_NODE_strn_print_2214
              // FJARGdarg($list(I1BNDcons(I1TNM(430);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(430)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
            jsxtnm431 = XATS2JS_NODE_strn_print
          } // endlet
          jsxtnm432 = jsxtnm431
          let jsxtnm433 = XATSDAPP(jsxtnm432(XATSSTRN("strn")))
          // I1CMP:return:I1Vtnm(I1TNM(433))
          return jsxtnm433
        } // endtimp(g_ptype(202))
        let jsxtnm435 = XATSDAPP(jsxtnm434())
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(1934(line=73,offs=18)--1939(line=73,offs=23))
        // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
        // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
        // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
        let jsxtnm438
        let jsxtnm437 // let
        { // let
          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
          // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
          // XATS2JS_NODE_strn_print_2214
            // FJARGdarg($list(I1BNDcons(I1TNM(436);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(436)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
          jsxtnm437 = XATS2JS_NODE_strn_print
        } // endlet
        jsxtnm438 = jsxtnm437
        let jsxtnm439 = XATSDAPP(jsxtnm438(XATSSTRN(",")))
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(1947(line=74,offs=3)--1954(line=74,offs=10))
        // I0Etapq(I0Ecst(g_ptype(202)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(2386(line=100,offs=1)--2393(line=100,offs=8))));$list(T2JAG($list(T2Pvar(a1[7358])))))
        // T1IMPallx(g_ptype(202);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(2708(line=146,offs=1)--2762(line=149,offs=29)))
        // T1IMPallx(g_ptype(202)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_ptype(202);$list(@(vw[773],T2Pcst(sint)))))))
        let jsxtnm444 = function () { // timp: g_ptype(202)
          // I1CMP:start
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(2749(line=149,offs=16)--2754(line=149,offs=21))
          // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
          // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
          // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
          let jsxtnm442
          let jsxtnm441 // let
          { // let
            // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
            // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
            // XATS2JS_NODE_strn_print_2214
              // FJARGdarg($list(I1BNDcons(I1TNM(440);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(440)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
            jsxtnm441 = XATS2JS_NODE_strn_print
          } // endlet
          jsxtnm442 = jsxtnm441
          let jsxtnm443 = XATSDAPP(jsxtnm442(XATSSTRN("sint")))
          // I1CMP:return:I1Vtnm(I1TNM(443))
          return jsxtnm443
        } // endtimp(g_ptype(202))
        let jsxtnm445 = XATSDAPP(jsxtnm444())
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(1962(line=74,offs=18)--1967(line=74,offs=23))
        // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
        // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
        // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
        let jsxtnm448
        let jsxtnm447 // let
        { // let
          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
          // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
          // XATS2JS_NODE_strn_print_2214
            // FJARGdarg($list(I1BNDcons(I1TNM(446);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(446)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
          jsxtnm447 = XATS2JS_NODE_strn_print
        } // endlet
        jsxtnm448 = jsxtnm447
        let jsxtnm449 = XATSDAPP(jsxtnm448(XATSSTRN(")")))
        // I1CMP:return:I1Vtnm(I1TNM(449))
        return jsxtnm449
      } // endtimp(g_ptype(202))
      let jsxtnm451 = XATSDAPP(jsxtnm450())
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/list000_vt.dats)@(1670(line=62,offs=21)--1675(line=62,offs=26))
      // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
      // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
      let jsxtnm454
      let jsxtnm453 // let
      { // let
        // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
        // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
        // XATS2JS_NODE_strn_print_2214
          // FJARGdarg($list(I1BNDcons(I1TNM(452);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(452)))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
        jsxtnm453 = XATS2JS_NODE_strn_print
      } // endlet
      jsxtnm454 = jsxtnm453
      let jsxtnm455 = XATSDAPP(jsxtnm454(XATSSTRN(")")))
      // I1CMP:return:I1Vtnm(I1TNM(455))
      return jsxtnm455
    } // endtimp(g_ptype(202))
    let jsxtnm457 = XATSDAPP(jsxtnm456())
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(4783(line=324,offs=1)--4788(line=324,offs=6))
    // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
    // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
    // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
    let jsxtnm460
    let jsxtnm459 // let
    { // let
      // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
      // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
      // XATS2JS_NODE_strn_print_2214
        // FJARGdarg($list(I1BNDcons(I1TNM(458);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(458)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
      jsxtnm459 = XATS2JS_NODE_strn_print
    } // endlet
    jsxtnm460 = jsxtnm459
    let jsxtnm461 = XATSDAPP(jsxtnm460(XATSSTRN(":")))
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(4792(line=324,offs=10)--4799(line=324,offs=17))
    // I0Etapq(I0Ecst(g_psort(201)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(2346(line=97,offs=1)--2353(line=97,offs=8))));$list(T2JAG($list(T2Pvar(vw[5785])))))
    // T1IMPallx(g_psort(201);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(1721(line=64,offs=1)--1775(line=68,offs=22)))
    // T1IMPallx(g_psort(201)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0())))))>;I1Dtmpsub($list(@(vx[5758],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_psort(201);$list(@(vw[772],T2Pvar(vx[5758])))))))
    let jsxtnm466 = function () { // timp: g_psort(201)
      // I1CMP:start
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(1756(line=68,offs=3)--1766(line=68,offs=13))
      // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
      // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
      let jsxtnm464
      let jsxtnm463 // let
      { // let
        // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
        // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
        // XATS2JS_NODE_strn_print_2214
          // FJARGdarg($list(I1BNDcons(I1TNM(462);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(462)))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
        jsxtnm463 = XATS2JS_NODE_strn_print
      } // endlet
      jsxtnm464 = jsxtnm463
      let jsxtnm465 = XATSDAPP(jsxtnm464(XATSSTRN("vtbx")))
      // I1CMP:return:I1Vtnm(I1TNM(465))
      return jsxtnm465
    } // endtimp(g_psort(201))
    let jsxtnm467 = XATSDAPP(jsxtnm466())
    // I1CMP:return:I1Vtnm(I1TNM(467))
    return jsxtnm467
  } // endtimp(g_print(39))
  jsxtnm469 = jsxtnm468
  let jsxtnm470 = XATSDAPP(jsxtnm469(jsxtnm408))
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gsyn000_vt.dats)@(6038(line=307,offs=3)--6046(line=307,offs=11))
  // I0Etapq(I0Ecst(g_print1(1413)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas000_vt.sats)@(2117(line=109,offs=1)--2125(line=109,offs=9))));$list(T2JAG($list(T2Pvar(x2[8417])))))
  // T1IMPallx(g_print1(1413);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1635(line=59,offs=1)--1680(line=61,offs=27)))
  // T1IMPallx(g_print1(1413)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8832],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_print1(1413);$list(@(x0[3751],T2Pvar(x0[8832])))))))
  let jsxtnm475
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1669(line=61,offs=16)--1676(line=61,offs=23))
  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x0[8832])))))
  // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(strn)))))))
  let jsxtnm474
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
  // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
  // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
  // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
  let jsxtnm473
  let jsxtnm472 // let
  { // let
    // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
    // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
    // XATS2JS_NODE_strn_print_2214
      // FJARGdarg($list(I1BNDcons(I1TNM(471);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(471)))))))
      // I1CMP:start
      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
    jsxtnm472 = XATS2JS_NODE_strn_print
  } // endlet
  jsxtnm473 = jsxtnm472
  jsxtnm474 = jsxtnm473
  jsxtnm475 = jsxtnm474
  let jsxtnm476 = XATSDAPP(jsxtnm475(jsxtnm409))
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gsyn000_vt.dats)@(6056(line=307,offs=21)--6064(line=307,offs=29))
  // I0Etapq(I0Ecst(g_print1(1413)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas000_vt.sats)@(2117(line=109,offs=1)--2125(line=109,offs=9))));$list(T2JAG($list(T2Pvar(x3[8418])))))
  // T1IMPallx(g_print1(1413);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/list000_vt.dats)@(2935(line=156,offs=1)--3019(line=162,offs=2)))
  // T1IMPallx(g_print1(1413)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8525],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(g_print1(1413);$list(@(x0[3751],T2Papps(T2Pcst(list_vt);$list(T2Pvar(x0[8525])))))))))
  let jsxtnm632 = function (arg1) { // timp: g_print1(1413)
    let jsxtnm477 = arg1
    // I1CMP:start
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/list000_vt.dats)@(2985(line=161,offs=1)--2996(line=161,offs=12))
    // I0Etapq(I0Ecst(gseq_print1(1688)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gseq000_vt.sats)@(3999(line=245,offs=1)--4010(line=245,offs=12))));$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Pvar(x0[8525]),T2Pnone0())))),T2JAG($list(T2Pvar(x0[8525])))))
    // T1IMPallx(gseq_print1(1688);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4483(line=284,offs=1)--4800(line=309,offs=7)))
    // T1IMPallx(gseq_print1(1688)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0())))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[7932],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0()))),@(x0[7933],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq_print1(1688);$list(@(xs[4222],T2Pvar(xs[7932])),@(x0[4223],T2Pvar(x0[7933])))))))
    let jsxtnm630 = function (arg1) { // timp: gseq_print1(1688)
      let jsxtnm478 = arg1
      // I1CMP:start
      let jsxtnm629 // let
      { // let
        // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4534(line=289,offs=1)--4576(line=291,offs=21)))
        // I1VALDCL
        let jsxtnm485
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4543(line=290,offs=1)--4553(line=290,offs=11))
        // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
        // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
        // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
        let jsxtnm481
        let jsxtnm480 // let
        { // let
          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
          // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
          // XATS2JS_NODE_strn_print_2214
            // FJARGdarg($list(I1BNDcons(I1TNM(479);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(479)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
          jsxtnm480 = XATS2JS_NODE_strn_print
        } // endlet
        jsxtnm481 = jsxtnm480
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4557(line=291,offs=2)--4565(line=291,offs=10))
        // I0Etapq(I0Ecst(gseq$beg(346)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gseq000.sats)@(2390(line=130,offs=1)--2398(line=130,offs=9))));$list(T2JAG($list(T2Pvar(xs[7932]))),T2JAG($list(T2Pvar(x0[7933])))))
        // T1IMPallx(gseq$beg(346);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/list000_vt.dats)@(2728(line=141,offs=1)--2788(line=144,offs=33)))
        // T1IMPallx(gseq$beg(346)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0())))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(x0[8523],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),@(x0[8523],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq$beg(346);$list(@(xs[1067],T2Papps(T2Pcst(list_vt);$list(T2Pvar(x0[8523])))),@(x0[1068],T2Pvar(x0[8523])))))))
        let jsxtnm482 = function () { // timp: gseq$beg(346)
          // I1CMP:start
          // I1CMP:return:I1Vstr(...)
          return XATSSTRN("list_vt(")
        } // endtimp(gseq$beg(346))
        let jsxtnm483 = XATSDAPP(jsxtnm482())
        let jsxtnm484 = XATSDAPP(jsxtnm481(jsxtnm483))
        jsxtnm485 = jsxtnm484
        XATS000_patck(true)
        // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4577(line=292,offs=1)--4751(line=306,offs=2)))
        // I1VALDCL
        let jsxtnm621
        let jsxtnm620 // let
        { // let
          // I1Dimplmnt0(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4624(line=297,offs=1)--4749(line=305,offs=2)))
          // I1Dimplmnt0(DIMPLone2(iforitm$work1(1450);$list(@(x0[3793],T2Pvar(x0[7933]))))):timp
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4588(line=294,offs=1)--4601(line=294,offs=14))
          // I0Etapq(I0Ecst(gseq_iforitm1(1761)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gseq001_vt.sats)@(10899(line=588,offs=1)--10912(line=588,offs=14))));$list(T2JAG($list(T2Pvar(xs[7932]))),T2JAG($list(T2Pvar(x0[7933])))))
          // T1IMPallx(gseq_iforitm1(1761);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(9997(line=678,offs=1)--10202(line=695,offs=2)))
          // T1IMPallx(gseq_iforitm1(1761)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0())))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[8067],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0()))),@(x0[8068],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq_iforitm1(1761);$list(@(xs[4405],T2Pvar(xs[8067])),@(x0[4406],T2Pvar(x0[8068])))))))
          let jsxtnm618 = function (arg1) { // timp: gseq_iforitm1(1761)
            let jsxtnm495 = arg1
            // I1CMP:start
            let jsxtnm617 // let
            { // let
              // I1Dimplmnt0(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(10113(line=690,offs=1)--10200(line=694,offs=38)))
              // I1Dimplmnt0(DIMPLone2(iforall$test1(1434);$list(@(x0[3777],T2Pvar(x0[8068]))))):timp
              let jsxtnm616 // let
              { // let
                // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(10057(line=685,offs=1)--10093(line=687,offs=15)))
                // I1VALDCL
                let jsxtnm615
                // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(10065(line=686,offs=1)--10078(line=686,offs=14))
                // I0Etapq(I0Ecst(gseq_iforall1(1737)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gseq001_vt.sats)@(6529(line=346,offs=1)--6542(line=346,offs=14))));$list(T2JAG($list(T2Pvar(xs[8067]))),T2JAG($list(T2Pvar(x0[8068])))))
                // T1IMPallx(gseq_iforall1(1737);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6019(line=377,offs=1)--6322(line=403,offs=2)))
                // T1IMPallx(gseq_iforall1(1737)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0())))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[8035],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0()))),@(x0[8036],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq_iforall1(1737);$list(@(xs[4357],T2Pvar(xs[8035])),@(x0[4358],T2Pvar(x0[8036])))))))
                let jsxtnm613 = function (arg1) { // timp: gseq_iforall1(1737)
                  let jsxtnm501 = arg1
                  // I1CMP:start
                  let jsxtnm612 // let
                  { // let
                    // I1Dvardclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6087(line=384,offs=1)--6103(line=384,offs=17)))
                    // I1VARDCL
                    // I1CMP:start
                    // I1CMP:return:I1Vint(T_INT01(0))
                    let jsxtnm502 = XATSVAR1(XATSINT1(0))
                    // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6107(line=386,offs=1)--6125(line=386,offs=19)))
                    // I1VALDCL
                    let jsxtnm503
                    jsxtnm503 = XATSADDR(jsxtnm502)
                    XATS000_patck(true)
                    // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6129(line=388,offs=1)--6317(line=401,offs=2)))
                    // I1VALDCL
                    let jsxtnm611
                    let jsxtnm610 // let
                    { // let
                      // I1Dimplmnt0(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6175(line=393,offs=1)--6315(line=400,offs=37)))
                      // I1Dimplmnt0(DIMPLone2(forall$test1(1424);$list(@(x0[3767],T2Pvar(x0[8036]))))):timp
                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6140(line=390,offs=1)--6152(line=390,offs=13))
                      // I0Etapq(I0Ecst(gseq_forall1(1721)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gseq001_vt.sats)@(3696(line=185,offs=1)--3708(line=185,offs=13))));$list(T2JAG($list(T2Pvar(xs[8035]))),T2JAG($list(T2Pvar(x0[8036])))))
                      // T1IMPallx(gseq_forall1(1721);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/list001_vt.dats)@(2048(line=94,offs=1)--2119(line=97,offs=40)))
                      // T1IMPallx(gseq_forall1(1721)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0())))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(x0[8575],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),@(x0[8575],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq_forall1(1721);$list(@(xs[4325],T2Papps(T2Pcst(list_vt);$list(T2Pvar(x0[8575])))),@(x0[4326],T2Pvar(x0[8575])))))))
                      let jsxtnm608
                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/list001_vt.dats)@(2100(line=97,offs=21)--2115(line=97,offs=36))
                      // I0Etapq(I0Ecst(list_vt_forall1(2066)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/list001_vt.sats)@(1481(line=47,offs=1)--1496(line=47,offs=16))));$list(T2JAG($list(T2Pvar(x0[8575])))))
                      // T1IMPallx(list_vt_forall1(2066);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/list001_vt.dats)@(1707(line=67,offs=1)--1964(line=88,offs=2)))
                      // T1IMPallx(list_vt_forall1(2066)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(x0[8573],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(list_vt_forall1(2066);$list(@(x0[5296],T2Pvar(x0[8573])))))))
                      let jsxtnm607 = function (arg1) { // timp: list_vt_forall1(2066)
                        let jsxtnm512 = arg1
                        // I1CMP:start
                        let jsxtnm606 // let
                        { // let
                          // I1Dfundclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/list001_vt.dats)@(1777(line=74,offs=1)--1962(line=87,offs=38)))
                          // I1FUNDCL
                          function loop_1780(arg1)
                          { // fun
                            let jsxtnm513 = arg1
                            // I1CMP:start
                            let jsxtnm604 // cas
                            do {
                              // { // cls
                              // I1GPTpat(I1BNDcons(I1TNM(514);I0Pdapp(I0Pcon(list_vt_nil(10));$list());$list()))
                              if (XATS000_ctgeq(jsxtnm513, XATSCTAG("list_vt_nil",0))) { // gpt
                                let jsxtnm514 = jsxtnm513
                                jsxtnm604 = XATSBOOL(true)
                                break // cls
                              } // gpt
                              // } // cls
                              // { // cls
                              // I1GPTpat(I1BNDcons(I1TNM(515);I0Pdapp(I0Pcon(list_vt_cons(11));$list(I0Pvar(x1(4363)),I0Pvar(xs(4364))));$list(@(x1(4363),I1Vp1cn(I0Pcon(list_vt_cons(11));I1Vtnm(I1TNM(515));0)),@(xs(4364),I1Vp1cn(I0Pcon(list_vt_cons(11));I1Vtnm(I1TNM(515));1)))))
                              if (XATS000_ctgeq(jsxtnm513, XATSCTAG("list_vt_cons",1))) { // gpt
                                let jsxtnm515 = jsxtnm513
                                let jsxtnm603 // let
                                { // let
                                  // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/list001_vt.dats)@(1890(line=85,offs=1)--1921(line=86,offs=21)))
                                  // I1VALDCL
                                  let jsxtnm600
                                  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/list001_vt.dats)@(1901(line=86,offs=1)--1913(line=86,offs=13))
                                  // I0Etapq(I0Ecst(forall$test1(1424)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas001_vt.sats)@(2148(line=110,offs=1)--2160(line=110,offs=13))));$list(T2JAG($list(T2Pvar(x0[8573])))))
                                  // T1IMPallx(forall$test1(1424);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6175(line=393,offs=1)--6315(line=400,offs=37)))
                                  // T1IMPallx(forall$test1(1424)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[8035],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0()))),@(x0[8036],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(forall$test1(1424);$list(@(x0[3767],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))
                                  let jsxtnm598 = function (arg1) { // timp: forall$test1(1424)
                                    let jsxtnm516 = arg1
                                    // I1CMP:start
                                    let jsxtnm597 // let
                                    { // let
                                      // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6249(line=399,offs=1)--6278(line=399,offs=30)))
                                      // I1VALDCL
                                      let jsxtnm521
                                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6262(line=399,offs=14)--6270(line=399,offs=22))
                                      // I0Etapq(I0Ecst(p2tr_get(2312)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/unsfx00.sats)@(2573(line=124,offs=1)--2581(line=124,offs=9))));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
                                      // T1IMPallx(p2tr_get(2312);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/unsfx00.dats)@(197(line=15,offs=1)--245(line=18,offs=17)))
                                      // T1IMPallx(p2tr_get(2312)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(a[5913],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(p2tr_get(2312);$list(@(a[5712],T2Pvar(a[5913])))))))
                                      let jsxtnm519 = function (arg1) { // timp: p2tr_get(2312)
                                        let jsxtnm517 = arg1
                                        // I1CMP:start
                                        let jsxtnm518 = XATS000_dp2tr(jsxtnm517)
                                        // I1CMP:return:I1Vtnm(I1TNM(518))
                                        return jsxtnm518
                                      } // endtimp(p2tr_get(2312))
                                      let jsxtnm520 = XATSDAPP(jsxtnm519(jsxtnm503))
                                      jsxtnm521 = jsxtnm520
                                      XATS000_patck(true)
                                      // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6279(line=400,offs=1)--6313(line=400,offs=35)))
                                      // I1VALDCL
                                      let jsxtnm584
                                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6288(line=400,offs=10)--6301(line=400,offs=23))
                                      // I0Etapq(I0Ecst(iforall$test1(1434)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas001_vt.sats)@(2611(line=148,offs=1)--2624(line=148,offs=14))));$list(T2JAG($list(T2Pvar(x0[8036])))))
                                      // T1IMPallx(iforall$test1(1434);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(10113(line=690,offs=1)--10200(line=694,offs=38)))
                                      // T1IMPallx(iforall$test1(1434)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[8067],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0()))),@(x0[8068],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(iforall$test1(1434);$list(@(x0[3777],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))
                                      let jsxtnm582 = function (arg1, arg2) { // timp: iforall$test1(1434)
                                        let jsxtnm522 = arg1
                                        let jsxtnm523 = arg2
                                        // I1CMP:start
                                        let jsxtnm581 // let
                                        { // let
                                          // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(10154(line=693,offs=1)--10188(line=694,offs=26)))
                                          // I1VALDCL
                                          let jsxtnm580
                                          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(10163(line=694,offs=1)--10176(line=694,offs=14))
                                          // I0Etapq(I0Ecst(iforitm$work1(1450)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas001_vt.sats)@(3334(line=206,offs=1)--3347(line=206,offs=14))));$list(T2JAG($list(T2Pvar(x0[8068])))))
                                          // T1IMPallx(iforitm$work1(1450);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4624(line=297,offs=1)--4749(line=305,offs=2)))
                                          // T1IMPallx(iforitm$work1(1450)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[7932],T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0()))),@(x0[7933],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(iforitm$work1(1450);$list(@(x0[3793],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))
                                          let jsxtnm578 = function (arg1, arg2) { // timp: iforitm$work1(1450)
                                            let jsxtnm524 = arg1
                                            let jsxtnm525 = arg2
                                            // I1CMP:start
                                            let jsxtnm577 // let
                                            { // let
                                              // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4691(line=302,offs=1)--4747(line=304,offs=33)))
                                              // I1VALDCL
                                              let jsxtnm541
                                              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4706(line=303,offs=7)--4707(line=303,offs=8))
                                              // I0Etapq(I0Ecst(sint_gt$sint(928)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gint000.sats)@(2103(line=87,offs=1)--2115(line=87,offs=13))));$list(T2JAG($list())))
                                              // T1IMPallx(sint_gt$sint(928);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1777(line=70,offs=1)--1938(line=82,offs=2)))
                                              // T1IMPallx(sint_gt$sint(928)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_gt$sint(928);$list()))))
                                              let jsxtnm532 = function (arg1, arg2) { // timp: sint_gt$sint(928)
                                                let jsxtnm526 = arg1
                                                let jsxtnm527 = arg2
                                                // I1CMP:start
                                                let jsxtnm531 // let
                                                { // let
                                                  // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1865(line=78,offs=1)--1936(line=81,offs=39)))
                                                  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1873(line=79,offs=1)--1936(line=81,offs=39))
                                                  // I1FUNDCL: XATS2JS_sint_gt$sint(4913)
                                                  // XATS2JS_sint_gt$sint_1876
                                                    // FJARGdarg($list(I1BNDcons(I1TNM(528);I0Pvar(i1(4914));$list(@(i1(4914),I1Vtnm(I1TNM(528))))),I1BNDcons(I1TNM(529);I0Pvar(i2(4915));$list(@(i2(4915),I1Vtnm(I1TNM(529)))))))
                                                    // I1CMP:start
                                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_gt$sint);G1Nlist($list()))// I1CMP:return
                                                  let jsxtnm530 = XATSDAPP(XATS2JS_sint_gt$sint(jsxtnm526, jsxtnm527))
                                                  jsxtnm531 = jsxtnm530
                                                } // endlet
                                                // I1CMP:return:I1Vtnm(I1TNM(531))
                                                return jsxtnm531
                                              } // endtimp(sint_gt$sint(928))
                                              let jsxtnm533 = XATSDAPP(jsxtnm532(jsxtnm524, XATSINT1(0)))
                                              let jsxtnm540 // ift
                                              if (jsxtnm533) // ift
                                              {
                                                // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4715(line=304,offs=1)--4725(line=304,offs=11))
                                                // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                                                // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                                                // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                                                let jsxtnm536
                                                let jsxtnm535 // let
                                                { // let
                                                  // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                                                  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                                                  // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                                                  // XATS2JS_NODE_strn_print_2214
                                                    // FJARGdarg($list(I1BNDcons(I1TNM(534);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(534)))))))
                                                    // I1CMP:start
                                                    // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                                                  jsxtnm535 = XATS2JS_NODE_strn_print
                                                } // endlet
                                                jsxtnm536 = jsxtnm535
                                                // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4728(line=304,offs=14)--4736(line=304,offs=22))
                                                // I0Etapq(I0Ecst(gseq$sep(348)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gseq000.sats)@(2474(line=138,offs=1)--2482(line=138,offs=9))));$list(T2JAG($list(T2Pvar(xs[7932]))),T2JAG($list(T2Pvar(x0[7933])))))
                                                // T1IMPallx(gseq$sep(348);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/list000_vt.dats)@(2620(line=133,offs=1)--2673(line=136,offs=26)))
                                                // T1IMPallx(gseq$sep(348)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0())))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(x0[8521],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),@(x0[8521],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq$sep(348);$list(@(xs[1071],T2Papps(T2Pcst(list_vt);$list(T2Pvar(x0[8521])))),@(x0[1072],T2Pvar(x0[8521])))))))
                                                let jsxtnm537 = function () { // timp: gseq$sep(348)
                                                  // I1CMP:start
                                                  // I1CMP:return:I1Vstr(...)
                                                  return XATSSTRN(",")
                                                } // endtimp(gseq$sep(348))
                                                let jsxtnm538 = XATSDAPP(jsxtnm537())
                                                let jsxtnm539 = XATSDAPP(jsxtnm536(jsxtnm538))
                                                jsxtnm540 = jsxtnm539
                                              } else {
                                              } // end(if)
                                              jsxtnm541 = jsxtnm540
                                              XATS000_patck(true)
                                              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4665(line=300,offs=3)--4673(line=300,offs=11))
                                              // I0Etapq(I0Ecst(g_print1(1413)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas000_vt.sats)@(2117(line=109,offs=1)--2125(line=109,offs=9))));$list(T2JAG($list(T2Pvar(x0[7933])))))
                                              // T1IMPallx(g_print1(1413);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1714(line=64,offs=1)--1932(line=82,offs=4)))
                                              // T1IMPallx(g_print1(1413)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(a0[8495],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(a1[8496],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_print1(1413);$list(@(x0[3751],T2Papps(T2Pcst(t0up_vt);$list(T2Pvar(a0[8495]),T2Pvar(a1[8496])))))))))
                                              let jsxtnm575 = function (arg1) { // timp: g_print1(1413)
                                                let jsxtnm542 = arg1
                                                // I1CMP:start
                                                let jsxtnm574 // let
                                                { // let
                                                  // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1786(line=72,offs=1)--1816(line=74,offs=20)))
                                                  // I1VALDCL
                                                  let jsxtnm547
                                                  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1799(line=74,offs=3)--1809(line=74,offs=13))
                                                  // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                                                  // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                                                  // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                                                  let jsxtnm545
                                                  let jsxtnm544 // let
                                                  { // let
                                                    // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                                                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                                                    // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                                                    // XATS2JS_NODE_strn_print_2214
                                                      // FJARGdarg($list(I1BNDcons(I1TNM(543);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(543)))))))
                                                      // I1CMP:start
                                                      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                                                    jsxtnm544 = XATS2JS_NODE_strn_print
                                                  } // endlet
                                                  jsxtnm545 = jsxtnm544
                                                  let jsxtnm546 = XATSDAPP(jsxtnm545(XATSSTRN("@(")))
                                                  jsxtnm547 = jsxtnm546
                                                  XATS000_patck(true)
                                                  // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1820(line=76,offs=1)--1848(line=76,offs=29)))
                                                  // I1VALDCL
                                                  let jsxtnm555
                                                  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1829(line=76,offs=10)--1837(line=76,offs=18))
                                                  // I0Etapq(I0Ecst(g_print1(1413)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas000_vt.sats)@(2117(line=109,offs=1)--2125(line=109,offs=9))));$list(T2JAG($list(T2Pvar(a0[8495])))))
                                                  // T1IMPallx(g_print1(1413);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1635(line=59,offs=1)--1680(line=61,offs=27)))
                                                  // T1IMPallx(g_print1(1413)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8832],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_print1(1413);$list(@(x0[3751],T2Pvar(x0[8832])))))))
                                                  let jsxtnm552
                                                  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1669(line=61,offs=16)--1676(line=61,offs=23))
                                                  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x0[8832])))))
                                                  // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                                                  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(strn)))))))
                                                  let jsxtnm551
                                                  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                                                  // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                                                  // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                                                  // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                                                  let jsxtnm550
                                                  let jsxtnm549 // let
                                                  { // let
                                                    // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                                                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                                                    // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                                                    // XATS2JS_NODE_strn_print_2214
                                                      // FJARGdarg($list(I1BNDcons(I1TNM(548);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(548)))))))
                                                      // I1CMP:start
                                                      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                                                    jsxtnm549 = XATS2JS_NODE_strn_print
                                                  } // endlet
                                                  jsxtnm550 = jsxtnm549
                                                  jsxtnm551 = jsxtnm550
                                                  jsxtnm552 = jsxtnm551
                                                  let jsxtnm553 = XATSPFLT(jsxtnm542[0])
                                                  let jsxtnm554 = XATSDAPP(jsxtnm552(jsxtnm553))
                                                  jsxtnm555 = jsxtnm554
                                                  XATS000_patck(true)
                                                  // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1849(line=77,offs=1)--1868(line=77,offs=20)))
                                                  // I1VALDCL
                                                  let jsxtnm560
                                                  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1858(line=77,offs=10)--1863(line=77,offs=15))
                                                  // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                                                  // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                                                  // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                                                  let jsxtnm558
                                                  let jsxtnm557 // let
                                                  { // let
                                                    // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                                                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                                                    // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                                                    // XATS2JS_NODE_strn_print_2214
                                                      // FJARGdarg($list(I1BNDcons(I1TNM(556);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(556)))))))
                                                      // I1CMP:start
                                                      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                                                    jsxtnm557 = XATS2JS_NODE_strn_print
                                                  } // endlet
                                                  jsxtnm558 = jsxtnm557
                                                  let jsxtnm559 = XATSDAPP(jsxtnm558(XATSSTRN(",")))
                                                  jsxtnm560 = jsxtnm559
                                                  XATS000_patck(true)
                                                  // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1869(line=78,offs=1)--1897(line=78,offs=29)))
                                                  // I1VALDCL
                                                  let jsxtnm568
                                                  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1878(line=78,offs=10)--1886(line=78,offs=18))
                                                  // I0Etapq(I0Ecst(g_print1(1413)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas000_vt.sats)@(2117(line=109,offs=1)--2125(line=109,offs=9))));$list(T2JAG($list(T2Pvar(a1[8496])))))
                                                  // T1IMPallx(g_print1(1413);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1635(line=59,offs=1)--1680(line=61,offs=27)))
                                                  // T1IMPallx(g_print1(1413)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8832],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_print1(1413);$list(@(x0[3751],T2Pvar(x0[8832])))))))
                                                  let jsxtnm565
                                                  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1669(line=61,offs=16)--1676(line=61,offs=23))
                                                  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x0[8832])))))
                                                  // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gint000.dats)@(2286(line=96,offs=1)--2321(line=97,offs=27)))
                                                  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(si)))))))
                                                  let jsxtnm564
                                                  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gint000.dats)@(2309(line=97,offs=15)--2319(line=97,offs=25))
                                                  // I0Etapq(I0Ecst(sint_print(922)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gint000.sats)@(1506(line=49,offs=1)--1516(line=49,offs=11))));$list(T2JAG($list())))
                                                  // T1IMPallx(sint_print(922);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(1430(line=40,offs=1)--1551(line=48,offs=2)))
                                                  // T1IMPallx(sint_print(922)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_print(922);$list()))))
                                                  let jsxtnm563
                                                  let jsxtnm562 // let
                                                  { // let
                                                    // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(1486(line=45,offs=1)--1549(line=47,offs=52)))
                                                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(1494(line=46,offs=1)--1549(line=47,offs=52))
                                                    // I1FUNDCL: XATS2JS_NODE_sint_print(5220)
                                                    // XATS2JS_NODE_sint_print_1497
                                                      // FJARGdarg($list(I1BNDcons(I1TNM(561);I0Pvar(i0(5221));$list(@(i0(5221),I1Vtnm(I1TNM(561)))))))
                                                      // I1CMP:start
                                                      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_sint_print);G1Nlist($list()))// I1CMP:return
                                                    jsxtnm562 = XATS2JS_NODE_sint_print
                                                  } // endlet
                                                  jsxtnm563 = jsxtnm562
                                                  jsxtnm564 = jsxtnm563
                                                  jsxtnm565 = jsxtnm564
                                                  let jsxtnm566 = XATSPFLT(jsxtnm542[1])
                                                  let jsxtnm567 = XATSDAPP(jsxtnm565(jsxtnm566))
                                                  jsxtnm568 = jsxtnm567
                                                  XATS000_patck(true)
                                                  // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1901(line=80,offs=1)--1925(line=80,offs=25)))
                                                  // I1VALDCL
                                                  let jsxtnm573
                                                  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1910(line=80,offs=10)--1920(line=80,offs=20))
                                                  // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                                                  // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                                                  // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                                                  let jsxtnm571
                                                  let jsxtnm570 // let
                                                  { // let
                                                    // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                                                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                                                    // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                                                    // XATS2JS_NODE_strn_print_2214
                                                      // FJARGdarg($list(I1BNDcons(I1TNM(569);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(569)))))))
                                                      // I1CMP:start
                                                      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                                                    jsxtnm570 = XATS2JS_NODE_strn_print
                                                  } // endlet
                                                  jsxtnm571 = jsxtnm570
                                                  let jsxtnm572 = XATSDAPP(jsxtnm571(XATSSTRN(")")))
                                                  jsxtnm573 = jsxtnm572
                                                  XATS000_patck(true)
                                                  jsxtnm574 = XATSVOID
                                                } // endlet
                                                // I1CMP:return:I1Vtnm(I1TNM(574))
                                                return jsxtnm574
                                              } // endtimp(g_print1(1413))
                                              let jsxtnm576 = XATSDAPP(jsxtnm575(jsxtnm525))
                                              jsxtnm577 = jsxtnm576
                                            } // endlet
                                            // I1CMP:return:I1Vtnm(I1TNM(577))
                                            return jsxtnm577
                                          } // endtimp(iforitm$work1(1450))
                                          let jsxtnm579 = XATSDAPP(jsxtnm578(jsxtnm522, jsxtnm523))
                                          jsxtnm580 = jsxtnm579
                                          XATS000_patck(true)
                                          jsxtnm581 = XATSBOOL(true)
                                        } // endlet
                                        // I1CMP:return:I1Vtnm(I1TNM(581))
                                        return jsxtnm581
                                      } // endtimp(iforall$test1(1434))
                                      let jsxtnm583 = XATSDAPP(jsxtnm582(jsxtnm521, jsxtnm516))
                                      jsxtnm584 = jsxtnm583
                                      XATS000_patck(true)
                                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6213(line=396,offs=5)--6221(line=396,offs=13))
                                      // I0Etapq(I0Ecst(p2tr_set(2313)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/unsfx00.sats)@(2611(line=127,offs=1)--2619(line=127,offs=9))));$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
                                      // T1IMPallx(p2tr_set(2313);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/unsfx00.dats)@(246(line=19,offs=1)--305(line=22,offs=27)))
                                      // T1IMPallx(p2tr_set(2313)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(a[5914],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(p2tr_set(2313);$list(@(a[5713],T2Pvar(a[5914])))))))
                                      let jsxtnm587 = function (arg1, arg2) { // timp: p2tr_set(2313)
                                        let jsxtnm585 = arg1
                                        let jsxtnm586 = arg2
                                        // I1CMP:start
                                        XATS000_assgn(jsxtnm585, jsxtnm586)
                                        // I1CMP:return:I1V000()
                                        return XATSVOID
                                      } // endtimp(p2tr_set(2313))
                                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(6232(line=396,offs=24)--6233(line=396,offs=25))
                                      // I0Etapq(I0Ecst(sint_add$sint(936)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gint000.sats)@(3081(line=142,offs=1)--3094(line=142,offs=14))));$list(T2JAG($list())))
                                      // T1IMPallx(sint_add$sint(936);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
                                      // T1IMPallx(sint_add$sint(936)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(936);$list()))))
                                      let jsxtnm594 = function (arg1, arg2) { // timp: sint_add$sint(936)
                                        let jsxtnm588 = arg1
                                        let jsxtnm589 = arg2
                                        // I1CMP:start
                                        let jsxtnm593 // let
                                        { // let
                                          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
                                          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
                                          // I1FUNDCL: XATS2JS_sint_add$sint(4938)
                                          // XATS2JS_sint_add$sint_2778
                                            // FJARGdarg($list(I1BNDcons(I1TNM(590);I0Pvar(i1(4939));$list(@(i1(4939),I1Vtnm(I1TNM(590))))),I1BNDcons(I1TNM(591);I0Pvar(i2(4940));$list(@(i2(4940),I1Vtnm(I1TNM(591)))))))
                                            // I1CMP:start
                                            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list()))// I1CMP:return
                                          let jsxtnm592 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm588, jsxtnm589))
                                          jsxtnm593 = jsxtnm592
                                        } // endlet
                                        // I1CMP:return:I1Vtnm(I1TNM(593))
                                        return jsxtnm593
                                      } // endtimp(sint_add$sint(936))
                                      let jsxtnm595 = XATSDAPP(jsxtnm594(jsxtnm521, XATSINT1(1)))
                                      let jsxtnm596 = XATSDAPP(jsxtnm587(jsxtnm503, jsxtnm595))
                                      jsxtnm597 = jsxtnm584
                                    } // endlet
                                    // I1CMP:return:I1Vtnm(I1TNM(597))
                                    return jsxtnm597
                                  } // endtimp(forall$test1(1424))
                                  let jsxtnm599 = XATSDAPP(jsxtnm598(XATSP1CN("list_vt_cons", jsxtnm515[0+1])))
                                  jsxtnm600 = jsxtnm599
                                  XATS000_patck(true)
                                  let jsxtnm602 // ift
                                  if (jsxtnm600) // ift
                                  {
                                    let jsxtnm601 = XATSDAPP(loop_1780(XATSP1CN("list_vt_cons", jsxtnm515[1+1])))
                                    jsxtnm602 = jsxtnm601
                                  } else {
                                    jsxtnm602 = XATSBOOL(false)
                                  } // end(if)
                                  jsxtnm603 = jsxtnm602
                                } // endlet
                                jsxtnm604 = jsxtnm603
                                break // cls
                              } // gpt
                              // } // cls
                              XATS000_cfail()
                            } while (false) // end-of(do)
                            // I1CMP:return:I1Vtnm(I1TNM(604))
                            return jsxtnm604
                          } // endfun(loop_1780)
                          let jsxtnm605 = XATSDAPP(loop_1780(jsxtnm512))
                          jsxtnm606 = jsxtnm605
                        } // endlet
                        // I1CMP:return:I1Vtnm(I1TNM(606))
                        return jsxtnm606
                      } // endtimp(list_vt_forall1(2066))
                      jsxtnm608 = jsxtnm607
                      let jsxtnm609 = XATSDAPP(jsxtnm608(jsxtnm501))
                      jsxtnm610 = jsxtnm609
                    } // endlet
                    jsxtnm611 = jsxtnm610
                    XATS000_patck(true)
                    jsxtnm612 = jsxtnm611
                  } // endlet
                  // I1CMP:return:I1Vtnm(I1TNM(612))
                  return jsxtnm612
                } // endtimp(gseq_iforall1(1737))
                let jsxtnm614 = XATSDAPP(jsxtnm613(jsxtnm495))
                jsxtnm615 = jsxtnm614
                XATS000_patck(true)
                jsxtnm616 = XATSVOID
              } // endlet
              jsxtnm617 = jsxtnm616
            } // endlet
            // I1CMP:return:I1Vtnm(I1TNM(617))
            return jsxtnm617
          } // endtimp(gseq_iforitm1(1761))
          let jsxtnm619 = XATSDAPP(jsxtnm618(jsxtnm478))
          jsxtnm620 = jsxtnm619
        } // endlet
        jsxtnm621 = jsxtnm620
        XATS000_patck(true)
        // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4752(line=307,offs=1)--4793(line=308,offs=33)))
        // I1VALDCL
        let jsxtnm628
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4761(line=308,offs=1)--4771(line=308,offs=11))
        // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
        // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
        // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
        let jsxtnm624
        let jsxtnm623 // let
        { // let
          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
          // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
          // XATS2JS_NODE_strn_print_2214
            // FJARGdarg($list(I1BNDcons(I1TNM(622);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(622)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
          jsxtnm623 = XATS2JS_NODE_strn_print
        } // endlet
        jsxtnm624 = jsxtnm623
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4774(line=308,offs=14)--4782(line=308,offs=22))
        // I0Etapq(I0Ecst(gseq$end(347)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gseq000.sats)@(2432(line=134,offs=1)--2440(line=134,offs=9))));$list(T2JAG($list(T2Pvar(xs[7932]))),T2JAG($list(T2Pvar(x0[7933])))))
        // T1IMPallx(gseq$end(347);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/list000_vt.dats)@(2674(line=137,offs=1)--2727(line=140,offs=26)))
        // T1IMPallx(gseq$end(347)<$list(T2JAG($list(T2Papps(T2Pcst(list_vt_i0_vx);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),T2Pnone0())))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(x0[8522],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),@(x0[8522],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq$end(347);$list(@(xs[1069],T2Papps(T2Pcst(list_vt);$list(T2Pvar(x0[8522])))),@(x0[1070],T2Pvar(x0[8522])))))))
        let jsxtnm625 = function () { // timp: gseq$end(347)
          // I1CMP:start
          // I1CMP:return:I1Vstr(...)
          return XATSSTRN(")")
        } // endtimp(gseq$end(347))
        let jsxtnm626 = XATSDAPP(jsxtnm625())
        let jsxtnm627 = XATSDAPP(jsxtnm624(jsxtnm626))
        jsxtnm628 = jsxtnm627
        XATS000_patck(true)
        jsxtnm629 = XATSVOID
      } // endlet
      // I1CMP:return:I1Vtnm(I1TNM(629))
      return jsxtnm629
    } // endtimp(gseq_print1(1688))
    let jsxtnm631 = XATSDAPP(jsxtnm630(jsxtnm477))
    // I1CMP:return:I1Vtnm(I1TNM(631))
    return jsxtnm631
  } // endtimp(g_print1(1413))
  let jsxtnm633 = XATSDAPP(jsxtnm632(jsxtnm410))
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gsyn000_vt.dats)@(6074(line=307,offs=39)--6082(line=307,offs=47))
  // I0Etapq(I0Ecst(g_print1(1413)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas000_vt.sats)@(2117(line=109,offs=1)--2125(line=109,offs=9))));$list(T2JAG($list(T2Pvar(x4[8419])))))
  // T1IMPallx(g_print1(1413);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1635(line=59,offs=1)--1680(line=61,offs=27)))
  // T1IMPallx(g_print1(1413)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8832],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_print1(1413);$list(@(x0[3751],T2Pvar(x0[8832])))))))
  let jsxtnm638
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1669(line=61,offs=16)--1676(line=61,offs=23))
  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x0[8832])))))
  // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(strn)))))))
  let jsxtnm637
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
  // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
  // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
  // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
  let jsxtnm636
  let jsxtnm635 // let
  { // let
    // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
    // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
    // XATS2JS_NODE_strn_print_2214
      // FJARGdarg($list(I1BNDcons(I1TNM(634);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(634)))))))
      // I1CMP:start
      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
    jsxtnm635 = XATS2JS_NODE_strn_print
  } // endlet
  jsxtnm636 = jsxtnm635
  jsxtnm637 = jsxtnm636
  jsxtnm638 = jsxtnm637
  let jsxtnm639 = XATSDAPP(jsxtnm638(jsxtnm411))
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gsyn000_vt.dats)@(6094(line=308,offs=3)--6107(line=308,offs=16))
  // I0Etapq(I0Ecst(gs_print1$end(1974)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gsyn000_vt.sats)@(1564(line=55,offs=1)--1577(line=55,offs=14))));$list(T2JAG($list())))
  // T1IMPallx(gs_print1$end(1974);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gsyn000_vt.dats)@(5133(line=245,offs=1)--5172(line=247,offs=21)))
  // T1IMPallx(gs_print1$end(1974)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print1$end(1974);$list()))))
  let jsxtnm641 = function () { // timp: gs_print1$end(1974)
    // I1CMP:start
    let jsxtnm640 = XATSTUP0([])
    // I1CMP:return:I1Vtnm(I1TNM(640))
    return jsxtnm640
  } // endtimp(gs_print1$end(1974))
  let jsxtnm642 = XATSDAPP(jsxtnm641())
  // I1CMP:return:I1Vtnm(I1TNM(642))
  return jsxtnm642
} // endtimp(gs_print1_a5(1991))
// LCSRCsome1(test02_jshmap0.dats)@(704(line=41,offs=11)--708(line=41,offs=15))
// I0Etapq(I0Ecst(g_vwtp(197)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(1900(line=66,offs=1)--1906(line=66,offs=7))));$list(T2JAG($list())))
// T1IMPallx(g_vwtp(197);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(1559(line=50,offs=1)--1619(line=54,offs=22)))
// T1IMPallx(g_vwtp(197)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_vwtp(197);$list()))))
let jsxtnm647 = function (arg1) { // timp: g_vwtp(197)
  let jsxtnm644 = arg1
  // I1CMP:start
  let jsxtnm645 = XATSCAPP("unit", [0])
  let jsxtnm646 = XATSCAST("castxy_1839", [jsxtnm645])
  // I1CMP:return:I1Vtnm(I1TNM(646))
  return jsxtnm646
} // endtimp(g_vwtp(197))
let jsxtnm648 = XATSDAPP(jsxtnm647(jsxtnm406))
let jsxtnm649 = XATSDAPP(jsxtnm643(XATSSTRN("kxs1("), jsxtnm648, XATSSTRN(") = "), jsxtnm406, XATSSTRN("\n")))
jsxtnm650 = jsxtnm649
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(test02_jshmap0.dats)@(762(line=45,offs=1)--800(line=46,offs=28)))
// I1VALDCL
let jsxtnm711
// LCSRCsome1(test02_jshmap0.dats)@(777(line=46,offs=5)--800(line=46,offs=28))
// I0Etapq(I0Ecst(jshmap_strmize(2762)(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(3900(line=204,offs=1)--3914(line=204,offs=15))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))
// T1IMPallx(jshmap_strmize(2762);LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(12099(line=798,offs=1)--12745(line=850,offs=2)))
// T1IMPallx(jshmap_strmize(2762)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(k[9136],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x[9137],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(jshmap_strmize(2762);$list(@(k[9058],T2Pvar(k[9136])),@(x[9059],T2Pvar(x[9137])))))))
let jsxtnm709 = function (arg1) { // timp: jshmap_strmize(2762)
  let jsxtnm651 = arg1
  // I1CMP:start
  let jsxtnm708 // let
  { // let
    // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(12196(line=809,offs=1)--12228(line=810,offs=24))
    // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(iter;S2Eapps(S2Ecst(S2Tfun1($list(S2Tbas(T2Bimpr(0;type)),S2Tbas(T2Bimpr(2;vwtp)));S2Tbas(T2Bimpr(2;vwtp)));jshmap$iter);$list(S2Evar(S2Tbas(T2Bimpr(0;type));k[9136]),S2Evar(S2Tbas(T2Bimpr(2;vwtp));x[9137])))))))
    // I1Dvardclist(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(12232(line=812,offs=1)--12241(line=812,offs=10)))
    // I1VARDCL
    let jsxtnm652 = XATSVAR0()
    // I1Dvardclist(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(12242(line=813,offs=1)--12251(line=813,offs=10)))
    // I1VARDCL
    let jsxtnm653 = XATSVAR0()
    // I1Dvaldclist(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(12252(line=814,offs=1)--12270(line=814,offs=19)))
    // I1VALDCL
    let jsxtnm654
    jsxtnm654 = XATSADDR(jsxtnm652)
    XATS000_patck(true)
    // I1Dvaldclist(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(12271(line=815,offs=1)--12289(line=815,offs=19)))
    // I1VALDCL
    let jsxtnm655
    jsxtnm655 = XATSADDR(jsxtnm653)
    XATS000_patck(true)
    // I1Dfundclist(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(12293(line=817,offs=1)--12701(line=848,offs=4)))
    // I1FUNDCL
    function auxmain_12296(arg1)
    { // fun
      let jsxtnm656 = arg1
      // I1CMP:start
      let jsxtnm700 = XATS000_l1azy(function (tlaz) { // l1azy
        // I1CMP:start
        let jsxtnm699 // let
        { // let
          // I1Dfundclist(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(12351(line=823,offs=1)--12441(line=827,offs=35)))
          // I1FUNDCL
          function work_12354(arg1, arg2)
          { // fun
            let jsxtnm657 = arg1
            let jsxtnm658 = arg2
            // I1CMP:start
            // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(12387(line=826,offs=5)--12395(line=826,offs=13))
            // I0Etapq(I0Ecst(p2tr_set(2313)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/unsfx00.sats)@(2611(line=127,offs=1)--2619(line=127,offs=9))));$list(T2JAG($list(T2Pvar(k[9136])))))
            // T1IMPallx(p2tr_set(2313);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/unsfx00.dats)@(246(line=19,offs=1)--305(line=22,offs=27)))
            // T1IMPallx(p2tr_set(2313)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(a[5914],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(p2tr_set(2313);$list(@(a[5713],T2Pvar(a[5914])))))))
            let jsxtnm661 = function (arg1, arg2) { // timp: p2tr_set(2313)
              let jsxtnm659 = arg1
              let jsxtnm660 = arg2
              // I1CMP:start
              XATS000_assgn(jsxtnm659, jsxtnm660)
              // I1CMP:return:I1V000()
              return XATSVOID
            } // endtimp(p2tr_set(2313))
            let jsxtnm662 = XATSDAPP(jsxtnm661(jsxtnm654, jsxtnm657))
            // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(12411(line=827,offs=5)--12419(line=827,offs=13))
            // I0Etapq(I0Ecst(p2tr_set(2313)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/unsfx00.sats)@(2611(line=127,offs=1)--2619(line=127,offs=9))));$list(T2JAG($list(T2Pvar(x[9137])))))
            // T1IMPallx(p2tr_set(2313);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/unsfx00.dats)@(246(line=19,offs=1)--305(line=22,offs=27)))
            // T1IMPallx(p2tr_set(2313)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(a[5914],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(p2tr_set(2313);$list(@(a[5713],T2Pvar(a[5914])))))))
            let jsxtnm665 = function (arg1, arg2) { // timp: p2tr_set(2313)
              let jsxtnm663 = arg1
              let jsxtnm664 = arg2
              // I1CMP:start
              XATS000_assgn(jsxtnm663, jsxtnm664)
              // I1CMP:return:I1V000()
              return XATSVOID
            } // endtimp(p2tr_set(2313))
            // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(12427(line=827,offs=21)--12433(line=827,offs=27))
            // I0Etapq(I0Ecst(g_copy(24)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(1625(line=60,offs=1)--1631(line=60,offs=7))));$list(T2JAG($list(T2Pvar(x[9137])))))
            // T1IMPallx(g_copy(24);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gbas000.dats)@(1648(line=59,offs=1)--1688(line=61,offs=22)))
            // T1IMPallx(g_copy(24)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[5791],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_copy(24);$list(@(a[432],T2Pvar(x0[5791])))))))
            let jsxtnm667 = function (arg1) { // timp: g_copy(24)
              let jsxtnm666 = arg1
              // I1CMP:start
              // I1CMP:return:I1Vtnm(I1TNM(666))
              return jsxtnm666
            } // endtimp(g_copy(24))
            let jsxtnm668 = XATSDAPP(jsxtnm667(jsxtnm658))
            let jsxtnm669 = XATSDAPP(jsxtnm665(jsxtnm655, jsxtnm668))
            // I1CMP:return:I1Vtnm(I1TNM(669))
            return jsxtnm669
          } // endfun(work_12354)
          // I1Dvaldclist(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(12445(line=829,offs=1)--12491(line=830,offs=36)))
          // I1VALDCL
          let jsxtnm678
          // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(12456(line=830,offs=1)--12477(line=830,offs=22))
          // I0Etapq(I0Ecst(jshmap$iter_next$work(2786)(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(11332(line=745,offs=1)--11353(line=745,offs=22))));$list(T2JAG($list())))
          // T1IMPallx(jshmap$iter_next$work(2786);LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(11741(line=775,offs=1)--11995(line=791,offs=2)))
          // T1IMPallx(jshmap$iter_next$work(2786)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(jshmap$iter_next$work(2786);$list()))))
          let jsxtnm676 = function (arg1, arg2) { // timp: jshmap$iter_next$work(2786)
            let jsxtnm670 = arg1
            let jsxtnm671 = arg2
            // I1CMP:start
            let jsxtnm675 // let
            { // let
              // I1Dextern(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(11855(line=783,offs=1)--11993(line=790,offs=49)))
              // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(11863(line=784,offs=1)--11993(line=790,offs=49))
              // I1FUNDCL: XATS2JS_jshmap$iter_next$work(5562)
              // XATS2JS_jshmap$iter_next$work_11866
                // FJARGdarg($list(I1BNDcons(I1TNM(672);I0Pvar(iter(5563));$list(@(iter(5563),I1Vtnm(I1TNM(672))))),I1BNDcons(I1TNM(673);I0Pvar(work(5564));$list(@(work(5564),I1Vtnm(I1TNM(673)))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_jshmap$iter_next$work);G1Nlist($list()))// I1CMP:return
              let jsxtnm674 = XATSDAPP(XATS2JS_jshmap$iter_next$work(jsxtnm670, jsxtnm671))
              jsxtnm675 = jsxtnm674
            } // endlet
            // I1CMP:return:I1Vtnm(I1TNM(675))
            return jsxtnm675
          } // endtimp(jshmap$iter_next$work(2786))
          let jsxtnm677 = XATSDAPP(jsxtnm676(jsxtnm656, work_12354))
          jsxtnm678 = jsxtnm677
          XATS000_patck(true)
          // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(12509(line=835,offs=1)--12512(line=835,offs=4))
          // I0Etapq(I0Ecst(bool_neg(866)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/bool000.sats)@(1748(line=63,offs=1)--1756(line=63,offs=9))));$list(T2JAG($list())))
          // T1IMPallx(bool_neg(866);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/bool000.dats)@(1851(line=70,offs=1)--1916(line=74,offs=30)))
          // T1IMPallx(bool_neg(866)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(bool_neg(866);$list()))))
          let jsxtnm681 = function (arg1) { // timp: bool_neg(866)
            let jsxtnm679 = arg1
            // I1CMP:start
            let jsxtnm680 // ift
            if (jsxtnm679) // ift
            {
              jsxtnm680 = XATSBOOL(false)
            } else {
              jsxtnm680 = XATSBOOL(true)
            } // end(if)
            // I1CMP:return:I1Vtnm(I1TNM(680))
            return jsxtnm680
          } // endtimp(bool_neg(866))
          let jsxtnm682 = XATSDAPP(jsxtnm681(jsxtnm678))
          let jsxtnm698 // ift
          if (jsxtnm682) // ift
          {
            let jsxtnm683 = XATSCAPP("strmcon_vt_nil", [0])
            jsxtnm698 = jsxtnm683
          } else {
            let jsxtnm697 // let
            { // let
              // I1Dvaldclist(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(12554(line=841,offs=1)--12581(line=842,offs=20)))
              // I1VALDCL
              let jsxtnm688
              // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(12566(line=842,offs=5)--12574(line=842,offs=13))
              // I0Etapq(I0Ecst(p2tr_get(2312)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/unsfx00.sats)@(2573(line=124,offs=1)--2581(line=124,offs=9))));$list(T2JAG($list(T2Pvar(k[9136])))))
              // T1IMPallx(p2tr_get(2312);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/unsfx00.dats)@(197(line=15,offs=1)--245(line=18,offs=17)))
              // T1IMPallx(p2tr_get(2312)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(a[5913],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(p2tr_get(2312);$list(@(a[5712],T2Pvar(a[5913])))))))
              let jsxtnm686 = function (arg1) { // timp: p2tr_get(2312)
                let jsxtnm684 = arg1
                // I1CMP:start
                let jsxtnm685 = XATS000_dp2tr(jsxtnm684)
                // I1CMP:return:I1Vtnm(I1TNM(685))
                return jsxtnm685
              } // endtimp(p2tr_get(2312))
              let jsxtnm687 = XATSDAPP(jsxtnm686(jsxtnm654))
              jsxtnm688 = jsxtnm687
              XATS000_patck(true)
              // I1Dvaldclist(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(12582(line=843,offs=1)--12609(line=844,offs=20)))
              // I1VALDCL
              let jsxtnm693
              // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(12594(line=844,offs=5)--12602(line=844,offs=13))
              // I0Etapq(I0Ecst(p2tr_get(2312)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/unsfx00.sats)@(2573(line=124,offs=1)--2581(line=124,offs=9))));$list(T2JAG($list(T2Pvar(x[9137])))))
              // T1IMPallx(p2tr_get(2312);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/unsfx00.dats)@(197(line=15,offs=1)--245(line=18,offs=17)))
              // T1IMPallx(p2tr_get(2312)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(a[5913],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(p2tr_get(2312);$list(@(a[5712],T2Pvar(a[5913])))))))
              let jsxtnm691 = function (arg1) { // timp: p2tr_get(2312)
                let jsxtnm689 = arg1
                // I1CMP:start
                let jsxtnm690 = XATS000_dp2tr(jsxtnm689)
                // I1CMP:return:I1Vtnm(I1TNM(690))
                return jsxtnm690
              } // endtimp(p2tr_get(2312))
              let jsxtnm692 = XATSDAPP(jsxtnm691(jsxtnm655))
              jsxtnm693 = jsxtnm692
              XATS000_patck(true)
              let jsxtnm694 = XATSTUP0([jsxtnm688, jsxtnm693])
              let jsxtnm695 = XATSDAPP(auxmain_12296(jsxtnm656))
              let jsxtnm696 = XATSCAPP("strmcon_vt_cons", [1, jsxtnm694, jsxtnm695])
              jsxtnm697 = jsxtnm696
            } // endlet
            jsxtnm698 = jsxtnm697
          } // end(if)
          jsxtnm699 = jsxtnm698
        } // endlet
        // I1CMP:return:I1Vtnm(I1TNM(699))
        return jsxtnm699
      }) // endfun(l1azy)
      // I1CMP:return:I1Vtnm(I1TNM(700))
      return jsxtnm700
    } // endfun(auxmain_12296)
    // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(12166(line=805,offs=2)--12177(line=805,offs=13))
    // I0Etapq(I0Ecst(jshmap$iter_make(2785)(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(11248(line=738,offs=1)--11264(line=738,offs=17))));$list(T2JAG($list())))
    // T1IMPallx(jshmap$iter_make(2785);LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(11466(line=754,offs=1)--11663(line=769,offs=2)))
    // T1IMPallx(jshmap$iter_make(2785)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(jshmap$iter_make(2785);$list()))))
    let jsxtnm705 = function (arg1) { // timp: jshmap$iter_make(2785)
      let jsxtnm701 = arg1
      // I1CMP:start
      let jsxtnm704 // let
      { // let
        // I1Dextern(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(11560(line=762,offs=1)--11661(line=768,offs=31)))
        // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(11568(line=763,offs=1)--11661(line=768,offs=31))
        // I1FUNDCL: XATS2JS_jshmap$iter_make(5558)
        // XATS2JS_jshmap$iter_make_11571
          // FJARGdarg($list(I1BNDcons(I1TNM(702);I0Pvar(map(5559));$list(@(map(5559),I1Vtnm(I1TNM(702)))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_jshmap$iter_make);G1Nlist($list()))// I1CMP:return
        let jsxtnm703 = XATSDAPP(XATS2JS_jshmap$iter_make(jsxtnm701))
        jsxtnm704 = jsxtnm703
      } // endlet
      // I1CMP:return:I1Vtnm(I1TNM(704))
      return jsxtnm704
    } // endtimp(jshmap$iter_make(2785))
    let jsxtnm706 = XATSDAPP(jsxtnm705(jsxtnm651))
    let jsxtnm707 = XATSDAPP(auxmain_12296(jsxtnm706))
    jsxtnm708 = jsxtnm707
  } // endlet
  // I1CMP:return:I1Vtnm(I1TNM(708))
  return jsxtnm708
} // endtimp(jshmap_strmize(2762))
let jsxtnm710 = XATSDAPP(jsxtnm709(jsxtnm54))
jsxtnm711 = jsxtnm710
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(test02_jshmap0.dats)@(801(line=47,offs=1)--861(line=48,offs=42)))
// I1VALDCL
let jsxtnm1052
// LCSRCsome1(test02_jshmap0.dats)@(812(line=47,offs=12)--819(line=47,offs=19))
// I0Etapq(I0Ecst(gs_print0_a5(1979)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gsyn000_vt.sats)@(1912(line=90,offs=1)--1924(line=90,offs=13))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(type_vw_t0);$list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
// T1IMPallx(gs_print0_a5(1979);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gsyn000_vt.dats)@(2227(line=98,offs=1)--2458(line=109,offs=21)))
// T1IMPallx(gs_print0_a5(1979)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(type_vw_t0);$list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8337],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[8338],T2Papps(T2Pcst(type_vw_t0);$list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))),@(x2[8339],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[8340],T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))),@(x4[8341],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print0_a5(1979);$list(@(x0[5049],T2Pvar(x0[8337])),@(x1[5050],T2Pvar(x1[8338])),@(x2[5051],T2Pvar(x2[8339])),@(x3[5052],T2Pvar(x3[8340])),@(x4[5053],T2Pvar(x4[8341])))))))
let jsxtnm1045 = function (arg1, arg2, arg3, arg4, arg5) { // timp: gs_print0_a5(1979)
  let jsxtnm712 = arg1
  let jsxtnm713 = arg2
  let jsxtnm714 = arg3
  let jsxtnm715 = arg4
  let jsxtnm716 = arg5
  // I1CMP:start
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gsyn000_vt.dats)@(2326(line=106,offs=3)--2339(line=106,offs=16))
  // I0Etapq(I0Ecst(gs_print0$beg(1971)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gsyn000_vt.sats)@(1430(line=43,offs=1)--1443(line=43,offs=14))));$list(T2JAG($list())))
  // T1IMPallx(gs_print0$beg(1971);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gsyn000_vt.dats)@(1436(line=42,offs=1)--1475(line=44,offs=21)))
  // T1IMPallx(gs_print0$beg(1971)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print0$beg(1971);$list()))))
  let jsxtnm718 = function () { // timp: gs_print0$beg(1971)
    // I1CMP:start
    let jsxtnm717 = XATSTUP0([])
    // I1CMP:return:I1Vtnm(I1TNM(717))
    return jsxtnm717
  } // endtimp(gs_print0$beg(1971))
  let jsxtnm719 = XATSDAPP(jsxtnm718())
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gsyn000_vt.dats)@(2347(line=107,offs=3)--2355(line=107,offs=11))
  // I0Etapq(I0Ecst(g_print0(1412)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas000_vt.sats)@(2080(line=106,offs=1)--2088(line=106,offs=9))));$list(T2JAG($list(T2Pvar(x0[8337])))))
  // T1IMPallx(g_print0(1412);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1589(line=56,offs=1)--1634(line=58,offs=27)))
  // T1IMPallx(g_print0(1412)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8831],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_print0(1412);$list(@(x0[3750],T2Pvar(x0[8831])))))))
  let jsxtnm724
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1623(line=58,offs=16)--1630(line=58,offs=23))
  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x0[8831])))))
  // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(strn)))))))
  let jsxtnm723
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
  // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
  // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
  // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
  let jsxtnm722
  let jsxtnm721 // let
  { // let
    // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
    // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
    // XATS2JS_NODE_strn_print_2214
      // FJARGdarg($list(I1BNDcons(I1TNM(720);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(720)))))))
      // I1CMP:start
      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
    jsxtnm721 = XATS2JS_NODE_strn_print
  } // endlet
  jsxtnm722 = jsxtnm721
  jsxtnm723 = jsxtnm722
  jsxtnm724 = jsxtnm723
  let jsxtnm725 = XATSDAPP(jsxtnm724(jsxtnm712))
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gsyn000_vt.dats)@(2365(line=107,offs=21)--2373(line=107,offs=29))
  // I0Etapq(I0Ecst(g_print0(1412)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas000_vt.sats)@(2080(line=106,offs=1)--2088(line=106,offs=9))));$list(T2JAG($list(T2Pvar(x1[8338])))))
  // T1IMPallx(g_print0(1412);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1589(line=56,offs=1)--1634(line=58,offs=27)))
  // T1IMPallx(g_print0(1412)<$list(T2JAG($list(T2Papps(T2Pcst(type_vw_t0);$list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))))))>;I1Dtmpsub($list(@(x0[8831],T2Papps(T2Pcst(type_vw_t0);$list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))));I1Dimplmnt0(DIMPLone2(g_print0(1412);$list(@(x0[3750],T2Pvar(x0[8831])))))))
  let jsxtnm774
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1623(line=58,offs=16)--1630(line=58,offs=23))
  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x0[8831])))))
  // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(4710(line=318,offs=1)--4814(line=324,offs=32)))
  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(type_vw_t0);$list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))))))>;I1Dtmpsub($list(@(vw[5785],T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))));I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Papps(T2Pcst(type);$list(T2Pvar(vw[5785])))))))))
  let jsxtnm773 = function (arg1) { // timp: g_print(39)
    let jsxtnm726 = arg1
    // I1CMP:start
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(4760(line=323,offs=1)--4767(line=323,offs=8))
    // I0Etapq(I0Ecst(g_ptype(202)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(2386(line=100,offs=1)--2393(line=100,offs=8))));$list(T2JAG($list(T2Pvar(vw[5785])))))
    // T1IMPallx(g_ptype(202);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(1553(line=54,offs=1)--1661(line=61,offs=32)))
    // T1IMPallx(g_ptype(202)<$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))))>;I1Dtmpsub($list(@(vt[8662],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(g_ptype(202);$list(@(vw[773],T2Papps(T2Pcst(strm_vt);$list(T2Pvar(vt[8662])))))))))
    let jsxtnm761 = function () { // timp: g_ptype(202)
      // I1CMP:start
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(1611(line=60,offs=1)--1616(line=60,offs=6))
      // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
      // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
      let jsxtnm729
      let jsxtnm728 // let
      { // let
        // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
        // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
        // XATS2JS_NODE_strn_print_2214
          // FJARGdarg($list(I1BNDcons(I1TNM(727);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(727)))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
        jsxtnm728 = XATS2JS_NODE_strn_print
      } // endlet
      jsxtnm729 = jsxtnm728
      let jsxtnm730 = XATSDAPP(jsxtnm729(XATSSTRN("strm_vt(")))
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(1630(line=61,offs=1)--1637(line=61,offs=8))
      // I0Etapq(I0Ecst(g_ptype(202)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(2386(line=100,offs=1)--2393(line=100,offs=8))));$list(T2JAG($list(T2Pvar(vt[8662])))))
      // T1IMPallx(g_ptype(202);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(1835(line=66,offs=1)--1973(line=74,offs=29)))
      // T1IMPallx(g_ptype(202)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(a0[7357],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(a1[7358],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_ptype(202);$list(@(vw[773],T2Papps(T2Pcst(t0up);$list(T2Pvar(a0[7357]),T2Pvar(a1[7358])))))))))
      let jsxtnm755 = function () { // timp: g_ptype(202)
        // I1CMP:start
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(1903(line=72,offs=3)--1908(line=72,offs=8))
        // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
        // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
        // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
        let jsxtnm733
        let jsxtnm732 // let
        { // let
          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
          // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
          // XATS2JS_NODE_strn_print_2214
            // FJARGdarg($list(I1BNDcons(I1TNM(731);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(731)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
          jsxtnm732 = XATS2JS_NODE_strn_print
        } // endlet
        jsxtnm733 = jsxtnm732
        let jsxtnm734 = XATSDAPP(jsxtnm733(XATSSTRN("t0up2(")))
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(1919(line=73,offs=3)--1926(line=73,offs=10))
        // I0Etapq(I0Ecst(g_ptype(202)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(2386(line=100,offs=1)--2393(line=100,offs=8))));$list(T2JAG($list(T2Pvar(a0[7357])))))
        // T1IMPallx(g_ptype(202);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(2934(line=164,offs=1)--2988(line=167,offs=29)))
        // T1IMPallx(g_ptype(202)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_ptype(202);$list(@(vw[773],T2Pcst(strn)))))))
        let jsxtnm739 = function () { // timp: g_ptype(202)
          // I1CMP:start
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(2975(line=167,offs=16)--2980(line=167,offs=21))
          // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
          // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
          // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
          let jsxtnm737
          let jsxtnm736 // let
          { // let
            // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
            // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
            // XATS2JS_NODE_strn_print_2214
              // FJARGdarg($list(I1BNDcons(I1TNM(735);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(735)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
            jsxtnm736 = XATS2JS_NODE_strn_print
          } // endlet
          jsxtnm737 = jsxtnm736
          let jsxtnm738 = XATSDAPP(jsxtnm737(XATSSTRN("strn")))
          // I1CMP:return:I1Vtnm(I1TNM(738))
          return jsxtnm738
        } // endtimp(g_ptype(202))
        let jsxtnm740 = XATSDAPP(jsxtnm739())
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(1934(line=73,offs=18)--1939(line=73,offs=23))
        // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
        // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
        // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
        let jsxtnm743
        let jsxtnm742 // let
        { // let
          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
          // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
          // XATS2JS_NODE_strn_print_2214
            // FJARGdarg($list(I1BNDcons(I1TNM(741);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(741)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
          jsxtnm742 = XATS2JS_NODE_strn_print
        } // endlet
        jsxtnm743 = jsxtnm742
        let jsxtnm744 = XATSDAPP(jsxtnm743(XATSSTRN(",")))
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(1947(line=74,offs=3)--1954(line=74,offs=10))
        // I0Etapq(I0Ecst(g_ptype(202)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(2386(line=100,offs=1)--2393(line=100,offs=8))));$list(T2JAG($list(T2Pvar(a1[7358])))))
        // T1IMPallx(g_ptype(202);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(2708(line=146,offs=1)--2762(line=149,offs=29)))
        // T1IMPallx(g_ptype(202)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_ptype(202);$list(@(vw[773],T2Pcst(sint)))))))
        let jsxtnm749 = function () { // timp: g_ptype(202)
          // I1CMP:start
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(2749(line=149,offs=16)--2754(line=149,offs=21))
          // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
          // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
          // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
          let jsxtnm747
          let jsxtnm746 // let
          { // let
            // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
            // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
            // XATS2JS_NODE_strn_print_2214
              // FJARGdarg($list(I1BNDcons(I1TNM(745);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(745)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
            jsxtnm746 = XATS2JS_NODE_strn_print
          } // endlet
          jsxtnm747 = jsxtnm746
          let jsxtnm748 = XATSDAPP(jsxtnm747(XATSSTRN("sint")))
          // I1CMP:return:I1Vtnm(I1TNM(748))
          return jsxtnm748
        } // endtimp(g_ptype(202))
        let jsxtnm750 = XATSDAPP(jsxtnm749())
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(1962(line=74,offs=18)--1967(line=74,offs=23))
        // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
        // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
        // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
        let jsxtnm753
        let jsxtnm752 // let
        { // let
          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
          // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
          // XATS2JS_NODE_strn_print_2214
            // FJARGdarg($list(I1BNDcons(I1TNM(751);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(751)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
          jsxtnm752 = XATS2JS_NODE_strn_print
        } // endlet
        jsxtnm753 = jsxtnm752
        let jsxtnm754 = XATSDAPP(jsxtnm753(XATSSTRN(")")))
        // I1CMP:return:I1Vtnm(I1TNM(754))
        return jsxtnm754
      } // endtimp(g_ptype(202))
      let jsxtnm756 = XATSDAPP(jsxtnm755())
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(1650(line=61,offs=21)--1655(line=61,offs=26))
      // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
      // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
      let jsxtnm759
      let jsxtnm758 // let
      { // let
        // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
        // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
        // XATS2JS_NODE_strn_print_2214
          // FJARGdarg($list(I1BNDcons(I1TNM(757);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(757)))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
        jsxtnm758 = XATS2JS_NODE_strn_print
      } // endlet
      jsxtnm759 = jsxtnm758
      let jsxtnm760 = XATSDAPP(jsxtnm759(XATSSTRN(")")))
      // I1CMP:return:I1Vtnm(I1TNM(760))
      return jsxtnm760
    } // endtimp(g_ptype(202))
    let jsxtnm762 = XATSDAPP(jsxtnm761())
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(4783(line=324,offs=1)--4788(line=324,offs=6))
    // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
    // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
    // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
    let jsxtnm765
    let jsxtnm764 // let
    { // let
      // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
      // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
      // XATS2JS_NODE_strn_print_2214
        // FJARGdarg($list(I1BNDcons(I1TNM(763);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(763)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
      jsxtnm764 = XATS2JS_NODE_strn_print
    } // endlet
    jsxtnm765 = jsxtnm764
    let jsxtnm766 = XATSDAPP(jsxtnm765(XATSSTRN(":")))
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(4792(line=324,offs=10)--4799(line=324,offs=17))
    // I0Etapq(I0Ecst(g_psort(201)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(2346(line=97,offs=1)--2353(line=97,offs=8))));$list(T2JAG($list(T2Pvar(vw[5785])))))
    // T1IMPallx(g_psort(201);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(1721(line=64,offs=1)--1775(line=68,offs=22)))
    // T1IMPallx(g_psort(201)<$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))))>;I1Dtmpsub($list(@(vx[5758],T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))));I1Dimplmnt0(DIMPLone2(g_psort(201);$list(@(vw[772],T2Pvar(vx[5758])))))))
    let jsxtnm771 = function () { // timp: g_psort(201)
      // I1CMP:start
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(1756(line=68,offs=3)--1766(line=68,offs=13))
      // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
      // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
      let jsxtnm769
      let jsxtnm768 // let
      { // let
        // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
        // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
        // XATS2JS_NODE_strn_print_2214
          // FJARGdarg($list(I1BNDcons(I1TNM(767);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(767)))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
        jsxtnm768 = XATS2JS_NODE_strn_print
      } // endlet
      jsxtnm769 = jsxtnm768
      let jsxtnm770 = XATSDAPP(jsxtnm769(XATSSTRN("vtbx")))
      // I1CMP:return:I1Vtnm(I1TNM(770))
      return jsxtnm770
    } // endtimp(g_psort(201))
    let jsxtnm772 = XATSDAPP(jsxtnm771())
    // I1CMP:return:I1Vtnm(I1TNM(772))
    return jsxtnm772
  } // endtimp(g_print(39))
  jsxtnm774 = jsxtnm773
  let jsxtnm775 = XATSDAPP(jsxtnm774(jsxtnm713))
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gsyn000_vt.dats)@(2384(line=108,offs=3)--2392(line=108,offs=11))
  // I0Etapq(I0Ecst(g_print0(1412)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas000_vt.sats)@(2080(line=106,offs=1)--2088(line=106,offs=9))));$list(T2JAG($list(T2Pvar(x2[8339])))))
  // T1IMPallx(g_print0(1412);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1589(line=56,offs=1)--1634(line=58,offs=27)))
  // T1IMPallx(g_print0(1412)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8831],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_print0(1412);$list(@(x0[3750],T2Pvar(x0[8831])))))))
  let jsxtnm780
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1623(line=58,offs=16)--1630(line=58,offs=23))
  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x0[8831])))))
  // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(strn)))))))
  let jsxtnm779
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
  // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
  // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
  // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
  let jsxtnm778
  let jsxtnm777 // let
  { // let
    // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
    // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
    // XATS2JS_NODE_strn_print_2214
      // FJARGdarg($list(I1BNDcons(I1TNM(776);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(776)))))))
      // I1CMP:start
      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
    jsxtnm777 = XATS2JS_NODE_strn_print
  } // endlet
  jsxtnm778 = jsxtnm777
  jsxtnm779 = jsxtnm778
  jsxtnm780 = jsxtnm779
  let jsxtnm781 = XATSDAPP(jsxtnm780(jsxtnm714))
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gsyn000_vt.dats)@(2402(line=108,offs=21)--2410(line=108,offs=29))
  // I0Etapq(I0Ecst(g_print0(1412)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas000_vt.sats)@(2080(line=106,offs=1)--2088(line=106,offs=9))));$list(T2JAG($list(T2Pvar(x3[8340])))))
  // T1IMPallx(g_print0(1412);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(8152(line=592,offs=1)--8213(line=594,offs=43)))
  // T1IMPallx(g_print0(1412)<$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))))>;I1Dtmpsub($list(@(x0[8694],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(g_print0(1412);$list(@(x0[3750],T2Papps(T2Pcst(strm_vt);$list(T2Pvar(x0[8694])))))))))
  let jsxtnm1034
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(8195(line=594,offs=25)--8209(line=594,offs=39))
  // I0Etapq(I0Ecst(strm_vt_print0(2186)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/strm000_vt.sats)@(6772(line=414,offs=1)--6786(line=414,offs=15))));$list(T2JAG($list(T2Pvar(x0[8694])))))
  // T1IMPallx(strm_vt_print0(2186);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(6246(line=415,offs=1)--6470(line=431,offs=4)))
  // T1IMPallx(strm_vt_print0(2186)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(x0[8691],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(strm_vt_print0(2186);$list(@(x0[5502],T2Pvar(x0[8691])))))))
  let jsxtnm1033 = function (arg1) { // timp: strm_vt_print0(2186)
    let jsxtnm782 = arg1
    // I1CMP:start
    let jsxtnm1032 // let
    { // let
      // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(6331(line=423,offs=1)--6376(line=425,offs=25)))
      // I1VALDCL
      let jsxtnm791
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(6341(line=424,offs=1)--6351(line=424,offs=11))
      // I0Etapq(I0Ecst(gseq$prlen(350)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gseq000.sats)@(2613(line=154,offs=1)--2623(line=154,offs=11))));$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Pvar(x0[8691]))))))),T2JAG($list(T2Pvar(x0[8691])))))
      // T1IMPallx(gseq$prlen(350);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq000.dats)@(1773(line=71,offs=1)--1828(line=74,offs=27)))
      // T1IMPallx(gseq$prlen(350)<$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[6039],T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))),@(x0[6040],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq$prlen(350);$list(@(xs[1075],T2Pvar(xs[6039])),@(x0[1076],T2Pvar(x0[6040])))))))
      let jsxtnm789 = function () { // timp: gseq$prlen(350)
        // I1CMP:start
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq000.dats)@(1824(line=74,offs=23)--1825(line=74,offs=24))
        // I0Etapq(I0Ecst(sint_neg(923)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gint000.sats)@(1585(line=55,offs=1)--1593(line=55,offs=9))));$list(T2JAG($list())))
        // T1IMPallx(sint_neg(923);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1430(line=40,offs=1)--1565(line=51,offs=31)))
        // T1IMPallx(sint_neg(923)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_neg(923);$list()))))
        let jsxtnm787 = function (arg1) { // timp: sint_neg(923)
          let jsxtnm783 = arg1
          // I1CMP:start
          let jsxtnm786 // let
          { // let
            // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1506(line=48,offs=1)--1563(line=51,offs=29)))
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1514(line=49,offs=1)--1563(line=51,offs=29))
            // I1FUNDCL: XATS2JS_sint_neg(4904)
            // XATS2JS_sint_neg_1517
              // FJARGdarg($list(I1BNDcons(I1TNM(784);I0Pvar(i1(4905));$list(@(i1(4905),I1Vtnm(I1TNM(784)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_neg);G1Nlist($list()))// I1CMP:return
            let jsxtnm785 = XATSDAPP(XATS2JS_sint_neg(jsxtnm783))
            jsxtnm786 = jsxtnm785
          } // endlet
          // I1CMP:return:I1Vtnm(I1TNM(786))
          return jsxtnm786
        } // endtimp(sint_neg(923))
        let jsxtnm788 = XATSDAPP(jsxtnm787(XATSINT1(1)))
        // I1CMP:return:I1Vtnm(I1TNM(788))
        return jsxtnm788
      } // endtimp(gseq$prlen(350))
      let jsxtnm790 = XATSDAPP(jsxtnm789())
      jsxtnm791 = jsxtnm790
      XATS000_patck(true)
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(6393(line=428,offs=6)--6394(line=428,offs=7))
      // I0Etapq(I0Ecst(sint_lt$sint(927)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gint000.sats)@(2041(line=83,offs=1)--2053(line=83,offs=13))));$list(T2JAG($list())))
      // T1IMPallx(sint_lt$sint(927);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1612(line=56,offs=1)--1773(line=68,offs=2)))
      // T1IMPallx(sint_lt$sint(927)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_lt$sint(927);$list()))))
      let jsxtnm798 = function (arg1, arg2) { // timp: sint_lt$sint(927)
        let jsxtnm792 = arg1
        let jsxtnm793 = arg2
        // I1CMP:start
        let jsxtnm797 // let
        { // let
          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1700(line=64,offs=1)--1771(line=67,offs=39)))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1708(line=65,offs=1)--1771(line=67,offs=39))
          // I1FUNDCL: XATS2JS_sint_lt$sint(4908)
          // XATS2JS_sint_lt$sint_1711
            // FJARGdarg($list(I1BNDcons(I1TNM(794);I0Pvar(i1(4909));$list(@(i1(4909),I1Vtnm(I1TNM(794))))),I1BNDcons(I1TNM(795);I0Pvar(i2(4910));$list(@(i2(4910),I1Vtnm(I1TNM(795)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_lt$sint);G1Nlist($list()))// I1CMP:return
          let jsxtnm796 = XATSDAPP(XATS2JS_sint_lt$sint(jsxtnm792, jsxtnm793))
          jsxtnm797 = jsxtnm796
        } // endlet
        // I1CMP:return:I1Vtnm(I1TNM(797))
        return jsxtnm797
      } // endtimp(sint_lt$sint(927))
      let jsxtnm799 = XATSDAPP(jsxtnm798(jsxtnm791, XATSINT1(0)))
      let jsxtnm1031 // ift
      if (jsxtnm799) // ift
      {
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(6403(line=429,offs=6)--6421(line=429,offs=24))
        // I0Etapq(I0Ecst(strm_vt_all$print0(2187)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/strm000_vt.sats)@(6825(line=418,offs=1)--6843(line=418,offs=19))));$list(T2JAG($list(T2Pvar(x0[8691])))))
        // T1IMPallx(strm_vt_all$print0(2187);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(6553(line=436,offs=1)--7145(line=497,offs=2)))
        // T1IMPallx(strm_vt_all$print0(2187)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(x0[8692],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(strm_vt_all$print0(2187);$list(@(x0[5503],T2Pvar(x0[8692])))))))
        let jsxtnm892 = function (arg1) { // timp: strm_vt_all$print0(2187)
          let jsxtnm800 = arg1
          // I1CMP:start
          let jsxtnm891 // let
          { // let
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(6675(line=450,offs=1)--6700(line=451,offs=17))
            // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(xs;S2Eapps(S2Ecst(S2Tfun1($list(S2Tbas(T2Bimpr(2;vwtp)));S2Tbas(T2Bimpr(3;vtbx)));strm_vt);$list(S2Evar(S2Tbas(T2Bimpr(2;vwtp));x0[8692])))))))
            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(6704(line=453,offs=1)--6736(line=455,offs=19)))
            // I1VALDCL
            let jsxtnm803
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(6718(line=455,offs=1)--6726(line=455,offs=9))
            // I0Etapq(I0Ecst(gseq$beg(346)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gseq000.sats)@(2390(line=130,offs=1)--2398(line=130,offs=9))));$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Pvar(x0[8692]))))))),T2JAG($list(T2Pvar(x0[8692])))))
            // T1IMPallx(gseq$beg(346);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(3023(line=170,offs=1)--3083(line=173,offs=32)))
            // T1IMPallx(gseq$beg(346)<$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(x0[8676],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),@(x0[8676],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq$beg(346);$list(@(xs[1067],T2Papps(T2Pcst(strm_vt);$list(T2Pvar(x0[8676])))),@(x0[1068],T2Pvar(x0[8676])))))))
            let jsxtnm801 = function () { // timp: gseq$beg(346)
              // I1CMP:start
              // I1CMP:return:I1Vstr(...)
              return XATSSTRN("strm_vt(")
            } // endtimp(gseq$beg(346))
            let jsxtnm802 = XATSDAPP(jsxtnm801())
            jsxtnm803 = jsxtnm802
            XATS000_patck(true)
            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(6737(line=456,offs=1)--6769(line=458,offs=19)))
            // I1VALDCL
            let jsxtnm806
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(6751(line=458,offs=1)--6759(line=458,offs=9))
            // I0Etapq(I0Ecst(gseq$sep(348)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gseq000.sats)@(2474(line=138,offs=1)--2482(line=138,offs=9))));$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Pvar(x0[8692]))))))),T2JAG($list(T2Pvar(x0[8692])))))
            // T1IMPallx(gseq$sep(348);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(2859(line=158,offs=1)--2912(line=161,offs=25)))
            // T1IMPallx(gseq$sep(348)<$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(x0[8673],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),@(x0[8673],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq$sep(348);$list(@(xs[1071],T2Papps(T2Pcst(strm_vt);$list(T2Pvar(x0[8673])))),@(x0[1072],T2Pvar(x0[8673])))))))
            let jsxtnm804 = function () { // timp: gseq$sep(348)
              // I1CMP:start
              // I1CMP:return:I1Vstr(...)
              return XATSSTRN(",")
            } // endtimp(gseq$sep(348))
            let jsxtnm805 = XATSDAPP(jsxtnm804())
            jsxtnm806 = jsxtnm805
            XATS000_patck(true)
            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(6770(line=459,offs=1)--6802(line=461,offs=19)))
            // I1VALDCL
            let jsxtnm809
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(6784(line=461,offs=1)--6792(line=461,offs=9))
            // I0Etapq(I0Ecst(gseq$rst(349)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gseq000.sats)@(2516(line=142,offs=1)--2524(line=142,offs=9))));$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Pvar(x0[8692]))))))),T2JAG($list(T2Pvar(x0[8692])))))
            // T1IMPallx(gseq$rst(349);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(2967(line=166,offs=1)--3022(line=169,offs=27)))
            // T1IMPallx(gseq$rst(349)<$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(x0[8675],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),@(x0[8675],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq$rst(349);$list(@(xs[1073],T2Papps(T2Pcst(strm_vt);$list(T2Pvar(x0[8675])))),@(x0[1074],T2Pvar(x0[8675])))))))
            let jsxtnm807 = function () { // timp: gseq$rst(349)
              // I1CMP:start
              // I1CMP:return:I1Vstr(...)
              return XATSSTRN("...")
            } // endtimp(gseq$rst(349))
            let jsxtnm808 = XATSDAPP(jsxtnm807())
            jsxtnm809 = jsxtnm808
            XATS000_patck(true)
            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(6803(line=462,offs=1)--6835(line=464,offs=19)))
            // I1VALDCL
            let jsxtnm812
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(6817(line=464,offs=1)--6825(line=464,offs=9))
            // I0Etapq(I0Ecst(gseq$end(347)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gseq000.sats)@(2432(line=134,offs=1)--2440(line=134,offs=9))));$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Pvar(x0[8692]))))))),T2JAG($list(T2Pvar(x0[8692])))))
            // T1IMPallx(gseq$end(347);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(2913(line=162,offs=1)--2966(line=165,offs=25)))
            // T1IMPallx(gseq$end(347)<$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(x0[8674],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),@(x0[8674],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq$end(347);$list(@(xs[1069],T2Papps(T2Pcst(strm_vt);$list(T2Pvar(x0[8674])))),@(x0[1070],T2Pvar(x0[8674])))))))
            let jsxtnm810 = function () { // timp: gseq$end(347)
              // I1CMP:start
              // I1CMP:return:I1Vstr(...)
              return XATSSTRN(")")
            } // endtimp(gseq$end(347))
            let jsxtnm811 = XATSDAPP(jsxtnm810())
            jsxtnm812 = jsxtnm811
            XATS000_patck(true)
            // I1Dfundclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(6839(line=466,offs=1)--7143(line=496,offs=2)))
            // I1FUNDCL
            function loop_6842(arg1, arg2)
            { // fun
              let jsxtnm813 = arg1
              let jsxtnm814 = arg2
              // I1CMP:start
              let jsxtnm815 = XATS000_dl1az(jsxtnm813)
              let jsxtnm883 // cas
              do {
                // { // cls
                // I1GPTpat(I1BNDcons(I1TNM(816);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                if (XATS000_ctgeq(jsxtnm815, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                  let jsxtnm816 = jsxtnm815
                  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(6931(line=476,offs=1)--6936(line=476,offs=6))
                  // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                  // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                  // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                  let jsxtnm819
                  let jsxtnm818 // let
                  { // let
                    // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                    // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                    // XATS2JS_NODE_strn_print_2214
                      // FJARGdarg($list(I1BNDcons(I1TNM(817);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(817)))))))
                      // I1CMP:start
                      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                    jsxtnm818 = XATS2JS_NODE_strn_print
                  } // endlet
                  jsxtnm819 = jsxtnm818
                  let jsxtnm820 = XATSDAPP(jsxtnm819(jsxtnm812))
                  jsxtnm883 = jsxtnm820
                  break // cls
                } // gpt
                // } // cls
                // { // cls
                // I1GPTpat(I1BNDcons(I1TNM(821);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x0(4494)),I0Pvar(xs(4495)))));$list(@(x0(4494),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(821));0)),@(xs(4495),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(821));1)))))
                if (XATS000_ctgeq(jsxtnm815, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                  let jsxtnm821 = jsxtnm815
                  let jsxtnm882 // let
                  { // let
                    // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(6997(line=482,offs=1)--7045(line=487,offs=21)))
                    // I1VALDCL
                    let jsxtnm835
                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7013(line=484,offs=5)--7014(line=484,offs=6))
                    // I0Etapq(I0Ecst(sint_gt$sint(928)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gint000.sats)@(2103(line=87,offs=1)--2115(line=87,offs=13))));$list(T2JAG($list())))
                    // T1IMPallx(sint_gt$sint(928);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1777(line=70,offs=1)--1938(line=82,offs=2)))
                    // T1IMPallx(sint_gt$sint(928)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_gt$sint(928);$list()))))
                    let jsxtnm828 = function (arg1, arg2) { // timp: sint_gt$sint(928)
                      let jsxtnm822 = arg1
                      let jsxtnm823 = arg2
                      // I1CMP:start
                      let jsxtnm827 // let
                      { // let
                        // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1865(line=78,offs=1)--1936(line=81,offs=39)))
                        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1873(line=79,offs=1)--1936(line=81,offs=39))
                        // I1FUNDCL: XATS2JS_sint_gt$sint(4913)
                        // XATS2JS_sint_gt$sint_1876
                          // FJARGdarg($list(I1BNDcons(I1TNM(824);I0Pvar(i1(4914));$list(@(i1(4914),I1Vtnm(I1TNM(824))))),I1BNDcons(I1TNM(825);I0Pvar(i2(4915));$list(@(i2(4915),I1Vtnm(I1TNM(825)))))))
                          // I1CMP:start
                          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_gt$sint);G1Nlist($list()))// I1CMP:return
                        let jsxtnm826 = XATSDAPP(XATS2JS_sint_gt$sint(jsxtnm822, jsxtnm823))
                        jsxtnm827 = jsxtnm826
                      } // endlet
                      // I1CMP:return:I1Vtnm(I1TNM(827))
                      return jsxtnm827
                    } // endtimp(sint_gt$sint(928))
                    let jsxtnm829 = XATSDAPP(jsxtnm828(jsxtnm814, XATSINT1(0)))
                    let jsxtnm834 // ift
                    if (jsxtnm829) // ift
                    {
                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7025(line=487,offs=1)--7030(line=487,offs=6))
                      // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                      // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                      // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                      let jsxtnm832
                      let jsxtnm831 // let
                      { // let
                        // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                        // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                        // XATS2JS_NODE_strn_print_2214
                          // FJARGdarg($list(I1BNDcons(I1TNM(830);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(830)))))))
                          // I1CMP:start
                          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                        jsxtnm831 = XATS2JS_NODE_strn_print
                      } // endlet
                      jsxtnm832 = jsxtnm831
                      let jsxtnm833 = XATSDAPP(jsxtnm832(jsxtnm806))
                      jsxtnm834 = jsxtnm833
                    } else {
                    } // end(if)
                    jsxtnm835 = jsxtnm834
                    XATS000_patck(true)
                    let jsxtnm881 // let
                    { // let
                      // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7082(line=493,offs=3)--7107(line=493,offs=28)))
                      // I1VALDCL
                      let jsxtnm871
                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7091(line=493,offs=12)--7099(line=493,offs=20))
                      // I0Etapq(I0Ecst(g_print0(1412)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas000_vt.sats)@(2080(line=106,offs=1)--2088(line=106,offs=9))));$list(T2JAG($list(T2Pvar(x0[8692])))))
                      // T1IMPallx(g_print0(1412);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1436(line=42,offs=1)--1654(line=60,offs=4)))
                      // T1IMPallx(g_print0(1412)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(a0[8493],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(a1[8494],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_print0(1412);$list(@(x0[3750],T2Papps(T2Pcst(t0up_vt);$list(T2Pvar(a0[8493]),T2Pvar(a1[8494])))))))))
                      let jsxtnm869 = function (arg1) { // timp: g_print0(1412)
                        let jsxtnm836 = arg1
                        // I1CMP:start
                        let jsxtnm868 // let
                        { // let
                          // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1508(line=50,offs=1)--1538(line=52,offs=20)))
                          // I1VALDCL
                          let jsxtnm841
                          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1521(line=52,offs=3)--1531(line=52,offs=13))
                          // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                          // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                          // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                          let jsxtnm839
                          let jsxtnm838 // let
                          { // let
                            // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                            // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                            // XATS2JS_NODE_strn_print_2214
                              // FJARGdarg($list(I1BNDcons(I1TNM(837);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(837)))))))
                              // I1CMP:start
                              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                            jsxtnm838 = XATS2JS_NODE_strn_print
                          } // endlet
                          jsxtnm839 = jsxtnm838
                          let jsxtnm840 = XATSDAPP(jsxtnm839(XATSSTRN("@(")))
                          jsxtnm841 = jsxtnm840
                          XATS000_patck(true)
                          // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1542(line=54,offs=1)--1570(line=54,offs=29)))
                          // I1VALDCL
                          let jsxtnm849
                          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1551(line=54,offs=10)--1559(line=54,offs=18))
                          // I0Etapq(I0Ecst(g_print0(1412)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas000_vt.sats)@(2080(line=106,offs=1)--2088(line=106,offs=9))));$list(T2JAG($list(T2Pvar(a0[8493])))))
                          // T1IMPallx(g_print0(1412);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1589(line=56,offs=1)--1634(line=58,offs=27)))
                          // T1IMPallx(g_print0(1412)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8831],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_print0(1412);$list(@(x0[3750],T2Pvar(x0[8831])))))))
                          let jsxtnm846
                          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1623(line=58,offs=16)--1630(line=58,offs=23))
                          // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x0[8831])))))
                          // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                          // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(strn)))))))
                          let jsxtnm845
                          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                          // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                          // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                          // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                          let jsxtnm844
                          let jsxtnm843 // let
                          { // let
                            // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                            // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                            // XATS2JS_NODE_strn_print_2214
                              // FJARGdarg($list(I1BNDcons(I1TNM(842);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(842)))))))
                              // I1CMP:start
                              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                            jsxtnm843 = XATS2JS_NODE_strn_print
                          } // endlet
                          jsxtnm844 = jsxtnm843
                          jsxtnm845 = jsxtnm844
                          jsxtnm846 = jsxtnm845
                          let jsxtnm847 = XATSPFLT(jsxtnm836[0])
                          let jsxtnm848 = XATSDAPP(jsxtnm846(jsxtnm847))
                          jsxtnm849 = jsxtnm848
                          XATS000_patck(true)
                          // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1571(line=55,offs=1)--1590(line=55,offs=20)))
                          // I1VALDCL
                          let jsxtnm854
                          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1580(line=55,offs=10)--1585(line=55,offs=15))
                          // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                          // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                          // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                          let jsxtnm852
                          let jsxtnm851 // let
                          { // let
                            // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                            // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                            // XATS2JS_NODE_strn_print_2214
                              // FJARGdarg($list(I1BNDcons(I1TNM(850);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(850)))))))
                              // I1CMP:start
                              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                            jsxtnm851 = XATS2JS_NODE_strn_print
                          } // endlet
                          jsxtnm852 = jsxtnm851
                          let jsxtnm853 = XATSDAPP(jsxtnm852(XATSSTRN(",")))
                          jsxtnm854 = jsxtnm853
                          XATS000_patck(true)
                          // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1591(line=56,offs=1)--1619(line=56,offs=29)))
                          // I1VALDCL
                          let jsxtnm862
                          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1600(line=56,offs=10)--1608(line=56,offs=18))
                          // I0Etapq(I0Ecst(g_print0(1412)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas000_vt.sats)@(2080(line=106,offs=1)--2088(line=106,offs=9))));$list(T2JAG($list(T2Pvar(a1[8494])))))
                          // T1IMPallx(g_print0(1412);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1589(line=56,offs=1)--1634(line=58,offs=27)))
                          // T1IMPallx(g_print0(1412)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8831],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_print0(1412);$list(@(x0[3750],T2Pvar(x0[8831])))))))
                          let jsxtnm859
                          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1623(line=58,offs=16)--1630(line=58,offs=23))
                          // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x0[8831])))))
                          // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gint000.dats)@(2286(line=96,offs=1)--2321(line=97,offs=27)))
                          // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(si)))))))
                          let jsxtnm858
                          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gint000.dats)@(2309(line=97,offs=15)--2319(line=97,offs=25))
                          // I0Etapq(I0Ecst(sint_print(922)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gint000.sats)@(1506(line=49,offs=1)--1516(line=49,offs=11))));$list(T2JAG($list())))
                          // T1IMPallx(sint_print(922);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(1430(line=40,offs=1)--1551(line=48,offs=2)))
                          // T1IMPallx(sint_print(922)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_print(922);$list()))))
                          let jsxtnm857
                          let jsxtnm856 // let
                          { // let
                            // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(1486(line=45,offs=1)--1549(line=47,offs=52)))
                            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(1494(line=46,offs=1)--1549(line=47,offs=52))
                            // I1FUNDCL: XATS2JS_NODE_sint_print(5220)
                            // XATS2JS_NODE_sint_print_1497
                              // FJARGdarg($list(I1BNDcons(I1TNM(855);I0Pvar(i0(5221));$list(@(i0(5221),I1Vtnm(I1TNM(855)))))))
                              // I1CMP:start
                              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_sint_print);G1Nlist($list()))// I1CMP:return
                            jsxtnm856 = XATS2JS_NODE_sint_print
                          } // endlet
                          jsxtnm857 = jsxtnm856
                          jsxtnm858 = jsxtnm857
                          jsxtnm859 = jsxtnm858
                          let jsxtnm860 = XATSPFLT(jsxtnm836[1])
                          let jsxtnm861 = XATSDAPP(jsxtnm859(jsxtnm860))
                          jsxtnm862 = jsxtnm861
                          XATS000_patck(true)
                          // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1623(line=58,offs=1)--1647(line=58,offs=25)))
                          // I1VALDCL
                          let jsxtnm867
                          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1632(line=58,offs=10)--1642(line=58,offs=20))
                          // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                          // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                          // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                          let jsxtnm865
                          let jsxtnm864 // let
                          { // let
                            // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                            // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                            // XATS2JS_NODE_strn_print_2214
                              // FJARGdarg($list(I1BNDcons(I1TNM(863);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(863)))))))
                              // I1CMP:start
                              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                            jsxtnm864 = XATS2JS_NODE_strn_print
                          } // endlet
                          jsxtnm865 = jsxtnm864
                          let jsxtnm866 = XATSDAPP(jsxtnm865(XATSSTRN(")")))
                          jsxtnm867 = jsxtnm866
                          XATS000_patck(true)
                          jsxtnm868 = XATSVOID
                        } // endlet
                        // I1CMP:return:I1Vtnm(I1TNM(868))
                        return jsxtnm868
                      } // endtimp(g_print0(1412))
                      let jsxtnm870 = XATSDAPP(jsxtnm869(XATSP1CN("strmcon_vt_cons", jsxtnm821[0+1])))
                      jsxtnm871 = jsxtnm870
                      XATS000_patck(true)
                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7067(line=491,offs=14)--7068(line=491,offs=15))
                      // I0Etapq(I0Ecst(sint_add$sint(936)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gint000.sats)@(3081(line=142,offs=1)--3094(line=142,offs=14))));$list(T2JAG($list())))
                      // T1IMPallx(sint_add$sint(936);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
                      // T1IMPallx(sint_add$sint(936)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(936);$list()))))
                      let jsxtnm878 = function (arg1, arg2) { // timp: sint_add$sint(936)
                        let jsxtnm872 = arg1
                        let jsxtnm873 = arg2
                        // I1CMP:start
                        let jsxtnm877 // let
                        { // let
                          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
                          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
                          // I1FUNDCL: XATS2JS_sint_add$sint(4938)
                          // XATS2JS_sint_add$sint_2778
                            // FJARGdarg($list(I1BNDcons(I1TNM(874);I0Pvar(i1(4939));$list(@(i1(4939),I1Vtnm(I1TNM(874))))),I1BNDcons(I1TNM(875);I0Pvar(i2(4940));$list(@(i2(4940),I1Vtnm(I1TNM(875)))))))
                            // I1CMP:start
                            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list()))// I1CMP:return
                          let jsxtnm876 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm872, jsxtnm873))
                          jsxtnm877 = jsxtnm876
                        } // endlet
                        // I1CMP:return:I1Vtnm(I1TNM(877))
                        return jsxtnm877
                      } // endtimp(sint_add$sint(936))
                      let jsxtnm879 = XATSDAPP(jsxtnm878(jsxtnm814, XATSINT1(1)))
                      let jsxtnm880 = XATSDAPP(loop_6842(XATSP1CN("strmcon_vt_cons", jsxtnm821[1+1]), jsxtnm879))
                      jsxtnm881 = jsxtnm880
                    } // endlet
                    jsxtnm882 = jsxtnm881
                  } // endlet
                  jsxtnm883 = jsxtnm882
                  break // cls
                } // gpt
                // } // cls
                XATS000_cfail()
              } while (false) // end-of(do)
              // I1CMP:return:I1Vtnm(I1TNM(883))
              return jsxtnm883
            } // endfun(loop_6842)
            let jsxtnm890 // let
            { // let
              // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(6631(line=444,offs=1)--6662(line=446,offs=21)))
              // I1VALDCL
              let jsxtnm888
              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(6642(line=446,offs=1)--6647(line=446,offs=6))
              // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
              // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
              // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
              let jsxtnm886
              let jsxtnm885 // let
              { // let
                // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                // XATS2JS_NODE_strn_print_2214
                  // FJARGdarg($list(I1BNDcons(I1TNM(884);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(884)))))))
                  // I1CMP:start
                  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                jsxtnm885 = XATS2JS_NODE_strn_print
              } // endlet
              jsxtnm886 = jsxtnm885
              let jsxtnm887 = XATSDAPP(jsxtnm886(jsxtnm803))
              jsxtnm888 = jsxtnm887
              XATS000_patck(true)
              let jsxtnm889 = XATSDAPP(loop_6842(jsxtnm800, XATSINT1(0)))
              jsxtnm890 = jsxtnm889
            } // endlet
            jsxtnm891 = jsxtnm890
          } // endlet
          // I1CMP:return:I1Vtnm(I1TNM(891))
          return jsxtnm891
        } // endtimp(strm_vt_all$print0(2187))
        let jsxtnm893 = XATSDAPP(jsxtnm892(jsxtnm782))
        jsxtnm1031 = jsxtnm893
      } else {
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(6435(line=430,offs=6)--6453(line=430,offs=24))
        // I0Etapq(I0Ecst(strm_vt_len$print0(2188)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/strm000_vt.sats)@(6945(line=427,offs=1)--6963(line=427,offs=19))));$list(T2JAG($list(T2Pvar(x0[8691])))))
        // T1IMPallx(strm_vt_len$print0(2188);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7214(line=501,offs=1)--8080(line=588,offs=2)))
        // T1IMPallx(strm_vt_len$print0(2188)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(x0[8693],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(strm_vt_len$print0(2188);$list(@(x0[5504],T2Pvar(x0[8693])))))))
        let jsxtnm1029 = function (arg1, arg2) { // timp: strm_vt_len$print0(2188)
          let jsxtnm894 = arg1
          let jsxtnm895 = arg2
          // I1CMP:start
          let jsxtnm1028 // let
          { // let
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7343(line=516,offs=1)--7368(line=517,offs=17))
            // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(xs;S2Eapps(S2Ecst(S2Tfun1($list(S2Tbas(T2Bimpr(2;vwtp)));S2Tbas(T2Bimpr(3;vtbx)));strm_vt);$list(S2Evar(S2Tbas(T2Bimpr(2;vwtp));x0[8693])))))))
            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7372(line=519,offs=1)--7404(line=521,offs=19)))
            // I1VALDCL
            let jsxtnm898
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7386(line=521,offs=1)--7394(line=521,offs=9))
            // I0Etapq(I0Ecst(gseq$beg(346)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gseq000.sats)@(2390(line=130,offs=1)--2398(line=130,offs=9))));$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Pvar(x0[8693]))))))),T2JAG($list(T2Pvar(x0[8693])))))
            // T1IMPallx(gseq$beg(346);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(3023(line=170,offs=1)--3083(line=173,offs=32)))
            // T1IMPallx(gseq$beg(346)<$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(x0[8676],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),@(x0[8676],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq$beg(346);$list(@(xs[1067],T2Papps(T2Pcst(strm_vt);$list(T2Pvar(x0[8676])))),@(x0[1068],T2Pvar(x0[8676])))))))
            let jsxtnm896 = function () { // timp: gseq$beg(346)
              // I1CMP:start
              // I1CMP:return:I1Vstr(...)
              return XATSSTRN("strm_vt(")
            } // endtimp(gseq$beg(346))
            let jsxtnm897 = XATSDAPP(jsxtnm896())
            jsxtnm898 = jsxtnm897
            XATS000_patck(true)
            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7405(line=522,offs=1)--7437(line=524,offs=19)))
            // I1VALDCL
            let jsxtnm901
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7419(line=524,offs=1)--7427(line=524,offs=9))
            // I0Etapq(I0Ecst(gseq$sep(348)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gseq000.sats)@(2474(line=138,offs=1)--2482(line=138,offs=9))));$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Pvar(x0[8693]))))))),T2JAG($list(T2Pvar(x0[8693])))))
            // T1IMPallx(gseq$sep(348);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(2859(line=158,offs=1)--2912(line=161,offs=25)))
            // T1IMPallx(gseq$sep(348)<$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(x0[8673],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),@(x0[8673],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq$sep(348);$list(@(xs[1071],T2Papps(T2Pcst(strm_vt);$list(T2Pvar(x0[8673])))),@(x0[1072],T2Pvar(x0[8673])))))))
            let jsxtnm899 = function () { // timp: gseq$sep(348)
              // I1CMP:start
              // I1CMP:return:I1Vstr(...)
              return XATSSTRN(",")
            } // endtimp(gseq$sep(348))
            let jsxtnm900 = XATSDAPP(jsxtnm899())
            jsxtnm901 = jsxtnm900
            XATS000_patck(true)
            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7438(line=525,offs=1)--7470(line=527,offs=19)))
            // I1VALDCL
            let jsxtnm904
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7452(line=527,offs=1)--7460(line=527,offs=9))
            // I0Etapq(I0Ecst(gseq$rst(349)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gseq000.sats)@(2516(line=142,offs=1)--2524(line=142,offs=9))));$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Pvar(x0[8693]))))))),T2JAG($list(T2Pvar(x0[8693])))))
            // T1IMPallx(gseq$rst(349);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(2967(line=166,offs=1)--3022(line=169,offs=27)))
            // T1IMPallx(gseq$rst(349)<$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(x0[8675],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),@(x0[8675],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq$rst(349);$list(@(xs[1073],T2Papps(T2Pcst(strm_vt);$list(T2Pvar(x0[8675])))),@(x0[1074],T2Pvar(x0[8675])))))))
            let jsxtnm902 = function () { // timp: gseq$rst(349)
              // I1CMP:start
              // I1CMP:return:I1Vstr(...)
              return XATSSTRN("...")
            } // endtimp(gseq$rst(349))
            let jsxtnm903 = XATSDAPP(jsxtnm902())
            jsxtnm904 = jsxtnm903
            XATS000_patck(true)
            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7471(line=528,offs=1)--7503(line=530,offs=19)))
            // I1VALDCL
            let jsxtnm907
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7485(line=530,offs=1)--7493(line=530,offs=9))
            // I0Etapq(I0Ecst(gseq$end(347)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gseq000.sats)@(2432(line=134,offs=1)--2440(line=134,offs=9))));$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Pvar(x0[8693]))))))),T2JAG($list(T2Pvar(x0[8693])))))
            // T1IMPallx(gseq$end(347);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(2913(line=162,offs=1)--2966(line=165,offs=25)))
            // T1IMPallx(gseq$end(347)<$list(T2JAG($list(T2Papps(T2Pcst(lazy_vt_vx);$list(T2Papps(T2Pcst(strmcon_vt);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(x0[8674],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),@(x0[8674],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq$end(347);$list(@(xs[1069],T2Papps(T2Pcst(strm_vt);$list(T2Pvar(x0[8674])))),@(x0[1070],T2Pvar(x0[8674])))))))
            let jsxtnm905 = function () { // timp: gseq$end(347)
              // I1CMP:start
              // I1CMP:return:I1Vstr(...)
              return XATSSTRN(")")
            } // endtimp(gseq$end(347))
            let jsxtnm906 = XATSDAPP(jsxtnm905())
            jsxtnm907 = jsxtnm906
            XATS000_patck(true)
            // I1Dfundclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7507(line=532,offs=1)--8047(line=587,offs=2)))
            // I1FUNDCL
            function loop_7510(arg1, arg2)
            { // fun
              let jsxtnm908 = arg1
              let jsxtnm909 = arg2
              // I1CMP:start
              let jsxtnm910 = XATS000_dl1az(jsxtnm908)
              let jsxtnm1020 // cas
              do {
                // { // cls
                // I1GPTpat(I1BNDcons(I1TNM(911);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_nil(15));$list()));$list()))
                if (XATS000_ctgeq(jsxtnm910, XATSCTAG("strmcon_vt_nil",0))) { // gpt
                  let jsxtnm911 = jsxtnm910
                  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7597(line=541,offs=1)--7602(line=541,offs=6))
                  // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                  // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                  // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                  let jsxtnm914
                  let jsxtnm913 // let
                  { // let
                    // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                    // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                    // XATS2JS_NODE_strn_print_2214
                      // FJARGdarg($list(I1BNDcons(I1TNM(912);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(912)))))))
                      // I1CMP:start
                      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                    jsxtnm913 = XATS2JS_NODE_strn_print
                  } // endlet
                  jsxtnm914 = jsxtnm913
                  let jsxtnm915 = XATSDAPP(jsxtnm914(jsxtnm907))
                  jsxtnm1020 = jsxtnm915
                  break // cls
                } // gpt
                // } // cls
                // { // cls
                // I1GPTpat(I1BNDcons(I1TNM(916);I0Pfree(I0Pdapp(I0Pcon(strmcon_vt_cons(16));$list(I0Pvar(x0(4505)),I0Pvar(xs(4506)))));$list(@(x0(4505),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(916));0)),@(xs(4506),I1Vp1cn(I0Pcon(strmcon_vt_cons(16));I1Vtnm(I1TNM(916));1)))))
                if (XATS000_ctgeq(jsxtnm910, XATSCTAG("strmcon_vt_cons",1))) { // gpt
                  let jsxtnm916 = jsxtnm910
                  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7662(line=546,offs=5)--7664(line=546,offs=7))
                  // I0Etapq(I0Ecst(sint_gte$sint(931)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gint000.sats)@(2408(line=104,offs=1)--2421(line=104,offs=14))));$list(T2JAG($list())))
                  // T1IMPallx(sint_gte$sint(931);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(2298(line=114,offs=1)--2462(line=126,offs=2)))
                  // T1IMPallx(sint_gte$sint(931)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_gte$sint(931);$list()))))
                  let jsxtnm923 = function (arg1, arg2) { // timp: sint_gte$sint(931)
                    let jsxtnm917 = arg1
                    let jsxtnm918 = arg2
                    // I1CMP:start
                    let jsxtnm922 // let
                    { // let
                      // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(2388(line=122,offs=1)--2460(line=125,offs=39)))
                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(2396(line=123,offs=1)--2460(line=125,offs=39))
                      // I1FUNDCL: XATS2JS_sint_gte$sint(4928)
                      // XATS2JS_sint_gte$sint_2399
                        // FJARGdarg($list(I1BNDcons(I1TNM(919);I0Pvar(i1(4929));$list(@(i1(4929),I1Vtnm(I1TNM(919))))),I1BNDcons(I1TNM(920);I0Pvar(i2(4930));$list(@(i2(4930),I1Vtnm(I1TNM(920)))))))
                        // I1CMP:start
                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_gte$sint);G1Nlist($list()))// I1CMP:return
                      let jsxtnm921 = XATSDAPP(XATS2JS_sint_gte$sint(jsxtnm917, jsxtnm918))
                      jsxtnm922 = jsxtnm921
                    } // endlet
                    // I1CMP:return:I1Vtnm(I1TNM(922))
                    return jsxtnm922
                  } // endtimp(sint_gte$sint(931))
                  let jsxtnm924 = XATSDAPP(jsxtnm923(jsxtnm909, jsxtnm895))
                  let jsxtnm1019 // ift
                  if (jsxtnm924) // ift
                  {
                    let jsxtnm957 // let
                    { // let
                      // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7681(line=550,offs=1)--7707(line=552,offs=16)))
                      // I1VALDCL
                      let jsxtnm929
                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7692(line=552,offs=1)--7698(line=552,offs=7))
                      // I0Etapq(I0Ecst(g_free(23)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(1595(line=57,offs=1)--1601(line=57,offs=7))));$list(T2JAG($list(T2Pvar(x0[8693])))))
                      // T1IMPallx(g_free(23);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(2935(line=152,offs=1)--2999(line=155,offs=38)))
                      // T1IMPallx(g_free(23)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(a0[8507],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(a1[8508],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_free(23);$list(@(a[431],T2Papps(T2Pcst(t0up_vt);$list(T2Pvar(a0[8507]),T2Pvar(a1[8508])))))))))
                      let jsxtnm927 = function (arg1) { // timp: g_free(23)
                        let jsxtnm925 = arg1
                        // I1CMP:start
                        let jsxtnm926 = XATSTUP0([])
                        // I1CMP:return:I1Vtnm(I1TNM(926))
                        return jsxtnm926
                      } // endtimp(g_free(23))
                      let jsxtnm928 = XATSDAPP(jsxtnm927(XATSP1CN("strmcon_vt_cons", jsxtnm916[0+1])))
                      jsxtnm929 = jsxtnm928
                      XATS000_patck(true)
                      // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7708(line=553,offs=1)--7740(line=555,offs=22)))
                      // I1VALDCL
                      let jsxtnm933
                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7719(line=555,offs=1)--7731(line=555,offs=13))
                      // I0Etapq(I0Ecst(strm_vt_free(2163)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/strm000_vt.sats)@(1995(line=91,offs=1)--2007(line=91,offs=13))));$list(T2JAG($list(T2Pvar(x0[8693])))))
                      // T1IMPallx(strm_vt_free(2163);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(2418(line=125,offs=1)--2465(line=127,offs=29)))
                      // T1IMPallx(strm_vt_free(2163)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(a[8669],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(strm_vt_free(2163);$list(@(a[5471],T2Pvar(a[8669])))))))
                      let jsxtnm931 = function (arg1) { // timp: strm_vt_free(2163)
                        let jsxtnm930 = arg1
                        // I1CMP:start
                        XATS000_free(jsxtnm930)
                        // I1CMP:return:I1V000()
                        return XATSVOID
                      } // endtimp(strm_vt_free(2163))
                      let jsxtnm932 = XATSDAPP(jsxtnm931(XATSP1CN("strmcon_vt_cons", jsxtnm916[1+1])))
                      jsxtnm933 = jsxtnm932
                      XATS000_patck(true)
                      // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7744(line=557,offs=1)--7789(line=561,offs=20)))
                      // I1VALDCL
                      let jsxtnm947
                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7760(line=559,offs=5)--7761(line=559,offs=6))
                      // I0Etapq(I0Ecst(sint_gt$sint(928)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gint000.sats)@(2103(line=87,offs=1)--2115(line=87,offs=13))));$list(T2JAG($list())))
                      // T1IMPallx(sint_gt$sint(928);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1777(line=70,offs=1)--1938(line=82,offs=2)))
                      // T1IMPallx(sint_gt$sint(928)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_gt$sint(928);$list()))))
                      let jsxtnm940 = function (arg1, arg2) { // timp: sint_gt$sint(928)
                        let jsxtnm934 = arg1
                        let jsxtnm935 = arg2
                        // I1CMP:start
                        let jsxtnm939 // let
                        { // let
                          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1865(line=78,offs=1)--1936(line=81,offs=39)))
                          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1873(line=79,offs=1)--1936(line=81,offs=39))
                          // I1FUNDCL: XATS2JS_sint_gt$sint(4913)
                          // XATS2JS_sint_gt$sint_1876
                            // FJARGdarg($list(I1BNDcons(I1TNM(936);I0Pvar(i1(4914));$list(@(i1(4914),I1Vtnm(I1TNM(936))))),I1BNDcons(I1TNM(937);I0Pvar(i2(4915));$list(@(i2(4915),I1Vtnm(I1TNM(937)))))))
                            // I1CMP:start
                            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_gt$sint);G1Nlist($list()))// I1CMP:return
                          let jsxtnm938 = XATSDAPP(XATS2JS_sint_gt$sint(jsxtnm934, jsxtnm935))
                          jsxtnm939 = jsxtnm938
                        } // endlet
                        // I1CMP:return:I1Vtnm(I1TNM(939))
                        return jsxtnm939
                      } // endtimp(sint_gt$sint(928))
                      let jsxtnm941 = XATSDAPP(jsxtnm940(jsxtnm909, XATSINT1(0)))
                      let jsxtnm946 // ift
                      if (jsxtnm941) // ift
                      {
                        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7770(line=561,offs=1)--7775(line=561,offs=6))
                        // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                        // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                        // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                        let jsxtnm944
                        let jsxtnm943 // let
                        { // let
                          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                          // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                          // XATS2JS_NODE_strn_print_2214
                            // FJARGdarg($list(I1BNDcons(I1TNM(942);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(942)))))))
                            // I1CMP:start
                            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                          jsxtnm943 = XATS2JS_NODE_strn_print
                        } // endlet
                        jsxtnm944 = jsxtnm943
                        let jsxtnm945 = XATSDAPP(jsxtnm944(jsxtnm901))
                        jsxtnm946 = jsxtnm945
                      } else {
                      } // end(if)
                      jsxtnm947 = jsxtnm946
                      XATS000_patck(true)
                      // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7793(line=563,offs=1)--7821(line=564,offs=20)))
                      // I1VALDCL
                      let jsxtnm952
                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7802(line=564,offs=1)--7807(line=564,offs=6))
                      // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                      // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                      // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                      let jsxtnm950
                      let jsxtnm949 // let
                      { // let
                        // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                        // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                        // XATS2JS_NODE_strn_print_2214
                          // FJARGdarg($list(I1BNDcons(I1TNM(948);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(948)))))))
                          // I1CMP:start
                          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                        jsxtnm949 = XATS2JS_NODE_strn_print
                      } // endlet
                      jsxtnm950 = jsxtnm949
                      let jsxtnm951 = XATSDAPP(jsxtnm950(jsxtnm904))
                      jsxtnm952 = jsxtnm951
                      XATS000_patck(true)
                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7841(line=568,offs=1)--7846(line=568,offs=6))
                      // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                      // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                      // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                      let jsxtnm955
                      let jsxtnm954 // let
                      { // let
                        // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                        // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                        // XATS2JS_NODE_strn_print_2214
                          // FJARGdarg($list(I1BNDcons(I1TNM(953);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(953)))))))
                          // I1CMP:start
                          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                        jsxtnm954 = XATS2JS_NODE_strn_print
                      } // endlet
                      jsxtnm955 = jsxtnm954
                      let jsxtnm956 = XATSDAPP(jsxtnm955(jsxtnm907))
                      jsxtnm957 = jsxtnm956
                    } // endlet
                    jsxtnm1019 = jsxtnm957
                  } else {
                    let jsxtnm1018 // let
                    { // let
                      // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7898(line=573,offs=1)--7946(line=578,offs=21)))
                      // I1VALDCL
                      let jsxtnm971
                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7914(line=575,offs=5)--7915(line=575,offs=6))
                      // I0Etapq(I0Ecst(sint_gt$sint(928)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gint000.sats)@(2103(line=87,offs=1)--2115(line=87,offs=13))));$list(T2JAG($list())))
                      // T1IMPallx(sint_gt$sint(928);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1777(line=70,offs=1)--1938(line=82,offs=2)))
                      // T1IMPallx(sint_gt$sint(928)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_gt$sint(928);$list()))))
                      let jsxtnm964 = function (arg1, arg2) { // timp: sint_gt$sint(928)
                        let jsxtnm958 = arg1
                        let jsxtnm959 = arg2
                        // I1CMP:start
                        let jsxtnm963 // let
                        { // let
                          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1865(line=78,offs=1)--1936(line=81,offs=39)))
                          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1873(line=79,offs=1)--1936(line=81,offs=39))
                          // I1FUNDCL: XATS2JS_sint_gt$sint(4913)
                          // XATS2JS_sint_gt$sint_1876
                            // FJARGdarg($list(I1BNDcons(I1TNM(960);I0Pvar(i1(4914));$list(@(i1(4914),I1Vtnm(I1TNM(960))))),I1BNDcons(I1TNM(961);I0Pvar(i2(4915));$list(@(i2(4915),I1Vtnm(I1TNM(961)))))))
                            // I1CMP:start
                            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_gt$sint);G1Nlist($list()))// I1CMP:return
                          let jsxtnm962 = XATSDAPP(XATS2JS_sint_gt$sint(jsxtnm958, jsxtnm959))
                          jsxtnm963 = jsxtnm962
                        } // endlet
                        // I1CMP:return:I1Vtnm(I1TNM(963))
                        return jsxtnm963
                      } // endtimp(sint_gt$sint(928))
                      let jsxtnm965 = XATSDAPP(jsxtnm964(jsxtnm909, XATSINT1(0)))
                      let jsxtnm970 // ift
                      if (jsxtnm965) // ift
                      {
                        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7926(line=578,offs=1)--7931(line=578,offs=6))
                        // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                        // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                        // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                        let jsxtnm968
                        let jsxtnm967 // let
                        { // let
                          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                          // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                          // XATS2JS_NODE_strn_print_2214
                            // FJARGdarg($list(I1BNDcons(I1TNM(966);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(966)))))))
                            // I1CMP:start
                            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                          jsxtnm967 = XATS2JS_NODE_strn_print
                        } // endlet
                        jsxtnm968 = jsxtnm967
                        let jsxtnm969 = XATSDAPP(jsxtnm968(jsxtnm901))
                        jsxtnm970 = jsxtnm969
                      } else {
                      } // end(if)
                      jsxtnm971 = jsxtnm970
                      XATS000_patck(true)
                      let jsxtnm1017 // let
                      { // let
                        // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7994(line=584,offs=3)--8019(line=584,offs=28)))
                        // I1VALDCL
                        let jsxtnm1007
                        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(8003(line=584,offs=12)--8011(line=584,offs=20))
                        // I0Etapq(I0Ecst(g_print0(1412)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas000_vt.sats)@(2080(line=106,offs=1)--2088(line=106,offs=9))));$list(T2JAG($list(T2Pvar(x0[8693])))))
                        // T1IMPallx(g_print0(1412);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1436(line=42,offs=1)--1654(line=60,offs=4)))
                        // T1IMPallx(g_print0(1412)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(a0[8493],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(a1[8494],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_print0(1412);$list(@(x0[3750],T2Papps(T2Pcst(t0up_vt);$list(T2Pvar(a0[8493]),T2Pvar(a1[8494])))))))))
                        let jsxtnm1005 = function (arg1) { // timp: g_print0(1412)
                          let jsxtnm972 = arg1
                          // I1CMP:start
                          let jsxtnm1004 // let
                          { // let
                            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1508(line=50,offs=1)--1538(line=52,offs=20)))
                            // I1VALDCL
                            let jsxtnm977
                            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1521(line=52,offs=3)--1531(line=52,offs=13))
                            // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                            // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                            // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                            let jsxtnm975
                            let jsxtnm974 // let
                            { // let
                              // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                              // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                              // XATS2JS_NODE_strn_print_2214
                                // FJARGdarg($list(I1BNDcons(I1TNM(973);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(973)))))))
                                // I1CMP:start
                                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                              jsxtnm974 = XATS2JS_NODE_strn_print
                            } // endlet
                            jsxtnm975 = jsxtnm974
                            let jsxtnm976 = XATSDAPP(jsxtnm975(XATSSTRN("@(")))
                            jsxtnm977 = jsxtnm976
                            XATS000_patck(true)
                            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1542(line=54,offs=1)--1570(line=54,offs=29)))
                            // I1VALDCL
                            let jsxtnm985
                            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1551(line=54,offs=10)--1559(line=54,offs=18))
                            // I0Etapq(I0Ecst(g_print0(1412)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas000_vt.sats)@(2080(line=106,offs=1)--2088(line=106,offs=9))));$list(T2JAG($list(T2Pvar(a0[8493])))))
                            // T1IMPallx(g_print0(1412);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1589(line=56,offs=1)--1634(line=58,offs=27)))
                            // T1IMPallx(g_print0(1412)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8831],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_print0(1412);$list(@(x0[3750],T2Pvar(x0[8831])))))))
                            let jsxtnm982
                            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1623(line=58,offs=16)--1630(line=58,offs=23))
                            // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x0[8831])))))
                            // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                            // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(strn)))))))
                            let jsxtnm981
                            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                            // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                            // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                            // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                            let jsxtnm980
                            let jsxtnm979 // let
                            { // let
                              // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                              // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                              // XATS2JS_NODE_strn_print_2214
                                // FJARGdarg($list(I1BNDcons(I1TNM(978);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(978)))))))
                                // I1CMP:start
                                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                              jsxtnm979 = XATS2JS_NODE_strn_print
                            } // endlet
                            jsxtnm980 = jsxtnm979
                            jsxtnm981 = jsxtnm980
                            jsxtnm982 = jsxtnm981
                            let jsxtnm983 = XATSPFLT(jsxtnm972[0])
                            let jsxtnm984 = XATSDAPP(jsxtnm982(jsxtnm983))
                            jsxtnm985 = jsxtnm984
                            XATS000_patck(true)
                            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1571(line=55,offs=1)--1590(line=55,offs=20)))
                            // I1VALDCL
                            let jsxtnm990
                            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1580(line=55,offs=10)--1585(line=55,offs=15))
                            // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                            // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                            // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                            let jsxtnm988
                            let jsxtnm987 // let
                            { // let
                              // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                              // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                              // XATS2JS_NODE_strn_print_2214
                                // FJARGdarg($list(I1BNDcons(I1TNM(986);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(986)))))))
                                // I1CMP:start
                                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                              jsxtnm987 = XATS2JS_NODE_strn_print
                            } // endlet
                            jsxtnm988 = jsxtnm987
                            let jsxtnm989 = XATSDAPP(jsxtnm988(XATSSTRN(",")))
                            jsxtnm990 = jsxtnm989
                            XATS000_patck(true)
                            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1591(line=56,offs=1)--1619(line=56,offs=29)))
                            // I1VALDCL
                            let jsxtnm998
                            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1600(line=56,offs=10)--1608(line=56,offs=18))
                            // I0Etapq(I0Ecst(g_print0(1412)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas000_vt.sats)@(2080(line=106,offs=1)--2088(line=106,offs=9))));$list(T2JAG($list(T2Pvar(a1[8494])))))
                            // T1IMPallx(g_print0(1412);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1589(line=56,offs=1)--1634(line=58,offs=27)))
                            // T1IMPallx(g_print0(1412)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8831],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_print0(1412);$list(@(x0[3750],T2Pvar(x0[8831])))))))
                            let jsxtnm995
                            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1623(line=58,offs=16)--1630(line=58,offs=23))
                            // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x0[8831])))))
                            // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gint000.dats)@(2286(line=96,offs=1)--2321(line=97,offs=27)))
                            // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(si)))))))
                            let jsxtnm994
                            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gint000.dats)@(2309(line=97,offs=15)--2319(line=97,offs=25))
                            // I0Etapq(I0Ecst(sint_print(922)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gint000.sats)@(1506(line=49,offs=1)--1516(line=49,offs=11))));$list(T2JAG($list())))
                            // T1IMPallx(sint_print(922);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(1430(line=40,offs=1)--1551(line=48,offs=2)))
                            // T1IMPallx(sint_print(922)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_print(922);$list()))))
                            let jsxtnm993
                            let jsxtnm992 // let
                            { // let
                              // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(1486(line=45,offs=1)--1549(line=47,offs=52)))
                              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(1494(line=46,offs=1)--1549(line=47,offs=52))
                              // I1FUNDCL: XATS2JS_NODE_sint_print(5220)
                              // XATS2JS_NODE_sint_print_1497
                                // FJARGdarg($list(I1BNDcons(I1TNM(991);I0Pvar(i0(5221));$list(@(i0(5221),I1Vtnm(I1TNM(991)))))))
                                // I1CMP:start
                                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_sint_print);G1Nlist($list()))// I1CMP:return
                              jsxtnm992 = XATS2JS_NODE_sint_print
                            } // endlet
                            jsxtnm993 = jsxtnm992
                            jsxtnm994 = jsxtnm993
                            jsxtnm995 = jsxtnm994
                            let jsxtnm996 = XATSPFLT(jsxtnm972[1])
                            let jsxtnm997 = XATSDAPP(jsxtnm995(jsxtnm996))
                            jsxtnm998 = jsxtnm997
                            XATS000_patck(true)
                            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1623(line=58,offs=1)--1647(line=58,offs=25)))
                            // I1VALDCL
                            let jsxtnm1003
                            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/tupl000_vt.dats)@(1632(line=58,offs=10)--1642(line=58,offs=20))
                            // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                            // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                            // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                            let jsxtnm1001
                            let jsxtnm1000 // let
                            { // let
                              // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                              // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                              // XATS2JS_NODE_strn_print_2214
                                // FJARGdarg($list(I1BNDcons(I1TNM(999);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(999)))))))
                                // I1CMP:start
                                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                              jsxtnm1000 = XATS2JS_NODE_strn_print
                            } // endlet
                            jsxtnm1001 = jsxtnm1000
                            let jsxtnm1002 = XATSDAPP(jsxtnm1001(XATSSTRN(")")))
                            jsxtnm1003 = jsxtnm1002
                            XATS000_patck(true)
                            jsxtnm1004 = XATSVOID
                          } // endlet
                          // I1CMP:return:I1Vtnm(I1TNM(1004))
                          return jsxtnm1004
                        } // endtimp(g_print0(1412))
                        let jsxtnm1006 = XATSDAPP(jsxtnm1005(XATSP1CN("strmcon_vt_cons", jsxtnm916[0+1])))
                        jsxtnm1007 = jsxtnm1006
                        XATS000_patck(true)
                        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7979(line=582,offs=14)--7980(line=582,offs=15))
                        // I0Etapq(I0Ecst(sint_add$sint(936)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gint000.sats)@(3081(line=142,offs=1)--3094(line=142,offs=14))));$list(T2JAG($list())))
                        // T1IMPallx(sint_add$sint(936);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(2677(line=145,offs=1)--2841(line=157,offs=2)))
                        // T1IMPallx(sint_add$sint(936)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_add$sint(936);$list()))))
                        let jsxtnm1014 = function (arg1, arg2) { // timp: sint_add$sint(936)
                          let jsxtnm1008 = arg1
                          let jsxtnm1009 = arg2
                          // I1CMP:start
                          let jsxtnm1013 // let
                          { // let
                            // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(2767(line=153,offs=1)--2839(line=156,offs=39)))
                            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(2775(line=154,offs=1)--2839(line=156,offs=39))
                            // I1FUNDCL: XATS2JS_sint_add$sint(4938)
                            // XATS2JS_sint_add$sint_2778
                              // FJARGdarg($list(I1BNDcons(I1TNM(1010);I0Pvar(i1(4939));$list(@(i1(4939),I1Vtnm(I1TNM(1010))))),I1BNDcons(I1TNM(1011);I0Pvar(i2(4940));$list(@(i2(4940),I1Vtnm(I1TNM(1011)))))))
                              // I1CMP:start
                              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_add$sint);G1Nlist($list()))// I1CMP:return
                            let jsxtnm1012 = XATSDAPP(XATS2JS_sint_add$sint(jsxtnm1008, jsxtnm1009))
                            jsxtnm1013 = jsxtnm1012
                          } // endlet
                          // I1CMP:return:I1Vtnm(I1TNM(1013))
                          return jsxtnm1013
                        } // endtimp(sint_add$sint(936))
                        let jsxtnm1015 = XATSDAPP(jsxtnm1014(jsxtnm909, XATSINT1(1)))
                        let jsxtnm1016 = XATSDAPP(loop_7510(XATSP1CN("strmcon_vt_cons", jsxtnm916[1+1]), jsxtnm1015))
                        jsxtnm1017 = jsxtnm1016
                      } // endlet
                      jsxtnm1018 = jsxtnm1017
                    } // endlet
                    jsxtnm1019 = jsxtnm1018
                  } // end(if)
                  jsxtnm1020 = jsxtnm1019
                  break // cls
                } // gpt
                // } // cls
                XATS000_cfail()
              } while (false) // end-of(do)
              // I1CMP:return:I1Vtnm(I1TNM(1020))
              return jsxtnm1020
            } // endfun(loop_7510)
            let jsxtnm1027 // let
            { // let
              // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7296(line=509,offs=1)--7327(line=511,offs=21)))
              // I1VALDCL
              let jsxtnm1025
              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/strm000_vt.dats)@(7307(line=511,offs=1)--7312(line=511,offs=6))
              // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
              // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
              // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
              let jsxtnm1023
              let jsxtnm1022 // let
              { // let
                // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                // XATS2JS_NODE_strn_print_2214
                  // FJARGdarg($list(I1BNDcons(I1TNM(1021);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1021)))))))
                  // I1CMP:start
                  // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                jsxtnm1022 = XATS2JS_NODE_strn_print
              } // endlet
              jsxtnm1023 = jsxtnm1022
              let jsxtnm1024 = XATSDAPP(jsxtnm1023(jsxtnm898))
              jsxtnm1025 = jsxtnm1024
              XATS000_patck(true)
              let jsxtnm1026 = XATSDAPP(loop_7510(jsxtnm894, XATSINT1(0)))
              jsxtnm1027 = jsxtnm1026
            } // endlet
            jsxtnm1028 = jsxtnm1027
          } // endlet
          // I1CMP:return:I1Vtnm(I1TNM(1028))
          return jsxtnm1028
        } // endtimp(strm_vt_len$print0(2188))
        let jsxtnm1030 = XATSDAPP(jsxtnm1029(jsxtnm782, jsxtnm791))
        jsxtnm1031 = jsxtnm1030
      } // end(if)
      jsxtnm1032 = jsxtnm1031
    } // endlet
    // I1CMP:return:I1Vtnm(I1TNM(1032))
    return jsxtnm1032
  } // endtimp(strm_vt_print0(2186))
  jsxtnm1034 = jsxtnm1033
  let jsxtnm1035 = XATSDAPP(jsxtnm1034(jsxtnm715))
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gsyn000_vt.dats)@(2420(line=108,offs=39)--2428(line=108,offs=47))
  // I0Etapq(I0Ecst(g_print0(1412)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas000_vt.sats)@(2080(line=106,offs=1)--2088(line=106,offs=9))));$list(T2JAG($list(T2Pvar(x4[8341])))))
  // T1IMPallx(g_print0(1412);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1589(line=56,offs=1)--1634(line=58,offs=27)))
  // T1IMPallx(g_print0(1412)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[8831],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_print0(1412);$list(@(x0[3750],T2Pvar(x0[8831])))))))
  let jsxtnm1040
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1623(line=58,offs=16)--1630(line=58,offs=23))
  // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x0[8831])))))
  // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
  // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(strn)))))))
  let jsxtnm1039
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
  // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
  // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
  // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
  let jsxtnm1038
  let jsxtnm1037 // let
  { // let
    // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
    // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
    // XATS2JS_NODE_strn_print_2214
      // FJARGdarg($list(I1BNDcons(I1TNM(1036);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1036)))))))
      // I1CMP:start
      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
    jsxtnm1037 = XATS2JS_NODE_strn_print
  } // endlet
  jsxtnm1038 = jsxtnm1037
  jsxtnm1039 = jsxtnm1038
  jsxtnm1040 = jsxtnm1039
  let jsxtnm1041 = XATSDAPP(jsxtnm1040(jsxtnm716))
  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gsyn000_vt.dats)@(2440(line=109,offs=3)--2453(line=109,offs=16))
  // I0Etapq(I0Ecst(gs_print0$end(1972)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gsyn000_vt.sats)@(1466(line=46,offs=1)--1479(line=46,offs=14))));$list(T2JAG($list())))
  // T1IMPallx(gs_print0$end(1972);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gsyn000_vt.dats)@(1479(line=46,offs=1)--1518(line=48,offs=21)))
  // T1IMPallx(gs_print0$end(1972)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print0$end(1972);$list()))))
  let jsxtnm1043 = function () { // timp: gs_print0$end(1972)
    // I1CMP:start
    let jsxtnm1042 = XATSTUP0([])
    // I1CMP:return:I1Vtnm(I1TNM(1042))
    return jsxtnm1042
  } // endtimp(gs_print0$end(1972))
  let jsxtnm1044 = XATSDAPP(jsxtnm1043())
  // I1CMP:return:I1Vtnm(I1TNM(1044))
  return jsxtnm1044
} // endtimp(gs_print0_a5(1979))
// LCSRCsome1(test02_jshmap0.dats)@(830(line=48,offs=11)--834(line=48,offs=15))
// I0Etapq(I0Ecst(g_type(196)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(1861(line=63,offs=1)--1867(line=63,offs=7))));$list(T2JAG($list())))
// T1IMPallx(g_type(196);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(1498(line=45,offs=1)--1558(line=49,offs=22)))
// T1IMPallx(g_type(196)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_type(196);$list()))))
let jsxtnm1049 = function (arg1) { // timp: g_type(196)
  let jsxtnm1046 = arg1
  // I1CMP:start
  let jsxtnm1047 = XATSCAPP("unit", [0])
  let jsxtnm1048 = XATSCAST("castxy_1839", [jsxtnm1047])
  // I1CMP:return:I1Vtnm(I1TNM(1048))
  return jsxtnm1048
} // endtimp(g_type(196))
let jsxtnm1050 = XATSDAPP(jsxtnm1049(jsxtnm711))
let jsxtnm1051 = XATSDAPP(jsxtnm1045(XATSSTRN("kxs2("), jsxtnm1050, XATSSTRN(") = "), jsxtnm711, XATSSTRN("\n")))
jsxtnm1052 = jsxtnm1051
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(test02_jshmap0.dats)@(908(line=53,offs=1)--964(line=54,offs=39)))
// I1VALDCL
let jsxtnm1111
// LCSRCsome1(test02_jshmap0.dats)@(919(line=53,offs=12)--925(line=53,offs=18))
// I0Etapq(I0Ecst(jsdasz_make_fwork(2717)(LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(3942(line=213,offs=1)--3959(line=213,offs=18))));$list(T2JAG($list())))
// T1IMPallx(jsdasz_make_fwork(2717);LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(11678(line=808,offs=1)--11860(line=821,offs=2)))
// T1IMPallx(jsdasz_make_fwork(2717)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(jsdasz_make_fwork(2717);$list()))))
let jsxtnm1057 = function (arg1) { // timp: jsdasz_make_fwork(2717)
  let jsxtnm1053 = arg1
  // I1CMP:start
  let jsxtnm1056 // let
  { // let
    // I1Dextern(LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(11774(line=816,offs=1)--11858(line=820,offs=39)))
    // LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(11782(line=817,offs=1)--11858(line=820,offs=39))
    // I1FUNDCL: XATS2JS_jsdasz_make_fwork(5378)
    // XATS2JS_jsdasz_make_fwork_11785
      // FJARGdarg($list(I1BNDcons(I1TNM(1054);I0Pvar(fwork(5379));$list(@(fwork(5379),I1Vtnm(I1TNM(1054)))))))
      // I1CMP:start
      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_jsdasz_make_fwork);G1Nlist($list()))// I1CMP:return
    let jsxtnm1055 = XATSDAPP(XATS2JS_jsdasz_make_fwork(jsxtnm1053))
    jsxtnm1056 = jsxtnm1055
  } // endlet
  // I1CMP:return:I1Vtnm(I1TNM(1056))
  return jsxtnm1056
} // endtimp(jsdasz_make_fwork(2717))
let jsxtnm1109 = function (arg1) { // lam0(T_LAM(0))
  let jsxtnm1058 = arg1
  // I1CMP:start
  // LCSRCsome1(test02_jshmap0.dats)@(950(line=54,offs=25)--963(line=54,offs=38))
  // I0Etapq(I0Ecst(GSEQ_foritm$f1un(271)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gcls000.sats)@(6196(line=348,offs=1)--6212(line=348,offs=17))));$list(T2JAG($list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))
  // T1IMPallx(GSEQ_foritm$f1un(271);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gcls000.dats)@(4890(line=317,offs=1)--5012(line=324,offs=41)))
  // T1IMPallx(GSEQ_foritm$f1un(271)<$list(T2JAG($list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[6706],T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),@(x0[6707],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(GSEQ_foritm$f1un(271);$list(@(xs[869],T2Pvar(xs[6706])),@(x0[870],T2Pvar(x0[6707])))))))
  let jsxtnm1106 = function (arg1, arg2) { // timp: GSEQ_foritm$f1un(271)
    let jsxtnm1059 = arg1
    let jsxtnm1060 = arg2
    // I1CMP:start
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gcls000.dats)@(4955(line=323,offs=1)--4971(line=323,offs=17))
    // I0Etapq(I0Ecst(gseq_foritm$f1un(406)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gseq001.sats)@(7927(line=452,offs=1)--7943(line=452,offs=17))));$list(T2JAG($list(T2Pvar(xs[6706]))),T2JAG($list(T2Pvar(x0[6707])))))
    // T1IMPallx(gseq_foritm$f1un(406);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq001.dats)@(6627(line=426,offs=1)--6765(line=435,offs=2)))
    // T1IMPallx(gseq_foritm$f1un(406)<$list(T2JAG($list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[6125],T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),@(x0[6126],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq_foritm$f1un(406);$list(@(xs[1231],T2Pvar(xs[6125])),@(x0[1232],T2Pvar(x0[6126])))))))
    let jsxtnm1100 = function (arg1, arg2) { // timp: gseq_foritm$f1un(406)
      let jsxtnm1061 = arg1
      let jsxtnm1062 = arg2
      // I1CMP:start
      let jsxtnm1099 // let
      { // let
        // I1Dimplmnt0(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq001.dats)@(6724(line=434,offs=1)--6763(line=434,offs=40)))
        // I1Dimplmnt0(DIMPLone2(foritm$work(51);$list(@(x0[464],T2Pvar(x0[6126]))))):timp
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq001.dats)@(6690(line=432,offs=1)--6701(line=432,offs=12))
        // I0Etapq(I0Ecst(gseq_foritm(402)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gseq001.sats)@(7078(line=402,offs=1)--7089(line=402,offs=12))));$list(T2JAG($list(T2Pvar(xs[6125]))),T2JAG($list(T2Pvar(x0[6126])))))
        // T1IMPallx(gseq_foritm(402);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq001.dats)@(6401(line=407,offs=1)--6588(line=424,offs=2)))
        // T1IMPallx(gseq_foritm(402)<$list(T2JAG($list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[6123],T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),@(x0[6124],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq_foritm(402);$list(@(xs[1215],T2Pvar(xs[6123])),@(x0[1216],T2Pvar(x0[6124])))))))
        let jsxtnm1097 = function (arg1) { // timp: gseq_foritm(402)
          let jsxtnm1065 = arg1
          // I1CMP:start
          let jsxtnm1096 // let
          { // let
            // I1Dimplmnt0(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq001.dats)@(6511(line=419,offs=1)--6586(line=423,offs=32)))
            // I1Dimplmnt0(DIMPLone2(forall$test(47);$list(@(x0[460],T2Pvar(x0[6124]))))):timp
            let jsxtnm1095 // let
            { // let
              // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq001.dats)@(6459(line=414,offs=1)--6491(line=416,offs=13)))
              // I1VALDCL
              let jsxtnm1094
              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq001.dats)@(6467(line=415,offs=1)--6478(line=415,offs=12))
              // I0Etapq(I0Ecst(gseq_forall(386)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gseq001.sats)@(3721(line=210,offs=1)--3732(line=210,offs=12))));$list(T2JAG($list(T2Pvar(xs[6123]))),T2JAG($list(T2Pvar(x0[6124])))))
              // T1IMPallx(gseq_forall(386);LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(8111(line=503,offs=1)--8240(line=511,offs=34)))
              // T1IMPallx(gseq_forall(386)<$list(T2JAG($list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(k[9104],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x[9105],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gseq_forall(386);$list(@(xs[1167],T2Papps(T2Pcst(jsm1);$list(T2Pvar(k[9104]),T2Pvar(x[9105])))),@(x0[1168],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Pvar(k[9104])),S2LAB(LABint(1);T2Pvar(x[9105]))))))))))
              let jsxtnm1092 = function (arg1) { // timp: gseq_forall(386)
                let jsxtnm1070 = arg1
                // I1CMP:start
                // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(8181(line=509,offs=1)--8199(line=509,offs=19))
                // I0Etapq(I0Ecst(jshmap_forall$f2un(2764)(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(4300(line=230,offs=1)--4318(line=230,offs=19))));$list(T2JAG($list())))
                // T1IMPallx(jshmap_forall$f2un(2764);LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(8379(line=523,offs=1)--8600(line=538,offs=2)))
                // T1IMPallx(jshmap_forall$f2un(2764)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(jshmap_forall$f2un(2764);$list()))))
                let jsxtnm1077 = function (arg1, arg2) { // timp: jshmap_forall$f2un(2764)
                  let jsxtnm1071 = arg1
                  let jsxtnm1072 = arg2
                  // I1CMP:start
                  let jsxtnm1076 // let
                  { // let
                    // I1Dextern(LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(8485(line=531,offs=1)--8598(line=537,offs=37)))
                    // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(8493(line=532,offs=1)--8598(line=537,offs=37))
                    // I1FUNDCL: XATS2JS_jshmap_forall$f2un(5508)
                    // XATS2JS_jshmap_forall$f2un_8496
                      // FJARGdarg($list(I1BNDcons(I1TNM(1073);I0Pvar(map(5509));$list(@(map(5509),I1Vtnm(I1TNM(1073))))),I1BNDcons(I1TNM(1074);I0Pvar(test(5510));$list(@(test(5510),I1Vtnm(I1TNM(1074)))))))
                      // I1CMP:start
                      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_jshmap_forall$f2un);G1Nlist($list()))// I1CMP:return
                    let jsxtnm1075 = XATSDAPP(XATS2JS_jshmap_forall$f2un(jsxtnm1071, jsxtnm1072))
                    jsxtnm1076 = jsxtnm1075
                  } // endlet
                  // I1CMP:return:I1Vtnm(I1TNM(1076))
                  return jsxtnm1076
                } // endtimp(jshmap_forall$f2un(2764))
                let jsxtnm1090 = function (arg1, arg2) { // lam0(T_LAM(0))
                  let jsxtnm1078 = arg1
                  let jsxtnm1079 = arg2
                  // I1CMP:start
                  // LCSRCsome1(../../../DATS/CATS/JS/hashmp0.dats)@(8221(line=511,offs=15)--8232(line=511,offs=26))
                  // I0Etapq(I0Ecst(forall$test(47)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas001.sats)@(2003(line=96,offs=1)--2014(line=96,offs=12))));$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Pvar(k[9104])),S2LAB(LABint(1);T2Pvar(x[9105]))))))))
                  // T1IMPallx(forall$test(47);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq001.dats)@(6511(line=419,offs=1)--6586(line=423,offs=32)))
                  // T1IMPallx(forall$test(47)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[6123],T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),@(x0[6124],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(forall$test(47);$list(@(x0[460],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))
                  let jsxtnm1087 = function (arg1) { // timp: forall$test(47)
                    let jsxtnm1080 = arg1
                    // I1CMP:start
                    let jsxtnm1086 // let
                    { // let
                      // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq001.dats)@(6546(line=422,offs=1)--6574(line=423,offs=20)))
                      // I1VALDCL
                      let jsxtnm1085
                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq001.dats)@(6555(line=423,offs=1)--6566(line=423,offs=12))
                      // I0Etapq(I0Ecst(foritm$work(51)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas001.sats)@(2341(line=124,offs=1)--2352(line=124,offs=12))));$list(T2JAG($list(T2Pvar(x0[6124])))))
                      // T1IMPallx(foritm$work(51);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gseq001.dats)@(6724(line=434,offs=1)--6763(line=434,offs=40)))
                      // T1IMPallx(foritm$work(51)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[6125],T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),@(x0[6126],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(foritm$work(51);$list(@(x0[464],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))
                      let jsxtnm1083 = function (arg1) { // timp: foritm$work(51)
                        let jsxtnm1081 = arg1
                        // I1CMP:start
                        let jsxtnm1082 = XATSDAPP(jsxtnm1062(jsxtnm1081))
                        // I1CMP:return:I1Vtnm(I1TNM(1082))
                        return jsxtnm1082
                      } // endtimp(foritm$work(51))
                      let jsxtnm1084 = XATSDAPP(jsxtnm1083(jsxtnm1080))
                      jsxtnm1085 = jsxtnm1084
                      XATS000_patck(true)
                      jsxtnm1086 = XATSBOOL(true)
                    } // endlet
                    // I1CMP:return:I1Vtnm(I1TNM(1086))
                    return jsxtnm1086
                  } // endtimp(forall$test(47))
                  let jsxtnm1088 = XATSTUP1(XATSTRCD(0), [jsxtnm1078, jsxtnm1079])
                  let jsxtnm1089 = XATSDAPP(jsxtnm1087(jsxtnm1088))
                  // I1CMP:return:I1Vtnm(I1TNM(1089))
                  return jsxtnm1089
                } // endfun(lam0)
                let jsxtnm1091 = XATSDAPP(jsxtnm1077(jsxtnm1070, jsxtnm1090))
                // I1CMP:return:I1Vtnm(I1TNM(1091))
                return jsxtnm1091
              } // endtimp(gseq_forall(386))
              let jsxtnm1093 = XATSDAPP(jsxtnm1092(jsxtnm1065))
              jsxtnm1094 = jsxtnm1093
              XATS000_patck(true)
              jsxtnm1095 = XATSVOID
            } // endlet
            jsxtnm1096 = jsxtnm1095
          } // endlet
          // I1CMP:return:I1Vtnm(I1TNM(1096))
          return jsxtnm1096
        } // endtimp(gseq_foritm(402))
        let jsxtnm1098 = XATSDAPP(jsxtnm1097(jsxtnm1061))
        jsxtnm1099 = jsxtnm1098
      } // endlet
      // I1CMP:return:I1Vtnm(I1TNM(1099))
      return jsxtnm1099
    } // endtimp(gseq_foritm$f1un(406))
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gcls000.dats)@(4981(line=324,offs=10)--4990(line=324,offs=19))
    // I0Etapq(I0Ecst(GSEQ_unmk(245)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gcls000.sats)@(2269(line=102,offs=1)--2278(line=102,offs=10))));$list(T2JAG($list(T2Pvar(xs[6706]))),T2JAG($list(T2Pvar(x0[6707])))))
    // T1IMPallx(GSEQ_unmk(245);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gcls000.dats)@(1499(line=45,offs=1)--1572(line=51,offs=20)))
    // T1IMPallx(GSEQ_unmk(245)<$list(T2JAG($list(T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[6654],T2Papps(T2Pcst(jshmap_tbox);$list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())),T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))),@(x0[6655],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(GSEQ_unmk(245);$list(@(xs[817],T2Pvar(xs[6654])),@(x0[818],T2Pvar(x0[6655])))))))
    let jsxtnm1103 = function (arg1) { // timp: GSEQ_unmk(245)
      let jsxtnm1101 = arg1
      // I1CMP:start
      let jsxtnm1102 = XATSCAST("castxy_1839", [jsxtnm1101])
      // I1CMP:return:I1Vtnm(I1TNM(1102))
      return jsxtnm1102
    } // endtimp(GSEQ_unmk(245))
    let jsxtnm1104 = XATSDAPP(jsxtnm1103(jsxtnm1059))
    let jsxtnm1105 = XATSDAPP(jsxtnm1100(jsxtnm1104, jsxtnm1060))
    // I1CMP:return:I1Vtnm(I1TNM(1105))
    return jsxtnm1105
  } // endtimp(GSEQ_foritm$f1un(271))
  let jsxtnm1107 = XATSCAST("GSEQ_make_jshmap_10775", [jsxtnm54])
  let jsxtnm1108 = XATSDAPP(jsxtnm1106(jsxtnm1107, jsxtnm1058))
  // I1CMP:return:I1Vtnm(I1TNM(1108))
  return jsxtnm1108
} // endfun(lam0)
let jsxtnm1110 = XATSDAPP(jsxtnm1057(jsxtnm1109))
jsxtnm1111 = jsxtnm1110
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(test02_jshmap0.dats)@(965(line=55,offs=1)--1024(line=56,offs=42)))
// I1VALDCL
let jsxtnm1328
// LCSRCsome1(test02_jshmap0.dats)@(976(line=55,offs=12)--982(line=55,offs=18))
// I0Etapq(I0Ecst(gs_print_a5(810)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gsyn000.sats)@(12006(line=769,offs=1)--12017(line=769,offs=12))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(type_vw_t0);$list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
// T1IMPallx(gs_print_a5(810);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(21886(line=1350,offs=1)--22194(line=1368,offs=4)))
// T1IMPallx(gs_print_a5(810)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(type_vw_t0);$list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7032],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[7033],T2Papps(T2Pcst(type_vw_t0);$list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))),@(x2[7034],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[7035],T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))),@(x4[7036],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a5(810);$list(@(x0[2496],T2Pvar(x0[7032])),@(x1[2497],T2Pvar(x1[7033])),@(x2[2498],T2Pvar(x2[7034])),@(x3[2499],T2Pvar(x3[7035])),@(x4[2500],T2Pvar(x4[7036])))))))
let jsxtnm1321 = function (arg1, arg2, arg3, arg4, arg5) { // timp: gs_print_a5(810)
  let jsxtnm1112 = arg1
  let jsxtnm1113 = arg2
  let jsxtnm1114 = arg3
  let jsxtnm1115 = arg4
  let jsxtnm1116 = arg5
  // I1CMP:start
  let jsxtnm1320 // let
  { // let
    // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(21986(line=1360,offs=1)--22009(line=1361,offs=15)))
    // I1VALDCL
    let jsxtnm1120
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(21995(line=1361,offs=1)--22007(line=1361,offs=13))
    // I0Etapq(I0Ecst(gs_print$beg(802)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
    // T1IMPallx(gs_print$beg(802);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(20714(line=1268,offs=1)--20752(line=1270,offs=20)))
    // T1IMPallx(gs_print$beg(802)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(802);$list()))))
    let jsxtnm1118 = function () { // timp: gs_print$beg(802)
      // I1CMP:start
      let jsxtnm1117 = XATSTUP0([])
      // I1CMP:return:I1Vtnm(I1TNM(1117))
      return jsxtnm1117
    } // endtimp(gs_print$beg(802))
    let jsxtnm1119 = XATSDAPP(jsxtnm1118())
    jsxtnm1120 = jsxtnm1119
    XATS000_patck(true)
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22022(line=1363,offs=3)--22029(line=1363,offs=10))
    // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x0[7032])))))
    // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
    // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(strn)))))))
    let jsxtnm1124
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
    // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
    // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
    // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
    let jsxtnm1123
    let jsxtnm1122 // let
    { // let
      // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
      // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
      // XATS2JS_NODE_strn_print_2214
        // FJARGdarg($list(I1BNDcons(I1TNM(1121);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1121)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
      jsxtnm1122 = XATS2JS_NODE_strn_print
    } // endlet
    jsxtnm1123 = jsxtnm1122
    jsxtnm1124 = jsxtnm1123
    let jsxtnm1125 = XATSDAPP(jsxtnm1124(jsxtnm1112))
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22039(line=1363,offs=20)--22051(line=1363,offs=32))
    // I0Etapq(I0Ecst(gs_print$sep(803)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
    // T1IMPallx(gs_print$sep(803);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(20753(line=1271,offs=1)--20791(line=1273,offs=20)))
    // T1IMPallx(gs_print$sep(803)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(803);$list()))))
    let jsxtnm1127 = function () { // timp: gs_print$sep(803)
      // I1CMP:start
      let jsxtnm1126 = XATSTUP0([])
      // I1CMP:return:I1Vtnm(I1TNM(1126))
      return jsxtnm1126
    } // endtimp(gs_print$sep(803))
    let jsxtnm1128 = XATSDAPP(jsxtnm1127())
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22056(line=1364,offs=3)--22063(line=1364,offs=10))
    // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x1[7033])))))
    // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(4710(line=318,offs=1)--4814(line=324,offs=32)))
    // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(type_vw_t0);$list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))))>;I1Dtmpsub($list(@(vw[5785],T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))));I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Papps(T2Pcst(type);$list(T2Pvar(vw[5785])))))))))
    let jsxtnm1176 = function (arg1) { // timp: g_print(39)
      let jsxtnm1129 = arg1
      // I1CMP:start
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(4760(line=323,offs=1)--4767(line=323,offs=8))
      // I0Etapq(I0Ecst(g_ptype(202)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(2386(line=100,offs=1)--2393(line=100,offs=8))));$list(T2JAG($list(T2Pvar(vw[5785])))))
      // T1IMPallx(g_ptype(202);LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2080(line=74,offs=1)--2173(line=82,offs=23)))
      // T1IMPallx(g_ptype(202)<$list(T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))>;I1Dtmpsub($list(@(a[8925],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(g_ptype(202);$list(@(vw[773],T2Papps(T2Pcst(jsa1);$list(T2Pvar(a[8925])))))))))
      let jsxtnm1164 = function () { // timp: g_ptype(202)
        // I1CMP:start
        // LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2134(line=80,offs=1)--2139(line=80,offs=6))
        // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
        // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
        // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
        let jsxtnm1132
        let jsxtnm1131 // let
        { // let
          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
          // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
          // XATS2JS_NODE_strn_print_2214
            // FJARGdarg($list(I1BNDcons(I1TNM(1130);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1130)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
          jsxtnm1131 = XATS2JS_NODE_strn_print
        } // endlet
        jsxtnm1132 = jsxtnm1131
        let jsxtnm1133 = XATSDAPP(jsxtnm1132(XATSSTRN("jsdasz(")))
        // LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2151(line=82,offs=1)--2158(line=82,offs=8))
        // I0Etapq(I0Ecst(g_ptype(202)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(2386(line=100,offs=1)--2393(line=100,offs=8))));$list(T2JAG($list(T2Pvar(a[8925])))))
        // T1IMPallx(g_ptype(202);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(1835(line=66,offs=1)--1973(line=74,offs=29)))
        // T1IMPallx(g_ptype(202)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(a0[7357],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(a1[7358],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_ptype(202);$list(@(vw[773],T2Papps(T2Pcst(t0up);$list(T2Pvar(a0[7357]),T2Pvar(a1[7358])))))))))
        let jsxtnm1158 = function () { // timp: g_ptype(202)
          // I1CMP:start
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(1903(line=72,offs=3)--1908(line=72,offs=8))
          // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
          // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
          // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
          let jsxtnm1136
          let jsxtnm1135 // let
          { // let
            // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
            // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
            // XATS2JS_NODE_strn_print_2214
              // FJARGdarg($list(I1BNDcons(I1TNM(1134);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1134)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
            jsxtnm1135 = XATS2JS_NODE_strn_print
          } // endlet
          jsxtnm1136 = jsxtnm1135
          let jsxtnm1137 = XATSDAPP(jsxtnm1136(XATSSTRN("t0up2(")))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(1919(line=73,offs=3)--1926(line=73,offs=10))
          // I0Etapq(I0Ecst(g_ptype(202)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(2386(line=100,offs=1)--2393(line=100,offs=8))));$list(T2JAG($list(T2Pvar(a0[7357])))))
          // T1IMPallx(g_ptype(202);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(2934(line=164,offs=1)--2988(line=167,offs=29)))
          // T1IMPallx(g_ptype(202)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_ptype(202);$list(@(vw[773],T2Pcst(strn)))))))
          let jsxtnm1142 = function () { // timp: g_ptype(202)
            // I1CMP:start
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(2975(line=167,offs=16)--2980(line=167,offs=21))
            // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
            // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
            // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
            let jsxtnm1140
            let jsxtnm1139 // let
            { // let
              // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
              // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
              // XATS2JS_NODE_strn_print_2214
                // FJARGdarg($list(I1BNDcons(I1TNM(1138);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1138)))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
              jsxtnm1139 = XATS2JS_NODE_strn_print
            } // endlet
            jsxtnm1140 = jsxtnm1139
            let jsxtnm1141 = XATSDAPP(jsxtnm1140(XATSSTRN("strn")))
            // I1CMP:return:I1Vtnm(I1TNM(1141))
            return jsxtnm1141
          } // endtimp(g_ptype(202))
          let jsxtnm1143 = XATSDAPP(jsxtnm1142())
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(1934(line=73,offs=18)--1939(line=73,offs=23))
          // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
          // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
          // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
          let jsxtnm1146
          let jsxtnm1145 // let
          { // let
            // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
            // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
            // XATS2JS_NODE_strn_print_2214
              // FJARGdarg($list(I1BNDcons(I1TNM(1144);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1144)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
            jsxtnm1145 = XATS2JS_NODE_strn_print
          } // endlet
          jsxtnm1146 = jsxtnm1145
          let jsxtnm1147 = XATSDAPP(jsxtnm1146(XATSSTRN(",")))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(1947(line=74,offs=3)--1954(line=74,offs=10))
          // I0Etapq(I0Ecst(g_ptype(202)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(2386(line=100,offs=1)--2393(line=100,offs=8))));$list(T2JAG($list(T2Pvar(a1[7358])))))
          // T1IMPallx(g_ptype(202);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(2708(line=146,offs=1)--2762(line=149,offs=29)))
          // T1IMPallx(g_ptype(202)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_ptype(202);$list(@(vw[773],T2Pcst(sint)))))))
          let jsxtnm1152 = function () { // timp: g_ptype(202)
            // I1CMP:start
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(2749(line=149,offs=16)--2754(line=149,offs=21))
            // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
            // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
            // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
            let jsxtnm1150
            let jsxtnm1149 // let
            { // let
              // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
              // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
              // XATS2JS_NODE_strn_print_2214
                // FJARGdarg($list(I1BNDcons(I1TNM(1148);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1148)))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
              jsxtnm1149 = XATS2JS_NODE_strn_print
            } // endlet
            jsxtnm1150 = jsxtnm1149
            let jsxtnm1151 = XATSDAPP(jsxtnm1150(XATSSTRN("sint")))
            // I1CMP:return:I1Vtnm(I1TNM(1151))
            return jsxtnm1151
          } // endtimp(g_ptype(202))
          let jsxtnm1153 = XATSDAPP(jsxtnm1152())
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(1962(line=74,offs=18)--1967(line=74,offs=23))
          // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
          // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
          // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
          let jsxtnm1156
          let jsxtnm1155 // let
          { // let
            // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
            // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
            // XATS2JS_NODE_strn_print_2214
              // FJARGdarg($list(I1BNDcons(I1TNM(1154);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1154)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
            jsxtnm1155 = XATS2JS_NODE_strn_print
          } // endlet
          jsxtnm1156 = jsxtnm1155
          let jsxtnm1157 = XATSDAPP(jsxtnm1156(XATSSTRN(")")))
          // I1CMP:return:I1Vtnm(I1TNM(1157))
          return jsxtnm1157
        } // endtimp(g_ptype(202))
        let jsxtnm1159 = XATSDAPP(jsxtnm1158())
        // LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2164(line=82,offs=14)--2169(line=82,offs=19))
        // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
        // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
        // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
        let jsxtnm1162
        let jsxtnm1161 // let
        { // let
          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
          // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
          // XATS2JS_NODE_strn_print_2214
            // FJARGdarg($list(I1BNDcons(I1TNM(1160);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1160)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
          jsxtnm1161 = XATS2JS_NODE_strn_print
        } // endlet
        jsxtnm1162 = jsxtnm1161
        let jsxtnm1163 = XATSDAPP(jsxtnm1162(XATSSTRN(")")))
        // I1CMP:return:I1Vtnm(I1TNM(1163))
        return jsxtnm1163
      } // endtimp(g_ptype(202))
      let jsxtnm1165 = XATSDAPP(jsxtnm1164())
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(4783(line=324,offs=1)--4788(line=324,offs=6))
      // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
      // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
      let jsxtnm1168
      let jsxtnm1167 // let
      { // let
        // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
        // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
        // XATS2JS_NODE_strn_print_2214
          // FJARGdarg($list(I1BNDcons(I1TNM(1166);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1166)))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
        jsxtnm1167 = XATS2JS_NODE_strn_print
      } // endlet
      jsxtnm1168 = jsxtnm1167
      let jsxtnm1169 = XATSDAPP(jsxtnm1168(XATSSTRN(":")))
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(4792(line=324,offs=10)--4799(line=324,offs=17))
      // I0Etapq(I0Ecst(g_psort(201)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(2346(line=97,offs=1)--2353(line=97,offs=8))));$list(T2JAG($list(T2Pvar(vw[5785])))))
      // T1IMPallx(g_psort(201);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(1831(line=74,offs=1)--1885(line=78,offs=22)))
      // T1IMPallx(g_psort(201)<$list(T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))>;I1Dtmpsub($list(@(tx[5760],T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))));I1Dimplmnt0(DIMPLone2(g_psort(201);$list(@(vw[772],T2Pvar(tx[5760])))))))
      let jsxtnm1174 = function () { // timp: g_psort(201)
        // I1CMP:start
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(1866(line=78,offs=3)--1876(line=78,offs=13))
        // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
        // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
        // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
        let jsxtnm1172
        let jsxtnm1171 // let
        { // let
          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
          // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
          // XATS2JS_NODE_strn_print_2214
            // FJARGdarg($list(I1BNDcons(I1TNM(1170);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1170)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
          jsxtnm1171 = XATS2JS_NODE_strn_print
        } // endlet
        jsxtnm1172 = jsxtnm1171
        let jsxtnm1173 = XATSDAPP(jsxtnm1172(XATSSTRN("tbox")))
        // I1CMP:return:I1Vtnm(I1TNM(1173))
        return jsxtnm1173
      } // endtimp(g_psort(201))
      let jsxtnm1175 = XATSDAPP(jsxtnm1174())
      // I1CMP:return:I1Vtnm(I1TNM(1175))
      return jsxtnm1175
    } // endtimp(g_print(39))
    let jsxtnm1177 = XATSDAPP(jsxtnm1176(jsxtnm1113))
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22073(line=1364,offs=20)--22085(line=1364,offs=32))
    // I0Etapq(I0Ecst(gs_print$sep(803)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
    // T1IMPallx(gs_print$sep(803);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(20753(line=1271,offs=1)--20791(line=1273,offs=20)))
    // T1IMPallx(gs_print$sep(803)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(803);$list()))))
    let jsxtnm1179 = function () { // timp: gs_print$sep(803)
      // I1CMP:start
      let jsxtnm1178 = XATSTUP0([])
      // I1CMP:return:I1Vtnm(I1TNM(1178))
      return jsxtnm1178
    } // endtimp(gs_print$sep(803))
    let jsxtnm1180 = XATSDAPP(jsxtnm1179())
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22090(line=1365,offs=3)--22097(line=1365,offs=10))
    // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x2[7034])))))
    // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
    // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(strn)))))))
    let jsxtnm1184
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
    // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
    // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
    // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
    let jsxtnm1183
    let jsxtnm1182 // let
    { // let
      // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
      // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
      // XATS2JS_NODE_strn_print_2214
        // FJARGdarg($list(I1BNDcons(I1TNM(1181);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1181)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
      jsxtnm1182 = XATS2JS_NODE_strn_print
    } // endlet
    jsxtnm1183 = jsxtnm1182
    jsxtnm1184 = jsxtnm1183
    let jsxtnm1185 = XATSDAPP(jsxtnm1184(jsxtnm1114))
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22107(line=1365,offs=20)--22119(line=1365,offs=32))
    // I0Etapq(I0Ecst(gs_print$sep(803)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
    // T1IMPallx(gs_print$sep(803);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(20753(line=1271,offs=1)--20791(line=1273,offs=20)))
    // T1IMPallx(gs_print$sep(803)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(803);$list()))))
    let jsxtnm1187 = function () { // timp: gs_print$sep(803)
      // I1CMP:start
      let jsxtnm1186 = XATSTUP0([])
      // I1CMP:return:I1Vtnm(I1TNM(1186))
      return jsxtnm1186
    } // endtimp(gs_print$sep(803))
    let jsxtnm1188 = XATSDAPP(jsxtnm1187())
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22124(line=1366,offs=3)--22131(line=1366,offs=10))
    // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x3[7035])))))
    // T1IMPallx(g_print(39);LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2257(line=88,offs=1)--2510(line=107,offs=4)))
    // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))>;I1Dtmpsub($list(@(a[8926],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Papps(T2Pcst(jsa1);$list(T2Pvar(a[8926])))))))))
    let jsxtnm1307 = function (arg1) { // timp: g_print(39)
      let jsxtnm1189 = arg1
      // I1CMP:start
      let jsxtnm1306 // let
      { // let
        // LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2312(line=95,offs=1)--2329(line=95,offs=18))
        // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(x0;S2Evar(S2Tbas(T2Bimpr(2;vwtp));a[8926])))))
        // LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2330(line=96,offs=1)--2351(line=96,offs=22))
        // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(xs;S2Eapps(S2Ecst(S2Tfun1($list(S2Tbas(T2Bimpr(2;vwtp)));S2Tbas(T2Bimpr(1;tbox)));jsa1);$list(S2Evar(S2Tbas(T2Bimpr(2;vwtp));a[8926])))))))
        // I1Dimplmnt0(LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2355(line=98,offs=1)--2388(line=99,offs=25)))
        // I1Dimplmnt0(DIMPLone2(gseq$sep(348);$list(@(xs[1071],T2Pcst(xs)),@(x0[1072],T2Pcst(x0))))):timp
        // I1Dimplmnt0(LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2389(line=100,offs=1)--2422(line=101,offs=25)))
        // I1Dimplmnt0(DIMPLone2(gseq$end(347);$list(@(xs[1069],T2Pcst(xs)),@(x0[1070],T2Pcst(x0))))):timp
        // I1Dimplmnt0(LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2423(line=102,offs=1)--2462(line=103,offs=31)))
        // I1Dimplmnt0(DIMPLone2(gseq$beg(346);$list(@(xs[1067],T2Pcst(xs)),@(x0[1068],T2Pcst(x0))))):timp
        // LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2475(line=106,offs=3)--2486(line=106,offs=14))
        // I0Etapq(I0Ecst(gseq_print1(1688)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gseq000_vt.sats)@(3999(line=245,offs=1)--4010(line=245,offs=12))));$list(T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Pvar(a[8926]))))),T2JAG($list(T2Pvar(a[8926])))))
        // T1IMPallx(gseq_print1(1688);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4483(line=284,offs=1)--4800(line=309,offs=7)))
        // T1IMPallx(gseq_print1(1688)<$list(T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[7932],T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))),@(x0[7933],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq_print1(1688);$list(@(xs[4222],T2Pvar(xs[7932])),@(x0[4223],T2Pvar(x0[7933])))))))
        let jsxtnm1304 = function (arg1) { // timp: gseq_print1(1688)
          let jsxtnm1190 = arg1
          // I1CMP:start
          let jsxtnm1303 // let
          { // let
            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4534(line=289,offs=1)--4576(line=291,offs=21)))
            // I1VALDCL
            let jsxtnm1197
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4543(line=290,offs=1)--4553(line=290,offs=11))
            // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
            // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
            // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
            let jsxtnm1193
            let jsxtnm1192 // let
            { // let
              // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
              // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
              // XATS2JS_NODE_strn_print_2214
                // FJARGdarg($list(I1BNDcons(I1TNM(1191);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1191)))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
              jsxtnm1192 = XATS2JS_NODE_strn_print
            } // endlet
            jsxtnm1193 = jsxtnm1192
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4557(line=291,offs=2)--4565(line=291,offs=10))
            // I0Etapq(I0Ecst(gseq$beg(346)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gseq000.sats)@(2390(line=130,offs=1)--2398(line=130,offs=9))));$list(T2JAG($list(T2Pvar(xs[7932]))),T2JAG($list(T2Pvar(x0[7933])))))
            // T1IMPallx(gseq$beg(346);LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2423(line=102,offs=1)--2462(line=103,offs=31)))
            // T1IMPallx(gseq$beg(346)<$list(T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(a[8926],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq$beg(346);$list(@(xs[1067],T2Papps(T2Pcst(jsa1);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))),@(x0[1068],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))
            let jsxtnm1194 = function () { // timp: gseq$beg(346)
              // I1CMP:start
              // I1CMP:return:I1Vstr(...)
              return XATSSTRN("jsdasz(")
            } // endtimp(gseq$beg(346))
            let jsxtnm1195 = XATSDAPP(jsxtnm1194())
            let jsxtnm1196 = XATSDAPP(jsxtnm1193(jsxtnm1195))
            jsxtnm1197 = jsxtnm1196
            XATS000_patck(true)
            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4577(line=292,offs=1)--4751(line=306,offs=2)))
            // I1VALDCL
            let jsxtnm1295
            let jsxtnm1294 // let
            { // let
              // I1Dimplmnt0(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4624(line=297,offs=1)--4749(line=305,offs=2)))
              // I1Dimplmnt0(DIMPLone2(iforitm$work1(1450);$list(@(x0[3793],T2Pvar(x0[7933]))))):timp
              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4588(line=294,offs=1)--4601(line=294,offs=14))
              // I0Etapq(I0Ecst(gseq_iforitm1(1761)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gseq001_vt.sats)@(10899(line=588,offs=1)--10912(line=588,offs=14))));$list(T2JAG($list(T2Pvar(xs[7932]))),T2JAG($list(T2Pvar(x0[7933])))))
              // T1IMPallx(gseq_iforitm1(1761);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(9997(line=678,offs=1)--10202(line=695,offs=2)))
              // T1IMPallx(gseq_iforitm1(1761)<$list(T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[8067],T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))),@(x0[8068],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq_iforitm1(1761);$list(@(xs[4405],T2Pvar(xs[8067])),@(x0[4406],T2Pvar(x0[8068])))))))
              let jsxtnm1292 = function (arg1) { // timp: gseq_iforitm1(1761)
                let jsxtnm1207 = arg1
                // I1CMP:start
                let jsxtnm1291 // let
                { // let
                  // I1Dimplmnt0(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(10113(line=690,offs=1)--10200(line=694,offs=38)))
                  // I1Dimplmnt0(DIMPLone2(iforall$test1(1434);$list(@(x0[3777],T2Pvar(x0[8068]))))):timp
                  let jsxtnm1290 // let
                  { // let
                    // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(10057(line=685,offs=1)--10093(line=687,offs=15)))
                    // I1VALDCL
                    let jsxtnm1289
                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(10065(line=686,offs=1)--10078(line=686,offs=14))
                    // I0Etapq(I0Ecst(gseq_iforall1(1737)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gseq001_vt.sats)@(6529(line=346,offs=1)--6542(line=346,offs=14))));$list(T2JAG($list(T2Pvar(xs[8067]))),T2JAG($list(T2Pvar(x0[8068])))))
                    // T1IMPallx(gseq_iforall1(1737);LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(9966(line=671,offs=1)--10042(line=675,offs=27)))
                    // T1IMPallx(gseq_iforall1(1737)<$list(T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(x0[8980],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),@(x0[8980],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq_iforall1(1737);$list(@(xs[4357],T2Papps(T2Pcst(jsa1);$list(T2Pvar(x0[8980])))),@(x0[4358],T2Pvar(x0[8980])))))))
                    let jsxtnm1287
                    // LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(10016(line=675,offs=1)--10028(line=675,offs=13))
                    // I0Etapq(I0Ecst(gasq_iforall(613)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gasq001.sats)@(2110(line=102,offs=1)--2122(line=102,offs=13))));$list(T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Pvar(x0[8980]))))),T2JAG($list(T2Pvar(x0[8980])))))
                    // T1IMPallx(gasq_iforall(613);LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(9667(line=647,offs=1)--9812(line=656,offs=28)))
                    // T1IMPallx(gasq_iforall(613)<$list(T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(x0[8978],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),@(x0[8978],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gasq_iforall(613);$list(@(xs[1916],T2Papps(T2Pcst(jsa1);$list(T2Pvar(x0[8978])))),@(x0[1917],T2Pvar(x0[8978])))))))
                    let jsxtnm1286 = function (arg1) { // timp: gasq_iforall(613)
                      let jsxtnm1213 = arg1
                      // I1CMP:start
                      // LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(9724(line=652,offs=1)--9743(line=652,offs=20))
                      // I0Etapq(I0Ecst(jsdasz_iforall$f2un(2724)(LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(4925(line=282,offs=1)--4944(line=282,offs=20))));$list(T2JAG($list())))
                      // T1IMPallx(jsdasz_iforall$f2un(2724);LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(10046(line=677,offs=1)--10260(line=693,offs=2)))
                      // T1IMPallx(jsdasz_iforall$f2un(2724)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(jsdasz_iforall$f2un(2724);$list()))))
                      let jsxtnm1220 = function (arg1, arg2) { // timp: jsdasz_iforall$f2un(2724)
                        let jsxtnm1214 = arg1
                        let jsxtnm1215 = arg2
                        // I1CMP:start
                        let jsxtnm1219 // let
                        { // let
                          // I1Dextern(LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(10150(line=685,offs=1)--10258(line=692,offs=40)))
                          // LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(10158(line=686,offs=1)--10258(line=692,offs=40))
                          // I1FUNDCL: XATS2JS_jsdasz_iforall$f2un(5353)
                          // XATS2JS_jsdasz_iforall$f2un_10161
                            // FJARGdarg($list(I1BNDcons(I1TNM(1216);I0Pvar(A(5354));$list(@(A(5354),I1Vtnm(I1TNM(1216))))),I1BNDcons(I1TNM(1217);I0Pvar(test(5355));$list(@(test(5355),I1Vtnm(I1TNM(1217)))))))
                            // I1CMP:start
                            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_jsdasz_iforall$f2un);G1Nlist($list()))// I1CMP:return
                          let jsxtnm1218 = XATSDAPP(XATS2JS_jsdasz_iforall$f2un(jsxtnm1214, jsxtnm1215))
                          jsxtnm1219 = jsxtnm1218
                        } // endlet
                        // I1CMP:return:I1Vtnm(I1TNM(1219))
                        return jsxtnm1219
                      } // endtimp(jsdasz_iforall$f2un(2724))
                      let jsxtnm1284 = function (arg1, arg2) { // lam0(T_LAM(0))
                        let jsxtnm1221 = arg1
                        let jsxtnm1222 = arg2
                        // I1CMP:start
                        // LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(9787(line=656,offs=3)--9800(line=656,offs=16))
                        // I0Etapq(I0Ecst(iforall$test1(1434)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas001_vt.sats)@(2611(line=148,offs=1)--2624(line=148,offs=14))));$list(T2JAG($list(T2Pvar(x0[8978])))))
                        // T1IMPallx(iforall$test1(1434);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(10113(line=690,offs=1)--10200(line=694,offs=38)))
                        // T1IMPallx(iforall$test1(1434)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[8067],T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))),@(x0[8068],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(iforall$test1(1434);$list(@(x0[3777],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))
                        let jsxtnm1282 = function (arg1, arg2) { // timp: iforall$test1(1434)
                          let jsxtnm1223 = arg1
                          let jsxtnm1224 = arg2
                          // I1CMP:start
                          let jsxtnm1281 // let
                          { // let
                            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(10154(line=693,offs=1)--10188(line=694,offs=26)))
                            // I1VALDCL
                            let jsxtnm1280
                            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(10163(line=694,offs=1)--10176(line=694,offs=14))
                            // I0Etapq(I0Ecst(iforitm$work1(1450)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas001_vt.sats)@(3334(line=206,offs=1)--3347(line=206,offs=14))));$list(T2JAG($list(T2Pvar(x0[8068])))))
                            // T1IMPallx(iforitm$work1(1450);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4624(line=297,offs=1)--4749(line=305,offs=2)))
                            // T1IMPallx(iforitm$work1(1450)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[7932],T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))),@(x0[7933],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(iforitm$work1(1450);$list(@(x0[3793],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))
                            let jsxtnm1278 = function (arg1, arg2) { // timp: iforitm$work1(1450)
                              let jsxtnm1225 = arg1
                              let jsxtnm1226 = arg2
                              // I1CMP:start
                              let jsxtnm1277 // let
                              { // let
                                // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4691(line=302,offs=1)--4747(line=304,offs=33)))
                                // I1VALDCL
                                let jsxtnm1242
                                // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4706(line=303,offs=7)--4707(line=303,offs=8))
                                // I0Etapq(I0Ecst(sint_gt$sint(928)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gint000.sats)@(2103(line=87,offs=1)--2115(line=87,offs=13))));$list(T2JAG($list())))
                                // T1IMPallx(sint_gt$sint(928);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1777(line=70,offs=1)--1938(line=82,offs=2)))
                                // T1IMPallx(sint_gt$sint(928)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_gt$sint(928);$list()))))
                                let jsxtnm1233 = function (arg1, arg2) { // timp: sint_gt$sint(928)
                                  let jsxtnm1227 = arg1
                                  let jsxtnm1228 = arg2
                                  // I1CMP:start
                                  let jsxtnm1232 // let
                                  { // let
                                    // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1865(line=78,offs=1)--1936(line=81,offs=39)))
                                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1873(line=79,offs=1)--1936(line=81,offs=39))
                                    // I1FUNDCL: XATS2JS_sint_gt$sint(4913)
                                    // XATS2JS_sint_gt$sint_1876
                                      // FJARGdarg($list(I1BNDcons(I1TNM(1229);I0Pvar(i1(4914));$list(@(i1(4914),I1Vtnm(I1TNM(1229))))),I1BNDcons(I1TNM(1230);I0Pvar(i2(4915));$list(@(i2(4915),I1Vtnm(I1TNM(1230)))))))
                                      // I1CMP:start
                                      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_gt$sint);G1Nlist($list()))// I1CMP:return
                                    let jsxtnm1231 = XATSDAPP(XATS2JS_sint_gt$sint(jsxtnm1227, jsxtnm1228))
                                    jsxtnm1232 = jsxtnm1231
                                  } // endlet
                                  // I1CMP:return:I1Vtnm(I1TNM(1232))
                                  return jsxtnm1232
                                } // endtimp(sint_gt$sint(928))
                                let jsxtnm1234 = XATSDAPP(jsxtnm1233(jsxtnm1225, XATSINT1(0)))
                                let jsxtnm1241 // ift
                                if (jsxtnm1234) // ift
                                {
                                  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4715(line=304,offs=1)--4725(line=304,offs=11))
                                  // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                                  // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                                  // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                                  let jsxtnm1237
                                  let jsxtnm1236 // let
                                  { // let
                                    // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                                    // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                                    // XATS2JS_NODE_strn_print_2214
                                      // FJARGdarg($list(I1BNDcons(I1TNM(1235);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1235)))))))
                                      // I1CMP:start
                                      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                                    jsxtnm1236 = XATS2JS_NODE_strn_print
                                  } // endlet
                                  jsxtnm1237 = jsxtnm1236
                                  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4728(line=304,offs=14)--4736(line=304,offs=22))
                                  // I0Etapq(I0Ecst(gseq$sep(348)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gseq000.sats)@(2474(line=138,offs=1)--2482(line=138,offs=9))));$list(T2JAG($list(T2Pvar(xs[7932]))),T2JAG($list(T2Pvar(x0[7933])))))
                                  // T1IMPallx(gseq$sep(348);LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2355(line=98,offs=1)--2388(line=99,offs=25)))
                                  // T1IMPallx(gseq$sep(348)<$list(T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(a[8926],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq$sep(348);$list(@(xs[1071],T2Papps(T2Pcst(jsa1);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))),@(x0[1072],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))
                                  let jsxtnm1238 = function () { // timp: gseq$sep(348)
                                    // I1CMP:start
                                    // I1CMP:return:I1Vstr(...)
                                    return XATSSTRN(",")
                                  } // endtimp(gseq$sep(348))
                                  let jsxtnm1239 = XATSDAPP(jsxtnm1238())
                                  let jsxtnm1240 = XATSDAPP(jsxtnm1237(jsxtnm1239))
                                  jsxtnm1241 = jsxtnm1240
                                } else {
                                } // end(if)
                                jsxtnm1242 = jsxtnm1241
                                XATS000_patck(true)
                                // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4665(line=300,offs=3)--4673(line=300,offs=11))
                                // I0Etapq(I0Ecst(g_print1(1413)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas000_vt.sats)@(2117(line=109,offs=1)--2125(line=109,offs=9))));$list(T2JAG($list(T2Pvar(x0[7933])))))
                                // T1IMPallx(g_print1(1413);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1635(line=59,offs=1)--1680(line=61,offs=27)))
                                // T1IMPallx(g_print1(1413)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(x0[8832],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(g_print1(1413);$list(@(x0[3751],T2Pvar(x0[8832])))))))
                                let jsxtnm1275
                                // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1669(line=61,offs=16)--1676(line=61,offs=23))
                                // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x0[8832])))))
                                // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(2567(line=116,offs=1)--2780(line=135,offs=4)))
                                // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(a0[7367],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(a1[7368],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Papps(T2Pcst(t0up);$list(T2Pvar(a0[7367]),T2Pvar(a1[7368])))))))))
                                let jsxtnm1274 = function (arg1) { // timp: g_print(39)
                                  let jsxtnm1243 = arg1
                                  // I1CMP:start
                                  let jsxtnm1273 // let
                                  { // let
                                    // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(2635(line=124,offs=1)--2662(line=125,offs=19)))
                                    // I1VALDCL
                                    let jsxtnm1248
                                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(2646(line=125,offs=3)--2656(line=125,offs=13))
                                    // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                                    // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                                    // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                                    let jsxtnm1246
                                    let jsxtnm1245 // let
                                    { // let
                                      // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                                      // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                                      // XATS2JS_NODE_strn_print_2214
                                        // FJARGdarg($list(I1BNDcons(I1TNM(1244);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1244)))))))
                                        // I1CMP:start
                                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                                      jsxtnm1245 = XATS2JS_NODE_strn_print
                                    } // endlet
                                    jsxtnm1246 = jsxtnm1245
                                    let jsxtnm1247 = XATSDAPP(jsxtnm1246(XATSSTRN("@(")))
                                    jsxtnm1248 = jsxtnm1247
                                    XATS000_patck(true)
                                    // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(2663(line=126,offs=1)--2692(line=127,offs=21)))
                                    // I1VALDCL
                                    let jsxtnm1255
                                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(2674(line=127,offs=3)--2681(line=127,offs=10))
                                    // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(a0[7367])))))
                                    // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                                    // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(strn)))))))
                                    let jsxtnm1252
                                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                                    // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                                    // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                                    // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                                    let jsxtnm1251
                                    let jsxtnm1250 // let
                                    { // let
                                      // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                                      // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                                      // XATS2JS_NODE_strn_print_2214
                                        // FJARGdarg($list(I1BNDcons(I1TNM(1249);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1249)))))))
                                        // I1CMP:start
                                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                                      jsxtnm1250 = XATS2JS_NODE_strn_print
                                    } // endlet
                                    jsxtnm1251 = jsxtnm1250
                                    jsxtnm1252 = jsxtnm1251
                                    let jsxtnm1253 = XATSPFLT(jsxtnm1243[0])
                                    let jsxtnm1254 = XATSDAPP(jsxtnm1252(jsxtnm1253))
                                    jsxtnm1255 = jsxtnm1254
                                    XATS000_patck(true)
                                    // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(2696(line=129,offs=1)--2715(line=129,offs=20)))
                                    // I1VALDCL
                                    let jsxtnm1260
                                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(2705(line=129,offs=10)--2710(line=129,offs=15))
                                    // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                                    // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                                    // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                                    let jsxtnm1258
                                    let jsxtnm1257 // let
                                    { // let
                                      // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                                      // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                                      // XATS2JS_NODE_strn_print_2214
                                        // FJARGdarg($list(I1BNDcons(I1TNM(1256);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1256)))))))
                                        // I1CMP:start
                                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                                      jsxtnm1257 = XATS2JS_NODE_strn_print
                                    } // endlet
                                    jsxtnm1258 = jsxtnm1257
                                    let jsxtnm1259 = XATSDAPP(jsxtnm1258(XATSSTRN(",")))
                                    jsxtnm1260 = jsxtnm1259
                                    XATS000_patck(true)
                                    // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(2716(line=130,offs=1)--2745(line=131,offs=21)))
                                    // I1VALDCL
                                    let jsxtnm1267
                                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(2727(line=131,offs=3)--2734(line=131,offs=10))
                                    // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(a1[7368])))))
                                    // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gint000.dats)@(2286(line=96,offs=1)--2321(line=97,offs=27)))
                                    // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(si)))))))
                                    let jsxtnm1264
                                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gint000.dats)@(2309(line=97,offs=15)--2319(line=97,offs=25))
                                    // I0Etapq(I0Ecst(sint_print(922)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gint000.sats)@(1506(line=49,offs=1)--1516(line=49,offs=11))));$list(T2JAG($list())))
                                    // T1IMPallx(sint_print(922);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(1430(line=40,offs=1)--1551(line=48,offs=2)))
                                    // T1IMPallx(sint_print(922)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_print(922);$list()))))
                                    let jsxtnm1263
                                    let jsxtnm1262 // let
                                    { // let
                                      // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(1486(line=45,offs=1)--1549(line=47,offs=52)))
                                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(1494(line=46,offs=1)--1549(line=47,offs=52))
                                      // I1FUNDCL: XATS2JS_NODE_sint_print(5220)
                                      // XATS2JS_NODE_sint_print_1497
                                        // FJARGdarg($list(I1BNDcons(I1TNM(1261);I0Pvar(i0(5221));$list(@(i0(5221),I1Vtnm(I1TNM(1261)))))))
                                        // I1CMP:start
                                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_sint_print);G1Nlist($list()))// I1CMP:return
                                      jsxtnm1262 = XATS2JS_NODE_sint_print
                                    } // endlet
                                    jsxtnm1263 = jsxtnm1262
                                    jsxtnm1264 = jsxtnm1263
                                    let jsxtnm1265 = XATSPFLT(jsxtnm1243[1])
                                    let jsxtnm1266 = XATSDAPP(jsxtnm1264(jsxtnm1265))
                                    jsxtnm1267 = jsxtnm1266
                                    XATS000_patck(true)
                                    // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(2749(line=133,offs=1)--2773(line=133,offs=25)))
                                    // I1VALDCL
                                    let jsxtnm1272
                                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(2758(line=133,offs=10)--2768(line=133,offs=20))
                                    // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                                    // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                                    // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                                    let jsxtnm1270
                                    let jsxtnm1269 // let
                                    { // let
                                      // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                                      // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                                      // XATS2JS_NODE_strn_print_2214
                                        // FJARGdarg($list(I1BNDcons(I1TNM(1268);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1268)))))))
                                        // I1CMP:start
                                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                                      jsxtnm1269 = XATS2JS_NODE_strn_print
                                    } // endlet
                                    jsxtnm1270 = jsxtnm1269
                                    let jsxtnm1271 = XATSDAPP(jsxtnm1270(XATSSTRN(")")))
                                    jsxtnm1272 = jsxtnm1271
                                    XATS000_patck(true)
                                    jsxtnm1273 = XATSVOID
                                  } // endlet
                                  // I1CMP:return:I1Vtnm(I1TNM(1273))
                                  return jsxtnm1273
                                } // endtimp(g_print(39))
                                jsxtnm1275 = jsxtnm1274
                                let jsxtnm1276 = XATSDAPP(jsxtnm1275(jsxtnm1226))
                                jsxtnm1277 = jsxtnm1276
                              } // endlet
                              // I1CMP:return:I1Vtnm(I1TNM(1277))
                              return jsxtnm1277
                            } // endtimp(iforitm$work1(1450))
                            let jsxtnm1279 = XATSDAPP(jsxtnm1278(jsxtnm1223, jsxtnm1224))
                            jsxtnm1280 = jsxtnm1279
                            XATS000_patck(true)
                            jsxtnm1281 = XATSBOOL(true)
                          } // endlet
                          // I1CMP:return:I1Vtnm(I1TNM(1281))
                          return jsxtnm1281
                        } // endtimp(iforall$test1(1434))
                        let jsxtnm1283 = XATSDAPP(jsxtnm1282(jsxtnm1221, jsxtnm1222))
                        // I1CMP:return:I1Vtnm(I1TNM(1283))
                        return jsxtnm1283
                      } // endfun(lam0)
                      let jsxtnm1285 = XATSDAPP(jsxtnm1220(jsxtnm1213, jsxtnm1284))
                      // I1CMP:return:I1Vtnm(I1TNM(1285))
                      return jsxtnm1285
                    } // endtimp(gasq_iforall(613))
                    jsxtnm1287 = jsxtnm1286
                    let jsxtnm1288 = XATSDAPP(jsxtnm1287(jsxtnm1207))
                    jsxtnm1289 = jsxtnm1288
                    XATS000_patck(true)
                    jsxtnm1290 = XATSVOID
                  } // endlet
                  jsxtnm1291 = jsxtnm1290
                } // endlet
                // I1CMP:return:I1Vtnm(I1TNM(1291))
                return jsxtnm1291
              } // endtimp(gseq_iforitm1(1761))
              let jsxtnm1293 = XATSDAPP(jsxtnm1292(jsxtnm1190))
              jsxtnm1294 = jsxtnm1293
            } // endlet
            jsxtnm1295 = jsxtnm1294
            XATS000_patck(true)
            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4752(line=307,offs=1)--4793(line=308,offs=33)))
            // I1VALDCL
            let jsxtnm1302
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4761(line=308,offs=1)--4771(line=308,offs=11))
            // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
            // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
            // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
            let jsxtnm1298
            let jsxtnm1297 // let
            { // let
              // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
              // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
              // XATS2JS_NODE_strn_print_2214
                // FJARGdarg($list(I1BNDcons(I1TNM(1296);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1296)))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
              jsxtnm1297 = XATS2JS_NODE_strn_print
            } // endlet
            jsxtnm1298 = jsxtnm1297
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4774(line=308,offs=14)--4782(line=308,offs=22))
            // I0Etapq(I0Ecst(gseq$end(347)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gseq000.sats)@(2432(line=134,offs=1)--2440(line=134,offs=9))));$list(T2JAG($list(T2Pvar(xs[7932]))),T2JAG($list(T2Pvar(x0[7933])))))
            // T1IMPallx(gseq$end(347);LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2389(line=100,offs=1)--2422(line=101,offs=25)))
            // T1IMPallx(gseq$end(347)<$list(T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(a[8926],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq$end(347);$list(@(xs[1069],T2Papps(T2Pcst(jsa1);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))),@(x0[1070],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))
            let jsxtnm1299 = function () { // timp: gseq$end(347)
              // I1CMP:start
              // I1CMP:return:I1Vstr(...)
              return XATSSTRN(")")
            } // endtimp(gseq$end(347))
            let jsxtnm1300 = XATSDAPP(jsxtnm1299())
            let jsxtnm1301 = XATSDAPP(jsxtnm1298(jsxtnm1300))
            jsxtnm1302 = jsxtnm1301
            XATS000_patck(true)
            jsxtnm1303 = XATSVOID
          } // endlet
          // I1CMP:return:I1Vtnm(I1TNM(1303))
          return jsxtnm1303
        } // endtimp(gseq_print1(1688))
        let jsxtnm1305 = XATSDAPP(jsxtnm1304(jsxtnm1189))
        jsxtnm1306 = jsxtnm1305
      } // endlet
      // I1CMP:return:I1Vtnm(I1TNM(1306))
      return jsxtnm1306
    } // endtimp(g_print(39))
    let jsxtnm1308 = XATSDAPP(jsxtnm1307(jsxtnm1115))
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22141(line=1366,offs=20)--22153(line=1366,offs=32))
    // I0Etapq(I0Ecst(gs_print$sep(803)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
    // T1IMPallx(gs_print$sep(803);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(20753(line=1271,offs=1)--20791(line=1273,offs=20)))
    // T1IMPallx(gs_print$sep(803)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(803);$list()))))
    let jsxtnm1310 = function () { // timp: gs_print$sep(803)
      // I1CMP:start
      let jsxtnm1309 = XATSTUP0([])
      // I1CMP:return:I1Vtnm(I1TNM(1309))
      return jsxtnm1309
    } // endtimp(gs_print$sep(803))
    let jsxtnm1311 = XATSDAPP(jsxtnm1310())
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22158(line=1367,offs=3)--22165(line=1367,offs=10))
    // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x4[7036])))))
    // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
    // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(strn)))))))
    let jsxtnm1315
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
    // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
    // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
    // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
    let jsxtnm1314
    let jsxtnm1313 // let
    { // let
      // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
      // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
      // XATS2JS_NODE_strn_print_2214
        // FJARGdarg($list(I1BNDcons(I1TNM(1312);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1312)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
      jsxtnm1313 = XATS2JS_NODE_strn_print
    } // endlet
    jsxtnm1314 = jsxtnm1313
    jsxtnm1315 = jsxtnm1314
    let jsxtnm1316 = XATSDAPP(jsxtnm1315(jsxtnm1116))
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22175(line=1367,offs=20)--22187(line=1367,offs=32))
    // I0Etapq(I0Ecst(gs_print$end(804)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
    // T1IMPallx(gs_print$end(804);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(20792(line=1274,offs=1)--20830(line=1276,offs=20)))
    // T1IMPallx(gs_print$end(804)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(804);$list()))))
    let jsxtnm1318 = function () { // timp: gs_print$end(804)
      // I1CMP:start
      let jsxtnm1317 = XATSTUP0([])
      // I1CMP:return:I1Vtnm(I1TNM(1317))
      return jsxtnm1317
    } // endtimp(gs_print$end(804))
    let jsxtnm1319 = XATSDAPP(jsxtnm1318())
    jsxtnm1320 = jsxtnm1319
  } // endlet
  // I1CMP:return:I1Vtnm(I1TNM(1320))
  return jsxtnm1320
} // endtimp(gs_print_a5(810))
// LCSRCsome1(test02_jshmap0.dats)@(993(line=56,offs=11)--997(line=56,offs=15))
// I0Etapq(I0Ecst(g_type(196)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(1861(line=63,offs=1)--1867(line=63,offs=7))));$list(T2JAG($list())))
// T1IMPallx(g_type(196);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(1498(line=45,offs=1)--1558(line=49,offs=22)))
// T1IMPallx(g_type(196)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_type(196);$list()))))
let jsxtnm1325 = function (arg1) { // timp: g_type(196)
  let jsxtnm1322 = arg1
  // I1CMP:start
  let jsxtnm1323 = XATSCAPP("unit", [0])
  let jsxtnm1324 = XATSCAST("castxy_1839", [jsxtnm1323])
  // I1CMP:return:I1Vtnm(I1TNM(1324))
  return jsxtnm1324
} // endtimp(g_type(196))
let jsxtnm1326 = XATSDAPP(jsxtnm1325(jsxtnm1111))
let jsxtnm1327 = XATSDAPP(jsxtnm1321(XATSSTRN("arr1("), jsxtnm1326, XATSSTRN(") = "), jsxtnm1111, XATSSTRN("\n")))
jsxtnm1328 = jsxtnm1327
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(test02_jshmap0.dats)@(1028(line=58,offs=1)--1181(line=68,offs=4)))
// I1VALDCL
let jsxtnm1358
let jsxtnm1357 // let
{ // let
  // LCSRCsome1(test02_jshmap0.dats)@(1043(line=60,offs=1)--1068(line=61,offs=13))
  // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(a;S2Etrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);S2Ecst(S2Tbas(T2Bimpr(0;type));strn)),S2LAB(LABint(1);S2Ecst(S2Tbas(T2Bimpr(0;type));sint))))))))
  // LCSRCsome1(test02_jshmap0.dats)@(1077(line=63,offs=1)--1084(line=63,offs=8))
  // I0Etapq(I0Ecst(jsdasz_sortref$f2un(2728)(LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(5482(line=323,offs=1)--5501(line=323,offs=20))));$list(T2JAG($list())))
  // T1IMPallx(jsdasz_sortref$f2un(2728);LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(11137(line=763,offs=1)--11349(line=779,offs=2)))
  // T1IMPallx(jsdasz_sortref$f2un(2728)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(jsdasz_sortref$f2un(2728);$list()))))
  let jsxtnm1335 = function (arg1, arg2) { // timp: jsdasz_sortref$f2un(2728)
    let jsxtnm1329 = arg1
    let jsxtnm1330 = arg2
    // I1CMP:start
    let jsxtnm1334 // let
    { // let
      // I1Dextern(LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(11241(line=771,offs=1)--11347(line=778,offs=38)))
      // LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(11249(line=772,offs=1)--11347(line=778,offs=38))
      // I1FUNDCL: XATS2JS_jsdasz_sortref$f2un(5371)
      // XATS2JS_jsdasz_sortref$f2un_11252
        // FJARGdarg($list(I1BNDcons(I1TNM(1331);I0Pvar(A(5372));$list(@(A(5372),I1Vtnm(I1TNM(1331))))),I1BNDcons(I1TNM(1332);I0Pvar(cmpr(5373));$list(@(cmpr(5373),I1Vtnm(I1TNM(1332)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_jsdasz_sortref$f2un);G1Nlist($list()))// I1CMP:return
      let jsxtnm1333 = XATSDAPP(XATS2JS_jsdasz_sortref$f2un(jsxtnm1329, jsxtnm1330))
      jsxtnm1334 = jsxtnm1333
    } // endlet
    // I1CMP:return:I1Vtnm(I1TNM(1334))
    return jsxtnm1334
  } // endtimp(jsdasz_sortref$f2un(2728))
  let jsxtnm1355 = function (arg1, arg2) { // lam0(T_LAM(0))
    let jsxtnm1336 = arg1
    let jsxtnm1337 = arg2
    // I1CMP:start
    let jsxtnm1354 // let
    { // let
      // I1Dvaldclist(LCSRCsome1(test02_jshmap0.dats)@(1118(line=66,offs=3)--1155(line=67,offs=20)))
      // I1VALDCL
      let jsxtnm1338
      jsxtnm1338 = jsxtnm1336
      XATS000_patck(true)
      // I1VALDCL
      let jsxtnm1339
      jsxtnm1339 = jsxtnm1337
      XATS000_patck(true)
      // LCSRCsome1(test02_jshmap0.dats)@(1159(line=67,offs=24)--1160(line=67,offs=25))
      // I0Etapq(I0Ecst(sint_neg(923)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gint000.sats)@(1585(line=55,offs=1)--1593(line=55,offs=9))));$list(T2JAG($list())))
      // T1IMPallx(sint_neg(923);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1430(line=40,offs=1)--1565(line=51,offs=31)))
      // T1IMPallx(sint_neg(923)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_neg(923);$list()))))
      let jsxtnm1344 = function (arg1) { // timp: sint_neg(923)
        let jsxtnm1340 = arg1
        // I1CMP:start
        let jsxtnm1343 // let
        { // let
          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1506(line=48,offs=1)--1563(line=51,offs=29)))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1514(line=49,offs=1)--1563(line=51,offs=29))
          // I1FUNDCL: XATS2JS_sint_neg(4904)
          // XATS2JS_sint_neg_1517
            // FJARGdarg($list(I1BNDcons(I1TNM(1341);I0Pvar(i1(4905));$list(@(i1(4905),I1Vtnm(I1TNM(1341)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_neg);G1Nlist($list()))// I1CMP:return
          let jsxtnm1342 = XATSDAPP(XATS2JS_sint_neg(jsxtnm1340))
          jsxtnm1343 = jsxtnm1342
        } // endlet
        // I1CMP:return:I1Vtnm(I1TNM(1343))
        return jsxtnm1343
      } // endtimp(sint_neg(923))
      // LCSRCsome1(test02_jshmap0.dats)@(1164(line=67,offs=29)--1167(line=67,offs=32))
      // I0Etapq(I0Ecst(strn_cmp(1039)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2269(line=99,offs=1)--2277(line=99,offs=9))));$list(T2JAG($list())))
      // T1IMPallx(strn_cmp(1039);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/strn000.dats)@(1859(line=79,offs=1)--2008(line=91,offs=2)))
      // T1IMPallx(strn_cmp(1039)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_cmp(1039);$list()))))
      let jsxtnm1351 = function (arg1, arg2) { // timp: strn_cmp(1039)
        let jsxtnm1345 = arg1
        let jsxtnm1346 = arg2
        // I1CMP:start
        let jsxtnm1350 // let
        { // let
          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/strn000.dats)@(1939(line=87,offs=1)--2006(line=90,offs=39)))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/strn000.dats)@(1947(line=88,offs=1)--2006(line=90,offs=39))
          // I1FUNDCL: XATS2JS_strn_cmp(5094)
          // XATS2JS_strn_cmp_1950
            // FJARGdarg($list(I1BNDcons(I1TNM(1347);I0Pvar(x1(5095));$list(@(x1(5095),I1Vtnm(I1TNM(1347))))),I1BNDcons(I1TNM(1348);I0Pvar(x2(5096));$list(@(x2(5096),I1Vtnm(I1TNM(1348)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_strn_cmp);G1Nlist($list()))// I1CMP:return
          let jsxtnm1349 = XATSDAPP(XATS2JS_strn_cmp(jsxtnm1345, jsxtnm1346))
          jsxtnm1350 = jsxtnm1349
        } // endlet
        // I1CMP:return:I1Vtnm(I1TNM(1350))
        return jsxtnm1350
      } // endtimp(strn_cmp(1039))
      let jsxtnm1352 = XATSDAPP(jsxtnm1351(XATSP0RJ(jsxtnm1338[0]), XATSP0RJ(jsxtnm1339[0])))
      let jsxtnm1353 = XATSDAPP(jsxtnm1344(jsxtnm1352))
      jsxtnm1354 = jsxtnm1353
    } // endlet
    // I1CMP:return:I1Vtnm(I1TNM(1354))
    return jsxtnm1354
  } // endfun(lam0)
  let jsxtnm1356 = XATSDAPP(jsxtnm1335(jsxtnm1111, jsxtnm1355))
  jsxtnm1357 = jsxtnm1356
} // endlet
jsxtnm1358 = jsxtnm1357
XATS000_patck(true)
// I1Dvaldclist(LCSRCsome1(test02_jshmap0.dats)@(1185(line=70,offs=1)--1244(line=71,offs=42)))
// I1VALDCL
let jsxtnm1575
// LCSRCsome1(test02_jshmap0.dats)@(1196(line=70,offs=12)--1202(line=70,offs=18))
// I0Etapq(I0Ecst(gs_print_a5(810)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gsyn000.sats)@(12006(line=769,offs=1)--12017(line=769,offs=12))));$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(type_vw_t0);$list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))))))
// T1IMPallx(gs_print_a5(810);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(21886(line=1350,offs=1)--22194(line=1368,offs=4)))
// T1IMPallx(gs_print_a5(810)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(type_vw_t0);$list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))),T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))),T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list(@(x0[7032],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x1[7033],T2Papps(T2Pcst(type_vw_t0);$list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))),@(x2[7034],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(x3[7035],T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))),@(x4[7036],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))));I1Dimplmnt0(DIMPLone2(gs_print_a5(810);$list(@(x0[2496],T2Pvar(x0[7032])),@(x1[2497],T2Pvar(x1[7033])),@(x2[2498],T2Pvar(x2[7034])),@(x3[2499],T2Pvar(x3[7035])),@(x4[2500],T2Pvar(x4[7036])))))))
let jsxtnm1568 = function (arg1, arg2, arg3, arg4, arg5) { // timp: gs_print_a5(810)
  let jsxtnm1359 = arg1
  let jsxtnm1360 = arg2
  let jsxtnm1361 = arg3
  let jsxtnm1362 = arg4
  let jsxtnm1363 = arg5
  // I1CMP:start
  let jsxtnm1567 // let
  { // let
    // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(21986(line=1360,offs=1)--22009(line=1361,offs=15)))
    // I1VALDCL
    let jsxtnm1367
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(21995(line=1361,offs=1)--22007(line=1361,offs=13))
    // I0Etapq(I0Ecst(gs_print$beg(802)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gsyn000.sats)@(11602(line=730,offs=1)--11614(line=730,offs=13))));$list(T2JAG($list())))
    // T1IMPallx(gs_print$beg(802);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(20714(line=1268,offs=1)--20752(line=1270,offs=20)))
    // T1IMPallx(gs_print$beg(802)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$beg(802);$list()))))
    let jsxtnm1365 = function () { // timp: gs_print$beg(802)
      // I1CMP:start
      let jsxtnm1364 = XATSTUP0([])
      // I1CMP:return:I1Vtnm(I1TNM(1364))
      return jsxtnm1364
    } // endtimp(gs_print$beg(802))
    let jsxtnm1366 = XATSDAPP(jsxtnm1365())
    jsxtnm1367 = jsxtnm1366
    XATS000_patck(true)
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22022(line=1363,offs=3)--22029(line=1363,offs=10))
    // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x0[7032])))))
    // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
    // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(strn)))))))
    let jsxtnm1371
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
    // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
    // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
    // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
    let jsxtnm1370
    let jsxtnm1369 // let
    { // let
      // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
      // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
      // XATS2JS_NODE_strn_print_2214
        // FJARGdarg($list(I1BNDcons(I1TNM(1368);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1368)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
      jsxtnm1369 = XATS2JS_NODE_strn_print
    } // endlet
    jsxtnm1370 = jsxtnm1369
    jsxtnm1371 = jsxtnm1370
    let jsxtnm1372 = XATSDAPP(jsxtnm1371(jsxtnm1359))
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22039(line=1363,offs=20)--22051(line=1363,offs=32))
    // I0Etapq(I0Ecst(gs_print$sep(803)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
    // T1IMPallx(gs_print$sep(803);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(20753(line=1271,offs=1)--20791(line=1273,offs=20)))
    // T1IMPallx(gs_print$sep(803)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(803);$list()))))
    let jsxtnm1374 = function () { // timp: gs_print$sep(803)
      // I1CMP:start
      let jsxtnm1373 = XATSTUP0([])
      // I1CMP:return:I1Vtnm(I1TNM(1373))
      return jsxtnm1373
    } // endtimp(gs_print$sep(803))
    let jsxtnm1375 = XATSDAPP(jsxtnm1374())
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22056(line=1364,offs=3)--22063(line=1364,offs=10))
    // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x1[7033])))))
    // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(4710(line=318,offs=1)--4814(line=324,offs=32)))
    // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(type_vw_t0);$list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))))>;I1Dtmpsub($list(@(vw[5785],T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))));I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Papps(T2Pcst(type);$list(T2Pvar(vw[5785])))))))))
    let jsxtnm1423 = function (arg1) { // timp: g_print(39)
      let jsxtnm1376 = arg1
      // I1CMP:start
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(4760(line=323,offs=1)--4767(line=323,offs=8))
      // I0Etapq(I0Ecst(g_ptype(202)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(2386(line=100,offs=1)--2393(line=100,offs=8))));$list(T2JAG($list(T2Pvar(vw[5785])))))
      // T1IMPallx(g_ptype(202);LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2080(line=74,offs=1)--2173(line=82,offs=23)))
      // T1IMPallx(g_ptype(202)<$list(T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))>;I1Dtmpsub($list(@(a[8925],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(g_ptype(202);$list(@(vw[773],T2Papps(T2Pcst(jsa1);$list(T2Pvar(a[8925])))))))))
      let jsxtnm1411 = function () { // timp: g_ptype(202)
        // I1CMP:start
        // LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2134(line=80,offs=1)--2139(line=80,offs=6))
        // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
        // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
        // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
        let jsxtnm1379
        let jsxtnm1378 // let
        { // let
          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
          // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
          // XATS2JS_NODE_strn_print_2214
            // FJARGdarg($list(I1BNDcons(I1TNM(1377);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1377)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
          jsxtnm1378 = XATS2JS_NODE_strn_print
        } // endlet
        jsxtnm1379 = jsxtnm1378
        let jsxtnm1380 = XATSDAPP(jsxtnm1379(XATSSTRN("jsdasz(")))
        // LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2151(line=82,offs=1)--2158(line=82,offs=8))
        // I0Etapq(I0Ecst(g_ptype(202)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(2386(line=100,offs=1)--2393(line=100,offs=8))));$list(T2JAG($list(T2Pvar(a[8925])))))
        // T1IMPallx(g_ptype(202);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(1835(line=66,offs=1)--1973(line=74,offs=29)))
        // T1IMPallx(g_ptype(202)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(a0[7357],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(a1[7358],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_ptype(202);$list(@(vw[773],T2Papps(T2Pcst(t0up);$list(T2Pvar(a0[7357]),T2Pvar(a1[7358])))))))))
        let jsxtnm1405 = function () { // timp: g_ptype(202)
          // I1CMP:start
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(1903(line=72,offs=3)--1908(line=72,offs=8))
          // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
          // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
          // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
          let jsxtnm1383
          let jsxtnm1382 // let
          { // let
            // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
            // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
            // XATS2JS_NODE_strn_print_2214
              // FJARGdarg($list(I1BNDcons(I1TNM(1381);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1381)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
            jsxtnm1382 = XATS2JS_NODE_strn_print
          } // endlet
          jsxtnm1383 = jsxtnm1382
          let jsxtnm1384 = XATSDAPP(jsxtnm1383(XATSSTRN("t0up2(")))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(1919(line=73,offs=3)--1926(line=73,offs=10))
          // I0Etapq(I0Ecst(g_ptype(202)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(2386(line=100,offs=1)--2393(line=100,offs=8))));$list(T2JAG($list(T2Pvar(a0[7357])))))
          // T1IMPallx(g_ptype(202);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(2934(line=164,offs=1)--2988(line=167,offs=29)))
          // T1IMPallx(g_ptype(202)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_ptype(202);$list(@(vw[773],T2Pcst(strn)))))))
          let jsxtnm1389 = function () { // timp: g_ptype(202)
            // I1CMP:start
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(2975(line=167,offs=16)--2980(line=167,offs=21))
            // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
            // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
            // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
            let jsxtnm1387
            let jsxtnm1386 // let
            { // let
              // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
              // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
              // XATS2JS_NODE_strn_print_2214
                // FJARGdarg($list(I1BNDcons(I1TNM(1385);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1385)))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
              jsxtnm1386 = XATS2JS_NODE_strn_print
            } // endlet
            jsxtnm1387 = jsxtnm1386
            let jsxtnm1388 = XATSDAPP(jsxtnm1387(XATSSTRN("strn")))
            // I1CMP:return:I1Vtnm(I1TNM(1388))
            return jsxtnm1388
          } // endtimp(g_ptype(202))
          let jsxtnm1390 = XATSDAPP(jsxtnm1389())
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(1934(line=73,offs=18)--1939(line=73,offs=23))
          // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
          // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
          // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
          let jsxtnm1393
          let jsxtnm1392 // let
          { // let
            // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
            // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
            // XATS2JS_NODE_strn_print_2214
              // FJARGdarg($list(I1BNDcons(I1TNM(1391);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1391)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
            jsxtnm1392 = XATS2JS_NODE_strn_print
          } // endlet
          jsxtnm1393 = jsxtnm1392
          let jsxtnm1394 = XATSDAPP(jsxtnm1393(XATSSTRN(",")))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(1947(line=74,offs=3)--1954(line=74,offs=10))
          // I0Etapq(I0Ecst(g_ptype(202)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(2386(line=100,offs=1)--2393(line=100,offs=8))));$list(T2JAG($list(T2Pvar(a1[7358])))))
          // T1IMPallx(g_ptype(202);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(2708(line=146,offs=1)--2762(line=149,offs=29)))
          // T1IMPallx(g_ptype(202)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_ptype(202);$list(@(vw[773],T2Pcst(sint)))))))
          let jsxtnm1399 = function () { // timp: g_ptype(202)
            // I1CMP:start
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(2749(line=149,offs=16)--2754(line=149,offs=21))
            // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
            // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
            // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
            let jsxtnm1397
            let jsxtnm1396 // let
            { // let
              // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
              // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
              // XATS2JS_NODE_strn_print_2214
                // FJARGdarg($list(I1BNDcons(I1TNM(1395);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1395)))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
              jsxtnm1396 = XATS2JS_NODE_strn_print
            } // endlet
            jsxtnm1397 = jsxtnm1396
            let jsxtnm1398 = XATSDAPP(jsxtnm1397(XATSSTRN("sint")))
            // I1CMP:return:I1Vtnm(I1TNM(1398))
            return jsxtnm1398
          } // endtimp(g_ptype(202))
          let jsxtnm1400 = XATSDAPP(jsxtnm1399())
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(1962(line=74,offs=18)--1967(line=74,offs=23))
          // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
          // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
          // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
          let jsxtnm1403
          let jsxtnm1402 // let
          { // let
            // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
            // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
            // XATS2JS_NODE_strn_print_2214
              // FJARGdarg($list(I1BNDcons(I1TNM(1401);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1401)))))))
              // I1CMP:start
              // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
            jsxtnm1402 = XATS2JS_NODE_strn_print
          } // endlet
          jsxtnm1403 = jsxtnm1402
          let jsxtnm1404 = XATSDAPP(jsxtnm1403(XATSSTRN(")")))
          // I1CMP:return:I1Vtnm(I1TNM(1404))
          return jsxtnm1404
        } // endtimp(g_ptype(202))
        let jsxtnm1406 = XATSDAPP(jsxtnm1405())
        // LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2164(line=82,offs=14)--2169(line=82,offs=19))
        // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
        // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
        // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
        let jsxtnm1409
        let jsxtnm1408 // let
        { // let
          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
          // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
          // XATS2JS_NODE_strn_print_2214
            // FJARGdarg($list(I1BNDcons(I1TNM(1407);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1407)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
          jsxtnm1408 = XATS2JS_NODE_strn_print
        } // endlet
        jsxtnm1409 = jsxtnm1408
        let jsxtnm1410 = XATSDAPP(jsxtnm1409(XATSSTRN(")")))
        // I1CMP:return:I1Vtnm(I1TNM(1410))
        return jsxtnm1410
      } // endtimp(g_ptype(202))
      let jsxtnm1412 = XATSDAPP(jsxtnm1411())
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(4783(line=324,offs=1)--4788(line=324,offs=6))
      // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
      // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
      // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
      let jsxtnm1415
      let jsxtnm1414 // let
      { // let
        // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
        // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
        // XATS2JS_NODE_strn_print_2214
          // FJARGdarg($list(I1BNDcons(I1TNM(1413);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1413)))))))
          // I1CMP:start
          // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
        jsxtnm1414 = XATS2JS_NODE_strn_print
      } // endlet
      jsxtnm1415 = jsxtnm1414
      let jsxtnm1416 = XATSDAPP(jsxtnm1415(XATSSTRN(":")))
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(4792(line=324,offs=10)--4799(line=324,offs=17))
      // I0Etapq(I0Ecst(g_psort(201)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(2346(line=97,offs=1)--2353(line=97,offs=8))));$list(T2JAG($list(T2Pvar(vw[5785])))))
      // T1IMPallx(g_psort(201);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(1831(line=74,offs=1)--1885(line=78,offs=22)))
      // T1IMPallx(g_psort(201)<$list(T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))>;I1Dtmpsub($list(@(tx[5760],T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))));I1Dimplmnt0(DIMPLone2(g_psort(201);$list(@(vw[772],T2Pvar(tx[5760])))))))
      let jsxtnm1421 = function () { // timp: g_psort(201)
        // I1CMP:start
        // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(1866(line=78,offs=3)--1876(line=78,offs=13))
        // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
        // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
        // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
        let jsxtnm1419
        let jsxtnm1418 // let
        { // let
          // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
          // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
          // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
          // XATS2JS_NODE_strn_print_2214
            // FJARGdarg($list(I1BNDcons(I1TNM(1417);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1417)))))))
            // I1CMP:start
            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
          jsxtnm1418 = XATS2JS_NODE_strn_print
        } // endlet
        jsxtnm1419 = jsxtnm1418
        let jsxtnm1420 = XATSDAPP(jsxtnm1419(XATSSTRN("tbox")))
        // I1CMP:return:I1Vtnm(I1TNM(1420))
        return jsxtnm1420
      } // endtimp(g_psort(201))
      let jsxtnm1422 = XATSDAPP(jsxtnm1421())
      // I1CMP:return:I1Vtnm(I1TNM(1422))
      return jsxtnm1422
    } // endtimp(g_print(39))
    let jsxtnm1424 = XATSDAPP(jsxtnm1423(jsxtnm1360))
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22073(line=1364,offs=20)--22085(line=1364,offs=32))
    // I0Etapq(I0Ecst(gs_print$sep(803)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
    // T1IMPallx(gs_print$sep(803);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(20753(line=1271,offs=1)--20791(line=1273,offs=20)))
    // T1IMPallx(gs_print$sep(803)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(803);$list()))))
    let jsxtnm1426 = function () { // timp: gs_print$sep(803)
      // I1CMP:start
      let jsxtnm1425 = XATSTUP0([])
      // I1CMP:return:I1Vtnm(I1TNM(1425))
      return jsxtnm1425
    } // endtimp(gs_print$sep(803))
    let jsxtnm1427 = XATSDAPP(jsxtnm1426())
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22090(line=1365,offs=3)--22097(line=1365,offs=10))
    // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x2[7034])))))
    // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
    // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(strn)))))))
    let jsxtnm1431
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
    // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
    // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
    // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
    let jsxtnm1430
    let jsxtnm1429 // let
    { // let
      // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
      // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
      // XATS2JS_NODE_strn_print_2214
        // FJARGdarg($list(I1BNDcons(I1TNM(1428);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1428)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
      jsxtnm1429 = XATS2JS_NODE_strn_print
    } // endlet
    jsxtnm1430 = jsxtnm1429
    jsxtnm1431 = jsxtnm1430
    let jsxtnm1432 = XATSDAPP(jsxtnm1431(jsxtnm1361))
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22107(line=1365,offs=20)--22119(line=1365,offs=32))
    // I0Etapq(I0Ecst(gs_print$sep(803)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
    // T1IMPallx(gs_print$sep(803);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(20753(line=1271,offs=1)--20791(line=1273,offs=20)))
    // T1IMPallx(gs_print$sep(803)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(803);$list()))))
    let jsxtnm1434 = function () { // timp: gs_print$sep(803)
      // I1CMP:start
      let jsxtnm1433 = XATSTUP0([])
      // I1CMP:return:I1Vtnm(I1TNM(1433))
      return jsxtnm1433
    } // endtimp(gs_print$sep(803))
    let jsxtnm1435 = XATSDAPP(jsxtnm1434())
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22124(line=1366,offs=3)--22131(line=1366,offs=10))
    // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x3[7035])))))
    // T1IMPallx(g_print(39);LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2257(line=88,offs=1)--2510(line=107,offs=4)))
    // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))))>;I1Dtmpsub($list(@(a[8926],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Papps(T2Pcst(jsa1);$list(T2Pvar(a[8926])))))))))
    let jsxtnm1554 = function (arg1) { // timp: g_print(39)
      let jsxtnm1436 = arg1
      // I1CMP:start
      let jsxtnm1553 // let
      { // let
        // LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2312(line=95,offs=1)--2329(line=95,offs=18))
        // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(x0;S2Evar(S2Tbas(T2Bimpr(2;vwtp));a[8926])))))
        // LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2330(line=96,offs=1)--2351(line=96,offs=22))
        // I1Di0dcl(I0Dd3ecl(D3Cd2ecl(D2Csexpdef(xs;S2Eapps(S2Ecst(S2Tfun1($list(S2Tbas(T2Bimpr(2;vwtp)));S2Tbas(T2Bimpr(1;tbox)));jsa1);$list(S2Evar(S2Tbas(T2Bimpr(2;vwtp));a[8926])))))))
        // I1Dimplmnt0(LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2355(line=98,offs=1)--2388(line=99,offs=25)))
        // I1Dimplmnt0(DIMPLone2(gseq$sep(348);$list(@(xs[1071],T2Pcst(xs)),@(x0[1072],T2Pcst(x0))))):timp
        // I1Dimplmnt0(LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2389(line=100,offs=1)--2422(line=101,offs=25)))
        // I1Dimplmnt0(DIMPLone2(gseq$end(347);$list(@(xs[1069],T2Pcst(xs)),@(x0[1070],T2Pcst(x0))))):timp
        // I1Dimplmnt0(LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2423(line=102,offs=1)--2462(line=103,offs=31)))
        // I1Dimplmnt0(DIMPLone2(gseq$beg(346);$list(@(xs[1067],T2Pcst(xs)),@(x0[1068],T2Pcst(x0))))):timp
        // LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2475(line=106,offs=3)--2486(line=106,offs=14))
        // I0Etapq(I0Ecst(gseq_print1(1688)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gseq000_vt.sats)@(3999(line=245,offs=1)--4010(line=245,offs=12))));$list(T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Pvar(a[8926]))))),T2JAG($list(T2Pvar(a[8926])))))
        // T1IMPallx(gseq_print1(1688);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4483(line=284,offs=1)--4800(line=309,offs=7)))
        // T1IMPallx(gseq_print1(1688)<$list(T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[7932],T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))),@(x0[7933],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq_print1(1688);$list(@(xs[4222],T2Pvar(xs[7932])),@(x0[4223],T2Pvar(x0[7933])))))))
        let jsxtnm1551 = function (arg1) { // timp: gseq_print1(1688)
          let jsxtnm1437 = arg1
          // I1CMP:start
          let jsxtnm1550 // let
          { // let
            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4534(line=289,offs=1)--4576(line=291,offs=21)))
            // I1VALDCL
            let jsxtnm1444
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4543(line=290,offs=1)--4553(line=290,offs=11))
            // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
            // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
            // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
            let jsxtnm1440
            let jsxtnm1439 // let
            { // let
              // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
              // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
              // XATS2JS_NODE_strn_print_2214
                // FJARGdarg($list(I1BNDcons(I1TNM(1438);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1438)))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
              jsxtnm1439 = XATS2JS_NODE_strn_print
            } // endlet
            jsxtnm1440 = jsxtnm1439
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4557(line=291,offs=2)--4565(line=291,offs=10))
            // I0Etapq(I0Ecst(gseq$beg(346)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gseq000.sats)@(2390(line=130,offs=1)--2398(line=130,offs=9))));$list(T2JAG($list(T2Pvar(xs[7932]))),T2JAG($list(T2Pvar(x0[7933])))))
            // T1IMPallx(gseq$beg(346);LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2423(line=102,offs=1)--2462(line=103,offs=31)))
            // T1IMPallx(gseq$beg(346)<$list(T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(a[8926],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq$beg(346);$list(@(xs[1067],T2Papps(T2Pcst(jsa1);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))),@(x0[1068],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))
            let jsxtnm1441 = function () { // timp: gseq$beg(346)
              // I1CMP:start
              // I1CMP:return:I1Vstr(...)
              return XATSSTRN("jsdasz(")
            } // endtimp(gseq$beg(346))
            let jsxtnm1442 = XATSDAPP(jsxtnm1441())
            let jsxtnm1443 = XATSDAPP(jsxtnm1440(jsxtnm1442))
            jsxtnm1444 = jsxtnm1443
            XATS000_patck(true)
            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4577(line=292,offs=1)--4751(line=306,offs=2)))
            // I1VALDCL
            let jsxtnm1542
            let jsxtnm1541 // let
            { // let
              // I1Dimplmnt0(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4624(line=297,offs=1)--4749(line=305,offs=2)))
              // I1Dimplmnt0(DIMPLone2(iforitm$work1(1450);$list(@(x0[3793],T2Pvar(x0[7933]))))):timp
              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4588(line=294,offs=1)--4601(line=294,offs=14))
              // I0Etapq(I0Ecst(gseq_iforitm1(1761)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gseq001_vt.sats)@(10899(line=588,offs=1)--10912(line=588,offs=14))));$list(T2JAG($list(T2Pvar(xs[7932]))),T2JAG($list(T2Pvar(x0[7933])))))
              // T1IMPallx(gseq_iforitm1(1761);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(9997(line=678,offs=1)--10202(line=695,offs=2)))
              // T1IMPallx(gseq_iforitm1(1761)<$list(T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[8067],T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))),@(x0[8068],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq_iforitm1(1761);$list(@(xs[4405],T2Pvar(xs[8067])),@(x0[4406],T2Pvar(x0[8068])))))))
              let jsxtnm1539 = function (arg1) { // timp: gseq_iforitm1(1761)
                let jsxtnm1454 = arg1
                // I1CMP:start
                let jsxtnm1538 // let
                { // let
                  // I1Dimplmnt0(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(10113(line=690,offs=1)--10200(line=694,offs=38)))
                  // I1Dimplmnt0(DIMPLone2(iforall$test1(1434);$list(@(x0[3777],T2Pvar(x0[8068]))))):timp
                  let jsxtnm1537 // let
                  { // let
                    // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(10057(line=685,offs=1)--10093(line=687,offs=15)))
                    // I1VALDCL
                    let jsxtnm1536
                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(10065(line=686,offs=1)--10078(line=686,offs=14))
                    // I0Etapq(I0Ecst(gseq_iforall1(1737)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gseq001_vt.sats)@(6529(line=346,offs=1)--6542(line=346,offs=14))));$list(T2JAG($list(T2Pvar(xs[8067]))),T2JAG($list(T2Pvar(x0[8068])))))
                    // T1IMPallx(gseq_iforall1(1737);LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(9966(line=671,offs=1)--10042(line=675,offs=27)))
                    // T1IMPallx(gseq_iforall1(1737)<$list(T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(x0[8980],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),@(x0[8980],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq_iforall1(1737);$list(@(xs[4357],T2Papps(T2Pcst(jsa1);$list(T2Pvar(x0[8980])))),@(x0[4358],T2Pvar(x0[8980])))))))
                    let jsxtnm1534
                    // LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(10016(line=675,offs=1)--10028(line=675,offs=13))
                    // I0Etapq(I0Ecst(gasq_iforall(613)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gasq001.sats)@(2110(line=102,offs=1)--2122(line=102,offs=13))));$list(T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Pvar(x0[8980]))))),T2JAG($list(T2Pvar(x0[8980])))))
                    // T1IMPallx(gasq_iforall(613);LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(9667(line=647,offs=1)--9812(line=656,offs=28)))
                    // T1IMPallx(gasq_iforall(613)<$list(T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(x0[8978],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))),@(x0[8978],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gasq_iforall(613);$list(@(xs[1916],T2Papps(T2Pcst(jsa1);$list(T2Pvar(x0[8978])))),@(x0[1917],T2Pvar(x0[8978])))))))
                    let jsxtnm1533 = function (arg1) { // timp: gasq_iforall(613)
                      let jsxtnm1460 = arg1
                      // I1CMP:start
                      // LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(9724(line=652,offs=1)--9743(line=652,offs=20))
                      // I0Etapq(I0Ecst(jsdasz_iforall$f2un(2724)(LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(4925(line=282,offs=1)--4944(line=282,offs=20))));$list(T2JAG($list())))
                      // T1IMPallx(jsdasz_iforall$f2un(2724);LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(10046(line=677,offs=1)--10260(line=693,offs=2)))
                      // T1IMPallx(jsdasz_iforall$f2un(2724)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(jsdasz_iforall$f2un(2724);$list()))))
                      let jsxtnm1467 = function (arg1, arg2) { // timp: jsdasz_iforall$f2un(2724)
                        let jsxtnm1461 = arg1
                        let jsxtnm1462 = arg2
                        // I1CMP:start
                        let jsxtnm1466 // let
                        { // let
                          // I1Dextern(LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(10150(line=685,offs=1)--10258(line=692,offs=40)))
                          // LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(10158(line=686,offs=1)--10258(line=692,offs=40))
                          // I1FUNDCL: XATS2JS_jsdasz_iforall$f2un(5353)
                          // XATS2JS_jsdasz_iforall$f2un_10161
                            // FJARGdarg($list(I1BNDcons(I1TNM(1463);I0Pvar(A(5354));$list(@(A(5354),I1Vtnm(I1TNM(1463))))),I1BNDcons(I1TNM(1464);I0Pvar(test(5355));$list(@(test(5355),I1Vtnm(I1TNM(1464)))))))
                            // I1CMP:start
                            // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_jsdasz_iforall$f2un);G1Nlist($list()))// I1CMP:return
                          let jsxtnm1465 = XATSDAPP(XATS2JS_jsdasz_iforall$f2un(jsxtnm1461, jsxtnm1462))
                          jsxtnm1466 = jsxtnm1465
                        } // endlet
                        // I1CMP:return:I1Vtnm(I1TNM(1466))
                        return jsxtnm1466
                      } // endtimp(jsdasz_iforall$f2un(2724))
                      let jsxtnm1531 = function (arg1, arg2) { // lam0(T_LAM(0))
                        let jsxtnm1468 = arg1
                        let jsxtnm1469 = arg2
                        // I1CMP:start
                        // LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(9787(line=656,offs=3)--9800(line=656,offs=16))
                        // I0Etapq(I0Ecst(iforall$test1(1434)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas001_vt.sats)@(2611(line=148,offs=1)--2624(line=148,offs=14))));$list(T2JAG($list(T2Pvar(x0[8978])))))
                        // T1IMPallx(iforall$test1(1434);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(10113(line=690,offs=1)--10200(line=694,offs=38)))
                        // T1IMPallx(iforall$test1(1434)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[8067],T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))),@(x0[8068],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(iforall$test1(1434);$list(@(x0[3777],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))
                        let jsxtnm1529 = function (arg1, arg2) { // timp: iforall$test1(1434)
                          let jsxtnm1470 = arg1
                          let jsxtnm1471 = arg2
                          // I1CMP:start
                          let jsxtnm1528 // let
                          { // let
                            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(10154(line=693,offs=1)--10188(line=694,offs=26)))
                            // I1VALDCL
                            let jsxtnm1527
                            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq001_vt.dats)@(10163(line=694,offs=1)--10176(line=694,offs=14))
                            // I0Etapq(I0Ecst(iforitm$work1(1450)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas001_vt.sats)@(3334(line=206,offs=1)--3347(line=206,offs=14))));$list(T2JAG($list(T2Pvar(x0[8068])))))
                            // T1IMPallx(iforitm$work1(1450);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4624(line=297,offs=1)--4749(line=305,offs=2)))
                            // T1IMPallx(iforitm$work1(1450)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(xs[7932],T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))),@(x0[7933],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(iforitm$work1(1450);$list(@(x0[3793],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))
                            let jsxtnm1525 = function (arg1, arg2) { // timp: iforitm$work1(1450)
                              let jsxtnm1472 = arg1
                              let jsxtnm1473 = arg2
                              // I1CMP:start
                              let jsxtnm1524 // let
                              { // let
                                // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4691(line=302,offs=1)--4747(line=304,offs=33)))
                                // I1VALDCL
                                let jsxtnm1489
                                // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4706(line=303,offs=7)--4707(line=303,offs=8))
                                // I0Etapq(I0Ecst(sint_gt$sint(928)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gint000.sats)@(2103(line=87,offs=1)--2115(line=87,offs=13))));$list(T2JAG($list())))
                                // T1IMPallx(sint_gt$sint(928);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1777(line=70,offs=1)--1938(line=82,offs=2)))
                                // T1IMPallx(sint_gt$sint(928)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_gt$sint(928);$list()))))
                                let jsxtnm1480 = function (arg1, arg2) { // timp: sint_gt$sint(928)
                                  let jsxtnm1474 = arg1
                                  let jsxtnm1475 = arg2
                                  // I1CMP:start
                                  let jsxtnm1479 // let
                                  { // let
                                    // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1865(line=78,offs=1)--1936(line=81,offs=39)))
                                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/gint000.dats)@(1873(line=79,offs=1)--1936(line=81,offs=39))
                                    // I1FUNDCL: XATS2JS_sint_gt$sint(4913)
                                    // XATS2JS_sint_gt$sint_1876
                                      // FJARGdarg($list(I1BNDcons(I1TNM(1476);I0Pvar(i1(4914));$list(@(i1(4914),I1Vtnm(I1TNM(1476))))),I1BNDcons(I1TNM(1477);I0Pvar(i2(4915));$list(@(i2(4915),I1Vtnm(I1TNM(1477)))))))
                                      // I1CMP:start
                                      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_sint_gt$sint);G1Nlist($list()))// I1CMP:return
                                    let jsxtnm1478 = XATSDAPP(XATS2JS_sint_gt$sint(jsxtnm1474, jsxtnm1475))
                                    jsxtnm1479 = jsxtnm1478
                                  } // endlet
                                  // I1CMP:return:I1Vtnm(I1TNM(1479))
                                  return jsxtnm1479
                                } // endtimp(sint_gt$sint(928))
                                let jsxtnm1481 = XATSDAPP(jsxtnm1480(jsxtnm1472, XATSINT1(0)))
                                let jsxtnm1488 // ift
                                if (jsxtnm1481) // ift
                                {
                                  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4715(line=304,offs=1)--4725(line=304,offs=11))
                                  // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                                  // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                                  // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                                  let jsxtnm1484
                                  let jsxtnm1483 // let
                                  { // let
                                    // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                                    // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                                    // XATS2JS_NODE_strn_print_2214
                                      // FJARGdarg($list(I1BNDcons(I1TNM(1482);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1482)))))))
                                      // I1CMP:start
                                      // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                                    jsxtnm1483 = XATS2JS_NODE_strn_print
                                  } // endlet
                                  jsxtnm1484 = jsxtnm1483
                                  // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4728(line=304,offs=14)--4736(line=304,offs=22))
                                  // I0Etapq(I0Ecst(gseq$sep(348)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gseq000.sats)@(2474(line=138,offs=1)--2482(line=138,offs=9))));$list(T2JAG($list(T2Pvar(xs[7932]))),T2JAG($list(T2Pvar(x0[7933])))))
                                  // T1IMPallx(gseq$sep(348);LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2355(line=98,offs=1)--2388(line=99,offs=25)))
                                  // T1IMPallx(gseq$sep(348)<$list(T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(a[8926],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq$sep(348);$list(@(xs[1071],T2Papps(T2Pcst(jsa1);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))),@(x0[1072],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))
                                  let jsxtnm1485 = function () { // timp: gseq$sep(348)
                                    // I1CMP:start
                                    // I1CMP:return:I1Vstr(...)
                                    return XATSSTRN(",")
                                  } // endtimp(gseq$sep(348))
                                  let jsxtnm1486 = XATSDAPP(jsxtnm1485())
                                  let jsxtnm1487 = XATSDAPP(jsxtnm1484(jsxtnm1486))
                                  jsxtnm1488 = jsxtnm1487
                                } else {
                                } // end(if)
                                jsxtnm1489 = jsxtnm1488
                                XATS000_patck(true)
                                // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4665(line=300,offs=3)--4673(line=300,offs=11))
                                // I0Etapq(I0Ecst(g_print1(1413)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/VT/gbas000_vt.sats)@(2117(line=109,offs=1)--2125(line=109,offs=9))));$list(T2JAG($list(T2Pvar(x0[7933])))))
                                // T1IMPallx(g_print1(1413);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1635(line=59,offs=1)--1680(line=61,offs=27)))
                                // T1IMPallx(g_print1(1413)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(x0[8832],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(g_print1(1413);$list(@(x0[3751],T2Pvar(x0[8832])))))))
                                let jsxtnm1522
                                // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gxyz000_vt.dats)@(1669(line=61,offs=16)--1676(line=61,offs=23))
                                // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x0[8832])))))
                                // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(2567(line=116,offs=1)--2780(line=135,offs=4)))
                                // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(a0[7367],T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),@(a1[7368],T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))));I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Papps(T2Pcst(t0up);$list(T2Pvar(a0[7367]),T2Pvar(a1[7368])))))))))
                                let jsxtnm1521 = function (arg1) { // timp: g_print(39)
                                  let jsxtnm1490 = arg1
                                  // I1CMP:start
                                  let jsxtnm1520 // let
                                  { // let
                                    // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(2635(line=124,offs=1)--2662(line=125,offs=19)))
                                    // I1VALDCL
                                    let jsxtnm1495
                                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(2646(line=125,offs=3)--2656(line=125,offs=13))
                                    // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                                    // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                                    // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                                    let jsxtnm1493
                                    let jsxtnm1492 // let
                                    { // let
                                      // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                                      // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                                      // XATS2JS_NODE_strn_print_2214
                                        // FJARGdarg($list(I1BNDcons(I1TNM(1491);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1491)))))))
                                        // I1CMP:start
                                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                                      jsxtnm1492 = XATS2JS_NODE_strn_print
                                    } // endlet
                                    jsxtnm1493 = jsxtnm1492
                                    let jsxtnm1494 = XATSDAPP(jsxtnm1493(XATSSTRN("@(")))
                                    jsxtnm1495 = jsxtnm1494
                                    XATS000_patck(true)
                                    // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(2663(line=126,offs=1)--2692(line=127,offs=21)))
                                    // I1VALDCL
                                    let jsxtnm1502
                                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(2674(line=127,offs=3)--2681(line=127,offs=10))
                                    // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(a0[7367])))))
                                    // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
                                    // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(strn)))))))
                                    let jsxtnm1499
                                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
                                    // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                                    // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                                    // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                                    let jsxtnm1498
                                    let jsxtnm1497 // let
                                    { // let
                                      // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                                      // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                                      // XATS2JS_NODE_strn_print_2214
                                        // FJARGdarg($list(I1BNDcons(I1TNM(1496);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1496)))))))
                                        // I1CMP:start
                                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                                      jsxtnm1497 = XATS2JS_NODE_strn_print
                                    } // endlet
                                    jsxtnm1498 = jsxtnm1497
                                    jsxtnm1499 = jsxtnm1498
                                    let jsxtnm1500 = XATSPFLT(jsxtnm1490[0])
                                    let jsxtnm1501 = XATSDAPP(jsxtnm1499(jsxtnm1500))
                                    jsxtnm1502 = jsxtnm1501
                                    XATS000_patck(true)
                                    // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(2696(line=129,offs=1)--2715(line=129,offs=20)))
                                    // I1VALDCL
                                    let jsxtnm1507
                                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(2705(line=129,offs=10)--2710(line=129,offs=15))
                                    // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                                    // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                                    // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                                    let jsxtnm1505
                                    let jsxtnm1504 // let
                                    { // let
                                      // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                                      // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                                      // XATS2JS_NODE_strn_print_2214
                                        // FJARGdarg($list(I1BNDcons(I1TNM(1503);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1503)))))))
                                        // I1CMP:start
                                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                                      jsxtnm1504 = XATS2JS_NODE_strn_print
                                    } // endlet
                                    jsxtnm1505 = jsxtnm1504
                                    let jsxtnm1506 = XATSDAPP(jsxtnm1505(XATSSTRN(",")))
                                    jsxtnm1507 = jsxtnm1506
                                    XATS000_patck(true)
                                    // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(2716(line=130,offs=1)--2745(line=131,offs=21)))
                                    // I1VALDCL
                                    let jsxtnm1514
                                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(2727(line=131,offs=3)--2734(line=131,offs=10))
                                    // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(a1[7368])))))
                                    // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gint000.dats)@(2286(line=96,offs=1)--2321(line=97,offs=27)))
                                    // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(si)))))))
                                    let jsxtnm1511
                                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gint000.dats)@(2309(line=97,offs=15)--2319(line=97,offs=25))
                                    // I0Etapq(I0Ecst(sint_print(922)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gint000.sats)@(1506(line=49,offs=1)--1516(line=49,offs=11))));$list(T2JAG($list())))
                                    // T1IMPallx(sint_print(922);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(1430(line=40,offs=1)--1551(line=48,offs=2)))
                                    // T1IMPallx(sint_print(922)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(sint_print(922);$list()))))
                                    let jsxtnm1510
                                    let jsxtnm1509 // let
                                    { // let
                                      // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(1486(line=45,offs=1)--1549(line=47,offs=52)))
                                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(1494(line=46,offs=1)--1549(line=47,offs=52))
                                      // I1FUNDCL: XATS2JS_NODE_sint_print(5220)
                                      // XATS2JS_NODE_sint_print_1497
                                        // FJARGdarg($list(I1BNDcons(I1TNM(1508);I0Pvar(i0(5221));$list(@(i0(5221),I1Vtnm(I1TNM(1508)))))))
                                        // I1CMP:start
                                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_sint_print);G1Nlist($list()))// I1CMP:return
                                      jsxtnm1509 = XATS2JS_NODE_sint_print
                                    } // endlet
                                    jsxtnm1510 = jsxtnm1509
                                    jsxtnm1511 = jsxtnm1510
                                    let jsxtnm1512 = XATSPFLT(jsxtnm1490[1])
                                    let jsxtnm1513 = XATSDAPP(jsxtnm1511(jsxtnm1512))
                                    jsxtnm1514 = jsxtnm1513
                                    XATS000_patck(true)
                                    // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(2749(line=133,offs=1)--2773(line=133,offs=25)))
                                    // I1VALDCL
                                    let jsxtnm1519
                                    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/tupl000.dats)@(2758(line=133,offs=10)--2768(line=133,offs=20))
                                    // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
                                    // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
                                    // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
                                    let jsxtnm1517
                                    let jsxtnm1516 // let
                                    { // let
                                      // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
                                      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
                                      // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
                                      // XATS2JS_NODE_strn_print_2214
                                        // FJARGdarg($list(I1BNDcons(I1TNM(1515);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1515)))))))
                                        // I1CMP:start
                                        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
                                      jsxtnm1516 = XATS2JS_NODE_strn_print
                                    } // endlet
                                    jsxtnm1517 = jsxtnm1516
                                    let jsxtnm1518 = XATSDAPP(jsxtnm1517(XATSSTRN(")")))
                                    jsxtnm1519 = jsxtnm1518
                                    XATS000_patck(true)
                                    jsxtnm1520 = XATSVOID
                                  } // endlet
                                  // I1CMP:return:I1Vtnm(I1TNM(1520))
                                  return jsxtnm1520
                                } // endtimp(g_print(39))
                                jsxtnm1522 = jsxtnm1521
                                let jsxtnm1523 = XATSDAPP(jsxtnm1522(jsxtnm1473))
                                jsxtnm1524 = jsxtnm1523
                              } // endlet
                              // I1CMP:return:I1Vtnm(I1TNM(1524))
                              return jsxtnm1524
                            } // endtimp(iforitm$work1(1450))
                            let jsxtnm1526 = XATSDAPP(jsxtnm1525(jsxtnm1470, jsxtnm1471))
                            jsxtnm1527 = jsxtnm1526
                            XATS000_patck(true)
                            jsxtnm1528 = XATSBOOL(true)
                          } // endlet
                          // I1CMP:return:I1Vtnm(I1TNM(1528))
                          return jsxtnm1528
                        } // endtimp(iforall$test1(1434))
                        let jsxtnm1530 = XATSDAPP(jsxtnm1529(jsxtnm1468, jsxtnm1469))
                        // I1CMP:return:I1Vtnm(I1TNM(1530))
                        return jsxtnm1530
                      } // endfun(lam0)
                      let jsxtnm1532 = XATSDAPP(jsxtnm1467(jsxtnm1460, jsxtnm1531))
                      // I1CMP:return:I1Vtnm(I1TNM(1532))
                      return jsxtnm1532
                    } // endtimp(gasq_iforall(613))
                    jsxtnm1534 = jsxtnm1533
                    let jsxtnm1535 = XATSDAPP(jsxtnm1534(jsxtnm1454))
                    jsxtnm1536 = jsxtnm1535
                    XATS000_patck(true)
                    jsxtnm1537 = XATSVOID
                  } // endlet
                  jsxtnm1538 = jsxtnm1537
                } // endlet
                // I1CMP:return:I1Vtnm(I1TNM(1538))
                return jsxtnm1538
              } // endtimp(gseq_iforitm1(1761))
              let jsxtnm1540 = XATSDAPP(jsxtnm1539(jsxtnm1437))
              jsxtnm1541 = jsxtnm1540
            } // endlet
            jsxtnm1542 = jsxtnm1541
            XATS000_patck(true)
            // I1Dvaldclist(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4752(line=307,offs=1)--4793(line=308,offs=33)))
            // I1VALDCL
            let jsxtnm1549
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4761(line=308,offs=1)--4771(line=308,offs=11))
            // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
            // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
            // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
            let jsxtnm1545
            let jsxtnm1544 // let
            { // let
              // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
              // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
              // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
              // XATS2JS_NODE_strn_print_2214
                // FJARGdarg($list(I1BNDcons(I1TNM(1543);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1543)))))))
                // I1CMP:start
                // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
              jsxtnm1544 = XATS2JS_NODE_strn_print
            } // endlet
            jsxtnm1545 = jsxtnm1544
            // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/VT/gseq000_vt.dats)@(4774(line=308,offs=14)--4782(line=308,offs=22))
            // I0Etapq(I0Ecst(gseq$end(347)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gseq000.sats)@(2432(line=134,offs=1)--2440(line=134,offs=9))));$list(T2JAG($list(T2Pvar(xs[7932]))),T2JAG($list(T2Pvar(x0[7933])))))
            // T1IMPallx(gseq$end(347);LCSRCsome1(../../../DATS/CATS/JS/dynarr0.dats)@(2389(line=100,offs=1)--2422(line=101,offs=25)))
            // T1IMPallx(gseq$end(347)<$list(T2JAG($list(T2Papps(T2Pcst(jsdasz_tbox);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))),T2JAG($list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0()))))))))>;I1Dtmpsub($list(@(a[8926],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))));I1Dimplmnt0(DIMPLone2(gseq$end(347);$list(@(xs[1069],T2Papps(T2Pcst(jsa1);$list(T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))),@(x0[1070],T2Ptrcd(TRCDflt0;-1;$list(S2LAB(LABint(0);T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0()))),S2LAB(LABint(1);T2Papps(T2Pcst(gint_type);$list(T2Ptext(xats_sint_t;$list()),T2Pnone0())))))))))))
            let jsxtnm1546 = function () { // timp: gseq$end(347)
              // I1CMP:start
              // I1CMP:return:I1Vstr(...)
              return XATSSTRN(")")
            } // endtimp(gseq$end(347))
            let jsxtnm1547 = XATSDAPP(jsxtnm1546())
            let jsxtnm1548 = XATSDAPP(jsxtnm1545(jsxtnm1547))
            jsxtnm1549 = jsxtnm1548
            XATS000_patck(true)
            jsxtnm1550 = XATSVOID
          } // endlet
          // I1CMP:return:I1Vtnm(I1TNM(1550))
          return jsxtnm1550
        } // endtimp(gseq_print1(1688))
        let jsxtnm1552 = XATSDAPP(jsxtnm1551(jsxtnm1436))
        jsxtnm1553 = jsxtnm1552
      } // endlet
      // I1CMP:return:I1Vtnm(I1TNM(1553))
      return jsxtnm1553
    } // endtimp(g_print(39))
    let jsxtnm1555 = XATSDAPP(jsxtnm1554(jsxtnm1362))
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22141(line=1366,offs=20)--22153(line=1366,offs=32))
    // I0Etapq(I0Ecst(gs_print$sep(803)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gsyn000.sats)@(11637(line=733,offs=1)--11649(line=733,offs=13))));$list(T2JAG($list())))
    // T1IMPallx(gs_print$sep(803);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(20753(line=1271,offs=1)--20791(line=1273,offs=20)))
    // T1IMPallx(gs_print$sep(803)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$sep(803);$list()))))
    let jsxtnm1557 = function () { // timp: gs_print$sep(803)
      // I1CMP:start
      let jsxtnm1556 = XATSTUP0([])
      // I1CMP:return:I1Vtnm(I1TNM(1556))
      return jsxtnm1556
    } // endtimp(gs_print$sep(803))
    let jsxtnm1558 = XATSDAPP(jsxtnm1557())
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22158(line=1367,offs=3)--22165(line=1367,offs=10))
    // I0Etapq(I0Ecst(g_print(39)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gbas000.sats)@(2824(line=171,offs=1)--2831(line=171,offs=8))));$list(T2JAG($list(T2Pvar(x4[7036])))))
    // T1IMPallx(g_print(39);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2143(line=94,offs=1)--2180(line=95,offs=29)))
    // T1IMPallx(g_print(39)<$list(T2JAG($list(T2Papps(T2Pcst(string_i0_tx);$list(T2Pnone0())))))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_print(39);$list(@(x0[447],T2Pcst(strn)))))))
    let jsxtnm1562
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/strn000.dats)@(2168(line=95,offs=17)--2178(line=95,offs=27))
    // I0Etapq(I0Ecst(strn_print(1040)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/strn000.sats)@(2592(line=122,offs=1)--2602(line=122,offs=11))));$list(T2JAG($list())))
    // T1IMPallx(strn_print(1040);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2147(line=98,offs=1)--2268(line=106,offs=2)))
    // T1IMPallx(strn_print(1040)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(strn_print(1040);$list()))))
    let jsxtnm1561
    let jsxtnm1560 // let
    { // let
      // I1Dextern(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2203(line=103,offs=1)--2266(line=105,offs=52)))
      // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/CATS/JS/NODE/node000.dats)@(2211(line=104,offs=1)--2266(line=105,offs=52))
      // I1FUNDCL: XATS2JS_NODE_strn_print(5230)
      // XATS2JS_NODE_strn_print_2214
        // FJARGdarg($list(I1BNDcons(I1TNM(1559);I0Pvar(cs(5231));$list(@(cs(5231),I1Vtnm(I1TNM(1559)))))))
        // I1CMP:start
        // I1CMP(ival):I1Vextnam(T_DLR_EXTNAM();I1Vvar(XATS2JS_NODE_strn_print);G1Nlist($list()))// I1CMP:return
      jsxtnm1560 = XATS2JS_NODE_strn_print
    } // endlet
    jsxtnm1561 = jsxtnm1560
    jsxtnm1562 = jsxtnm1561
    let jsxtnm1563 = XATSDAPP(jsxtnm1562(jsxtnm1363))
    // LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(22175(line=1367,offs=20)--22187(line=1367,offs=32))
    // I0Etapq(I0Ecst(gs_print$end(804)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gsyn000.sats)@(11672(line=736,offs=1)--11684(line=736,offs=13))));$list(T2JAG($list())))
    // T1IMPallx(gs_print$end(804);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gsyn000.dats)@(20792(line=1274,offs=1)--20830(line=1276,offs=20)))
    // T1IMPallx(gs_print$end(804)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(gs_print$end(804);$list()))))
    let jsxtnm1565 = function () { // timp: gs_print$end(804)
      // I1CMP:start
      let jsxtnm1564 = XATSTUP0([])
      // I1CMP:return:I1Vtnm(I1TNM(1564))
      return jsxtnm1564
    } // endtimp(gs_print$end(804))
    let jsxtnm1566 = XATSDAPP(jsxtnm1565())
    jsxtnm1567 = jsxtnm1566
  } // endlet
  // I1CMP:return:I1Vtnm(I1TNM(1567))
  return jsxtnm1567
} // endtimp(gs_print_a5(810))
// LCSRCsome1(test02_jshmap0.dats)@(1213(line=71,offs=11)--1217(line=71,offs=15))
// I0Etapq(I0Ecst(g_type(196)(LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/SATS/gdbg000.sats)@(1861(line=63,offs=1)--1867(line=63,offs=7))));$list(T2JAG($list())))
// T1IMPallx(g_type(196);LCSRCsome1(/home/hwxi/Research/ATS-Xanadu/prelude/DATS/gdbg000.dats)@(1498(line=45,offs=1)--1558(line=49,offs=22)))
// T1IMPallx(g_type(196)<$list(T2JAG($list()))>;I1Dtmpsub($list();I1Dimplmnt0(DIMPLone2(g_type(196);$list()))))
let jsxtnm1572 = function (arg1) { // timp: g_type(196)
  let jsxtnm1569 = arg1
  // I1CMP:start
  let jsxtnm1570 = XATSCAPP("unit", [0])
  let jsxtnm1571 = XATSCAST("castxy_1839", [jsxtnm1570])
  // I1CMP:return:I1Vtnm(I1TNM(1571))
  return jsxtnm1571
} // endtimp(g_type(196))
let jsxtnm1573 = XATSDAPP(jsxtnm1572(jsxtnm1111))
let jsxtnm1574 = XATSDAPP(jsxtnm1568(XATSSTRN("arr1("), jsxtnm1573, XATSSTRN(") = "), jsxtnm1111, XATSSTRN("\n")))
jsxtnm1575 = jsxtnm1574
XATS000_patck(true)
// LCSRCsome1(test02_jshmap0.dats)@(1515(line=79,offs=1)--1515(line=79,offs=1))
// I1Dnone1(I0Dnone1(LCSRCsome1(test02_jshmap0.dats)@(1515(line=79,offs=1)--1515(line=79,offs=1));D3Cnone0()))
