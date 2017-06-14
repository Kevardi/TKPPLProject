var soalAktif = [], arrSoal = [];
var no, score1 = 0, score2 = 0, player = 1, playerSementara, bantuan1, bantuan2, timer;

function GameStart()
{
    IsiKeaktifan();
    SetSoalJawaban();
    TampilGame();
}

function TampilGame()
{
    PilihSoal();
    TampilScore();
    HilangBantuan();
    HilangTextP1();
    HilangTextP2();
    HilangResult();
    HilangTimer();
    HilangBack();
    HilangDivKotakJawab();
    HilangWarnaP1();
    HilangWarnaP2();
    document.getElementById("result").innerHTML = "";
}

function GamePlay(x)
{
    no = x;
    soalAktif[no] = 0;
    bantuan1 = false;
    bantuan2 = false;

    TampilSoal();
    TampilKotakJawaban();
    PlayerSementara();

    if (player === 1)
    {
        TampilTextP1();
    }
    else
        TampilTextP2();

    TampilBantuan();
    TampilResult();
    TampilTimer();
    OnPlaying();
    countDown = 30;
    SetTimer();
    timer = setInterval(Timer, 1000);
}

function LemparSoal()
{
    UbahPlayer();

    if (player === 1)
    {
        HilangTextP2();
        TampilTextP1();
    }
    else
    {
        HilangTextP1();
        TampilTextP2();
    }

    HilangBantuan();
    countDown = 30;
    SetTimer();
    OnPlaying();
    timer = setInterval(Timer, 1000);
}

function IsiKeaktifan()
{
    for (var i = 0; i < 10; i++)
        soalAktif.push(1);
}

function SetSoalJawaban()
{
    arrSoal = AcakSoalJawaban();
}

function PilihSoal()
{
    var text = "<table class='tableSoal' id = 'tableSoal'>";

    for (var i = 1; i <= 10; i++)
    {
        if (i === 1 || i === 5 || i === 9)
            text += "</tr> <tr>";

        if (i === 9 || i === 10)
            text += "<td id = 'soal" + (i - 1) + "' colspan = '2'";
        else
            text += "<td id = 'soal" + (i - 1) + "'";

        if (soalAktif[i - 1] === 1)
            text += " class = 'soalAktif' onclick='GamePlay("+(i-1)+")'";

        text += ">Soal " + i + "</td > ";
    }

    text += "</table>";

    document.getElementById("soal").innerHTML = text;
}

function TampilKotakJawaban()
{
    var text = "<table class = 'jawaban'> <tr>";

    for (var i = 0; i < kumpulanSoalJawaban[arrSoal[no]][1].length; i++)
        text += "<td class = 'huruf" + i + "'></td>";

    text += "</tr></table>";

    document.getElementById("box").innerHTML = text;

    TampilDivKotakJawab();
}

function TampilSoal()
{
    document.getElementById("soal").innerHTML = "<h3>Soal " + (no + 1) + "</h3>" +
                                                "<p id = 'tampilSoal'></p>";
    document.getElementById("tampilSoal").innerHTML = kumpulanSoalJawaban[arrSoal[no]][0];
}

function TampilJawaban()
{
    var text = "<table class = 'jawaban'> <tr>";

    for (var i = 0; i < kumpulanSoalJawaban[arrSoal[no]][1].length; i++)
        text += "<td class = 'huruf" + i + "'>" + kumpulanSoalJawaban[arrSoal[no]][1][i]+"</td>";

    text += "</tr></table>";

    if (player === 1)
        HilangTextP1();
    else
        HilangTextP2();

    document.getElementById("box").innerHTML = text;
}

function CekJawaban(jawaban)
{
    if (kumpulanSoalJawaban[arrSoal[no]][1] === jawaban)
        return true;

    return false;
}

function Jawab(e, jawaban)
{
    if (e.keyCode === 13)
        TampilHasilJawaban(jawaban);
}

function TampilHasilJawaban(jawaban)
{
    if (CekJawaban(jawaban)) {
        ClearTimer();
        document.getElementById("result").innerHTML = "<img src='./images/correctLogo.png'>";

        HilangTimer();

        if (player === 1)
            HilangTextP1();
        else
            HilangTextP2();

        HilangBantuan();
        TambahScore();
        TampilScore();
        TampilJawaban();
        TampilBack();

        if (player === playerSementara)
            UbahPlayer();
    }
    else
    {
        ClearTimer();
        document.getElementById("result").innerHTML = "<img src='./images/wrongLogo.png'>";
        if (player === playerSementara)
            LemparSoal();
        else
        {
            TampilJawaban();
            TampilBack();
        }
    }
}

function ScoreTanpaBantuan()
{
    return 2 * 100;
}

function ScoreBantuan1()
{
    return 1.5 * 100;
}

