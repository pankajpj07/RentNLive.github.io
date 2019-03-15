function addProject(e) {
  e.preventDefault()
  const projects = $('#project-container');
  var link=$('#pt').val();
  var title=$('#pl').val();
  var src=$('#pi').val();
  projects.append( `
    <div class="project">
      <a href="${ link }" target="_blank">
        <img src="${ src }" alt="${ title }" class="project-pic">
        <div class="">${ title }</div>
      </a>
    </div>
  ` );
}
