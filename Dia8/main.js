function FarenheittoCelcius() 
{
    var farenheit= prompt("Ingresa temperatura en Farenheit:")
  var ToCel = ( farenheit - 32) * 5 / 9;
  var celsius = farenheit+'\xB0F is ' + ToCel + '\xB0C.';
    console.log(celsius);
}
FarenheittoCelcius();

function evaluateLetter(letter) 
{
    letter = prompt("escriba una letra");
    if(letter==="a" || letter==="e" || letter==="i" || letter==="o" ||letter==="u") 
    {
    var letterevaluated ='letter ' + letter + ' is a vowel';
    }
    else
    {
    var letterevaluated =  'letter ' + letter + ' is a consonant'; 
    }
    console.log(letterevaluated);
}
evaluateLetter("a");
function suma(a,b){
    let suma=a+b;
    console.log(suma)
}
suma(5,8);
function palindrome(str) {
    let strsinespacios = str.replace(/ /g, "");
    console.log(strsinespacios);
   let newstr= strsinespacios.split("").reverse().join("");
   console.log(newstr);
   if(strsinespacios ===newstr){
    let afirmativa= 'La oracion "'+str+'" es palindrome';
   console.log(afirmativa) ;
   }
   else{
    let negativa= 'La oracion "'+str+'" no es palindrome';
    console.log(negativa);
   }

}
palindrome("acaso hubo buhos aca");

function evaluatenumber(numero){
    let x= numero;
    if(x%11===0 && x%5===0){
    let true1= true;
        console.log(true1);
    }
    else{   
        let false1=false;
        console.log(false1); 
    }
}
evaluatenumber(55);
