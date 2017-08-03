// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require ./theme/bootstrap.min.js
//= require ./theme/jquery.min.js
//= require ./theme/jquery.growl.js
//= require turbolinks
//= require_tree .

var flash_msg = function(){
  if ($(".flash_notification").length > 0) {

    var flash =  $(".flash_notification").first();

    $.growl({
      title: '',
      message: flash.attr('data-msg'),
      url: ''
    },{
      element: 'body',
      type: flash.attr('data-type'),
      allow_dismiss: true,
      placement: {
          from: 'top',
          align: 'center'
      },
      offset: {
          x: 30,
          y: 30
      },
      spacing: 10,
      z_index: 1031,
      delay: 2500,
      timer: 1000,
      url_target: '_blank',
      mouse_over: false,
      animate: {
          enter: 'animated fadeInDown',
          exit: 'animated fadeOutUp'
      },
      icon_type: 'class',
      template: '<div data-growl="container" class="alert" role="alert">' +
      '<button type="button" class="close" data-growl="dismiss">' +
      '<span aria-hidden="true">&times;</span>' +
      '<span class="sr-only">Close</span>' +
      '</button>' +
      '<span data-growl="icon"></span>' +
      '<span data-growl="title"></span>' +
      '<span data-growl="message"></span>' +
      '<a href="#" data-growl="url"></a>' +
      '</div>'
    });
  }
}

$(document).ready(function () {
  flash_msg();
  });