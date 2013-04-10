

function rnum(num,dec){var result=Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);return result;}
function p_sev(num_a,num_b,num_c,num_d,num_e,num_f,num_g){var result=(num_a+num_b+num_c+num_d+num_e+num_f+num_g);return result;}
function mina(num_a,num_b){var result=(num_a-num_b);return result;}
function div(num_a,num_b){var result=(num_a/num_b);return result;}

var numExp=/^[0-9.]+$/;var myExp=/^[^<]+$/;var zoo=100;var drp;var aa;var ab;var ba;var bb;var ca;var cb;var da;var db;var ea;var eb;var fa;var fb;var ga;var gb;var ha;var hb;var a_one;var a_two;var a_three;var amount_make;var inonea;var intwoa;var inonear;var inoneal;var a;var b;var c;var d;var e;var f;var g;var tota;var totb;var toar;var toal;var table_b;var a_mon;var b_mon;var c_mon;var d_mon;var e_mon;var f_mon;var g_mon;var h_mon;var i_mon;var j_mon;var a_ml;var b_ml;var c_ml;var d_ml;var e_ml;var f_ml;var g_ml;var h_ml;var i_ml;var j_ml;var rec;var note;var fl_a;var fl_b;var fl_c;var fl_d;var fl_e;var fl_f;var fl_g;var fl_az;var fl_azx;var fl_bz;var fl_cz;var fl_dz;var fl_ez;var fl_fz;var fl_gz;var nic_ha_l;var nic_ha;var nic_ha_r;var nic_hb;var amount_nic;var nic_lev;var pg_w_ad;var pg_a;var vg_a;var pg_ad;var vg_ad;
var addedTotalsOfML;
var baseNic;
var targetNic;
var totalAmount;
var nicotineLiquid;
var nicotineLiquidPercentage;
var totalAmountLeft;
var nicotineLiquidDrops;
var waterPerc;
var totalWater;
var totalWaterPG;
var totalWaterVG;
var flav1Perc;
var totalflav1;
var flav2Perc;
var totalflav2;
var flav3Perc;
var totalflav3;
var flav4Perc;
var totalflav4;
var flav5Perc;
var totalflav5;
var flav6Perc;
var totalflav6;
var desiredPG;
var desiredVG;
var initialPG;
var initialVG;
var totalPG;
var totalVG;
var pg;
var vg;
var flav1pgratio;
var flav1vgratio;
var flav1pgratioOrig;
var flav1vgratioOrig;

var flav1pgml;
var flav1vgml;

var flav2pgratio;
var flav2vgratio;
var flav2pgratioOrig;
var flav2vgratioOrig;
var flav2pgml;
var flav2vgml;

var flav3pgratio;
var flav3vgratio;
var flav3pgratioOrig;
var flav3vgratioOrig;

var flav3pgml;
var flav3vgml;

var flav4pgratio;
var flav4vgratio;
var flav4pgratioOrig;
var flav4vgratioOrig;

var flav4pgml;
var flav4vgml;

var flav5pgratio;
var flav5vgratio;
var flav5pgratioOrig;
var flav5vgratioOrig;

var flav5pgml;
var flav5vgml;

var flav6pgratio;
var flav6vgratioOrig;
var flav6pgratioOrig;
var flav6vgratio;

var flav6pgml;
var flav6vgml;

var subtractFromPg;
var subtractFromVg;

var subtractFromPgPerc;
var subtractFromVgPerc; 

var nicotinePercentPG;
var nicotinePercentVG
var nicotineToSubtractPG;
var nicotineToSubtractVG;

/*COST VARIABLES*/

var nicotineMon;
var nicotineMl;
var nicotineCostPerMl;
var nicotineBottleCost;
var pgMon;
var pgMl;
var pgCostPerMl;
var pgBottleCost;
var vgMon;
var vgMl;
var vgCostPerMl;
var vgBottleCost;
var waterMon;
var waterMl;
var waterCostPerMl;
var waterBottleCost;
var flav1Mon;
var flav1Ml;
var flav1CostPerMl;
var flav1BottleCost;
var flav2Mon;
var flav2Ml;
var flav2CostPerMl;
var flav2BottleCost;
var flav3Mon;
var flav3Ml;
var flav3CostPerMl;
var flav3BottleCost;
var flav4Mon;
var flav4Ml;
var flav4CostPerMl;
var flav4BottleCost;
var flav5Mon;
var flav5Ml;
var flav5CostPerMl;
var flav5BottleCost;
var flav6Mon;
var flav6Ml;
var flav6CostPerMl;
var flav6BottleCost;
var totalBottleCost;
var currentRecipeName;
var totalBottleCostPerML;
var totalBottleDrops;

/*file system*/
var fileDate;
var conn;
var dbFile;
var dbTemplate;
var db;
var dbQuery;
var createStmt = null;
var insertStmt = null;
var insertStmt2 = null;
var selectStmt = null;

var insert1Complete = false;
var insert2Complete = false

