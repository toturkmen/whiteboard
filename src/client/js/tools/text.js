import redraw from './../redraw.js';

let drawingMode = false, x = {}, y = {}, input = null;

export default function text (s) {
    if (s.mouseIsPressed && input == null && !drawingMode) {
        [x, y] = [s.mouseX, s.mouseY];
        input = s.createInput().position(s.mouseX, s.mouseY);
        drawingMode = true;
    }
    if (s.keyIsPressed && s.keyCode == 13 && input != null) {
        if (input.value()) {
            s.storeItem('timeline', s.append(s.getItem('timeline'), {
                tool: 'text',
                properties: {
                    x, y, value: input.value()
                },
                visible: true
            }));
        }
        input.remove();
        redraw(s);
        drawingMode = false;
        input = null;
    }
};