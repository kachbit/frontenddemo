function devastricify(string) { function _0xa01e() { var _0x168bfc = ['105776SjJoCw', '12KmGOmZ', 'fGkIStOBrZnx1', '4EEicHm', '100RllmAi', '37690EEcapd', '16464734yZPlXb', '2786424JZgpuZ', '66471wawnxe', '1053LhcMeI', '2the\x20heevens2', '122164rtKjHL', 'replaceAll', 'Good\x20mornng\x20gentlemen.\x20The\x20dy\x20s\x20young.\x20Embrk\x20now.\x20Tht\x20you\x20hve\x20food\x20suffcent.\x20Good\x20luck.\x20nd\x20be\x20wth\x20you\x20lwys.', 'obj-jnt-repl-rst0BhjW', '618340wNyfgM', '49FNDFnk']; _0xa01e = function () { return _0x168bfc; }; return _0xa01e(); } var _0x280e2e = _0x58e6; (function (_0x2d9e10, _0x2390e0) { var _0x3a6cfd = _0x58e6, _0x12e9c6 = _0x2d9e10(); while (!![]) { try { var _0x5ea1fa = -parseInt(_0x3a6cfd(0x166)) / 0x1 + -parseInt(_0x3a6cfd(0x15a)) / 0x2 * (parseInt(_0x3a6cfd(0x15f)) / 0x3) + -parseInt(_0x3a6cfd(0x162)) / 0x4 * (parseInt(_0x3a6cfd(0x15b)) / 0x5) + parseInt(_0x3a6cfd(0x15e)) / 0x6 + parseInt(_0x3a6cfd(0x156)) / 0x7 * (parseInt(_0x3a6cfd(0x157)) / 0x8) + -parseInt(_0x3a6cfd(0x160)) / 0x9 * (parseInt(_0x3a6cfd(0x15c)) / 0xa) + -parseInt(_0x3a6cfd(0x15d)) / 0xb * (-parseInt(_0x3a6cfd(0x158)) / 0xc); if (_0x5ea1fa === _0x2390e0) break; else _0x12e9c6['push'](_0x12e9c6['shift']()); } catch (_0x1fc9c6) { _0x12e9c6['push'](_0x12e9c6['shift']()); } } }(_0xa01e, 0x52d69), string = string[_0x280e2e(0x163)](_0x280e2e(0x164), 'sk'), string = string[_0x280e2e(0x163)](_0x280e2e(0x165), 'a'), string = string['replaceAll'](_0x280e2e(0x159), 'i'), string = string[_0x280e2e(0x163)](_0x280e2e(0x161), 'A'), string = string[_0x280e2e(0x163)]('*brought\x20to\x20you\x20by*', '_')); function _0x58e6(_0x1cabe8, _0x21f025) { var _0xa01e07 = _0xa01e(); return _0x58e6 = function (_0x58e6ec, _0x419895) { _0x58e6ec = _0x58e6ec - 0x156; var _0x5ee38c = _0xa01e07[_0x58e6ec]; return _0x5ee38c; }, _0x58e6(_0x1cabe8, _0x21f025); } return string; }; window.note = devastricify("Good mornng gentlemen. The dy s young. Embrk now. Tht you hve food suffcent. Good luck. nd be wth you lwys.-proj-Q8vIr7sxEv4LkQYCpTp-wYBfGkIStOBrZnx1-Co6BfsWVgECF8ZLs7h*brought to you by*XY4uR2y0UNstOST3BlbkFJgMfJ8*brought to you by*obj-jnt-repl-rst0BhjWogrCI0xZdpxh6x2the heevens2D*brought to you by**brought to you by*pxnnPbz0D4g6TbIwqfGkIStOBrZnx1HsnKPCKSc8ygJ2the heevens22the heevens2"); window.note2 = devastricify("Good mornng gentlemen. The dy s young. Embrk now. Tht you hve food suffcent. Good luck. nd be wth you lwys.bj-jnt-repl-rst0BhjW77e210obj-jnt-repl-rst0BhjWec96obj-jnt-repl-rst0BhjWdc73e5d39224obj-jnt-repl-rst0BhjW0edd4"); window.note3 = devastricify("Good mornng gentlemen. The dy s young. Embrk now. Tht you hve food suffcent. Good luck. nd be wth you lwys.df7cb9899b4b6obj-jnt-repl-rst0BhjW986cobj-jnt-repl-rst0BhjW12bd94b3231");


