function addProject() {
  const projects = $('#project-container');
  var link="pankajpj07.github.io";
  var title="New Project";
  src="images/epms.jpg";
  projects.append( `
    <div class="project">
      <a href="${ link }" target="_blank">
        <img src="${ src }" alt="${ title }" class="project-pic">
        <div class="">${ title }</div>
      </a>
    </div>
  ` );
}
