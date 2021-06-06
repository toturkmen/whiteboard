import redraw from './../redraw.js';

let drawingMode = false, x = {}, y = {}, input = null;

export default function text (s) {
    if (s.mouseIsPressed && input == null && !drawingMode) {
        [x, y] = [s.mouseX, s.mouseY];
        input =
            s.createInput()
                .class('text-tool')
                .style('font-size', s.getItem('font-size'))
                .position(s.mouseX, s.mouseY);
        drawingMode = true;
    }
    if (s.keyIsPressed && s.keyCode == 13 && input != null) {
        if (input.value()) {
            let txt = {
                tool: 'text',
                properties: {
                    x, y, value: input.value(),
                    options: {
                        fontSize: s.getItem('font-size'),
                    }
                },
                visible: true
            };
            s.socket.emit('timeline', txt);
            redraw(s, null, txt)
        }
        input.remove();
        drawingMode = false;
        input = null;
    }
};