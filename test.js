
let degree = 0;

function rotateHeader() {
    degree = degree + 6;
    degree = degree % 360;

    if ((0 <= degree && degree < 90) || (270 <= degree && degree < 360)) {
        let img_element = document.createElement('img');
        img_element.src = '';
        img_element.src = 'black.png'; 
let content_area = document.getElementById("gazou");
content_area.appendChild(img_element);

    } else {
        let img_element = document.createElement('img');
        img_element.src = '';
        img_element.src = 'white.png'; 
        let content_area = document.getElementById("gazou");
        content_area.appendChild(img_element);

    }
 ing_element = 'rotateX(' + degree + 'deg)';
}
setInterval(rotateHeader, 20);


