
function urlParams() {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    params = {};
    while (match = search.exec(query))
       params[decode(match[1])] = decode(match[2]);
    params.pathname = window.location.pathname;
    return params
}

function renderIndex() {
    var ul = $("<ul></ul>");
    var li = $("<li></li>");
    
    var arrayLength = data.length;
    for (var i = 0; i < arrayLength; i++) {
        var test = data[i];
        var newli = li.clone();
        var a = $("<a>", {href: "/test.html?testdir=" + test.directory}).text(test.name + ": " + test.description);
        newli.append(a);
        ul.append(newli);
    }
    $("#textgoeshere").append(ul);
}

function renderTest(params) {
    var test = {};
    var arrayLength = data.length;
    for (var i = 0; i < arrayLength; i++) {
        if (params.testdir == data[i].directory) {
            test = data[i];
        }
    }
    var div = $("<div></div>");
    var h3 = $("<h3></h3>").text(test.description);
    var p2 = $("<p></p>").text("JVM Options: " + test.jvmoptions);
    var img1 = $("<img>", {src: "/" + test.directory + "/heap-utilization-capacity.png"});
    var img2 = $("<img>", {src: "/" + test.directory + "/gc-events-time.png"});
    var li 
    var a = $("<a>", {href: "/" + test.directory}).text(test.name + ": " + test.description);
    var back = $("<a>", {href: "/index.html"}).text("Back to index");
        
    div.append(h3)
        .append(p2)
        .append(back)
        .append(img1)
        .append(img2)
        .append(back.clone());
        
    $("#textgoeshere").append(div);
    
}

$(function() {
    
    var params = urlParams();
    //alert(params.pathname);
    
    if (params.pathname == "/" || params.pathname == "/index.html") {
        renderIndex();
    } else {
        renderTest(params);
    }
    
    
});
