//Нахождение площади экрана 
function screenArea(height, width) {
    square = height * width;
    console.log("Площадь экрана: " + square);
};
screenArea(15, 20);

//Цикл для увеличения ширины экрана 
let new_width = 0

for (i = 0; i < 5; i++){
    new_width += 10;
    console.log("Новое значение ширины: " +  new_width);
};