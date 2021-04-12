import redraw from './../redraw.js';

let drawingMode = false, x = {}, y = {};

export default function rectangle (s) {
    if (s.mouseIsPressed) {
        if (! drawingMode) {
            [x, y] = [s.mouseX, s.mouseY];
            drawingMode = true;
        } else {
            redraw(s);
            if (s.getItem('stroke')) {
                s.stroke(s.getItem('stroke'));
            }
            if (s.getItem('stroke-weight')) {
                s.strokeWeight(s.getItem('stroke-weight'));
            }
            if (s.getItem('fill')) {
                s.fill(s.getItem('fill'));
            }
            s.rect(x, y, s.pmouseX, s.pmouseY);
            s.stroke('#000');
            s.strokeWeight(1);
            s.noFill();
        }
    } else {
        if (drawingMode) {
            if (x != s.pmouseX && y != s.pmouseY) {
                s.storeItem('timeline', s.append(s.getItem('timeline'), {
                    tool: 'rectangle',
                    properties: {
                        x, y, w: s.pmouseX, h: s.pmouseY,
                        options: {
                            stroke: s.getItem('stroke'),
                            strokeWeight: s.getItem('stroke-weight'),
                            fill: s.getItem('fill')
                        }
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