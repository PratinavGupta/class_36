class FORM {

    constructor() {
    }
    dispaly() {
        heading = createElement('h2', 'MULTIPLAYER <br/> <pre>  Car racing')
        heading.position(350, 50)
        heading.style('color', '#FF8C00')
        //heading.style('fontWeight', 'bold')

        textbox = createInput('Enter your name');
        textbox.position(350, 250);
        textbox.size(200);
        textbox.style('color', '#FF0000');
        textbox.style('height', '30px');
        textbox.style('borderWidth', '5px');
        val = textbox.value();

        subButton = createButton('Submit');
        subButton.position(350, 400);
        subButton.style('backgroundColor', '#ADD8E6')
        subButton.style('width', '150px')
        subButton.style('height', '50px')
        // subButton.style('borderRadius', '50px')
        // subButton.mousePressed(function (){ 
        // })
    }

}