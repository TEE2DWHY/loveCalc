var randomNumber = Math.round(Math.random() * 100);

function loveDetector() {
    if (randomNumber < 50) {
        alert("The strength of your love  is " + randomNumber + "%. This is kinda low😑");
        window.location.reload()
    }
    else if (randomNumber > 50 && randomNumber < 70) {
        alert("The strength of your love  is " + randomNumber + "%. Fair🙂.");
        window.location.reload()
    }
    else if (randomNumber > 70) {
        alert("The strength of your love  is " + randomNumber + "%. OMOO!.E Choke🥰.");
        window.location.reload()
    }
}

