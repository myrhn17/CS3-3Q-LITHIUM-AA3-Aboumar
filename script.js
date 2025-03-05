function showMessage() {
    let message = prompt("Input your message to be verified: ");

    if (!message){
        document.getElementById("result").innerText = "No message entered.";
        return;
    }

    let FR = "FR" || "fr";
    let AI = "AI";
    let Ai = "Ai" || "ai";
    let resultText = "";

   if (message.indexOf("FR")!==-1){
        resultText = 'The message ' + message + " " + 'is legitimate! ';
    } else if (message.indexOf("AI")!==-1) {
        resultText  = 'The message' + message + " " + 'is legitimate! ';
    } else if (message.indexOf("aI")!==-1 || message.indexOf("Ai")!==-1) {
        resultText = 'The message ' + message + " " + 'is tampered with! ';
    } else {
        resultText = 'The message ' + message + " " + 'is yet to be encoded!';
    }
    document.getElementById("result").innerText = resultText;
    
}   