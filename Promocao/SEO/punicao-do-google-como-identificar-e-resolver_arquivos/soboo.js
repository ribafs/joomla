/** !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

 IMPORTANTE:
 Quando copiar para o soboo_production, todo lugar que tiver localhost deve ser substituido pelo endereço remoto.
 Em seguida, deve ser obfuscado em:http://dean.edwards.name/packer/, com as opções "Base62 encode" e
 "Shrink variables selecinadas."

 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!**/


/***************************** INICIALIZAÇÃO DO VETOR DE SERVIÇOS ********************************/
if (typeof sb_widget == "undefined") {
    var sb_widget = 'SoBoo';
    var rootURL = 'http://www.seomaster.com.br/';
    var servicesURL = 'http://www.seomaster.com.br/img/bookmark-services/';
    var services = new Array();
        services['favoritos'] = ['Favoritos','favoritos.gif', '1'];
        services['email'] = ['E-Mail','email.gif', '2'];
        services['delicious'] = ['Del.icio.us','delicious.gif', '4'];
        services['digg'] = ['Digg','digg.gif', '5'];
        services['dihitt'] = ['Dihitt','dihitt.gif', '6'];
        services['domelhor'] = ['Domelhor','domelhor.gif', '7'];
        services['eucurti'] = ['Eu Curti','eucurti.gif', '8'];
        services['facebook'] = ['Facebook','facebook.gif', '9'];
        services['google'] = ['Google Book...','google.gif', '10'];
        services['linkk'] = ['Linkk','linkk.gif', '11'];
        services['linkto'] = ['Linkto','linkto.gif', '12'];
        services['live'] = ['Live Bookmarks','live.gif', '13'];
        services['myspace'] = ['MySpace','myspace.gif', '14'];
        services['reacoes-technorati'] = ['Reações Tec...','reacoes-technorati.gif', '15'];
        services['rec6'] = ['Rec6','rec6.gif', '16'];
        services['reddit'] = ['Reddit','reddit.gif', '17'];
        services['stumbleupon'] = ['StumbleUpon','stumbleupon.gif', '18'];
        services['technorati'] = ['Technorati','technorati.gif', '19'];
        services['twitter'] = ['Twitter','twitter.gif', '20'];
        services['ueba'] = ['Ueba','ueba.gif', '21'];
        services['yahoo'] = ['Yahoo Bookm...','yahoo.gif', '22'];
        services['yahoo-myweb'] = ['Yahoo MyWeb','yahoo-myweb.gif', '23'];
        services['mais'] = ['Mais','mais.gif', '24'];
        services['linkloko'] = ['LinkLoko','linkloko.gif', '26'];
        services['sapo'] = ['Sapo Links','sapo.gif', '27'];
        services['linkatudo'] = ['LinkaTudo','linkatudo.gif', '28'];
        services['imera'] = ['Imera','imera.gif', '29'];
        services['gafanhoto'] = ['Gafanhoto','gafanhoto.gif', '30'];
        services['pagestacker'] = ['Pagestacker','pagestacker.gif', '31'];
        services['ocioso'] = ['Ocioso','ocioso.gif', '32'];
        services['colmeia'] = ['Colmeia','colmeia.gif', '33'];
        services['orkut'] = ['Orkut','orkut.gif', '34'];
        services['linkninja'] = ['Link Ninja','linkninja.gif', '35'];

    createDropDownMenu();
}

/***************************** FUNÇÕES DE AJUDA COMPLEMENTAR ********************************/
function getObj(sb08i) {
    return document.getElementById(sb08i);
}


/***************************** SETA URL E TITLE ********************************/
function sb_init() {
    if (typeof sb_url == 'undefined' || sb_url == '')sb_url = location.href;
    if (typeof sb_title == 'undefined' || sb_title == '')sb_title = document.title;
}

