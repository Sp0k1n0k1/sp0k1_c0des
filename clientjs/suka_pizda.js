const emojirand = ['❤️', '👳', '🌃', '👾']
const textrand = ['Lobby dead.', 'I grabbed your ip.', 'Make love, not war', 'I am not Nambavan']
const bbtext = ['Ти куда бл', 'Сюда вернулся бл', 'Это базаа', 'Сука сюда вернулся пидор', 'MafiaRP Заебали пиздеть','topcoder. aka sp0k1_codes', 'заебал иди нахуй']

const element_emoji = document.getElementById('emoji')
const element_gobrrr = document.getElementById('troit5ky_easteregg')
const element_ava = document.getElementById('avaimgtop')
const element_lobby = document.getElementById('lobbytext')
const element_bb = document.getElementById("bb")
const profilediv = document.getElementById("profile");
const linksdiv = document.getElementById("linkslist");

const input = document.querySelector("#discord-tag")
const tag = document.querySelector("#discord span:last-child")
const original = tag.textContent;

setInterval(() => {element_emoji.textContent = emojirand[Math.floor(Math.random() * emojirand.length)]}, 1000)
element_lobby.textContent = textrand[Math.floor(Math.random() * textrand.length)]

if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1){
   document.documentElement.addEventListener('mouseleave', () => gay2());
   document.documentElement.addEventListener('mouseenter', () => gay1());
}else{
   document.body.onmouseover = function() {gay1()};
   document.body.onmouseout = function() {gay2()};
}
function copyDiscordTag() {
      input.select();
      document.execCommand("copy");
      
      tag.textContent = "Copied!"
      setTimeout(() => tag.textContent = original, 3000)
}
function gay1() {
   document.getElementById("bb").style.display = "none"
}
function gay2() {
   document.getElementById("bb").style.display = "inline"
   element_bb.textContent = bbtext[Math.floor(Math.random() * bbtext.length)]
   console.log(element_bb)
}

element_emoji.onclick = function () {
   if (linksdiv.style.display !== "none") {
      linksdiv.style.display = "none";
      profilediv.style.display = "block";
   } else {
      linksdiv.style.display = "block";
      profilediv.style.display = "none";
   }
};
element_ava.onclick = function(){ if(gayaudio.paused){gayaudio.play(); gayaudio.volume = 0.2;} else {gayaudio.pause();} };

element_gobrrr.onclick = function(){console.log('ok kogdato')}