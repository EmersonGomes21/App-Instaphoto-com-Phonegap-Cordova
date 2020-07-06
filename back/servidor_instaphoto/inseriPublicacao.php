<?php
header ('Content-type: application/json');
header ('Access-Control-Allow-Origin:*');

include 'conexao.php';
$recebe_id_user=$_POST['cod'];
$recebe_titulo=$_POST['titulo'];
$recebe_local=$_POST['local'];
$recebe_editora_ano=$_POST['editora_ano'];

$inserir = $conexao->prepare("INSERT INTO publicacoes SET id_user=?, titulo = ?, local = ?, editora_ano = ?");
$inserir->execute(array($recebe_id_user, $recebe_titulo, $recebe_local, $recebe_editora_ano));



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