/***************************** INICIALIZAÇÃO MENU DROP DOWN SERVIÇOS [CÁLCULO DE POSICIONAMENTO E ARMAZENAMENTO DE PARAMS EM VARIÁVEIS] ********************************/
function sb_showMenu(_this) {
    sb_clearclosewin();
    sb_init();
    var sb08u = 020;
    var sb08Z = _this.getElementsByTagName('img');
    if (sb08Z && sb08Z[0]) {
        _this = sb08Z[0];
        sb08u = 0;
    }
    /*onFocus(show);*/
    setBookmarkHTML();
    var sb08z = sb08X(_this);
    var sb08x = sb08z[0] + sb_offset_left;
    var sb08W = sb08z[1] + sb08u + 1 + sb_offset_top;
    var sb08w = sb08V();
    var sb08v = sb08T();
    var sb08t = getObj('sb_dropdown');
    sb08t.style.display = 'block';
    if (sb08x - sb08v[0] + sb08t.clientWidth + 024 > sb08w[0])sb08x = sb08x - sb08t.clientWidth;
    if (sb08W - sb08v[1] + sb08t.clientHeight + _this.clientHeight + 024 > sb08w[1]) sb08W = sb08W - sb08t.clientHeight - (_this.clientHeight - 16 + 024);
    sb08t.style.left = sb08x + 'px';
    sb08t.style.top = (sb08W + _this.clientHeight) + 'px';
    buildMenuServicesImages();
    return false;
}

function setBookmarkHTML() {
    var sb08B = getObj('bookmark');
    var sb08b = getObj('show_email');
    var sb08o0 = getObj('caption');
    sb08B.style.display = 'block';
    sb08o0.innerHTML = sb_caption_bookmark;
    sb08b.style.display = 'none';
}

function buildMenuServicesImages() {
    if (sb08s)return;
    var sb08R = sb_services.replace(/\s/g, '');
    var sb08r = sb08R.split(',');
    for (var sb08Q = 0; sb08Q < sb08r.length; sb08Q++) {
        var sb08q = sb08r[sb08Q];
        if (sb08q in services) {
            var sb08P = getObj(sb08q);
            if (sb08P)sb08P.src = servicesURL + services[sb08q][1];
        }
    }
    sb08s = true;
}

function sb08V() {
    var sb08k = 0;
    var sb08J = 0;
    if (typeof(window.innerWidth) == 'number') {
        sb08k = window.innerWidth;
        sb08J = window.innerHeight;
    } else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
        sb08k = document.documentElement.clientWidth;
        sb08J = document.documentElement.clientHeight;
    } else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
        sb08k = document.body.clientWidth;
        sb08J = document.body.clientHeight;
    }
    return [sb08k,sb08J];
}

function sb08X(sb08L) {
    var sb08l = 0,sb08K = 0;
    do {
        sb08l += sb08L.offsetTop || 0;
        sb08K += sb08L.offsetLeft || 0;
        sb08L = sb08L.offsetParent;
    } while (sb08L);
    return [sb08K,sb08l];
}

function sb08T() {
    var sb08j = 0;
    var sb08H = 0;
    if (typeof(window.pageYOffset) == 'number') {
        sb08H = window.pageYOffset;
        sb08j = window.pageXOffset;
    } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
        sb08H = document.body.scrollTop;
        sb08j = document.body.scrollLeft;
    } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
        sb08H = document.documentElement.scrollTop;
        sb08j = document.documentElement.scrollLeft;
    }
    return [sb08j,sb08H];
}

