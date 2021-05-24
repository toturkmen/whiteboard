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
        s.createSelect()
            .changed(() => {
                s.storeItem('font-size', fontSize.value());
                $('.text-tool').css('font-size', fontSize.value());
            }); 
    [12, 16, 20, 24, 32, 48, 72].map(size => {
        fontSize.option(`${size}px`);
    });
    s.storeItem('font-size', 12);

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