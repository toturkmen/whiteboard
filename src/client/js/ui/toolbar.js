export default function toolbar (s) {
    let toolbar =
        s.createDiv()
            .id('toolbar')
            .class('btn-group');

    ['pencil', 'ellipse', 'rectangle', 'eraser'].map ((tool) => {
        toolbar.child(
            s.createButton(tool)
                .class('btn btn-secondary btn-sm rounded-0 m-0')
                .mousePressed(() => s.storeItem('selected-tool',tool))
        )
    });
};