function getQuotesJson(){
  $.ajax({
    method:'GET',
    url:"https://protected-plains-05402.herokuapp.com/get",
    dataType:'json',
    success: onSuccess,
    error: onError
  })

  }


function onSuccess(jsonReturn){
  console.log("success")
  quoteData=jsonReturn

// {"quote":"Cold was the steel of my axe to grind for the boys who broke my heart /
//  Now I send their babies presents",
//  "song":"Invisible String",
//  "album":"folklore"}


  var newquote=quoteData.quote;
  var song=quoteData.song;
  var album=quoteData.album;
  $("#lyrics").html(newquote);
  $("#song").html("- "+song+", "); 
  $("#album").html(album)
  
  
  $("#tweet-quote").attr("href", "http://www.twitter.com/intent/tweet?text="+newquote+" -"+song+", "+album);


}
function onError(jsonReturn){
  console.log("error")
}
$('#new-quote').on('click',function(){
  getQuotesJson();
});

  
$('document').ready(function(){

    getQuotesJson()
    
})