document.getElementById("sendBoton").addEventListener("click",validaFormulario )

function validaFormulario(){
  if(document.getElementById("name").value != "" &&         document.getElementById("email").value != ""&&
    document.getElementById("telefone").value != ""){
      alert("Perfeito! Enviado 💜")
  }else{
      alert("Preencha seus dados!")
  }
}