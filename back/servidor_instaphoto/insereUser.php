<?php
header ('Content-type: application/json');
header ('Access-Control-Allow-Origin:*');

include 'conexao.php';

$recebe_nome=$_POST['nome'];
$recebe_email=$_POST['email'];
$recebe_senha=$_POST['senha'];
$recebe_perfil=$_POST['perfil'];
$recebe_outros_autores=$_POST['outros_autores'];

$inserir = $conexao->prepare("INSERT INTO usuarios SET nome = ?, email = ?, senha = ?, perfil=?, outros_autores=?");
$inserir->execute(array($recebe_nome, $recebe_email, $recebe_senha, $recebe_perfil, $recebe_outros_autores));



// verifica se a matriz $consulta possui linhas (se retornou algo)
if ($inserir->fetchColumn()==0) {

    // $resposta é o vetor json de saída do programa - usuário não encontrado
    $resposta = array('Resp'=> '0');
}
else {
    // se a matriz $consulta possui linhas faz select para selecionar os registros
   
   
    
    // recebe os dados da matriz e monta o vetor $resposta no formato json
    $resposta = array('Resp' => '1');
                     
    }

// mandando o vetor de resposta
echo json_encode($resposta);


?>