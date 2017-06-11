function Timer()
{
    if (countDown > 5)
        document.getElementById("timer").style.color = "black";
    else
        document.getElementById("timer").style.color = "red";

    if (countDown >= 0)
        document.getElementById("timer").innerHTML = countDown--;
    else
    {
        clearInterval(timer);
        TampilHasilJawaban("");
    }
}

function SetTimer()
{
    document.getElementById("box2").innerHTML = "<p id = 'timer'></p>";
}

function ClearTimer()
{
    clearInterval(timer);
}

var countDown;

