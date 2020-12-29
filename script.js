$(document).ready(function () 
{ 
      
  var settings = {
    "url": "https://api.spoonacular.com/recipes/complexSearch?apiKey=478fd21148ea49e49a273fb374b1c006&number=30&cuisine=italian,chinese,Mediterranean",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Cookie": "__cfduid=d6f1e3bd71d474a0c9ae554bff2c77dd81608364423"
    },
  };
  
  $.ajax(settings).done(function (response) {
   // console.log(response);
        let results = response.results;

        //$('h1 span').html(`${results}`);

        let display = "";
        for(var i=0;i< results.length;i++){
          console.log(results[i].id);//get ID
          console.log(results[i].title);//get title
          console.log(results[i].image.src);
          display = `${display} ${results[i].image}`;
          
}         
          //$('h1 span').html(`${results}`);

        

        //decide where to display
        $('h1 span').html(`${display}`);
      });
    });
  



    

 
        

    







    