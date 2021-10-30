function calcular() {

    var nota = document.getElementById("notas_alunos")
        var nota1 = nota.value.trim()
        var nota2 = nota1.split("+")
        var notas = 0,
      nota_final = document.getElementById("resposta")
  
    if (nota2.length == 4) {

      nota2.map((value) => (notas += Number(value)));
      notas = notas / 4;
      nota_final.innerHTML = `Média: ${notas}`
    }

    else if (nota2.length == 5) {
        
      var prova_final = nota2.pop();
      nota2.map((value) => (notas += Number(value)));
      notas = notas / 4;
      notas = (notas + Number(prova_final)) / 2;
      nota_final.innerHTML = `Média: ${notas}`

    }
    else{
      
      nota_final.innerHTML = `Termo inválido digite 4 ou 5 notas`

    }

  }