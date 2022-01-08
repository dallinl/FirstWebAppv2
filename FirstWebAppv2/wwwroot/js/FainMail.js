////document.getElementById("btnSend").addEventListener("click", function () {
////    alert(document.getElementById("From").value + " sent a message about: " +
////        document.getElementById("Subject").value + ". It said: " +
////        document.getElementById("Message").value + ". ")
////})

$("#btnSend").click(function () {
    alert("This message if from " + $("#From").val() +
        " sent a message about: " + $("#Subject").val() +
        " with a message saying " + $("#Message").val());

    $("#GandyHeadShot").fadeOut
})