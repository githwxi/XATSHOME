#!/bin/sh
##################################################################
NODE="node"
##################################################################
prog=`basename $0`
##################################################################
if [ ! "$XATSHOME" ] ; then
  echo "XATSHOME should have been defined!"; exit 1
fi
##################################################################
if [ ! -d "$XATSHOME" ] ; then
  echo "XATSHOME should have been available at '${XATSHOME}'"; exit 1
fi
##################################################################
XATS2JS_JSEMIT00="$XATSHOME/xassets/JS/xats2js/xats2js_jsemit01_ats2_opt1.js"
##################################################################
#
case $prog in
  xats2js)
    exec ${NODE} --stack-size=8800 ${XATS2JS_JSEMIT00} $@
    ;;
  *)
    echo "This is a script for xats2js."
    echo "The script should be symbolically named as [xats2js]."
    exit 1
    ;;
esac
#
##################################################################
#
# end of [xats2js_node.sh]
#
##################################################################
