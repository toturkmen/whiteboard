export default function toolbar (s) {
    let toolbar =
        s.createDiv()
            .id('toolbar')
            .class('btn-group');

    ['mouse', 'pencil', 'ellipse', 'rectangle', 'text', 'eraser'].map ((tool) => {
        toolbar.child(
            s.createButton('')
                .class('btn btn-secondary btn-sm rounded-0 m-0')
                .mousePressed(() => {
                    let toolInterval = setInterval (() => {
                        if (! s.mouseIsPressed) {
                            s.storeItem('selected-tool',tool);
                            $('#tool-options')
                                .removeAttr('class')
                                .addClass(tool + '-tool-options');
                            clearInterval(toolInterval);
                        }
                    }, 250);
                })
                .child(
                    s.createImg(`/images/svg/${tool}.svg`, tool)
                        .attribute('height', '24px')
                )
        )
    });
};