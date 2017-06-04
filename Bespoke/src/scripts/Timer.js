function timer()
{
    if (x >= 0)
        return x--;

    return "";
}

function timer2()
{
    var a = timer();

    if (a >= 0 || a == "")
        document.getElementById("timer").innerHTML = a;
    else
        clearInterval(intervalTimer);
}

function clearTimer()
{
    clearInterval(intervalTimer);
}

var x = 30;
var intervalTimer = setInterval(timer2, 1000);


