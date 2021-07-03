	document.write('<div id="avl_50a281f56f4fb"></div>');
		ODOnLoad = function(f) {if (this.loaded) window.setTimeout(f, 0);
			else if (window.addEventListener) window.addEventListener("load", f, false);
		    else if (window.attachEvent) window.attachEvent("onload", f);
		}
		ODOnLoad.loaded = false; ODOnLoad(function() {this.ODOnLoad.loaded = true;});
		ODOnLoad(function(){	OD.Avaliacao(
								{
									div: 'avl_50a281f56f4fb', 
									tipo: 1, 
									barra: true,
									favoritar: true,
									id: 30304, 
									auto: true,
									geral:{
											mostrar: true,
											cabecalho: true,
											rodape: false,
											nota: 0
										},
									usuario:{
											mostrar: true,
											cabecalho: true,
											rodape: false,
											habilitado: true,
											nota: 0
										}
								});
							});