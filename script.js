"use strict";

function getScriptPath() {
    var file = document.getElementById("txtFile");
    var scriptPath = "./" + file.value;

    return scriptPath;
}

function handleAjaxError(jqXHR, textStatus, errorThrown) {
    switch (jqXHR.status) {
        case 404:
            alert('Not Found!');
            break;
    
        default:
            alert('Fishy Error!');
            break;
    }
}

function runScript() {
    var scriptPath = getScriptPath();
    
    $.ajax({
        url: scriptPath,
        dataType: "script",
        crossDomain: true,
        error: handleAjaxError,
    });
}

var btnRun = document.getElementById("btnRun");
btnRun.onclick = runScript;