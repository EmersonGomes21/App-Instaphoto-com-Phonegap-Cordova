window.onload = function() {
	$("#cabecalho").hide();
	$("#user").hide();
	$("#pub").hide();
	$("#novocadastro").hide();
	$("#novapublicacao").hide();
	$("#delpublicacao").hide();
	$("#delpublicacao").hide();	
}
//-------------------------------------------------------------------------

function verificaUsuario() {
	$.ajax({
		url:'https://sigconflix.000webhostapp.com/servidor_instaphoto/consultaUser.php',
		dataType:'json',
		type:'POST',

		data:{usuario: $("#usuario").val(),
				senha: $("#senha").val()},
				success: function(r) {
					if (r.Resp==0) {
						navigator.notification.alert('Usuário e/ou senha não encontradas!!','','Mensagem');
					}else if(r.Resp==1){
						localStorage.setItem('Cod',r.Cod);
						localStorage.setItem('Nome',r.Nome);
						localStorage.setItem('Email',r.Email);
						localStorage.setItem('Perfil',r.Perfil);
						localStorage.setItem('Outros_autores',r.outros_autores);
						localStorage.setItem('Cod_pub',r.cod_pub);
						localStorage.setItem('Titulo',r.titulo);

						inicio();
					}
				},
				error: function(e) {
					navigator.notification.alert('Houve um erro de conexão de banco de dados!!','','Erro');
				}
	})
}

//-------------------------------------------------------------------------
function inicio() {
	$("#cabecalho").show();
	$("#user").show();
	$("#logon").hide();
	$("#novocadastro").hide();
	$("#novapublicacao").hide();
	$("#delpublicacao").hide();



	//recuperar dados do local storage
	var Nome = localStorage.getItem('Nome');
	var Perfil = localStorage.getItem('Perfil');
	var Outros_autores = localStorage.getItem('Outros_autores');

	//var foto = "<img class='foto' src='http://localhost:8080/servidor/uploads/"+Perfil+"width='80%'>";
	var foto = "<img class='foto' src='https://sigconflix.000webhostapp.com/servidor_instaphoto/uploads/" + Perfil + "' width='80%'>";
	var nome = "Nome: " + Nome + "<br><br>";
	var outros_autores = "Outros autores: " + Outros_autores + "<br><br>";

	$("#Perfil").html(foto);
	$("#Nome").html(nome);
	$("#Outros_autores").html(outros_autores);
}

//-------------------------------------------------------------------------
function publicacoes() {
	$("#cabecalho").show();
	$("#user").show();
	$("#logon").hide();
	$("#novapublicacao").hide();

	var cod=localStorage.getItem('Cod');  // esse ano 

	$.ajax({
		url:'https://sigconflix.000webhostapp.com/servidor_instaphoto/consultaPublicacoes.php',
		dataType:'json',
		type:'POST',

		data:{cod: localStorage.getItem('Cod')},

		success: function(r) {
			var total = r.length;
			var i ;
			var postagens = "";

			if (r.Resp==1) {
				navigator.notification.alert('Você possui publicações!!','','Mensagem');
			}
			else if (r.Resp==0) {
				navigator.notification.alert('Você não possui publicações!','','Mensagem');
			}
			
			for (i = 0; i<total; i++) {
					postagens+= "<br><br>";
					postagens+="<div style='width:100%;text-align:center;margin-top:10px'>"+r[i].titulo + "</div>";
					postagens+="<div style='width:100%;text-align:center;margin-top:10px'>"+r[i].local  + "</div>";
					postagens+="<div style='width:100%;text-align:center;margin-top:10px'>"+r[i].ed_ano + "</div>";

					
					$("#pub").html(postagens);
					$("#pub").show();
			
				}	
			
				},
 
		     error: function(e) {
				navigator.notification.alert('Houve um erro de conexão de banco de dados!!( exem: talvez você não possua publicações)','',e);	
				}


	})
}
//-------------------------------------------------------------------------
function sair() {
		navigator.notification.confirm(
			'Deseja sair',
				respostaSair,
				'Sair',
				['Não','Sim']);
}
//-------------------------------------------------------------------------
function respostaSair(r) {
	if (r==2) {
		localStorage.clear();
		$("#pub").hide();	
		$("#user").hide();
		$("#cabecalho").hide();
		$("#logon").show();
		$("#novocadastro").hide();
	$("#novapublicacao").hide();
	$("#delpublicacao").hide();
	}
}



//-------------------------------------------------------------------------

