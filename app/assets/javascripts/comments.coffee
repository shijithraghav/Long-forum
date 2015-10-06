# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/



$(document).on 'ready page:load', ->
  $('#comment-tags').tagit
    fieldName:     'comment[tag_list]'
    singleField:   true
    availableTags: gon.available_tags

  if gon.article_tags?
    for tag in gon.article_tags
      $('#comment-tags').tagit 'createTag', tag
