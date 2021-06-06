import redraw from './../redraw.js';

let drawingMode = false, x = {}, y = {};

export default function circle (s) {
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
            s.ellipse(x, y, s.pmouseX, s.pmouseY);
        }
    } else {
        if (drawingMode) {
            if (x != s.pmouseX && y != s.pmouseY) {
                s.socket.emit('timeline', {
                    tool: 'ellipse',
                    properties: {
                        x, y, w: s.pmouseX, h: s.pmouseY,
                        options: {
                            stroke: s.getItem('stroke'),
                            strokeWeight: s.getItem('stroke-weight'),
                            fill: s.getItem('fill')
                        }
                    },
                    visible: true
                });
            }
            drawingMode = false;
            x, y = 0;
        }
    }
};