var htmlNoData = '<div class="loader loader--style1" title="0">  NO DATA HERE...</div>';
var htmlLoading = '<div class="loader loader--style1" title="0">\n' +
  '        <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\n' +
  '             x="0px" y="0px"\n' +
  '             width="150px" height="150px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">\n' +
  '  <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946\n' +
  '    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634\n' +
  '    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>\n' +
  '          <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0\n' +
  '    C22.32,8.481,24.301,9.057,26.013,10.047z">\n' +
  '            <animateTransform attributeType="xml"\n' +
  '                              attributeName="transform"\n' +
  '                              type="rotate"\n' +
  '                              from="0 20 20"\n' +
  '                              to="360 20 20"\n' +
  '                              dur="0.5s"\n' +
  '                              repeatCount="indefinite"/>\n' +
  '          </path>\n' +
  '  </svg>\n' +
  '      </div>';
OverlayScrollbars(document.querySelectorAll('body'), {
  className : "os-theme-dark",
});
var ls = window.localStorage;
if(!ls.getItem('results'))ls.setItem('results',JSON.stringify([]));
if(!ls.getItem('currentFreeIndex'))ls.setItem('currentFreeIndex','0');
if(!ls.getItem('counters'))ls.setItem('counters',JSON.stringify({'empty':''}));
document.getElementById('instagram-container').innerHTML = htmlNoData;
Holder.addTheme("white", {
  bg: "#fff",
  fg: "#a7a7a7",
  size: 10
});
var ctrs = ls.getItem('counters');
ctrs = JSON.parse(ctrs);
for(i in Object.keys(ctrs)){
  var key = Object.keys(ctrs)[i];
  var value = ctrs[Object.keys(ctrs)[i]];
  if(key !== "empty"){
    var querySelector = "[value="+"'"+key+"'"+"]"
    $(querySelector).append('<span data-toggle="popover" data-trigger="hover" title="Last updated" data-content="' + 'Page refreshed!' + '" style="" class="badge pulse-default etl-badge" >' + value + '</span>');
  }
}
function ig_media_preview(base64data) {
  var jpegtpl = "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsaGikdKUEmJkFCLy8vQkc/Pj4/R0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0cBHSkpNCY0PygoP0c/NT9HR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR//AABEIABQAKgMBIgACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AA==",
    t = atob(base64data),
    p = t.slice(3).split(""),
    o = t.substring(0, 3).split("").map(function (e) {
      return e.charCodeAt(0)
    }),
    c = atob(jpegtpl).split("");
  c[162] = String.fromCharCode(o[1]);
  c[160] = String.fromCharCode(o[2]);
  return base64data ? "data:image/jpeg;base64," + btoa(c.concat(p).join("")) : null
};

function openNav(id) {
  //document.getElementById(id).style.backgroundColor = "#111";
  document.getElementById(id).style.width = "35%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav(id) {
  document.getElementById(id).style.width = "0";
}

