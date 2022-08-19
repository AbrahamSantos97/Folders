function remover(cadena) {
    var re = new RegExp(/([\[\w\]])+/, "g")
    let s = cadena.replace(re, function() {
        var a = arguments[0];
        return a.replace(/([\[\]])/g, "");
    });
    console.log(s);
}

remover('[uno] [dos] tres');