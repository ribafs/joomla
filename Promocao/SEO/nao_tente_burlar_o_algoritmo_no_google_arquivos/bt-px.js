/* Tracket BT 
- 09/08/2012 12:42 - Inclusão 
- 09/08/2012 15:35 - Alterado para 50%
- 15/08/2012 11:35 - Alterado para 100% 
- 25/09/2012 14:55 - Retirado/Substituido o trecho abaixo pelo partner, mudando de img para script
--- var btimage = new Image();btimage.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'tracker.bt.uol.com.br/track';
*/
var scriptTag = document.createElement('script');
scriptTag.type='text/javascript'; 
// scriptTag.async=true; // testar esta funcionalidade
scriptTag.src = ('https:' == document.location.protocol ? 'https://tracker.bt.uol.com.br/track' : 'http://tracker.bt.uol.com.br/partner'); 
document.getElementsByTagName('head')[0].appendChild(scriptTag);


