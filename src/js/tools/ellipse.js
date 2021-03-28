import redraw from './../redraw.js';

let drawingMode = false, x = {}, y = {};

export default function circle (s) {
    if (s.mouseIsPressed) {
        if (! drawingMode) {
            [x, y] = [s.mouseX, s.mouseY];
            drawingMode = true;
        } else {
            redraw(s);
            s.ellipse(x, y, s.pmouseX, s.pmouseY);
        }
    } else {
        if (drawingMode) {
            s.storeItem('timeline', s.append(s.getItem('timeline'), {
                tool: 'ellipse',
                properties: {
                    x, y, w: s.pmouseX, h: s.pmouseY
                }
            }));
            redraw(s);
            drawingMode = false;
            x, y = 0;
        }
    }
};