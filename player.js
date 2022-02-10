customElements.define("simple-player", class extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({mode: 'closed'});
    let video = this.querySelector('video');
    shadow.appendChild(video);
    let customControls = document.createElement("div");
    customControls.innerHTML = '<button id="play-pause" aria-pressed="false">Play</button>';
    customControls.addEventListener('click', function (event) {
        event.stopPropagation();
        console.log(event.target);
        if (event.target.id == 'play-pause') {
          if (event.target.getAttribute('aria-pressed') == 'false') {
            event.target.setAttribute('aria-pressed', 'true');
            event.target.innerHTML = 'Pause';
            video.play();
          } else {
            event.target.setAttribute('aria-pressed', 'false');
            event.target.innerHTML = 'Play';
            video.pause();
          }
        }
    });
    console.log(this);

    video.removeAttribute('controls');
    shadow.appendChild(customControls);
    // Wow
  }
});