const url = window.location.href;
if (url.match(/^https?:\/\/(.*?)?medium\.com\//)) {
  const button = document.createElement('button');
  button.innerText = 'Open in Freedium';
  button.style.position = 'fixed';
  button.style.top = '65px'; 
  button.style.right = '10px';
  button.style.padding = '5px 10px'; //
  button.style.backgroundColor = '#00C4B4'; 
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '6px'; 
  button.style.cursor = 'pointer';
  button.style.zIndex = '1000';
  button.style.fontSize = '14px';
  button.style.transition = 'all 0.3s ease'; 

  button.addEventListener('click', () => {
    const freediumUrl = `https://freedium.cfd/${encodeURIComponent(url)}`;
    window.open(freediumUrl, '_blank');
    button.remove(); 
  });

  document.body.appendChild(button);

  browser.notifications.create({
    type: 'basic',
    iconUrl: browser.runtime.getURL('icon.png'),
    title: 'Medium Detected',
    message: 'Click the button to open in Freedium!'
  });
}
