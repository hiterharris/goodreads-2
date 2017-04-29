$(document).ready(function(){
  $('.toggle-current').hide();

  $('.toggle-current-button').click(function(){
    $('.toggle-current').slideToggle('slow');
  })
});

$(document).ready(function(){
  $('.toggle-queue').hide();

  $('.toggle-queue-button').click(function(){
    $('.toggle-queue').slideToggle('slow');
  })
});

$(document).ready(function(){
  $('.toggle-read').hide();

  $('.toggle-read-button').click(function(){
    $('.toggle-read').slideToggle('slow');
  })
});

// Handlebars ------------------------
$(function () {
  var source = $("#top-book").html();
  var template = Handlebars.compile(source);

  var context = {
    books: [{
      title: 'Killing Lincoln',
      author: 'Bill O\'Reily',
      cover: 'killinglincoln'
    },{
        title: 'War and Peace',
        author: 'Leo Tolstoy',
        cover: 'warandpeace'
    },{
        title: 'The Road',
        author: 'Cormac McCarthy',
        cover: 'theroad'
    },{
        title: 'White Fang',
        author: 'Jack London',
        cover: 'whitefang'
    },{
        title: 'Heart of Darkness',
        author: 'Joseph Conrad',
        cover: 'heartofdarkness'
    },{
        title: 'Harry Potter',
        author: 'JK Rowling',
        cover: 'harrypotter'
    },{
        title: 'Great Expectations',
        author: 'Charles Dickens',
        cover: 'greatexpectations'
    },{
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        cover: 'greatgatsby'
    },{
        title: 'The Outsiders',
        author: 'S.E. Hinton',
        cover: 'theoutsiders'
    }]
  };


  var compiled = template(context);
  $('.top-reads').append(compiled);
});
