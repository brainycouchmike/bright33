JSON.stringify($(".container.well .row").map(function() {
  var id = $(this).parents('section').attr('id');
  return {
    id: id,
    title:$("[href='#"+id+"']").text().trim(),
    subtitle: $("[href='#"+id+"']").eq(1)[0].nextSibling&&$("[href='#"+id+"']").last()[0].nextSibling.data.trim(),
    image: {
      src: $('.media img',this).attr('src'),
      alt: $('.media img',this).attr('alt')
    },
    heading: {
      image: {
        src: $('.media-heading img', this).attr('src'),
        width: $('.media-heading img', this).attr('width'),
        height: $('.media-heading img', this).attr('height'),
        alt: $('.media-heading img', this).attr('alt')
      },
      titles: $('.media-heading', this).map(function () {
        return $(this).text().trim();
      }).toArray(),
      subtitles: $('.media-heading', this).map(function () {
        var nextSib = this;
        var data = [];
        while(!(nextSib = nextSib.nextSibling).data || nextSib.data.toString().replace(/\s/g,'').length) {
          if(nextSib.data) data.push($.trim(nextSib.data));
        }
        return [data];
      }).toArray()
    },
    detail: {
      image: {
        src: $('.media-heading', this).last().siblings('img').attr('src'),
        alt: $('.media-heading', this).last().siblings('img').attr('alt')
      },
      text: $('.media-heading', this).last().siblings('img').first()[0].previousSibling&&
      $('.media-heading', this).last().siblings('img').first()[0].previousSibling.data.trim(),
      table: $('table', this)[0].outerHTML
    }

  };
}).toArray());
