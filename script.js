var points = 0;

window.onload = function () {
    main();
    setInterval(main, 700);
}

function main() {

    var table = "";
    var pole = document.getElementById('field');
    pole.innerHTML = table;

    var rand = Math.floor(Math.random() * 10) + 1;
    var mas = [];
    for (var i = 1; i < 11; i++) {
        if (i === rand) {
            mas[i] = "Крот";
        }
        else {
            mas[i] = i;
        }
        //console.log(mas[i]);
    }


    for (var i = 1; i < 11; i++) {
        var part = "<div id='i" + i + "' class='item'> <p id='n" + i + "'>" + mas[i] + "</p> </div>"
        // для onclick в html  : onclick='handler(" +i+ ")'
        table = table + part;
    }

    table = table;
    pole.innerHTML = table;

    i1.addEventListener("click", handler.bind(null, 1));
    i2.addEventListener("click", handler.bind(null, 2));
    i3.addEventListener("click", handler.bind(null, 3));
    i4.addEventListener("click", handler.bind(null, 4));
    i5.addEventListener("click", handler.bind(null, 5));
    i6.addEventListener("click", handler.bind(null, 6));
    i7.addEventListener("click", handler.bind(null, 7));
    i8.addEventListener("click", handler.bind(null, 8));
    i9.addEventListener("click", handler.bind(null, 9));
    i10.addEventListener("click", handler.bind(null, 10));
    function handler(nomer) {
        if (nomer === rand) {
            console.log('Попал по Кроту');
            points = points + 1;
        }
        else {
            console.log('НЕПОПАЛ!');
            points = points - 1;
        }
    }


    var mes = document.getElementById('message');
    mes.innerHTML = "<p>" + points + "</p>";

    //setTimeout(main, 1000);
}



