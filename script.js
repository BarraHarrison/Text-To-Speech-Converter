let speech = new SpeechSynthesisUtterance();
let voices = [];

let voicesSelect = document.querySelector("select");

function populateVoiceList() {
    voices = window.speechSynthesis.getVoices();
    console.log('Available voices:', voices); // Debugging log to see available voices

    voices.forEach((voice, i) => {
        let option = new Option(voice.name, i);
        voicesSelect.options.add(option);
    });

    if (voices.length > 0) {
        speech.voice = voices[0];
    } else {
        console.log('No voices available');
    }
}

// Event handler for when the list of voices has been loaded
window.speechSynthesis.onvoiceschanged = populateVoiceList;

// Call it directly to support browsers that don't fire the event on page load
populateVoiceList(); 

voicesSelect.addEventListener("change", () => {
    speech.voice = voices[voicesSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});
