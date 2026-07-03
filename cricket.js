function bowl(){

    var ball = document.getElementById("ball");

    // Bowl to batsman
    ball.style.top = "320px";

    setTimeout(function(){

        // Ball hit to random place
        var x = Math.floor(Math.random()*380)+50;
        var y = Math.floor(Math.random()*380)+50;

        ball.style.left = x + "px";
        ball.style.top = y + "px";

    },1000);

    setTimeout(function(){

        // Reset ball
        ball.style.left = "245px";
        ball.style.top = "180px";

    },3000);

}