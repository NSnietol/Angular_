var avenger = {
    name: "Tony Stark",
    tag: "Iron man",
    power: "Tecnology"
};
//Descompone un objeto en sus atributos, busca los nombre que colocamos en ese objeto
var tag = avenger.tag, name = avenger.name;
alert(name + " Alias : " + tag);
//Descomponer arreglos
var browsers = ["Tor", "Mozilla", "Chorme", "Edge"];
// las comas indican la posición a sustraer
var primero = browsers[0], tercero = browsers[2], ultimo = browsers[3];
alert("Navegadores ");
alert(primero + ", " + tercero + ", " + ultimo);
