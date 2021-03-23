export default function eraser (s) {
    s.erase();
    s.ellipse(s.mouseX, s.mouseY, 20);
    s.noErase();
};