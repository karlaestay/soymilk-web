function insertItemsInElementId(items, id) {
    for (var i = 0; i < items.length; i++) {
      var div = document.createElement('div');
      div.setAttribute('class', 'card inline-block');
      div.setAttribute('style', "display:'inline'; width: 25%;");

		div.innerHTML =
			`
              <div class="afuera centrado">
                <img class="card-img-top " src=${"res/" + items[i].img} alt="Card image cap">
                <span class="adentro brandon">${items[i].etiqueta}</span>
              </div>

              <div class="card-body tarjetas centrado"  style="margin:auto;>
                <p class="card-title centrado nombreproductos" style="margin:auto;">${items[i].nombre}</p>
`;
		if (items[i].precio != null) {
			div.innerHTML +=
				`
                <hr class="separadorpyp">
                <p class="card-text">${formatAmount(items[i].precio)}</p>
                <a href="${items[i].link}" class="btn btn-primary botoncomprar">COMPRAR</a>`;
		}

		div.innerHTML += '</div>';
		document.getElementById(id).appendChild(div);
	}
}

function formatAmount(amount) {
	let result = "";
	let digits = 0;
	while (amount > 0) {
		if (digits === 3) {
			result = "." + result;
			digits = 0;
		}
		result = (amount % 10) + result;
		amount = Math.trunc(amount / 10);
		digits++;
	}
	return "$ " + result;
}
