var database;
var drawing = [];
var db_drawing = [];

function setup(){
    createCanvas(500,500);
    database = firebase.database();
}
zz
function draw(){
    background(255);
    readPosition();
    beginShape();
    stroke(0);
    strokeWeight(3);
    noFill();
    for(var i=0;i<db_drawing.length;i++){
        vertex(db_drawing[i].x,db_drawing[i].y);
        endShape();
    }
}

function readPosition(){
    database.ref('drawing/d').on('value', function(data){
        db_drawing = data.val()
    })
}

function mouseDragged() {
    var point = {x:mouseX, y:mouseY}
    drawing.push(point);

    var databaseref = database.ref('drawing');
    databaseref.set({"d": drawing});
}
