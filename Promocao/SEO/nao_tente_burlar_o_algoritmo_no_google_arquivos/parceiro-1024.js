//versao 2011//
barraUol={

c : 'http://click.uol.com.br/?rf=barraparceiro&u=',
init : function(){
  this.css();
  this.getParseJSURL(document.getElementsByTagName('script')[document.getElementsByTagName('script').length - 1].src,"_JS",this);
  this.UolBarRefBusca = typeof(this._REQUEST_JS['refbusca'])!='undefined' ? this._REQUEST_JS['refbusca'] : '';
  this.config.full = typeof(this._REQUEST_JS['full'])!='undefined' ? this._REQUEST_JS['full'] : false;
},

getParseJSURL : function(src,v,esc){
  var obj=window;
  if (v) {
    if(esc)
      obj = esc["_REQUEST" + v] = [];
    else
      obj = window["_REQUEST" + v] = [];
  }
  src.replace(/([^=&?]+)=([^&]+)/g,function(match,key,value,a){obj[key]=unescape(value).replace(/\+/g,'%20').replace(/</g,'&lt;').replace(/>/g,'&gt;')});
},

css : function(){
var w = '113';
try { if ((document.doctype && (document.doctype.publicId.indexOf("HTML 4") != -1) && (document.doctype.systemId.indexOf("loose.dtd") == -1)) || (document.all[0] && document.all[0].nodeValue.indexOf("HTML 4") != -1)) { w = '136'; } } catch (e) {};
document.write('<style>'+
'.barrauol-bg {background:#363636!important;border-top:1px solid #5c5c5c;border-bottom:1px solid #5c5c5c;height:29px}'+
'#barrauol2011.buol2011 {width:980px!important;clear:both;margin-left:auto!important;margin-right:auto!important;height:29px;background:#363636!important}'+
'#barrauol2011.buol2011 ul li {float:left;display:inline-block;height:29px;text-align:left!important}'+
'#barrauol2011.buol2011 ul,#barrauol2011.buol2011 ul li,#barrauol2011.buol2011 form{margin:0;padding:0;background-color:transparent!important;width:auto!important}'+
'#barrauol2011.buol2011 ul li a{color:#fff!important;text-decoration:none;padding:0!important;}'+
'#barrauol2011.buol2011 ul li a:hover{text-decoration:underline!important;background-color:transparent!important;color:#fff!important;}'+
'#barrauol2011.buol2011 ul li.logouol img{margin:7px 12px 0 8px!important}'+
'#barrauol2011.buol2011 ul li.suporte a{font:12px/29px Arial!important;color:#ccc!important;display:block}'+
'#barrauol2011.buol2011 ul li.suporte a span{font:11px/29px Arial!important;color:#ccc!important}'+
'#barrauol2011.buol2011 ul li.assine{margin-right:10px!important;width:115px}'+
'#barrauol2011.buol2011 ul li.sac{margin-right:10px!important}'+
'#barrauol2011.buol2011 ul li.barracanal{margin-right:1px!important;padding:0!important}'+
'#barrauol2011.buol2011 ul li.barracanal a{font:bold 14px/28px Arial!important;display:block;padding:0 6px 1px!important}'+
'#barrauol2011.buol2011 ul li.barracanal a:hover{color:#363636!important;background-color:#fff!important;text-decoration:none!important;}'+
'#barrauol2011.buol2011 ul li.barracanal.last{margin-right:0!important}'+
'#barrauol2011.buol2011 ul li.busca{margin-right:6px!important;float:right}'+
'#barrauol2011.buol2011 ul li.busca form{display:block!important;margin-top:5px!important}'+
'#barrauol2011.buol2011 ul li.busca span{float:left;margin-left:1px}'+
'#barrauol2011.buol2011 input{font:11px Arial!important;border:none;vertical-align:top;margin:0!important}'+
'#barrauol2011.buol2011 input.it{background:url("http://img.uol.com.br/b/buol-search.gif") no-repeat scroll 0 0 #fff;padding:0 0 0 23px!important;width:'+w+'px;height:19px}'+
'#barrauol2011.buol2011 input.tb{width:65px;height:19px;padding:0!important;color:#000!important;cursor:pointer!important}'+
'/* remove plugin do skype na barra */'+
'#barrauol2011.buol2011 .assine span { display:inline !important; }'+
'#barrauol2011.buol2011 .assine SPAN.skype_pnh_container, #barrauol2011.buol2011  .assine SPAN.skype_pnh_container * { display:none !important; }'+
'</style>');
},

li : function(n,c,l){
  return '<li'+(c?' class="'+c+'"':'')+'>'+'<a href="'+this.c+l+'">'+n+'</a></li>';
},

config : {
full: false,
canais : [
  {label:'Bate-papo', classname:'bate-papo', url:'http://batepapo.uol.com.br/'},
  {label:'E-mail', classname:'e-mail', url:'http://email.uol.com.br/'},
  {label:'Not&iacute;cias', classname:'noticias', url:'http://noticias.uol.com.br/'},
  {label:'Esporte', classname:'esporte', url:'http://esporte.uol.com.br/'},
  {label:'Entretenimento', classname:'entretenimento', url:'http://entretenimento.uol.com.br/'},
  {label:'Mulher', classname:'mulher', url:'http://mulher.uol.com.br/'},
  {label:'Shopping', classname:'shopping', url:'http://clicklogger.rm.uol.com.br/shopping/?prd=239&msr=Cliques%20de%20Origem:1&oper=11&nortrk=1&grp=src:13;size:18;chn:103;creative:link_fixo;thm:barra_navegacao&redir=http://shopping.uol.com.br/'}
]	
},

barra : function(){
var c = this.c;
var h = '';
var fl = this.config.full;

h+=(fl) ? '<div class="barrauol-bg full">' : '';
h+='<div id="barrauol2011" class="buol2011'+(fl ? '':' barrauol-bg')+'">'+
'<ul>'+
'<li class="logouol"><a href="'+c+'http://www.uol.com.br/" target="_top" title="UOL - O melhor conte&uacute;do"><img src="http://img.uol.com.br/b/logo-uol.gif" border="0" width="51" height="15" alt="UOL - O melhor conte&uacute;do" title="UOL - O melhor conte&uacute;do" /></a></li>'+
'<li class="suporte assine"><a href="'+c+'http://clicklogger.rm.uol.com.br/?prd=1&grp=src:10;creative:barrauol&msr=Cliques%20de%20Origem:1&oper=11&redir=http://assine.uol.com.br/index.htm?eos=yes&promo=117570810&sg=300016192&sa=UOL-barra-assine&promochild=PROMOCOMBIAVSS" target="_top">Assine <span>0800 703 3000</span></a></li>'+
'<li class="suporte sac"><a href="'+c+'https://sac.uol.com.br/">SAC</a></li>'; 
for (var j = 0; j < this.config.canais.length; j++) {
 h += this.li(this.config.canais[j].label,'barracanal buol_'+this.config.canais[j].classname, this.config.canais[j].url);
}
h+='<li class="busca"><form onsubmit="buscaClick()" name="formbbuol" method="get" action="http://busca.uol.com.br/www/index.html"><input type="hidden" value="on" name="ad"><input type="hidden" value="'+this.UolBarRefBusca+'" name="ref"><input type="hidden" name="origem" value="barrauol"><span><input type="text" class="it" name="q"></span><span><input type="submit" value="BUSCAR" class="tb"></span></form></li>';
h+= '</ul>'+
'</div><div style="clear: left;"></div>';
h+=(fl) ? '</div>' : '';

return h;
}
};

writeUolBar = writeUOLBar = barraUol.write = function (){
  document.write(barraUol.barra());
  // analiza a navegação do usuário
  if(typeof setBTcollectUOL == 'undefined' && 'http:' == document.location.protocol){
    setBTcollectUOL={};var BTsite='par';var BThead = document.getElementsByTagName('head')[0];var BTscript = document.createElement('script');BTscript.type = 'text/javascript';BTscript.src = 'http://jsuol.com/p/dart/bt-px.js';BThead.appendChild(BTscript);
  }
}

barraUol.init();
writeUolBar();

//EOF

