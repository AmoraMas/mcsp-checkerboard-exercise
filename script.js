// Your JS goes here

// Each tile's width is `11.1%`
// Set each tile's `float` property to `left`
// Each tile's paddingBottom is `11.1%`

let color1 = '#AA0000';
let color2 = '#00AA00';

for (let i = 1; i <= 9*7; i++) {  // 9*7
    function changeColor(currentColor) {
        let values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C' , 'D', 'E', 'F']
        let colorArray = currentColor.split('');
        //console.log('v0: ' + colorArray[5]);
        //console.log('v1: ' + values.indexOf(colorArray[5]));
        //console.log('v2: ' + (Number(values.indexOf(colorArray[5])) + 1));

        if (values.indexOf(colorArray[6]) < 15) {
            colorArray[6] = values[Number(values.indexOf(colorArray[6])) + 4];
        }
        else {
            colorArray[6] = values[0];
            if (values.indexOf(colorArray[5]) < 15) {
                colorArray[5] = values[Number(values.indexOf(colorArray[5])) + 4];
            }
            else {
                colorArray[5] = values[0];
            }
        }
       let newColor = '';
       for (let i = 0; i < 7; i++) {
            newColor += colorArray[i];
       }
        return newColor;
    }

    let square = document.createElement('div');
    square.style.width = '11.1%';
    square.style.height = '11.1%';
    square.style.float = 'left';
    square.style.paddingBottom = "11.1%"
    if (i % 2 == 0) {
        square.style.backgroundColor = changeColor(color1);
    }
    else {
        square.style.backgroundColor = changeColor(color2);
    }

    document.body.appendChild(square);
}



