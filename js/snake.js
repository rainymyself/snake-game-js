//'Use Strict'

var $grid = $('#grid');
var $snake = $('#snake');
var $food = $('#food');

var timer;

function snakeMove(direction) {
	switch(direction) {
		case 'left':
			$snake.animate({left:'-=10px'},'fast');
			break;
		case 'up':
			$snake.animate({top:'-=10px'},'fast');
			break;
		case 'right':
			$snake.animate({left:'+=10px'},'fast');
			break;
		case 'down':
			$snake.animate({top:'+=10px'},'fast');
			break;
	}
}

/*
function createFood() {
	$food.position().left=Math.floor(Math.random()*(202)+10);
	$food.position().top=Math.floor(Math.random()*(380-10+1)+10);
}

function crashExam(obj1, obj2) {
    var obj1Left = obj1.offsetLeft;
    var obj1Width = obj1.offsetLeft + obj1.offsetWidth;
    var obj1Top = obj1.offsetTop;
    var obj1Height = obj1.offsetTop + obj1.offsetHeight;
    var obj2Left = obj2.offsetLeft;
    var obj2Width = obj2.offsetLeft + obj2.offsetWidth;
    var obj2Top = obj2.offsetTop;
    var obj2Height = obj2.offsetTop + obj2.offsetHeight;
    if ( !(obj1Left > obj2Width || obj1Width < obj2Left || obj1Top > obj2Height || obj1Height < obj2Top) ) {
        $body = document.createElement('div');
        $body.addClass('body');
        $body.appendTo($('grid'));
        createFood();
        setInterval(bodyFollow,200);
};

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
	
	$(document).keydown(function(event) {
		switch(event.which) {
			case 37: //moveLeft
				//clearInterval(timer);
				//timer=window.setInterval(function(){snakeMove('left');},200);
				snakeMove('left');
				break;
			case 38: //moveUp
				//clearInterval(timer);
				//timer=window.setInterval(function(){snakeMove('up');},200);
				snakeMove('up');
				break;
			case 39: //moveRight
				//clearInterval(timer);
				//timer=window.setInterval(function(){snakeMove('right');},200);
				snakeMove('right');
				break;
			case 40: //moveDown
				//clearInterval(timer);
				//timer=window.setInterval(function(){snakeMove('down');},200);
				snakeMove('down');
				break;
			default:
				break;
		};
	});
});