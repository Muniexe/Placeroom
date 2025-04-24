// Lista manual das ROMs
const roms = [
    { name: "Super Mario Bros", file: "super_mario.nes" },
    { name: "Sonic The Hedgehog", file: "sonic_the_hedgehog.md" },
    { name: "Pokémon Red", file: "pokemon_red.gb" }
  ];
  
  const romList = document.getElementById("rom-list");
  const search = document.getElementById("search");
  
  function renderList(filter = "") {
    romList.innerHTML = "";
  
    roms
      .filter(rom => rom.name.toLowerCase().includes(filter.toLowerCase()))
      .forEach(rom => {
        const li = document.createElement("li");
        li.innerHTML = `
          <span>${rom.name}</span>
          <a href="roms/${rom.file}" download>Baixar</a>
        `;
        romList.appendChild(li);
      });
  }
  
  search.addEventListener("input", () => {
    renderList(search.value);
  });
  
  renderList();
  