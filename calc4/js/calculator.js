function f_click(val) {
  var x=1;
  var y=1;
  var z=1;
  var m=3;
  var summ=0;
  var month=0;
  var mass = [[[8400,7560,6720,5880], [14700,13230,11760,10290], [21000,18900,16800,14700]],
              [[10800,9720,8640,7560], [18900,17010,15120,13230], [27000,24300,21600,18900]],
              [[15600,14040,12480,10920], [27300,24570,21840,19110], [39000,35100,31200,27300]]];

  if(document.getElementsByName('hrono')[0].checked) {x=0;}
  if(document.getElementsByName('hrono')[1].checked) {x=1;}
  if(document.getElementsByName('hrono')[2].checked) {x=2;}

  if(document.getElementsByName('tran')[0].checked) {y=0;}
  if(document.getElementsByName('tran')[1].checked) {y=1;}
  if(document.getElementsByName('tran')[2].checked) {y=2;}

  if(document.getElementsByName('dlit')[0].checked) {z=0; m=1;}
  if(document.getElementsByName('dlit')[1].checked) {z=1; m=3;}
  if(document.getElementsByName('dlit')[2].checked) {z=2; m=6;}
  if(document.getElementsByName('dlit')[3].checked) {z=3; m=12;}

  if(val=="hr_1") {x=0;}
  if(val=="hr_2") {x=1;}
  if(val=="hr_3") {x=2;}

  if(val=="tr_1") {y=0;}
  if(val=="tr_2") {y=1;}
  if(val=="tr_3") {y=2;}

  if(val=="dl_1") {z=0; m=1;}
  if(val=="dl_2") {z=1; m=3;}
  if(val=="dl_3") {z=2; m=6;}
  if(val=="dl_4") {z=3; m=12;}

  summ=(mass[x][y][z])*m;
  month=mass[x][y][z];
/*
  if(summ>=100000) {document.getElementById("summ_tag").style="left:470px !important";}
  else {if(summ<10000) {document.getElementById("summ_tag").style="left:418px !important";}
        else {document.getElementById("summ_tag").style="left:444px !important";}}

  if(month<10000) {document.getElementById("month_tag").style="left:780px !important";}
  else {document.getElementById("month_tag").style="left:806px !important";}
*/
  document.getElementById("st_summ").value=summ;
  document.getElementById("st_month").value=month;
}