function backNav() {
  var html = undefined;
  var currentFreeIndex = parseInt(ls.getItem('currentFreeIndex'));
  var results = JSON.parse(ls.getItem('results'));
  if (currentFreeIndex < 2) {
    $("#backbtn").hide();
  } else if (currentFreeIndex >= 2) {
    $("#backbtn").show();
    html = results[currentFreeIndex - 2].html;
    results = results.slice(0, currentFreeIndex - 1);
    currentFreeIndex--;
    ls.setItem('results',JSON.stringify(results));
    ls.setItem('currentFreeIndex',currentFreeIndex.toString())
    if (currentFreeIndex < 2) $("#backbtn").hide();
  }


  if (html !== undefined) document.getElementById('instagram-container').innerHTML = html;
  /*    $("#instagram-profile-container").hide();
      $("#instagram-profiles-container").hide();
      $("#instagram-post-container").hide();
      $("#instagram-posts-container").hide();*/
  /*$("#instagram-container").show();*/

}
function render(html, container){
  document.getElementById('social-sidepanel').style.backgroundColor = "#fff";
  OverlayScrollbars(document.getElementById('social-sidepanel'), {
    className : "os-theme-dark",
  });
  var index = parseInt(ls.getItem('currentFreeIndex'));
  var results = JSON.parse(ls.getItem('results'));
  var counters = JSON.parse(ls.getItem('counters'));
  results[index] = {html: html};

  document.getElementById('instagram-container').innerHTML = html;
  if (container !== 'main') {
    $("#backbtn").show();
  }

  index++;
  var currentVal = $('.disabled').val();
  /*if (currentVal) {
    currentVal = currentVal.replace('Loading... ', 'Get ');
  }*/

  $('.disabled').val(currentVal);
  $('.disabled').css('background-color', '#007bff');
  $('.disabled').find('#loading').remove();
  var doneDate = dayjs(Date.now()).format('YYYY MM-DD HH:mm:ss')
  //<span class="badge">7</span>
  $('.disabled').next().remove();
  $('.disabled').after('<span style="color:lawngreen;" class="glyphicon glyphicon-ok"></span>');
  var count = 0;
  if (counters[currentVal]) {
    if (counters[currentVal] >= 1) {
      count = counters[currentVal] + 1;
      counters[currentVal]++;
    } else {
      counters[currentVal] = 1;
      count = 1
    }
  } else {
    counters[currentVal] = 1;
    count = 1
  }
  if (count > 0) {
    $('.disabled').find('span').remove()
    $('.disabled').append('<span data-toggle="popover" data-trigger="hover" title="Last updated" data-content="' + doneDate + '" style="" class="badge pulse-default etl-badge" >' + count + '</span>');
  }
  var elem = $('.disabled').find('span');
  $(elem).popover();
  $('.disabled').removeClass('disabled');
  var optionsEngagement = {
    width:'150px',
    height:'40px',
    type: 'line',
    lineColor: '#e0c526',
    fillColor: '#e08e0b',
    lineWidth: 3,
    highlightLineColor: '#ffffff'
  };
  var optionsLikes = {
    width:'150px',
    height:'40px',
    type: 'line',
    lineColor: '#44ff6e',
    fillColor: '#21c936',
    lineWidth: 3,
    highlightLineColor: '#ffffff'
  };
  var optionsComments = {
    width:'150px',
    height:'40px',
    type: 'line',
    lineColor: '#003f7f',
    fillColor: '#5690c9',
    lineWidth: 3,
    highlightLineColor: '#ffffff'
  };
  var optionsSentiments = {
    width:'150px',
    height:'40px',
    type: 'line',
    lineColor: '#7f2e29',
    fillColor: '#c9424a',
    lineWidth: 3,
    highlightLineColor: '#ffffff'
  };
  engagementData =  $('#sparkline-data').attr('sparkline-data');
  likesData =  $('#sparkline-likes-data').attr('sparkline-data');
  commentsData =  $('#sparkline-comments-data').attr('sparkline-data');
  sentimentData =  $('#sparkline-likes-data').attr('sparkline-data');
  if(engagementData){
    engagementData = engagementData.split(',') || [];
    if(engagementData.length>=1){
      $('#sparkline').sparkline(engagementData, optionsEngagement)
    }
  }
  if(likesData){
    likesData = likesData.split(',') || [];
    if(likesData.length>=1){
      $('#sparkline-likes').sparkline(likesData, optionsLikes)
    }
  }
  if(commentsData){
    commentsData = commentsData.split(',') || [];
    if(commentsData.length>=1){
      $('#sparkline-comments').sparkline(commentsData, optionsComments)
    }
  }
  if(sentimentData){
    sentimentData = sentimentData.split(',') || [];
    if(sentimentData.length>=1){
      $('#sparkline-sentiments').sparkline(sentimentData, optionsSentiments)
    }
  }
  ls.setItem('results',JSON.stringify(results));
  ls.setItem('currentFreeIndex',index.toString());
  ls.setItem('counters',JSON.stringify(counters));
  /*  var myChart = echarts.init(document.getElementById('sparkline'));

    // specify chart configuration item and data
    var option = {
      title: {
        text: 'Engagement activity'
      },
      tooltip: {},
      legend: {
        data:['Engagement']
      },
      xAxis: {
        data: ["shirt","cardign","chiffon shirt","pants","heels","socks"]
      },
      yAxis: {},
      series: [{
        name: 'Engagement',
        type: 'bar',
        data: engagementData
      }]
    };

    // use configuration item and data specified to show chart
    myChart.setOption(option);*/
}
function norender(){
  closeNav('social-sidepanel');
  console.log('Did not provide all required input data');
  window.alert('please provide all required');
  //var currentVal = $('.disabled').val();
  //if (currentVal) currentVal = currentVal.replace('Loading... ', 'Get ');
  //$('.disabled').val(currentVal);
  $('#loading').remove();
  $('.disabled').css('background-color', '#007bff');
  //$('.disabled').next().remove();
  $('.disabled').removeClass('fired');
  $('.btn-primary').removeClass('fired');
  $('.btn-primary').removeClass('disabled');
}
function renderText(txt){
  var json = JSON.parse(txt);
  document.getElementById('username-input').value = json.username;
  document.getElementById('tag-input').value = json.tag;
  document.getElementById('location-input').value = json.location;
  document.getElementById('search-input').value = json.query;
  document.getElementById('count-input').value = json.count;
  document.getElementById('shortcode-input').value = json.shortcode;
  console.log(json);
}
function getEndpoint(endpoint, type, code, container) {
  $("#carosel").hide();
  $("#logo").show();
  if (type !== "form-data") {
    closeNav('social-sidepanel');
    openNav('social-sidepanel');
    document.getElementById('instagram-container').innerHTML = htmlLoading;
    var username = code.length>0 ? code : document.getElementById('username-input').value;
    var tag = code.length>0 ? code : document.getElementById('tag-input').value;
    var location = code.length>0 ? code : document.getElementById('location-input').value;
    var query = document.getElementById('search-input').value;
    var count = document.getElementById('count-input').value || 50;
    var shortcode = code.length>0 ? code : document.getElementById('shortcode-input').value;
    var url = endpoint;
    switch (type) {
      case 'profile':
        if (code) {
          if (code.length >= 3) {
            url = endpoint + code;
          } else {
            url = "NA";
          }
        } else if (username.length !== undefined) {
          if (username.length >= 3) {
            url = endpoint + username;
          } else {
            url = "NA";
          }
        }
        break
      case 'whoami':
        url = endpoint;
        break
      case 'recent-posts':
        if (username.length !== undefined) {
          if (username.length >= 3) {
            url = endpoint + 'username=' + username + '&' + 'count=' + count;
          } else {
            url = "NA";
          }
        }
        break
      case 'all-posts':
        if (username.length !== undefined) {
          if (username.length >= 3) {
            url = endpoint + 'username=' + username;
          } else {
            url = "NA";
          }
        }
        break

      case 'tag-posts':
        if (tag.length !== undefined) {
          if (tag.length >= 3) {
            url = endpoint + 'tag=' + tag + '&' + 'count=' + count;
          } else {
            url = "NA";
          }
        }
        break
      case 'location-posts':
        if (location.length !== undefined) {
          if (location.length >= 3) {
            url = endpoint + 'location=' + location + '&' + 'count=' + count;
          } else {
            url = "NA";
          }
        }
        break
      case 'user-following':
        if (username.length !== undefined) {
          if (username.length >= 3) {
            url = endpoint + 'username=' + username + '&' + 'count=' + count;
          } else {
            url = "NA";
          }
        }
        break
      case 'user-followers':
        if (username.length !== undefined) {
          if (username.length >= 3) {
            url = endpoint + 'username=' + username + '&' + 'count=' + count;
          } else {
            url = "NA";
          }
        }
        break
      case 'search-posts':
        if (query.length !== undefined) {
          if (query.length >= 3) {
            url = endpoint + 'query=' + query + '&' + 'count=' + count;
          } else {
            url = "NA";
          }
        }
        break
      case 'feed-posts':
        if (count !== undefined) {
          if (count >= 10) {
            url = endpoint + 'count=' + count;
          } else {
            url = "NA";
          }
        }
        break
      case 'all-feed-posts':
        break
      case 'post-likes':
        if (shortcode.length !== undefined) {
          if (shortcode.length >= 3) {
            url = endpoint + 'shortcode=' + shortcode + '&' + 'count=' + count;
          } else {
            url = "NA";
          }
        }
        break
      case 'post-comments':
        if (shortcode.length !== undefined) {
          if (shortcode.length >= 3) {
            url = endpoint + 'shortcode=' + shortcode + '&' + 'count=' + count;
          } else {
            url = "NA";
          }
        }
        break
      case 'post-json':
        if (code) {
          if (code.length >= 3) {
            url = endpoint + 'shortcode=' + code;
          } else {
            url = "NA";
          }
        } else if (shortcode.length !== undefined) {
          if (shortcode.length >= 3) {
            url = endpoint + 'shortcode=' + shortcode;
          } else {
            url = "NA";
          }
        }
        break
      case 'post-page':
        if (shortcode.length !== undefined) {
          if (shortcode.length >= 3) {
            url = endpoint + 'shortcode=' + shortcode;
          } else {
            url = "NA";
          }
        }
        break
      case 'sugg-posts':
        if (count !== undefined) {
          if (count >= 10) {
            url = endpoint + 'count=' + count;
          } else {
            url = "NA";
          }
        }
        break
      case 'sugg-people':
        if (count !== undefined) {
          if (count >= 10) {
            url = endpoint + 'count=' + count;
          } else {
            url = "NA";
          }
        }
        break
    }
    if (container === 'main') {
      ls.setItem('results',JSON.stringify([]));
      ls.setItem('currentFreeIndex','0');
      $("#backbtn").hide();
    }
    if (url !== "NA" && url.indexOf('http://') >= 0) {
      $('.fired').addClass('disabled');
      $('.disabled').removeClass('fired');
      $('.btn-primary').removeClass('fired');
      $('.disabled').css('background-color', '#e08e0b');
      $('.disabled').append('<span id="loading" class="spinner-grow spinner-grow-sm"></span>');
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onload = function (e) {
        var html = xhr.responseText;
       render(html,container);
      }
      xhr.send();
    }
    else {
      norender();
    }
  }
  else {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", endpoint, true);
    xhr.onload = function (e) {
      var txt = xhr.responseText;
      renderText(txt);
    }
    xhr.send();

  }

}

