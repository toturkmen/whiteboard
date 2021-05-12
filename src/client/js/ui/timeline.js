import redraw from './../redraw.js';

export default function timeline (s) {
    s.createDiv()
        .id('timeline')
        .class('btn-group')
        .child(
            s.createButton('')
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
                .child(
                    s.createImg(`/images/svg/undo.svg`, 'undo')
                        .attribute('height', '24px')
                )
        )
        .child(
            s.createButton('')
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
                .child(
                    s.createImg(`/images/svg/redo.svg`, 'redo')
                        .attribute('height', '24px')
                )
        )
};