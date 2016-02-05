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
	},
    onLeave: function(index, next, dir) {
      if (index == 1 && dir=='down') $('.logo-img').addClass('fixed');
      if (next == 1) $('.logo-img').removeClass('fixed');
    }
  });
  $('.serviced1').click(function() {
    $('#service1').addClass('opened');
  });
  $('.close').click(function() {
    $('.details').removeClass('opened');
  });
    $('.details').click(function() {
    $('.details').removeClass('opened');
  });
  $('#servicel1').click(function() {
    $('#service1 .details').addClass('opened');
  });
  $('#servicel2').click(function() {
    $('#service2 .details').addClass('opened');
  });
  var services = [
    {
      name: 'تحقیقات بازار',
      id: 'service1'
    },
    {
      name:'ارتباطات',
      id: 'service2'
    },
    {
      name: 'امور رسانه‌ای',
      id: 'service3'
    },
    {
      name: 'مدیریت محتوا',
      id: 'service4'
    }
  ];
});
  function loadServices () {
    var template = $('#services').html();
    var serviceTemplate = Mustache.render(template, services);
    console.log(serviceTemplate);
    $('#service-overview').html(serviceTemplate);
  }
