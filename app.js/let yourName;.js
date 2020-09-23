let yourName; 
let provaMat; 
let askOne;
let askTwo;
let askThree;
yourName=(prompt('Qual é seu nome?')); //variavel nome//

provaMat = (confirm("Deseja realizar a prova?")); //confirmar e direcionar//
  if (confirm==false) {

    window.open("Volte quando estiver pronto!"); //para aqui//
}else{
  (confirm==true) //perguntas//
    askOne=(prompt("10+10=20? 1.false 2.true - escolha entre 1 e 2!"))
    if (askOne=="1"){ 
        let awserOne=document.getElementById("resposta-1")
        awserOne.innerHTML=("Errado")

    }else{
      let awserOnerieght=document.getElementById("resposta-1")
      awserOnerieght.innerHTML=("Correto")
}
    askTwo=(prompt("20+20=40? 1.false 2.true - escolha entre 1 e 2!"))
    if (askTwo=="1"){
      let awserTwo=document.getElementById("resposta-2")
      awserTwo.innerHTML=("Errado")

    }
  else 
  {
    let awserTworieght=document.getElementById("resposta-1")
    awserTworieght.innerHTML=("Correto")
  }

    askThree=(prompt("30+30=50? 1.false 2.true - escolha entre 1 e 2!")) 
    if (askTwo=="1"){
        let awserTwo=document.getElementById("resposta-2")
        awserTwo.innerHTML=("Errado")
  
      }
    else 
    {
      let awserTworieght=document.getElementById("resposta-1")
      awserTworieght.innerHTML=("Correto")
    }
}

document.getElementById("texto").innerHTML = "Nome: " + yourName;
