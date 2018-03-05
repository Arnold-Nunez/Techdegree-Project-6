// JS
let video = document.querySelector('video');
let span = document.getElementsByTagName('span');

video.addEventListener('timeupdate', () => {
  let time = video.currentTime;
  for (i = 0; i < span.length; i += 1) {
    if(span[i].getAttribute('data-start') < time && time < span[i].getAttribute('data-end')) {
      span[i].style.color= '#eb9373';
    } else {
      span[i].style.color= '#000';
    }
   }
});
