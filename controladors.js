var b = require('./baralla');
var j = require('./classes/Jugador');
var p = require('./classes/Partida');
var Partidas=[];

function IniciarJoc(req,res){
    let codiP = req.params.codiPartida;

    let Partida = Partidas.find(part => part.id === codiP);

    if(Partida != null){ res.status(400).send("Ja existeix Aquesta Partida"); }

    else{
        let newBaralla = shuffle(b.baralla);
        let newPartida = new p.Partida(codiP,newBaralla,1,0);
        Partidas.push(newPartida);
        res.status(200).send(newPartida);
    }
}
function ObtenirCarta(req,res){
    let codiP = req.params.codiPartida;

    let currentPartida = Partidas.find(part => part.id === codiP);

    if(currentPartida == null){ res.status(404).send("No s'ha trobat la partida"); }
    else{
        let cartes = currentPartida.cartes;
        res.send(cartes.pop());
    }
}
function MostrarCartes(req,res){
    let codiP = req.params.codiPartida;
    let currentPartida = Partidas.find(part => part.id === codiP);

    if(currentPartida == null){ res.status(404).send("No s'ha trobat la partida"); }
    else{
        res.send(currentPartida.cartesTaula);
    }
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

//Les nostres funcions

function shuffle(a) {
    let ctr = a.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = a[ctr];
        a[ctr] = a[index];
        a[index] = temp;
    }
    return a;
}

exports.IniciarJoc          = IniciarJoc;
exports.ObtenirCarta        = ObtenirCarta;
exports.MostrarCartes       = MostrarCartes;
exports.TirarCarta          = TirarCarta;
exports.MoureJugadorAposta  = MoureJugadorAposta;
exports.MoureJugadorPassa   = MoureJugadorPassa;
exports.AcabarJoc           = AcabarJoc;
