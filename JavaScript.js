/* Добавляем кнопку закрыть задачу */
var myNodeList = document.getElementsByTagName("LI");
for (var i = 0; i < myNodeList.length; i++) {
	var span = createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	myNodeList[i].appendChild(span);
}
var myNodeList2 = document.getElementsByTagName("LI");
for (var i = 0; i < myNodeList2.length; i++) {
	var span = createElement("SPAN");
	var txt = document.createTextNode("img");
	span.className = "close";
	span.appendChild(txt);
	myNodeList2[i].appendChild(span);
}

/* Прячем задачу по нажатию на закрыть */
var close = document.getElementsByClassName("close");
for (var i = 0; i < close.length; i++) {
	close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
	}
}

/* Завершенные задачи. Добавляет checked на задачах */
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);

/* Новая задача по нажатию на Добавить */
function newElement() {
	var li = document.createElement("li");
	var inputValue = document.getElementById("myInput").value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	if (inputValue === '') {
		alert("Вы должны добавить задачу!");
	} else {
		document.getElementById('myUL').appendChild(li);
	}
	document.getElementById("myInput").value = "";

	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);

	for (var i = 0; i < close.length; i++) {
		close[i].onclick = function() {
        	var div = this.parentElement;
       		div.style.display = "none";
		}
	}
}

