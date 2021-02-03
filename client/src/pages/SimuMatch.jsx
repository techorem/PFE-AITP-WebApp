import React, { Component } from 'react'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})`
    text-align: center;
    margin: 25px ;
`;

const VictoryText = styled.input.attrs({
    className: 'form-control',
})`
    text-align: center;
    color: #243773;
    font-weight: bold;
`;

const Wrapper = styled.div.attrs({
    className: 'form-group',

})`
    margin: 90px 90px 90px 90px;
`;

const SelectionRow = styled.div.attrs({
    className: 'form-row',
})`
    margin: 0 30px;
    background: #243773;
    color: white;
    font-size: 1.5em;
    text-align: center;
`;

const PlayerSelect = styled.form.attrs({
    className: 'form-group',

})`
    margin: 30px 0px 0px 0px;
    text-align: center;
    background: #243773;
    color: white;
    font-size: 1.5em;
`;


const Details = styled.div.attrs({
    className: 'form-group',

})`
    margin: 30px 0px 0px 0px;
    text-align: center;
    background: #243773;
    color: white;
    font-size: 1.5em;
`;

const Label = styled.label`
    margin: 5px;
`;

const InputSelect = styled.div.attrs({
    className: 'form-group col',
})`
    margin: 20px 30px 30px 30px;
`;

const Column = styled.div.attrs({
    className: 'form-group col',
})`
    margin: 30px 30px 30px 0px;
`;

const Select = styled.select.attrs({
    class : "form-select form-select-lg mb-3",
})`
`;

const Button = styled.button.attrs({
    className: `btn text-light bg-dark`,
})`
    margin: 15px 15px 15px 5px;
`;

function getChancesWinning(Joueur1, Joueur2, Date, Surface, Tournoi) {

    let winner = Joueur1 + Joueur2;
    let result = 88 - (winner.length % 8);
    if (winner.length % 2 === 0)
        winner = Joueur1;
    else
        winner = Joueur2;
    return "Selon notre algorythme, si un match se déroulait entre " + Joueur1 + " et " + Joueur2 + " avec les paramètres donnés, alors " + winner + " aura " + result + "% de chances de gagner selon notre modèle.";
}

class SimuMatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Joueur1: 'Rafael Nadal',
            Joueur2: 'Lloyd Harris',
            Date: '18/10/2013',
            Surface: 'Grass',
            Tournoi: 'Tokyo',
            Resultats: '',
        }
    }



    handleChangeJ1 = async event => {
        const Joueur1 = event.target.value;
        this.setState({ Joueur1 })
    };

    handleChangeJ2 = async event => {
        const Joueur2 = event.target.value;
        this.setState({ Joueur2 })
    };


    handleChangeDate = async event => {
        const Date = event.target.value;
        this.setState({ Date })
    };

    handleChangeSurface = async event => {
        const Surface = event.target.value;
        this.setState({ Surface })
    };

    handleChangeTournament = async event => {
        const Tournoi = event.target.value;
        this.setState({ Tournoi })
    };

    handleLaunchSimulation = async event => {
        const { Joueur1, Joueur2, Date, Surface, Tournoi  } = this.state;
        const Resultats = getChancesWinning(Joueur1, Joueur2, Date, Surface, Tournoi);
        this.setState({ Resultats })
    };


    render() {
        const { Joueur1, Joueur2, Date, Surface, Tournoi, Resultats } = this.state;
        return (
            <Wrapper>
                <PlayerSelect>
                    <SelectionRow>
                        <InputSelect>
                            <Select
                                onChange={this.handleChangeJ1}
                                value={Joueur1}
                            >
                                <option>Adam Pavlasek</option>
                                <option>Adrian Mannarino</option>
                                <option>Adrian Menendez Maceiras</option>
                                <option>Adrian Ungur</option>
                                <option>Adrien Bossel</option>
                                <option>Agustin Velotti</option>
                                <option>Akira Santillan</option>
                                <option>Albano Olivetti</option>
                                <option>Albert Montanes</option>
                                <option>Albert Ramos</option>
                                <option>Aldin Setkic</option>
                                <option>Alejandro Davidovich Fokina</option>
                                <option>Alejandro Falla</option>
                                <option>Alejandro Gomez Gb42</option>
                                <option>Alejandro Gonzalez</option>
                                <option>Aleksandar Vukic</option>
                                <option>Aleksandr Nedovyesov</option>
                                <option>Alen Avidzba</option>
                                <option>Alessandro Bega</option>
                                <option>Alessandro Giannessi</option>
                                <option>Alex Bogomolov Jr</option>
                                <option>Alex Bolt</option>
                                <option>Alex De Minaur</option>
                                <option>Alex Kuznetsov</option>
                                <option>Alexandar Lazarov</option>
                                <option>Alexandar Lazov</option>
                                <option>Alexander Bublik</option>
                                <option>Alexander Donski</option>
                                <option>Alexander Kudryavtsev</option>
                                <option>Alexander Sarkissian</option>
                                <option>Alexander Ward</option>
                                <option>Alexander Zverev</option>
                                <option>Alexandr Dolgopolov</option>
                                <option>Alexandre Muller</option>
                                <option>Alexandre Sidorenko</option>
                                <option>Alexei Popyrin</option>
                                <option>Alexey Vatutin</option>
                                <option>Alexios Halebian</option>
                                <option>Alibek Kachmazov</option>
                                <option>Aljaz Bedene</option>
                                <option>Altug Celikbilek</option>
                                <option>Amine Ahouda</option>
                                <option>Amir Weintraub</option>
                                <option>Andre Ghem</option>
                                <option>Andrea Arnaboldi</option>
                                <option>Andrea Basso</option>
                                <option>Andreas Beck</option>
                                <option>Andreas Haider Maurer</option>
                                <option>Andreas Seppi</option>
                                <option>Andreas Vinciguerra</option>
                                <option>Andrej Martin</option>
                                <option>Andres Artunedo Martinavarro</option>
                                <option>Andres Molteni</option>
                                <option>Andrew Whittington</option>
                                <option>Andrey Golubev</option>
                                <option>Andrey Kuznetsov</option>
                                <option>Andrey Rublev</option>
                                <option>Andy Murray</option>
                                <option>Anil Yuksel</option>
                                <option>Ante Pavic</option>
                                <option>Antoine Bellier</option>
                                <option>Antoine Hoang</option>
                                <option>Antonio Veic</option>
                                <option>Arjun Kadhe</option>
                                <option>Arnau Brugues Davi</option>
                                <option>Artem Dubrivnyy</option>
                                <option>Arthur De Greef</option>
                                <option>Aslan Karatsev</option>
                                <option>Attila Balazs</option>
                                <option>Austin Krajicek</option>
                                <option>Axel Michon</option>
                                <option>Bastian Knittel</option>
                                <option>Bastian Trinker</option>
                                <option>Benjamin Balleret</option>
                                <option>Benjamin Becker</option>
                                <option>Benjamin Bonzi</option>
                                <option>Benjamin Mitchell</option>
                                <option>Benoit Paire</option>
                                <option>Bernabe Zapata Miralles</option>
                                <option>Bernard Tomic</option>
                                <option>Bjorn Fratangelo</option>
                                <option>Bjorn Phau</option>
                                <option>Blake Mott</option>
                                <option>Blaz Kavcic</option>
                                <option>Blaz Rola</option>
                                <option>Bobby Reynolds</option>
                                <option>Borna Coric</option>
                                <option>Borna Gojo</option>
                                <option>Bowen Ouyang</option>
                                <option>Boy Westerhof</option>
                                <option>Bradley Klahn</option>
                                <option>Brayden Schnur</option>
                                <option>Brian Baker</option>
                                <option>Brydan Klein</option>
                                <option>Calvin Hemery</option>
                                <option>Cameron Norrie</option>
                                <option>Carl Soderlund</option>
                                <option>Carlos Berlocq</option>
                                <option>Carlos Salamanca</option>
                                <option>Carlos Taberner</option>
                                <option>Casper Ruud</option>
                                <option>Cedrik Marcel Stebe</option>
                                <option>Cem Ilkel</option>
                                <option>Cesar Ramirez</option>
                                <option>Chase Buchanan</option>
                                <option>Chris Guccione</option>
                                <option>Christian Garin</option>
                                <option>Christian Harrison</option>
                                <option>Christian Lindell</option>
                                <option>Christopher Eubanks</option>
                                <option>Christopher O'Connell</option>
                                <option>Chuhan Wang</option>
                                <option>Chun Hsin Tseng</option>
                                <option>Clay Thompson</option>
                                <option>Collin Altamirano</option>
                                <option>Constant Lestienne</option>
                                <option>Corentin Moutet</option>
                                <option>Damir Dzumhur</option>
                                <option>Daniel Altmaier</option>
                                <option>Daniel Brands</option>
                                <option>Daniel Cox</option>
                                <option>Daniel Elahi Galan</option>
                                <option>Daniel Evans</option>
                                <option>Daniel Garza</option>
                                <option>Daniel Gimeno Traver</option>
                                <option>Daniel King Turner</option>
                                <option>Daniel Kosakowski</option>
                                <option>Daniel Masur</option>
                                <option>Daniel Munoz de la Nava</option>
                                <option>Daniel Smethurst</option>
                                <option>Daniil Medvedev</option>
                                <option>Darian King</option>
                                <option>David Ferrer</option>
                                <option>David Goffin</option>
                                <option>David Guez</option>
                                <option>David Nalbandian</option>
                                <option>David Vega Hernandez</option>
                                <option>Denis Istomin</option>
                                <option>Denis Kudla</option>
                                <option>Denis Shapovalov</option>
                                <option>Dennis Novak</option>
                                <option>Dennis Novikov</option>
                                <option>Di Wu</option>
                                <option>Diego Schwartzman</option>
                                <option>Dimitar Kuzmanov</option>
                                <option>Dino Marcan</option>
                                <option>Dmitry Tursunov</option>
                                <option>Dominic Inglot</option>
                                <option>Dominic Thiem</option>
                                <option>Dominik Koepfer</option>
                                <option>Donald Young</option>
                                <option>Duck Hee Lee</option>
                                <option>Dudi Sela</option>
                                <option>Dusan Lajovic</option>
                                <option>Dustin Brown</option>
                                <option>Edan Leshem</option>
                                <option>Edouard Roger Vasselin</option>
                                <option>Eduardo Struvay</option>
                                <option>Edward Corrie</option>
                                <option>Egor Gerasimov</option>
                                <option>Elias Ymer</option>
                                <option>Elliot Benchetrit</option>
                                <option>Emil Reinberg</option>
                                <option>Emilio Gomez</option>
                                <option>Enrique Lopez Perez</option>
                                <option>Ergi Kirkin</option>
                                <option>Eric Quigley</option>
                                <option>Ernesto Escobedo</option>
                                <option>Ernests Gulbis</option>
                                <option>Evan King</option>
                                <option>Evgenii Tiurnev</option>
                                <option>Evgeny Donskoy</option>
                                <option>Evgeny Karlovskiy</option>
                                <option>Evgeny Korolev</option>
                                <option>Fabiano De Paula</option>
                                <option>Fabio Fognini</option>
                                <option>Fabrice Martin</option>
                                <option>Facundo Arguello</option>
                                <option>Facundo Bagnis</option>
                                <option>Farrukh Dustov</option>
                                <option>Federico Coria</option>
                                <option>Federico Delbonis</option>
                                <option>Federico Gaio</option>
                                <option>Feliciano Lopez</option>
                                <option>Felix Auger Aliassime</option>
                                <option>Fernando Verdasco</option>
                                <option>Filip Horansky</option>
                                <option>Filip Krajinovic</option>
                                <option>Filip Peliwo</option>
                                <option>Filip Veger</option>
                                <option>Filippo Baldi</option>
                                <option>Filippo Volandri</option>
                                <option>Finn Tearney</option>
                                <option>Flavio Cipolla</option>
                                <option>Florent Serra</option>
                                <option>Florian Mayer</option>
                                <option>Frances Tiafoe</option>
                                <option>Frank Dancevic</option>
                                <option>Franko Skugor</option>
                                <option>Fred Simonsson</option>
                                <option>Frederico Ferreira Silva</option>
                                <option>Frederik Nielsen</option>
                                <option>Gael Monfils</option>
                                <option>Gastao Elias</option>
                                <option>Geoffrey Blancaneaux</option>
                                <option>Gerald Melzer</option>
                                <option>Gerard Granollers</option>
                                <option>Gerardo Lopez Villasenor</option>
                                <option>Germain Gigounon</option>
                                <option>Gian Marco Moroni</option>
                                <option>Gianluca Mager</option>
                                <option>Gianluca Naso</option>
                                <option>Gianluigi Quinzi</option>
                                <option>Gianni Mina</option>
                                <option>Gilles Muller</option>
                                <option>Gilles Simon</option>
                                <option>Giovanni Lapentti</option>
                                <option>Gleb Sakharov</option>
                                <option>Go Soeda</option>
                                <option>Gonzalo Escobar</option>
                                <option>Gonzalo Lama</option>
                                <option>Greg Jones</option>
                                <option>Grega Zemlja</option>
                                <option>Gregoire Barrere</option>
                                <option>Gregoire Burquier</option>
                                <option>Grigor Dimitrov</option>
                                <option>Guido Andreozzi</option>
                                <option>Guido Pella</option>
                                <option>Guilherme Clezar</option>
                                <option>Guillaume Rufin</option>
                                <option>Guillermo Garcia Lopez</option>
                                <option>Guillermo Olaso</option>
                                <option>Henri Laaksonen</option>
                                <option>Hicham Khaddari</option>
                                <option>Hiroki Moriya</option>
                                <option>Horacio Zeballos</option>
                                <option>Hubert Hurkacz</option>
                                <option>Hugo Dellien</option>
                                <option>Hugo Gaston</option>
                                <option>Hyeon Chung</option>
                                <option>Igor Andreev</option>
                                <option>Igor Kunitsyn</option>
                                <option>Igor Sijsling</option>
                                <option>Ilija Bozoljac</option>
                                <option>Illya Marchenko</option>
                                <option>Ilya Ivashka</option>
                                <option>Inigo Cervantes Huegun</option>
                                <option>Isak Arvidsson</option>
                                <option>Ivan Dodig</option>
                                <option>Ivo Karlovic</option>
                                <option>Ivo Klec</option>
                                <option>Jack Sock</option>
                                <option>James Blake</option>
                                <option>James Duckworth</option>
                                <option>James Mcgee</option>
                                <option>James Ward</option>
                                <option>Jamie Baker</option>
                                <option>Jan Choinski</option>
                                <option>Jan Hajek</option>
                                <option>Jan Hernych</option>
                                <option>Jan Lennard Struff</option>
                                <option>Jan Mertl</option>
                                <option>Jan Satral</option>
                                <option>Janko Tipsarevic</option>
                                <option>Jannik Sinner</option>
                                <option>Jared Donaldson</option>
                                <option>Jarkko Nieminen</option>
                                <option>Jaroslav Pospisil</option>
                                <option>Jason Jung</option>
                                <option>Jason Kubler</option>
                                <option>Jaume Munar</option>
                                <option>Javier Marti</option>
                                <option>Jay Clarke</option>
                                <option>Jc Aragone</option>
                                <option>Jeevan Nedunchezhiyan</option>
                                <option>Jenson Brooksby</option>
                                <option>Jeremy Chardy</option>
                                <option>Jerzy Janowicz</option>
                                <option>Jesse Huta Galung</option>
                                <option>Jesse Levine</option>
                                <option>Jimmy Wang</option>
                                <option>Jiri Vesely</option>
                                <option>Jo-Wilfried Tsonga</option>
                                <option>Joao Domingues</option>
                                <option>Joao Sousa</option>
                                <option>Joao Souza</option>
                                <option>Johan Nikles</option>
                                <option>John Isner</option>
                                <option>John Millman</option>
                                <option>John Patrick Smith</option>
                                <option>Jonathan Eysseric</option>
                                <option>Jordan Thompson</option>
                                <option>Jordi Samper Montana</option>
                                <option>Jorge Aguilar</option>
                                <option>Joris De Loore</option>
                                <option>Jose Hernandez</option>
                                <option>Jose Rubin Statham</option>
                                <option>Josko Topic</option>
                                <option>Josselin Ouanna</option>
                                <option>Jozef Kovalik</option>
                                <option>Juan Ignacio Londero</option>
                                <option>Juan Martin del Potro</option>
                                <option>Juan Monaco</option>
                                <option>Julian Lenz</option>
                                <option>Julian Reister</option>
                                <option>Julien Benneteau</option>
                                <option>Jurgen Melzer</option>
                                <option>Jurgen Zopp</option>
                                <option>Jurij Rodionov</option>
                                <option>Kamil Majchrzak</option>
                                <option>Karen Khachanov</option>
                                <option>Karim Hossam</option>
                                <option>Kei Nishikori</option>
                                <option>Kenny De Schepper</option>
                                <option>Kento Takeuchi</option>
                                <option>Kevin Anderson</option>
                                <option>Kevin King</option>
                                <option>Kevin Krawietz</option>
                                <option>Kimmer Coppejans</option>
                                <option>Konstantin Kravchuk</option>
                                <option>Kyle Edmund</option>
                                <option>Lamine Ouahab</option>
                                <option>Laslo Djere</option>
                                <option>Laurent Lokoli</option>
                                <option>Leonardo Mayer</option>
                                <option>Liam Broady</option>
                                <option>Liam Caruana</option>
                                <option>Lleyton Hewitt</option>
                                <option>Lloyd Harris</option>
                                <option>Lorenzo Giustino</option>
                                <option>Lorenzo Sonego</option>
                                <option>Louk Sorensen</option>
                                <option>Luca Vanni</option>
                                <option>Lucas Catarina</option>
                                <option>Lucas Gomez</option>
                                <option>Lucas Miedler</option>
                                <option>Lucas Pouille</option>
                                <option>Luis Patino</option>
                                <option>Lukas Lacko</option>
                                <option>Lukas Rosol</option>
                                <option>Lukasz Kubot</option>
                                <option>Luke Saville</option>
                                <option>Mackenzie McDonald</option>
                                <option>Malek Jaziri</option>
                                <option>Manuel Sanchez</option>
                                <option>Mao Xin Gong</option>
                                <option>Marc Andrea Huesler</option>
                                <option>Marc Gicquel</option>
                                <option>Marc Lopez</option>
                                <option>Marc Polmans</option>
                                <option>Marcel Granollers</option>
                                <option>Marcelo Arevalo</option>
                                <option>Marcelo Demoliner</option>
                                <option>Marco Cecchinato</option>
                                <option>Marco Chiudinelli</option>
                                <option>Marco Trungelliti</option>
                                <option>Marcos Baghdatis</option>
                                <option>Marcos Giron</option>
                                <option>Marcus Willis</option>
                                <option>Mardy Fish</option>
                                <option>Marin Cilic</option>
                                <option>Marinko Matosevic</option>
                                <option>Marius Copil</option>
                                <option>Marko Tepavac</option>
                                <option>Markus Eriksson</option>
                                <option>Marsel Ilhan</option>
                                <option>Martin Alund</option>
                                <option>Martin Fischer</option>
                                <option>Martin Klizan</option>
                                <option>Martin Vaisse</option>
                                <option>Marton Fucsovics</option>
                                <option>Mate Delic</option>
                                <option>Mate Pavic</option>
                                <option>Mate Valkusz</option>
                                <option>Mathias Bourgue</option>
                                <option>Mats Moraing</option>
                                <option>Matt Reid</option>
                                <option>Matteo Berrettini</option>
                                <option>Matteo Donati</option>
                                <option>Matteo Viola</option>
                                <option>Matthew Barton</option>
                                <option>Matthew Ebden</option>
                                <option>Matthias Bachinger</option>
                                <option>Max Purcell</option>
                                <option>Maxime Authom</option>
                                <option>Maxime Hamou</option>
                                <option>Maxime Janvier</option>
                                <option>Maxime Teixeira</option>
                                <option>Maximilian Marterer</option>
                                <option>Maximo Gonzalez</option>
                                <option>Mehdi Ziadi</option>
                                <option>Michael Berrer</option>
                                <option>Michael Linzer</option>
                                <option>Michael Llodra</option>
                                <option>Michael Mmoh</option>
                                <option>Michael Russell</option>
                                <option>Michael Venus</option>
                                <option>Michal Przysiezny</option>
                                <option>Miguel Angel Reyes Varela</option>
                                <option>Mikael Torpegaard</option>
                                <option>Mikael Ymer</option>
                                <option>Mikhail Biryukov</option>
                                <option>Mikhail Elgin</option>
                                <option>Mikhail Kukushkin</option>
                                <option>Mikhail Ledovskikh</option>
                                <option>Mikhail Youzhny</option>
                                <option>Miljan Zekic</option>
                                <option>Milos Raonic</option>
                                <option>Miloslav Mecir Jr</option>
                                <option>Miomir Kecmanovic</option>
                                <option>Mirza Basic</option>
                                <option>Mischa Zverev</option>
                                <option>Mitchell Krueger</option>
                                <option>Mohamed Safwat</option>
                                <option>Mubarak Shannan Zayid</option>
                                <option>N Vijay Sundar Prashanth</option>
                                <option>Nathan Pasha</option>
                                <option>Nick Kyrgios</option>
                                <option>Nicola Kuhn</option>
                                <option>Nicolas Almagro</option>
                                <option>Nicolas Barrientos</option>
                                <option>Nicolas Jarry</option>
                                <option>Nicolas Kicker</option>
                                <option>Nicolas Mahut</option>
                                <option>Nicolas Massu</option>
                                <option>Niels Desein</option>
                                <option>Nikola Cacic</option>
                                <option>Nikola Mektic</option>
                                <option>Nikola Milojevic</option>
                                <option>Nikolay Davydenko</option>
                                <option>Nikoloz Basilashvili</option>
                                <option>Nils Langer</option>
                                <option>Nino Serdarusic</option>
                                <option>Noah Rubin</option>
                                <option>Norbert Gombos</option>
                                <option>Novak Djokovic</option>
                                <option>Oliver Anderson</option>
                                <option>Olivier Rochus</option>
                                <option>Omar Jasika</option>
                                <option>Oriol Roca Batalla</option>
                                <option>Orlando Luz</option>
                                <option>Oscar Otte</option>
                                <option>Pablo Andujar</option>
                                <option>Pablo Carreno Busta</option>
                                <option>Pablo Cuevas</option>
                                <option>Paolo Lorenzi</option>
                                <option>Patrick Ciorcila</option>
                                <option>Patrik Rosenholm</option>
                                <option>Paul Capdeville</option>
                                <option>Paul Henri Mathieu</option>
                                <option>Paul Jubb</option>
                                <option>Pedja Krstin</option>
                                <option>Pedro Cachin</option>
                                <option>Pedro Martinez</option>
                                <option>Pedro Sakamoto</option>
                                <option>Pedro Sousa</option>
                                <option>Pere Riba</option>
                                <option>Peter Gojowczyk</option>
                                <option>Peter Polansky</option>
                                <option>Peter Torebko</option>
                                <option>Petros Chrysochos</option>
                                <option>Philip Bester</option>
                                <option>Philip Davydenko</option>
                                <option>Philipp Kohlschreiber</option>
                                <option>Philipp Oswald</option>
                                <option>Philipp Petzschner</option>
                                <option>Pierre Hugues Herbert</option>
                                <option>Potito Starace</option>
                                <option>Prajnesh Gunneswaran</option>
                                <option>Prakash Amritraj</option>
                                <option>Quentin Halys</option>
                                <option>Radek Stepanek</option>
                                <option>Radu Albot</option>
                                <option>Rafael Nadal</option>
                                <option>Rajeev Ram</option>
                                <option>Ramkumar Ramanathan</option>
                                <option>Rayane Roumane</option>
                                <option>Raymond Sarmiento</option>
                                <option>Reda El Amrani</option>
                                <option>Reilly Opelka</option>
                                <option>Renzo Olivo</option>
                                <option>Rhyne Williams</option>
                                <option>Ricardas Berankis</option>
                                <option>Ricardo Mello</option>
                                <option>Ricardo Ojeda Lara</option>
                                <option>Riccardo Ghedin</option>
                                <option>Richard Gasquet</option>
                                <option>Rik De Voest</option>
                                <option>Robby Ginepri</option>
                                <option>Roberto Bautista Agut</option>
                                <option>Roberto Carballes Baena</option>
                                <option>Roberto Marcora</option>
                                <option>Roberto Ortega Olmedo</option>
                                <option>Roberto Quiroz</option>
                                <option>Robin Haase</option>
                                <option>Robin Kern</option>
                                <option>Roger Federer</option>
                                <option>Rogerio Dutra Silva</option>
                                <option>Romain Bogaerts</option>
                                <option>Roman Safiullin</option>
                                <option>Ruben Bemelmans</option>
                                <option>Ruben Ramirez Hidalgo</option>
                                <option>Rudolf Molleker</option>
                                <option>Rui Machado</option>
                                <option>Ryan Harrison</option>
                                <option>Ryan Shane</option>
                                <option>Ryan Sweeting</option>
                                <option>Saketh Myneni</option>
                                <option>Salvatore Caruso</option>
                                <option>Sam Groth</option>
                                <option>Sam Querrey</option>
                                <option>Sandro Ehrat</option>
                                <option>Santiago Giraldo</option>
                                <option>Sebastian Korda</option>
                                <option>Sebastian Ofner</option>
                                <option>Sekou Bangoura</option>
                                <option>Sergiy Stakhovsky</option>
                                <option>Simone Bolelli</option>
                                <option>Somdev Devvarman</option>
                                <option>Soon Woo Kwon</option>
                                <option>Stan Wawrinka</option>
                                <option>Stefan Kozlov</option>
                                <option>Stefano Napolitano</option>
                                <option>Stefano Travaglia</option>
                                <option>Stefanos Tsitsipas</option>
                                <option>Stephane Bohli</option>
                                <option>Stephane Robert</option>
                                <option>Steve Darcis</option>
                                <option>Steve Johnson</option>
                                <option>Steven Diez</option>
                                <option>Suk Young Jeong</option>
                                <option>Sumit Nagal</option>
                                <option>Takanyi Garanganga</option>
                                <option>Takuto Niki</option>
                                <option>Tallon Griekspoor</option>
                                <option>Taro Daniel</option>
                                <option>Tatsuma Ito</option>
                                <option>Taylor Fritz</option>
                                <option>Tennys Sandgren</option>
                                <option>Teymuraz Gabashvili</option>
                                <option>Thai Son Kwiatkowski</option>
                                <option>Thanasi Kokkinakis</option>
                                <option>Thiago Monteiro</option>
                                <option>Thiago Seyboth Wild</option>
                                <option>Thiemo De Bakker</option>
                                <option>Thomas Fabbiano</option>
                                <option>Thomaz Bellucci</option>
                                <option>Tigre Hank</option>
                                <option>Tim Puetz</option>
                                <option>Tim Smyczek</option>
                                <option>Tim Van Rijthoven</option>
                                <option>Tobias Kamke</option>
                                <option>Tomas Berdych</option>
                                <option>Tommy Haas</option>
                                <option>Tommy Paul</option>
                                <option>Tommy Robredo</option>
                                <option>Toni Androic</option>
                                <option>Tristan Lamasine</option>
                                <option>Ugo Humbert</option>
                                <option>Vaclav Safranek</option>
                                <option>Vasek Pospisil</option>
                                <option>Victor Baluda</option>
                                <option>Victor Crivoi</option>
                                <option>Victor Estrella</option>
                                <option>Victor Hanescu</option>
                                <option>Viktor Galovic</option>
                                <option>Viktor Troicki</option>
                                <option>Vincent Millot</option>
                                <option>Wayne Odesnik</option>
                                <option>Wishaya Trongcharoenchaikul</option>
                                <option>Xavier Malisse</option>
                                <option>Xin Gao</option>
                                <option>Yan Bai</option>
                                <option>Yann Marti</option>
                                <option>Yannick Hanfmann</option>
                                <option>Yannick Maden</option>
                                <option>Yaraslau Shyla</option>
                                <option>Yassine Idmbarek</option>
                                <option>Yasutaka Uchiyama</option>
                                <option>Yen Hsun Lu</option>
                                <option>Yibing Wu</option>
                                <option>Yoshihito Nishioka</option>
                                <option>Yosuke Watanuki</option>
                                <option>Younes Rachidi</option>
                                <option>Yuichi Sugita</option>
                                <option>Yuki Bhambri</option>
                                <option>Yusuke Takahashi</option>
                                <option>Zachary Svajda</option>
                                <option>Zdenek Kolar</option>
                                <option>Ze Zhang</option>
                                <option>Zhe Li</option>
                                <option>Zhizhen Zhang</option>
                                <option>Zsombor Piros</option>
                            </Select>
                        </InputSelect>
                        <Title> VS </Title>
                        <InputSelect>
                            <Select
                                onChange={this.handleChangeJ2}
                                value={Joueur2}
                            >
                                <option>Adam Pavlasek</option>
                                <option>Adrian Mannarino</option>
                                <option>Adrian Menendez Maceiras</option>
                                <option>Adrian Ungur</option>
                                <option>Adrien Bossel</option>
                                <option>Agustin Velotti</option>
                                <option>Akira Santillan</option>
                                <option>Albano Olivetti</option>
                                <option>Albert Montanes</option>
                                <option>Albert Ramos</option>
                                <option>Aldin Setkic</option>
                                <option>Alejandro Davidovich Fokina</option>
                                <option>Alejandro Falla</option>
                                <option>Alejandro Gomez Gb42</option>
                                <option>Alejandro Gonzalez</option>
                                <option>Aleksandar Vukic</option>
                                <option>Aleksandr Nedovyesov</option>
                                <option>Alen Avidzba</option>
                                <option>Alessandro Bega</option>
                                <option>Alessandro Giannessi</option>
                                <option>Alex Bogomolov Jr</option>
                                <option>Alex Bolt</option>
                                <option>Alex De Minaur</option>
                                <option>Alex Kuznetsov</option>
                                <option>Alexandar Lazarov</option>
                                <option>Alexandar Lazov</option>
                                <option>Alexander Bublik</option>
                                <option>Alexander Donski</option>
                                <option>Alexander Kudryavtsev</option>
                                <option>Alexander Sarkissian</option>
                                <option>Alexander Ward</option>
                                <option>Alexander Zverev</option>
                                <option>Alexandr Dolgopolov</option>
                                <option>Alexandre Muller</option>
                                <option>Alexandre Sidorenko</option>
                                <option>Alexei Popyrin</option>
                                <option>Alexey Vatutin</option>
                                <option>Alexios Halebian</option>
                                <option>Alibek Kachmazov</option>
                                <option>Aljaz Bedene</option>
                                <option>Altug Celikbilek</option>
                                <option>Amine Ahouda</option>
                                <option>Amir Weintraub</option>
                                <option>Andre Ghem</option>
                                <option>Andrea Arnaboldi</option>
                                <option>Andrea Basso</option>
                                <option>Andreas Beck</option>
                                <option>Andreas Haider Maurer</option>
                                <option>Andreas Seppi</option>
                                <option>Andreas Vinciguerra</option>
                                <option>Andrej Martin</option>
                                <option>Andres Artunedo Martinavarro</option>
                                <option>Andres Molteni</option>
                                <option>Andrew Whittington</option>
                                <option>Andrey Golubev</option>
                                <option>Andrey Kuznetsov</option>
                                <option>Andrey Rublev</option>
                                <option>Andy Murray</option>
                                <option>Anil Yuksel</option>
                                <option>Ante Pavic</option>
                                <option>Antoine Bellier</option>
                                <option>Antoine Hoang</option>
                                <option>Antonio Veic</option>
                                <option>Arjun Kadhe</option>
                                <option>Arnau Brugues Davi</option>
                                <option>Artem Dubrivnyy</option>
                                <option>Arthur De Greef</option>
                                <option>Aslan Karatsev</option>
                                <option>Attila Balazs</option>
                                <option>Austin Krajicek</option>
                                <option>Axel Michon</option>
                                <option>Bastian Knittel</option>
                                <option>Bastian Trinker</option>
                                <option>Benjamin Balleret</option>
                                <option>Benjamin Becker</option>
                                <option>Benjamin Bonzi</option>
                                <option>Benjamin Mitchell</option>
                                <option>Benoit Paire</option>
                                <option>Bernabe Zapata Miralles</option>
                                <option>Bernard Tomic</option>
                                <option>Bjorn Fratangelo</option>
                                <option>Bjorn Phau</option>
                                <option>Blake Mott</option>
                                <option>Blaz Kavcic</option>
                                <option>Blaz Rola</option>
                                <option>Bobby Reynolds</option>
                                <option>Borna Coric</option>
                                <option>Borna Gojo</option>
                                <option>Bowen Ouyang</option>
                                <option>Boy Westerhof</option>
                                <option>Bradley Klahn</option>
                                <option>Brayden Schnur</option>
                                <option>Brian Baker</option>
                                <option>Brydan Klein</option>
                                <option>Calvin Hemery</option>
                                <option>Cameron Norrie</option>
                                <option>Carl Soderlund</option>
                                <option>Carlos Berlocq</option>
                                <option>Carlos Salamanca</option>
                                <option>Carlos Taberner</option>
                                <option>Casper Ruud</option>
                                <option>Cedrik Marcel Stebe</option>
                                <option>Cem Ilkel</option>
                                <option>Cesar Ramirez</option>
                                <option>Chase Buchanan</option>
                                <option>Chris Guccione</option>
                                <option>Christian Garin</option>
                                <option>Christian Harrison</option>
                                <option>Christian Lindell</option>
                                <option>Christopher Eubanks</option>
                                <option>Christopher O'Connell</option>
                                <option>Chuhan Wang</option>
                                <option>Chun Hsin Tseng</option>
                                <option>Clay Thompson</option>
                                <option>Collin Altamirano</option>
                                <option>Constant Lestienne</option>
                                <option>Corentin Moutet</option>
                                <option>Damir Dzumhur</option>
                                <option>Daniel Altmaier</option>
                                <option>Daniel Brands</option>
                                <option>Daniel Cox</option>
                                <option>Daniel Elahi Galan</option>
                                <option>Daniel Evans</option>
                                <option>Daniel Garza</option>
                                <option>Daniel Gimeno Traver</option>
                                <option>Daniel King Turner</option>
                                <option>Daniel Kosakowski</option>
                                <option>Daniel Masur</option>
                                <option>Daniel Munoz de la Nava</option>
                                <option>Daniel Smethurst</option>
                                <option>Daniil Medvedev</option>
                                <option>Darian King</option>
                                <option>David Ferrer</option>
                                <option>David Goffin</option>
                                <option>David Guez</option>
                                <option>David Nalbandian</option>
                                <option>David Vega Hernandez</option>
                                <option>Denis Istomin</option>
                                <option>Denis Kudla</option>
                                <option>Denis Shapovalov</option>
                                <option>Dennis Novak</option>
                                <option>Dennis Novikov</option>
                                <option>Di Wu</option>
                                <option>Diego Schwartzman</option>
                                <option>Dimitar Kuzmanov</option>
                                <option>Dino Marcan</option>
                                <option>Dmitry Tursunov</option>
                                <option>Dominic Inglot</option>
                                <option>Dominic Thiem</option>
                                <option>Dominik Koepfer</option>
                                <option>Donald Young</option>
                                <option>Duck Hee Lee</option>
                                <option>Dudi Sela</option>
                                <option>Dusan Lajovic</option>
                                <option>Dustin Brown</option>
                                <option>Edan Leshem</option>
                                <option>Edouard Roger Vasselin</option>
                                <option>Eduardo Struvay</option>
                                <option>Edward Corrie</option>
                                <option>Egor Gerasimov</option>
                                <option>Elias Ymer</option>
                                <option>Elliot Benchetrit</option>
                                <option>Emil Reinberg</option>
                                <option>Emilio Gomez</option>
                                <option>Enrique Lopez Perez</option>
                                <option>Ergi Kirkin</option>
                                <option>Eric Quigley</option>
                                <option>Ernesto Escobedo</option>
                                <option>Ernests Gulbis</option>
                                <option>Evan King</option>
                                <option>Evgenii Tiurnev</option>
                                <option>Evgeny Donskoy</option>
                                <option>Evgeny Karlovskiy</option>
                                <option>Evgeny Korolev</option>
                                <option>Fabiano De Paula</option>
                                <option>Fabio Fognini</option>
                                <option>Fabrice Martin</option>
                                <option>Facundo Arguello</option>
                                <option>Facundo Bagnis</option>
                                <option>Farrukh Dustov</option>
                                <option>Federico Coria</option>
                                <option>Federico Delbonis</option>
                                <option>Federico Gaio</option>
                                <option>Feliciano Lopez</option>
                                <option>Felix Auger Aliassime</option>
                                <option>Fernando Verdasco</option>
                                <option>Filip Horansky</option>
                                <option>Filip Krajinovic</option>
                                <option>Filip Peliwo</option>
                                <option>Filip Veger</option>
                                <option>Filippo Baldi</option>
                                <option>Filippo Volandri</option>
                                <option>Finn Tearney</option>
                                <option>Flavio Cipolla</option>
                                <option>Florent Serra</option>
                                <option>Florian Mayer</option>
                                <option>Frances Tiafoe</option>
                                <option>Frank Dancevic</option>
                                <option>Franko Skugor</option>
                                <option>Fred Simonsson</option>
                                <option>Frederico Ferreira Silva</option>
                                <option>Frederik Nielsen</option>
                                <option>Gael Monfils</option>
                                <option>Gastao Elias</option>
                                <option>Geoffrey Blancaneaux</option>
                                <option>Gerald Melzer</option>
                                <option>Gerard Granollers</option>
                                <option>Gerardo Lopez Villasenor</option>
                                <option>Germain Gigounon</option>
                                <option>Gian Marco Moroni</option>
                                <option>Gianluca Mager</option>
                                <option>Gianluca Naso</option>
                                <option>Gianluigi Quinzi</option>
                                <option>Gianni Mina</option>
                                <option>Gilles Muller</option>
                                <option>Gilles Simon</option>
                                <option>Giovanni Lapentti</option>
                                <option>Gleb Sakharov</option>
                                <option>Go Soeda</option>
                                <option>Gonzalo Escobar</option>
                                <option>Gonzalo Lama</option>
                                <option>Greg Jones</option>
                                <option>Grega Zemlja</option>
                                <option>Gregoire Barrere</option>
                                <option>Gregoire Burquier</option>
                                <option>Grigor Dimitrov</option>
                                <option>Guido Andreozzi</option>
                                <option>Guido Pella</option>
                                <option>Guilherme Clezar</option>
                                <option>Guillaume Rufin</option>
                                <option>Guillermo Garcia Lopez</option>
                                <option>Guillermo Olaso</option>
                                <option>Henri Laaksonen</option>
                                <option>Hicham Khaddari</option>
                                <option>Hiroki Moriya</option>
                                <option>Horacio Zeballos</option>
                                <option>Hubert Hurkacz</option>
                                <option>Hugo Dellien</option>
                                <option>Hugo Gaston</option>
                                <option>Hyeon Chung</option>
                                <option>Igor Andreev</option>
                                <option>Igor Kunitsyn</option>
                                <option>Igor Sijsling</option>
                                <option>Ilija Bozoljac</option>
                                <option>Illya Marchenko</option>
                                <option>Ilya Ivashka</option>
                                <option>Inigo Cervantes Huegun</option>
                                <option>Isak Arvidsson</option>
                                <option>Ivan Dodig</option>
                                <option>Ivo Karlovic</option>
                                <option>Ivo Klec</option>
                                <option>Jack Sock</option>
                                <option>James Blake</option>
                                <option>James Duckworth</option>
                                <option>James Mcgee</option>
                                <option>James Ward</option>
                                <option>Jamie Baker</option>
                                <option>Jan Choinski</option>
                                <option>Jan Hajek</option>
                                <option>Jan Hernych</option>
                                <option>Jan Lennard Struff</option>
                                <option>Jan Mertl</option>
                                <option>Jan Satral</option>
                                <option>Janko Tipsarevic</option>
                                <option>Jannik Sinner</option>
                                <option>Jared Donaldson</option>
                                <option>Jarkko Nieminen</option>
                                <option>Jaroslav Pospisil</option>
                                <option>Jason Jung</option>
                                <option>Jason Kubler</option>
                                <option>Jaume Munar</option>
                                <option>Javier Marti</option>
                                <option>Jay Clarke</option>
                                <option>Jc Aragone</option>
                                <option>Jeevan Nedunchezhiyan</option>
                                <option>Jenson Brooksby</option>
                                <option>Jeremy Chardy</option>
                                <option>Jerzy Janowicz</option>
                                <option>Jesse Huta Galung</option>
                                <option>Jesse Levine</option>
                                <option>Jimmy Wang</option>
                                <option>Jiri Vesely</option>
                                <option>Jo-Wilfried Tsonga</option>
                                <option>Joao Domingues</option>
                                <option>Joao Sousa</option>
                                <option>Joao Souza</option>
                                <option>Johan Nikles</option>
                                <option>John Isner</option>
                                <option>John Millman</option>
                                <option>John Patrick Smith</option>
                                <option>Jonathan Eysseric</option>
                                <option>Jordan Thompson</option>
                                <option>Jordi Samper Montana</option>
                                <option>Jorge Aguilar</option>
                                <option>Joris De Loore</option>
                                <option>Jose Hernandez</option>
                                <option>Jose Rubin Statham</option>
                                <option>Josko Topic</option>
                                <option>Josselin Ouanna</option>
                                <option>Jozef Kovalik</option>
                                <option>Juan Ignacio Londero</option>
                                <option>Juan Martin del Potro</option>
                                <option>Juan Monaco</option>
                                <option>Julian Lenz</option>
                                <option>Julian Reister</option>
                                <option>Julien Benneteau</option>
                                <option>Jurgen Melzer</option>
                                <option>Jurgen Zopp</option>
                                <option>Jurij Rodionov</option>
                                <option>Kamil Majchrzak</option>
                                <option>Karen Khachanov</option>
                                <option>Karim Hossam</option>
                                <option>Kei Nishikori</option>
                                <option>Kenny De Schepper</option>
                                <option>Kento Takeuchi</option>
                                <option>Kevin Anderson</option>
                                <option>Kevin King</option>
                                <option>Kevin Krawietz</option>
                                <option>Kimmer Coppejans</option>
                                <option>Konstantin Kravchuk</option>
                                <option>Kyle Edmund</option>
                                <option>Lamine Ouahab</option>
                                <option>Laslo Djere</option>
                                <option>Laurent Lokoli</option>
                                <option>Leonardo Mayer</option>
                                <option>Liam Broady</option>
                                <option>Liam Caruana</option>
                                <option>Lleyton Hewitt</option>
                                <option>Lloyd Harris</option>
                                <option>Lorenzo Giustino</option>
                                <option>Lorenzo Sonego</option>
                                <option>Louk Sorensen</option>
                                <option>Luca Vanni</option>
                                <option>Lucas Catarina</option>
                                <option>Lucas Gomez</option>
                                <option>Lucas Miedler</option>
                                <option>Lucas Pouille</option>
                                <option>Luis Patino</option>
                                <option>Lukas Lacko</option>
                                <option>Lukas Rosol</option>
                                <option>Lukasz Kubot</option>
                                <option>Luke Saville</option>
                                <option>Mackenzie McDonald</option>
                                <option>Malek Jaziri</option>
                                <option>Manuel Sanchez</option>
                                <option>Mao Xin Gong</option>
                                <option>Marc Andrea Huesler</option>
                                <option>Marc Gicquel</option>
                                <option>Marc Lopez</option>
                                <option>Marc Polmans</option>
                                <option>Marcel Granollers</option>
                                <option>Marcelo Arevalo</option>
                                <option>Marcelo Demoliner</option>
                                <option>Marco Cecchinato</option>
                                <option>Marco Chiudinelli</option>
                                <option>Marco Trungelliti</option>
                                <option>Marcos Baghdatis</option>
                                <option>Marcos Giron</option>
                                <option>Marcus Willis</option>
                                <option>Mardy Fish</option>
                                <option>Marin Cilic</option>
                                <option>Marinko Matosevic</option>
                                <option>Marius Copil</option>
                                <option>Marko Tepavac</option>
                                <option>Markus Eriksson</option>
                                <option>Marsel Ilhan</option>
                                <option>Martin Alund</option>
                                <option>Martin Fischer</option>
                                <option>Martin Klizan</option>
                                <option>Martin Vaisse</option>
                                <option>Marton Fucsovics</option>
                                <option>Mate Delic</option>
                                <option>Mate Pavic</option>
                                <option>Mate Valkusz</option>
                                <option>Mathias Bourgue</option>
                                <option>Mats Moraing</option>
                                <option>Matt Reid</option>
                                <option>Matteo Berrettini</option>
                                <option>Matteo Donati</option>
                                <option>Matteo Viola</option>
                                <option>Matthew Barton</option>
                                <option>Matthew Ebden</option>
                                <option>Matthias Bachinger</option>
                                <option>Max Purcell</option>
                                <option>Maxime Authom</option>
                                <option>Maxime Hamou</option>
                                <option>Maxime Janvier</option>
                                <option>Maxime Teixeira</option>
                                <option>Maximilian Marterer</option>
                                <option>Maximo Gonzalez</option>
                                <option>Mehdi Ziadi</option>
                                <option>Michael Berrer</option>
                                <option>Michael Linzer</option>
                                <option>Michael Llodra</option>
                                <option>Michael Mmoh</option>
                                <option>Michael Russell</option>
                                <option>Michael Venus</option>
                                <option>Michal Przysiezny</option>
                                <option>Miguel Angel Reyes Varela</option>
                                <option>Mikael Torpegaard</option>
                                <option>Mikael Ymer</option>
                                <option>Mikhail Biryukov</option>
                                <option>Mikhail Elgin</option>
                                <option>Mikhail Kukushkin</option>
                                <option>Mikhail Ledovskikh</option>
                                <option>Mikhail Youzhny</option>
                                <option>Miljan Zekic</option>
                                <option>Milos Raonic</option>
                                <option>Miloslav Mecir Jr</option>
                                <option>Miomir Kecmanovic</option>
                                <option>Mirza Basic</option>
                                <option>Mischa Zverev</option>
                                <option>Mitchell Krueger</option>
                                <option>Mohamed Safwat</option>
                                <option>Mubarak Shannan Zayid</option>
                                <option>N Vijay Sundar Prashanth</option>
                                <option>Nathan Pasha</option>
                                <option>Nick Kyrgios</option>
                                <option>Nicola Kuhn</option>
                                <option>Nicolas Almagro</option>
                                <option>Nicolas Barrientos</option>
                                <option>Nicolas Jarry</option>
                                <option>Nicolas Kicker</option>
                                <option>Nicolas Mahut</option>
                                <option>Nicolas Massu</option>
                                <option>Niels Desein</option>
                                <option>Nikola Cacic</option>
                                <option>Nikola Mektic</option>
                                <option>Nikola Milojevic</option>
                                <option>Nikolay Davydenko</option>
                                <option>Nikoloz Basilashvili</option>
                                <option>Nils Langer</option>
                                <option>Nino Serdarusic</option>
                                <option>Noah Rubin</option>
                                <option>Norbert Gombos</option>
                                <option>Novak Djokovic</option>
                                <option>Oliver Anderson</option>
                                <option>Olivier Rochus</option>
                                <option>Omar Jasika</option>
                                <option>Oriol Roca Batalla</option>
                                <option>Orlando Luz</option>
                                <option>Oscar Otte</option>
                                <option>Pablo Andujar</option>
                                <option>Pablo Carreno Busta</option>
                                <option>Pablo Cuevas</option>
                                <option>Paolo Lorenzi</option>
                                <option>Patrick Ciorcila</option>
                                <option>Patrik Rosenholm</option>
                                <option>Paul Capdeville</option>
                                <option>Paul Henri Mathieu</option>
                                <option>Paul Jubb</option>
                                <option>Pedja Krstin</option>
                                <option>Pedro Cachin</option>
                                <option>Pedro Martinez</option>
                                <option>Pedro Sakamoto</option>
                                <option>Pedro Sousa</option>
                                <option>Pere Riba</option>
                                <option>Peter Gojowczyk</option>
                                <option>Peter Polansky</option>
                                <option>Peter Torebko</option>
                                <option>Petros Chrysochos</option>
                                <option>Philip Bester</option>
                                <option>Philip Davydenko</option>
                                <option>Philipp Kohlschreiber</option>
                                <option>Philipp Oswald</option>
                                <option>Philipp Petzschner</option>
                                <option>Pierre Hugues Herbert</option>
                                <option>Potito Starace</option>
                                <option>Prajnesh Gunneswaran</option>
                                <option>Prakash Amritraj</option>
                                <option>Quentin Halys</option>
                                <option>Radek Stepanek</option>
                                <option>Radu Albot</option>
                                <option>Rafael Nadal</option>
                                <option>Rajeev Ram</option>
                                <option>Ramkumar Ramanathan</option>
                                <option>Rayane Roumane</option>
                                <option>Raymond Sarmiento</option>
                                <option>Reda El Amrani</option>
                                <option>Reilly Opelka</option>
                                <option>Renzo Olivo</option>
                                <option>Rhyne Williams</option>
                                <option>Ricardas Berankis</option>
                                <option>Ricardo Mello</option>
                                <option>Ricardo Ojeda Lara</option>
                                <option>Riccardo Ghedin</option>
                                <option>Richard Gasquet</option>
                                <option>Rik De Voest</option>
                                <option>Robby Ginepri</option>
                                <option>Roberto Bautista Agut</option>
                                <option>Roberto Carballes Baena</option>
                                <option>Roberto Marcora</option>
                                <option>Roberto Ortega Olmedo</option>
                                <option>Roberto Quiroz</option>
                                <option>Robin Haase</option>
                                <option>Robin Kern</option>
                                <option>Roger Federer</option>
                                <option>Rogerio Dutra Silva</option>
                                <option>Romain Bogaerts</option>
                                <option>Roman Safiullin</option>
                                <option>Ruben Bemelmans</option>
                                <option>Ruben Ramirez Hidalgo</option>
                                <option>Rudolf Molleker</option>
                                <option>Rui Machado</option>
                                <option>Ryan Harrison</option>
                                <option>Ryan Shane</option>
                                <option>Ryan Sweeting</option>
                                <option>Saketh Myneni</option>
                                <option>Salvatore Caruso</option>
                                <option>Sam Groth</option>
                                <option>Sam Querrey</option>
                                <option>Sandro Ehrat</option>
                                <option>Santiago Giraldo</option>
                                <option>Sebastian Korda</option>
                                <option>Sebastian Ofner</option>
                                <option>Sekou Bangoura</option>
                                <option>Sergiy Stakhovsky</option>
                                <option>Simone Bolelli</option>
                                <option>Somdev Devvarman</option>
                                <option>Soon Woo Kwon</option>
                                <option>Stan Wawrinka</option>
                                <option>Stefan Kozlov</option>
                                <option>Stefano Napolitano</option>
                                <option>Stefano Travaglia</option>
                                <option>Stefanos Tsitsipas</option>
                                <option>Stephane Bohli</option>
                                <option>Stephane Robert</option>
                                <option>Steve Darcis</option>
                                <option>Steve Johnson</option>
                                <option>Steven Diez</option>
                                <option>Suk Young Jeong</option>
                                <option>Sumit Nagal</option>
                                <option>Takanyi Garanganga</option>
                                <option>Takuto Niki</option>
                                <option>Tallon Griekspoor</option>
                                <option>Taro Daniel</option>
                                <option>Tatsuma Ito</option>
                                <option>Taylor Fritz</option>
                                <option>Tennys Sandgren</option>
                                <option>Teymuraz Gabashvili</option>
                                <option>Thai Son Kwiatkowski</option>
                                <option>Thanasi Kokkinakis</option>
                                <option>Thiago Monteiro</option>
                                <option>Thiago Seyboth Wild</option>
                                <option>Thiemo De Bakker</option>
                                <option>Thomas Fabbiano</option>
                                <option>Thomaz Bellucci</option>
                                <option>Tigre Hank</option>
                                <option>Tim Puetz</option>
                                <option>Tim Smyczek</option>
                                <option>Tim Van Rijthoven</option>
                                <option>Tobias Kamke</option>
                                <option>Tomas Berdych</option>
                                <option>Tommy Haas</option>
                                <option>Tommy Paul</option>
                                <option>Tommy Robredo</option>
                                <option>Toni Androic</option>
                                <option>Tristan Lamasine</option>
                                <option>Ugo Humbert</option>
                                <option>Vaclav Safranek</option>
                                <option>Vasek Pospisil</option>
                                <option>Victor Baluda</option>
                                <option>Victor Crivoi</option>
                                <option>Victor Estrella</option>
                                <option>Victor Hanescu</option>
                                <option>Viktor Galovic</option>
                                <option>Viktor Troicki</option>
                                <option>Vincent Millot</option>
                                <option>Wayne Odesnik</option>
                                <option>Wishaya Trongcharoenchaikul</option>
                                <option>Xavier Malisse</option>
                                <option>Xin Gao</option>
                                <option>Yan Bai</option>
                                <option>Yann Marti</option>
                                <option>Yannick Hanfmann</option>
                                <option>Yannick Maden</option>
                                <option>Yaraslau Shyla</option>
                                <option>Yassine Idmbarek</option>
                                <option>Yasutaka Uchiyama</option>
                                <option>Yen Hsun Lu</option>
                                <option>Yibing Wu</option>
                                <option>Yoshihito Nishioka</option>
                                <option>Yosuke Watanuki</option>
                                <option>Younes Rachidi</option>
                                <option>Yuichi Sugita</option>
                                <option>Yuki Bhambri</option>
                                <option>Yusuke Takahashi</option>
                                <option>Zachary Svajda</option>
                                <option>Zdenek Kolar</option>
                                <option>Ze Zhang</option>
                                <option>Zhe Li</option>
                                <option>Zhizhen Zhang</option>
                                <option>Zsombor Piros</option>
                            </Select>
                        </InputSelect>
                    </SelectionRow>
                </PlayerSelect>
                <Details>

                    <Label>Date : </Label>
                    <Column>
                        <input
                            onChange={this.handleChangeDate}
                            value={Date}
                            type = "date"
                            min="2013-01-01" max="2015-12-31"
                        />
                    </Column>

                    <Column>
                        <Label>Surface : </Label>
                    </Column>

                    <Column>
                        <Select
                            onChange={this.handleChangeSurface}
                            value={Surface}
                        >
                            <option>Clay</option>
                            <option>Grass</option>
                            <option>Head</option>
                        </Select>
                    </Column>

                    <Column>
                        <Label> Tournoi : </Label>
                    </Column>

                    <Column>
                        <Select
                            onChange={this.handleChangeTournament}
                            value={Tournoi}
                        >
                        <option>Acapulco</option>
                        <option>Antalya</option>
                        <option>Antwerp</option>
                        <option>Atlanta</option>
                        <option>Auckland</option>
                        <option>Australian Open</option>
                        <option>Bangkok</option>
                        <option>Barcelona</option>
                        <option>Basel</option>
                        <option>Bastad</option>
                        <option>Beijing</option>
                        <option>Bogota</option>
                        <option>Brisbane</option>
                        <option>Bucharest</option>
                        <option>Budapest</option>
                        <option>Buenos Aires</option>
                        <option>Canada Masters</option>
                        <option>Casablanca</option>
                        <option>Chengdu</option>
                        <option>Chennai</option>
                        <option>Cincinnati Masters</option>
                        <option>Cordoba</option>
                        <option>Delray Beach</option>
                        <option>Doha</option>
                        <option>Dubai</option>
                        <option>Dusseldorf</option>
                        <option>Eastbourne</option>
                        <option>Estoril</option>
                        <option>Geneva</option>
                        <option>Gstaad</option>
                        <option>Halle</option>
                        <option>Hamburg</option>
                        <option>Houston</option>
                        <option>Indian Wells Masters</option>
                        <option>Istanbul</option>
                        <option>Kitzbuhel</option>
                        <option>Kuala Lumpur</option>
                        <option>Los Cabos</option>
                        <option>Lyon</option>
                        <option>Madrid Masters</option>
                        <option>Marrakech</option>
                        <option>Marseille</option>
                        <option>Memphis</option>
                        <option>Metz</option>
                        <option>Miami Masters</option>
                        <option>Monte Carlo Masters</option>
                        <option>Montpellier</option>
                        <option>Moscow</option>
                        <option>Munich</option>
                        <option>New York</option>
                        <option>Newport</option>
                        <option>Nice</option>
                        <option>Nottingham</option>
                        <option>Paris</option>
                        <option>Pune</option>
                        <option>Queen's Club</option>
                        <option>Quito</option>
                        <option>Rio de Janeiro</option>
                        <option>Rome Masters</option>
                        <option>Rotterdam</option>
                        <option>San Jose</option>
                        <option>Sao Paulo</option>
                        <option>Shanghai Masters</option>
                        <option>Shenzhen</option>
                        <option>Sofia</option>
                        <option>St. Petersburg</option>
                        <option>Stockholm</option>
                        <option>Stuttgart</option>
                        <option>Sydney</option>
                        <option>Tokyo</option>
                        <option>Umag</option>
                        <option>Valencia</option>
                        <option>Vienna</option>
                        <option>Vina del Mar</option>
                        <option>Washington</option>
                        <option>Wimbledon</option>
                        <option>Winston-Salem</option>
                        <option>Zagreb</option>
                        <option>Zhuhai</option>
                        <option>s Hertogenbosch</option>
                    </Select>
                    </Column>

                    <Button onClick={this.handleLaunchSimulation} > Lancer la simulation </Button>

                </Details>
                <Details>
                    <VictoryText disabled
                        value ={Resultats}
                    />
                </Details>

            </Wrapper>
        )
    }
}

export default SimuMatch
