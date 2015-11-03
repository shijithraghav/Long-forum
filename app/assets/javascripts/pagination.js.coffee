$(document).on 'ready page:load', ->

  if $('#infinite-scrolling').size() > 0
    console.log('hi')
    $(window).on 'scroll', ->

      more_posts_url = $('.pagination .next_page a').attr('href')


      if more_posts_url && $(window).scrollTop() > $(document).height() - $(window).height() - 60

        console.log(more_posts_url)
        $('.pagination').html('ldks')
        $.getScript more_posts_url
  return
  return
