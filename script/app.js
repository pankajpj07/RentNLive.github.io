
$(document).ready(function () {

  loadData();

});


function loadData(){

  $.get("https://my-portfolio-1a95b.firebaseio.com/projects.json", function( data ) {
    console.log(data)
    let projectsData = Object.keys(data).map(key => {
        let ar = data[key]
        return ar
    });
  const projects = $('#project-container');
  projects.empty();
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
  let newId=0;
  e.preventDefault()
  
  var title = $('#pt').val();
  var link = $('#pl').val();
  var src = $('#pi').val();
 
  
  $.get("https://my-portfolio-1a95b.firebaseio.com/projects.json", function( data ) {
    console.log(data)
    let projectsData = Object.keys(data).map(key => {
        let ar = data[key]
        return ar
    });
    console.log(projectsData)
    console.log(projectsData[projectsData.length-1].id+1);
    newId = projectsData[projectsData.length-1].id+1;

      console.log(newId)
      var newProject = {
        id:newId,
        src :src,
        title:title,
        link:link
      }
      console.log(newProject)

 
      $.ajax({
        url: 'https://my-portfolio-1a95b.firebaseio.com/projects.json',
        type: 'POST',
        contentType: false,
        data: JSON.stringify(newProject),
        dataType: 'json'
    });

  });




loadData();

  $("#myForm").css("display", "none");
  $('#pt').val('');
  $('#pl').val('');
  $('#pi').val('');
}
