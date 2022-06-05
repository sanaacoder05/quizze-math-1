document.body.style.backgroundImage = "url('bas.jpg')";
var player_1 = localStorage.getItem("player_1");
var player_2 = localStorage.getItem("player_2");

var score_1 = 0;
var score_2 = 0;

document.getElementById("player1_name").innerHTML=player_1 + ": " ;
document.getElementById("player2_name").innerHTML=player_2 + ": " ;

document.getElementById("player_score1").innerHTML=score_1  ;
document.getElementById("player_score2").innerHTML=score_2  ;

document.getElementById("question").innerHTML="Question Turn : " + player_1 ;
document.getElementById("answer").innerHTML="Answer Turn : " + player_2 ;

function Send(){ 
var get_value = document.getElementById("ans").value;
var get_value1 = document.getElementById("ans1").value;
var value = Math((get_value)*(get_value1));
var title = "<h2 id ='prossing'> Q."+get_value+"X"+get_value1+"</h2><br><br>";
var input = "Answer <input type = 'text' id = 'input'>";
var button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>"
var Output = title+input+button;
document.getElementById("output").innerHTML=Output;
document.getElementById("ans").value="";
}

