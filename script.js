function Mostrar()
{
    texto = email.value;
    alert(texto);
}

function MostrarJanelinha()
{
    texto = email.value;
    txt.innerHTML = texto;
    janelinha.style.display = "block";
}
s = 0
function Somar()
{
    s = s + 1;
    resultado.innerHTML = s; /* sempre usar inner para um span */
    email.value = s /* sempre usar para uma caixinha de texto */
}

function Imprimir() /*Imprime o que têm  na tela */
{
    window.print()
}

function Fechar()
{
    janelinha.style.display = "none"; 
}