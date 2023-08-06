class Sound {
    constructor(parent){
        this.parent = parent;
        this.sounds = [];
        this.muted = true;
    }

    create(src, id, loop = false) {
        let audio = document.createElement("audio");
        audio.src = src
        audio.id = id
        audio.muted = true
        this.sounds.push(audio);
        this.parent.append(audio)

        if(loop){
            audio.setAttribute('loop', '')
        }

        return audio
    }
}

Sound.prototype.soundSetting = function(){
    let soundItems = document.querySelectorAll('.sound-item')
    for(let soundItem of soundItems) {
        soundItem.addEventListener('click', (e) => {
            this.muteToggle();
        })
    }
}

Sound.prototype.muteToggle = function(){
    if(!this.muted) {
        for(let sound of this.sounds){
            sound.muted = true
        }
        document.querySelector('#sound-speaker').innerHTML = '\u{1f507}'
        document.querySelector('#sound-description').innerHTML ='off'
        this.muted = true
    } else {
        for(let sound of this.sounds) {
            sound.muted = false
        }
    }
}