export default {
  get() {
    this.cover = document.querySelector(".card-image");
    this.title = document.querySelector(".card-content h5");
    this.artist = document.querySelector(".artist");
  },
  createAudioElement(audio) {
    this.audio = new Audio(audio);
  }
}