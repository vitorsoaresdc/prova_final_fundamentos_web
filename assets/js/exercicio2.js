function botao(){
          
    let n1 = document.getElementById("sal")

    let valor = Number(n1.value)

    p2 = aum(valor)

    p = (p2 * 100)

    arc = valor * p2

    sal = arc  + valor

    let suporte = document.getElementById("suporte")
 

    suporte.innerHTML = `
   Salário antes do reajuste: <strong>R$ ${valor} </strong> <br>
   Aumento aplicado: <strong> ${p}  % </strong> <br>
   O valor aumentado: <strong> R$ ${arc} </strong> <br>
   Novo salário, com aumento: <strong> R$ ${sal} </strong>`
}


function v(sal){

    if (sal <= 2800) {

        return 0.2
    }
     if (sal > 2800 && sal<7000) {

        return 0.15
    }
     if (sal >= 7000 && sal<15000) {

        return 0.10
    }
    if(sal >= 15000){ 

        return 0.05
    }
}

function aum(sal,p){
    if (sal) {
        p = v(sal)
        return p  
    }
}