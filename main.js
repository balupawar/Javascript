const screen = document.querySelector('body');

const bgColor = ['blue', 'pink', 'green', 'red', 'white', 'yellow', 'orange']

function changeColor() {
    const position = parseInt(Math.random() * bgColor.length);

    const color = bgColor[position]

    screen.style.backgroundColor = color

}