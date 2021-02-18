# Descompactando arquivos JPA

JPA - Joomla Pack Archive

Por default o Akeeba Backup gera os backups no formato JPA. Também existe a opção de gerar em ZIP, mas JPA é o método recomendado. Ele dá um pouco mais de trabalho que usando zip, mas nada demais quando entendemos.

## Sobre a tradução para o pt-BR

Fiz um fork do original

https://github.com/akeeba/kickstart

Que traz apenas o arquivo de tradução para en-BR

Encontrei este

https://github.com/cyberalpha/GarbageSocial/blob/master/pt-BR.kickstart.ini

Que já traz parte da tradução.

Então completei a tradução e enviei para o fork criado em

https://github.com/ribafs/kickstart

O arquivo pt-BR.kickstart.ini está na pasta

translations/kickstart

Uma estrutura como o GitHub é algo muito importante para a nossa área.

## Restaurar o backup de um site feito com o Akeeba

O Kickstart não é um instalador. É uma ferramenta de extração de arquivos. O instalador real foi colocado dentro do arquivo no momento do backup.

O Kickstart sobrescreve os arquivos sem aviso, então não restaure no diretório atual do site, sob pena de que todos sejam sobrescritos e sem aviso.

## Gere o backup do site com o Akeeba Backup

Vou supor que o site está na pasta /var/www/html/site

Geralmente restauramos um site quando acontece algum problema.

Desejamos restaurar um backup de certa data, então, por conta da segurança eu faço assim: renomeio a pasta do site atual para algo como

/var/www/html/sitebk

E crio a pasta

/var/www/html/site

Que é a pasta que o site anterior usava. Assim fica mais cômodo e não precisaremos anterar depois do restore.
Na pasta /var/www/html/site coloco o kickstart.php e o arquivo de backup gerado pelo AkeebaBackup, pois o kickstart restaurará o site na pasta onde ele se encontra.

Download
https://www.akeeba.com/download.html

Arquivo de tradução para pt-br
https://github.com/cyberalpha/GarbageSocial/blob/master/pt-BR.kickstart.ini

Minha estrutura
```php
/var/www/html/site
	kickstart.php
	pt-BR.kickstart.ini
	site-backup-20210217-191724utc-NlJYJ69GmvopkkQu.jpa
```	
A pasta /var/www/html/site precisa dar permissão de escrita para o servidor web

Chame pelo navegador (supondo no localhost)

http://localhost/site/kickstart.php

## Selecione o arquivo de backup

Leia a mensagem e tecle Ecs para fechá-la

Archive directory: /var/www/html/site (pasta onde está o kickstart.php)
Arquivo de backup: site-backup-20210217-191724utc-NlJYJ69GmvopkkQu.jpa (arquivo de backup gerado pelo Akeeba)
Senha do arquivo de backup (para arquivos do tipo JPS) - senha do site

Clique em Iniciar

E aguarde a extração dos arquivos

## Restauração e Organização

Clique em
Executar o instalador Veja que ele abriu uma outra aba e manteve a atual aberta.

## Pre-installation check

Verifique se tem algum problema. Caso não tenha clique em Next

## Restoration of site's main database

É prudente indicar um banco diferente do atual, mas pode manter o mesmo

Confira e Next

## Database restoration

Clique em Next step

## Site Parameters

Podemos mudar o login e a senha do admin, mas também podemos manter

## Almost there! /Quase lá!

Feche a aba atual para retornar para a tela anterior do Kickstart

## Restauração e Organização

Clique em Organizar

## Acesse o front-end do seu site   Acesse o back-end do seu site

Caso algo não tenha funcionado veja esta página

https://www.akeeba.com/documentation/akeeba-kickstart-documentation/post-restoration.html

Agora podemos acessar o site ou o administrator através do respectivo botão

Referência
https://www.cloudweblabs.com/how-to-extract-and-use-jpa-file/

