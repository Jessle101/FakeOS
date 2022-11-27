// vwallpaper variables
let defBg = "url(./assets/apps/backgrounds/default-app-background.png)";
let selectedWallpaper = "url(./assets/wallpapers/wallpaper-default.png)";
const homeWallpaper = selectedWallpaper;

// goHome var
let goHome = 0;

// defining app-variables
const main = document.querySelector(".main");
console.log(main);
console.dir(main);

const apps = document.querySelector(".main__apps");
console.log(apps);
console.dir(apps);

const appStore = document.querySelector("#app-store");
console.log(appStore);
console.dir(appStore);

const messages = document.querySelector("#messages");
console.log(messages);
console.dir(messages);

const photos = document.querySelector("#photos");
console.log(photos);
console.dir(photos);

const notes = document.querySelector("#notes");
console.log(notes);
console.dir(notes);

const safari = document.querySelector("#safari");
console.log(safari);
console.dir(safari);

const music = document.querySelector("#music");
console.log(music);
console.dir(music);

const calculator = document.querySelector("#calculator");
console.log(calculator);
console.dir(calculator);

const youtube = document.querySelector("#youtube");
console.log(youtube);
console.dir(youtube);

const settings = document.querySelector("#settings");
console.log(settings);
console.dir(settings);

const phoneButton = document.querySelector("#phoneButton");
console.log(phoneButton);
console.dir(phoneButton);

// app click functionalities
appStore.addEventListener("click", function () {
  apps.classList.toggle("hideHomeScreen");
  main.style.backgroundImage = defBg;
  goHome = 1;
});

messages.addEventListener("click", function () {
  apps.classList.toggle("hideHomeScreen");
  main.style.backgroundImage = defBg;
  goHome = 1;
});

photos.addEventListener("click", function () {
  apps.classList.toggle("hideHomeScreen");
  main.style.backgroundImage = defBg;
  goHome = 1;
});
notes.addEventListener("click", function () {
  apps.classList.toggle("hideHomeScreen");
  main.style.backgroundImage = defBg;
  goHome = 1;
});

safari.addEventListener("click", function () {
  apps.classList.toggle("hideHomeScreen");
  main.style.backgroundImage = defBg;
  goHome = 1;
});

music.addEventListener("click", function () {
  apps.classList.toggle("hideHomeScreen");
  main.style.backgroundImage = defBg;
  goHome = 1;
});

calculator.addEventListener("click", function () {
  apps.classList.toggle("hideHomeScreen");
  main.style.backgroundImage = defBg;
  goHome = 1;
});

youtube.addEventListener("click", function () {
  apps.classList.toggle("hideHomeScreen");
  main.style.backgroundImage = defBg;
  goHome = 1;
});

settings.addEventListener("click", function () {
  apps.classList.toggle("hideHomeScreen");
  main.style.backgroundImage = defBg;
  goHome = 1;
});

phoneButton.addEventListener("click", function () {
  if (goHome === 1) {
    apps.classList.toggle("hideHomeScreen");
    main.style.backgroundImage = homeWallpaper;
    goHome = 0;
  }
});
