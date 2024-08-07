// Raccoglitore di variabili, eventi e funzioni
var R = R || { vars: {}, ev: {}, fun: {} };

// Path per l'accesso alle risorse web da browser (immagini, ecc.)
R.vars.assets = 'assets/';

// Decide se avviare il debug degli eventi in una console
R.vars.debug = false;

// Raccolta di funzioni da eseguire appena l'html della pagina è completamente caricato
R.ev.ready = function() {
 R.fun.console( 'ev.ready - start' );
 R.fun.patch();
 R.fun.carousel();
 R.fun.sameHeight( '.lancio-hp > .titolo', '.cols-4' );
 R.fun.sameHeight( '.lancio-hp > .descrizione', '.cols-4' );
 R.fun.sameHeight( '.sezione-hp > .titolo', '.cols-3' );
 R.fun.sameHeight( '.sezione-hp', '.cols-3' );
 R.fun.mainmenu();
 R.fun.form();
 R.fun.accordion();
 R.fun.console( 'ev.ready - end' );
};

// Raccolta di funzioni da eseguire a completamento del rendering della pagina
R.ev.load = function() {
 if( ! R.fun.isset( R.vars.ev_loaded ) ) {
  R.fun.console( 'ev.load - start' );
  R.vars.ev_loaded = true;
  R.fun.sameHeight( '.lancio-hp > .titolo', '.cols-4' );
  R.fun.sameHeight( '.lancio-hp > .descrizione', '.cols-4' );
  R.fun.sameHeight( '.sezione-hp > .titolo', '.cols-3' );
  R.fun.sameHeight( '.sezione-hp', '.cols-3' );
  R.fun.mainmenu();
  R.fun.console( 'ev.load - end' );
 }
};

// Raccolta di funzioni da eseguire sul ridimensionamento della finestra del browser
R.ev.resize = function() {
 if( R.fun.isset( R.vars.ev_loaded ) ) {
  R.fun.console( 'ev.resize - start' );
  R.fun.sameHeight( '.lancio-hp > .titolo', '.cols-4' );
  R.fun.sameHeight( '.lancio-hp > .descrizione', '.cols-4' );
  R.fun.sameHeight( '.sezione-hp > .titolo', '.cols-3' );
  R.fun.sameHeight( '.sezione-hp', '.cols-3' );
  R.fun.mainmenu();
  R.fun.console( 'ev.resize - end' );
 }
};

// Esegue modifiche e fix on the fly sul documento
R.fun.patch = function() {
 R.fun.console( 'fun.patch - start' );

 // Temporaneo: inibisce il click sui link e il submit nelle form quando non ancora definita una url reale
 $( 'a[href=#link]' ).live( 'click', function( ev ) { ev.preventDefault(); alert( 'Collegamento non definito' ); } );
 $( 'form[action=#link]' ).live( 'submit', function( ev ) { ev.preventDefault(); alert( 'Azione non definita' ); } );

 // Disabilita i click sui link con classe disabled
 $( '#main a.disabled' ).on( 'click', function( ev ) { ev.preventDefault(); } );

 // Patch ie (incrementale!)
 switch( browser ) {
  case 'ie7':
   $( '.cols-3, .cols-4, #main, #logo, #template.privata #logo .dx, #menu-principale, #main .paginazione' ).append( $( '<span>', { 'class': 'clearfix' } ) );
   $( '#footer li' ).not( ':last-child' ).append( $( '<span>', { 'class': 'fix-footer-li', text: '-' } ) );
   $( '#main .box .titolo' ).append( $( '<span>', { 'class': 'fix-box-titolo-after' } ) );
  case 'ie8':
   $( '#main .paginazione .pagine' ).each( function( index, element ) {
    $( 'a', $( element ) ).last().addClass( 'fix-paginazione-pagine-lastchild' );
   } );
   $( '#main .box .contenuto' ).each( function( index, element ) {
    $( '.riga', $( element ) ).last().addClass( 'fix-box-riga-lastchild' );
   } );
   $( '#main table.dati tbody tr:nth-child(odd)' ).addClass( 'fix-dati-tr-odd' );
   $( '#main table.dati tbody tr:nth-child(even)' ).addClass( 'fix-dati-tr-even' );
  case 'ie9':
   $( '#template' ).addClass( browser );
 }

 R.fun.console( 'fun.patch - stop' );
};

