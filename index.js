const num1 = Number(prompt("Digite um numero"))
const num2 = Number(prompt("Digite um numero"))
const operacao = prompt("Escolha a operacao + - * /")

if(operacao === "+"){
  alert(num1 + num2)
}else if(operacao === "-"){
  alert(num1 - num2)
}else if(operacao === "*"){
  alert(num1 * num2)
}else if(operacao === "/"){
  alert(num1 / num2)
}else{
  alert("OPCAO INVALIDA")
}