// Used to scrape Lamp items from bright33.com website
/*** currently provides incorrect group / items **/
JSON.stringify($('.team.boxed-grey','#fixtures').map(function() {
  var h5 = $('h5',this)[0];
  return {
    "title": $(h5).text(),
    "subtitle": (function() {
      if(h5.nextSibling&&h5.nextSibling.data&&h5.nextSibling.data.trim().length) return h5.nextSibling.data.trim();
      return $(h5).parent('a')[0].nextSibling.data&&$(h5).parent('a')[0].nextSibling.data.trim();
    }).apply(this),
    "group":!!$(h5).text().match(/\&/),
    "image": { "src": $('img',this).attr('src') },
    "id": $('a', this).first().attr('href').slice(1),
    "items": !!$(h5).text().match(/\&/) ?
      $('h5',$('a',this).first().attr('href')).map(function() { var href = $(this).parent('a').attr('href'); return !!href ? href.slice(1) : href; }).toArray()
      :  [$('a', this).first().attr('href').slice(1)]
  }
}).toArray());
