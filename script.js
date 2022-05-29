// Javascript som får vores søgebar til at komme frem når man klikker på søgeikonet. 
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

// Javascript til vores FAQ sektion, som får vores svar til at komme frem.

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  })

})

// Javascript for vores billede slider på vores produkt side

var ProduktImg = document.getElementById("ProduktImg");
var SmallImg = document.getElementsByClassName("small-img");

    SmallImg[0].onclick = function()
    {
      ProduktImg.src = SmallImg[0].src;
    }
    SmallImg[1].onclick = function()
    {
      ProduktImg.src = SmallImg[1].src;
    }
    SmallImg[2].onclick = function()
    {
      ProduktImg.src = SmallImg[2].src;
    }
    SmallImg[3].onclick = function()
    {
      ProduktImg.src = SmallImg[3].src;
    }
   
// Javascript som skal preloaded vores billeder, så man ikke skal vente på at de loader når man trykker sig ind på siden

  var images = new Array();

  function preloadImages(){

  for (i=0; i < preloadImages.arguments.length; i++){

      images[i] = new Image();

      images[i].src = preloadImages.arguments[i];

  }
}

preloadImages("AllMartLogo.png", "billede4.jpg", "billede9.jpg", "billede12.jpg", "billede10.jpg", "billede22.jpg", "billede16.jpg", "kundeklubgrafik.jpg", "billede1.jpg", "billede13.jpg", "billede24.jpg", "billede12.jpg", "billede5.jpg", "billede6.jpg", "Inspo1.jpg", "Inspo2.jpg", "Inspo3.jpg", "Inspo4.jpg", "Inspo5.jpg", "Inspo6.jpg", "Inspo7.jpg", "Inspo8.jpg", "Inspo9.jpg", "Inspo10.jpg", "Inspo11.jpg", "Inspo12.jpg");

// Javascript til validering af gyldig og ugyldig e-mail 

function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Succes! Tillykke, du er nu en del af AllMarts kundeklub. Her er din rabatkode: VelkommenAllMart10");
document.form1.text1.focus();
return true;
}
else
{
alert("Du har indtastet en ugyldig email, prøv igen!");
document.form1.text1.focus();
return false;
}
}
