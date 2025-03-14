function selectAnswer(persona) {
    const results = {
        "glam": {
            name: "The Glam Diva 💎",
            img: "images/glam-diva.png",
            desc: "Bold, elegant, and always making a statement! You turn heads everywhere you go."
        },
        "sporty": {
            name: "The Sporty Trendsetter 🏃‍♀️",
            img: "images/sporty.png",
            desc: "Casual, comfortable, and stylish—athleisure is your best friend."
        },
        "edgy": {
            name: "The Edgy Icon 🖤",
            img: "images/edgy.png",
            desc: "Alternative, unique, and effortlessly cool. You redefine fashion on your own terms."
        }
    };

    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("persona").innerText = results[persona].name;
    document.getElementById("persona-img").src = results[persona].img;
    document.getElementById("persona-desc").innerText = results[persona].desc;
}

function restartQuiz() {
    document.getElementById("quiz").style.display = "block";
    document.getElementById("result").style.display = "none";
}
