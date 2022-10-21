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
        "#intro_start": new Date(Date.parse("23 Oct 08:45:00 JDT")),
        "#intro_end": new Date(Date.parse("23 Oct 09:00:00 JDT")),

        "#sec1_talk1_start": new Date(Date.parse("23 Oct 09:00:00 JDT")),
        "#sec1_talk1_end": new Date(Date.parse("23 Oct 09:30:00 JDT")),

        "#sec1_talk2_start": new Date(Date.parse("23 Oct 09:30:00 JDT")),
        "#sec1_talk2_end": new Date(Date.parse("23 Oct 10:00:00 JDT")),

        "#sec1_talk3_start": new Date(Date.parse("23 Oct 10:00:00 JDT")),
        "#sec1_talk3_end": new Date(Date.parse("23 Oct 10:30:00 JDT")),

        "#break1_start": new Date(Date.parse("23 Oct 10:30:00 JDT")),
        "#break1_end": new Date(Date.parse("23 Oct 10:45:00 JDT")),

        "#challenge1_start": new Date(Date.parse("23 Oct 10:45:00 JDT")),
        "#challenge1_end": new Date(Date.parse("23 Oct 11:05:00 JDT")),

        "#challenge1_public_start": new Date(Date.parse("23 Oct 11:05:00 JDT")),
        "#challenge1_public_end": new Date(Date.parse("23 Oct 11:25:00 JDT")),

        "#challenge1_private_start": new Date(Date.parse("23 Oct 11:25:00 JDT")),
        "#challenge1_private_end": new Date(Date.parse("23 Oct 11:45:00 JDT")),

        "#lunch_start": new Date(Date.parse("23 Oct 11:45:00 JDT")),
        "#lunch_end": new Date(Date.parse("23 Oct 12:20:00 JDT")),

        "#challenge2_start": new Date(Date.parse("23 Oct 12:20:00 JDT")),
        "#challenge2_end": new Date(Date.parse("23 Oct 12:40:00 JDT")),

        "#challenge2_talk_start": new Date(Date.parse("23 Oct 12:40:00 JDT")),
        "#challenge2_talk_end": new Date(Date.parse("23 Oct 13:00:00 JDT")),

        "#challenge2_leaderboard_talk1_start": new Date(Date.parse("23 Oct 13:00:00 JDT")),
        "#challenge2_leaderboard_talk1_end": new Date(Date.parse("23 Oct 13:20:00 JDT")),

        "#challenge2_leaderboard_talk2_start": new Date(Date.parse("23 Oct 13:20:00 JDT")),
        "#challenge2_leaderboard_talk2_end": new Date(Date.parse("23 Oct 13:40:00 JDT")),

        "#challenge3_start": new Date(Date.parse("23 Oct 13:40:00 JDT")),
        "#challenge3_end": new Date(Date.parse("23 Oct 14:00:00 JDT")),

        "#challenge4_start": new Date(Date.parse("23 Oct 14:00:00 JDT")),
        "#challenge4_end": new Date(Date.parse("23 Oct 14:20:00 JDT")),

        "#challenge4_talk_start": new Date(Date.parse("23 Oct 14:20:00 JDT")),
        "#challenge4_talk_end": new Date(Date.parse("23 Oct 14:40:00 JDT")),

        "#break2_start": new Date(Date.parse("23 Oct 14:40:00 JDT")),
        "#break2_end": new Date(Date.parse("23 Oct 14:45:00 JDT")),

        "#sec2_talk1_start": new Date(Date.parse("23 Oct 14:45:00 JDT")),
        "#sec2_talk1_end": new Date(Date.parse("23 Oct 15:15:00 JDT")),

        "#sec2_talk2_start": new Date(Date.parse("23 Oct 15:15:00 JDT")),
        "#sec2_talk2_end": new Date(Date.parse("23 Oct 15:45:00 JDT")),

        "#sec2_talk3_start": new Date(Date.parse("23 Oct 15:45:00 JDT")),
        "#sec2_talk3_end": new Date(Date.parse("23 Oct 16:15:00 JDT")),

        "#break3_start": new Date(Date.parse("23 Oct 16:15:00 JDT")),
        "#break3_end": new Date(Date.parse("23 Oct 16:20:00 JDT")),

        "#challenge5_start": new Date(Date.parse("23 Oct 16:20:00 JDT")),
        "#challenge5_end": new Date(Date.parse("23 Oct 16:40:00 JDT")),

        "#challenge6_start": new Date(Date.parse("23 Oct 16:40:00 JDT")),
        "#challenge6_end": new Date(Date.parse("23 Oct 17:00:00 JDT")),

    }
    // blocks = {
    //   "#sec1_start" : new Date(Date.parse("28 Oct 2021 07:10:00 IST")),
    //   "#sec1_end" : new Date(Date.parse("28 Oct 2021 09:05:00 IST")),

    //   "#sec2_start" : new Date(Date.parse("28 Oct 2021 09:10:00 IST")),
    //   "#sec2_end" : new Date(Date.parse("28 Oct 2021 11:05:00 IST")),

    //   "#sec3_start" : new Date(Date.parse("28 Oct 2021 12:30:00 IST")),
    //   "#sec3_end" : new Date(Date.parse("28 Oct 2021 14:25:00 IST")),

    //   "#sec4_start" : new Date(Date.parse("28 Oct 2021 14:30:00 IST")),
    //   "#sec4_end" : new Date(Date.parse("28 Oct 2021 16:25:00 IST")),

    //   "#poster1_start" : new Date(Date.parse("28 Oct 2021 11:10:00 IST")),
    //   "#poster1_end" : new Date(Date.parse("28 Oct 2021 11:40:00 IST")),

    //   "#poster2_start" : new Date(Date.parse("28 Oct 2021 17:30:00 IST")),
    //   "#poster2_end" : new Date(Date.parse("28 Oct 2021 18:00:00 IST")),

    //   "#panel_start" : new Date(Date.parse("28 Oct 2021 16:30:00 IST")),
    //   "#panel_end" : new Date(Date.parse("28 Oct 2021 17:25:00 IST")),
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
$('#tz_select select').timezones();
$('#tz_select select').change(function () {
    setTimezone($('#tz_select select').val())
});
$(document).ready(function () {
    setTimezone($('#tz_select select').val())
})
