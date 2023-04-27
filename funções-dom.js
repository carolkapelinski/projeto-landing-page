function login() {

    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value

    if  (nome === "") {
       alert("Por favor, insira o seu nome.")
    }

    if (email === ""){
        alert("Por favor, insira o seu e-mail.")
    }

    if (email !== "" && nome !== ""){
    location.replace("index.html")
    }
}

function cadastro(){
    let nome = document.getElementById("nome").value
    let email = document.getElementById("email").value
    let endereco = document.getElementById("endereco").value
    let celular = document.getElementById("celular").value
    let senha = document.getElementById("senha").value

    if  (nome === "") {
        alert("Por favor, insira o seu nome.")
     }
 
     if (email === ""){
         alert("Por favor, insira o seu e-mail.")
     }

     if  (endereco === "") {
        alert("Por favor, insira o seu endereço.")
     }
 
     if (celular === ""){
         alert("Por favor, insira o seu número de telefone.")
     }
     if  (senha === "") {
        alert("Por favor, insira uma senha.")
     }

     if (email !== "" && nome !== "" && endereco !== "" && celular !== "" & senha !== ""){
        location.replace("done-cadastro.html")
        }
}