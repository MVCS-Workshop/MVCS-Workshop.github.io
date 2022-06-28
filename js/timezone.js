function setTimezone(tz) {
    options = {
        timeZone: tz,
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }
    block_options = {
        timeZone: tz,
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }
    schedule = {
        "#intro_start": new Date(Date.parse("23 Oct 08:45:00 Israel")),
        "#intro_end": new Date(Date.parse("23 Oct 09:00:00 Israel")),

        "#sec1_talk1_start": new Date(Date.parse("23 Oct 09:00:00 Israel")),
        "#sec1_talk1_end": new Date(Date.parse("23 Oct 09:30:00 Israel")),

        "#sec1_talk2_start": new Date(Date.parse("23 Oct 09:30:00 Israel")),
        "#sec1_talk2_end": new Date(Date.parse("23 Oct 10:00:00 Israel")),

        "#sec1_talk3_start": new Date(Date.parse("23 Oct 10:00:00 Israel")),
        "#sec1_talk3_end": new Date(Date.parse("23 Oct 10:30:00 Israel")),

        "#break1_start": new Date(Date.parse("23 Oct 10:30:00 Israel")),
        "#break1_end": new Date(Date.parse("23 Oct 11:45:00 Israel")),

        "#challenge1_start": new Date(Date.parse("23 Oct 10:45:00 Israel")),
        "#challenge1_end": new Date(Date.parse("23 Oct 11:25:00 Israel")),

        "#challenge2_start": new Date(Date.parse("23 Oct 11:25:00 Israel")),
        "#challenge2_end": new Date(Date.parse("23 Oct 12:05:00 Israel")),

        "#lunch_start": new Date(Date.parse("23 Oct 12:05:00 Israel")),
        "#lunch_end": new Date(Date.parse("23 Oct 12:30:00 Israel")),

        "#challenge3_start": new Date(Date.parse("23 Oct 12:30:00 Israel")),
        "#challenge3_end": new Date(Date.parse("23 Oct 13:10:00 Israel")),

        "#challenge4_start": new Date(Date.parse("23 Oct 13:10:00 Israel")),
        "#challenge4_end": new Date(Date.parse("23 Oct 13:50:00 Israel")),

        "#challenge5_start": new Date(Date.parse("23 Oct 13:50:00 Israel")),
        "#challenge5_end": new Date(Date.parse("23 Oct 14:30:00 Israel")),

        "#break2_start": new Date(Date.parse("23 Oct 14:30:00 Israel")),
        "#break2_end": new Date(Date.parse("23 Oct 14:45:00 Israel")),

        "#sec2_talk1_start": new Date(Date.parse("23 Oct 14:45:00 Israel")),
        "#sec2_talk1_end": new Date(Date.parse("23 Oct 15:15:00 Israel")),

        "#sec2_talk2_start": new Date(Date.parse("23 Oct 15:15:00 Israel")),
        "#sec2_talk2_end": new Date(Date.parse("23 Oct 15:45:00 Israel")),

        "#sec2_talk3_start": new Date(Date.parse("23 Oct 15:45:00 Israel")),
        "#sec2_talk3_end": new Date(Date.parse("23 Oct 16:15:00 Israel")),

        "#panel_start": new Date(Date.parse("23 Oct 2022 16:15:00 Israel")),
        "#panel_end": new Date(Date.parse("23 Oct 2022 17:00:00 Israel")),

    }
    // blocks = {
    //   "#sec1_start" : new Date(Date.parse("28 Oct 2021 07:10:00 PDT")),
    //   "#sec1_end" : new Date(Date.parse("28 Oct 2021 09:05:00 PDT")),

    //   "#sec2_start" : new Date(Date.parse("28 Oct 2021 09:10:00 PDT")),
    //   "#sec2_end" : new Date(Date.parse("28 Oct 2021 11:05:00 PDT")),

    //   "#sec3_start" : new Date(Date.parse("28 Oct 2021 12:30:00 PDT")),
    //   "#sec3_end" : new Date(Date.parse("28 Oct 2021 14:25:00 PDT")),

    //   "#sec4_start" : new Date(Date.parse("28 Oct 2021 14:30:00 PDT")),
    //   "#sec4_end" : new Date(Date.parse("28 Oct 2021 16:25:00 PDT")),

    //   "#poster1_start" : new Date(Date.parse("28 Oct 2021 11:10:00 PDT")),
    //   "#poster1_end" : new Date(Date.parse("28 Oct 2021 11:40:00 PDT")),

    //   "#poster2_start" : new Date(Date.parse("28 Oct 2021 17:30:00 PDT")),
    //   "#poster2_end" : new Date(Date.parse("28 Oct 2021 18:00:00 PDT")),

    //   "#panel_start" : new Date(Date.parse("28 Oct 2021 16:30:00 PDT")),
    //   "#panel_end" : new Date(Date.parse("28 Oct 2021 17:25:00 PDT")),
    // }
    var keys = Object.keys(schedule)
    for (var i = 0; i < keys.length; ++i) {
        $(keys[i]).html(schedule[keys[i]].toLocaleString(navigator.language, options))
    }
    // var keys = Object.keys(blocks)
    // for (var i = 0; i < keys.length; ++i) {
    //   $(keys[i]).html("<b>" + blocks[keys[i]].toLocaleString(navigator.language, block_options) + "</b>")
    // }
}
$('select').timezones();
$('select').change(function () {
    setTimezone($('select').val())
});
$(document).ready(function () {
    setTimezone($('select').val())
})
