import * as p5 from "p5/lib/p5.min.js";

import toolbar from './ui/toolbar.js';
import timeline from './ui/timeline.js';
import tools from './tools.js';

import 'normalize.css';
import './../css/main.css';

var sketch = (s) => {
    s.setup = () => {
        s.clearStorage();
        s.strokeWeight(2);
        s.ellipseMode(s.CORNERS);
        s.rectMode(s.CORNERS);
        s.noFill();
        s.createCanvas(window.innerWidth, window.innerHeight);
        s.storeItem('timeline', []);

        toolbar(s);
        timeline(s);
    }
    s.draw = () => {
        tools(s);
        console.log (s.getItem('timeline'));
    }
}

const P5 = new p5(sketch);