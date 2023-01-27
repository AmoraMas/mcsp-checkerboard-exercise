// Your JS goes here

// Each tile's width is `11.1%`
// Set each tile's `float` property to `left`
// Each tile's paddingBottom is `11.1%`



for (let i = 1; i <= 9*7; i++) {
    let square = document.createElement('div');
    square.style.width = '11.1%';
    square.style.height = '11.1%';
    square.style.float = 'left';
    square.style.paddingBottom = "11.1%"

    if (i % 2 == 0) {
        square.style.backgroundColor = 'red';
    }
    else {
        square.style.backgroundColor = 'black';
    }

    document.body.appendChild(square);
    console.log(square);
    console.log(square.style);
}



