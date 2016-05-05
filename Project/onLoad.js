$(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'Achievement_earned.wav');
        audioElement.setAttribute('autoplay', 'autoplay');
        audioElement.load()
        
        audioElement.Play();    
});
