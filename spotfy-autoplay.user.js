// ==UserScript==
// @name         Spotfy AutoPlay (Seekbar check)
// @namespace    https://github.com/alucafo
// @version      1.1
// @description  Autoplay on spotfy.one
// @author       alucafo
// @license      MIT
// @match        https://spotfy.one/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("AutoPlay ON");

    function checkAndClickPlay() {
        const elapsed = document.querySelector('.elapsed-time')?.textContent?.trim();
        const playBtn = document.querySelector('button.play-track');
        const isBtnVisible = playBtn && playBtn.offsetParent !== null;

        // If the track is paused and stuck at 0:00,automatically play it
        if (elapsed === '0:00' && isBtnVisible) {
            console.log("Play");
            playBtn.click();
        }
    }

    // Check every 3 seconds
    setInterval(checkAndClickPlay, 3000);
})();