// Gestisce il carousel in home
R.fun.carousel = function() {
 if( R.fun.cssEnabled() ) {
  $( '#visore-hp .carousel' )
  .on( 'jcarousel:create', function( event, carousel ) {
   $( '#visore-hp .carousel > ul > li > a' ).attr( 'tabindex', '-1' );
   $( '#visore-hp .carousel > ul > li:first > a' ).removeAttr( 'tabindex' );
   R.fun.sameHeight( '.carousel-wrapper, .fisso', '#visore-hp' );
  } )
  .on( 'jcarousel:create jcarousel:reload', function( event, carousel ) {
   $( this ).jcarousel( 'items' ).css( { width: $( this ).innerWidth() + 'px' } );
  } )
  .on( 'jcarousel:targetin', 'li', function( event, carousel ) {
   $( '#visore-hp .carousel > ul > li > a' ).attr( 'tabindex', '-1' );
   $( '> a', $( this ) ).removeAttr( 'tabindex' );
  } )
  .jcarousel( { wrap: 'circular' } )
  .jcarouselAutoscroll( { autostart: true, interval: 20000 } )
  .touchwipe( {
   wipeLeft: function() { $( '#visore-hp .carousel' ).jcarousel( 'scroll', '+=1' ).jcarouselAutoscroll( 'stop' ); },
   wipeRight: function() { $( '#visore-hp .carousel' ).jcarousel( 'scroll', '-=1' ).jcarouselAutoscroll( 'stop' ); },
   min_move_x: 20, min_move_y: 20, preventDefaultEvents: false
  } );
  $( '#visore-hp .pagination' )
  .on( 'jcarouselpagination:active', 'a', function() {
   $( this ).addClass( 'active' );
  } )
  .on( 'jcarouselpagination:inactive', 'a', function() {
   $( this ).removeClass( 'active' );
  } )
  .jcarouselPagination();
  $( '#visore-hp .pagination a' ).live( 'click', function( ev ) {
   ev.preventDefault();
   $( '#visore-hp .carousel' ).jcarouselAutoscroll( 'stop' );
  } );
 }
};

// Gestisce la fluidità del menu principale
R.fun.mainmenu = function() {
 if( R.fun.cssEnabled() )
  if( $( '#menu-principale ul > li' ).size() ) {
   var padmin = 10;
   var items = $( '#menu-principale ul > li' ).size();
   var width = 0;
   $( '> a', $( '#menu-principale ul > li' ) ).css( { 'padding-right': padmin + 'px', 'padding-left': padmin + 'px' } );
   var twidth = $( '#menu-principale ul' ).width();
   $( '#menu-principale ul > li' ).each( function( index, element ) { width += $( element ).width(); } );
   var padding = Math.max( padmin, padmin + ( ( ( twidth - width ) / items ) / 2 ) );
   $( '> a', $( '#menu-principale ul > li' ) ).css( { 'padding-right': padding + 'px', 'padding-left': padding + 'px' } );
   while( ( padding > padmin ) && ( $( '> a', $( '#menu-principale ul > li' ) ).first().position().top < $( '> a', $( '#menu-principale ul > li' ) ).last().position().top ) ) {
    padding -= 1;
    $( '> a', $( '#menu-principale ul > li' ) ).last().css( { 'padding-right': padding + 'px', 'padding-left': padding + 'px' } );
   }
  }
};

// Gestisce le funzionalità dinamiche dei form
R.fun.form = function() {
 $( 'input.datepicker' ).datepicker( { showOn: 'button', buttonImage: R.vars.assets + 'img/btn/calendario.png', buttonImageOnly: true, buttonText: 'Seleziona una data', changeMonth: true, changeYear: true } );
 $( 'input#reg-dn.datepicker' ).datepicker( 'option', 'yearRange', 'c-90:c-18' );
 $( 'input[type=button].invio' ).on( 'click', function( ev ) {
  ev.preventDefault();
  $( this ).closest( 'form' ).submit();
 } );
};

// Ridimensiona le altezze dei box all'altezza maggiore
// selector: selettore di box
// root: contenitore dei box che avranno la stessa altezza
R.fun.sameHeight = function( selector, root ) {
 if( R.fun.cssEnabled() ) {
  R.fun.console( 'fun.sameHeight - start on: ' + root + ' ' + selector );
  $( root ).each( function( r_index, r_element ) {
   var max = 0;
   $( selector, $( r_element ) ).each( function( s_index, s_element ) {
    $( s_element ).css( { 'min-height': '' } );
    max = Math.max( max, $( s_element ).height() );
   } );
   $( selector, $( r_element ) ).css( { 'min-height': ( 1 + max ) + 'px' } );
   R.fun.console( 'fun.sameHeight - max height ' + ( 1 + r_index) + ': ' + max );
  } );
  R.fun.console( 'fun.sameHeight - end on: ' + root + ' ' + selector );
 }
};

