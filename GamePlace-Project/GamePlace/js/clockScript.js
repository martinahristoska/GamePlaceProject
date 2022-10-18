$(document).ready(function() {

var _H, _M, _S;
var res = "";
var finalAns = "";
var correctAns = "";
var ques = 1;
var score = 0;

function clock(){

  res = "";
  finalAns = "";
  correctAns = "";

    var d, h, m, s;
    d = new Date;

    var rH, rM, rS;
    rH = randomNum(1, 12);
    rM = randomNum(1, 60);
    rS = randomNum(1, 60);

    h = 30 * (rH);
    m = 6 * rM;
    s = 6 * rS;

    setAttr('h-hand', h);
    setAttr('m-hand', m);
    setAttr('s-hand', s);
    setAttr('s-tail', s+180);

    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();

    _H = parseInt(rH, 10);
    _M = parseInt(rM, 10);
    _S = parseInt(rS, 10);

};

function setAttr(id,val){
    var v = 'rotate(' + val + ', 70, 70)';
    document.getElementById(id).setAttribute('transform', v);
};

function setText(id,val){
    if(val < 10){
        val = '0' + val;
    }
    document.getElementById(id).innerHTML = val;
};



function createRadio2(h, m, s){
    var temp = [correctAns = displayChoice(h, m, s), displayChoice(randomNum(1, 12), randomNum(1, 60), randomNum(1, 60)),
                displayChoice(randomNum(1, 12), randomNum(1, 60), randomNum(1, 60)), displayChoice(randomNum(1, 12), randomNum(1, 60), randomNum(1, 60))]

    res = shuffle(temp);
    for(var i=0; i<res.length; i++){
      $("#button" + (i+1).toString()).text(res[i]);
    }


}

function shuffle(ans){
  var j, x, i;
    for (i = ans.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = ans[i];
        ans[i] = ans[j];
        ans[j] = x;
    }
    return ans;
}

function display(h, m, s){
  return h + ":" + m + ":" + s;
}

function displayChoice(h, m, s){
  return parseInt(h, 10) + ":" + parseInt(m, 10) + ":" + parseInt(s, 10);
}


checkAnswer();

function checkAnswer(){
  clock();
  createRadio2(_H, _M, _S);
}


  $('#button1').click(function(){
		finalAns = res[0];
		$('.button').css('background-color','#3cadd4')
		$(this).css('background-color','#1a20ba')
		$('#submit').css('background-color','green')
		})

	$('#button2').click(function(){
    finalAns = res[1];
		$('.button').css('background-color','#3cadd4')
		$(this).css('background-color','#1a20ba')
		$('#submit').css('background-color','green')
		})

	$('#button3').click(function(){
    finalAns = res[2];
		$('.button').css('background-color','#3cadd4')
		$(this).css('background-color','#1a20ba')
		$('#submit').css('background-color','green')
		})


	$('#button4').click(function(){
    finalAns = res[3];
		$('.button').css('background-color','#3cadd4')
		$(this).css('background-color','#1a20ba')
		$('#submit').css('background-color','green')
		})

    $('#submit').click(function(){
      if(finalAns === correctAns){
        alert("Точен одговор, Честитки!");
        checkAnswer();
        ques++;
        document.getElementById("test2").innerHTML=ques;
        document.getElementById("ans").innerHTML=	score += 100;
      }else if(finalAns === ""){
  			alert("Одберете го одговорот");
  		}
      else{
				alert("Грешка, точниот одговор е " + correctAns + ". Продолжи понатаму!");
        checkAnswer();
      }
    })

function randomNum(min, max){
  return Math.random() * (max-min) + min;
}

})