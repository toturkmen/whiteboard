import pencil from './tools/pencil.js';
import ellipse from './tools/ellipse.js';
import rectangle from './tools/rectangle.js';
import text from './tools/text.js';
import eraser from './tools/eraser.js';

export default function tools (s) {
    switch (s.getItem('selected-tool')) {
        case 'pencil': pencil(s); break;
        case 'ellipse': ellipse(s); break;
        case 'rectangle': rectangle(s); break;
        case 'text': text(s); break;
        case 'eraser': eraser(s); break;
    }
};