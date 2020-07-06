<?php
	$usuario ='seu usuário do Bd';
	$senha ='senha do seu banco de dados';

	try {
		$conexao = new PDO("mysql:host=localhost;dbname=nomeDoBancoDeDados;charset=utf8",$usuario,$senha);
		

		//echo "Conexão realizada com sucesso!!"; descomente para testar a conexão!
	
	} catch (Exception $e) {
		echo $e->getMessage();
	}
?>