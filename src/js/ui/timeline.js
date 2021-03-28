import redraw from './../redraw.js';

export default function timeline (s) {
    s.createDiv().class('timeline')
        .child(
            s.createButton('undo')
                .class('button')
                .mousePressed(() => {
                    let timeline = s.getItem('timeline');
                    for (let index = 1; index <= timeline.length; index++) {
                        if (timeline[timeline.length - index].visible) {
                            timeline[timeline.length - index].visible = false;
                            break;
                        }
                    }
                    s.storeItem('timeline', timeline);
                    redraw(s);
                })
        )
        .child(
            s.createButton('redo')
                .class('button')
                .mousePressed(() => {
                    let timeline = s.getItem('timeline');
                    for (let index = 0; index < timeline.length; index++) {
                        if (! timeline[index].visible) {
                            timeline[index].visible = true;
                            break;
                        }
                    }
                    s.storeItem('timeline', timeline);
                    redraw(s);
                })
        )
};