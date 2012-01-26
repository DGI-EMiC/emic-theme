(function($) {

  // open external links in new window
  Drupal.behaviors.externalLink = function(context) {   
    $("a[href^=http]").each(function () {
      if (this.href.indexOf(location.hostname) == -1) {
        $(this).click(function () {
          window.open(this.href);
          return false;
        });
      }
    });
  }

  // Islandora simple search value
  Drupal.behaviors.islandoraSearchVal = function (context) {

    $('#header #edit-islandora-simple-search-query', context).val(Drupal.t('Repository Search'));

    $('#header #edit-islandora-simple-search-query', context).focus(function() {

        if ($(this).val() == Drupal.t('Repository Search')) $(this).val('');

    });

    $('#header #edit-islandora-simple-search-query', context).blur(function() {

        if ($(this).val() == '') $(this).val(Drupal.t('Repository Search'));

    });
  };
  
}(jQuery));