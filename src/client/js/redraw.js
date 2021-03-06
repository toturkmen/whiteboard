let localTimeline = [];

export default function redraw (s, timeline, extra) {
    if (! timeline) {
        timeline = localTimeline;
    }
    if (extra) {
        timeline.push(extra);
    }
    localTimeline = timeline;
    s.storeItem('timeline', timeline);
    s.background(255);
    for (let t of timeline) {
        if (t.visible) {
            switch (t.tool) {
                case 'pencil': {
                    for (let p of t.properties) {
                        if (p.options.stroke) {
                            s.stroke(p.options.stroke);
                        }
                        if (p.options.strokeWeight) {
                            s.strokeWeight(p.options.strokeWeight);
                        }
                        s.line(p.x, p.y, p.pX, p.pY);
                        s.stroke('#000');
                        s.strokeWeight(1);
                    }
                } break;
                case 'ellipse': {
                    if (t.properties.options.stroke) {
                        s.stroke(t.properties.options.stroke);
                    }
                    if (t.properties.options.strokeWeight) {
                        s.strokeWeight(t.properties.options.strokeWeight);
                    }
                    if (t.properties.options.fill) {
                        s.fill(t.properties.options.fill);
                    }
                    s.ellipse(t.properties.x, t.properties.y, t.properties.w, t.properties.h);
                    s.stroke('#000');
                    s.strokeWeight(1);
                    s.noFill();
                } break;
                case 'rectangle': {
                    if (t.properties.options.stroke) {
                        s.stroke(t.properties.options.stroke);
                    }
                    if (t.properties.options.strokeWeight) {
                        s.strokeWeight(t.properties.options.strokeWeight);
                    }
                    if (t.properties.options.fill) {
                        s.fill(t.properties.options.fill);
                    }
                    s.rect(t.properties.x, t.properties.y, t.properties.w, t.properties.h);
                    s.stroke('#000');
                    s.strokeWeight(1);
                    s.noFill();
                } break;
                case 'text': {
                    t.properties.options.fontSize = parseInt(t.properties.options.fontSize);
                    t.properties.y += t.properties.options.fontSize + 8;
                    t.properties.x += 4;
                    s.fill('#000');
                    if (t.properties.options.textColor) {
                        s.fill(t.properties.options.textColor);
                    }
                    s.textSize(t.properties.options.fontSize);
                    s.text(t.properties.value, t.properties.x, t.properties.y);
                    s.noFill();
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