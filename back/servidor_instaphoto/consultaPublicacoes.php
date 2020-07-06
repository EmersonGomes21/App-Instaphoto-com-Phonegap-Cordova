<?php 
	header('Content-type: application/json');
	header('Access-Control-Allow-Origin:*');

	include 'conexao.php';


	$chave_user = $_POST['cod'];
	//$chave_user = '1';


	$consulta = $conexao->query("SELECT * FROM publicacoes INNER JOIN usuarios WHERE publicacoes.id_user=usuarios.cod and usuarios.cod=$chave_user;");


	// verifica se a matriz $consulta possui linhas (se retornou algo)
if ($consulta->fetchColumn()==0) {

    // $resposta é o vetor json de saída do programa - usuário não encontrado
    $dados = array('Resp'=> '0');
}  

	while ($exibe=$consulta->fetch(PDO::FETCH_ASSOC)) {
		

		$dados[]= array(    'Resp' => '1',
		                    'outros_autores'=>$exibe['outros_autores'],
		                     'titulo'=>$exibe['titulo'],
					     	'local' =>$exibe['local'],
					     	'ed_ano'=>$exibe['editora_ano'],
					
                    
	);
	}
	//ob_clean();
	echo json_encode($dados);
?>