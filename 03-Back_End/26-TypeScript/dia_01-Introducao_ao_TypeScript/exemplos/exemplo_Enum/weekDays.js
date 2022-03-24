var weekDays;
(function (weekDays) {
    weekDays[weekDays["DOMINGO"] = 1] = "DOMINGO";
    weekDays[weekDays["SEGUNDA"] = 2] = "SEGUNDA";
    weekDays[weekDays["TER\u00C7A"] = 3] = "TER\u00C7A";
    weekDays[weekDays["QUARTA"] = 4] = "QUARTA";
    weekDays[weekDays["QUINTA"] = 5] = "QUINTA";
    weekDays[weekDays["SEXTA"] = 6] = "SEXTA";
    weekDays[weekDays["SABADO"] = 7] = "SABADO";
})(weekDays || (weekDays = {}));
var segunda = weekDays.SEGUNDA;
console.log(segunda);
