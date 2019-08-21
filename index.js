//initial
// initialize array and view;
var items;
function initialize() {
    items = [];
    document.getElementById('list').innerHTML = "";
}

//render
// render the data
function render(arr) {
    let newlist = "";
    arr.forEach(element => {
        newlist += this.createitems(element.text, element.id);
    });
    document.getElementById('list').innerHTML = newlist;
}

function createitems(text, id) {
    return `<div class="main">
                <div class="item-list">
                    <input type="checkbox" class="checkbox" onclick="togglecheckbox(this)" data-id="${id}">
                    <a href="#" class="itemtext" id="${id}">${text}</a>
                    <button class="fa fa-trash btn" onclick="deldata(this)" data-id="${id}"></button>
                </div>
            </div>`;
}

// insert data into the array
function insertdata() {
    var textdata = document.getElementById('inputtext').value;
    var id = Date.now();
    var obj = { text: textdata, id: id };
    if(textdata !== ""){
    this.items.push(obj);
    }
    render(items);
    document.getElementById('inputtext').value = "";
}

//Delete

function deldata(element) {
    var textdata = element.attributes["data-id"].value;
    this.items = items.filter(function (el) {
        return el.id + "" != textdata;
    });
    render(items);
}

function clearall() {
    initialize();
}


function togglecheckbox(element){
    var textdata = element.attributes["data-id"].value;
    var el = document.getElementById(textdata);
    el.classList.toggle('taskdone');
}

window.onload = function () {
    document.getElementById("inputtext").onkeypress = function (event) {
        if (event.keyCode == 13 || event.which == 13) {
            insertdata();
        }
    };
    initialize();
}