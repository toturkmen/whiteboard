import redraw from './../redraw.js';

let drawingMode = false;

export default function pencil (s) {
    if (s.mouseIsPressed) {
        if (s.mouseX != s.pmouseX || s.mouseY != s.pmouseY) {
            if (! drawingMode) {
                s.storeItem('timeline', s.append(s.getItem('timeline'), {
                    tool: 'pencil',
                    properties: [
                        { x: s.mouseX, y: s.mouseY, pX: s.pmouseX, pY: s.pmouseY }
                    ],
                    visible: true
                }));
                drawingMode = true;
            } else {
                let timeline = s.getItem('timeline');
                timeline[timeline.length - 1].properties.push ({ x: s.mouseX, y: s.mouseY, pX: s.pmouseX, pY: s.pmouseY });
                s.storeItem('timeline', timeline);
            }
            redraw(s);
        }
    } else {
        drawingMode = false;
    }
};