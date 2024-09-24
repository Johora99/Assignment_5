const stickyElement = document.getElementById('stickyElement');
const stickyHeader = document.getElementById('stickyHeader');
const donationBtn = document.getElementById('donationBtn');
const historyBtn = document.getElementById('historyBtn');
const donationPart = document.getElementById('donationPart');

// ===================sticky part start=====================
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
        stickyElement.classList.add('backdrop-blur-2xl', 'backdrop-brightness-90');
        stickyHeader.classList.add('bg-opacity-[0.7]');
    } else {
        stickyElement.classList.remove('backdrop-blur-2xl', 'backdrop-brightness-90');
        stickyHeader.classList.remove('bg-opacity-[0.7]');
    }
});
// ======================sticky part end===================

// ==================card-1================================
const mainAmount = document.getElementById('mainAmount');


const noakhaliFloodDonation = document.getElementById('noakhaliFloodDonation');
const noakhaliDonateAmount = document.getElementById('noakhaliDonateAmount');
const noakhaliDonate = document.getElementById('noakhaliDonate');
donation('mainAmount', 'noakhaliFloodDonation', 'noakhaliDonateAmount', 'noakhaliDonate', 'title-1');

// ========================card-2=========================

const feniFloodDonation = document.getElementById('feniFloodDonation');
const feniDonateAmount = document.getElementById('feniDonateAmount');
const feniDonate = document.getElementById('feniDonate');
donation('mainAmount', 'feniFloodDonation', 'feniDonateAmount', 'feniDonate', 'title-2')

// ==================card-3=============================
const quotaDonation = document.getElementById('quotaDonation');
const quotaDonateAmount = document.getElementById('quotaDonateAmount');
const quotaDonate = document.getElementById('quotaDonate');
donation('mainAmount', 'quotaDonation', 'quotaDonateAmount', 'quotaDonate', 'title-3');





// ==============page change================================

const blogBtn = document.getElementById('blogBtn');
blogBtn.addEventListener('click',function(){
    window.location.href = 'https://johora99.github.io/Assignment_5/';
})


  
// ========================== toggle start =======================
donationBtn.addEventListener('click',function(){
    hiddenElement('donationPart');
     donationBtn.classList.add('bg-lime','font-semibold');
    donationBtn.classList.remove('text-opacity-[0.7]','font-medium','border-[1px]','border-charcoal','border-opacity-[0.3]');
   historyBtn.classList.remove('bg-lime','font-semibold');
    historyBtn.classList.add('text-opacity-[0.7]','font-medium','border-[1px]','border-charcoal','border-opacity-[0.3]');
  
})
historyBtn.addEventListener('click',function(){
    hiddenElement('history');
    historyBtn.classList.add('bg-lime','font-semibold');
    historyBtn.classList.remove('text-opacity-[0.7]','font-medium','border-[1px]','border-charcoal','border-opacity-[0.3]');
     donationBtn.classList.remove('bg-lime','font-semibold');
    donationBtn.classList.add('text-opacity-[0.7]','font-medium','border-[1px]','border-charcoal','border-opacity-[0.3]')
   
   
})


// ================toggle end=============================