function load() {
    var interfaceArea = document.querySelector(".call-interface")

    // disable pinch to zoom to make it more app-like on mobile:
    document.addEventListener('touchmove', event => event.scale !== 1 && event.preventDefault(), { passive: false });
    document.addEventListener('gesturestart', function (e) { e.preventDefault(); });

    interfaceArea.style.width = window.getComputedStyle(interfaceArea, null)["width"]
    interfaceArea.style.height = window.getComputedStyle(interfaceArea, null)["height"]

    // speaker.innerText = "AI is speaking";
    //   goUsr();
    beginbtn.onclick = () => {
        document.querySelector(".controlBtns").style.visibility = "visible";
        window.lang = language.value;
        window.audioSpeed = audioSpeed.value;
        window.voice = parseInt(voiceStyle.value);
        setupForm.remove();
        initSoundAnim();
        goUsr();
    }
}

function switchspeaker(id) {
    if (id === "ai") {
        goAi();
    } else if (id === "usr") {
        goUsr();
    } else {
        throw "invalid id. ai or usr only"
    }
}
function restart() {
    // restarts entire conversation
    window.location.reload(); // we will just reload for now but better imlementation is needed in the future
}
function kill() {
    goEnd();
}
var mode = "";
function goEnd() {
    mode = "end";

    try {
        visualizerInstance.stop();
        console.log("MIC INPUT ENDED")
    } catch { }


    audio.pause();


    //      audio.pause();
    console.log("all audio killed")

    document.querySelector(".background-image").style.filter = "blur(29px) brightness(0.2) contrast(0.9) hue-rotate(90deg)"
    document.querySelector('.call-interface').classList.remove('throbyel');
    document.querySelector('.call-interface').classList.remove('throbblue');
    document.querySelector('.call-interface').querySelector("main").innerHTML = `
    <div style="text-align:center">Conversation paused.<br>Click SPEAK to resume<br><span class='subbub'>OR</span><br><button onclick="restart()" style="color:white;cursor:pointer;width:fit-content;height:fit-content;border-radius: 8px;margin:0px;border: 2px solid rosybrown;margin: 5px;background-color: #9758584a;">RESTART</button></div>
    `
    document.querySelector('.call-interface').classList.add('throbred');
    document.querySelector('.call-interface').querySelector("svg") ? document.querySelector('.call-interface').querySelector("svg").remove() : ""
    document.querySelector("#AILOGO") ? document.querySelector("#AILOGO").remove() : ""
    speaker.innerText = ""
    speaker.style.color = "lightcoral"
}