/***************************** INICIALIZAÇÃO MENU DROP DOWN SERVIÇOS [INICIALIZAÇÃO DE VARS E MONTAGEM DO MENU] ********************************/
function createDropDownMenu() {
    inicializaMenu();
    inicializaCSS();
    var sb08f = '<div id="sb_dropdown" onmouseover="sb_clearclosewin()" onmouseout="sb_close()" style="z-index: 1000000; position: absolute; display: none">';
    sb08f += '<table width="100%" cellpadding="2" cellspacing="0" style="background-image: url(http://www.seomaster.com.br//img/bookmark-services/bk-menu-bg.jpg); background-repeat: repeat-x; height: 28px">';
    sb08f += '<tr><td align="center" style="font-size: 12px; color: #666666; padding-left:3px; vertical-align:middle; text-align:center"><span id="caption"></span></td><td align="right" style="font-size: 9px; color: #666666; padding-right: 3px"></td></tr>';
    sb08f += '</table>';
    var sb08D = false;
    sb08f += '<div id="bookmark">';
    sb08f += '<table id="sb_services" border="0" width="100%" cellpadding="3" cellspacing="2" style="font-family: Verdana, Arial; font-size: 11px">';
    sb08f += '<tr><td colspan="2" style="height: 0px"></td></tr>';
    var sb08r = sb_services.split(',');
    for (var sb08Q = 0; sb08Q < sb08r.length; sb08Q++) {
        var sb08q = sb08r[sb08Q];
        if (sb08q in services) {
            if (!sb08D)sb08f += '<tr>';
            sb08f += '\x3ctd width=\"50%\" style=\"height: 23px\">\x3ca href=\"/\"  style=\"background-image:url(http://www.seomaster.com.br//img/bookmark-services/' + sb08q + '.gif)\" onclick=\"return sb_open(\'' + services[sb08q][2] + '\');\">\x3cspan style=\"margin-left:17px\">' + services[sb08q][0] + ' </span></a></td>';
            if (sb08D)sb08f += '</tr>';
            sb08D = !sb08D;
        }
    }
    if (sb08D)sb08f += '<td></td></tr>';
    sb08f += '<tr><td colspan="2" style="height: 2px"></td></tr>';
    sb08f += '</table>';
    sb08f += '\x3c/div>\n';
    sb08f += '<div id="show_email" style="display: none; font-size: 11px; padding-left: 20px; padding-top: 6px">';
    sb08f += '<table border="0">';
    sb08f += '<tr><td style="font-size: 12px; color:#666666;">De:</td><td><input id="email_de" type="text" style="width: 130px; height: 18px; font-size: 11px; font-family: Arial; color: #999999" value=" email de" onfocus="clearEmailField(this)"/></td></tr>';
    sb08f += '<tr><td style="font-size: 12px; color:#666666">Para:</td><td><input id="email_para" type="text" style="width: 130px; height: 18px; font-size: 11px; font-family: Arial; color: #999999" value=" email para" onfocus="clearEmailField(this)" /></td></tr>';
    sb08f += '<tr style="color:#666666"><td style="font-size: 12px" valign="top">Texto:</td><td><textarea id="email_msg" style="width: 132px; height: 36px; font-size: 11px; font-family: Arial; color:#000000; margin-top: 0px; border: 1px solid #A7A6AA; background-color:#FFFFFF"></textarea></td></tr>';
    sb08f += '<tr><td colspan="2" align="right"><span id="email_sucesso" style="font-size: 12px; color: #666666;"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="button" value="Enviar" onclick="return sb_send()" style="font-size: 9px"/></td></tr>';
    sb08f += '</table>';
    sb08f += '\x3c/div>\n';
    sb08f += '<center><table width="90%" cellpadding="0" cellspacing="0" style="background-color: #FFFFFF;border-top:1px solid #EEEEEE">';
    sb08f += '<tr><td colspan="2" align="center" style="padding: 0px; height: 20px; text-align:center"><img id="email_img" src="' + rootURL + 'img/email-load.png" style="width: 1px; height: 1px" /><a href="http://www.seomaster.com.br/social-bookmark/soboo.html" target="_blank" style="height: 6px; padding: 0px; font-size: 9px; color: #666666;">- SoBoo - by SEO Master -</a></td></tr>';
    sb08f += '\x3c/table>\x3c/center>\n';
    sb08f += '\x3c/div>\n';
    sb08d = document.createElement('div');
    sb08d.innerHTML = sb08f;
    document.body.insertBefore(sb08d, document.body.firstChild);
    sb08d.style.zIndex = 03641100;
}

function inicializaMenu() {
    sb08s = false;
    if (typeof sb_id == 'undefined')sb_id = '';
    if (typeof sb_services == 'undefined')sb_services = 'favoritos, email, google, yahoo, live, delicious, orkut, twitter, dihitt, mais';
    if (typeof sb_offset_top != 'number')sb_offset_top = 0;
    if (typeof sb_offset_left != 'number')sb_offset_left = 0;
    if (typeof sb_caption_bookmark == 'undefined')sb_caption_bookmark = 'Compartilhe essa p&aacute;gina';
    if (typeof sb_caption_email == 'undefined')sb_caption_email = 'Envie para um amigo';
    if (typeof sb_css == 'undefined')sb_css = rootURL + 'css/bookmark-widget.css';
    sb_services = sb_services.replace(/\s/g, '');
}

function inicializaCSS() {
    var objCSS = document.createElement('link');
    objCSS.rel = 'stylesheet';
    objCSS.type = 'text/css';
    objCSS.href = sb_css;
    objCSS.media = 'all';
    document.lastChild.firstChild.appendChild(objCSS);
}

/***************************** ENVIAR SERVIÇO DE BOOKMARK ********************************/
function sb_open(objService) {
    var method;
    if ((objService == services['mais'][2]) || (typeof objService == 'undefined')) {
        objService = '';
        method = 0;
    } else {
        method = 1;
    }
    if (objService == services['email'][2]) {
        onFocus(objService);
        return false;
    }
    sb_closewin();
    if (objService == services['favoritos'][2]) {
        if (document.all)window.external.AddFavorite(sb_url, sb_title); else window.sidebar.addPanel(sb_title, sb_url, '');
        return false;
    }
    window.open(buildURL(objService, method), 'SoBoo', 'scrollbars=yes,menubar=no,width=530,height=650,resizable=yes,toolbar=no,location=no,status=no');
    return false;
}