function carosel() {
  $("#powerpoint").carousel();
  // Enable Carousel Indicators
  $(".item").click(function () {
    $("#powerpoint").carousel(1);
  });
  // Enable Carousel Controls
  $(".carousel-control-prev").click(function () {
    $("#powerpoint").carousel("prev");
  });
}

function picit(item) {
  var pic = '';
  if (item.thumbnail_src) {
    pic = item.thumbnail_src;
  } else if (item.profile_pic_url) {
    pic = item.profile_pic_url;
  } else if (item.media_preview) {
    pic = item.media_preview;
    pic = ig_media_preview(pic);
  }
  return pic
}


$("#carosel").hide();
$("#logo").click(function () {
  $("#carosel").show();
  $("#logo").hide();
});
$("#github").click(function () {
  window.open('https://github.com/emg110/socialytics/', '_blank');
});

$('.btn-primary').on('click', function () {
  var endpoint = $(this).attr('click-target');
  var type = $(this).attr('call-type');
  if(type !== 'form-data') {
    //var currentVal = $(this).val().replace('Get ', 'Loading... ');
    //$(this).val(currentVal);
    $(this).addClass('fired');
    //$(this).find('span').remove();
  }
  getEndpoint(endpoint, type, '', 'main');
});

// Socket.io is exposed as the `io` global.
var socket = io('http://localhost:8080');
// @feathersjs/client is exposed as the `feathers` global.
var feathersClient = feathers().configure(feathers.socketio(socket));
var posts = feathersClient.service('/instagram/posts');
posts.on('created', (post) => {
  var caption = 'POST WITH NO CAPTION';
  var pic = picit(post);
  var title = 'Post:';
  if (post.edge_media_to_caption) {
    if (post.edge_media_to_caption.edges[0]) {
      caption = post.edge_media_to_caption.edges[0].node.text;
    }
  }

  $.notify({
    // options
    icon: pic,
    title: title,
    message: caption.substring(0, 100) + '...'
  }, {
    // settings
    type: 'info',
    delay: 8000,
    icon_type: 'src',
    template: '<div style="width:15%" data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
      '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
      '<span class="stack-span" data-notify="icon"></span> ' +
      '</br>'+
      '<span data-notify="title">{1}</span> ' +
      '<span data-notify="message">{2}</span>' +
      '</div>'
  });
  //console.log('message created', message);
});

