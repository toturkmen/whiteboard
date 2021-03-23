export default function pencil (s) {
    s.strokeWeight(2);
    s.line(s.mouseX, s.mouseY, s.pmouseX, s.pmouseY);
};