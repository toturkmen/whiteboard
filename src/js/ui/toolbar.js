export default function toolbar (s) {
    let toolbar = s.createDiv().class('toolbar');
    ['pencil', 'eraser'].map ((tool) => {
        toolbar.child(
            s.createButton(tool)
                .class('button')
                .mousePressed(() => s.storeItem('selected-tool',tool))
        )
    });
};