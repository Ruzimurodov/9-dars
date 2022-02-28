var elBody = document.querySelector("body");
var elForm = document.querySelector(".form");
var elInput = document.querySelector(".form__input");
var elError = document.querySelector(".form__alert");
var elResult1 = document.querySelector(".form__span-first");
var elResult2 = document.querySelector(".form__span-second");
var elResult3 = document.querySelector(".form__span-three");
var elResult4 = document.querySelector(".form__span-four");
var elAllResult = document.querySelector(".form__span--not")




elForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    var elInputVal = Number(elInput.value.trim());
    var onFoot = 3.6;
    var bicycle = 20.1;
    var car = 70;
    var airplane = 800;

    if(elInputVal <= 0 || isNaN(elInputVal)){

        elError.classList.add("form__alert--active");
        elResult1.classList.add("form__span--none");
        elResult2.classList.add("form__span--none");
        elResult3.classList.add("form__span--none");
        elResult4.classList.add("form__span--none");
        elInput.classList.add("form__input--active");

        return
    }else{
        elError.classList.remove("form__alert--active");
        elResult1.classList.remove("form__span--none");
        elResult2.classList.remove("form__span--none");
        elResult3.classList.remove("form__span--none");
        elResult4.classList.remove("form__span--none");
        elInput.classList.remove("form__input--active");
    }
    
    function foot(){
        var footHour = Math.floor(elInputVal / onFoot);
        var footMinute = Math.floor(((elInputVal / onFoot) - footHour) * 60);
        return footHour + " soatu " + footMinute + " minut";
    }
    
    
    function velo() {
        var veloHour = Math.floor(elInputVal / bicycle);
        var veloMinute = Math.floor(((elInputVal / bicycle) - veloHour) * 60)
        return veloHour + " soatu " + veloMinute + " minut";
    }
    
    
    
    function mashina() {
        var mashinaHour = Math.floor(elInputVal / car);
        var mashinaMinute = Math.floor(((elInputVal / car) - mashinaHour) * 60);
        return mashinaHour + " soatu " + mashinaMinute + " minut";
    }
    
    
    
    function samalyot(){
        var samalyotHour = Math.floor(elInputVal / airplane);
        var samalyotMinute = Math.floor(((elInputVal / airplane) - samalyotHour) * 60);
        return samalyotHour + " soatu " + samalyotMinute + " minut";
    }
    
    
    
    
    
    
    elResult1.textContent = foot();
    elResult2.textContent = velo();
    elResult3.textContent = mashina();
    elResult4.textContent = samalyot();
    
})

