import redraw from './../redraw.js';

export default function timeline (s) {
    s.createDiv()
        .id('timeline')
        .class('btn-group')
        .child(
            s.createButton([
                'Undo'
            ])
                .class('btn btn-secondary btn-sm rounded-0 m-0')
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
            s.createButton([
                'Redo'
            ])
                .class('btn btn-secondary btn-sm rounded-0 m-0')
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