function addProject() {
  
  const projects = $('#project-container');
  var link=document.getElementById("pt").value;
  var title=document.getElementById("pl").value;
  var src=document.getElementById("pi").value;
  projects.append( `
    <div class="project">
      <a href="${ link }" target="_blank">
        <img src="${ src }" alt="${ title }" class="project-pic">
        <div class="">${ title }</div>
      </a>
    </div>
  ` );
}
