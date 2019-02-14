var b = require('./baralla');
var j = require('./classes/Jugador');
var p = require('./classes/Partida');
var index;

function IniciarJoc(req,res){

}
function Baraja(req,res){
    res.send(b.baralla);
}
function ObtenirCarta(req,res){
    let baraja2 = b.baralla;

    let robarCarta = baraja2[Math.floor(Math.random()*baraja2.length)];
    index =baraja2.indexOf(robarCarta);
    baraja2.splice(index , 1);
    res.send(robarCarta);
}
function MostrarCartes(req,res){
    res.send('MostrarCartes');
}
function TirarCarta(req,res){
    res.send('TirarCarta');
}
function MoureJugadorAposta(req,res){
    res.send('Moure Jugador Aposta');
}
function MoureJugadorPassa(req,res){
    res.send('Moure Jugador Passa');
}
function AcabarJoc(req,res){
    res.send('Acabar Joc');
}

exports.IniciarJoc          = IniciarJoc;
exports.Baraja              = Baraja;
exports.ObtenirCarta        = ObtenirCarta;
exports.MostrarCartes       = MostrarCartes;
exports.TirarCarta          = TirarCarta;
exports.MoureJugadorAposta  = MoureJugadorAposta;
exports.MoureJugadorPassa   = MoureJugadorPassa;
exports.AcabarJoc           = AcabarJoc;