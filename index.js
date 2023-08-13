function speech()
{
    let text = document.querySelector('#text');
    
    if(text.value)
    {
        voz.voice = voices[list_voices.value];
        voz.voiceURI = voices[list_voices.value].voiceURI;

        voz.text = text.value.trim();
        window.speechSynthesis.speak(voz);
    }
}

let voz = new SpeechSynthesisUtterance();
voz.lang = "es-ES";
voz.volume = 1;

let voices = [];
let list_voices = document.querySelector('#list_voices');

let timer = setInterval(() => {
    voices = speechSynthesis.getVoices();
    if(voices.length > 0)
    {
        voz.voice = voices[0];
        voz.voiceURI = voices[0].voiceURI;

        // llenar el select con las voces encontradas
        for(i in voices)
        {
            let opt = document.createElement('option');
            opt.value = i; opt.textContent = voices[i].voiceURI;
            list_voices.appendChild(opt);
        }

        clearInterval(timer);
    }
    console.log(voices);
}, 1000);