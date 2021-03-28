import redraw from './../redraw.js';

export default function eraser (s) {
    if (s.mouseIsPressed) {
        s.storeItem('timeline', s.append(s.getItem('timeline'), {
            tool: 'eraser',
            properties: {
                x: s.mouseX, y: s.mouseY, r: 20
            }
        }));
        redraw(s);
    }
};