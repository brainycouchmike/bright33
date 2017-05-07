$(".container.well .row").map(function() {
  return {
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
      }),
      subtitles: $('.media-heading', this).map(function () {
        var nextSib = this;
        var data = [];
        while(!(nextSib = nextSib.nextSibling).data || nextSib.data.toString().replace(/\s/g,'').length) {
          if(nextSib.data) data.push($.trim(nextSib.data));
        }
        return [data];
      })
    }
  };
});
