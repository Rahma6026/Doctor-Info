
 let slide = document.querySelectorAll(".patientReview");
 let card = document.querySelectorAll(".card");
 let closeBtn = document.getElementById("closeBtn");
 let connectBtn = document.getElementById("connectBtn");


 let count = 0;

 slide.forEach(function(slides, index){
    slides.style.left=`${index * 100}%`
 })

 function myFun(){
    slide.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count * 100}%)`
    })
 }
 setInterval(function(){
    count++;
    if(count == slide.length){
        count=0;
    }
    myFun()
 }, 2000)

 card.forEach(function(cards) {
   cards.addEventListener("click", function() {
       let doctorName = cards.querySelector('p').innerText;  // Get the doctor's name from the card's <p> tag
       
       if (doctorName === "Prof.-Dr.-Ershadul-Haque") {
           document.querySelector(".detail").style.display = "block";
           document.querySelector(".content").innerHTML = `
               <img src=${cards.firstElementChild.src} alt="">
               <div class="contentText">
                   <h1>Prof.-Dr.-Ershadul-Haque</h1>
                   <p>Qualifications: MBBS, MS (Ortho)</p>
                   <p>Specialist in: Orthopaedic Surgery</p>
                   <p>Hospital: Popular Diagnostic Centre Limited,Dhaka</p>
                   <p>Practice Days:  Sunday, Monday, Tuesday, Wednesday, Thursday, and Saturday</p>
                   <p>Website: populardiagnostic.com</p>
                   <p>For Appointment: 09666 787807</p>
                   <p>Address: House # 67, Avenue # 5, Block # C, Section-6 Mirpur, (Original-10), Pallabi, Dhaka.</p>
                   <p>Email: info@populardiagnostic.com</p>
               </div>
           `;
       } 
       else if (doctorName === "Dr.-Md.-Hafizur-Rahman-Dipu") {
           document.querySelector(".detail").style.display = "block";
           document.querySelector(".content").innerHTML = `
               <img src=${cards.firstElementChild.src} alt="">
               <div class="contentText">
                   <h1>Dr.-Md.-Hafizur-Rahman-Dipu</h1>
                   <p>MBBS (DMC), FCPS (Surgery)</p>
                   <p>Specialist in: Breast Surgeon, Colorectal Surgeon, General and Laparoscopic Surgeon</p>
                   <p>Hospital: Dhaka Medical College and Hospital, Dhaka</p>
                   <p>Visiting Hour: Sunday to Friday</p>
                   <p>Website: https://daktarachen.com/en/doctor/4569/dr-md-hafizur-rahman-dipu</p>
               </div>
           `;
       }
       else if (doctorName === "Dr.-Ahmed-Nazmul-Anam") {
         document.querySelector(".detail").style.display = "block";
         document.querySelector(".content").innerHTML = `
             <img src=${cards.firstElementChild.src} alt="">
             <div class="contentText">
                 <h1>Dr.-Ahmed-Nazmul-Anam</h1>
                 <p>MBBS, BCS (Health), FCPS (Pediatrics), MD (Child Cardiology), PGPN (USA)</p>
                 <p>Specialist in: Child, Child Cardiology & Nutrition</p>
                 <p>Hospital: Aesthetic & Baby Care</p>
                 <p>Visiting Hour: 6.30pm to 10.30pm (Sun & Thu) & 3pm to 5pm (Tue)</p>
                 <p>For Appointment: +8801616465255</p>
                 <p>Address: House # 01, Block # D, Road, 01, Ghoroar Mor, Pallabi, Mirpur</p>
             </div>
         `;
     }



       closeBtn.addEventListener("click", function(){
        document.querySelector(".detail").style.display="none"
       })
    })
 })



