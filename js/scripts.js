$(document).ready(function () {
    var options1 = {
    }
    var options2 = {
        caption:    false,
        navigation: 'permanent',
        direction:  'left'
    }
    var options3 = {
        caption:    'permanent',
        opacity:    1
    }

    $('.ppy').popeye(options1);
});

$('.ppy').click(function()
{
    //FIND SIZE OF SHOWN IMAGE
    var width = 0;
    //get the background-image path
    var path = $(this).find('.ppy-stage').css('background-image').replace('url', '').replace('(', '').replace(')', '').replace('"', '').replace('"', '');
    //write HTML for the image
    var tempImg = '<img id="tempImg" src="' + path + '"/>';
    // add to DOM before </body>
    $('body').append(tempImg);
    //hide image
    $('#tempImg').hide();
    //get width
    width = $('#tempImg').width();
    //remove from DOM
    $('#tempImg').remove();
    
    //RESIZE PLACEHOLDER TO MATCH IMAGE
    //if not large
    if( $(this).hasClass('ppy-expanded'))
        {
            $(this).parent().width(262);
        }
    
    //if large
    else
    {
        console.log(width);
        $(this).parent().width(width);
    }
});