function ScoreBantuan2()
{
    return 1 * 100;
}

function TambahScore()
{
    if (player === 1)
    {
        if (bantuan2)
            score1 += ScoreBantuan2();
        else if (bantuan1)
            score1 += ScoreBantuan1();
        else
            score1 += ScoreTanpaBantuan();
    }
    else
    {
        if (bantuan2)
            score2 += ScoreBantuan2();
        else if (bantuan1)
            score2 += ScoreBantuan1();
        else
            score2 += ScoreTanpaBantuan();
    }
}

function UbahPlayer()
{
    if (player === 1)
        player = 2;
    else
        player = 1;
}

function PlayerSementara()
{
    playerSementara = player;
}

function TampilTextP1()
{
    document.getElementById("input1").style.visibility = "visible";
}

function HilangTextP1()
{
    document.getElementById("input1").value = "";
    document.getElementById("input1").style.visibility = "hidden";
}

function TampilTextP2()
{
    document.getElementById("input2").style.visibility = "visible";
}

function HilangTextP2()
{
    document.getElementById("input2").value = "";
    document.getElementById("input2").style.visibility = "hidden";
}

function TampilBantuan()
{
    document.getElementById("help").style.visibility = "visible";
}

function HilangBantuan()
{
    document.getElementById("help").style.visibility = "hidden";
}

function TampilTimer()
{
    document.getElementById("box2").style.visibility = "visible";
}

function HilangTimer()
{
    document.getElementById("box2").style.visibility = "hidden";
}

function TampilResult()
{
    document.getElementById("result").style.visibility = "visible";
}

function HilangResult()
{
    document.getElementById("result").style.visibility = "hidden";
}

function HilangTimer() {
    document.getElementById("box2").style.visibility = "hidden";
}

function TampilBack()
{
    document.getElementById("back").style.visibility = "visible";
}

function HilangBack()
{
    document.getElementById("back").style.visibility = "hidden";
}

function TampilDivKotakJawab()
{
    document.getElementById("box").style.visibility = "visible";
}

function HilangDivKotakJawab()
{
    document.getElementById("box").style.visibility = "hidden";
}

function HilangWarnaP1()
{
    document.getElementById("figureP1").style.backgroundColor = "transparent";
}

function HilangWarnaP2()
{
    document.getElementById("figureP2").style.backgroundColor = "transparent";
}

function OnPlaying()
{
    if (player === 1)
    {
        document.getElementById("figureP1").style.backgroundColor = "lightblue";
        HilangWarnaP2();
    }
    else
    {
        document.getElementById("figureP2").style.backgroundColor = "lightblue";
        HilangWarnaP1();
    }
}

function Bantuan1Huruf()
{
    var y = Math.floor(Math.random() * (kumpulanSoalJawaban[arrSoal[no]][1].length - 1));

    var text = "<table class = 'jawaban'> <tr>";

    for (var i = 0; i < kumpulanSoalJawaban[arrSoal[no]][1].length; i++) {
        if (i === y)
            text += "<td class = 'huruf" + i + "'>" + kumpulanSoalJawaban[arrSoal[no]][1][i] + "</td>";
        else
          text += "<td class = 'huruf" + i + "'>" + "</td>";
    }

    text += "</tr></table>";
    document.getElementById("box").innerHTML = text;

    HilangBantuan();
    bantuan1 = true;
}

function Bantuan2Huruf()
{
    var y = Math.floor(Math.random() * (kumpulanSoalJawaban[arrSoal[no]][1].length - 1));
    var x = Math.floor(Math.random() * (kumpulanSoalJawaban[arrSoal[no]][1].length - 1));

    while (x === y)
        x = Math.floor(Math.random() * (kumpulanSoalJawaban[arrSoal[no]][1].length - 1));
    

    var text = "<table class = 'jawaban'> <tr>";

    for (var i = 0; i < kumpulanSoalJawaban[arrSoal[no]][1].length; i++)
    {
        if (i === x || i === y)
            text += "<td class = 'huruf" + i + "'>" + kumpulanSoalJawaban[arrSoal[no]][1][i] + "</td>";
        else
          text += "<td class = 'huruf" + i + "'>" + "</td>";
    }

    text += "</tr></table>";
    document.getElementById("box").innerHTML = text;

    HilangBantuan();
    bantuan2 = true;
}

function TampilScore()
{
    document.getElementById("score1").innerHTML = score1;
    document.getElementById("finalscore1").innerHTML = score1;
    document.getElementById("score2").innerHTML = score2;
    document.getElementById("finalscore2").innerHTML = score2;
    Winner();
}

function Winner()
{
    var text;
    if (score1 > score2)
        text = "Player1";
    else if (score2 > score1)
        text = "Player2";
    else
        text = "Player1 & Player2"

    document.getElementById("winner").innerHTML = "<p>" + text + " </p > ";
}
