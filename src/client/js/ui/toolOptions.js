export default function toolOptions (s) {
    let stroke =
        s.createDiv()
            .class('stroke-option')
            .child(
                s.createDiv('Stroke').class('title')
            )
            .child(
                s.createColorPicker('#000000')
                    .changed(() => s.storeItem('stroke', stroke.value()))
            );

    let strokeWeight =
        s.createSlider(1, 100, 2)
            .changed(() => s.storeItem('stroke-weight', strokeWeight.value()));

    let fill =
        s.createColorPicker('#FFF')
            .changed(() => s.storeItem('fill', fill.value()));
    
    let fontSize =
        s.createSlider(8, 72, 16)
            .changed(() => s.storeItem('font-size', fontSize.value()));

    let toolOptions =
        s.createDiv()
            .id('tool-options')
            .child(stroke)
            .child(s.createDiv('Stroke Weight').class('title'))
            .child(strokeWeight)
            .child(s.createDiv('Fill').class('title'))
            .child(fill)
            .child(s.createDiv('Font Size').class('title'))
            .child(fontSize);
};