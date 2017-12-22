      var authKey = "0b6ea5fceacd73c79e98b7bd86777a4c"

      var queryURLBase = "";

$("#add-train").on("click", function(event) {
      // prevent page from refreshing when form tries to submit itself
      event.preventDefault();

      // Capture user inputs and store them into variables
      var name = $("#name-input").val().trim();
      var destination = $("#destination-input").val().trim();
      var time = $("#time-input").val().trim();
      var frequency = $("#frequency-input").val().trim();

      // Console log each of the user inputs to confirm we are receiving them
      console.log(name);
      console.log(destination);
      console.log(time);
      console.log(frequency);

      // Replaces the content in the "recent-member" div with the new info
      $("#name-display").text(name);
      $("#destination-display").text(destination);
      $("#time-display").text(time);
      $("#frequency-display").text(frequency);

      var trains = JSON.parse(localStorage.getItem("trains"));

      if(trains == null){
        trains = [];
      }

      var newTrain = {
        name: name,
        destination: destinatinon,
        time: time,
        frequency: frequency,
      };

      trains.push(newTrain);

      // Store all content into localStorage
      localStorage.setItem("trains", JSON.stringify(trains));

      updatePage();
    });

    updatePage();

    function updatePage(){
      var trains = JSON.parse(localStorage.getItem("trains"));

      if(trains == null){
        trains = [];
      }

      $("#all-trains").empty();

      for (var i = 0; i < trains.length; i++) {
        var newTrain = $("<div>");
        newTrain.append("Name: " + trains[i].name);
        newTrain.append("Destination: " + trains[i].destination);
        newTrain.append("Time: " + trains[i].time);
        newTrain.append("Frequency: " + trains[i].frequency);

        $("#all-members").append(newTrain);
      }

      var lastObject = trains[trains.length - 1];

       // By default display the content from localStorage
      $("#name-display").text(lastObject.name);
      $("#destination-display").text(lastObject.destination);
      $("#time-display").text(lastObject.time);
      $("#frequency-display").text(lastObject.frequency);
    }