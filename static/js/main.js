$(document).ready(function() {
    setInterval(function() {
        var a = ["ad", "ae", "af", "us", "al", "am", "ar", "au", "gf", "gb", "ph", "ba", "us", "re", "ro", "pe", "lv", "mk", "us", "pt", "europeanunion", "it", "jp", "ne", "nl", "no", "ua", "um"],
            e = ["441Binder", "xminekkk", "Attacklord_bro", "leaelui", "emiflesh", "colorowyy", "jolobob", "magicofy", "julliazugaj", "natty2602", "ninjagirldraws", "azaharrizal", "anyaisch", "dobrafaza", "nylaa.a", "kisszsolti", "anselmus_lauri", "smile_life1", "NaneK", "Marko_991", "JackHammer9999", "fuzzzy", "tester", "yearboy1007", "a_mcia", "Haxajmo", "nikoldavidova", "sabinittas", "twinsstylee", "yarasantander", "Hillck23", "borizawada17", "rosie_kala", "only123", "wieczxrrek", "MyNameIsShoost"],
            t = ["static/picture/avatar.png", "static/picture/avatar.png"],
            n = a[Math.floor(Math.random() * a.length)],
            o = t[Math.floor(Math.random() * t.length)],
            r = e[Math.floor(Math.random() * e.length)],
            s = Math.floor(9e4 * Math.random() + 1e4);
        $(".live-stats").last().remove(), $(".activityContent").hide().prepend('<div class="live-stats"><div class="avatar"><img src="' + o + '" alt="" /></div><div class="flag"><img src="img/flags/' + n + '.png" alt="" /></div><div class="info"><ul><li><b>' + r + ',</b> today:</li><li><img class="item-gen" src="img/avatar.png" alt="" />Account code: <span class="bucks-color">' + s + "</span> </li></ul></div></div>").fadeIn()
    }, 2e3);
    var a = $(".vBucks-input");
    a.updown({
        step: 1e4,
        min: 9999,
        max: 99999
    });
    var e = a.data("updown");
    $(".plus-vBucks").click(function(a) {
        e.increase(a), e.triggerEvents()
    }), $(".minus-vBucks").click(function(a) {
        e.decrease(a), e.triggerEvents()
    }), $(".btnGenerator").click(function() {
        var a = $(".username-input").val();
        "" == a || a.replace(/ /g, "").length < 2 ? $(".username-input").css({
            border: "1px solid #F00"
        }) : ($(".username-input").css({
            border: "1px solid #111319"
        }), $(".generator").slideUp(function() {
            var a, e;
            $(".generator-step2").slideDown(), a = 1, e = setInterval(function() {
                20 == a && $(".load-textJS").html("Connecting to account"), 30 == a && $(".load-textJS").html("Fetching data"), 40 == a && $(".load-textJS").html("GET = Variables"), 50 == a && $(".load-textJS").html("GET -> Username"), 60 == a && $(".load-textJS").html("GET -> SQL IP Address"), 70 == a && $(".load-textJS").html("GET -> Importing Account Information"), 80 == a && $(".load-textJS").html("POST => PostgresSQL DATA"), a >= 100 ? (clearInterval(e), $(".generator-step2").slideUp(), $(".generator-step3").slideDown(), $(".userJS").html($(".username-input").val()), $(".vBucksJS").countTo({
                    from: 10,
                    to: $(".vBucks-input").val(),
                    speed: 1e3,
                    refreshInterval: 1,
                    onComplete: function(a) {
                        $(".vBucksJSthick").css("opacity", "1"), setTimeout(function() {
                            $(".generator-step3").fadeOut(function() {
                                $(".generator-offers").fadeIn()
                            })
                        }, 2e3)
                    }
                })) : (a++, $(".progress-bar").css("width", a + "%"), $(".progress-bar").html(1 * a + "%"))
            }, 128), goToByScroll("generatorJS")
        }))
    }), $(".btn-GoGenerator").click(function() {
        goToByScroll("generator")
    })
});