function LoginBt() {
	    localStorage.clear();
		$("#pub").hide();	
		$("#user").hide();
		$("#cabecalho").hide();
		$("#novocadastro").hide();
		$("#logon").show();
		$("#novapublicacao").hide();
	    $("#delpublicacao").hide();
	    $("#delpublicacao").hide();
}

//-------------------------------------------------------------------------
function cadastro() {
	$("#logon").hide();
	$("#delpublicacao").hide();
	$("#cabecalho").show();
	$("#novocadastro").show();
}


function btPublicacao() {
	$("#logon").hide();
	$("#pub").hide();	
	$("#user").show();
	$("#cabecalho").show();
	$("#novapublicacao").show();
	$("#delpublicacao").hide();
}	


function btDelPublicacao() {
	$("#logon").hide();
	$("#pub").hide();	
	$("#user").show();
	$("#cabecalho").show();
	$("#novapublicacao").hide();
	$("#delpublicacao").show();

}	

//-------------------------------------------------------------------------
function cadastraUsuario() {
	$("#novapublicacao").hide();
	//monta estrutura json
	$.ajax({
		url:'https://sigconflix.000webhostapp.com/servidor_instaphoto/insereUser.php',
		dataType:'json',
		type : 'POST',

		//monta os dados



		data:{ nome:  $("#cad_nome").val(),
			   email: $("#cad_email").val(),
			   senha: $("#cad_senha").val(),
			    perfil: $("#cad_perfil").val(),
			    outros_autores: $("#cad_outros_autores").val()},

		//se teve sucesso recebe os dados em r
		success:function(r) {
			if (r.Resp==1) {
				navigator.notification.alert('Usuário não incluído!!','','Mensagem');
			}
			else if (r.Resp==0) {
				navigator.notification.alert('Usuário incluído com sucesso!!','','Mensagem');
			}
		},

		//se der erro
		error:function(e) {
					navigator.notification.alert('Erro de conexão com o banco !!','','Erro');
				}

	})
}



function addPublicacao() {
	//monta estrutura json

	var cod=localStorage.getItem('Cod');

	$.ajax({
		url:'https://sigconflix.000webhostapp.com/servidor_instaphoto/inseriPublicacao.php',
		dataType:'json',
		type : 'POST',

		//monta os dados
		data:{ cod: localStorage.getItem('Cod'),
			   titulo:  $("#cad_titulo").val(),
			   local: $("#cad_local").val(),
			   editora_ano: $("#cad_editora_ano").val()},

		//se teve sucesso recebe os dados em r
		success:function(r) {
			if (r.Resp==1) {
				navigator.notification.alert('Publicação não cadastrada!!','','Mensagem');
			}
			else if (r.Resp==0) {
				navigator.notification.alert('Publicação cadastrada com sucesso!!','','Mensagem');
			}
		},

		//se der erro
		error:function(e) {
					navigator.notification.alert('Erro de conexão com o banco !!','','Erro');
				}

	  })
  }


function delPublicacao() {


	var titulo=localStorage.getItem('Titulo');

	$.ajax({
		url:'https://sigconflix.000webhostapp.com/servidor_instaphoto/delPublicacao.php',
		dataType:'json',
		type : 'POST',

		//monta os dados
		data:{ 
		            titulo: localStorage.getItem('Titulo'),
			        local: $("#cad_local").val(),
			        editora_ano: $("#cad_editora_ano").val()},

		//se teve sucesso recebe os dados em r
		success:function(r) {
			if (r.Resp==1) {
				navigator.notification.alert('Publicação não deletada!!','','Mensagem');
			}
			else if (r.Resp==0) {
				navigator.notification.alert('Publicação deletada com sucesso!!','','Mensagem');
			}
		},

		//se der erro
		error:function(e) {
					navigator.notification.alert('Erro de conexão com o banco !!','','Erro');
				}

	  })
  }






/*

function validarCad() {

	//monta estrutura json
	$.ajax({
		url:'https://instaphotoapp.000webhostapp.com/instaphoto/validarCad.php',
		dataType:'json',
		type : 'POST',

		//monta os dados

		data:{ nome:  $("#cad_nome").val(),
			   email: $("#cad_email").val(),
			   senha: $("#cad_senha").val(),
			    perfil: $("#cad_perfil").val(),
			    outros_autores: $("#cad_outros_autores").val()},

		//se teve sucesso recebe os dados em r
		success:function(r) {
			if (r.Resp==1) {
				navigator.notification.alert('Todos os campos deverão serem preenchidos','','Mensagem');
			}
			else if (r.Resp==0){

				cadastraUsuario();
			}
		},

		//se der erro
		error:function(e) {
					navigator.notification.alert('Erro de conexão com o banco !!','','Erro');
				}

	})
} 
*/
