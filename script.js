console.log("Szkriptben")



function init(){
    document.getElementById("elem").innerHTML = "Hahó";
}

window.addEventListener("load",init, false)

/*változók használata var, let, const*/ 

var szoveg="alma";

var szoveg2;
console.log(szoveg2);
szoveg2="körte";

console.log(szoveg3);
var szoveg3 = "szilva";

var a ="2";
var b =3;
var osszeg= Number(a) + Number(b);

console.log(osszeg);

var logikai=false;

if(a === 2){
    console.log("Az a szám!");
    console.log(typeof a);
}else{
    console.log("Az a nem szám!");
    console.log(typeof a);
}

var szin="red"

switch(szin){
    case "red":
        console.log("piros");
       break;
    case "green":
        console.log("zöld");
       break;
    case "blue":
        console.log("kék");
       break;
    case "purple":
        console.log("lila");
       break; 
    default:
        console.log("Ezt a színt nem ismerem!")  
}


if(szin === "red"){
    console.log("piros");
}else if(szin === "green"){
    console.log("zöld");
}else if(szin === "blue"){
    console.log("kék");
}else{
    console.log("Ezt a színt nem ismerem!");
}
