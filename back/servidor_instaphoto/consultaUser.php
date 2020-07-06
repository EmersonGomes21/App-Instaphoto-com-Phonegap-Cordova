<?php

// especifica o tipo de informação que vai ser utilizada
header('Content-type: application/json');

// solicita permissão para o servidor receber informação 
// de origem externa (qualquer local *)
header('Access-Control-Allow-Origin:*');

// cria a conexão com o BD
include 'conexao.php';

// recebe as informações externas pela função $_POST
$recebe_usuario = $_POST['usuario'];   
$recebe_senha = $_POST['senha'];  
//$recebe_usuario ='tads@uepa.br';
//$recebe_senha = '123';
// cria o objeto do tipo matriz $consulta do select para contar o numero de registros
$consulta = $conexao->query("SELECT COUNT(*) FROM usuarios WHERE email='$recebe_usuario' AND senha='$recebe_senha'");

// verifica se a matriz $consulta possui linhas (se retornou algo)
if ($consulta->fetchColumn()==0) {

    // $resposta é o vetor json de saída do programa - usuário não encontrado
    $resposta = array('Resp'=> '0');
}
else {
    // se a matriz $consulta possui linhas faz select para selecionar os registros
    $consulta = $conexao->query("SELECT * FROM usuarios WHERE email='$recebe_usuario' AND senha='$recebe_senha'");
    
    // move para a variável $exibe cada linha da matriz $consulta
    foreach ($consulta as $exibe) {
    
    // recebe os dados da matriz e monta o vetor $resposta no formato json
    $resposta = array('Resp' => '1',
                      'Cod' => $exibe['cod'],
                      'Nome' => $exibe['nome'],
                      'Email' =>$exibe['email'],
                      'Perfil' =>$exibe['perfil'],
                      'outros_autores' =>$exibe['outros_autores'])
                      ;
    }
}
// mandando o vetor de resposta
echo json_encode($resposta);

?>

