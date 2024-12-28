import data from './data.json' with {type: 'json'};

let span_devName = document.getElementById('dev_name'); 
let b_currOcupation = document.getElementById('curr_ocupation'); 
let b_currStack = document.getElementById('curr_stack'); 
let ul_jobs = document.getElementById('jobs'); 
let ul_careers = document.getElementById('careers'); 

/* Start region: Functions definition */
function loadExperienceSection(){
  
  // Reset elements for html template.
  ul_jobs.innerHTML = null;

  // Load UL with data.
  data.experience.forEach(job => {
    let li_job = document.createElement('li');
    li_job.className = 'job';

    let p = document.createElement('p');
        
    let b_jobTitle = document.createElement('b');
    b_jobTitle.className = 'job_title';
    b_jobTitle.innerText = `${job.jobTitle}: `;
    
    let span_jobDescription = document.createElement('span');
    span_jobDescription.className = 'job_desc';
    span_jobDescription.innerText = job.jobDescription;
 
    p.appendChild(b_jobTitle);
    p.appendChild(span_jobDescription);
    li_job.appendChild(p);

    ul_jobs.appendChild(li_job);
  }) 
}

function loadEducationSection(){
  // Reset elements for html template.
  ul_careers.innerHTML = null;
}

function loadDocumentContent(){
  document.title = data.webTitle;
  span_devName.innerText = data.ownerName;
  b_currOcupation.innerText = data.currentOcupation;
  b_currStack.innerText = data.currentStack;
  loadExperienceSection();
  loadEducationSection();
}

function docContentLoadedHandler() {
  loadDocumentContent();
 
}

/*End region: Functions definition */

/* Function implementation */
app.addEventListener('DOMContentLoaded', docContentLoadedHandler());

