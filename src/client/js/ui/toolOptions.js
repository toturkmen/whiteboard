export default function toolOptions (s) {
    let stroke =
        s.createColorPicker('#000000')
            .changed(() => s.storeItem('stroke', stroke.value()));

    let strokeWeight =
        s.createSlider(1, 100, 2)
            .changed(() => s.storeItem('stroke-weight', strokeWeight.value()));

    let fill =
        s.createColorPicker('#FFF')
            .changed(() => s.storeItem('fill', fill.value()));

    let toolOptions =
        s.createDiv()
            .id('tool-options')
                .child(stroke)
                .child(strokeWeight)
                .child(fill);
};