function flavor_a(fl_a,fl_az,fl_azx,table_b)
{var y=document.getElementById("fl_a").value;if(y.match(myExp))
{var z=y;}else{var z="";}
document.getElementById("fl_a").value=z;document.getElementById("fl_az").innerHTML=z;document.getElementById("fl_azx").innerHTML=z;/*document.getElementById("table_b").innerHTML=""*/;}
function flavor_b(fl_b,fl_bz,table_b)
{var y=document.getElementById("fl_b").value;if(y.match(myExp))
{var z=y;}else{var z="";}
document.getElementById("fl_b").value=z;document.getElementById("fl_bz").innerHTML=z;/*document.getElementById("table_b").innerHTML=""*/;}
function flavor_c(fl_c,fl_cz,table_b)
{var y=document.getElementById("fl_c").value;if(y.match(myExp))
{var z=y;}else{var z="";}
document.getElementById("fl_c").value=z;document.getElementById("fl_cz").innerHTML=z;/*document.getElementById("table_b").innerHTML=""*/;}
function flavor_d(fl_d,fl_dz,table_b)
{var y=document.getElementById("fl_d").value;if(y.match(myExp))
{var z=y;}else{var z="";}
document.getElementById("fl_d").value=z;document.getElementById("fl_dz").innerHTML=z;/*document.getElementById("table_b").innerHTML=""*/;}
function flavor_e(fl_e,fl_ez,table_b)
{var y=document.getElementById("fl_e").value;if(y.match(myExp))
{var z=y;}else{var z="";}
document.getElementById("fl_e").value=z;document.getElementById("fl_ez").innerHTML=z;/*document.getElementById("table_b").innerHTML=""*/;}
function flavor_f(fl_f,fl_fz,table_b)
{var y=document.getElementById("fl_f").value;if(y.match(myExp))
{var z=y;}else{var z="";}
document.getElementById("fl_f").value=z;document.getElementById("fl_fz").innerHTML=z;/*document.getElementById("table_b").innerHTML=""*/;}
function flavor_g(fl_g,fl_gz,table_b)
{var y=document.getElementById("fl_g").value;if(y.match(myExp))
{var z=y;}else{var z="";}
document.getElementById("fl_g").value=z;document.getElementById("fl_gz").innerHTML=z;/*document.getElementById("table_b").innerHTML=""*/;}
function notes(note,table_b)
{var y=document.getElementById("note").value;if(y.match(myExp))
{var z=y;}else{var z="";}
document.getElementById("note").value=z;/*document.getElementById("table_b").innerHTML=""*/;}
function rec_x(rec,table_b)
{var y=document.getElementById("rec").value;if(y.match(myExp))
{var z=y;}else{var z="";}
document.getElementById("rec").value=z;/*document.getElementById("table_b").innerHTML=""*/;}
function mil_a(a_ml,table_b)
{var y=document.getElementById("a_ml").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("a_ml").value=z;/*document.getElementById("table_b").innerHTML=""*/;}
function mil_b(b_ml,table_b)
{var y=document.getElementById("b_ml").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("b_ml").value=z;/*document.getElementById("table_b").innerHTML=""*/;}
function mil_c(c_ml,table_b)
{var y=document.getElementById("c_ml").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("c_ml").value=z;/*document.getElementById("table_b").innerHTML=""*/;}
function mil_d(d_ml,table_b)
{var y=document.getElementById("d_ml").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("d_ml").value=z;/*document.getElementById("table_b").innerHTML=""*/;}
function mil_e(e_ml,table_b)
{var y=document.getElementById("e_ml").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("e_ml").value=z;/*document.getElementById("table_b").innerHTML=""*/;}
function mil_f(f_ml,table_b)
{var y=document.getElementById("f_ml").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("f_ml").value=z;/*document.getElementById("table_b").innerHTML=""*/;}
function mil_g(g_ml,table_b)
{var y=document.getElementById("g_ml").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("g_ml").value=z;/*document.getElementById("table_b").innerHTML=""*/;}
function mil_h(h_ml,table_b)
{var y=document.getElementById("h_ml").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("h_ml").value=z;/*document.getElementById("table_b").innerHTML=""*/;}
function mil_i(i_ml,table_b)
{var y=document.getElementById("i_ml").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("i_ml").value=z;/*document.getElementById("table_b").innerHTML=""*/;}
function mil_j(j_ml,table_b)
{var y=document.getElementById("j_ml").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("j_ml").value=z;/*document.getElementById("table_b").innerHTML=""*/;}
function money_a(a_mon,table_b)
{var y=document.getElementById("a_mon").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("a_mon").value=z;/*document.getElementById("table_b").innerHTML=""*/;}
function money_b(b_mon,table_b)
{var y=document.getElementById("b_mon").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("b_mon").value=z;/*document.getElementById("table_b").innerHTML=""*/;}
function money_c(c_mon,table_b)
{var y=document.getElementById("c_mon").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("c_mon").value=z;/*document.getElementById("table_b").innerHTML=""*/;}
function money_d(d_mon,table_b)
{var y=document.getElementById("d_mon").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("d_mon").value=z;/*document.getElementById("table_b").innerHTML=""*/;}
function money_e(e_mon,table_b)
{var y=document.getElementById("e_mon").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("e_mon").value=z;/*document.getElementById("table_b").innerHTML=""*/;}
function money_f(f_mon,table_b)
{var y=document.getElementById("f_mon").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("f_mon").value=z;/*document.getElementById("table_b").innerHTML=""*/;}
function money_g(g_mon,table_b)
{var y=document.getElementById("g_mon").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("g_mon").value=z;/*document.getElementById("table_b").innerHTML=""*/;}
function money_h(h_mon,table_b)
{var y=document.getElementById("h_mon").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("h_mon").value=z;/*document.getElementById("table_b").innerHTML=""*/;}
function money_i(i_mon,table_b)
{var y=document.getElementById("i_mon").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("i_mon").value=z;/*document.getElementById("table_b").innerHTML=""*/;}
function money_j(j_mon,table_b)
{var y=document.getElementById("j_mon").value;if(y.match(numExp))
{var z=y;}else{var z="";}
document.getElementById("j_mon").value=z;/*document.getElementById("table_b").innerHTML=""*/;}
function pga_rec(aa,ab,table_b)
{var yno=document.getElementById("aa").value;if(yno.match(numExp))
{var yn=yno;}else{var yn="";}
if(yn>zoo)
{var y=zoo;}else{var y=yn;}
var zr=mina(zoo,y);var z=rnum(zr,2)
document.getElementById("aa").value=y;document.getElementById("ab").innerHTML=z+"%";/*document.getElementById("table_b").innerHTML=""*/;}
function pga(aa,ab)
{var yno=document.getElementById("aa").value;if(yno.match(numExp))
{var yn=yno;}else{var yn="";}
if(yn>zoo)
{var y=zoo;}else{var y=yn;}
var zr=mina(zoo,y);var z=rnum(zr,2)
document.getElementById("aa").value=y;document.getElementById("ab").innerHTML=z+"%";}
function pgb_rec(ba,bb,a,pg_w_ad,table_b)
{var yno=document.getElementById("ba").value;if(yno.match(numExp))
{var yn=yno;}else{var yn="";}
if(yn>zoo)
{var y=zoo;}else{var y=yn;}
var zr=mina(zoo,y);var z=rnum(zr,2);var water=document.getElementById("a").value;var water_s=div(water,2);if(water==0)
{var pgr=y;var vgr=z;}
else
{var pgr=mina(y,water_s);var vgr=mina(z,water_s);}
    pg=rnum(pgr,2);
    vg=rnum(vgr,2);
    initialPG=pg;initialVG=vg;
document.getElementById("ba").value=y;document.getElementById("bb").innerHTML=z;document.getElementById("pg_w_ad").innerHTML=""+pg+"%PG "+vg+"%VG<br>"+water+"%<br>";document.getElementById("ba").style.backgroundColor="#ffffff";/*document.getElementById("table_b").innerHTML=""*/;}
function pgb(ba,bb,a,pg_w_ad)
{var yno=document.getElementById("ba").value;if(yno.match(numExp))
{var yn=yno;}else{var yn="";}
if(yn>zoo)
{var y=zoo;}else{var y=yn;}
var zr=mina(zoo,y);var z=rnum(zr,2);var water=document.getElementById("a").value;var water_s=div(water,2);if(water==0)
{var pgr=y;var vgr=z;}
else
{var pgr=mina(y,water_s);var vgr=mina(z,water_s);}
var pg=rnum(pgr,2);var vg=rnum(vgr,2);initialPG=pg;initialVG=vg;document.getElementById("ba").value=y;document.getElementById("bb").innerHTML=z;document.getElementById("pg_w_ad").innerHTML=""+pg+"%PG "+vg+"%VG<br>"+water+"%<br>";}
function pgc_rec(ca,cb,table_b)
{var yno=document.getElementById("ca").value;if(yno.match(numExp))
{var yn=yno;}else{var yn="";}
if(yn>zoo)
{var y=zoo;}else{var y=yn;}
var zr=mina(zoo,y);var z=rnum(zr,2)
document.getElementById("ca").value=y;document.getElementById("cb").innerHTML=z+"%";/*document.getElementById("table_b").innerHTML=""*/;}
function pgc(ca,cb)
{var yno=document.getElementById("ca").value;if(yno.match(numExp))
{var yn=yno;}else{var yn="";}
if(yn>zoo)
{var y=zoo;}else{var y=yn;}
var zr=mina(zoo,y);var z=rnum(zr,2)
document.getElementById("ca").value=y;document.getElementById("cb").innerHTML=z+"%";}
function pgd_rec(da,db,table_b)
{var yno=document.getElementById("da").value;if(yno.match(numExp))
{var yn=yno;}else{var yn="";}
if(yn>zoo)
{var y=zoo;}else{var y=yn;}
var zr=mina(zoo,y);var z=rnum(zr,2)
document.getElementById("da").value=y;document.getElementById("db").innerHTML=z+"%";/*document.getElementById("table_b").innerHTML=""*/;}
function pgd(da,db)
{var yno=document.getElementById("da").value;if(yno.match(numExp))
{var yn=yno;}else{var yn="";}
if(yn>zoo)
{var y=zoo;}else{var y=yn;}
var zr=mina(zoo,y);var z=rnum(zr,2)
document.getElementById("da").value=y;document.getElementById("db").innerHTML=z+"%";}
function pge_rec(ea,eb,table_b)
{var yno=document.getElementById("ea").value;if(yno.match(numExp))
{var yn=yno;}else{var yn="";}
if(yn>zoo)
{var y=zoo;}else{var y=yn;}
var zr=mina(zoo,y);var z=rnum(zr,2)
document.getElementById("ea").value=y;document.getElementById("eb").innerHTML=z+"%";/*document.getElementById("table_b").innerHTML=""*/;}
function pge(ea,eb)
{var yno=document.getElementById("ea").value;if(yno.match(numExp))
{var yn=yno;}else{var yn="";}
if(yn>zoo)
{var y=zoo;}else{var y=yn;}
var zr=mina(zoo,y);var z=rnum(zr,2)
document.getElementById("ea").value=y;document.getElementById("eb").innerHTML=z+"%";}
function pgfx_rec(fa,fb,table_b)
{var yno=document.getElementById("fa").value;if(yno.match(numExp))
{var yn=yno;}else{var yn="";}
if(yn>zoo)
{var y=zoo;}else{var y=yn;}
var zr=mina(zoo,y);var z=rnum(zr,2)
document.getElementById("fa").value=y;document.getElementById("fb").innerHTML=z+"%";/*document.getElementById("table_b").innerHTML=""*/;}
function pgf(fa,fb)
{var yno=document.getElementById("fa").value;if(yno.match(numExp))
{var yn=yno;}else{var yn="";}
if(yn>zoo)
{var y=zoo;}else{var y=yn;}
var zr=mina(zoo,y);var z=rnum(zr,2)
document.getElementById("fa").value=y;document.getElementById("fb").innerHTML=z+"%";}
function pgg_rec(ga,gb,table_b)
{var yno=document.getElementById("ga").value;if(yno.match(numExp))
{var yn=yno;}else{var yn="";}
if(yn>zoo)
{var y=zoo;}else{var y=yn;}
var zr=mina(zoo,y);var z=rnum(zr,2)
document.getElementById("ga").value=y;document.getElementById("gb").innerHTML=z+"%";/*document.getElementById("table_b").innerHTML=""*/;}
function pgg(ga,gb)
{var yno=document.getElementById("ga").value;if(yno.match(numExp))
{var yn=yno;}else{var yn="";}
if(yn>zoo)
{var y=zoo;}else{var y=yn;}
var zr=mina(zoo,y);var z=rnum(zr,2)
document.getElementById("ga").value=y;document.getElementById("gb").innerHTML=z+"%";}
function pgh_rec(ha,hb,table_b)
{var yno=document.getElementById("ha").value;if(yno.match(numExp))
{var yn=yno;}else{var yn="";}
if(yn>zoo)
{var y=zoo;}else{var y=yn;}
var zr=mina(zoo,y);var z=rnum(zr,2)
document.getElementById("ha").value=y;document.getElementById("hb").innerHTML=z+"%";/*document.getElementById("table_b").innerHTML=""*/;}
function pgh(ha,hb)
{var yno=document.getElementById("ha").value;if(yno.match(numExp))
{var yn=yno;}else{var yn="";}
if(yn>zoo)
{var y=zoo;}else{var y=yn;}
var zr=mina(zoo,y);var z=rnum(zr,2)
document.getElementById("ha").value=y;
//document.getElementById("hb").innerHTML=z+"%";
}
function fix_one(a_one,table_b)
{var yz=document.getElementById("a_one").value;if(yz.match(numExp))
{var y=yz;}else{var y="";}
document.getElementById("a_one").value=y;
doFormMath();
///*document.getElementById("table_b").innerHTML=""*/;
}
function fix_two(a_two,table_b)
{var yz=document.getElementById("a_two").value;if(yz.match(numExp))
{var y=yz;}else{var y="";}
document.getElementById("a_two").value=y;document.getElementById("a_two").style.backgroundColor="#ffffff";
doFormMath();
///*document.getElementById("table_b").innerHTML=""*/;
}
function fix_three(a_three,table_b)
{var yz=document.getElementById("a_three").value;if(yz.match(numExp))
{var y=yz;}else{var y="";}
document.getElementById("a_three").value=y;
doFormMath();
///*document.getElementById("table_b").innerHTML=""*/;
}
function chk_nic(a_two,amount_nic,nic_ha,nic_ha_l,nic_ha_r,nic_hb){var nic_lev=document.getElementById("a_two").value;if(nic_lev>36){var a="<font color=\"#ff0000\">Target Nicotine Too High!</font>";var b="*";var c="* * * DANGER * * *";var d="*";var e="Target Nicotine Level is "+nic_lev+"mg \"Extremely High!\"<br><font color=\"#000000\" size=\"4\">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</font>";}else if(nic_lev>24){var a="<font color=\"#cc0000\">Target Nicotine</font> + PG%";var b="*";var c="* * * Warning * * *";var d="*";var e="Target Nicotine Level is "+nic_lev+"mg \"Extra High!\"<br><font color=\"#000000\" size=\"4\">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</font>";}else{var a="Target Nicotine + PG%";var b="";var c="";var d="";var e="";}
document.getElementById("amount_nic").innerHTML=a;document.getElementById("nic_ha_l").innerHTML=b;document.getElementById("nic_ha").innerHTML=c;document.getElementById("nic_ha_r").innerHTML=d;document.getElementById("nic_hb").innerHTML=e;}
function chk_amount(a_three,amount_make,inonea,intwoa,inonear,inoneal){var y=document.getElementById("a_three").value;if(y==0){var a="<font color=\"#ff0000\">Enter Amount To Make</font>";var b="*";var c="Amount To Make = 0";var d="*";var e="You Must Enter An Amount To Make<br>To Make Calculator To Work!<br><font color=\"#000000\" size=\"4\">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</font>";}else{var a="Amount To Make";var b="";var c="";var d="";var e="";}
document.getElementById("amount_make").innerHTML=a;document.getElementById("inonear").innerHTML=b;document.getElementById("inonea").innerHTML=c;document.getElementById("inoneal").innerHTML=d;document.getElementById("intwoa").innerHTML=e;}
function add(a,b,c,d,e,f,g,tota,totb,toar,toal,table_b,fl_a)
{var ar=document.getElementById("a").value;var br=document.getElementById("b").value;var cr=document.getElementById("c").value;var dr=document.getElementById("d").value;var er=document.getElementById("e").value;var fr=document.getElementById("f").value;var gr=document.getElementById("g").value;if(ar.match(numExp))
{var ya=ar;}else{var ya="";}
if(ya>zoo)
{var as=zoo;}else{var as=ya;}
document.getElementById("a").value=as;if(br.match(numExp))
{var yb=br;}else{var yb="";}
if(yb>zoo)
{var bs=zoo;}else{var bs=yb;}
document.getElementById("b").value=bs;if(cr.match(numExp))
{var yc=cr;}else{var yc="";}
if(yc>zoo)
{var cs=zoo;}else{var cs=yc;}
document.getElementById("c").value=cs;if(dr.match(numExp))
{var yd=dr;}else{var yd="";}
if(yd>zoo)
{var ds=zoo;}else{var ds=yd;}
document.getElementById("d").value=ds;if(er.match(numExp))
{var ye=er;}else{var ye="";}
if(ye>zoo)
{var es=zoo;}else{var es=ye;}
document.getElementById("e").value=es;if(fr.match(numExp))
{var yf=fr;}else{var yf="";}
if(yf>zoo)
{var fs=zoo;}else{var fs=yf;}
document.getElementById("f").value=fs;if(gr.match(numExp))
{var yg=gr;}else{var yg="";}
if(yg>zoo)
{var gs=zoo;}else{var gs=yg;}
document.getElementById("g").value=gs;var az=rnum(as,2);var bz=rnum(bs,2);var cz=rnum(cs,2);var dz=rnum(ds,2);var ez=rnum(es,2);var fz=rnum(fs,2);var gz=rnum(gs,2);var y=p_sev(az,bz,cz,dz,ez,fz,gz);var geta=document.getElementById("fl_a").value;if(y>zoo)
{var a="*";var b="<font size=\"4\">"+geta+" + Flavor's Percent's = "+y+"%<br>Total Can Not Be Over 100%</font>";var c="*";var d="<font color=\"#0000ff\" size=\"4\">You Must Lower "+geta+" + Flavor's Percent's<br>To Make Calculator To Work!</font><br><font color=\"#000000\" size=\"4\">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</font>";}
else if(y>30)
{var a="*";var b="* * * Warning * * *";var c="*";var d=geta+" + Flavor's Percent's = "+y+"% \"Very High!\"<br><font color=\"#000000\" size=\"4\">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</font>";}
else
{var a="";var b="";var c="";var d="";}
document.getElementById("toar").innerHTML=a;document.getElementById("tota").innerHTML=b;document.getElementById("toal").innerHTML=c;document.getElementById("totb").innerHTML=d;/*document.getElementById("table_b").innerHTML=""*/;}
function drops(drp,table_b){var y=document.getElementById("drp").value;if(y.match(numExp))
{var z=y;}
else
{var z="";}
//document.getElementById("drp").value=z;/*document.getElementById("table_b").innerHTML=""*/;
}

