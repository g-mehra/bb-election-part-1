$(document).ready(function() {


  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'json'

  }).done(function(responseData){

    responseData.candidates.forEach(function(candidate){
           var name = candidate.name;
           var votes = candidate.votes;
           
           var liTag = $('<li> Canadidate Name: <br>' + name
                       + "  <br><br> Vote Count: <br> "
                       + votes + '<br> </li> <br> <br>')

           $('#can-data').append(liTag);
          console.log(candidate.name)
          console.log(candidate.votes)
    });



// Jquery way to do above code
//       $.each(responseData.candidates, function(i, candidate) {
//       var name = candidate.name;
//       var votes = candidate.votes;
//       var liTag = $('<li>' + name + "" + votes)
//       $('#can-data').append(liTag);
// debugger
//       console.log(responseData.name);
//       console.log(responseData.votes);

    // });

  });

});
