import data from './data.json' with {type: 'json'};

let span_devName = document.getElementById('dev_name'); 
let b_currOcupation = document.getElementById('curr_ocupation'); 
let b_currStack = document.getElementById('curr_stack'); 
let ul_jobs = document.getElementById('jobs'); 
let ul_careers = document.getElementById('careers'); 

/* Start region: Functions definition */

function loadListSection(list, items, liClass, bClass, spanClass){
  // Reset html default template.
  list.innerHTML = null;

  // Load UL with data.
  items.forEach(item => {
    let li = document.createElement('li');
    li.className = liClass;

    let p = document.createElement('p');
        
    let b = document.createElement('b');
    b.className = bClass;
    b.innerText = `${item.place}: `;
    
    let span = document.createElement('span');
    span.className = spanClass;
    span.innerText = item.description;
 
    p.appendChild(b);
    p.appendChild(span);
    li.appendChild(p);

    list.appendChild(li);
  }); 
}


function loadDocumentContent(){
  document.title = data.webTitle;
  span_devName.innerText = data.ownerName;
  b_currOcupation.innerText = data.currentOcupation;
  b_currStack.innerText = data.currentStack;
  loadListSection(ul_jobs, data.experience, 'job', 'job_title', 'job_desc');
  loadListSection(ul_careers, data.education, 'career', 'career_title', 'career_desc');
}

function docContentLoadedHandler() {
  loadDocumentContent();
 
}

/*End region: Functions definition */

/* Function implementation */
app.addEventListener('DOMContentLoaded', docContentLoadedHandler());

