import redraw from './../redraw.js';

let erasingMode = false, erasing = {};

export default function eraser (s) {
    if (s.mouseIsPressed) {
        let r = 10;
        if (s.getItem('stroke-weight')) {
            r *= s.getItem('stroke-weight') / 4;
        }
        if (! erasingMode) {
            erasing = {
                tool: 'eraser',
                properties: [
                    { x: s.mouseX, y: s.mouseY, r }
                ],
                visible: true
            };
            erasingMode = true;
        } else {
            erasing.properties.push ({ x: s.mouseX, y: s.mouseY, r });
        }
        redraw(s, null, erasing);
    } else {
        if (erasingMode) {
            s.socket.emit('timeline', erasing);
            erasing = {};
            erasingMode = false;
        }
    }
};