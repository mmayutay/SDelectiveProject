// basic functionalities
var client;

// var btnPublish = $("#Btn-Publish")


client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
client.on("connect", function() {
    console.log("connected");
    $(".Btn_Connect").on('click', function() {
        $("#Status").text("The device is currently turned On")
        $("#Status").css("color", "green")
        var topic = "maryann/device/status";
        var message = "TurnOn : " + moment().format('MMMM Do YYYY, h:mm:ss a');
        client.publish(topic, message);
        console.log("On")
            // console.log(" " + topic + " " + message);

    });

    $(".Btn_disConnect").click(function() {
        $("#Status").text("The device is currently turned Off")
        $("#Status").css("color", "red")
        var topic = "maryann/device/status";
        var message = "TurnOff : " + moment().format('MMMM Do YYYY, h:mm:ss a');
        client.publish(topic, message);
        console.log("Off");
    })
})