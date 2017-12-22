"use strict";
exports.__esModule = true;
// Para que se puede utilizar en carpeta
var Avenger = /** @class */ (function () {
    function Avenger(nombre, nombreReal, peleasGanadas, habilidad) {
        if (nombreReal === void 0) { nombreReal = "Desconocido"; }
        if (peleasGanadas === void 0) { peleasGanadas = 0; }
        this.nombre = nombre;
        this.nombreReal = nombreReal;
        this.peleasGanadas = peleasGanadas;
        this.habilidad = habilidad;
    }
    return Avenger;
}());
exports.Avenger = Avenger;
var object = new Avenger("IRON MAN", "TONY Stark", 12, "Conocimiento ");
console.log(object);
