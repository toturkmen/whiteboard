import redraw from './../redraw.js';

export default function timeline (s) {
    s.createDiv()
        .id('timeline')
        .class('btn-group')
        .child(
            s.createButton('')
                .class('btn btn-secondary btn-sm rounded-0 m-0')
                .mousePressed(() => {
                    s.socket.emit('undo');
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
                    s.socket.emit('redo');
                })
                .child(
                    s.createImg(`/images/svg/redo.svg`, 'redo')
                        .attribute('height', '24px')
                )
        )
};