/* ****** ****** */
/* ****** ****** */

function
theCount$update(msg) {
  $("#theCount").text(msg);
}

/* ****** ****** */
/* ****** ****** */

function
CATS_Up$button$onclick() {
  DATS_Up$button$onclick(theCount$update);
}
function
CATS_Down$button$onclick() {
  DATS_Down$button$onclick(theCount$update);
}
function
CATS_Reset$button$onclick() {
  DATS_Reset$button$onclick(theCount$update);
}

/* ****** ****** */
/* ****** ****** */
//
/***********************************************************************/
// end of [githwxi/pground/proj002@250507/misc002/counter.cats]
/***********************************************************************/
