
// Open toggle-header automatically if referred to in URL

function open_toggle_headers_on_hash() {
  jQuery('.toggle-header').each(function() {
    var hash = window.location.hash.substr(1);
    var self = jQuery(this);
    if (self[0].id.length > 0 && self[0].id == hash) {
      setTimeout(function() {
        self.toggleClass("open");
        self.next('.toggle-content').toggle('400');
      }, 200);
    }
  });
}

function close_all_toggle_headers() {
  jQuery('.toggle-header').each(function() {
    var self = jQuery(this);
    self.removeClass("open");
    self.next('.toggle-content').hide('400');
  });
}

jQuery(window).on('hashchange', function() { 
  close_all_toggle_headers();
  open_toggle_headers_on_hash();
});
jQuery(open_toggle_headers_on_hash);
