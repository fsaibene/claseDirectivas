angular
	.module('app')
	.directive('utnSaludo', function(){
		return {
			template : "Hola Mundo"		
		}
	})//Dir utnSaludo
	.directive('utnSaludoDos',function(){
		return {
			replace : true,//Tiene que estar en True para que funcione en los Comments ('M')
			restrict : "MEAC",//ElementoAtributoClase M:Comments
			template : "<h1>Hola Mundo</h1>"		
		}
	})//Dir utnSaludoDos
	.directive('utnTitulo',function(){
		return {
			replace : true,
			restrict : "E",
			templateUrl : "templates/templateTitulo.html"		
		}
	})//Dir utnTitulo
	.directive('utnTituloParametro',function(){
		return {
			scope : {
				miTitulo : '@miparametro'
			},
			replace : true,
			restrict : "E",
			templateUrl : "templates/templateTitulo.html"		
		}
	})//Dir utnTituloParametro
	.directive('utnBandera',function(){
		return {
			scope : {
				nombrePais : '@nombrepais',
				fotoBandera : '@fotobandera'
			},
			replace : true,
			restrict : "E",
			templateUrl : "templates/templateBandera.html"		
		}
	})//Dir utnBandera
	.directive('utnBanderaObj',function(){
		return {
			scope : {
				miBandera : '=banderaporparametro'
			},
			replace : true,
			restrict : "E",
			templateUrl : "templates/templateBandera.html"		
		}
	})//Dir utnBanderaObj
;//Modulo