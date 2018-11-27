"use strict";

var body = document.body;

    function fetchData(){
        var request = new XMLHttpRequest();
        request.open('GET', 'http://localhost:8081/api/hello', true);
        
        request.onload = function() {
          if (request.status !== 200) {
            body.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
            return;
          }
          document.getElementById("hello").innerText = request.responseText + ", Docker";
        };
        request.onerror = function() {
            body.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
        };
        request.send();
    }

    document.onreadystatechange = function () {
        if (document.readyState == "interactive") {
            fetchData();
    }
}