var feeds = feathersClient.service('/instagram/feed');
feeds.on('created', (feed) => {
  var caption = 'FEED PROFILE WITH NO CAPTION';
  var pic = picit(feed);
  var title = 'Feed people:';
  if (feed.edge_media_to_caption) {
    if (feed.full_name.length > 1) {
      caption = feed.full_name;
    } else {
      caption = feed.username;
    }
  }

  $.notify({
    // options
    icon: pic,
    title: title,
    message: caption.substring(0, 100) + '...'
  }, {
    // settings
    type: 'info',
    delay: 8000,
    icon_type: 'src',
    template: '<div style="width:15%" data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
      '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
      '<span class="stack-span" data-notify="icon"></span> ' +
      '<span data-notify="title">{1}</span> ' +
      '<span data-notify="message">{2}</span>' +

      '</div>'
  });
  //console.log('message created', message);
});

var profiles = feathersClient.service('/instagram/profiles');
profiles.on('created', (profile) => {
  var caption = 'PROFILE WITH NO NAME';
  var title = 'Profile: ';
  var pic = picit(profile);
  if (profile.full_name) {
    caption = profile.full_name;
  } else {
    caption = profile.username;
  }
  $.notify({
    // options
    title: title,
    icon: pic,
    message: caption
  }, {
    // settings
    type: 'info',
    delay: 5000,
    icon_type: 'src',
  });
  //console.log('message created', message);
});

