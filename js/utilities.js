function donation(id1, id2, id3, id4, id5){
 const mainAmountElement = document.getElementById(id1);
 const previousDonateElement = document.getElementById(id2);
 const donateValue = document.getElementById(id3); //  input value
 const donate = document.getElementById(id4); //  click button for donate
 const title = document.getElementById(id5)
 donate.addEventListener('click',function(){
    const mainAmount = parseFloat(mainAmountElement.innerText);
    const previousDonation = parseFloat(previousDonateElement.innerText);
    const donationvalue = Number(donateValue.value);
    if(mainAmount >= donationvalue && donationvalue > 0 && !isNaN(donationvalue)){
        const updatedAmount = mainAmount - donationvalue;
        mainAmountElement.innerText = parseFloat(updatedAmount).toFixed(2);
        const updateDonationAmount = previousDonation + donationvalue;
        previousDonateElement.innerText = parseFloat(updateDonationAmount).toFixed(2);
        const modal = document.getElementById('my_modal_1');
            if (modal) {
                modal.showModal();
            }

              history(donationvalue , title);
    }
    else{
        alert('Invalid Donation Amount');
         donateValue.value = '';
         

    }
 })
}


// ====================history part ===================================
function history(amount , title){
    const history = document.getElementById('history');
    const div = document.createElement('div');
    div.innerHTML = ` <div class="border-[1px] border-charcoal border-opacity-[0.1] rounded-2xl p-8 mb-5">
           <h4 class="text-charcoal text-xl font-bold mb-3">${amount} Taka is ${title.innerText}</h4>
           <p class="text-base text-charcoal text-opacity-[0.7] font-light">${new Date()}</p>
        </div>`;

    history.appendChild(div);


}

// =========================hidden element==================
function hiddenElement(element){
    document.getElementById('donationPart').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');
    document.getElementById(element).classList.remove('hidden');
}



