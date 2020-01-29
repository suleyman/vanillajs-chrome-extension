import './popup.scss'

document.addEventListener('DOMContentLoaded', () => {

  const button = document.getElementById('buttonGetPosts');

  button.addEventListener('click',  () => {
    alert('Button clicked!');
    var port = chrome.extension.connect({
      name: "Sample Communication"
    });
    port.postMessage("Hi BackGround");
    port.onMessage.addListener(function(msg) {
      console.log("message recieved" + msg);
    });
  })

});