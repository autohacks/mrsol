/** FOXIZ_CORE_SCRIPT */
function initDarkMode() {
    let darkModeID = foxizCoreParams.darkModeID;
    let currentMode = localStorage.getItem(darkModeID);
    if (null === currentMode) {
        currentMode = document.body.getAttribute('data-theme');
    }
    if ('dark' === currentMode) {
        document.body.setAttribute('data-theme', 'dark');
        let darkIcons = document.getElementsByClassName('mode-icon-dark');
        if (darkIcons.length) {
            for (let i = 0; i < darkIcons.length; i++) {
                darkIcons[i].classList.add('activated');
            }
        }
    } else {
        document.body.setAttribute('data-theme', 'default');
        let defaultIcons = document.getElementsByClassName('mode-icon-default');
        if (defaultIcons.length) {
            for (let i = 0; i < defaultIcons.length; i++) {
                defaultIcons[i].classList.add('activated');
            }
        }
    }
}

function setDarkModeCookie(id, value) {
    if (foxizCoreParams.darkCookieMode) {
        var date = new Date()
        date.setTime(date.getTime() + 5184000000);
        document.cookie = id + '= ' + value + '; path=/; expires=' + date.toGMTString() + ';';
    }
}

(function () {

    initDarkMode();

    /** privacy */
    let currentPrivacy = localStorage.getItem('RubyPrivacyAllowed');
    let privacyBox = document.getElementById('rb-privacy');
    if (!currentPrivacy && privacyBox !== null) {
        privacyBox.classList.add('activated');
    }

    /** reading size */
    let readingSize = sessionStorage.getItem('rubyResizerStep');
    if (readingSize) {
        let body = document.getElementsByTagName("BODY")[0];
        if (2 == readingSize) {
            body.classList.add('medium-entry-size');
        } else if (3 == readingSize) {
            body.classList.add('big-entry-size');
        }
    }
})();

/** core */
var FOXIZ_CORE_SCRIPT = (function (Module, $) {
    "use strict";

    Module.init = function () {
        this._body = $('body');
        this.switchDarkMode();
        this.notificationStatus();
    }

    Module.switchDarkMode = function () {
        var self = this;
        let darkModeID = 'RubyDarkMode';
        if (foxizCoreParams.darkModeID) {
            darkModeID = foxizCoreParams.darkModeID;
        }

        $('.dark-mode-toggle').off('click').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            if (!$(this).hasClass('triggered')) {
                $(this).addClass('triggered')
            }
            let iconDefault = $('.mode-icon-default');
            let iconDark = $('.mode-icon-dark');

            let currentMode = localStorage.getItem(darkModeID);
            if (null === currentMode) {
                currentMode = document.body.getAttribute('data-theme');
            }
            self._body.addClass('switch-smooth');
            if (null === currentMode || 'default' === currentMode) {
                localStorage.setItem(darkModeID, 'dark');
                setDarkModeCookie(darkModeID, 'dark');
                self._body.attr('data-theme', 'dark');
                iconDefault.removeClass('activated');
                iconDark.addClass('activated');
            } else {
                localStorage.setItem(darkModeID, 'default');
                setDarkModeCookie(darkModeID, 'default');
                self._body.attr('data-theme', 'default');
                iconDefault.addClass('activated');
                iconDark.removeClass('activated');
            }
        })
    }

    /** share action */
    Module.shareTrigger = function () {
        $('a.share-trigger').off('click').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            window.open($(this).attr('href'), '_blank', 'width=600, height=350');
            return false;
        });
        $('a.copy-trigger').off('click').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            var target = $(this);
            var link = target.data('link');
            var copied = target.data('copied');
            if (link) {
                navigator.clipboard.writeText(link).then(
                    function () {
                        $('body').find('.tipsy-inner').html((copied));
                    });
            }
        });
    };

    Module.notificationStatus = function () {
        let storageID = 'RubyNotification';
        let notification = $('.notification-icon');
        let statusID = notification.data('notification');
        if (statusID) {
            let currentStatus = localStorage.getItem(storageID);
            if (!currentStatus || statusID != currentStatus) {
                notification.addClass('notification-activated');
            }
        }

        notification.on('click', function () {
            $(this).removeClass('notification-activated');
            localStorage.setItem(storageID, statusID);
        });
    }

    /** single infinite load */
    Module.loadGoogleAds = function (response) {
        var googleAds = $(response).find('.adsbygoogle');
        if (typeof window.adsbygoogle !== 'undefined' && googleAds.length) {
            var adsbygoogle;
            googleAds.each(function () {
                (adsbygoogle = window.adsbygoogle || []).push({});
            });
        }
    }

    Module.loadInstagram = function (response) {
        var instEmbed = $(response).find('.instagram-media');
        if ('undefined' !== typeof window.instgrm) {
            window.instgrm.Embeds.process();
        } else if (instEmbed.length && 'undefined' === typeof window.instgrm) {
            var embedJS = document.createElement('script');
            embedJS.src = '//platform.instagram.com/en_US/embeds.js';
            embedJS.onload = function () {
                window.instgrm.Embeds.process();
            };
            this.$body.append(embedJS);
        }
    }

    Module.updateGA = function (article) {
        var gaURL = article.postURL.replace(/https?:\/\/[^\/]+/i, '');
        if (typeof _gaq !== 'undefined' && _gaq !== null) {
            _gaq.push(['_trackPageview', gaURL]);
        }
        if (typeof ga !== 'undefined' && ga !== null) {
            ga('send', 'pageview', gaURL);
        }
        if (typeof __gaTracker !== 'undefined' && __gaTracker !== null) {
            __gaTracker('send', 'pageview', gaURL);
        }
        if (window.googletag && googletag.pubadsReady) {
            googletag.pubads().refresh();
        }
    }

    return Module;
}(FOXIZ_CORE_SCRIPT || {}, jQuery));


jQuery(document).ready(function () {
    FOXIZ_CORE_SCRIPT.init();
});

jQuery(window).on('load', function () {
    FOXIZ_CORE_SCRIPT.shareTrigger();
});