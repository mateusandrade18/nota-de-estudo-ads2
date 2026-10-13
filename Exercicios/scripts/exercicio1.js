const buttonEx1 = document.getElementById ("exercicio1")
 
buttonEx1.addEventListener ("click", () => {
    const num1 =  Number(prompt("informe um número"))
    const num2 =  Number(prompt("informe outro número"))
 
    alert (num1 + num2)
})