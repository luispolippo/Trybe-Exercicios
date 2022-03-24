var readline = require('readline-sync');
var months;
(function (months) {
    months[months["JANEIRO"] = 1] = "JANEIRO";
    months[months["FEVEREIRO"] = 2] = "FEVEREIRO";
    months[months["MAR\u00C7O"] = 3] = "MAR\u00C7O";
    months[months["ABRIL"] = 4] = "ABRIL";
    months[months["MAIO"] = 5] = "MAIO";
    months[months["JUNHO"] = 6] = "JUNHO";
    months[months["JULHO"] = 7] = "JULHO";
    months[months["AGOSTO"] = 8] = "AGOSTO";
    months[months["SETEMBRO"] = 9] = "SETEMBRO";
    months[months["OUTUBRO"] = 10] = "OUTUBRO";
    months[months["NOVEMBRO"] = 11] = "NOVEMBRO";
    months[months["DEZEMBRO"] = 12] = "DEZEMBRO";
})(months || (months = {}));
var seasons;
(function (seasons) {
    seasons[seasons["OUTONO"] = 1] = "OUTONO";
    seasons[seasons["INVERNO"] = 2] = "INVERNO";
    seasons[seasons["PRIMAVERA"] = 3] = "PRIMAVERA";
    seasons[seasons["VERAO"] = 4] = "VERAO";
})(seasons || (seasons = {}));
function getSeasonNorth(month) {
    switch (month) {
        case 'SETEMBRO': return [1, 4];
        case 'DEZEMBRO': return [1, 2];
        case 'MARÇO': return [2, 3];
        case 'JUNHO': return [3, 4];
        case 'JANEIRO' || 'FEVEREIRO': return [2];
        case 'ABRIL' || 'MAIO': return [3];
        case 'JULHO' || 'AGOSTO': return [4];
        case 'OUTUBRO' || 'NOVEMBRO': return [1];
    }
    return [0];
}
;
function exec() {
    var month = readline.question('Digite o mês: ');
    var hemisphere = readline.question('Digite o hemisfério: ');
    var monthUpper = month.toUpperCase();
    var hemisphereUpper = hemisphere.toUpperCase();
    if (hemisphereUpper === 'NORTE') {
        var seasons_1 = getSeasonNorth(monthUpper);
        seasons_1.forEach(function (season) {
            console.log(months[season]);
        });
    }
    else if (hemisphereUpper === 'SUL') {
    }
    else {
        console.log('Hemisfério não encontrado');
    }
}
exec();
