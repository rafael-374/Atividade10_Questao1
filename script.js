function produto (x, y)
{
    return x*y
}

let num1 = parseInt(prompt("Digite o número 1: "))
let num2 = parseInt(prompt("Digite o número 2: "))

const x = produto(num1, num2)
alert("O produto dos números é " + x)