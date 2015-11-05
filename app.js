/* your code should go in this file */

/* 
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    word_en : "Apple",  // word in english
 *    word_de : "Apfel"   // word in german
 *  }
 */ 
/*
              <!-- This is just an example, you should load this dynamically -->
              <li id="1" class="current">
                <h3>Love</h3>
                <h3 class="solution">Liebe</h3>
              </li> 
              <li id="2">
                <h3>Apple</h3>
                <h3 class="solution">Apfel</h3>   
              </li>   
*/

/* feedback
          <!-- the area where the user give feedback about the word -->
          */
         var feedback = ' <div class="options"> ' +
           ' <p> ' +
            '  Did you remember the word? ' +
           ' </p> ' +
           ' <p> ' +         
             ' <button class="btn opt-incorrect">No</button> ' +
            '  <button class="btn opt-correct">Yes</button> ' +
            ' </p>  ' +
         ' </div>';
          
/* final
        <!-- the area that should be visible after the practice -->
      */  var final = '<div class="final"> ' +
          '<h3> You remembered <span id="tot-good">XXX</span> of <span id="tot">YYY</span></h3>' +
        '</div>';
        

var tmpl = ' <li id="ID">' +
           '  <h3>WORD</h3>' +
           '  <h3 class="solution">SOLUTION</h3>'+
           ' </li> ';

$(document).ready(function(){
    
    //populate array of cards
    for( var i=0; i < data.length; i++){
        $(".cards").append( tmpl.replace("ID",i).replace("WORD",data[i].word_en).replace("SOLUTION",data[i].word_de) );
    
    }
    
    //begin game
    $("#0").addClass("current");
    var cardnumber = 0;
    var correct = 0;
    $(".jumbotron").append(feedback);
    $(".options").hide();
    

    $(".jumbotron").click( function () {
           
        $(".options").show();
            
         $(".opt-incorrect").click( function () {
               cardnumber++;
             //proceed to next card
             $(".current").removeClass("current");
             $("#"+cardnumber).addClass("current");
             $(".options").hide();
             console.log(cardnumber);
             //game is over
            if(cardnumber > data.length) {
        
                    //display won info
            $(".jumbotron").append(final);
        
            }
         });
         
         $(".opt-correct").click( function () {
            cardnumber++;
            correct++;
             console.log(cardnumber);
             //proceed to next card
             $(".current").removeClass("current");
             $("#"+cardnumber).addClass("current");
             $(".options").hide();
             
             //game is over
        if(cardnumber > data.length) {
        
        //display won info
        $(".jumbotron").append(final.replace("XXX",correct).replace("YYY",cardnumber));
        
    }
         });
                            
            
        });
    
    
    
    
    
});







