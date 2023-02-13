//Haz tú validación en javascript acá
const enviarMensaje = () => {
    console.log();
  
    let mail = document.createElement("a");
    let asunto = document.getElementById("asunto").value;
    let Mensaje = document.getElementById("mensaje").value;
  
    asunto = asunto.replace(/ /gi, "%20");
    Mensaje = Mensaje.replace(/ /gi, "%20");
  
    referencia =
      "mailto:olivera_julieta@outlook.com?subject=" +
      asunto +
      "&body=" +
      Mensaje;
    mail.href = referencia;
    mail.click();
  };
  
  let button = document.getElementById("btnenviar");
  button.addEventListener("click", enviarMensaje);
  