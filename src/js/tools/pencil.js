import redraw from './../redraw.js';

export default function rectangle (s) {
    if (s.mouseIsPressed) {
        s.storeItem('timeline', s.append(s.getItem('timeline'), {
            tool: 'pencil',
            properties: {
                x: s.mouseX, y: s.mouseY, pX: s.pmouseX, pY: s.pmouseY
            }
        }));
        redraw(s);
    }
};