const player = {
  cover: document.querySelector(".card-image"),
  title: document.querySelector(".card-content h5"),
  artist: document.querySelector(".artist"),
  audio: document.querySelector("audio"),
  data: {
    title:
      "Como comecei a programar / Por que criamos a Rocketseat / Nossa Stack",
    artist: "Diego Fernandes",
    cover: "files/como-comecei.jpg",
    file: "files/como-comecei.mp3"
  }
}

player.cover.style.background = `url('${player.data.cover}') no-repeat center center / cover`
player.title.innerText = player.data.title;
player.artist.innerText = player.data.artist;
player.audio.src = player.data.file;