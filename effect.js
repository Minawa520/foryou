$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){

	$('#turn_on').click(function(){
		var audio = $('.song')[0];
        audio.play();
		$('body').addClass('peach')
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#story').click(function(){
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').promise().done(function(){
            $('.message').fadeIn('slow');
        });
    
        var i;

        function msgLoop (i) {
            $("p:nth-child("+i+")").fadeOut('slow').delay(1700).promise().done(function(){
            i=i+1;
            $("p:nth-child("+i+")").fadeIn('slow').delay(1900);
            if(i==21){
                $("p:nth-child(20)").fadeOut('slow').promise().done(function () {
                    $('.cake').fadeIn('fast');
                });
            
            }
            else{
                msgLoop(i);
            }			

        });
            // body...
        }
    
        msgLoop(0);
    
    });
});

