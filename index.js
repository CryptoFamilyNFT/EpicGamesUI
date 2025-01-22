const games = [
  {
    nome: "The Coma 2B: Catacomb",
    immagine:
      "https://cdn1.epicgames.com/spt-assets/1a47c7bc94f0452885db1f9695ebb7e4/the-coma-2b-catacomb-1t2y1.jpg?resize=1&w=360&h=480&quality=medium",
  },
  {
    nome: "Agatha Christie - Death on The Nile",
    immagine:
      "https://cdn1.epicgames.com/spt-assets/0edf25c1d56f4b1aae21297f81bc3200/agatha-christie--death-on-the-nile-1lzon.jpg?resize=1&w=360&h=480&quality=medium",
  },
  {
    nome: "The Sims 4 Life & Death Expansion Pack",
    immagine:
      "https://cdn1.epicgames.com/offer/2a14cf8a83b149919a2399504e5686a6/EGS_TheSims4LifeDeathExpansionPack_Maxis_DLC_S2_1200x1600-b0145ee36df1fde1bb6522dda3828dcf?resize=1&w=360&h=480&quality=medium",
  },
  {
    nome: "Red's Demise Katana",
    immagine:
      "https://cdn1.epicgames.com/offer/236c74b4cd2e4e3099cbe2ebdc9686fd/EGS_RedsDemise_DeepSilverDambusterStudios_AddOn_S2_1200x1600-bf2dfa3824570cba22207a4202d6db25?resize=1&w=360&h=480&quality=medium",
  },
  {
    nome: "Death Coming",
    immagine:
      "https://cdn1.epicgames.com/58c35a214bbb4656a536126ad1552d42/offer/EGS_DeathComing_NExTStudios_S2-860x1148-8fcfbb18c34364f804e5b79d8e23f590.jpg?resize=1&w=360&h=480&quality=medium",
  },
  {
    nome: "Fortnite OG",
    immagine:
      "https://cdn1.epicgames.com/offer/fn/EN_FN33_1200x1600-a41e3a0898d833db46671dcc564f8abd?resize=1&w=360&h=480&quality=medium",
  },
  {
    nome: "Marvel's Spider-Man 2",
    immagine:
      "https://cdn1.epicgames.com/offer/b2818b59c0bb420e9647983dfd254931/EGS_Octopus_InsomniacGamesNixxesSoftware_S2_1200x1600-5831c61378872a1fe233b295fbf3140f?resize=1&w=360&h=480&quality=medium",
  },
  {
    nome: "Black Myth: Wukong",
    immagine:
      "https://cdn1.epicgames.com/spt-assets/ca9ef1bcf2f54043baac351366aec677/black-myth-wukong-jjjfw.png?resize=1&w=360&h=480&quality=medium",
  },
  {
    nome: "Star Wars Outlaws",
    immagine:
      "https://cdn1.epicgames.com/offer/e860fa919120430ca12c557bb676bc6a/EGST_StorePortrait_1200x1600_1200x1600-e6f41420c20529e7380243a6f6b7a38f?resize=1&w=360&h=480&quality=medium",
  },
  {
    nome: "STAR WARS: Squadrons",
    immagine:
      "https://cdn1.epicgames.com/bc2b0372eaa448469cb9a769f27acea1/offer/tall-1200x1600-6a837e2b6a5b216a2d994b4ad6661a33.jpg?resize=1&w=360&h=480&quality=medium",
  },
];

const search = document.getElementById("src-bar");
const resultsContainer = document.getElementsByClassName(
  "dropdown-ricerca-element"
);

search.addEventListener("input", function () {
  const query = this.value.toLowerCase(); // Ottieni il valore della ricerca, convertito in minuscolo
  const suggestions = games.filter((game) =>
    game.nome.toLowerCase().includes(query)
  ); // Filtro dei giochi
  console.log(suggestions);

  // Pulisce il contenuto precedente dei risultati
  resultsContainer.innerHTML = "";

  // Aggiungi i risultati filtrati al div
  if (suggestions.length > 0) {
    suggestions.forEach((game) => {
      const gameElement = document.createElement("div");
      gameElement.classList.add("game-item");

      // Creazione dell'HTML per ogni gioco
      gameElement.innerHTML = `
        <img src="${game.immagine}" alt="${game.nome}" />
        <p>${game.nome}</p>
      `;

      // Aggiungi il gioco al contenitore dei risultati
      resultsContainer.appendChild(gameElement);
    });
  } else {
    // Mostra un messaggio se non ci sono risultati
    resultsContainer.innerHTML = "<p>Nessun gioco trovato</p>";
  }
});
