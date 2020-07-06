<?php
header ('Content-type: application/json');
header ('Access-Control-Allow-Origin:*');

include 'conexao.php';

$recebe_nome=$_POST['nome'];
$recebe_email=$_POST['email'];
$recebe_senha=$_POST['senha'];
$recebe_perfil=$_POST['perfil'];
$recebe_outros_autores=$_POST['outros_autores'];

if ($recebe_nome==""){
//$resposta=1;
$resposta = ('Resp'=> '1');

}

else if ($recebe_email==""){
//$resposta=1;
$resposta = ('Resp'=> '1');

}

else if ($recebe_senha==""){
//$resposta=1;
$resposta = ('Resp'=> '1');

}

else if ($recebe_perfil==""){
//$resposta=1;
$resposta = ('Resp'=> '1');

}

else if ($recebe_outros_autores==""){
//$resposta=1;
$resposta = ('Resp'=> '1');

} 
 else (){
//$resposta=0;
$resposta = ('Resp'=> '0');

}

// mandando o vetor de resposta
echo json_encode($resposta);


?>