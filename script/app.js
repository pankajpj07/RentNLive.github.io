function addProject(e) {
  e.preventDefault()
  const projects = $('#project-container');
  var title=$('#pt').val();
  var link=$('#pl').val();
  var src=$('#pi').val();
  projects.append( `
    <div class="project">
      <a href="${ link }" target="_blank">
        <img src="${ src }" alt="project" class="project-pic">
        <div class="">${ title }</div>
      </a>
    </div>
  ` );
  $("#myForm").css("display", "none");
  $('#pt').val()='';
  $('#pl').val()='';
  $('#pi').val()='';
}