// Determina se i css sono abilitati
R.fun.cssEnabled = function() {
 if( ! R.fun.isset( R.vars.cssEnabled ) ) {
  $( '<div>', { id: 'cssEnabled' } ).addClass( 'skip' ).appendTo( $( 'body' ) );
  R.vars.cssEnabled = $( '#cssEnabled' ).position().left < 0;
  $( '#cssEnabled' ).remove();
  R.fun.console( 'fun.cssEnabled - ' + R.vars.cssEnabled );
 }

 return R.vars.cssEnabled;
};

// Verifica se una variabile javascript è definita e valorizzata
// v: la variabile
R.fun.isset = function( v ) {
 return ( typeof v !== 'undefined' ) && ( v !== '' ) && ( v !== null );
};

// Scrive un testo nella console
// txt: il testo da scrivere
R.fun.console = function( txt ) {
 if( R.vars.debug && R.fun.isset( console ) && R.fun.isset( console.log ) ) {
  var now = new Date();
  console.log( '[' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds() + ':' + now.getMilliseconds() + '] ' + txt );
 }
};

/* Accordion
Per impostare un accordion si deve:
- impostare un div contenitore con la classe "accordion" (<div class="accordion">)
- impostare un link, all'interno di un paragrafo o di un titolo o ecc. con la classe  class="link_accordion" 
	(esempio: <h3><a href="#" class="link_accordion">Accordion1</a></h3>) 
- impostare la classe "aperto" per indicare il link da tenere aperto al primo caricamento della pagina
	(esempio: <h3><a href="#" class="link_accordion aperto">Accordion1</a></h3>)

Lo script setta gli attributi WAI-ARIA di default: 
 - aria-expanded="false" nel link / bottone da aprire / chiudere
 - aria-hidden="true" nel testo che viene aperto / chiuso
 - aria-controls="collapsible-(n)" del link collegato con id="collapsible-(n)" nel testo da aprire / chiudere
 
Nel caso si dovessero impostare le immagini per indicare aperto o chiuso utilizzare i CSS con:
 - la classe di default "link_accordion" per l'immagine "link chiuso"
 - la classe "aperto" per l'immagine "link aperto"       

*/
R.fun.accordion = function() {

  var ncontrols = 0;
  var allPanels = $('.accordion .testo_accordion').hide();
  
  $('.accordion a.link_accordion').each(function() {
		$(this).attr("aria-expanded","false");
		$(this).attr("aria-controls","collapsible-"+ncontrols);
		$(this).parent().next().attr("aria-hidden","true");
		$(this).parent().next().attr("id","collapsible-"+ncontrols);
		ncontrols++;
	});
        
  $('.accordion .link_accordion').on("click",function() {
	
	var id = $(this).parent().parent().attr('id');
	
	if(!isNotEmpty(id)){
		if($(this).attr("aria-expanded") == "true")
		{
			$(this).attr("aria-expanded","false");
			$(this).removeClass("aperto");
			$(this).parent().next().attr("aria-hidden","true");
		}
		else
		{
			$(this).attr("aria-expanded","true");
			$(this).addClass("aperto");
			$(this).parent().next().attr("aria-hidden","false");
//			$('.accordion a.link_accordion.aperto').trigger( "click" );
		}
	    $(this).parent().next().slideToggle();
	    return false;
	}else{
		if($(this).attr("aria-expanded") == "false"){
			$(this).attr("aria-expanded","true");
			$(this).addClass("aperto");
			$(this).parent().next().attr("aria-hidden","false");
			$(this).parent().next().slideToggle();
			
		}
		  return false;
	}
  });

  $('.accordion a.link_accordion.aperto').trigger( "click" );

};


//verifica che l'accordion sia popolato, escludendo i bottoni, checkbox,hidden, radio,  
//se contiene un valore in un input ritorna true altrimenti false
function isNotEmpty(id){
	var sezioneNonVuota = false;
	$.each($("#"+id +" :input"),function(index,value){	//Verificare le select se le considera
		var valore = $(value).val();
		if(($(value).attr("type")!="submit" 
			&& $(value).attr("type")!="checkbox" 
				&& $(value).attr("type")!="hidden" 
					&& $(value).attr("type")!="radio" 
						&& $(value).attr("type")!="button" )
							&&  valore != null && $.trim(valore)!='' ){
			
				sezioneNonVuota = true;
				return sezioneNonVuota;
		}
	});

	return sezioneNonVuota;
	}


// Eventi di inizializzazione
$( document ).ready( R.ev.ready );
$( window ).load( R.ev.load );
setTimeout( R.ev.load, 5000 );
R.vars.ev_resize = null;
$( window ).resize( function() {
 if( ! R.vars.ev_resize ) {
  R.vars.ev_resize = setTimeout( function() {
   R.ev.resize();
   R.vars.ev_resize = null;
  }, 200 );
 }
} );
