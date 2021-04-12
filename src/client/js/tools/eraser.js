import redraw from './../redraw.js';

let drawingMode = false;

export default function eraser (s) {
    if (s.mouseIsPressed) {
        let r = 10;
        if (s.getItem('stroke-weight')) {
            r *= s.getItem('stroke-weight') / 4;
        }
        if (! drawingMode) {
            s.storeItem('timeline', s.append(s.getItem('timeline'), {
                tool: 'eraser',
                properties: [
                    { x: s.mouseX, y: s.mouseY, r }
                ],
                visible: true
            }));
            drawingMode = true;
        } else {
            let timeline = s.getItem('timeline');
            timeline[timeline.length - 1].properties.push ({ x: s.mouseX, y: s.mouseY, r });
            s.storeItem('timeline', timeline);
        }
        redraw(s);
    } else {
        if (drawingMode) {
            let timeline = s.getItem('timeline'), lastEraser = timeline[timeline.length - 1], faulty = true;
            for (let i = 1; i < timeline[timeline.length - 1].properties.length; i++) {
                if (lastEraser.properties[i - 1].x != lastEraser.properties[i].x && lastEraser.properties[i - 1].y != lastEraser.properties[i].y) {
                    faulty = false;
                    break;
                }
            }
            if (faulty) {
                timeline.pop();
                s.storeItem('timeline', timeline);
            }
            drawingMode = false;
        }
    }
};