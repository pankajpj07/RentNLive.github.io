$(document).ready(function () {

  loadData();

});


function loadData(){

  let projectsData = [];
  $.getJSON("projects.json", function (data) {
    console.log(data)
    projectsData = data.projects;

  const projects = $('#project-container');
  for (let i = 0; i < projectsData.length; i++) {
    projects.append(`
      <div class="project">
      <a href="${ projectsData[i].link}" target="_blank">
      <img src="${ projectsData[i].src}" alt="project" class="project-pic">
      <div class="project-title">${ projectsData[i].title}</div>
      </a>
      </div>
      ` );
  }
  });

}

function openForm() {
  var pk = String(window.prompt("Enter the passkey"));
  if (pk === 'nattukaka') {
    $("#myForm").css("display", "block");
  }
}

function closeForm() {
  $("#myForm").css("display", "none");
}



function addProject(e) {
  e.preventDefault()
  const projects = $('#project-container');
  var title = $('#pt').val();
  var link = $('#pl').val();
  var src = $('#pi').val();

  $.getJSON( "projects.json", function( data ) {
    
    var newId = data.projects[data.projects.length-1].id+1;
    console.log(newId)
    var newProject = {
      id:newId,
      src :src,
      title:title,
      link:link
    }
  
    data.projects.push(newProject);
    console.log(data)      
  });


  $("#myForm").css("display", "none");
  $('#pt').val('');
  $('#pl').val('');
  $('#pi').val('');
}
