
const projects = [{
  title: 'Local Weather',
  link: 'www.slickotter.com/weather',
  img: './imgs/weather.jpg'
  },
  {
    title: 'Girls are icky',
    link: 'www.slickotter.com/gai',
    img: './imgs/gai.jpg'
  }
];

function showProjects () {
  const length = projects.length;
  let featured = Math.floor(Math.random() * length);
  console.log(projects[featured].title);
  const fff = document.getElementById('featured-project');
  fff.innerHTML = '<div><p><h2>'+ projects[featured].title +'</h2>' +
                  '<img class="img-responsive img-rounded" src="' + projects[featured].img + '" alt="featured project image"></p></div>'

}

showProjects();