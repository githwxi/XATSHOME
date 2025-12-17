/* ****** ****** */
//
function
GameOf24_input$rand()
{
//
var MAX = 13;
//
var input1 =
document.getElementById("card1_val");
var input2 =
document.getElementById("card2_val");
var input3 =
document.getElementById("card3_val");
var input4 =
document.getElementById("card4_val");
//
input1.value = Math.floor(1+MAX*Math.random()).toString();
input2.value = Math.floor(1+MAX*Math.random()).toString();
input3.value = Math.floor(1+MAX*Math.random()).toString();
input4.value = Math.floor(1+MAX*Math.random()).toString();
//
return;
} // end of [function GameOf24_input$rand()]
//
/* ****** ****** */
//
function
GameOf24_input$main()
{
//
var
input1 =
document.getElementById("card1_val");
var
input2 =
document.getElementById("card2_val");
var
input3 =
document.getElementById("card3_val");
var
input4 =
document.getElementById("card4_val");
//
var n1 = parseInt( input1.value, 10 );
var n2 = parseInt( input2.value, 10 );
var n3 = parseInt( input3.value, 10 );
var n4 = parseInt( input4.value, 10 );
//
var
theStage = document.getElementById("theStage");
//
XATS2JS_the_print_store_clear();
//
GameOf24_solve$print(n1, n2, n3, n4);
//
theStage.innerHTML = XATS2JS_the_print_store_flush();
//
return;
//
} // end of [function GameOf24_input$main()]
//
/* ****** ****** */
/* ****** ****** */
//
/***********************************************************************/
/*
The end of
[XATSHOME/contrib/githwxi/pground/proj002@250507/misc004/Game-of-24.cats]
*/
/***********************************************************************/