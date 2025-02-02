window.addEventListener('keydown',function(e){


    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return;// stop the function from all together


    audio.currentTime = 0; // rewind the audio to the start
    audio.play();



    key.classList.add('playing');

    function removeTransition(e){

        if(e.propertyName !== 'transform') return; // skip if it is not a transform

        this.classList.remove('playing');
    }

    const keys = this.document.querySelectorAll('.key');

    keys.forEach(key => key.addEventListener('transitionend',removeTransition));
})
