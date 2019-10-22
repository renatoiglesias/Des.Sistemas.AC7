function escrever(n1){
  
  var n2 = document.getElementById('resultado').value += n1;
  
}

 function resultado1(num){

  var cont = document.getElementById("resultado").value;
  
  try {
    document.getElementById("resultado").value = eval(cont);

  }
  catch(err) {
   
    document.getElementById("resultado").value = "Erro de operação.";//err.message"";
    
  }
 
}