var searches = feathersClient.service('/instagram/search');
searches.on('created', (search) => {
  var result = 'Search results with: ';
  if (search.places) {
    result += '<span class="glyphicon glyphicon-map-marker"></span>'+ search.places.length + '  Places | ';
  }
  if (search.hashtags) {
    result += '<span class="glyphicon glyphicon-tags"></span>'+ search.hashtags.length + '  Hashtags | ';
  }
  if (search.users) {
    result += '<span class="glyphicon glyphicon-user"></span>'+ search.users.length + '  Users | ';
  }
  $.notify({
    // options
    icon: 'glyphicon glyphicon-search',
    message: result
  }, {
    // settings
    type: 'info',
    delay: 12000,
    icon_type: 'class',
  });
  //console.log('message created', message);
});

var medias = feathersClient.service('/instagram/media');
medias.on('created', (media) => {
  var caption = 'MEDIA WITH NO CAPTION';
  var pic = picit(media);
  var title = 'Post:';
  if (media.edge_media_to_caption) {
    if (media.edge_media_to_caption.edges[0]) {
      caption = media.edge_media_to_caption.edges[0].node.text;
    }
  }

  $.notify({
    // options
    icon: pic,
    title: title,
    message: caption
  }, {
    // settings
    type: 'info',
    delay: 8000,
    icon_type: 'src',
    template: '<div style="width:15%" data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
      '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
      '<span class="stack-span" data-notify="icon"></span> ' +
      '<span data-notify="title">{1}</span> ' +
      '<span data-notify="message">{2}</span>' +

      '</div>'
  });
  //console.log('message created', message);
});

var locations = feathersClient.service('/instagram/location');
locations.on('created', (post) => {
  var caption = 'LOCATION POST WITH NO CAPTION';
  var pic = picit(post);
  var title = 'Location post:';
  if (post.edge_media_to_caption) {
    if (post.edge_media_to_caption.edges[0]) {
      caption = post.edge_media_to_caption.edges[0].node.text;
    }
  }

  $.notify({
    // options
    icon: pic,
    title: title,
    message: caption
  }, {
    // settings
    type: 'info',
    delay: 8000,
    icon_type: 'src',
    template: '<div style="width:15%" data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
      '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
      '<span class="stack-span" data-notify="icon"></span> ' +
      '<span data-notify="title">{1}</span> ' +
      '<span data-notify="message">{2}</span>' +

      '</div>'
  });
  //console.log('message created', message);
});

