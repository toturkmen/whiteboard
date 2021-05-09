import $ from 'jquery';
window.jQuery = $;
window.$ = $;

import 'bootstrap/dist/js/bootstrap.bundle.js';
import * as p5 from "p5/lib/p5.min.js";
import io from 'socket.io-client';

import welcome from './ui/welcome.js';
import navbar from './ui/navbar.js';
import toolbar from './ui/toolbar.js';
import toolOptions from './ui/toolOptions.js';
import timeline from './ui/timeline.js';
import tools from './tools.js';
import redraw from "./redraw.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/main.css';

var sketch = (s) => {
    s.setup = () => {
        s.socket = io({
            query: {
                room: window.location.pathname.split('/')[1]
            }
        });
        s.socket.on('timeline', (data) => {
            s.storeItem('timeline', s.getItem('timeline'));
            redraw(s);
        });

        s.clearStorage();
        s.strokeWeight(2);
        s.ellipseMode(s.CORNERS);
        s.rectMode(s.CORNERS);
        s.noFill();
        s.createCanvas(window.innerWidth, window.innerHeight);
        s.storeItem('timeline', []);

        welcome(s);
        navbar(s);
        toolbar(s);
        toolOptions(s);
        timeline(s);
    }
    s.draw = () => {
        s.socket.emit('timeline', s.getItem('timeline'));
        tools(s);
    }
}

const P5 = new p5(sketch);