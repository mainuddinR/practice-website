let MessagingPin;
setInnerValue('Pin-Show','');
setInnerValue('Screen','');
document.getElementById('Generate-Pin').addEventListener('click',function(){
    MessagingPin=randomPinGenerate();
    document.getElementById('Pin-Show').value=MessagingPin;
    setInnerValue('Screen','');
    document.getElementById("TryCalculate").innerText=3; 
    document.getElementById('pinDoNotMatch').style.display='none';
    document.getElementById('pinMatchNotify').style.display="none";

});

function randomPinGenerate(){
    let temp=1000+Math.random()*1000;
    let pin=Math.round(temp);
    return pin;
}
function getPressValue(id) {
    let value;
    let StringValue = document.getElementById(id).innerText;
    value = parseInt(StringValue);
    return value
}
function showScreen(value) {
    let preValue = document.getElementById('Screen').value;
    document.getElementById('Screen').value = preValue + value;
}

function getInnerValue(id) {
    const Text = document.getElementById(id).value;
    return Text;
}
function setInnerValue(id, value) {
    document.getElementById(id).value = value;
}

document.getElementById('Eight').addEventListener('click', function () {
    let value = getPressValue('Eight');
    showScreen(value);
});
document.getElementById('Seven').addEventListener('click', function () {
    let value = getPressValue('Seven');
    showScreen(value);
});
document.getElementById('Nine').addEventListener('click', function () {
    let value = getPressValue('Nine');
    showScreen(value);
});
document.getElementById('Zero').addEventListener('click', function () {
    let value = getPressValue('Zero');
    showScreen(value);
});
document.getElementById('Six').addEventListener('click', function () {
    let value = getPressValue('Six');
    showScreen(value);
});
document.getElementById('Five').addEventListener('click', function () {
    let value = getPressValue('Five');
    showScreen(value);
});
document.getElementById('Four').addEventListener('click', function () {
    let value = getPressValue('Four');
    showScreen(value);
});
document.getElementById('Three').addEventListener('click', function () {
    let value = getPressValue('Three');
    showScreen(value);
});
document.getElementById('Two').addEventListener('click', function () {
    let value = getPressValue('Two');
    showScreen(value);
});
document.getElementById('One').addEventListener('click', function () {
    let value = getPressValue('One');
    showScreen(value);
});

document.getElementById('Delete').addEventListener('click', function () {
    let StringValue = getInnerValue('Screen');
    if (StringValue != "") {
        let newString = StringValue.slice(0, StringValue.length - 1);
        setInnerValue('Screen', newString);
    }
});

document.getElementById('AC').addEventListener('click', function () {
    document.getElementById('Screen').value = '';
});

document.getElementById('SubmitBtn').addEventListener("click",function(){
    let InputString=getInnerValue('Screen');
    let convertIntInputString=parseInt(InputString);
    let tryCount=parseInt(document.getElementById("TryCalculate").innerText);
    if(MessagingPin==convertIntInputString){
        document.getElementById('pinMatchNotify').style.display="block";
    }
    else if(tryCount==0){
        alert("resend pin");
        document.getElementById('pinMatchNotify').style.display="none";
    }
    else{
        tryCount--;
        document.getElementById('TryCalculate').innerText=tryCount;
        document.getElementById('pinMatchNotify').style.display="none";
        document.getElementById('pinDoNotMatch').style.display='block';
    }
});
