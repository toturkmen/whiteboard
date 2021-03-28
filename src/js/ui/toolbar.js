export default function toolbar (s) {
    let toolbar = s.createDiv().class('toolbar');
    ['pencil', 'ellipse', 'rectangle', 'eraser'].map ((tool) => {
        toolbar.child(
            s.createButton(tool)
                .class('button')
                .mousePressed(() => s.storeItem('selected-tool',tool))
        )
    });
};