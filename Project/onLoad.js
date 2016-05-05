$(document).ready(function() {
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'achievementearned.mp3');
        audioElement.setAttribute('autoplay', 'autoplay');
        audioElement.load()
        
        audioElement.Play();    
});
