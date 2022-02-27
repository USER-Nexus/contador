var date;

function formatDate(date) {
    date = date.split('/');
    date = date.reverse().toString().replaceAll(',', '-');

    return date;
}

function reiniciar() {
    window.location.href = 'index.html';
}

function getDate() {
    date = document.querySelector('.date').value;
    sessionStorage.setItem('data', date);
    validar();
}

function validar() {
    date = sessionStorage.getItem('data');
    date = formatDate(date);

    let dataFormatada = new Date(date + ':00:00:00').getTime();
    let now = new Date().getTime();

    if (dataFormatada - now < 0 || date == '') {
        alert('Data inválida. Deve ser maior que a atual');
    } else {
        window.location.href = './contador.html'
        contador();
    }
}

function contador() {
    date = sessionStorage.getItem("data");
	date = formatDate(date);

	countDown = new Date(date + ":00:00:00");

    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDown - now;

        var dias = Math.floor(distance / (1000 * 60 * 60 * 24));
		var horas = Math.floor(
			(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
		);
		var minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var segundos = Math.floor((distance % (1000 * 60)) / 1000);

        document.querySelector('#days').innerHTML = dias;
        document.querySelector('#hours').innerHTML = horas;
        document.querySelector('#mins').innerHTML = minutos;
        document.querySelector('#secs').innerHTML = segundos;

        if (distance < 0) {
            clearInterval(x);
            document.querySelector('demo').innerHTML = 'EXPIRED';
        }
    }, 1000);
}