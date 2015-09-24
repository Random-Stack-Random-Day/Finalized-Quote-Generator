$(document).ready(function() {
  /*-----Random Quote Generators---*/
  function randomQ() {
      /*Establish Random Quotes*/
      var mehQuotes3 = ["You wanna do somethin' sometime, big boi?!", "Well, I didn't say that exactly but it sounds just about as confusing as what I did say.", "A lot of people hate that which they don't understand. A lot of people don't understand that which they fear. A lot of people hate me.", "I'm probably a big deal, somewhere. I thought it was here, but it could have been somewhere else."]
      var Quotation = new Array()
        /* Alternate Array*/
      Quotation[0] = "I guess I can help. Let me just stop doing everything productive real quick.";
      Quotation[1] = "You see that fish over there? Yea, I'ma go kill it.";
      Quotation[2] = "I bought a new sword. Where? I dunno, some generic store. Let's say Amazon.";
      Quotation[3] = "This one time, at warrior camp...";
      Quotation[4] = "I'm hungry.";
      Quotation[5] = "Don't charge me, bro";
      Quotation[6] = "Yea, well I did that like at least a day before you. Or after you. Whichever is more impressive.";
      Quotation[7] = "Why can't we be friends? loljk I don't like you.";
      Quotation[8] = "Right, you do \"good\" DPS.";
      Quotation[9] = "Remember when warriors were good? No? Well, then...";
    var mehQuotes = mehQuotes3.concat(Quotation);
      randomQuote = mehQuotes[Math.floor(Math.random() * mehQuotes.length)];
      $('.quote').text(randomQuote);
    }
    /*Handles button function*/
  $(".jsButton").on("click", function() {
    randomQ();
  }); /*Closed randomQ*/

  // This is an alternate method to the one above
  // The code is very similar, but seems much easier
  // to read - There is little different in performance
  // 
  
  function moveTweetToPrev() {
    var thisTweet = $('#currentQuoteContainer').html();
    $("#prevQuoteContainer").prepend(thisTweet);
    $('#currentQuoteContainer').html('');  // Clear current contents
}
  
  /*Quote API Forismatic*/
  $('#quote').click(function() {
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      jsonp: "jsonp",
      dataType: "jsonp",
      data: {
        method: "getQuote",
        lang: "en",
        format: "jsonp"
      },
      success: function(response) {  
    // This makes both my Quote, and the Tweet Button.
    
    var tweetURL = "https://twitter.com/intent/tweet?text=" + encodeURI(response.quoteText);
        var link = '<div class="textQuote">' + response.quoteText +'<a href="' + tweetURL + '" target="_blank"><br><button class="tweetMe"><i class="fa fa-twitter"></i>"Tweet Me!"</button></a></div><br/>';
        
        moveTweetToPrev();        $('#currentQuoteContainer').html(link);        // End Quote/Tweet Button
      }
    });
  });

  /*Close Forismatic Quote Finder*/
  /* Tweet Filter */
  tweet = quote;
  if (tweet.length > 140) {
    tweet = quote.substr(0, 136) + "...";
  }
  
});
