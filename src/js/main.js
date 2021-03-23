import * as p5 from "p5/lib/p5.min.js";

import toolbar from './ui/toolbar.js';
import tools from './tools.js';

import 'normalize.css';
import './../css/main.css';

var sketch = (s) => {
    s.setup = () => {
        s.clearStorage();
        s.createCanvas(window.innerWidth, window.innerHeight);

        toolbar(s);
    }
    s.draw = () => {
        tools(s);
    }
}

const P5 = new p5(sketch);