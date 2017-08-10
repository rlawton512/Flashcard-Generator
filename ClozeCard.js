//create ClozeCard constructor to be exported 
var ClozeCard = function(text, cloze){
    this.text = text;
    this.cloze = cloze;
    this.fullSet = function(){
        var fullText = this.text
        //removes cloze text from full text 
        var partial = fullText.replace(this.cloze, "...")
        //sets variable to confirm if cloze text is included in full text 
        var correctCloze = fullText.includes(this.cloze)
        //if true display data 
        if(correctCloze){
        console.log("\nCloze flashcard has been created!\n")
        //cloze text test
        // console.log(`Cloze text: ${cloze}`);
        console.log(`Partial text: ${partial}`);
        console.log(`Full text:  ${fullText}\n`);
        }
    } 
    
    {   //if not true display log error 
        console.log("\nThere is an error!  Your 'cloze text' is not included in the statement!\n")
    }
    
}

module.exports = ClozeCard;