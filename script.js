// Your JS goes here

// Each tile's width is `11.1%`
// Set each tile's `float` property to `left`
// Each tile's paddingBottom is `11.1%`

function randomColor() {
    let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C' , 'D', 'E', 'F']
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += values[Math.floor(Math.random()*16)]
    }
    console.log(color);
    return color;
}

for (let i = 1; i <= 9*7; i++) {
    let square = document.createElement('div');
    square.style.width = '11.1%';
    square.style.height = '11.1%';
    square.style.float = 'left';
    square.style.paddingBottom = "11.1%"
    square.style.backgroundColor = randomColor();

    document.body.appendChild(square);
}