/***************************** MONTAGEM PAREMETROS URL BOOKMARK ********************************/
function buildURL(objService, method) {
    var sb08n = encodeURIComponent(sb_url);
    var sb08M = encodeURIComponent(sb_title);
    return 'http://www.seomaster.com.br//Bookmark?m=' + method + '&id=' + sb_id + '&s=' + objService + '&u=' + sb08n + '&t=' + sb08M;
}

/***************************** FECHAR MENU ********************************/
function sb_close() {
    sb08A = setTimeout("sb_closewin()", 0764);
}

function sb_closewin() {
    var sb08t = getObj('sb_dropdown');
    sb08t.style.display = 'none';
    return false;
}

function sb_clearclosewin() {
    if (typeof sb08A != "undefined")clearTimeout(sb08A);
}

/***************************** SELECIONA O INNER HTML EM FOCO (BOOKMARK OU EMAIL) ********************************/
function onFocus(sb08c) {
    var sb08B = getObj('bookmark');
    var sb08b = getObj('show_email');
    var sb08o0 = getObj('caption');
    var sb08O0 = getObj('email_sucesso');
    sb08B.style.display = 'none';
    sb08b.style.display = 'none';
    sb08O0.innerHTML = '';
    if (sb08c == 'bookmark' || sb08c == '') {
        sb08B.style.display = 'block';
        sb08o0.innerHTML = sb_caption_bookmark;
    } else {
        sb08b.style.display = 'block';
        sb08o0.innerHTML = sb_caption_email;
    }
}

/***************************** ENVIAR EMAIL ********************************/
function sb_send() {
    var sb08l0 = getObj('email_de');
    var sb08i0 = getObj('email_para');
    var sb08O0 = getObj('email_sucesso');
    var sb1595 = getObj('email_img');
    var sb08o1 = getObj('email_msg');
    if ((!validateEmail(sb08l0.value)) || (!validateEmail(sb08i0.value))) {
        alert('Email invalido!');
        return;
    }
    sb08l1 = 'http://www.seomaster.com.br//Bookmark?m=3&id=' + sb_id + '&u=' + encodeURIComponent(sb_url) + '&from=' + encodeURIComponent(sb08l0.value) + '&to=' + encodeURIComponent(sb08i0.value) + '&msg=' + encodeURIComponent(sb08o1.value);
    sb1595.src = sb08l1;
    sb08O0.innerHTML = 'Mensagem enviada!';
    sb08A = setTimeout("sb_closewin()", 02260);
    return false;
}

function clearEmailField(sb22i1) {
    sb22i1.style.color = '#000000';
    if ((sb22i1.value == ' email de') || (sb22i1.value == ' email para')) sb22i1.value = '';
}

/***************************** VALIDAÇÃO DE EMAIL ********************************/
function validateEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9])([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) == false) {
        return false;
    }
    return true;
}
/***************************** SUPORTE PLUGINS ********************************/
function QueryString(variavel, url) {
    qs = new Array();
    variaveis = url.replace(/\x3F/, "").replace(/\x2B/g, " ").split("&");
    if (variaveis != "") {
        for (i = 0; i < variaveis.length; i++) {
            nvar = variaveis[i].split("=");
            qs[nvar[0]] = unescape(nvar[1]);
        }
    }
    return qs[variavel];
}

function setBloggerParams(qs) {
    sb_url = decodeURIComponent(escape(QueryString('u', qs.substring(qs.indexOf('?'), qs.length))));
    if (navigator.appName == 'Microsoft Internet Explorer') {
        sb_title = decodeURIComponent(QueryString('t', qs.substring(qs.indexOf('?'), qs.length)));
    }
    else {
        sb_title = decodeURIComponent(escape(QueryString('t', qs.substring(qs.indexOf('?'), qs.length))));
    }
}

function sb_plugin(sb_plugin_url, sb_plugin_title) {
    if (typeof sb_plugin_url != 'undefined' || sb_plugin_url != '')sb_url = sb_plugin_url;
    if (typeof sb_plugin_title != 'undefined' || sb_plugin_title != '')sb_title = sb_plugin_title;
}