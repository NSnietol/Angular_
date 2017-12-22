
let avenger={

  name:"Tony Stark",
  tag:"Iron man",
  power:"Tecnology"

}

//Descompone un objeto en sus atributos, busca los nombre que colocamos en ese objeto
let {tag,name}=avenger;
alert(name+" Alias : "+tag);


//Descomponer arreglos
let browsers:string[]=["Tor","Mozilla","Chorme","Edge"];

// las comas indican la posición a sustraer
let[primero,,tercero,ultimo]=browsers;
alert("Navegadores ")
alert(primero+", "+tercero+", "+ultimo);
