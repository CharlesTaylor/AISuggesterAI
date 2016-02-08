/**
 * Created by Fatih on 08/02/2016.
 */

function foo(){
    var node = document.createElement("img");
    var t = document.createElement("h2");
    node.src =  "loading.gif";
    node.id = "gif";
    t.innerHTML = "Thinking";
    t.id = "text";
    document.getElementById("sec").appendChild(t);
    document.getElementById("sec").appendChild(node);
    document.getElementById("sec").removeChild(document.getElementById("qq"));
    document.getElementById("sec").removeChild(document.getElementById("tex"));
    setTimeout(function(){
        document.getElementById("sec").removeChild(document.getElementById("gif"));
        document.getElementById("sec").removeChild(document.getElementById("text"));
        var node = document.createElement("h1");
        node.innerHTML = "Make an Artificial Intellegence Project Suggester";
        document.getElementById("sec").appendChild(node);
        var goback = document.createElement("a");
        goback.href = "index.html";
        goback.innerHTML ="Go Back";
        document.getElementById("sec").appendChild(goback);

    },5000);
}
