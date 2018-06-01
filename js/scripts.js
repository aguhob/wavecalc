function wave3() {

    var w1 = $("#w1").val();
    var w2 = $("#w2").val();    
    var w3 = w1 / w2;

// have function wave3() print "recommend" or "do not recommend" if w1/w2 epsilon < 2.001.   
    
    if (w3 < 2.6 && w3 > 1.9) {
        document.getElementById("submit").value = "Recommended buy";
    } else { 
        document.getElementById("submit").value = "Do not buy";
    }

}

//    document.getElementById("submit").value = w3;
//}  // JS ^to print something in Result box

//$("#submit").submit(wave3); //is this the right jquery, and is the index referring to this correctly