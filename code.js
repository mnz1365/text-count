var words = 0;
var characters = 0;
var wordCount = 0;
var word = 0;
var countSpace = 0;

document.addEventListener('keypress', function(event) {
    
     
    if(event.target.localName == "textarea"){
        

        var data = document.getElementById("mytextarea").value;
        characters = data.length+1;
      
        
        characters = characters - countSpace;
        data = data.split(" ");
      
        
        
        wordCount = 0;
        for (i = 0; i <data.length; i++){
            console.log(data[i])
            if (data[i] != "" && data[i] != " ") {
                wordCount = wordCount + 1;
            }
        }
        
        // words = data.length;
       
    }
    document.getElementById("p1").innerHTML = `there is ${wordCount} words and ${characters} characters`;
})

document.addEventListener('keydown', function(event) {
  
    if(event.target.localName == "textarea" && event.key == "Backspace") {
        characters = 0;
        var data = document.getElementById("mytextarea").value;
        characters = data.length+1;
      
        
        characters = characters;
        data = data.split(" ");
      
        
        
        wordCount = 0;
        for (i = 0; i <data.length; i++){
            console.log(data[i])
            if (data[i] != "" && data[i] != " ") {
                wordCount = wordCount + 1;
            }
        }
        
        document.getElementById("p1").innerHTML = `there is ${wordCount} words and ${characters} characters`;
    }
})