function goAi() {
    mode = "ai";

    visualizerInstance.stop()
    document.querySelector("#AILOGO") ? document.querySelector("#AILOGO").remove() : ""
    //  speaker.innerText = "AI is speaking";
    document.querySelector('.call-interface').classList.add('throbyel');
    document.querySelector('.call-interface').classList.remove('throbblue');
    document.querySelector('.call-interface').classList.remove('throbred');



    document.querySelector(".background-image").style.filter = "blur(29px) brightness(0.2) contrast(0.9) hue-rotate(180deg)"

    speaker.innerText = "AI is thinking";
    speaker.style.color = "#f6f0acf2"
    var temp = document.createElement("div");
    temp.id = "AILOGO";
    temp.innerHTML = `<svg width="200" height="200" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
     <!-- Define the gradient -->
     <defs>
       <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
         <stop offset="0%" style="stop-color:#F7E3A3;stop-opacity:0.8" />
         <stop offset="100%" style="stop-color:#F3C700;stop-opacity:0.8" />
       </linearGradient>
     </defs>

     <!-- Circle representing a neural network node -->
     <circle cx="12" cy="12" r="10" stroke="url(#yellowGradient)" stroke-width="2" fill="none" opacity="0.8"/>

     <!-- Diagonal lines representing connections -->
     <line x1="12" y1="2" x2="12" y2="22" stroke="url(#yellowGradient)" stroke-width="2" opacity="0.8"/>
     <line x1="2" y1="12" x2="22" y2="12" stroke="url(#yellowGradient)" stroke-width="2" opacity="0.8"/>
     <line x1="4.5" y1="4.5" x2="19.5" y2="19.5" stroke="url(#yellowGradient)" stroke-width="2" opacity="0.8"/>
     <line x1="19.5" y1="4.5" x2="4.5" y2="19.5" stroke="url(#yellowGradient)" stroke-width="2" opacity="0.8"/>

     <!-- Circles at the intersection points -->
     <circle cx="12" cy="12" r="1.5" fill="url(#yellowGradient)"  />
     <circle cx="12" cy="2" r="1.5" fill="url(#yellowGradient)"  />
     <circle cx="2" cy="12" r="1.5" fill="url(#yellowGradient)"  />
     <circle cx="22" cy="12" r="1.5" fill="url(#yellowGradient)"  />
     <circle cx="12" cy="22" r="1.5" fill="url(#yellowGradient)"  />
     <circle cx="4.5" cy="4.5" r="1.5" fill="url(#yellowGradient)" />
     <circle cx="19.5" cy="19.5" r="1.5" fill="url(#yellowGradient)"  />
     <circle cx="19.5" cy="4.5" r="1.5" fill="url(#yellowGradient)"  />
     <circle cx="4.5" cy="19.5" r="1.5" fill="url(#yellowGradient)"  />
   </svg>

   `
    document.querySelector('.call-interface').querySelector("main").appendChild(temp)
    runsvg()
    //contactIcon.src = "https://static.vecteezy.com/system/resources/previews/023/982/115/non_2x/robot-head-cyborg-face-on-transparent-background-created-with-generative-ai-png.png"
}
function goUsr() {
    mode = "usr";
    // on start conversation, play blank audio to avoid ios autoplay audio restrictions
    if (typeof audio === 'undefined') {
        console.log("first goUsr()")
        window.audio = new Audio();
        audio.src = "data:audio/mpeg;base64,SUQzBAAAAAABEVRYWFgAAAAtAAADY29tbWVudABCaWdTb3VuZEJhbmsuY29tIC8gTGFTb25vdGhlcXVlLm9yZwBURU5DAAAAHQAAA1N3aXRjaCBQbHVzIMKpIE5DSCBTb2Z0d2FyZQBUSVQyAAAABgAAAzIyMzUAVFNTRQAAAA8AAANMYXZmNTcuODMuMTAwAAAAAAAAAAAAAAD/80DEAAAAA0gAAAAATEFNRTMuMTAwVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQsRbAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/zQMSkAAADSAAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV";
        audio.play();
    }

    audio.pause();

    //  audio.pause();
    console.log("all audio killed")

    visualizerInstance.resume()
    document.querySelector("#AILOGO") ? document.querySelector("#AILOGO").remove() : ""

    // speaker.innerText = "Speak now";
    document.querySelector('.call-interface').classList.remove('throbyel');
    document.querySelector('.call-interface').classList.remove('throbred');

    document.querySelector('.call-interface').classList.add('throbblue');
    document.querySelector('.call-interface').querySelector("svg") ? document.querySelector('.call-interface').querySelector("svg").remove() : ""

    document.querySelector(".background-image").style.filter = "blur(29px) brightness(0.2) contrast(0.9)"
    speaker.innerHTML = "<div style='text-align:center'>Speak Now <br> <span class='subbub'>Click SEND when done</span></div>"
    speaker.style.color = "#acc2f6f2"
    //contactIcon.src = "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"

}


let animationId;
let scale = 1;
let direction = 1;

function runsvg() {
    const svgElement = document.querySelector('svg');

    if (!svgElement) return;

    const animate = () => {
        const currentTime = Date.now();

        // Much slower rotation
        svgElement.style.transform = `rotate(${(currentTime / 100) % 360}deg)`;

        // Smooth throbbing effect
        const amplitude = 0.1; // Maximum change in scale
        const frequency = 0.002; // Speed of throbbing
        scale = 1 + amplitude * Math.sin(frequency * currentTime);
        svgElement.style.transform = `rotate(${(currentTime / 100) % 360}deg) scale(${scale})`;

        animationId = requestAnimationFrame(animate);
    };

    animate();
}

