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
XATS2PY_PYEMIT00="$XATSHOME/xassets/JS/xats2py/xats2py_pyemit01_ats3_opt1.js"
##################################################################
#
case $prog in
  xats2py)
    exec ${NODE} --stack-size=8800 ${XATS2PY_PYEMIT00} $@
    ;;
  *)
    echo "This is a script for xats2py."
    echo "The script should be symbolically named as [xats2py]."
    exit 1
    ;;
esac
#
##################################################################
#
# end of [xats2py_node.sh]
#
##################################################################
