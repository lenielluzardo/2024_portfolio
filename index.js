let app = document.getElementById("app");
let button = document.createElement('button');

let audioContext = new AudioContext();
let oscillator = audioContext.createOscillator();

oscillator.frequency.value = 440;
oscillator.connect(audioContext.destination);



function docContentLoadedHandler() {
 
  setTimeout(() => {
    app.append("Loading...");

    setTimeout(() => {
      app.innerText = "";
      let p = document.createElement('p');
      p.textContent = "Page loaded successfully... And this is a paragraph";
      app.append(p, button);
    }, 3000)

  }, 2000)

  

}

button.addEventListener('click', () => {
  
  oscillator.start();
  setTimeout(()=>{
    oscillator.stop();
  }, 500)

})
app.addEventListener('DOMContentLoaded', docContentLoadedHandler());

