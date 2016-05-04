$( document ).ready(function() {

  var source   = $("#photo-template").html();
  var template = Handlebars.compile(source);

  var data = { photos: [
      {url: "http://placehold.it/1800x1200", thumbnail: "https://static.pexels.com/photos/70737/pexels-photo-70737-large.jpeg" },
      {url: "http://placehold.it/1800x1200", thumbnail: "https://static.pexels.com/photos/70737/pexels-photo-70737-large.jpeg" },
      {url: "http://placehold.it/1800x1200", thumbnail: "https://static.pexels.com/photos/70737/pexels-photo-70737-large.jpeg" },
      {url: "http://placehold.it/1800x1200", thumbnail: "https://static.pexels.com/photos/70737/pexels-photo-70737-large.jpeg" },
      {url: "http://placehold.it/1800x1200", thumbnail: "https://static.pexels.com/photos/70737/pexels-photo-70737-large.jpeg" },
      {url: "http://placehold.it/1800x1200", thumbnail: "https://static.pexels.com/photos/70737/pexels-photo-70737-large.jpeg" },
      {url: "http://placehold.it/1800x1200", thumbnail: "https://static.pexels.com/photos/70737/pexels-photo-70737-large.jpeg" },
      {url: "http://placehold.it/1800x1200", thumbnail: "https://static.pexels.com/photos/70737/pexels-photo-70737-large.jpeg" },
      {url: "http://placehold.it/1800x1200", thumbnail: "https://static.pexels.com/photos/70737/pexels-photo-70737-large.jpeg" },
      {url: "http://placehold.it/1800x1200", thumbnail: "https://static.pexels.com/photos/70737/pexels-photo-70737-large.jpeg" },
      {url: "http://placehold.it/1800x1200", thumbnail: "https://static.pexels.com/photos/70737/pexels-photo-70737-large.jpeg" },
      {url: "http://placehold.it/1800x1200", thumbnail: "https://static.pexels.com/photos/70737/pexels-photo-70737-large.jpeg" },
      {url: "http://placehold.it/1800x1200", thumbnail: "https://static.pexels.com/photos/70737/pexels-photo-70737-large.jpeg" },
      {url: "http://placehold.it/1800x1200", thumbnail: "https://static.pexels.com/photos/70737/pexels-photo-70737-large.jpeg" },
      {url: "http://placehold.it/1800x1200", thumbnail: "https://static.pexels.com/photos/70737/pexels-photo-70737-large.jpeg" },
      {url: "http://placehold.it/1800x1200", thumbnail: "https://static.pexels.com/photos/70737/pexels-photo-70737-large.jpeg" },
      {url: "http://placehold.it/1800x1200", thumbnail: "https://static.pexels.com/photos/70737/pexels-photo-70737-large.jpeg" },
      {url: "http://placehold.it/1800x1200", thumbnail: "https://static.pexels.com/photos/70737/pexels-photo-70737-large.jpeg" },
    ]};

  $("#grid-container").html(template(data));



  $( window ).load(function() {
    $('.grid').isotope({
      percentPosition: true,
      itemSelector: '.item',
      masonry: {
        columnWidth: '.item'
      }
    });
  });

});
