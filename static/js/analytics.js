window.__stats = function stats(){
    $('a').click(function(){
        var track_id = $(this).data('ti');
        var score = $(this).data('sc');
        ga('send', 'event', 'links', 'click', track_id, score || 1);
    });
}

