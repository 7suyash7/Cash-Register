const billAmount = document.querySelector("#bill-amount");
const cashgiven = document.querySelector("#cash-given");
const cashGivenDiv = document.querySelector(".cash-given-div");
const changeReturnDiv = document.querySelector(".return-change")
const outputTable = document.querySelector(".output-table")
const nextbtn = document.querySelector(".btn-next");
const checkbtn = document.querySelector(".btn-check");
const errorMessage = document.querySelector(".error-message");
const noofNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000,500,100,20,10,5,1];

// nextbtn.addEventListener("click")
nextbtn.addEventListener("click", nextbtnHandler);
function nextbtnHandler(){
    hideMessage();
    if(Number(billAmount.value)>0){
        nextbtn.style.display="none";
        cashGivenDiv.style.display="block";

    }else{
        showErrorMessage("Enter Valid Bill Amount");
    }    
}

checkbtn.addEventListener("click", () => validateBillandCashAmnt());

function validateBillandCashAmnt(){
    hideMessage();
    clearNotes()
    if(Number(billAmount.value>0) && Number(cashgiven.value)>0){

        if(Number(cashgiven.value)>Number(billAmount.value)){
            const amountToReturn = cashgiven.value - billAmount.value;
            calculateChange(amountToReturn);
        }else if(billAmount.value===cashgiven.value){
            showErrorMessage("No Amount to be returned");
        }
        else{
            showErrorMessage("Cash is less than bill, please enter right amount")
        }
    }else{
        showErrorMessage("Enter valid bill amount and Cash Given to Continue");
    }
}

function calculateChange(amountToReturn){
    changeReturnDiv.style.display="block";
    for(let i = 0;i<availableNotes.length;i++){
        const numofNotes = Math.trunc(amountToReturn / availableNotes[i]);
        amountToReturn = amountToReturn % availableNotes[i];
        if(numofNotes>=1){
            noofNotes[i].innerText = numofNotes;
        }
    }

}

function hideMessage(){
    errorMessage.style.display="none";
}
function showErrorMessage(tempMsg){
    errorMessage.style.display="block";
    errorMessage.innerText = tempMsg;
    changeReturnDiv.style.display="none";
}

function clearNotes(){
    for(let nnotes of noofNotes){
        nnotes.innerText = "";
    }
}
