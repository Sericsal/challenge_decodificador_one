var inputTexto = document.querySelector(".input-texto");
var mensagem = document.querySelector(".mensagem");
var cripto=[];

function btnEncriptar(){
   inputTexto.value = inputTexto.value.toLowerCase()
   var textoEncriptado = encriptar(inputTexto.value);
	mensagem.value = textoEncriptado;
   document.querySelector(".input-texto").value = "";
	mensagem.style.backgroundImage="none";
}

function encriptar(stringEncriptada){
	const usingArrayFrom = Array.from(inputTexto.value);
	var texto = usingArrayFrom;  // o inputTexto virou o array texto[]

    for (var i=0; i < texto.length; i++){
        if(texto[i]=="a"){
           texto[i]="ai";
        }
        if(texto[i]=="e"){
           texto[i]="enter";
         }
        if(texto[i]=="i"){
           texto[i]="imes";
        }
        if(texto[i]=="o"){
           texto[i]="ober";
        }
        if(texto[i]=="u"){
           texto[i]="ufat";
        }
        cripto.push(texto[i]); // uma nova array é criada com os novos elementos para voltar ao original
    }

    console.log(cripto);

    stringEncriptada = texto.join('');

    console.log(stringEncriptada);

	return stringEncriptada;

}

function btnCopiar(){
   var textoCopiado = mensagem.value;
   console.log(textoCopiado);
   mensagem.value = "";
   alert("Texto criptografado copiado");
   document.querySelector(".input-texto").value = textoCopiado;

}   

function btnDescriptar(){
   const textoOriginal = descriptar(document.querySelector(".input-texto").value);
   mensagem.value = textoOriginal;
   document.querySelector(".input-texto").value = "";

}


function descriptar(stringDescriptada){
	let matrixCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
	for(let i=0; i < matrixCodigo.length; i++){
		if(stringDescriptada.includes(matrixCodigo[i][0])){
			stringDescriptada = stringDescriptada.replaceAll(matrixCodigo[i][0], matrixCodigo[i][1]);
		}
	}

	return stringDescriptada;
 }


   







