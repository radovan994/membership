var dest1 = {
    "name" : "beograd",
    "price" : 1500,
    "type" : "ordinary"  
  };

  var dest2 = {
    "name" : "vienna",
    "price" : 2500,
    "type" : "ordinary"  
  };

  var dest3 = {
    "name" : "budapest",
    "price" : 1800,
    "type" : "ordinary"  
  };

  var dest4 = {
    "name" : "london",
    "price" : 3500,
    "type" : "silver"  
  };

  var dest5 = {
    "name" : "madrid",
    "price" : 1500,
    "type" : "silver"  
  };

  var dest6 = {
    "name" : "moscow",
    "price" : 3500,
    "type" : "gold"  
  };

  var dest7 = {
    "name" : "rome",
    "price" : 3900,
    "type" : "gold"  
  };

  var dest8 = {
    "name" : "Tokyo",
    "price" : 4500,
    "type" : "platinum"  
  };

  var dest9 = {
    "name" : "new york",
    "price" : 4800,
    "type" : "platinum"  
  };

  var destinations = [];
  destinations.push(dest1);
  destinations.push(dest2);
  destinations.push(dest3);
  destinations.push(dest4);
  destinations.push(dest5);
  destinations.push(dest6);
  destinations.push(dest7);
  destinations.push(dest8);
  destinations.push(dest9);

window.onload = function(){
    var search = window.location.search;
    var items = search.substring(1).split("&");
    var recnik = {
    }
    for(var i = 0; i < items.length; i++){
        var values = items[i].split("=");
        recnik[values[0]] = values[1];
    }
    document.getElementById("welcome_user").textContent = "Hello " + recnik.ime + " " + recnik.prezime;

    if(recnik.status){
        if(recnik.klasa == "1"){
            document.getElementById("premium_member").textContent = "You are our premium member with silver membership.";
            for(var i = 0; i <destinations.length; i++){
                if(destinations[i].type == "ordinary" || destinations[i].type == "silver"){
                    sel1.options[sel1.options.length] = new Option(destinations[i].name, "Value");
                }
            }
        }
        if(recnik.klasa == "2"){
            document.getElementById("premium_member").textContent = "You are our premium member with gold membership.";
            for(var i = 0; i <destinations.length; i++){
                if(destinations[i].type == "ordinary" || destinations[i].type == "silver" || destinations[i].type == "gold"){
                    sel1.options[sel1.options.length] = new Option(destinations[i].name, "Value");
                }
            }
        }
        if(recnik.klasa == "3"){
            document.getElementById("premium_member").textContent = "You are our premium member with platinum membership.";
            for(var i = 0; i <destinations.length; i++){
                if(destinations[i].type == "ordinary" || destinations[i].type == "silver" || destinations[i].type == "gold" || destinations[i].type == "platinum"){
                    sel1.options[sel1.options.length] = new Option(destinations[i].name, "Value");
                }
            }
        }
    }else{
        for(var i = 0; i <destinations.length; i++){
            if(destinations[i].type == "ordinary"){
                sel1.options[sel1.options.length] = new Option(destinations[i].name, "Value");
            }
        }
    }
}
calculate = function(){
  var e = document.getElementById("sel1");
  var strUser = e.options[e.selectedIndex].text;
  for(var i = 0; i < destinations.length; i++){
    if(destinations[i].name == strUser){
      var price = destinations[i].price;
    }
  }
  document.getElementById("paragraph").textContent = "Price of your trip is: " + price;
}






