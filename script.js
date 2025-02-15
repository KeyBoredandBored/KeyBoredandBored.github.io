function sayYes() {
    document.body.innerHTML = "<h1>YAYY! 💖 😊</h1>";
}

function askAgain() {
    document.querySelector(".buttons").classList.add("hidden");
    document.getElementById("noResponse").classList.remove("hidden");
}

function submitReason() {
    let reason = document.getElementById("reason").value;
    if (reason.trim() === "") {
        alert("Please give a reason! 😢");
        return;
    }
    document.getElementById("sadGif").src = "https://media.giphy.com/media/3ohjUMLXhMgnEf1bS4/giphy.gif"; // Changes to another GIF
    setTimeout(() => {
        alert("Hmm... try again! 😏");
        location.reload();
    }, 3000);
}
