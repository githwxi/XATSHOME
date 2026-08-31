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
XATS2CM_CMEMIT01=\
"${XATSHOME}/xassets/JS/xats2cm/bin/xats2cm_cmemit01_ats2_opt1.js"
##################################################################
#
case $prog in
  xats2cm)
    exec ${NODE} --stack-size=8801 ${XATS2CM_CMEMIT01} $@
    ;;
  *)
    echo "This is a script for xats2cm."
    echo "The script should be symbolically named as [xats2cm]."
    exit 1
    ;;
esac
#
##################################################################
#
# end of [$(XATSHOME)/xassets/bin/xats2cm_node.sh]
#
##################################################################
