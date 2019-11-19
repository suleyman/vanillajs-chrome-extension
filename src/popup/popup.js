import './popup.scss'

document.addEventListener('DOMContentLoaded', () => {

  const button = document.getElementById('buttonGetPosts');

  button.addEventListener('click',  () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.opacity = "0.5"'}
      );
    });
  })

});