function doFormMath(){
	/*GET TOTAL AMOUNT OF NICOTINE LIQUID NEEDED, ALSO PRODUCES THE RESULTING AMOUNT OF LIQUID LEFT.*/
	baseNic=document.getElementById("a_one").value;
	targetNic=document.getElementById("a_two").value;
	totalAmount=document.getElementById("a_three").value;
	waterPerc=document.getElementById("a").value;
	
	desiredPG=document.getElementById("ba").value;
	if(desiredPG < 0){desiredPG=0};
	desiredVG=document.getElementById("bb").innerHTML;
	desiredVG=Number(desiredVG);
	if(desiredVG < 0){desiredVG=0};
	air.trace('USER ENTERED desiredPG ='+desiredPG);
	air.trace('USER ENTERED desiredVG ='+desiredVG);
	nicotinePercentPG=document.getElementById("aa").value;
	nicotinePercentVG=document.getElementById("ab").innerHTML;
	nicotinePercentVG=nicotinePercentVG.replace(/[^a-zA-Z 0-9]+/g,'');
	nicotinePercentVG=Number(nicotinePercentVG);
	air.trace('USER ENTERED Nicotine PG PERCENTAGE ='+nicotinePercentPG);
	air.trace('USER ENTERED Nicotine VG PERCENTAGE ='+nicotinePercentVG);
	currentRecipeName=document.getElementById("rec").value;
	
	

	
	air.trace('BASE NICOTINE '+baseNic);
	air.trace('TARGET NICOTINE '+targetNic);
	air.trace('TOTAL AMOUNT TO MAKE '+totalAmount);
	
	air.trace('*************************************');
	/*Nicotine*/
	nicotineLiquidPercentage = (targetNic/baseNic) * 100 ;
	$("#nicLiquidPerc").html( nicotineLiquidPercentage+' % <span class="div">|</span>');
	air.trace('PERCENTAGE NICOTINE TO USE = '+nicotineLiquidPercentage)+'%';
	nicotineLiquid = Math.round(((targetNic/baseNic) * totalAmount) * 100) / 100; 
	$("#nicLiquidReq").html( nicotineLiquid+' <span class="fml"> ml</span>');
	air.trace('TOTAL NICOTINE TO USE '+nicotineLiquid);
	if(nicotinePercentPG==0){
		nicotineToSubtractPG = 0;
	}else{
		nicotineToSubtractPG= (nicotineLiquidPercentage/nicotinePercentPG)*100;
	}
	if(nicotinePercentVG==0){
		nicotineToSubtractVG = 0;
	}else{
		nicotineToSubtractVG= (nicotineLiquidPercentage/nicotinePercentVG)*100 
	}
	air.trace('Nicotine to subtract from PG percentage= '+nicotineToSubtractPG+'%');
	air.trace('Nicotine to subtract from VG percentage= '+nicotineToSubtractVG+'%');
	

	/*CONVERT TO DROPS*/
	nicotineLiquidDrops=nicotineLiquid*20; 
	$("#nicLiquidReqDrops").html( nicotineLiquidDrops+' <span class="fdrp"> drp</span>');
		totalBottleDrops = nicotineLiquidDrops;
	totalAmountLeft = totalAmount-nicotineLiquid;
/*
totalPG;
totalVG;*/

	
	//decimal to percent
	// function convertToPercent(fraction) {
	// return (fraction * 100) + '%';
	// }
	
	
	
	
	
	/*GET FLAVOR 1*/
	air.trace('*************************************');
	flav1Perc=document.getElementById("b").value;
	air.trace('Flavor 1 USER Defined flavor percentage ='+flav1Perc+'%');
	$("#totalFlav1Perc").html( flav1Perc+' % <span class="div">|</span>');
	flav1pgratio=document.getElementById("ca").value;
	flav1pgratioOrig = flav1pgratio;
	air.trace('FLAVOR1 PG RATIO perecntage = '+flav1pgratio+'%');
	flav1vgratio=document.getElementById("cb").innerHTML;
	flav1vgratio=flav1vgratio.replace(/[^a-zA-Z 0-9]+/g,'');
	flav1vgratio=Number(flav1vgratio);
	flav1vgratioOrig=flav1vgratio;
	air.trace('FLAVOR1 VG RATIO perecntage = '+flav1vgratio+'%');
	if(flav1Perc==0){
		air.trace('USE ZERO OF FLAVOR');
		flav1pgratio = 0;
		flav1vgratio = 0;
	}else{
		flav1pgratio= (flav1Perc*(flav1pgratio/100));
		flav1vgratio= (flav1Perc*(flav1vgratio/100));
	}
	
	air.trace('FLAVOR 1 to subtract from PG percentage= '+flav1pgratio+'%');
	air.trace('FLAVOR 1 to subtract from VG percentage= '+flav1vgratio+'%');
	
	totalflav1 = Math.round(((flav1Perc/100)*totalAmount)* 1000)/1000;
	air.trace('Flavor 1 ml ='+totalflav1);
	
	flav1pgml= ((flav1pgratio/100)*totalflav1);//*flav1pgratio;
	flav1vgml= ((flav1vgratio/100)*totalflav1);//*flav1vgratio;
	air.trace('Flavor 1 PG ml to subtract ='+flav1pgml);
	air.trace('Flavor 1 VG ml to subtract ='+flav1vgml);
	totalAmountLeft = totalAmountLeft - totalflav1;
	//subtractFromPg =  (totalflav1/100)*totalAmount;
	

	$("#totalFlav1Req").html(totalflav1+'<span class="fml"> ml</span>');
	$("#totalFlav1Drop").html((totalflav1*20)+'<span class="fdrp"> drp</span>');
	totalBottleDrops = totalBottleDrops + (totalflav1*20);
	/*GET FLAVOR 2*/
	air.trace('*************************************');
	flav2Perc=document.getElementById("c").value;
	air.trace('Flavor USER Defined flavor percentage ='+flav2Perc+'%');
	$("#totalFlav2Perc").html( flav2Perc+' % <span class="div">|</span>');
	flav2pgratio=document.getElementById("da").value;
	flav2pgratioOrig = flav2pgratio;
	flav2vgratio=document.getElementById("db").innerHTML;
	flav2vgratio=flav2vgratio.replace(/[^a-zA-Z 0-9]+/g,'');
	flav2vgratio=Number(flav2vgratio);
	flav2vgratioOrig = flav2vgratio;
	if(flav2Perc==0){
		air.trace('USE ZERO OF FLAVOR');
		flav2pgratio = 0;
		flav2vgratio = 0;
	}else{
		flav2pgratio= (flav2Perc*(flav2pgratio/100));
		flav2vgratio= (flav2Perc*(flav2vgratio/100));
	}
	
	air.trace('Flavor 2 to subtract from PG percentage= '+flav2pgratio+'%');
	air.trace('Flavor 2 to subtract from VG percentage= '+flav2vgratio+'%');
	
	totalflav2 = Math.round(((flav2Perc/100)*totalAmount)* 1000)/1000;
	air.trace('Flavor 2 ml ='+totalflav2);
	
	flav2pgml= ((flav2pgratioOrig/100)*totalflav2);//*flav2pgratio;
	flav2vgml= ((flav2vgratioOrig/100)*totalflav2);//*flav2vgratio;
	air.trace('Flavor 2 PG ml to subtract ='+flav2pgml);
	air.trace('Flavor 2 VG ml to subtract ='+flav2vgml);
	totalAmountLeft = totalAmountLeft - totalflav2;
	//subtractFromPg =  (totalflav1/100)*totalAmount;
	

	$("#totalFlav2Req").html( totalflav2+' <span class="fml"> ml</span>');
	$("#totalFlav2Drop").html((totalflav2*20)+'<span class="fdrp"> drp</span>');
	totalBottleDrops = totalBottleDrops + (totalflav2*20);
	/*GET FLAVOR 3*/
	air.trace('*************************************');
	flav3Perc=document.getElementById("d").value;
	air.trace('Flavor USER Defined flavor percentage ='+flav3Perc+'%');
	$("#totalFlav3Perc").html( flav3Perc+' % <span class="div">|</span>');
	flav3pgratio=document.getElementById("ea").value;
	flav3pgratioOrig = flav3pgratio;
	flav3vgratio=document.getElementById("eb").innerHTML;
	flav3vgratio=flav3vgratio.replace(/[^a-zA-Z 0-9]+/g,'');
	flav3vgratio=Number(flav3vgratio);
	flav3vgratioOrig = flav3vgratio;
	if(flav3Perc==0){
		air.trace('USE ZERO OF FLAVOR');
		flav3pgratio = 0;
		flav3vgratio = 0;
	}else{
		flav3pgratio= (flav3Perc*(flav3pgratio/100));
		flav3vgratio= (flav3Perc*(flav3vgratio/100));
	}
	
	air.trace('Flavor 3 to subtract from PG percentage= '+flav3pgratio+'%');
	air.trace('Flavor 3 to subtract from VG percentage= '+flav3vgratio+'%');
	
	totalflav3 = Math.round(((flav3Perc/100)*totalAmount)* 1000)/1000;
	air.trace('Flavor 3 ml ='+totalflav3);
	
	flav3pgml= ((flav3pgratioOrig/100)*totalflav3);//*flav3pgratio;
	flav3vgml= ((flav3vgratioOrig/100)*totalflav3);//*flav3vgratio;
	air.trace('Flavor 3 PG ml to subtract ='+flav3pgml);
	air.trace('Flavor 3 VG ml to subtract ='+flav3vgml);
	totalAmountLeft = totalAmountLeft - totalflav3;
	$("#totalFlav3Req").html( totalflav3+' <span class="fml"> ml</span>');
	$("#totalFlav3Drop").html((totalflav3*20)+'<span class="fdrp"> drp</span>');
	totalBottleDrops = totalBottleDrops + (totalflav3*20);
	/*GET FLAVOR 4*/
	air.trace('*************************************');
	flav4Perc=document.getElementById("e").value;
	air.trace('Flavor USER Defined flavor percentage ='+flav4Perc+'%');
	$("#totalFlav4Perc").html( flav4Perc+' % <span class="div">|</span>');
	flav4pgratio=document.getElementById("fa").value;
	flav4pgratioOrig = flav4pgratio;
	flav4vgratio=document.getElementById("fb").innerHTML;
	flav4vgratio=flav4vgratio.replace(/[^a-zA-Z 0-9]+/g,'');
	flav4vgratio=Number(flav4vgratio);
	flav4vgratioOrig = flav4vgratio;
	if(flav4Perc==0){
		air.trace('USE ZERO OF FLAVOR');
		flav4pgratio = 0;
		flav4vgratio = 0;
	}else{
		flav4pgratio= (flav4Perc*(flav4pgratio/100));
		flav4vgratio= (flav4Perc*(flav4vgratio/100));
	}
	
	air.trace('Flavor 4 to subtract from PG percentage= '+flav4pgratio+'%');
	air.trace('Flavor 4 to subtract from VG percentage= '+flav4vgratio+'%');
	
	totalflav4 = Math.round(((flav4Perc/100)*totalAmount)* 1000)/1000;
	air.trace('Flavor 4 ml ='+totalflav4);
	
	flav4pgml= ((flav4pgratioOrig/100)*totalflav4);//*flav4pgratio;
	flav4vgml= ((flav4vgratioOrig/100)*totalflav4);//*flav4vgratio;
	air.trace('Flavor 4 PG ml to subtract ='+flav4pgml);
	air.trace('Flavor 4 VG ml to subtract ='+flav4vgml);
	totalAmountLeft = totalAmountLeft - totalflav4;
	$("#totalFlav4Req").html( totalflav4+' <span class="fml"> ml</span>');
	$("#totalFlav4Drop").html((totalflav4*20)+'<span class="fdrp"> drp</span>');
	totalBottleDrops = totalBottleDrops + (totalflav4*20);
	/*GET FLAVOR 5*/
	air.trace('*************************************');
	flav5Perc=document.getElementById("f").value;
	air.trace('Flavor USER Defined flavor percentage ='+flav5Perc+'%');
	$("#totalFlav5Perc").html( flav5Perc+' % <span class="div">|</span>');
	flav5pgratio=document.getElementById("ga").value;
	flav5pgratioOrig=flav5pgratio;
	flav5vgratio=document.getElementById("gb").innerHTML;
	flav5vgratio=flav5vgratio.replace(/[^a-zA-Z 0-9]+/g,'');
	flav5vgratio=Number(flav5vgratio);
	flav5vgratioOrig=flav5vgratio;
	if(flav5Perc==0){
		air.trace('USE ZERO OF FLAVOR');
		flav5pgratio = 0;
		flav5vgratio = 0;
	}else{
		flav5pgratio= (flav5Perc*(flav5pgratio/100));
		flav5vgratio= (flav5Perc*(flav5vgratio/100));
	}
	
	air.trace('Flavor 5 to subtract from PG percentage= '+flav5pgratio+'%');
	air.trace('Flavor 5 to subtract from VG percentage= '+flav5vgratio+'%');
	
	totalflav5 = Math.round(((flav5Perc/100)*totalAmount)* 1000)/1000;
	air.trace('Flavor 5 ml ='+totalflav5);
	
	flav5pgml= ((flav5pgratioOrig/100)*totalflav5);//*flav5pgratio;
	flav5vgml= ((flav5vgratioOrig/100)*totalflav5);//*flav5vgratio;
	air.trace('Flavor 5 PG ml to subtract ='+flav5pgml);
	air.trace('Flavor 5 VG ml to subtract ='+flav5vgml);
	totalAmountLeft = totalAmountLeft - totalflav5;
	$("#totalFlav5Req").html( totalflav5+' <span class="fml"> ml</span>');
	$("#totalFlav5Drop").html((totalflav5*20)+'<span class="fdrp"> drp</span>');
	totalBottleDrops = totalBottleDrops + (totalflav5*20);
	/*GET FLAVOR 6*/
	air.trace('*************************************');
	flav6Perc=document.getElementById("g").value;
	air.trace('Flavor USER Defined flavor percentage ='+flav6Perc+'%');
	$("#totalFlav6Perc").html( flav6Perc+' % <span class="div">|</span>');
	flav6pgratio=document.getElementById("ha").value;
	flav6pgratioOrig=flav6pgratio;
	flav6vgratio=document.getElementById("hb").innerHTML;
	flav6vgratio=flav6vgratio.replace(/[^a-zA-Z 0-9]+/g,'');
	flav6vgratio=Number(flav6vgratio);
	flav6vgratioOrig = flav6vgratio;
	if(flav6Perc==0){
		air.trace('USE ZERO OF FLAVOR');
		flav6pgratio = 0;
		flav6vgratio = 0;
	}else{
		flav6pgratio= (flav6Perc*(flav6pgratio/100));
		flav6vgratio= (flav6Perc*(flav6vgratio/100));
	}
	
	air.trace('Flavor 6 to subtract from PG percentage= '+flav6pgratio+'%');
	air.trace('Flavor 6 to subtract from VG percentage= '+flav6vgratio+'%');
	
	totalflav6 = Math.round(((flav6Perc/100)*totalAmount)* 1000)/1000;
	air.trace('Flavor 6 ml ='+totalflav6);
	
	flav6pgml= ((flav6pgratioOrig/100)*totalflav6);//*flav6pgratio;
	flav6vgml= ((flav6vgratioOrig/100)*totalflav6);//*flav6vgratio;
	air.trace('Flavor 6 PG ml to subtract ='+flav6pgml);
	air.trace('Flavor 6 VG ml to subtract ='+flav6vgml);
	totalAmountLeft = totalAmountLeft - totalflav6;
	$("#totalFlav6Req").html( totalflav6+' <span class="fml"> ml</span>');
	$("#totalFlav6Drop").html((totalflav6*20)+'<span class="fdrp"> drp</span>');
	totalBottleDrops = totalBottleDrops + (totalflav6*20);
	//totalWater=totalWater*.50;
	air.trace('*************************************');
	air.trace('Do PG VG CAl');		
	
	subtractFromPg = flav1pgml+flav2pgml+flav3pgml+flav4pgml+flav5pgml+flav6pgml;
	subtractFromVg = flav1vgml+flav2vgml+flav3vgml+flav4vgml+flav5vgml+flav6vgml;
	air.trace('Subtract from PG amount= '+subtractFromPg);
	air.trace('Subtract from VG amount= '+subtractFromVg);

	subtractFromPgPerc = flav1pgratio+flav2pgratio+flav3pgratio+flav4pgratio+flav5pgratio+flav6pgratio;
	subtractFromVgPerc = flav1vgratio+flav2vgratio+flav3vgratio+flav4vgratio+flav5vgratio+flav6vgratio;
	air.trace('FLAVOR PERCENTAGE Subtract from PG Percentage= '+subtractFromPgPerc+'%');
	air.trace('FLAVOR PERCENTAGE Subtract from VG Percentage= '+subtractFromVgPerc+'%');
	
	initialPG=document.getElementById("ba").value;
	initialVG = Number(document.getElementById("bb").innerHTML);
	air.trace('INITIAL PG Percentage= '+initialPG);
	air.trace('INITIAL VG Percentage= '+initialVG);
	
	/*GET WATER NEEDED*/
	air.trace('*************************************');
	totalWater = Math.round(((waterPerc/100)*totalAmount) * 100) / 100;
	$("#totalWaterPerc").html( waterPerc+' % <span class="div">|</span>');
	air.trace('Water Percentage ='+waterPerc);
	totalAmountLeft = totalAmountLeft - totalWater;
	$("#totalWaterReq").html( totalWater+'<span class="fml"> ml</span>');
	$("#totalWaterDrop").html( (totalWater*20)+'<span class="sdrp"> drp</span>');
	totalBottleDrops = totalBottleDrops + (totalWater*20);
	if(desiredPG==0){
		totalWaterPG=0;
		initialPG = 0;
		totalPG = 0;
	}else{
		if(desiredVG==0){
			totalWaterPG=waterPerc;//(desiredPG/100);
		}else{totalWaterPG=waterPerc* .50;}
		air.trace('water percentagePG= '+totalWaterPG);
		air.trace('TOTAL WATER TO SUBTRACT FROM PG percentage ='+totalWaterPG+'% and TOTAL NICOTINE TO SUBTRACT percentage = '+nicotineToSubtractPG+'%');
		initialPG = initialPG - totalWaterPG - nicotineToSubtractPG - subtractFromPgPerc; 		
		air.trace('PG Percentage AFTER WATER & NICOTINE REMOVED= '+ initialPG+'%' );
		totalPG = (initialPG/100)* totalAmount;
		air.trace('PG total in ml= '+totalPG+'ml');
	}
	if(desiredVG==0){
		totalWaterVG=0;
		initialVG = 0 ;
		totalVG = 0;
	}else{
		if(desiredPG==0){
			totalWaterVG=waterPerc;//(desiredPG/100);
		}else{totalWaterVG=waterPerc* .50;}
		air.trace('water percentageVG= '+totalWaterVG);
		air.trace('TOTAL WATER TO SUBTRACT FROM VG percentage ='+totalWaterVG+'% and TOTAL NICOTINE TO SUBTRACT percentage = '+nicotineToSubtractVG+'%');
		initialVG = initialVG - totalWaterVG -nicotineToSubtractVG - subtractFromVgPerc; 
		air.trace('VG Percentage AFTER WATER & NICOTINE REMOVED= '+ initialVG+'%' );
		totalVG = (initialVG/100)* totalAmount;
		air.trace('VG total in ml= '+totalVG+'ml');
	}
	$("#totalPGPut").html( Math.round(totalPG*10000)/10000+' <span class="fml"> ml</span>');
	// $("#totalPGPut").html( totalPG+' <span class="sml"> ml</span>');
	$("#totalPGPDrop").html( Math.round((totalPG*20)*100)/100+'<span class="sdrp"> drp</span>');
	totalBottleDrops = totalBottleDrops + (totalPG*20);
	$("#totalVGPut").html( Math.round(totalVG*10000)/10000+' <span class="fml"> ml</span>');
	$("#totalVGPDrop").html( Math.round((totalVG*20)*100)/100+'<span class="sdrp"> drp</span>');
	totalBottleDrops = totalBottleDrops + (totalVG*20);
	$("#totalPGPercPut").html( initialPG+'% <span class="div">|</span>');
	$("#totalVGPercPut").html( initialVG+'% <span class="div">|</span>');
	$("#addedDropTotal").html( nicotineLiquidDrops+(Math.round((totalPG*20)*100)/100)+(Math.round((totalVG*20)*100)/100)+(totalWater*20)+(totalflav6*20)+(totalflav5*20)+(totalflav4*20)+(totalflav3*20)+(totalflav2*20)+(totalflav1*20)+' drp');
	
	air.trace('INITIAL PG VOLUME '+initialPG);
	air.trace('INITIAL VG VOLUME '+initialVG);
	addedTotalsOfML = nicotineLiquid + (Math.round(totalPG*10000)/10000) + (Math.round(totalVG*10000)/10000) + totalWater + totalflav1 + totalflav2 + totalflav3 + totalflav4 + totalflav5 + totalflav6;
	$("#addedMlTotal").html( Math.round(addedTotalsOfML)+'ml');
	
	/* COST CALCULATOR*/
	nicotineMon = document.getElementById("a_mon").value;
	nicotineMl = document.getElementById("a_ml").value;
	nicotineCostPerMl = nicotineMon/nicotineMl;
	nicotineBottleCost = nicotineCostPerMl * nicotineLiquid ;
	$("#nicLiquidCost").html('$ '+(Math.round(nicotineBottleCost*100)/100));
	totalBottleCost = Math.round(nicotineBottleCost*100)/100;
	pgMon  = document.getElementById("b_mon").value;;
	pgMl = document.getElementById("b_ml").value;
	pgCostPerMl = pgMon/pgMl;
	pgBottleCost = pgCostPerMl * (Math.round(totalPG*10000)/10000);
	$("#totalPGCost").html('$ '+Math.round(pgBottleCost*100)/100);
	totalBottleCost = totalBottleCost + Math.round(pgBottleCost*100)/100;
	vgMon = document.getElementById("c_mon").value;
	vgMl = document.getElementById("c_ml").value;
	vgCostPerMl = vgMon/vgMl;
	vgBottleCost = vgCostPerMl * (Math.round(totalVG*10000)/10000);
	$("#totalVGCost").html('$ '+Math.round(vgBottleCost*100)/100);
	totalBottleCost = totalBottleCost + Math.round(vgBottleCost*100)/100;
	waterMon = document.getElementById("d_mon").value;
	waterMl = document.getElementById("d_ml").value;
	if(waterMon==0 || waterMl==0){
		waterCostPerMl= 0;
		waterBottleCost = 0;
	}else{
		waterCostPerMl= waterMon/waterMl;
		waterBottleCost = waterCostPerMl * totalWater;
		totalBottleCost = totalBottleCost + waterBottleCost;
	}
	$("#totalWaterCost").html('$ '+Math.round(waterBottleCost*100)/100);
	flav1Mon = document.getElementById("e_mon").value;
	flav1Ml = document.getElementById("e_ml").value;
	if(flav1Mon==0 || flav1Ml==0){
		flav1CostPerMl = 0;
		flav1BottleCost = 0;
	}else{
		air.trace('Flavor 1 Money = '+flav1Mon);
		air.trace('Flavor 1 Ml = '+flav1Ml);
		flav1CostPerMl = flav1Mon/flav1Ml;
		air.trace('Flavor 1 cost per ML ='+flav1CostPerMl);
		flav1BottleCost = flav1CostPerMl * totalflav1;
		totalBottleCost = totalBottleCost + flav1BottleCost;
	}
	$("#totalflav1Cost").html('$ '+Math.round(flav1BottleCost*100)/100);
	flav2Mon = document.getElementById("f_mon").value;
	flav2Ml = document.getElementById("f_ml").value;
	if(flav2Mon==0 || flav2Ml==0){
		flav2CostPerMl = 0;
		flav2BottleCost = 0;
	}else{
		flav2CostPerMl = flav2Mon/flav2Ml;
		flav2BottleCost = flav2CostPerMl * totalflav2;
		totalBottleCost = totalBottleCost + flav2BottleCost;
	}
	$("#totalflav2Cost").html('$ '+Math.round(flav2BottleCost*100)/100);
	flav3Mon = document.getElementById("g_mon").value;
	flav3Ml = document.getElementById("g_ml").value;
	if(flav3Mon==0 || flav3Ml==0){
		flav3CostPerMl = 0;
		flav3BottleCost = 0;
	}else{
		flav3CostPerMl = flav3Mon/flav3Ml;
		flav3BottleCost = flav3CostPerMl * totalflav3;
		totalBottleCost = totalBottleCost + flav3BottleCost;
	}
	$("#totalflav3Cost").html('$ '+Math.round(flav3BottleCost*100)/100);
	flav4Mon = document.getElementById("h_mon").value;
	flav4Ml = document.getElementById("h_ml").value;
	if(flav4Mon==0 || flav4Ml==0){
		flav4CostPerMl = 0;
		flav4BottleCost = 0;
	}else{
		flav4CostPerMl = flav4Mon/flav4Ml;
		flav4BottleCost = flav4CostPerMl * totalflav4;
		totalBottleCost = totalBottleCost + flav4BottleCost;
	}
	$("#totalflav4Cost").html('$ '+Math.round(flav4BottleCost*100)/100);
	flav5Mon = document.getElementById("i_mon").value;
	flav5Ml = document.getElementById("i_ml").value;
	if(flav5Mon==0 || flav5Ml==0){
		flav5CostPerMl = 0;
		flav5BottleCost = 0;
	}else{
		flav5CostPerMl = flav5Mon/flav5Ml;
		flav5BottleCost = flav5CostPerMl * totalflav5;
		totalBottleCost = totalBottleCost + flav5BottleCost;
	}
	$("#totalflav5Cost").html('$ '+Math.round(flav5BottleCost*100)/100);
	flav6Mon = document.getElementById("j_mon").value;
	flav6Ml = document.getElementById("j_ml").value;
	if(flav6Mon==0 || flav6Ml==0){
		flav6CostPerMl = 0;
		flav6BottleCost = 0;
	}else{
		flav6CostPerMl = flav6Mon/flav6Ml;
		flav6BottleCost = flav6CostPerMl * totalflav6;
		totalBottleCost = totalBottleCost + flav6BottleCost;
	}
	$("#totalflav6Cost").html('$ '+Math.round(flav6BottleCost*100)/100);
	
	$("#totalsDump").html(currentRecipeName+' = '+targetNic+'mg - '+desiredPG+'%PG - '+desiredVG+"%VG - "+totalAmount+"ml - Total Cost $"+(Math.round(totalBottleCost*100)/100));
	//$("#rec").val('');
	//$("#rec").val(targetNic+'mg - '+desiredPG+'%PG - '+desiredVG+"%VG - "+totalAmount+"ml - Total Cost $"+(Math.round(totalBottleCost*100)/100));
	totalBottleCostPerML = (Math.round(totalBottleCost*100)/100)/totalAmount;
	
	$("#totalCPML").html('$ '+Math.round(totalBottleCostPerML*100)/100);
}

