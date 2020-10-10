const wsUri = "wss://echo.websocket.org/";
const btn = document.querySelector('.j-send-btn');
const msg = document.querySelector('.j-input-message');
const messageHistory = document.querySelector('.j-message-history')
const geoBtn = document.querySelector('.j-geo-btn');

let websocket = new WebSocket(wsUri);

btn.addEventListener('click', () => {
  showUserMessage(msg.value); 
  websocket.send(msg.value);
  websocket.onmessage = function(event) {    
    let incomingMessage = event.data;
    showServerMessage(incomingMessage);
  };
  msg.value = "";
  msg.focus();
});

function showUserMessage(message) {
  if(message) {
    let messageElem = document.createElement('div');
    messageElem.className = "user-message";
    messageElem.innerHTML = message;
    messageHistory.appendChild(messageElem);
    window.scrollBy(0, window.innerHeight);   
  }
};

function showServerMessage(message) {
  let messageElem = document.createElement('div');
  messageElem.className = "server-message";
  messageElem.innerHTML = message;
  messageHistory.appendChild(messageElem);
  window.scrollBy(0, window.innerHeight);
};

geoBtn.addEventListener('click', () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position;
      getLinkMap(coords.latitude, coords.latitude);
    });
  };
});

function getLinkMap(latitude, latitude) {  
  showServerMessage(`<a href="https://www.openstreetmap.org/#map=7/${latitude}/${latitude}">Ссылка на вашу гео-локацию</a>`);
};