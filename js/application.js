// Wait till the browser is ready to render the game (avoids glitches)
function getSize() {
    var reg = new RegExp("(^|&)size=([^&]*)(&|$)", "i");
    var r = location.search.substr(1).match(reg);
    if (r != null) {
        return parseInt(unescape(decodeURI(r[2])));
    }
    return 8;
}

function getMode() {
    var reg = new RegExp("(^|&)mode=([^&]*)(&|$)", "i");
    var r = location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(decodeURI(r[2]));
    }
    return "normal";
}

window.requestAnimationFrame(function() {
    var size = getSize();
    var container = document.getElementById('grid-container');
    var html = '';
    for (var i = 0; i < size; ++i) {
        html += '<div class="grid-row">';
        for (var j = 0; j < size; ++j) {
            html += '<div class="grid-cell"></div>';
        }
        html += '</div>';
    }
    container.innerHTML = html;
    game = new GameManager(size, KeyboardInputManager, HTMLActuator, LocalScoreManager);
    var mode = getMode();
});

function changeMode(mode) {
    window.location.href = 'index.html?size=' + getSize() + '&mode=' + mode;
}

function changeSize(size) {
    window.location.href = 'index.html?size=' + size + '&mode=' + getMode();
}