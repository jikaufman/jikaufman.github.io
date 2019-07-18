function moveAll() {

	var rand_num = Math.random() + 0.7

	var j;

	for (j = 0; j < 40; j++) {
		move(j)
	}

	function move(i) {

		var elem = document.getElementById("a" + i);
		var theta = rand_num*i*i;
		var pos_x = rand_num*(i*4 + 1);
		var pos_y = 20 + i*2;
		var id = setInterval(frame, 10);

		function frame() {

			if (pos_x >= 100) {
				clearInterval(id);
			} else  {
				theta += 0.01;
				pos_x += 0.05 + 0.005*rand_num*(i % 20 + 1);
				elem.style.top = pos_y + 10*(rand_num + 1)*Math.sin(theta) + '%';
				elem.style.left = pos_x + '%';
				if (pos_x >= 99.8) {
					pos_x = 0;
				}
			}
		}
	}
}

window.onload = moveAll;