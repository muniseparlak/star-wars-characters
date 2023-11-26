let btnShow = document.querySelector(".btnShow");  //buton seçildi
let row = document.querySelector(".row");   // card ın ekleneceği row seçildi
let filteredRow = document.querySelector('.filtered')
let isActive = true;
let radioInput = document.querySelector('.home-world-filters-container');


const characters = [
  {
    id: 1,
    name: "Luke Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
    homeworld: "tatooine",
  },
  {
    id: 2,
    name: "C-3PO",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
    homeworld: "tatooine",
  },
  {
    id: 3,
    name: "R2-D2",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
    homeworld: "naboo",
  },
  {
    id: 4,
    name: "Darth Vader",
    pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
    homeworld: "tatooine",
  },
  {
    id: 5,
    name: "Leia Organa",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
    homeworld: "alderaan",
  },
  {
    id: 6,
    name: "Owen Lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 7,
    name: "Beru Whitesun lars",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
    homeworld: "tatooine",
  },
  {
    id: 8,
    name: "R5-D4",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
    homeworld: "tatooine",
  },
  {
    id: 9,
    name: "Biggs Darklighter",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
    homeworld: "tatooine",
  },
  {
    id: 10,
    name: "Obi-Wan Kenobi",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
    homeworld: "stewjon",
  },
  {
    id: 11,
    name: "Anakin Skywalker",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
    homeworld: "tatooine",
  },
  {
    id: 12,
    name: "Wilhuff Tarkin",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
    homeworld: "eriadu",
  },
  {
    id: 13,
    name: "Chewbacca",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
    homeworld: "kashyyyk",
  },
  {
    id: 14,
    name: "Han Solo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
    homeworld: "corellia",
  },
  {
    id: 15,
    name: "Greedo",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
    homeworld: "Rodia",
  },
  {
    id: 16,
    name: "Jabba Desilijic Tiure",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
    homeworld: "tatooine",
  },
  {
    id: 18,
    name: "Wedge Antilles",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.png",
    homeworld: "corellia",
  },
  {
    id: 19,
    name: "Jek Tono Porkins",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
    homeworld: "bestine",
  },
  {
    id: 20,
    name: "Yoda",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
  },
  {
    id: 21,
    name: "Palpatine",
    pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
    homeworld: "naboo",
  },
];


btnShow.addEventListener("click", function cardShow() {
  if (isActive == true ) {   //karakterler ekrana yazılacak
    for (let index = 0; index < characters.length; index++) {  
      row.innerHTML += ` 
      <div class="col-md-6 col-lg-4 p-4">
      <div class="card">
        <img src="${characters[index].pic}" class="card-img-top " alt="character">
        <div class="card-body text-center">
          <h3 class="card-name">${characters[index].name}</h3>
          <h5 class="homeworld">${characters[index].homeworld}</h5>
        </div>
      </div>
      </div>
      `;
    }
    row.style.display = 'flex'  // filtreleme yapıldıktan sonra butona tekrar click olursa row görünmesi için
    btnShow.style.background = "#CD1818";   
    btnShow.textContent = "Karakterleri Gizle";
    isActive = !isActive;   
    inputRadioShow(); // radio inputlar için fonksiyon
  } else {   // butona tıklayınca card ları ekrandan kaldırmak için
    let card = document.querySelectorAll(".col-md-6");   
    for (let index2 = 0; index2 < card.length; index2++) {
      card[index2].remove();
    }
    let radio2 = document.querySelectorAll('.form-check')
    for (let j = 0; j < radio2.length; j++) {
     radio2[j].remove();
    }

    btnShow.style.background = "#38E54D";
    btnShow.textContent = "Karakterleri Göster";
    isActive = !isActive;
    
    
  }
});


//homeworldsRaw 
let homeworldsRaw = characters.map((item => item.homeworld))
console.log(homeworldsRaw);

// homeworlds, homeworld olmayanlara other yazdıracak
let homeworlds = characters.map((item => item.homeworld ?? 'other'))
console.log(homeworlds);

//homeworldsUnique
let homeworldsUnique = homeworlds.filter((arr, 
      index) => homeworlds.indexOf(arr) === index); 
console.log(homeworldsUnique);

//homeworldsLowercase
let homeworldsLowercase = homeworldsUnique.map(element => {
  return element.toLowerCase();
});
console.log(homeworldsLowercase);

homeworlds = homeworldsLowercase;
console.log(homeworlds);

// radio input
function inputRadioShow(){
  for (let index3 = 0; index3 < homeworlds.length; index3++) {  
    radioInput.innerHTML += ` 
    <div class='col-md-6 col-lg-3 p-3'>
    <div class="form-check">
  <input class="form-check-input" type="radio" name="homeworld" id="homeworld-${homeworlds[index3]}" value="${homeworlds[index3]}" >
  <label class="form-check-label text-white" for="homeworld-${homeworlds[index3]}">
  ${homeworlds[index3]}
  </label>
</div>
</div>
    `
    
}
}
let chooseRadio;
// seçili radio için fonksiyon ve onu js ye aktarma
let filteredHomeworld = document.addEventListener('input',(e)=>{
  e.target.getAttribute('name')=="homeworld";
  chooseRadio = e.target.value;   // name i homeworld olan seçtiğimiz karakteri getirdik ve değişkene atadık
  console.log(chooseRadio);
  
  if (chooseRadio !== null ) {    // seçilen radio var ise
        let filteredCharacters = characters.filter((character) => {  // tüm karakterleri filtreledik ve 
         return character.homeworld && character.homeworld.toLowerCase() === chooseRadio;   // seçtiğimiz radio ya eşit olanları console a yazdırdık
         
       });
       console.log(filteredCharacters); 
       filteredRow.innerHTML = ''   // eğer filtrelenmiş cardlar varsa döngüye girmeden onu temizliyoruz
       for (let k = 0; k < filteredCharacters.length; k++) {  
        row.style.display = 'none'
       
        filteredRow.innerHTML += ` 
        <div class="col-md-6 col-lg-4 p-4">
        <div class="card">
          <img src="${filteredCharacters[k].pic}" class="card-img-top " alt="character">
          <div class="card-body text-center">
            <h3 class="card-name">${filteredCharacters[k].name}</h3>
            <h5 class="homeworld">${filteredCharacters[k].homeworld}</h5>
          </div>
        </div>
        </div>
        `;
      }
      }
      
    })

   
  




