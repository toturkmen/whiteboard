import redraw from './../redraw.js';

let drawingMode = false, drawing = {};

export default function pencil (s) {
    if (s.mouseIsPressed) {
        if (s.mouseX != s.pmouseX || s.mouseY != s.pmouseY) {
            if (! drawingMode) {
                drawing = {
                    tool: 'pencil',
                    properties: [
                        {
                            x: s.mouseX, y: s.mouseY, pX: s.pmouseX, pY: s.pmouseY,
                            options: {
                                stroke: s.getItem('stroke'),
                                strokeWeight: s.getItem('stroke-weight')
                            }
                        }
                    ],
                    visible: true
                };
                drawingMode = true;
            } else {
                drawing.properties.push (
                    {
                        x: s.mouseX, y: s.mouseY, pX: s.pmouseX, pY: s.pmouseY,
                        options: {
                            stroke: s.getItem('stroke'),
                            strokeWeight: s.getItem('stroke-weight')
                        }
                    }
                );
            }
            redraw(s, null, drawing);
        }
    } else {
        s.socket.emit('timeline', drawing);
        drawing = {};
        drawingMode = false;
    }
};