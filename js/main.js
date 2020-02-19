var x = +prompt("1 число!"); //выводит на экран баннер в котором записываешь число
var y = +prompt("2 число!");
var z = +prompt ("3 число!");
var res;


while (isNan(x) || isNan(y) || isNan(z)) {
	x =  +prompt("Внимательно введите число 1!");
	y =  +prompt("Внимательно введите число 2!");
	z =  +prompt("Внимательно введите число 3!");
}

if (x == y || x == z || y == z) {
	res = "Невозможно найти среднее число";
}

else if ( ( (x > y) && (x < z) )  || ( (x < y) && (x > z) ) ) {
 	res = x;
} 
else if ( ( (y > x)  && ( y < z) ) || ( ( y < x) && (y > z) ) )  {
	res = y;
}else {
  	res = z;
} 

alert(res);

	