function CreateMenus() {
  var menu = air.ui.Menu.createFromXML("recipieMenu.xml");
  air.ui.Menu.setAsMenu(menu);
}

			fileDate = new Date();
			//var statustext.innerText=null;
//DB WORK

			var conn = null;
			var createStmt = null;
			var insertStmt = null;
			var insertStmt2 = null;
			var selectStmt = null;
			
			var insert1Complete = false;
			var insert2Complete = false;
			var statustext = null;
			function init()
			{
				conn = new air.SQLConnection();
				
				conn.addEventListener(air.SQLEvent.OPEN, openSuccess);
				conn.addEventListener(air.SQLErrorEvent.ERROR, openFailure);
				
				air.trace("Creating and opening database");
				var folder = air.File.applicationStorageDirectory;
				var dbFile = air.File.applicationStorageDirectory.resolvePath("recipies.db");
				conn.openAsync(dbFile);

			}
			
			function openSuccess(event)
			{
				conn.removeEventListener(air.SQLEvent.OPEN, openSuccess);
				conn.removeEventListener(air.SQLErrorEvent.ERROR, openFailure);
				
				createTable();
			}
			
			function openFailure(event)
			{
				conn.removeEventListener(air.SQLEvent.OPEN, openSuccess);
				conn.removeEventListener(air.SQLErrorEvent.ERROR, openFailure);
				
				air.trace("Error opening database");

				air.trace("event.error.code: "+event.error.code);
				air.trace("event.error.message:" + event.error.message);
			}
			
			
			function createTable()
			{
				air.trace("Creating table");
				
				createStmt = new air.SQLStatement();
				
				createStmt.sqlConnection = conn;
				var sql = "";
				var sql="CREATE TABLE listings (recipieNumber INTEGER PRIMARY KEY, dateCreated TEXT, recipieName TEXT, baseNicotine NUMERIC, baseNicotinePGPerc NUMERIC, targetNicotine NUMERIC, targetNicotinePGPerc NUMERIC, amountToMake NUMERIC, waterAmount NUMERIC, flavor1Perc NUMERIC, flavor1PGPerc NUMERIC, flavor2Perc NUMERIC, flavor2PGPerc NUMERIC, flavor3Perc NUMERIC, flavor3PGPerc NUMERIC, flavor4Perc NUMERIC, fllavor4PGPerc NUMERIC, flavor5Perc NUMERIC, flavor5PGPerc NUMERIC, flavor6Perc NUMERIC, flavor6PGPerc NUMERIC, a_mon NUMERIC, a_ml NUMERIC, b_mon NUMERIC, b_ml NUMERIC, c_mon NUMERIC, c_ml NUMERIC, d_mon NUMERIC, d_ml NUMERIC, e_mon NUMERIC, e_ml NUMERIC, f_mon NUMERIC, f_ml NUMERIC, g_mon NUMERIC, g_ml NUMERIC, h_mon NUMERIC, h_ml NUMERIC, i_mon NUMERIC, i_ml NUMERIC, j_mon NUMERIC, j_ml NUMERIC);";
				
				createStmt.text = sql;
				
				createStmt.addEventListener(air.SQLEvent.RESULT, createResult);
				createStmt.addEventListener(air.SQLErrorEvent.ERROR, createError);
				
				createStmt.execute();
			}
			
			function createResult(event)
			{
				createStmt.removeEventListener(air.SQLEvent.RESULT, createResult);
				createStmt.removeEventListener(air.SQLErrorEvent.ERROR, createError);
				
				//addData();
			}

			function createError(event)
			{
				air.trace("Error creating table");
				
				createStmt.removeEventListener(air.SQLEvent.RESULT, createResult);
				createStmt.removeEventListener(air.SQLErrorEvent.ERROR, createError);
				
				air.trace("CREATE TABLE error: "+ event.error);
				air.trace("event.error.code: "+ event.error.code);
				air.trace("event.error.message: "+ event.error.message);
			}
			
			
			function saveRecipie()
			{
				air.trace("Adding data to table");
				
				insertStmt = new air.SQLStatement();
				insertStmt.sqlConnection = conn;
				var sql = "INSERT INTO listings (recipieName,baseNicotine , baseNicotinePGPerc , targetNicotine , targetNicotinePGPerc , amountToMake , waterAmount , flavor1Perc , flavor1PGPerc , flavor2Perc , flavor2PGPerc , flavor3Perc , flavor3PGPerc , flavor4Perc , fllavor4PGPerc , flavor5Perc , flavor5PGPerc , flavor6Perc , flavor6PGPerc, a_mon , a_ml , b_mon , b_ml , c_mon , c_ml , d_mon , d_ml , e_mon , e_ml , f_mon , f_ml , g_mon , g_ml , h_mon , h_ml , i_mon , i_ml , j_mon , j_ml )";
				sql  += "VALUES ('"+currentRecipeName+"',"+baseNic+","+nicotinePercentPG+","+targetNic+","+nicotinePercentPG+","+totalAmount+","+totalWater+","+flav1Perc+","+flav1pgratio+","+flav2Perc+","+flav2pgratio+","+flav3Perc+","+flav3pgratio+","+flav4Perc+","+flav4pgratio+","+flav5Perc+","+flav5pgratio+","+flav6Perc+","+flav6pgratio+","+nicotineMon+","+nicotineMl+","+pgMon+","+pgMl+","+vgMon+","+vgMl+","+waterMon+","+waterMl+","+flav1Mon+","+flav1Ml+","+flav2Mon+","+flav2Ml+","+flav3Mon+","+flav3Ml+","+flav4Mon+","+flav4Ml+","+flav5Mon+","+flav5Ml+","+flav6Mon+","+ flav6Ml+")";  

				insertStmt.text = sql;
				
				insertStmt.addEventListener(air.SQLEvent.RESULT, insertResult);
				insertStmt.addEventListener(air.SQLErrorEvent.ERROR, insertError);
				
				insertStmt.execute();
				
				
			}
			
			function insertResult(event)
			{
				var stmt = event.target;
				stmt.removeEventListener(air.SQLEvent.RESULT, insertResult);
				stmt.removeEventListener(air.SQLErrorEvent.ERROR, insertError);
				
				if (stmt == insertStmt)
				{
					insert1Complete = true;
				}
				else
				{
					insert2Complete = true;
				}
				
				if (insert1Complete && insert2Complete)
				{
					air.trace("Ready to load data");
				
				//	getData();
				}
			}
			
			function insertError(event)
			{
				air.trace("Error inserting data");
				
				insertStmt.removeEventListener(air.SQLEvent.RESULT, insertResult);
				insertStmt.removeEventListener(air.SQLErrorEvent.ERROR, insertError);
				
				air.trace("INSERT error: "+ event.error);
				air.trace("event.error.code: "+ event.error.code);
				air.trace("event.error.message: "+ event.error.message);
			}
			function loadNewRecipieWindow(recipieId){
				selectStmt = new air.SQLStatement();
				selectStmt.sqlConnection = conn;
				air.trace('RECIPIE ID ='+recipieId);
				var sql = "SELECT * FROM listings WHERE recipieNumber ="+recipieId+"";
				selectStmt.text = sql;
				
				selectStmt.addEventListener(air.SQLEvent.RESULT, selectResultRecipie);
				selectStmt.addEventListener(air.SQLErrorEvent.ERROR, selectErrorRecipie);
				
				selectStmt.execute();
			}
			
			function selectResultRecipie(event)
			{
				air.trace("Data loaded");
				
				selectStmt.removeEventListener(air.SQLEvent.RESULT, selectResult);
				selectStmt.removeEventListener(air.SQLErrorEvent.ERROR, selectError);
				
				var result = selectStmt.getResult();
				
				
				var row;
				var cell;
				var recipe =  window.open('','RecipeWindow','width=600,height=600');
   				var html = '<html><head><title>Print Your Recipe</title></head><body><table id="resultsGridWindow" class="tbcal" cellpadding="0"><tr><td>LOADING...</td></tr></table></body></html>';
    			recipe.document.open();
    			recipe.document.write(html);
    			recipe.document.close();
				var tbl = recipe.document.getElementById("resultsGridWindow");
				tbl.innerHTML = "";
				
				var numRows = result.data.length;
				
				for (var i = 0; i < numRows; i++)
				
				
				{
								row = document.createElement("tr");

					
					for (col in result.data[i])
					{
						//if (col == "recipieName"){
							cell = document.createElement("td");
							air.trace('i ='+i);
							if (i%2==0) { 
								cell.setAttribute('style', 'font-size:11px;text-align:right;padding:2px 6px;line-height:15px;background:#e6e6fa;');
							} else { 
								cell.setAttribute('style', 'font-size:11px;text-align:right;padding:2px 6px;line-height:15px;background:#eeeeee;');
							}
							cell.innerText = result.data[i][col];
							row.appendChild(cell);
						//}
					}
					
					tbl.appendChild(row);	
					
				}
					
			}
			
			function selectErrorRecipie(event)
			{
				air.trace("Error loading data");
				
				selectStmt.removeEventListener(air.SQLEvent.RESULT, selectResult);
				selectStmt.removeEventListener(air.SQLErrorEvent.ERROR, selectError);
				
				air.trace("SELECT error:"+ event.error);
				air.trace("event.error.code:"+ event.error.code);
				air.trace("event.error.message:"+ event.error.message);
			}
			
			
			function getData()
			{
				air.trace("Loading data");
				
				selectStmt = new air.SQLStatement();
				selectStmt.sqlConnection = conn;
				var sql = "SELECT recipieNumber, recipieName FROM listings";
				selectStmt.text = sql;
				
				selectStmt.addEventListener(air.SQLEvent.RESULT, selectResult);
				selectStmt.addEventListener(air.SQLErrorEvent.ERROR, selectError);
				
				selectStmt.execute();
			}
			
			function selectResult(event)
			{
				air.trace("Data loaded");
				
				selectStmt.removeEventListener(air.SQLEvent.RESULT, selectResult);
				selectStmt.removeEventListener(air.SQLErrorEvent.ERROR, selectError);
				
				var result = selectStmt.getResult();
				
				
				var row;
				var cell;
				
				var tbl = document.getElementById("resultsGrid");
				tbl.innerHTML = "";
		
				var numRows = result.data.length;
				for (var i = 0; i < numRows; i++)
				{
					//if (i == 0)
					//{
						// add the table header
						//row = document.createElement("tr");
						
						//for (col in result.data[i])
						//{
							//cell = document.createElement("th");
							//cell.innerText = col;
							//row.appendChild(cell)
						//}
						
						///tbl.appendChild(row);
					//}
					
					// iterate over the columns in the result row object
					row = document.createElement("tr");

					for (col in result.data[i])
					{
						if (col == "recipieNumber"){
								air.trace('Value of Column ID  or ITEM ID ='+ result.data[i][col]);
								cell = document.createElement("td");
								air.trace('IS THIS NUMBER ODD OR EVEN  '+result.data[i][col]+'  IS '+i%2);
								if (i%2==0) { 
									cell.setAttribute('style', 'font-size:11px;text-align:right;padding:2px 6px;line-height:15px;background:#e6e6fa;width:100px');
								} else { 
									cell.setAttribute('style', 'font-size:11px;text-align:right;padding:2px 6px;line-height:15px;background:#eeeeee;width:100px');
								}
								row.appendChild(cell);
								var cell2= document.createElement("input");
								cell2.setAttribute('value', 'LOAD');
								cell2.setAttribute('type', 'button');
								cell2.setAttribute('class', 'enter');
								cell2.setAttribute('id', result.data[i][col]);
								
								cell.appendChild(cell2);
								
								cell2= document.createElement("input");
								cell2.setAttribute('value', 'DELTER');
								cell2.setAttribute('type', 'button');
								cell2.setAttribute('class', 'enter');
								cell2.setAttribute('id', result.data[i][col]);
								cell2.setAttribute('onclick', 'deleteRecipie('+result.data[i][col]+')');
								cell.appendChild(cell2);
						}
					}
					for (col in result.data[i])
					{
						if (col == "recipieName"){
							cell = document.createElement("td");
							air.trace('i ='+i);
							if (i%2==0) { 
								cell.setAttribute('style', 'font-size:11px;text-align:right;padding:2px 6px;line-height:15px;background:#e6e6fa;');
							} else { 
								cell.setAttribute('style', 'font-size:11px;text-align:right;padding:2px 6px;line-height:15px;background:#eeeeee;');
							}
							cell.innerText = result.data[i][col];
							row.appendChild(cell);
						}
						
					}
					
					tbl.appendChild(row);
					
					
							
					
						for (col in result.data[i]){
							if (col == "recipieNumber"){
								air.trace('ABOVE FOR LOOP 6');
								var currIDHere = result.data[i][col];
								air.trace('ADDING EVENT FOR ::: #loadButt'+currIDHere);
									$('#'+currIDHere).on("click", function(event) { 
									air.trace('CLICKED'+$(this).attr('id'));
									loadNewRecipieWindow($(this).attr('id'));
								});
							}
						
							
						}
					
				}
			}
			
			function selectError(event)
			{
				air.trace("Error loading data");
				
				selectStmt.removeEventListener(air.SQLEvent.RESULT, selectResult);
				selectStmt.removeEventListener(air.SQLErrorEvent.ERROR, selectError);
				
				air.trace("SELECT error:"+ event.error);
				air.trace("event.error.code:"+ event.error.code);
				air.trace("event.error.message:"+ event.error.message);
			}



			function createTable()
			{
				air.trace("Creating table");
				
				createStmt = new air.SQLStatement();
				
				createStmt.sqlConnection = conn;
				
				var sql = "CREATE TABLE IF NOT EXISTS listings ("
					sql += "listings INTEGER PRIMARY KEY,";
					sql += "dateCreated TEXT, recipieName TEXT, baseNicotine NUMERIC, baseNicotinePGPerc NUMERIC, targetNicotine NUMERIC, targetNicotinePGPerc NUMERIC, amountToMake NUMERIC, waterAmount NUMERIC, flavor1Perc NUMERIC, flavor1PGPerc NUMERIC, flavor2Perc NUMERIC, flavor2PGPerc NUMERIC, flavor3Perc NUMERIC, flavor3PGPerc NUMERIC, flavor4Perc NUMERIC, fllavor4PGPerc NUMERIC, flavor5Perc NUMERIC, flavor5PGPerc NUMERIC, flavor6Perc NUMERIC, flavor6PGPerc NUMERIC, a_mon NUMERIC, a_ml NUMERIC, b_mon NUMERIC, b_ml NUMERIC, c_mon NUMERIC, c_ml NUMERIC, d_mon NUMERIC, d_ml NUMERIC, e_mon NUMERIC, e_ml NUMERIC, f_mon NUMERIC, f_ml NUMERIC, g_mon NUMERIC, g_ml NUMERIC, h_mon NUMERIC, h_ml NUMERIC, i_mon NUMERIC, i_ml NUMERIC, j_mon NUMERIC, j_ml NUMERIC);";
				
				
				createStmt.text = sql;
				
				createStmt.addEventListener(air.SQLEvent.RESULT, createResult);
				createStmt.addEventListener(air.SQLErrorEvent.ERROR, createError);
				
				createStmt.execute();
				air.trace("DONE CREATING TABLE");
			}

			function doPrintAir() 
			{
			    var pjob = new window.runtime.flash.printing.PrintJob;
			    if ( pjob.start() )
			    {
			        var poptions = new window.runtime.flash.printing.PrintJobOptions;
			        poptions.printAsBitmap = true;
			        try
			        {
			            pjob.addPage(window.htmlLoader, null, poptions);
			            pjob.send();
			        }
			        catch (err)
			        {
			            alert("exception: " + err);
			        }
			    }
			    else
			    {
			        alert("PrintJob couldn't start");
			    }
			}
//comment the line below if you do not want to mess with existing
//window.print
window.print = doPrintAir;
$(document).ready(function(){
  //SetupDB();	
 	CreateMenus();
 	
});  