var likes = feathersClient.service('/instagram/likes');
likes.on('created', (like) => {
  var caption = 'POST WITH NO CAPTION';
  var pic = picit(like);
  var title = 'Post:';
  if (like.full_name) {
    caption = like.full_name ? like.full_name.length > 0 : like.username
  }
  caption += ' liked this post';


  $.notify({
    // options
    icon: pic,
    title: title,
    message: caption
  }, {
    // settings
    type: 'info',
    delay: 8000,
    icon_type: 'src',
    template: '<div style="width:15%" data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
      '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
      '<span class="stack-span" data-notify="icon"></span> ' +
      '<span data-notify="title">{1}</span> ' +
      '<span data-notify="message">{2}</span>' +

      '</div>'
  });
  //console.log('message created', message);
});

var followers = feathersClient.service('/instagram/followers');
followers.on('created', (follower) => {
  var caption = 'FOLLOWER WITH NO NAME';
  var pic = picit(follower);
  var title = 'Follower: ';
  if (follower.full_name) {
    caption = follower.full_name ? follower.full_name.length > 0 : follower.username

  }
  caption += ' follows you!'


  $.notify({
    // options
    icon: pic,
    title: title,
    message: caption
  }, {
    // settings
    type: 'info',
    delay: 8000,
    icon_type: 'src',
    template: '<div style="width:15%" data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
      '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
      '<span class="stack-span" data-notify="icon"></span> ' +
      '<span data-notify="title">{1}</span> ' +
      '<span data-notify="message">{2}</span>' +

      '</div>'
  });
  //console.log('message created', message);
});

var followings = feathersClient.service('/instagram/following');
followings.on('created', (following) => {
  var caption = 'POST WITH NO CAPTION';
  var pic = picit(following);
  var title = 'Following: ';
  if (following.username) {
    caption = 'You follow ' + following.full_name.length > 1 ? following.full_name : following.username
  }

  $.notify({
    // options
    icon: pic,
    title: title,
    message: caption
  }, {
    // settings
    type: 'info',
    delay: 8000,
    icon_type: 'src',
    template: '<div style="width:15%" data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
      '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
      '<span class="stack-span" data-notify="icon"></span> ' +
      '<span data-notify="title">{1}</span> ' +
      '<span data-notify="message">{2}</span>' +

      '</div>'
  });
  //console.log('message created', message);
});


var comments = feathersClient.service('/instagram/comment');
comments.on('created', (comment) => {
  var caption = 'COMMENT WITH NO CAPTION';
  var pic = picit(comment);
  var title = 'Comment: ';
  if (comment.text) {
    if (comment.owner) {
      caption = comment.owner.username + ' commented: ' + comment.text;
    }
  }

  $.notify({
    // options
    icon: pic,
    title: title,
    message: caption
  }, {
    // settings
    type: 'info',
    delay: 8000,
    icon_type: 'src',
    template: '<div style="width:15%" data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
      '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
      '<span class="stack-span" data-notify="icon"></span> ' +
      '<span data-notify="title">{1}</span> ' +
      '<span data-notify="message">{2}</span>' +

      '</div>'
  });
  //console.log('message created', message);
});

var tags = feathersClient.service('/instagram/tag');
tags.on('created', (post) => {
  var caption = 'TAG POST WITH NO CAPTION';
  var pic = picit(post);
  var title = 'Tag post: ';
  if (post.edge_media_to_caption) {
    if (post.edge_media_to_caption.edges[0]) {
      caption = post.edge_media_to_caption.edges[0].node.text;
    }
  }

  $.notify({
    // options
    icon: pic,
    title: title,
    message: caption
  }, {
    // settings
    type: 'info',
    delay: 8000,
    icon_type: 'src',
    template: '<div style="width:15%" data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
      '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
      '<span class="stack-span" data-notify="icon"></span> ' +
      '<span data-notify="title">{1}</span> ' +
      '<span data-notify="message">{2}</span>' +

      '</div>'
  });
  //console.log('message created', message);
});
