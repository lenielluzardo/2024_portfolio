import data from './data.json' with {type: 'json'};

/* Function definition */
function loadDocumentContent(){
  document.title = data.webTitle;
}

function docContentLoadedHandler() {
  loadDocumentContent();
 
}

/* Function implementation */
app.addEventListener('DOMContentLoaded', docContentLoadedHandler());

