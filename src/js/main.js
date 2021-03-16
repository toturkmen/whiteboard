import * as p5 from "p5/lib/p5.min.js";

import './../css/main.css';

let sketch = (s) => {
    s.setup = () => {
        s.createCanvas(window.innerWidth, window.innerHeight);
        s.strokeWeight(2);
    }
    s.draw = () => {
        if (s.mouseIsPressed) {
            s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);
        }
    }
}

const P5 = new p5(sketch);