var BASE_VALUE_MULTIPLIER = 4;
window.__stats = function stats(){
    $('a').click(function(){
        var track_id = $(this).data('ti');
        var score = $(this).data('sc') * BASE_VALUE_MULTIPLIER;
        ga('send', 'event', 'links', 'click', track_id, score || 1);
    });
}

