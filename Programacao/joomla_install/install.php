<?php
    header("Content-Type: text/html;  charset=UTF-8",true);
    /**
     * Restore do Joomla após o Backup com o SimpleBackup
     *
     * @author Ribamar FS
     * @email-author - ribafs@gmx.com
     * @site-author - http://ribafs.org
     * @github.com/ribafs
     */

if($_POST['enviar']){

    $host1=$_POST['host1'];
    $host2=$_POST['host2'];

    $user1=$_POST['user1'];
    $user1 = "\$user = '$user1'";
    $user2=$_POST['user2'];
    $user3 = "\$user = '$user2'";

    $pass1=$_POST['pass1'];
    $pass2=$_POST['pass2'];

    $db1=$_POST['db1'];
    $db2=$_POST['db2'];

    $folder=$_POST['folder'];
    if(!is_dir($folder)){
        mkdir($folder);
    }    

    $log1=$_POST['log1'];
    $tmp1=$_POST['tmp1'];

    $log2=$folder.'/administrator/logs';
    $tmp2=$folder.'/tmp';

//$log_path = '/home/ribaf018/public_html/portal/administrator/logs'
    $sql='site.sql';
    $zipbkp='site.zip';

//Descompactar zip na pasta $folder

    function extract_zip($Sourse_file, $extract_folder){
        $zip = new ZipArchive() ;
        if (!$zip->open($Sourse_file) == TRUE) {
            return false;
        }
        $zip->extractTo($extract_folder);
        $zip->close();
            return true;
        // Crédito: https://stackoverflow.com/questions/8889025/unzip-a-file-with-php/42756403#42756403
    }

    if(extract_zip($zipbkp, $folder)){
        print '<h3>Descompactado com sucesso</h3>';
    }else{
        print '<h3>Erro na Descompactação do arquivo</h3>';
        exit;
    }

// Ajustes no configuration.php
    /**
     * Replaces a string in a file
     *
     * @param string $FilePath
     * @param string $OldText text to be replaced
     * @param string $NewText new text
     * @return array $Result status (success | error) & message (file exist, file permissions)
     */
    function replace_in_file($FilePath, $OldText, $NewText){
        $Result = array('status' => 'error', 'message' => '');
        if(file_exists($FilePath)===TRUE){
            if(is_writeable($FilePath)){
                try{
                    $FileContent = file_get_contents($FilePath);
                    $FileContent = str_replace($OldText, $NewText, $FileContent);
                    if(file_put_contents($FilePath, $FileContent) > 0){
                        $Result["status"] = 'sucesso';
                    }else{
                       $Result["message"] = 'Erro enquanto gravava o arquivo';
                    }
                }
                catch(Exception $e){
                    $Result["message"] = 'Erro : '.$e;
                }
            }else{
                $Result["message"] = 'Arquivo '.$FilePath.' não tem permissão de escrita !';
            }
        }else{
            $Result["message"] = 'Arquivo '.$FilePath.' não existe !';
        }
        return $Result;
        //Crédito: https://stackoverflow.com/questions/11901521/replace-string-in-text-file-using-php#11901576
    }

    replace_in_file($folder.'/configuration.php', $host1, $host2); 
    replace_in_file($folder.'/configuration.php', $user1, $user3);  
    replace_in_file($folder.'/configuration.php', $pass1, $pass2);   
    replace_in_file($folder.'/configuration.php', $db1, $db2);   

    replace_in_file($folder.'/configuration.php', $log1, $log2);   
    replace_in_file($folder.'/configuration.php', $tmp1, $tmp2);   

// Criação do banco e importação do script sql
    function import_sql($host2, $user2, $sql, $pass2,$db2){
        $conn = new mysqli($host2, $user2, $pass2);
        $conn->set_charset('utf8');

        $query_sql = "CREATE DATABASE IF NOT EXISTS ".$db2;

        if ($conn->query($query_sql) === TRUE) {
            echo "Banco criado com sucesso<br>";
        } else {
            echo "Erro na criação do banco de dados: " . $conn->error;
        }
        $conn->close();


        $conn = new mysqli($host2, $user2, $pass2, $db2);
        $conn->set_charset('utf8');

        $filename = $sql; 

        $op_data = '';
        $lines = file($filename);
        foreach ($lines as $line){
            if (substr($line, 0, 2) == '--' || $line == ''){//This IF Remove Comment Inside SQL FILE
                continue;
            }
            $op_data .= $line;
            if (substr(trim($line), -1, 1) == ';'){//Breack Line Upto ';' NEW QUERY
                $conn->query($op_data);
                $op_data = '';
            }
            // Crédito: https://stackoverflow.com/questions/19751354/how-to-import-sql-file-in-mysql-database-using-php#19752106
        }
    }
    import_sql($host2, $user2, $sql, $pass2,$db2);

    print '<h2>Agora já pode abrir o Joomla instalado</h2>';
}
