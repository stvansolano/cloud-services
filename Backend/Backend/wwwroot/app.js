"use strict";

var body = document.body;

    function fetchData(){
        var request = new XMLHttpRequest();
        request.open('GET', '/api/products', true);
        
        request.onload = function() {
          if (request.status !== 200) {
            body.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
            return;
          }
          renderTable(JSON.parse(request.responseText));
        };
        request.onerror = function() {
            body.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
        };
        request.send();
    }

    function renderTable(data){
        var table = document.getElementById("dataTable");

        if (table === null){
            return;
        }

        var header = table.createTHead();
        var rowHeader = header.insertRow(0);     

        appendHeaderCell(rowHeader, "Product", 0);
        appendHeaderCell(rowHeader, "Quantity", 1);
        appendHeaderCell(rowHeader, "Price", 2);

        const DATA_QUANTITY = "data-quantity";

        var tableBody = document.createElement("tbody");
        table.appendChild(tableBody);
        
        for (var i = 0; i<data.length; i++) { 
            var row = document.createElement('tr'); 

            tableBody.appendChild(row);

            appendColumn(row, data[i].name);
            appendColumn(row, data[i].quantity).setAttribute(DATA_QUANTITY, data[i].quantity);
            appendColumn(row, data[i].price.toLocaleString('en-US')).className = "money";
        }      

        var dataElements = document.querySelectorAll("[" + DATA_QUANTITY + "]");

        for(var i = 0; i< dataElements.length; i++) {
            if (dataElements[i].getAttribute(DATA_QUANTITY) > "3"){
                dataElements[i].className = "high-inventory";
            }
        }
    }

    function appendColumn(row, value, data, cssClass){
        var column = document.createElement("td");

        var tdText = document.createTextNode(value); 

        row.appendChild(column);
        column.appendChild(tdText); 

        return column;
    }

    function appendHeaderCell(rowHeader, text, index){

        var cell = document.createElement("th");
        rowHeader.appendChild(cell);
        var content = document.createElement("b")
        content.innerText = text;

        cell.appendChild(content);
    }

    document.onreadystatechange = function () {
        if (document.readyState == "interactive") {
            fetchData();
    }
}