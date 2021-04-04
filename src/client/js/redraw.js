export default function redraw (s) {
    s.background(255);
    for (let t of s.getItem('timeline')) {
        if (t.visible) {
            switch (t.tool) {
                case 'pencil': {
                    for (let p of t.properties) {
                        s.line(p.x, p.y, p.pX, p.pY);
                    }
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
                    for (let p of t.properties) {
                        s.ellipse(p.x, p.y, p.r);
                    }
                    s.noFill();
                    s.ellipseMode(s.CORNERS);
                    s.noErase();
                } break;
            }
        }
    }
};