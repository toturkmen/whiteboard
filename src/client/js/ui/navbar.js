export default function navbar (s) {
    let navbar =
        s.createElement('nav')
            .id('navbar')
            .class('navbar navbar-expand-lg navbar-light bg-light')
            .child(
                s.createA('#', 'Whiteboard')
                    .class('navbar-brand')
            )
            .child(
                s.createDiv()
                    .id('navbarSupportedContent')
                    .class('collapse navbar-collapse')
                    .child(
                        s.createElement('ul')
                            .class('navbar-nav mr-auto')
                            .child(
                                s.createElement('li')
                                    .class('nav-item dropdown')
                                    .child(
                                        s.createA('#', 'File')
                                            .class('nav-link dropdown-toggle')
                                            .attribute('data-toggle', 'dropdown')
                                            .attribute('role', 'button')
                                    )
                                    .child(
                                        s.createDiv()
                                            .class('dropdown-menu')
                                            .child(
                                                s.createA('#', 'Open from a JSON')
                                                    .class('dropdown-item')
                                                    .mousePressed(() => {
                                                        s.createFileInput((file) => {
                                                            if (file.subtype === 'json') {
                                                                s.socket.emit('load', file.data);
                                                            }
                                                            else {
                                                                window.alert('File type error!');
                                                            }
                                                        }).id('test-input');
                                                        document.querySelector('#test-input').click();
                                                    })
                                            )
                                            .child(
                                                s.createA('#', 'Save as a Image')
                                                    .class('dropdown-item')
                                                    .mousePressed(() => {
                                                        s.saveCanvas('whiteboard', 'jpg');
                                                    })
                                            )
                                            .child(
                                                s.createA('#', 'Save as a JSON')
                                                    .class('dropdown-item')
                                                    .mousePressed(() => {
                                                        s.saveJSON(s.getItem('timeline'), 'whiteboard.timeline.json');
                                                    })
                                            )
                                    )
                            )
                            .child(
                                s.createElement('li')
                                    .class('nav-item dropdown')
                                    .child(
                                        s.createA('#', 'Help')
                                            .class('nav-link dropdown-toggle')
                                            .attribute('data-toggle', 'dropdown')
                                            .attribute('role', 'button')
                                    )
                                    .child(
                                        s.createDiv()
                                            .class('dropdown-menu')
                                            .child(
                                                s.createA('https://github.com/toturkmen/whiteboard', 'Github Repository', '_blank')
                                                    .class('dropdown-item'),
                                            )
                                    )
                            )
                    )
            )
};