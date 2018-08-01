"use strict";

function getScriptPath() {
    let file = document.getElementById("txtFile");
    let scriptPath = "./" + file.value;

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

function handleAjaxSuccess() {
}

function runScript() {
    let scriptPath = getScriptPath();
    
    $.ajax({
        url: scriptPath,
        dataType: "script",
        crossDomain: true,
        error: handleAjaxError,
        success: handleAjaxSuccess,
    });
}

let btnRun = document.getElementById("btnRun");
btnRun.onclick = runScript;

let txtFile = document.getElementById("txtFile");
let tests = [];