//entrada de dados
let resultado = soma(200,10)

let controle 

function soma(vitorias,derrotas){
      soma =vitorias-derrotas
      return soma
}

switch(true){
    case soma<10:
       controle = "Ferro";
    break;

    case soma>=11 && soma<=20 :
        controle="Bronze" ;
    break;

    case soma>=21 && soma<=50:
        controle="Prata";
    break;

    case soma>=51 && soma<=80:
        controle="Ouro";
    break;

    case soma>=81 && soma<=90:
        controle="Diamante";
    break;

    case soma>=91 && soma<=100:
        controle="Lendário";
    break;

    case soma>=101:
        controle="Imortal";
    break;

}

console.log("O Herói tem de saldo de : "+soma+" Vitórias, está no nível de : "+controle)