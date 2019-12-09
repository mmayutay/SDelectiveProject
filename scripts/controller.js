var client;

var endTime;
var startTime;


client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
client.on("connect", function () {
    console.log("connected");

});

var topic = "toWeb";
client.subscribe(topic);
client.on("message", function (topic, payload) {
    var today = new Date();
    console.log(topic + " " + String(payload));
    var count = 0
    if (String(payload) == "waterise") {
        count++;
        $("#value").text(count)
        startTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ":";
        console.log("startTime: " + startTime);

        $("#message").text("Sprinkler is currently Off");
        $("#message").css("color", "green")
    } else {
        endTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log("endTime: " + endTime);

        $("#message").text("Sprinkler is currently On");
        $("#message").css("color", "red")
    }


    $("#time").text(startTime);


})