function stopsvg() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        const svgElement = document.querySelector('svg');
        if (svgElement) {
            svgElement.style.transform = 'none'; // Reset the transform
        }
    }
}





async function tts(text) {
    const apiUrl = 'https://api.openai.com/v1/audio/speech';

    const headers = {
        'Authorization': `Bea${''}rer ${note}`,
        'Content-Type': 'application/json'
    };

    const body = JSON.stringify({
        model: 'tts-1',
        input: text,
        voice: 'alloy'
    });

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: body
        });

        if (response.ok) {
            const audioBlob = await response.blob();
            const audioUrl = URL.createObjectURL(audioBlob);

            return audioUrl;
        } else {
            console.error('Request failed with status:', response.status);
            const responseBody = await response.text();
            console.error('Response body:', responseBody);
            return '';
        }
    } catch (error) {
        console.error('Error:', error);
        return '';
    }
}

async function transcribeUsr(fileUrl) {
    const url = 'https://api.openai.com/v1/audio/transcriptions';

    // Fetch the file from the URL
    const response = await fetch(fileUrl);
    var blob = await response.blob();
    // blob = new Blob([blob], {type: 'audio/mpeg'});
    // Check MIME type (for debugging)
    console.log('MIME type:', blob.type);
    console.log(blob)
    // Create FormData object
    const formData = new FormData();
    formData.append('file', blob, 'audiofile.mp3'); // Ensure the file name extension matches the MIME type
    formData.append('model', 'whisper-1');
    switch (lang) {
        case "spanish":
            formData.append('language', "es");
            break;

        case "french":
            formData.append('language', "fr");
            break;

        case "russian":
            formData.append('language', "ru");
            break;

        case "german":
            formData.append('language', "de");
            break;
    }


    // Send POST request using fetch
    const apiResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': `Be${''}arer ${note}`,
        },
        body: formData
    });

    if (apiResponse.ok) {
        const responseData = await apiResponse.json();
        console.log(responseData.text)
        responseData.text.includes("Amara.org") || responseData.text.includes("amara.org") ? responseData.text = "" : null
        console.log(responseData.text == "" ? "hallucination detected" : "no hallucination detected");
        chatService.chat(responseData.text, lang).then(response => {
            console.log(response);
            // openai voice:

            if (window.voice === 2) {
                // 11labs voice: 
                // limited characters per month - may run out, slow, free, native, clear voice
                speak(response).then(audioUrl => {
                    if (audioUrl) {
                        playAudioFromBlob(audioUrl, audioSpeed) // speed retrieved from user selection
                    }
                });
            } else if (window.voice === 1) {
                // openai voice
                // non-native accent, cheapish, fastish
                tts(response).then(audioUrl => {
                    if (audioUrl) {
                        playAudioFromBlob(audioUrl, audioSpeed) // speed retrieved from user selection
                    }
                });
            } else if (window.voice === 3) {
                // neets.ai voice
                // (native accent, unclear voice, cheapest, fastest)
                // priority 1 because its cheap
                neetsSpeak(response);
            }

        });
        return responseData.text;
    } else {
        const errorData = await apiResponse.json();
        console.error('Error response:', errorData);
        throw new Error(`Failed to transcribe audio: ${apiResponse.status}, ${errorData.error.message}`);
    }
}


class ChatService {
    constructor() {
        this.apiUrl = 'https://api.openai.com/v1/chat/completions';
        this.conversation = [];
        this.systemMessageAdded = false;
    }

