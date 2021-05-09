export default function welcome (s) {
    if (window.location.pathname == '/') {
        let [firstRoomKey, secondRoomKey, thirdRoomKey] = [
            Math.random().toString(36).substring(7),
            Math.random().toString(36).substring(7),
            Math.random().toString(36).substring(7),
        ];
        window.location.pathname = '/' + firstRoomKey + '-' + secondRoomKey + '-' + thirdRoomKey;
    }
    $('#welcome').modal('show');
    $('#shareLink').val(window.location.href);
    $('#shareLinkButton').click(function () {
        $('#shareLink').select();
        document.execCommand('copy');
    });
};