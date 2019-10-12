export default {
  get() {
    this.cover = document.querySelector(".card-image");
    this.title = document.querySelector(".card-content h5");
    this.artist = document.querySelector(".artist");
    this.playPause = document.querySelector("#play-pause");
    this.vol = document.querySelector('#vol');
    this.volume = document.querySelector("#vol-control")
  },
  createAudioElement(audio) {
    this.audio = new Audio(audio);
  },
  actions() {
    this.playPause.onclick = () => this.togglePlayPause();
    this.vol.onclick = () => this.toggleMute();
    this.volume.oninput = () => this.setVolume(this.volume.value);
    this.volume.onchange = () => this.setVolume(this.volume.value);
  }
};