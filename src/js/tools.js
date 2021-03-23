import pencil from './tools/pencil.js';
import eraser from './tools/eraser.js';

export default function tools (s) {
    if (s.mouseIsPressed) {
        switch (s.getItem('selected-tool')) {
            case 'pencil': pencil(s); break;
            case 'eraser': eraser(s); break;
        }
    }
};