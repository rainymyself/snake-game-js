var timer;

function init() {
	$(document).keydown(function(event) {
		switch(event.which) {
			case 37: //moveLeft
				clearInterval(timer);
				timer=window.setInterval(function(){snakeMove('left');snakeEat();},200);
				//snakeMove('left');
				break;
			case 38: //moveUp
				clearInterval(timer);
				timer=window.setInterval(function(){snakeMove('up');snakeEat();},200);
				//snakeMove('up');
				break;
			case 39: //moveRight
				clearInterval(timer);
				timer=window.setInterval(function(){snakeMove('right');snakeEat();},200);
				//snakeMove('right');
				break;
			case 40: //moveDown
				clearInterval(timer);
				timer=window.setInterval(function(){snakeMove('down');snakeEat();},200);
				//snakeMove('down');
				break;
			default:
				break;
		}
	});
}

function snakeMove(direction) {
	switch(direction) {
		case 'left':
			$('#snake').animate({left:'-=10px'},'fast');
			break;
		case 'up':
			$('#snake').animate({top:'-=10px'},'fast');
			break;
		case 'right':
			$('#snake').animate({left:'+=10px'},'fast');
			break;
		case 'down':
			$('#snake').animate({top:'+=10px'},'fast');
			break;
	}
}

function snakeEat() {	
	crashExamine($('#snake'), $('#food'));
	function crashExamine($obj1, $obj2) {
		var obj1Left = $obj1.offset().left;
		var obj1Width = $obj1.width();
		var obj2Left = $obj2.offset().left;
		var obj2Width = $obj2.width();
		var obj1Top = $obj1.offset().top;
		var obj1Height = $obj1.height();
		var obj2Top = $obj2.offset().top;
		var obj2Height = $obj2.height();
	    if (!(obj1Left>=(obj2Left+obj2Width) || obj2Left>=(obj1Left+obj1Width) || obj1Top>=(obj2Top+obj2Height) || obj2Top>=(obj1Top+obj1Height))) {
	        console.log('crashed');
	        createFood();
	        createBody();
	        //setInterval(bodyFollow,200);
	    }
	}
	function createFood() {
		$('#food').css('left', Math.floor(Math.random()*20)*10+'px');
		$('#food').css('top', Math.floor(Math.random()*20)*10+'px');
		console.log($('#food').position().left+", "+$('#food').position().top);
	}
	function createBody() {
		$('<div></div>').addClass('body').appendTo($('#grid'));
	}
}


/*
function bodyFollow() {
	var place=0;
	for (var i = 0; i < $('.body').length; i++) {
		place += 10;
		$('.body')[i].style.left=srr[num-place][0] + 'px';
        $('.body')[i].style.top=srr[num-place][1] + 'px'; 

	}
}
*/



$(document).ready(function() {
	init();
});