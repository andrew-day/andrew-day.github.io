$(function documentReady() {

  var f;

  window.UISearch = {
    settings: {
      container: $( '.search-container' ),
      inputEl: document.querySelector( 'form > input#s' ),
      clearSearch: $( "#clear-search" )
    },

    init: function() {
      f = this.settings;
      this.bindUIActions();
    },

    bindUIActions: function () {
      f.container.on( "click", function(event) {
        event.stopPropagation();
        if ( !f.container.hasClass( 'search-container-open' ) ) {
          event.preventDefault();
          UISearch.open();

        } 
        else if ( f.container.hasClass( 'search-container-open' )  && /^\s*$/.test( f.inputEl.value ) ) {
          event.preventDefault();
          UISearch.close();
        }
      });

      f.clearSearch.on( 'click', function(event) {
        event.stopPropagation();
        UISearch.close();

      });

      if (f.inputEl.addEventListener){
        f.inputEl.addEventListener( 'click', function( ev ) { ev.stopPropagation(); }); }
      else if (f.inputEl.attachEvent){
        f.inputEl.attachEvent( 'click', function( ev ) { ev.returnValue = false; }); }

    },

    open: function() {
      f.container.addClass( 'search-container-open' );
      f.inputEl.focus();
      $( '.site-header a' ).addClass( 'suppress-nav' );
      $( 'body' ).on( 'click', UISearch.bodyFn );

    },

    close: function() {
      //abort http request if its responding slow
      //as is a global object instantiated in the plugin php file
      // if(as.gAjax.req) {
      //   as.gAjax.req.abort();
      // }
      f.inputEl.value = '';
      f.inputEl.blur();
      $( '.site-header a' ).removeClass( 'suppress-nav' );
      f.container.removeClass( 'search-container-open' );
      // if (document.getElementById("as_s")) {
      //   var autosearchbox = document.getElementById("as_s");
      //   autosearchbox.parentNode.removeChild(autosearchbox);
      // }
    },

    bodyFn: function() {
      UISearch.close();
      $( 'body' ).off( 'click', UISearch.bodyFn );
    }

  };

  UISearch.init();

});