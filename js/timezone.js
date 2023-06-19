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
        "#intro_start": new Date(Date.parse("19 Jun 13:00:00 GMT-0700 (Pacific Daylight Time)")),
        "#intro_end": new Date(Date.parse("19 Jun 13:15:00 GMT-0700 (Pacific Daylight Time)")),

        "#break1_start": new Date(Date.parse("19 Jun 13:15:00 GMT-0700 (Pacific Daylight Time)")),
        "#break1_end": new Date(Date.parse("19 Jun 13:20:00 GMT-0700 (Pacific Daylight Time)")),

        "#sec1_talk1_start": new Date(Date.parse("19 Jun 13:20:00 GMT-0700 (Pacific Daylight Time)")),
        "#sec1_talk1_end": new Date(Date.parse("19 Jun 14:00:00 GMT-0700 (Pacific Daylight Time)")),

        "#sec1_talk2_start": new Date(Date.parse("19 Jun 14:00:00 GMT-0700 (Pacific Daylight Time)")),
        "#sec1_talk2_end": new Date(Date.parse("19 Jun 14:40:00 GMT-0700 (Pacific Daylight Time)")),

        "#sec1_talk3_start": new Date(Date.parse("19 Jun 14:40:00 GMT-0700 (Pacific Daylight Time)")),
        "#sec1_talk3_end": new Date(Date.parse("19 Jun 15:20:00 GMT-0700 (Pacific Daylight Time)")),

        "#sec1_talk4_start": new Date(Date.parse("19 Jun 15:20:00 GMT-0700 (Pacific Daylight Time)")),
        "#sec1_talk4_end": new Date(Date.parse("19 Jun 16:00:00 GMT-0700 (Pacific Daylight Time)")),

        "#challenge1_start": new Date(Date.parse("19 Jun 16:00:00 GMT-0700 (Pacific Daylight Time)")),
        "#challenge1_end": new Date(Date.parse("19 Jun 17:00:00 GMT-0700 (Pacific Daylight Time)")),
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