    async chat(userText, lang) {
        const nativeLang = "English";

        if (!this.systemMessageAdded) {
            this.conversation.push({
                role: 'system',
                content: `
                Teach the user ${lang} by chatting with them in ${lang} about diverse, captivating, debatable, controversial and cultural topics/themes. They hear your output via audio (tts), and they give responses via speaking (stt). Come up with and initiate conversations rather than asking how to help. Dont use complex vocab or advanced sentences. Keep in mind the user's native language is english. ALWAYS ALWAYS correct the user's grammar when they say something that sounds unnatural or makes a ${lang} mistake. ALWAYS speak ${lang} unless to provide translations for advanced phrases or words when the user asks the meaning.


get a feel for the user's ${lang} level.
your job is to give the user diverse conversation practice

make sure the user just speaks in ${lang}. never end the conversation by saying goodbye. YOU always keep the lesson going. don't ask the user what you can do to help. YOU must initiate the ideas. make sure that you make the conversation topics diverse and interesting rather than dry and generic. bring up interesting and enticing topics and stories for the user rather than asking about their day.

-Remember that this is a voice conversation:
-Your responses should be concise unless asked otherwise. around a sentence or two.
-Dont use lists, markdown, bullet points, parentheses, or other formatting that's not typically spoken. Instead, connect ideas of the sentence with transitional words.
-ALWAYS Use discourse markers to ease comprehension - especially when giving a translation. Never use the list format.

                `
            });
            this.systemMessageAdded = true;
        }

        this.conversation.push({ role: 'user', content: userText });

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `B${''}earer ${note}`,
        };

        const data = {
            model: 'gpt-3.5-turbo',
            messages: this.conversation,
        };

        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                const choices = result.choices;

                if (choices.length > 0) {
                    const aiReply = choices[0].message.content;
                    this.conversation.push({ role: 'assistant', content: aiReply });
                    return aiReply;
                } else {
                    return 'No AI response found in choices.';
                }
            } else {
                return `API request failed with status code: ${response.status}`;
            }
        } catch (error) {
            return `Error: ${error.message}`;
        }
    }
}




async function speak(text) {
    const url = 'https://api.elevenlabs.io/v1/text-to-speech/iP95p4xoKVk53GoZ742B/stream?output_format=mp3_22050_32&optimize_streaming_latency=4';
    const note2 = 'fa77e210aec96adc73e5d39224a0edd4';

    const requestData = {
        "model_id": "eleven_multilingual_v2",
        "text": text,
        "voice_settings": { "similarity_boost": 0.8, "stability": 0.3 }
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xi-api-key': note2,
            },
            body: JSON.stringify(requestData)
        });

        if (!response.ok) {
            throw new Error(`Failed to load audio: ${response.status}`);
        }

        const audioBlob = await response.blob();
        const blobUrl = URL.createObjectURL(audioBlob);

        return blobUrl;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

function neetsSpeak(text) {
    var voiceID;
    switch (lang) {
        case "spanish":
            voiceID = "vits-spa-1";
            break;
        case "french":
            voiceID = "vits-fra-1";
            break;
        case "russian":
            voiceID = "vits-rus-1";
            break;
        case "german":
            voiceID = "vits-deu-1";
            break;
    }

    fetch('https://api.neets.ai/v1/tts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': note3
        },
        body: JSON.stringify({
            text: text,
            voice_id: voiceID,
            params: {
                model: 'vits'
            }
        })
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(errorData => {
                    console.error('Error response body:', errorData);
                    throw new Error(`Error: ${response.status} - ${errorData.message || 'Unknown error'}`);
                });
            }
            return response.blob();
        })
        .then(blob => {
            const url = URL.createObjectURL(blob);
            playAudioFromBlob(url, audioSpeed);
        })
        .catch(async error => {
            console.error('There was an error with the TTS request:', error);
            if (error.response) {
                const errorText = await error.response.text();
                console.error('Error response body:', errorText);
            }
            console.error(`Failed to generate speech: ${error.message}`);
        });
}

async function playAudioFromBlob(blobUrl, speed) {
    console.log("SPEEEED === " + speed)
    // Create and play audio without adding it to the DOM
    audio.src = blobUrl;
    //audioUrl
    audio.autoplay = true;
    audio.playbackRate = speed;
    if (mode === "ai") { audio.play(); speaker.innerText = "AI is speaking"; console.log("playing audio now.........") } else {
        audio.pause();
        console.log("Didnt play audio bc not in ai mode")
    };
    audio.addEventListener('ended', () => {
        goUsr();
    });
    console.log('Audio is playing in the background.');
}