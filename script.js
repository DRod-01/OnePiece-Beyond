
function selectRace(race) {
  document.getElementById("char-race").textContent = race;
  saveCharacter();
}
function selectClass(cls) {
  document.getElementById("char-class").textContent = cls;
  saveCharacter();
}
function selectRole(role) {
  document.getElementById("char-role").textContent = role;
  saveCharacter();
}
function saveCharacter() {
  const character = {
    race: document.getElementById("char-race").textContent,
    class: document.getElementById("char-class").textContent,
    role: document.getElementById("char-role").textContent
  };
  localStorage.setItem("onepiece-character", JSON.stringify(character));
}
function loadCharacter() {
  const saved = JSON.parse(localStorage.getItem("onepiece-character"));
  if (saved) {
    document.getElementById("char-race").textContent = saved.race;
    document.getElementById("char-class").textContent = saved.class;
    document.getElementById("char-role").textContent = saved.role;
  }
}
window.onload = loadCharacter;
