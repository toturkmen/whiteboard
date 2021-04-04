import redraw from './../redraw.js';

let drawingMode = false, x = {}, y = {};

export default function rectangle (s) {
    if (s.mouseIsPressed) {
        if (! drawingMode) {
            [x, y] = [s.mouseX, s.mouseY];
            drawingMode = true;
        } else {
            redraw(s);
            s.rect(x, y, s.pmouseX, s.pmouseY);
        }
    } else {
        if (drawingMode) {
            if (x != s.pmouseX && y != s.pmouseY) {
                s.storeItem('timeline', s.append(s.getItem('timeline'), {
                    tool: 'rectangle',
                    properties: {
                        x, y, w: s.pmouseX, h: s.pmouseY
                    },
                    visible: true
                }));
            }
            redraw(s);
            drawingMode = false;
            x, y = 0;
        }
    }
};