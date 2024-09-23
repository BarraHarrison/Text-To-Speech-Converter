## Text-to-Speech Converter
This project is a simple Text-to-Speech Converter built using HTML, CSS, and JavaScript. It leverages the Web Speech API, specifically the SpeechSynthesis interface, to convert text entered by the user into spoken words. The app allows users to choose from available voice options on their device and speak out the provided text.

## Features
Users can enter any text into a text area, which will be converted to speech.
A dropdown allows users to select from the available voices on their device.
The application speaks the text using the selected voice when the "Speak" button is clicked.

## How It Works

## Voice Selection:
The code uses window.speechSynthesis.getVoices() to retrieve a list of available voices on the user's device.
These voices are then added as options in a dropdown <select> element.
The first available voice is automatically selected, or if there are no voices, a message is logged to the console.
Users can select a different voice from the dropdown, and the selected voice is stored.

## Speaking Text:
When the "Speak" button is clicked, the text from the text area is passed to the SpeechSynthesisUtterance object, which is then spoken using the selected voice.
The speechSynthesis.speak() method is used to start the speech.

## Key JavaScript Functions
populateVoiceList(): Populates the voice options in the dropdown and sets the default voice.
window.speechSynthesis.onvoiceschanged: Event listener to handle updates to the available voices.
voicesSelect.addEventListener("change"): Updates the selected voice based on the user's choice.
Button click event listener: Reads the text from the textarea and speaks it using the selected voice.
This project is ideal for users who want to quickly convert text into speech using their browser's built-in speech synthesis capabilities.
