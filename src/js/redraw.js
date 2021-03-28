export default function redraw (s) {
    s.background(255);
    for (let t of s.getItem('timeline')) {
        switch (t.tool) {
            case 'pencil': {
                s.line(t.properties.x, t.properties.y, t.properties.pX, t.properties.pY);
            } break;
            case 'ellipse': {
                s.ellipse(t.properties.x, t.properties.y, t.properties.w, t.properties.h);
            } break;
            case 'rectangle': {
                s.rect(t.properties.x, t.properties.y, t.properties.w, t.properties.h);
            } break;
            case 'eraser': {
                s.erase();
                s.ellipseMode(s.CENTER);
                s.fill(255);
                s.ellipse(t.properties.x, t.properties.y, t.properties.r);
                s.noFill();
                s.ellipseMode(s.CORNERS);
                s.noErase();
            } break;
        }
    }
};