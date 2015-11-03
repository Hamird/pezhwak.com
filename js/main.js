$(document).ready(function() {
  $('#pagepiling').pagepiling({
    // sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke'],
    menu: '#menu',
    anchors: ['page1', 'page2', 'page3', 'page4'],
    navigation: false,
    // {
    //   'position': 'right',
    //   'tooltips': ['First section', 'Second section', 'Third section', 'Fourth section']
    // },
	afterRender: function(){
	  $('#pp-nav').addClass('custom');
	},
	afterLoad: function(anchorLink, index){
	  if(index>1){
		$('#pp-nav').removeClass('custom');
	  }else{
		$('#pp-nav').addClass('custom');
	  }
	}
  });
  $('.service').click(function() {
    $('#section2 .details').addClass('opened');
  });
  $('.close').click(function() {
    $('.details').removeClass('opened');
  });
});
