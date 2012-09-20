/*0_jquery.json-2.2.min.js*/

(function($){$.toJSON=function(o)
{if(typeof(JSON)=='object'&&JSON.stringify)
return JSON.stringify(o);var type=typeof(o);if(o===null)
return"null";if(type=="undefined")
return undefined;if(type=="number"||type=="boolean")
return o+"";if(type=="string")
return $.quoteString(o);if(type=='object')
{if(typeof o.toJSON=="function")
return $.toJSON(o.toJSON());if(o.constructor===Date)
{var month=o.getUTCMonth()+1;if(month<10)month='0'+month;var day=o.getUTCDate();if(day<10)day='0'+day;var year=o.getUTCFullYear();var hours=o.getUTCHours();if(hours<10)hours='0'+hours;var minutes=o.getUTCMinutes();if(minutes<10)minutes='0'+minutes;var seconds=o.getUTCSeconds();if(seconds<10)seconds='0'+seconds;var milli=o.getUTCMilliseconds();if(milli<100)milli='0'+milli;if(milli<10)milli='0'+milli;return'"'+year+'-'+month+'-'+day+'T'+
hours+':'+minutes+':'+seconds+'.'+milli+'Z"';}
if(o.constructor===Array)
{var ret=[];for(var i=0;i<o.length;i++)
ret.push($.toJSON(o[i])||"null");return"["+ret.join(",")+"]";}
var pairs=[];for(var k in o){var name;var type=typeof k;if(type=="number")
name='"'+k+'"';else if(type=="string")
name=$.quoteString(k);else
continue;if(typeof o[k]=="function")
continue;var val=$.toJSON(o[k]);pairs.push(name+":"+val);}
return"{"+pairs.join(", ")+"}";}};$.evalJSON=function(src)
{if(typeof(JSON)=='object'&&JSON.parse)
return JSON.parse(src);return eval("("+src+")");};$.secureEvalJSON=function(src)
{if(typeof(JSON)=='object'&&JSON.parse)
return JSON.parse(src);var filtered=src;filtered=filtered.replace(/\\["\\\/bfnrtu]/g,'@');filtered=filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']');filtered=filtered.replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered))
return eval("("+src+")");else
throw new SyntaxError("Error parsing JSON, source is not valid.");};$.quoteString=function(string)
{if(string.match(_escapeable))
{return'"'+string.replace(_escapeable,function(a)
{var c=_meta[a];if(typeof c==='string')return c;c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
return'"'+string+'"';};var _escapeable=/["\\\x00-\x1f\x7f-\x9f]/g;var _meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'};})(jQuery);/*1_jquery.curvycorners.packed.js*/
/****************************************************************
 *                                                              *
 *  JQuery Curvy Corners by Mike Jolley                         *
 *  http://blue-anvil.com                                       *
 *  http://code.google.com/p/jquerycurvycorners/                *
 *  ==========================================================  *
 *                                                              *
 *  Version 2.1.1 (Based on CC 2.1 beta)                          *
 *                                                              *
 *  Original by: Terry Riegel, Cameron Cooke and Tim Hutchison  *
 *  Website: http://www.curvycorners.net                        *
 *                                                              *
 *  This library is free software; you can redistribute         *
 *  it and/or modify it under the terms of the GNU              *
 *  Lesser General Public License as published by the           *
 *  Free Software Foundation; either version 2.1 of the         *
 *  License, or (at your option) any later version.             *
 *                                                              *
 *  This library is distributed in the hope that it will        *
 *  be useful, but WITHOUT ANY WARRANTY; without even the       *
 *  implied warranty of MERCHANTABILITY or FITNESS FOR A        *
 *  PARTICULAR PURPOSE. See the GNU Lesser General Public       *
 *  License for more details.                                   *
 *                                                              *
 *  You should have received a copy of the GNU Lesser           *
 *  General Public License along with this library;             *
 *  Inc., 59 Temple Place, Suite 330, Boston,                   *
 *  MA 02111-1307 USA                                           *
 *                                                              *
 ****************************************************************/
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(17($){17 1w(a){10.3p=a;10.1I=10.1W=10.1H=10.1X=0;10.3Y=10.3r=10.3y=10.3B="";10.2y=2C};1w.1N.2s=17(a,b,c,d){11(!a){10.1I=10.1W=10.1H=10.1X=1i(c);10.3Y=10.3r=10.3y=10.3B=d}1l{3E=a.1y(0)+b.1y(0);10[3E+\'R\']=1i(c);10[3E+\'u\']=d}};1w.1N.1j=17(a){11(/^(t|b)(l|r)(R|u)$/.2S(a))18 10[a];11(/^(t|b)(l|r)2R$/.2S(a)){12 b=a.1y(0)+a.1y(1);18 10[b+\'R\']+10[b+\'u\']}11(/^(t|b)2R?$/.2S(a)){12 c=a.1y(0);c+=10[c+\'2Z\']>10[c+\'34\']?\'l\':\'r\';12 d=10[c+\'R\'];11(a.1U===3&&a.1y(2)===\'u\')d+=10[c=\'u\'];18 d}20 1p 1P(\'67\\\'t 6d 5G \'+a);};1w.1N.41=17(a){11(a!==\'t\'&&a!==\'b\')20 1p 1P("55 54 3m \'t\' 4Y \'b\'");18 1a.69(10[a+\'2Z\']-10[a+\'34\'])};1w.1N.3U=17(a){10.3Y=10.3r=10.3y=10.3B=\'14\';11(\'1R\'1F a)10.1I=a.1R.1b;11(\'1V\'1F a)10.1W=a.1V.1b;11(\'1t\'1F a)10.1H=a.1t.1b;11(\'2f\'1F a)10.1X=a.2f.1b;11(\'2y\'1F a)10.2y=a.2y};1w.1N.4X=17(a){12 b=[\'1R\',\'1V\',\'1t\',\'2f\'];12 c=0;12 i,2u;1D(i 1F b)11(!2U(i)){2u=10[b[i]+\'u\'];11(2u!==\'\'&&2u!==\'14\'){c=1p 1w;1r}}11(!c)c=10;1l{12 d,31,e=6F.5n(a,\'1h\');1D(i 1F b)11(!2U(i)){d=b[i];2u=10[d+\'u\'];31=10[d+\'R\'];11(2u!==\'14\'){12 e=a.1d.1h;a.1d.1h=31+2u;31=a.1d.66;a.1d.1h=e}c[d+\'R\']=31;c[d+\'u\']=\'14\'}a.1d.1h=e}18 c};1w.1N.4W=17(a){11(a!==\'t\'&&a!==\'b\')20 1p 1P("55 54 3m \'t\' 4Y \'b\'");18 10[a+\'2Z\']+10[a+\'34\']};1w.1N.4V=17(a){12 b=0;11(10[a+\'2Z\'])++b;11(10[a+\'34\'])++b;18 b};1w.1N.4U=17(){12 a=[];11(10.1I)a.2L(\'1R\');11(10.1W)a.2L(\'1V\');11(10.1H)a.2L(\'1t\');11(10.1X)a.2L(\'2f\');18 a};11(2T 2X===\'2w\')2X=1p 3c;$.3b.3a=17(2F){12 3I=1L;12 3P,3T,33;2o{3P=(1f.2H.1d.6B!==2w)}2k(36){}2o{3T=(1f.2H.1d.5F!==2w)}2k(36){}2o{33=(1f.2H.1d.4T!==2w)}2k(36){}11(3P||3T||33)3I=2C;11(2F 4S 1w){1n=2F}1l{12 2F=1Y.68({1R:{1b:8},1V:{1b:8},1t:{1b:8},2f:{1b:8},2y:2C},2F);12 1n=1p 1w(10);1n.3U(2F)}17 1c(){10.1x=37[1];10.4R=37[0];12 G=$(10.1x);12 H;10.5S=1p 3c();10.2g=10.2m=10.2x=H=2p;12 I=G.6a();11(G.3d(\'6e\'))20 1p 1P("6f 6k 6z 4P 4N "+10.1x.5e+" 5h.","1P");11(G.13(\'3z\')===\'4M\'){G.13(\'3z\',\'4M-5O\')}11(!I){10.2W=17(){};18}11(37[0]4S 1w){10.19=37[0].4X(10.1x)}1l{10.19=1p 1w(\'\');10.19.3U(10.4R)}12 J=G.13("4L")?G.13("4L"):0;12 K=G.13("4K")?G.13("4K"):0;12 L=G.13("4J")?G.13("4J"):0;12 M=G.13("4E")?G.13("4E"):0;12 N=G.13("6v");12 O=G.13("6A");12 P=G.13("6E");12 Q=G.13("6I");12 R=G.13("5c");12 S=G.13("5f");12 T=G.13("5k");12 U=G.13("5q");12 V=G.13("2D");12 W=G.13("1s");12 X=G.13("1T");12 Y,1e;Y=G.13("4B")?G.13("4B"):0;1e=G.13("4x")?G.13("4x"):0;12 Z=G.13("1O");12 3m=G.13("4v");12 4u=G.13("6u");12 4s=G.13("35");12 4r=G.13("3n");12 6C=G.13("1g");12 2b=1Y.2N.4q>7&&$.2N.4p?G.13("2d"):2p;12 1Z=10.19.1j(\'4o\');12 1t=10.19.1j(\'5p\');12 1C=17(a){11(2T a===\'5t\')18 a;11(2T a!==\'5u\')20 1p 1P(\'5z 5D 5E \'+2T a);12 b=/^[-\\d.]([a-z]+)$/.2O(a);11(b&&b[1]!=\'14\')20 1p 1P(\'5H 5N \'+b[1]);11(2U(a=1i(a)))a=0;18 a};12 4l=17(a){18 a<=0?"0":a+"14"};2o{10.1k=1C(J);10.1Q=1C(K);10.1o=1C(L);10.32=1C(M);10.2n=1c.2i(V);10.4k=1C(3m);10.6c=1C(4u);10.3C=1C(4s);10.3D=1C(4r);10.2c=I;10.2Q=G.6r();10.3G=1c.2i(N);10.3H=1c.2i(O);10.4j=1c.2i(P);10.4h=1c.2i(Q);10.3K=10.1k+"14"+" "+R+" "+10.3G;10.3L=10.1Q+"14"+" "+S+" "+10.3H;10.3q=10.1o+"14"+" "+T+" "+10.4j;10.3o=10.32+"14"+" "+U+" "+10.4h;10.1s=(W!="4g"&&W!="5b")?W:"";10.1T=X}2k(e){}12 28=10.2Q;12 24=I;11($.2N.4f){Y=1C(Y);1e=1C(1e);11(Y){12 t=24+10.1o+10.32;11(Y>t)Y=t;Y=(t/Y*25)+\'%\'}11(1e){12 t=28+10.1k+10.1Q;11(1e>t)1e=t;1e=(t/1e*25)+\'%\'}}10.2Y=1f.26("2q");11(2b)10.2Y.1d.2d=2b;3g(10.1x.4e)10.2Y.1v(10.1x.3Z(10.1x.4e));11(Z!="2a")G.13("1O","4d");10.1x.1d.4c=\'0\';10.1x.1d.1g=10.1x.1d.1s=\'4g\';10.1x.1d.2D=\'2z\';10.1x.1d.1z=(24+10.1o+10.32)+\'14\';10.1x.1d.1E=(28+10.1k+10.1Q)+\'14\';12 2l=1f.26("2q");$(2l).13({1z:24+\'14\',\'4c\':"0",1O:"2a",1E:4l(28+10.1k+10.1Q-1Z-1t),1q:1Z+"14",1h:"0",\'2D\':V,\'1s\':10.1s,\'1T\':10.1T,\'5T\':\'5U\'});11(2b)$(2l).13(\'2d\',\'2d\');11(10.1o)$(2l).13(\'3v\',10.3q);11(10.1k&&!1Z)$(2l).13(\'4b\',10.3K);11(10.32)$(2l).13(\'3x\',10.3o);11(10.1Q&&!1t)$(2l).13(\'4a\',10.3L);10.2x=10.1x.1v(2l);I=$(10.2x).13("1z");11(I===""||I==="43"||I.39("%")!==-1)20 1P(\'6b 1z 3d \'+I);10.2c=(I!=""&&I!="43"&&I.39("%")==-1)?1i(I):$(10.2x).1z();10.2W=17(){10.1u=10.1e=0;11(10.1S){12 e=17(a,b,c){11(a===0)18 0;12 d;11(a===\'1M\'||a===\'1G\')18 c-b;11(a===\'6g\')18(c-b)/2;11(a.39(\'%\')>0)18(c-b)/(25/1i(a));18 1C(a)};10.1u=e(Y,10.1S.1z,24);10.1e=e(1e,10.1S.1E,28)}1l 11(10.1s){10.1u=1C(Y);10.1e=1C(1e)}11(1Z){f=1f.26("2q");$(f).13({1z:10.2c+"14",\'3k\':"2t",2G:"2I",1O:"2a",\'35\':10.1k+"14",\'3n\':10.1k+"14",1E:1Z+"14",1q:-1Z+"14",1h:-10.1o+"14"});10.2g=10.2x.1v(f)}11(1t){12 f=1f.26("2q");$(f).13({1z:10.2c+"14",\'3k\':"2t",2G:"2I",1O:"2a",\'35\':10.1Q+"14",\'3n\':10.1Q+"14",1E:1t+"14",1G:-1t+"14",1h:-10.1o+"14"});10.2m=10.2x.1v(f)}12 g=10.19.4U();1D(12 i 1F g)11(!2U(i)){12 h=g[i];12 j=10.19[h+\'R\'];12 l,29,21,2V;11(h=="1V"||h=="1R"){l=10.1k;29=10.3G;2V=10.1k}1l{l=10.1Q;29=10.3H;2V=10.1Q}21=j-2V;12 m=1f.26("2q");$(m).13({1O:"2a","48-3S":"2t",2G:"2I"}).1E(10.19.1j(h+\'2R\')).1z(10.19.1j(h+\'2R\'));12 n,1A,3h;12 o=2b?1i(/5o\\(46.(\\d+)\\)/.2O(2b)[1]):25;1D(n=0;n<j;++n){12 p=(n+1>=21)?-1:1a.44(1a.2h(1a.1J(21,2)-1a.1J(n+1,2)))-1;11(21!=j){12 q=(n>=21)?-1:1a.49(1a.2h(1a.1J(21,2)-1a.1J(n,2)));12 r=(n+1>=j)?-1:1a.44(1a.2h(1a.1J(j,2)-1a.1J((n+1),2)))-1}12 s=(n>=j)?-1:1a.49(1a.2h(1a.1J(j,2)-1a.1J(n,2)));11(p>-1)10.2e(n,0,10.2n,o,(p+1),m,2C,j);11(21!=j){11(10.19.2y){1D(1A=p+1;1A<q;++1A){11(10.1s!=""){12 u=1c.3i(n,1A,21)*25;10.2e(n,1A,29,o,1,m,u>=30,j)}1l 11(10.2n!==\'2z\'){12 v=1c.45(10.2n,29,1c.3i(n,1A,21));10.2e(n,1A,v,o,1,m,1L,j)}1l 10.2e(n,1A,29,o>>1,1,m,1L,j)}11(r>=q){11(q==-1)q=0;10.2e(n,q,29,o,(r-q+1),m,1L,0)}3h=29;1A=r}1l{11(r>p){10.2e(n,(p+1),29,o,(r-p),m,1L,0)}}}1l{3h=10.2n;1A=p}11(10.19.2y&&10.2n!==\'2z\'){3g(++1A<s){10.2e(n,1A,3h,(1c.3i(n,1A,j)*o),1,m,2V<=0,j)}}}1D(12 t=0,k=m.47.1U;t<k;++t){12 w=m.47[t];12 x=1i($(w).13(\'1q\'));12 y=1i($(w).13(\'1h\'));12 A=1i($(w).13(\'1E\'));11(h=="1R"||h=="1t"){$(w).13(\'1h\',(j-y-1)+"14")}11(h=="1V"||h=="1R"){$(w).13(\'1q\',(j-A-x)+"14")}$(w).13(\'1T\',10.1T);11(10.1s)2E(h){1m"1V":$(w).13(\'1K\',(10.1u-10.1o+j-24-y)+"14 "+(10.1e+A+x+10.1k-j)+"14");1r;1m"1R":$(w).13(\'1K\',(10.1u-j+y+1+10.1o)+"14 "+(10.1e-j+A+x+10.1k)+"14");1r;1m"1t":$(w).13(\'1K\',(10.1u-j+y+1+10.1o)+"14 "+(10.1e-28-10.1k+(!1Y.2B.2A?x:-x)+j)+"14");1r;1m"2f":11(!1Y.2B.2A){$(w).13(\'1K\',(10.1u-10.1o-24+j-y)+"14 "+(10.1e-28-10.1k+x+j)+"14")}1l{$(w).13(\'1K\',(10.1u-10.1o-24+j-y)+"14 "+(10.1e-28-10.1k+j-x)+"14")}}}2E(h){1m"1R":$(m).13(\'1q\',m.1d.1h="0");10.2g.1v(m);1r;1m"1V":$(m).13(\'1q\',m.1d.1M="0");10.2g.1v(m);1r;1m"1t":$(m).13(\'1G\',m.1d.1h="0");10.2m.1v(m);1r;1m"2f":$(m).13(\'1G\',m.1d.1M="0");10.2m.1v(m)}}12 B={t:10.19.41(\'t\'),b:10.19.41(\'b\')};1D(z 1F B){11(2T z===\'17\')4i;11(!10.19.1j(z+\'R\'))4i;11(B[z]){12 C=(10.19[z+"2Z"]<10.19[z+"34"])?z+"l":z+"r";12 D=1f.26("2q");$(D).13({\'1E\':B[z]+"14",\'1z\':10.19.1j(C+\'2R\'),\'1O\':"2a",\'3k\':"2t",\'2G\':"2I",\'2D\':10.2n,\'1s\':10.1s,\'1T\':10.1T});11(2b)$(D).13(\'2d\',\'2d\');2E(C){1m"1R":$(D).13({\'1G\':\'\',\'1h\':\'0\',\'3v\':10.3q,\'1K\':10.1u+"14 "+(10.1k+10.1e-10.19.1I)+"14"});10.2g.1v(D);1r;1m"1V":$(D).13({\'1G\':\'\',\'1M\':\'0\',\'3x\':10.3o,\'1K\':(10.1u-10.2c+10.19.1W)+"14 "+(10.1k+10.1e-10.19.1W)+"14"});10.2g.1v(D);1r;1m"1t":$(D).13({\'1q\':\'\',\'1h\':\'0\',\'3v\':10.3q,\'1K\':10.1u+"14 "+(10.1e-10.1k-10.2Q+B[z]+10.19.1H)+"14"});10.2m.1v(D);1r;1m"2f":$(D).13({\'1q\':\'\',\'1M\':\'0\',\'3x\':10.3o,\'1K\':(10.1o+10.1u-10.2c+10.19.1X)+"14 "+(10.1e-10.1k-10.2Q+B[z]+10.19.1X)+"14"});10.2m.1v(D)}}12 E=1f.26("2q");11(2b)$(E).13(\'2d\',\'2d\');$(E).13({\'1O\':"4d",\'3k\':"2t",\'2G\':"2I",\'1z\':10.4m(z),\'2D\':10.2n,\'1s\':10.1s,\'1T\':10.1T});2E(z){1m"t":11(10.2g){11(!1Y.2B.2A){$(E).13(\'1E\',25+1Z+"14")}1l{$(E).13(\'1E\',25+1Z-10.1k+"14")}$(E).13(\'4n\',10.19.1I?(10.19.1I-10.1o)+"14":"0");$(E).13(\'4b\',10.3K);11(10.1s){12 F=10.19.1I?(10.1o+10.1u-10.19.1I)+"14 ":10.1u+"14 ";$(E).13(\'1K\',F+10.1e+"14");$(10.2x).13(\'1K\',10.1u+"14 "+(10.1e-1Z+10.1o)+"14")}10.2g.1v(E)}1r;1m"b":11(10.2m){11(!1Y.2B.2A){$(E).13(\'1E\',1t+"14")}1l{$(E).13(\'1E\',1t-10.1Q+"14")}$(E).13(\'4n\',10.19.1H?(10.19.1H-10.1o)+"14":"0");$(E).13(\'4a\',10.3L);11(10.1s){12 F=10.19.1H?(10.1u+10.1o-10.19.1H)+"14 ":10.1u+"14 ";$(E).13(\'1K\',F+(10.1e-28-10.1k+1t)+"14")}10.2m.1v(E)}}}z=24;11(1Y.2B.2A)z-=10.3C+10.3D;$(10.2Y).13({\'1O\':\'2a\',\'1h\':10.1o+"14",\'4v\':10.4k+"14",\'1q\':10.1k+"14",\'35\':10.3C+"14",\'3n\':10.3D+"14",\'1z\':z+"14",\'3X\':G.13(\'3X\')}).3W(\'3Q\');G.13(\'3X\',\'1h\').3W(\'3O\');10.1x.1v(10.2Y);11(H)$(H).13(\'3z\',6D)};11(10.1s){Y=10.3N(Y);1e=10.3N(1e);11(10.1S){10.1S.4t=10;10.2v=10.2W;10.2W=17(){11(10.1S.6N)10.2v();1l 10.1S.56=1p 57(\'$(10.4t).2v();\')}}}};1c.1N.3N=17(c){11(c===\'1q\'||c===\'1h\'||1i(c)===0)18 0;11(!(/^[-\\d.]+14$/.2S(c))&&!10.1S){10.1S=1p 58;12 d=17(a){12 b=/59\\("?([^\'"]+)"?\\)/.2O(a);18(b?b[1]:a)};10.1S.5a=d(10.1s)}18 c};1c.1N.2e=17(a,b,c,d,e,f,g,h){12 i=1f.26("2q");$(i).13({"1E":e+"14","1z":"2t","1O":"2a","48-3S":"2t","2G":"2I","1q":b+"14","1h":a+"14","3j-4w":c});12 j=10.19.1j(\'4o\');11(g&&10.1s!=""){$(i).13({"3j-1O":"-"+(10.2c-(h-a)+10.1k)+"14 -"+((10.2Q+j+b)-10.1k)+"14","3j-5d":10.1s})}11(d!=25)$(i).13({46:(d/25)});f.1v(i)};1c.1N.4m=17(a){12 b,3F;b=!1Y.2B.2A?0:10.19.4V(a)*10.1o;11((3F=10.2c-10.19.4W(a)+b)<0)20 1P("65 5g 1x 1z");18 3F+\'14\'};1c.4y=17(a){12 d=1f.26(\'5i\');d.1d.2D=a;1f.2H.1v(d);11(5j.4z){12 b=1f.5l.4z(d,2p).5m(\'3j-4w\');d.4A.3Z(d);11(b.2j(0,3)==="3s")b=1c.2P(b);18 b}1l{12 c=1f.2H.5r();c.5s(d);c.4C(\'4D\',1L,a);12 e=c.5v(\'4D\');12 f="3s("+(e&5w)+", "+((e&5x)>>8)+", "+((e&5y)>>16)+")";d.4A.3Z(d);c=2p;18 1c.2P(f)}};1c.45=17(a,b,c){11(a===\'2z\'||b===\'2z\')20 1P(\'5A 5B 5C 2z\');11(a.1y(0)!==\'#\'){a=1c.2i(a)}11(b.1y(0)!==\'#\'){b=1c.2i(b)}12 d=1i(a.2j(1,2),16);12 e=1i(a.2j(3,2),16);12 f=1i(a.2j(5,2),16);12 g=1i(b.2j(1,2),16);12 h=1i(b.2j(3,2),16);12 i=1i(b.2j(5,2),16);11(c>1||c<0)c=1;12 j=1a.40((d*c)+(g*(1-c)));11(j>2K)j=2K;11(j<0)j=0;12 k=1a.40((e*c)+(h*(1-c)));11(k>2K)k=2K;11(k<0)k=0;12 l=1a.40((f*c)+(i*(1-c)));11(l>2K)l=2K;11(l<0)l=0;18"#"+1c.2r(j)+1c.2r(k)+1c.2r(l)};1c.2r=17(a){12 b=[\'0\',\'1\',\'2\',\'3\',\'4\',\'5\',\'6\',\'7\',\'8\',\'9\',\'A\',\'B\',\'C\',\'D\',\'E\',\'F\'];18 b[a>>>4]+\'\'+b[a&15]};1c.3i=17(x,y,r){12 a;12 b=r*r;12 c=1p 3c(2);12 d=1p 3c(2);12 e=0;12 f="";12 g=1a.2h(b-1a.1J(x,2));11(g>=y&&g<(y+1)){f="5I";c[e]=0;d[e]=g-y;++e}g=1a.2h(b-1a.1J(y+1,2));11(g>=x&&g<(x+1)){f+="5J";c[e]=g-x;d[e]=1;++e}g=1a.2h(b-1a.1J(x+1,2));11(g>=y&&g<(y+1)){f+="5K";c[e]=1;d[e]=g-y;++e}g=1a.2h(b-1a.1J(y,2));11(g>=x&&g<(x+1)){f+="5L";c[e]=g-x;d[e]=0}2E(f){1m"5M":a=1a.3f(d[0],d[1])+((1a.4F(d[0],d[1])-1a.3f(d[0],d[1]))/2);1r;1m"5P":a=1-(((1-c[0])*(1-d[1]))/2);1r;1m"5Q":a=1a.3f(c[0],c[1])+((1a.4F(c[0],c[1])-1a.3f(c[0],c[1]))/2);1r;1m"5R":a=d[0]*c[1]/2;1r;4G:a=1}18 a};1c.2P=17(a){2o{12 b=1c.4H(a);12 c=1i(b[0]);12 d=1i(b[1]);12 f=1i(b[2]);12 g="#"+1c.2r(c)+1c.2r(d)+1c.2r(f)}2k(e){4I("5V 5W 5X 5Y 5Z 60 61 62 4N 63 1F 17 2P")}18 g};1c.4H=17(a){12 b=a.64(4,a.39(")"));18 b.3R(", ")};1c.2i=17(a){11(a!=""&&a!="2z"){11(a.2j(0,3)==="3s"){a=1c.2P(a)}1l 11(a.1y(0)!==\'#\'){a=4y(a)}1l 11(a.1U===4){a="#"+a.1y(1)+a.1y(1)+a.1y(2)+a.1y(2)+a.1y(3)+a.1y(3)}}18 a};18 10.2J(17(){11(!$(10).3d(\'.3O\')){11(3I){11(1n.1j(\'1I\')){$(10).13({\'1g-1q-1h-1b\':1n.1j(\'1I\')+\'14\',\'-1B-1g-1b-3J\':1n.1j(\'1I\')+\'14\',\'-3e-1g-1q-1h-1b\':1n.1j(\'1I\')+\'14\'})}11(1n.1j(\'1W\')){$(10).13({\'1g-1q-1M-1b\':1n.1j(\'1W\')+\'14\',\'-1B-1g-1b-3A\':1n.1j(\'1W\')+\'14\',\'-3e-1g-1q-1M-1b\':1n.1j(\'1W\')+\'14\'})}11(1n.1j(\'1H\')){$(10).13({\'1g-1G-1h-1b\':1n.1j(\'1H\')+\'14\',\'-1B-1g-1b-3w\':1n.1j(\'1H\')+\'14\',\'-3e-1g-1G-1h-1b\':1n.1j(\'1H\')+\'14\'})}11(1n.1j(\'1X\')){$(10).13({\'1g-1G-1M-1b\':1n.1j(\'1X\')+\'14\',\'-1B-1g-1b-3u\':1n.1j(\'1X\')+\'14\',\'-3e-1g-1G-1M-1b\':1n.1j(\'1X\')+\'14\'})}}1l{11(!$(10).3d(\'.4O\')){$(10).3W(\'4O\');38=$(10).4Q(\'1d\');11(38==\'2w\'){38=\'\'}2X.2L({3t:10,19:1n,1d:38,6h:$(10).6i(2C)})}12 a=1p 1c(1n,10);a.2W()}}})};$.3b.6j=17(){18 10.2J(17(i,e){27=e;$.2J(2X,17(a,b){11(b.3t==27&&$(\'.3Q\',27).3S()>0){$(27).6l($(27).6m(\'.3Q:6n\').6o());1d=b.1d==\'2w\'?b.1d:\'\';$(27).6p(\'3O\').4Q(\'1d\',1d);18 1L}})})};$.3b.6q=17(){18 10.2J(17(i,e){27=e;$.2J(2X,17(a,b){11(b.3t==27){$(27).3a(b.19);18 1L}})})};$.3b.2v=17(){18 10.2J(17(i,e){3V=e;11(\'2v\'1F 3V)3V.2v();1l 20 1P(\'6s 2v 17\')})};$(17(){11($.2N.4p){2o{1f.4C("6t",1L,2C)}2k(e){};17 2M(a){11(!1i(a))18\'14\';12 b=/^[\\d.]+(\\w+)$/.2O(a);18 b[1]};12 t,i,j;17 3M(a){12 b=a.1d;11(1Y.2N.4q>6.0){12 c=b[\'-1B-1g-1b\']||0;12 d=b[\'-1B-1g-1b-3A\']||0;12 e=b[\'-1B-1g-1b-3J\']||0;12 f=b[\'-1B-1g-1b-3u\']||0;12 g=b[\'-1B-1g-1b-3w\']||0}1l{12 c=b[\'1B-1g-1b\']||0;12 d=b[\'1B-1g-1b-3A\']||0;12 e=b[\'1B-1g-1b-3J\']||0;12 f=b[\'1B-1g-1b-3u\']||0;12 g=b[\'1B-1g-1b-3w\']||0}11(c){12 t=c.3R(\'/\');t=t[0].3R(/\\s+/);11(t[t.1U-1]===\'\')t.6w();2E(t.1U){1m 3:e=t[0];d=g=t[1];f=t[2];c=1L;1r;1m 2:e=f=t[0];d=g=t[1];c=1L;1m 1:1r;1m 4:e=t[0];d=t[1];f=t[2];g=t[3];c=1L;1r;4G:4I(\'6x 4P 6y: \'+c)}}11(c||e||d||f||g){12 h=1p 1w(a.3p);11(c)h.2s(2p,2p,1i(c),2M(c));1l{11(d)h.2s(\'t\',\'r\',1i(d),2M(d));11(e)h.2s(\'t\',\'l\',1i(e),2M(e));11(g)h.2s(\'b\',\'l\',1i(g),2M(g));11(f)h.2s(\'b\',\'r\',1i(f),2M(f))}$(a.3p).3a(h)}}1D(t=0;t<1f.22.1U;++t){2o{11(1f.22[t].3l){1D(i=0;i<1f.22[t].3l.1U;++i){1D(j=0;j<1f.22[t].3l[i].23.1U;++j){3M(1f.22[t].3l[i].23[j])}}}1D(i=0;i<1f.22[t].23.1U;++i)3M(1f.22[t].23[i])}2k(e){}}}1l 11($.2N.4f){2o{33=(1f.2H.1d.4T!==2w)}2k(36){}11(!33){17 4Z(a){18/1g-((1q|1G)-(1h|1M)-)?1b/.2S(1f.22.50(a).51.52)};23=[];1D(t=0;t<1f.22.1U;++t){11(4Z(t)){12 k=1f.22.50(6G).51.52;k=k.6H(/\\/\\*(\\n|\\r|.)*?\\*\\//g,\'\');12 l=1p 53("^\\\\s*([\\\\w.#][-\\\\w.#, ]+)[\\\\n\\\\s]*\\\\{([^}]+1g-((1q|1G)-(1h|1M)-)?1b[^}]*)\\\\}","6J");12 m;3g((m=l.2O(k))!==2p){12 n=1p 53("(..)1g-((1q|1G)-(1h|1M)-)?1b:\\\\s*([\\\\d.]+)(1F|6K|14|6L|6M)","g");12 o,42=1p 1w(m[1]);3g((o=n.2O(m[2]))!==2p){11(o[1]!=="z-")42.2s(o[3],o[4],o[5],o[6]);23.2L(42)}}}}1D(i 1F 23)11(!2U(i))$(23[i].3p).3a(23[i])}}})})(1Y);',62,422,'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||this|if|var|css|px|||function|return|spec|Math|radius|curvyObject|style|backgroundPosY|document|border|left|parseInt|get|borderWidth|else|case|bd|borderWidthL|new|top|break|backgroundImage|bl|backgroundPosX|appendChild|curvyCnrSpec|box|charAt|width|inty|moz|bm|for|height|in|bottom|blR|tlR|pow|backgroundPosition|false|right|prototype|position|Error|borderWidthB|tl|backgroundObject|backgroundRepeat|length|tr|trR|brR|jQuery|bk|throw|borderRadius|styleSheets|rules|bp|100|createElement|thisdiv|bo|bcolor|absolute|bj|boxWidth|filter|drawPixel|br|topContainer|sqrt|format_colour|substr|catch|bq|bottomContainer|boxColour|try|null|div|IntToHex|setcorner|1px|propu|dispatch|undefined|shell|antiAlias|transparent|boxModel|support|true|backgroundColor|switch|bc|overflow|body|hidden|each|255|push|units|browser|exec|rgb2Hex|boxHeight|Ru|test|typeof|isNaN|borderWidthTB|applyCorners|redrawList|contentContainer|lR||propR|borderWidthR|checkStandard|rR|paddingLeft|err|arguments|thestyles|indexOf|corner|fn|Array|is|webkit|min|while|outsideColour|pixelFraction|background|fontSize|imports|be|paddingRight|borderStringR|selectorText|borderStringL|tru|rgb|node|bottomright|borderLeft|bottomleft|borderRight|blu|display|topright|bru|leftPadding|rightPadding|propname|f_width|borderColour|borderColourB|ba|topleft|borderString|borderStringB|procIEStyles|backgroundCheck|hasCorners|bb|autoPadDiv|split|size|checkMozilla|setfrom|obj|addClass|textAlign|tlu|removeChild|round|radiusdiff|cornerspec|auto|floor|BlendColour|opacity|childNodes|font|ceil|borderBottom|borderTop|padding|relative|firstChild|opera|none|borderColourR|continue|borderColourL|topPadding|bn|fillerWidth|marginLeft|tR|msie|version|bh|bg|holdingElement|bf|paddingTop|color|backgroundPositionY|getComputedColour|getComputedStyle|parentNode|backgroundPositionX|execCommand|ForeColor|borderRightWidth|max|default|rgb2Array|alert|borderLeftWidth|borderBottomWidth|borderTopWidth|inline|to|drawn|corners|attr|settings|instanceof|BorderRadius|cornerNames|radiusCount|radiusSum|cloneOn|or|opera_contains_border_radius|item|ownerNode|text|RegExp|must|Param|onload|Function|Image|url|src|initial|borderTopStyle|image|tagName|borderBottomStyle|exceeds|elements|DIV|window|borderLeftStyle|defaultView|getPropertyValue|get_style|alpha|bR|borderRightStyle|createTextRange|moveToElementText|number|string|queryCommandValue|0xFF|0xFF00|0xFF0000|unexpected|Cannot|blend|with|styleToNPx|type|MozBorderRadius|property|Unexpected|Left|Top|Right|Bottom|LeftRight|unit|block|TopRight|TopBottom|LeftBottom|masterCorners|direction|ltr|There|was|an|error|converting|the|RGB|value|Hexadecimal|substring|Radius|pixelLeft|Don|extend|abs|innerWidth|Shell|bottomPadding|recognize|table|You|center|copy|clone|removeCorners|cannot|html|children|first|contents|removeClass|redrawCorners|innerHeight|No|BackgroundImageCache|paddingBottom|borderTopColor|pop|Illegal|specification|apply|borderBottomColor|WebkitBorderRadius|bi|boxDispSave|borderLeftColor|curvyBrowser|sheetnumber|replace|borderRightColor|mg|em|ex|pt|complete'.split('|'),0,{}))/*2_commandline.js*/
var _debug=true;
function log(str){
	if(_debug) console.log(str)
}

/**
 * Dumper function similar to perl's Data::Dumper
 * 
 * @param arr
 * @param level
 * @return
 */
function dump(arr,level) {
	var dumped_text = "";
	if(!level) level = 0;
	
	//The padding given at the beginning of the line.
	var level_padding = "";
	for(var j=0;j<level+1;j++) level_padding += "    ";
	
	if(typeof(arr) == 'object') { //Array/Hashes/Objects 
		for(var item in arr) {
			var value = arr[item];
			
			if(typeof(value) == 'object') { //If it is an array,
				dumped_text += level_padding + "'" + item + "' ...\n";
				dumped_text += dump(value,level+1);
			} else {
				dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
			}
		}
	} else { //Strings/Chars/Numbers etc.
		dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
	}
	return dumped_text;
}

/**
 * Simple benchmark tool. Might not be 100% accurate.
 * 
 * @param sfunc	The function name
 * @param func	The function reference (callback)
 * @param argv	The arguments array
 * @return	Whatever the callback function returns
 */
function bench(sfunc,func,argv){
    var startTime,endTime;    
        startTime=new Date().getTime();
     var out = func.apply(this,argv);
        endTime=new Date().getTime();
        console.log("'"+sfunc+"' elapsed time: "+((endTime-startTime)/1000)+" seconds.");
     return out;
}

/**
 * Test function
 * 
 * @param val	
 * @param val1	
 * @return		nothing
 */
function hello(val,val1){
	console.log("val was: "+val);
	console.log("val1 was: "+val1);
	console.log(dump(arguments));
}

/**
 * Executes a given command with following arguments and return that functions output.
 * Also calls the benchmarking tool if set.
 * 
 * @return		Whatever the callback function returns
 */
function execute(){
	//console.log("arguments: "+dump(arguments));
	var argc = arguments.length;
	var argv= new Array();
	if(argc == 0){
		//console.log("no arguments");
		return;
	}else{
		for( var i = 0; i < argc; i++ ) {
			argv.push(arguments[i]);
		}
	}
	
	// the function name string
	var sfunc = argv.shift();
	//console.log(sfunc+" arguments: "+dump(argv));
	
	// the function ref
	var func;
	if(window[sfunc]) func = window[sfunc]; // gets the reference
	
	//console.log(typeof(func));
	if(typeof func == 'function'){
		//console.log("function!");
		//return func.apply(this,argv); // regular call
		ws.send(rpc.createRequest(sfunc,argv));
		return bench(sfunc,func,argv); // benchmarking call
		
	}else{
		console.log("no '"+sfunc+"' function!!");
		return;
	}
	return;
}/*3_shotenjin.js*/
/*
 * $Rev: 39 $
 * $Release: 0.0.3 $
 * Copyright(c) 2007-2008 kuwata-lab.com all rights reserved
 * License:  MIT License
 */

/**
 *  namespace
 */

var Shotenjin = {

	_escape_table: { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' },

	_escape_func: function(m) { return Shotenjin._escape_table[m] },

	escapeXml: function(s) {
		//if (s == null) return '';
		return typeof(s) != 'string' ? s : s.replace(/[&<>"]/g, Shotenjin._escape_func); //"
		//return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); //"
	},

	escapeXml2: function(s) {
		if (s == null) return '';
		return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');  //"
	},

	strip: function(s) {
		if (! s) return s;
		//return s.replace(/^\s+|\s+$/g, '');
		return s.replace(/^\s+/, '').replace(/\s+$/, '');
	},

	// ex. {x: 10, y: 'foo'}
	//       => "var x = _context['x'];\nvar y = _conntext['y'];\n"
	_setlocalvarscode: function(obj) {
		var buf = [];
		for (var p in obj) {
			buf.push("var ", p, " = _context['", p, "'];\n");
		}
		return buf.join('');
	},
	
	_end: undefined  // dummy property to escape strict warning (not legal in ECMA-262)
};
delete(Shotenjin._end);

var escapeXml = Shotenjin.escapeXml;


/**
 *  Template class
 */

Shotenjin.Template = function(properties) {
	if (properties) {
		var p = properties;
		if (p['escaefunc']) this.escapefunc = p['escapefunc'];
	}
};

Shotenjin.Template.prototype = {

	escapefunc: 'escapeXml',

	program: null,

	convert: function(input) {
		var buf = [];
		buf.push("var _buf = []; ");
		this.parseStatements(buf, input);
		buf.push("_buf.join('')\n");
		return this.program = buf.join('');
	},

	parseStatements: function(buf, input) {
		var regexp = /<\?js(\s(.|\n)*?) ?\?>/mg;
		var pos = 0;
		var m;
		while ((m = regexp.exec(input)) != null) {
			var stmt = m[1];
			var text = input.substring(pos, m.index);
			pos = m.index + m[0].length;
			//
			if (text) this.parseExpressions(buf, text);
			if (stmt) buf.push(stmt);
		}
		var rest = pos == 0 ? input : input.substring(pos);
		this.parseExpressions(buf, rest);
	},

	parseExpressions: function(buf, input) {
		if (! input) return;
		buf.push(" _buf.push(");
		var regexp = /([$#])\{(.*?)\}/g;
		var pos = 0;
		var m;
		while ((m = regexp.exec(input)) != null) {
			var text = input.substring(pos, m.index);
			var s = m[0];
			pos = m.index + s.length;
			this.addText(buf, text);
			buf.push(", ");
			var indicator = m[1];
			var expr = m[2];
			if (indicator == "$")
				buf.push(this.escapefunc, "(", expr, "), ");
			else
				buf.push(expr, ", ");
		}
		var rest = pos == 0 ? input : input.substring(pos);
		rest ? this.addText(buf, rest, true) : buf.push('""');
		buf.push(");");
		if (input.charAt(input.length-1) == "\n")
			buf.push("\n");
	},

	addText: function(buf, text, encode_newline) {
		if (! text) return;
		var s = text.replace(/[\'\\]/g, '\\$&').replace(/\n/g, '\\n\\\n');
		buf.push("'", s, "'");
	},

	render: function(_context) {
		if (_context) {
			eval(Shotenjin._setlocalvarscode(_context));
		}
		else {
			_context = {};
		}
		return eval(this.program);
	},

	_end: undefined  // dummy property to escape strict warning (not legal in ECMA-262)
};
delete(Shotenjin.Template.prototype._end);


/*
 *  convenient function
 */
Shotenjin.render = function(template_str, context) {
	var template = new Shotenjin.Template();
	template.convert(template_str);
	var output = template.render(context);
	return output;
};
/*5_ws.js*/
/**
 * Functions to use on Room Class 
 * 
 */

function _send(jsonArr){
    if(room._ws != undefined && room._ws.readyState == 1){
    	room._ws.send(jQuery.toJSON(jsonArr));
    }
}

function rpcObj(meth,call){
	return {
		id : ++rpcid+'',
		jsonrpc: "2.0", 
		method: meth, 
		params: call
	};
}
		
function _join(username){
	room._username = username || ':newuser:';
}
  
function _chat(text) {
	if (text != null && text.length>0){
		_send(text);
	}
}

/**
 * Room Class methods 
 * 
 */


function _onopen(){
	log("connected");
    $('#join').removeClass().addClass('hidden');
    $('#joined').removeClass();
    $('#phrase').focus();
    
}
    
function _onmessage(m) {
	  var object =  jQuery.evalJSON(m.data);
	  
	  console.log( dump(object) );
	
}
    
function _onclose(m){
      room._ws=null;
      $('#join').removeClass();
      $('#joined').removeClass().addClass('hidden');
      $('#username').focus();
      $('#chat').html('');
      console.error("disconnected");
}
   
function _onerror(m){
	console.error(dump(m));
}

/**
 * Room Class constructor
 * 
 * @param ws	- the Websocket Object
 * @param username - the username string
 * @return
 */
function Room(ws,username){
	this._ws = ws;
    
    this._username = username || ':newuser:';
}

function newSocket(wsurl){
	console.log("Connecting to: "+wsurl);
	var ws = new WebSocket(wsurl);
	ws.onopen = _onopen;
    ws.onmessage = _onmessage;
    ws.onclose = _onclose;
    ws.onerror = _onerror;
    return ws;
}
/*9_init.js*/
/**
 * helper functions
 */
function hasWebSockets(){
	if (!window.WebSocket){	
		console.log("WebSocket not supported by this browser"); 
		return false;
	}else{
		return true;
	}
}

function getKeyCode(ev) { 
	if (window.event) return window.event.keyCode; 
	return ev.keyCode; 
}

/**
 * Variables 
 */

var wsurl = "ws://127.0.0.1:8080/dUno/ws/";
var url = window.location.href;
wsurl = url.replace("http", "ws") + "ws/";
var ws = newSocket(wsurl);
ws.readyState = 1; // HACK
var room = new Room(ws);
var keepAlive;
var rpcid=0;

/**
 * Startup
 */
jQuery(document).ready(function($) {
		
		if(! hasWebSockets()){
			
			
			return;
		}
	
		$('#username').attr('autocomplete','OFF');
		$('#username').bind('keyup',function(ev) { var keyc=getKeyCode(ev); if (keyc==13 || keyc==10) { _join($('#username').val()); return false; } return true; });
		
		$('#joinB').bind('click', function(event) { _join($('#username').val()); return false; });
		
		$('#phrase').attr('autocomplete','OFF');
		$('#phrase').bind('keyup', function(ev) {   var keyc=getKeyCode(ev); if (keyc==13 || keyc==10) { _chat($('#phrase').val()); $('phrase').val(''); return false; } return true; });
		
		$('#sendB').bind('click',function(event) { _chat($('#phrase').val()); $('#phrase').val(''); return false; });
		
		$('#board_container').corner();
		
		keepAlive = setInterval(function(){ _send([rpcObj('ping',['200'])] ); },5*1000);
});

