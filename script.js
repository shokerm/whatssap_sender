function sendWhatsapp(number,message) {
    var numberToSend = '';
    numberToSend =  number.replace(/[^\w ]/g, '');
    (numberToSend[0] === '0')? numberToSend = '972' +numberToSend.slice(1): numberToSend = numberToSend;

    if(number){
        var url = `https://api.whatsapp.com/send?phone=${numberToSend}&text=${message}`;
        window.open(url, '_blank');
    

    }
    clearInputs()
};


function getInputValue() {  
    let numberValue = document.getElementById("inputId").value;
    let msgValue =document.getElementById("msgId").value;
    sendWhatsapp(numberValue,msgValue);
  };

function clearInputs(){
    document.getElementById("inputId").value = '';
    document.getElementById("msgId").value ='';
};

