# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).on 'ready page:load', ->
 $('#article-tags').tagit
   fieldName:     'article[tag_list]'
   singleField:   true
   availableTags: gon.available_tags
   console.log ($('#article-tags'))

 if gon.article_tags?
   for tag in gon.article_tags
     $('#article-tags').tagit 'createTag', tag
->
  $('.tags_with_autocomplete').autocomplete
    minLength: 2
    source: (request, response) ->
      $.ajax
        url: $('.tags_with_autocomplete').data('autocompleteurl')
        dataType: "json"
        data:
          name: request.term
        success: (data) ->
          response(data)
