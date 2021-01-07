const server = document.currentScript.getAttribute('server');
const trigger = document.currentScript.getAttribute('trigger');
const ch = document.currentScript.getAttribute('ch');

function ___makeconn() {
    var evt = new EventSource(server+"/sse/listen/"+ch);
    evt.addEventListener(trigger||"reloadpage", function (e) {
        console.log(e);
        window.location.reload();
    }, false);
    evt.addEventListener('error', function (e) {
        evt.close();
        ___makeconn();
    }, false);
}

___makeconn();
