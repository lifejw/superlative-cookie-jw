var klaroConfig = {
    // With the 0.7.0 release we introduce a 'version' paramter that will make
    // if easier for us to keep configuration files backwards-compatible in the future.
    version: 1,

    // You can customize the ID of the DIV element that Klaro will create
    // when starting up. If undefined, Klaro will use 'klaro'.
    elementID: 'klaro',

    // Setting this to true will keep Klaro from automatically loading itself
    // when the page is being loaded.
    noAutoLoad: false,

    // Setting this to true will render the descriptions of the consent
    // modal and consent notice are HTML. Use with care.
    htmlTexts: true,

    // Setting 'embedded' to true will render the Klaro modal and notice without
    // the modal background, allowing you to e.g. embed them into a specific element
    // of your website, such as your privacy notice.
    embedded: false,

    // You can group services by their purpose in the modal. This is advisable
    // if you have a large number of services. Users can then enable or disable
    // entire groups of services instead of having to enable or disable every service.
    groupByPurpose: true,

    // How Klaro should store the user's preferences. It can be either 'cookie'
    // (the default) or 'localStorage'.
    storageMethod: 'cookie',

    // You can customize the name of the cookie that Klaro uses for storing
    // user consent decisions. If undefined, Klaro will use 'klaro'.
    cookieName: 'klaro',

    // You can also set a custom expiration time for the Klaro cookie.
    // By default, it will expire after 120 days.
    cookieExpiresAfterDays: 120,

    // You can change to cookie domain for the consent manager itself.
    // Use this if you want to get consent once for multiple matching domains.
    // If undefined, Klaro will use the current domain.
    //cookieDomain: '.github.com',

    // Defines the default state for services (true=enabled by default).
    default: false,

    // If "mustConsent" is set to true, Klaro will directly display the consent
    // manager modal and not allow the user to close it before having actively
    // consented or declines the use of third-party services.
    mustConsent: false,

    // Show "accept all" to accept all services instead of "ok" that only accepts
    // required and "default: true" services
    acceptAll: true,

    // replace "decline" with cookie manager modal
    hideDeclineAll: false,

    // hide "learnMore" link
    hideLearnMore: false,

    // show cookie notice as modal
    noticeAsModal: false,

    // You can also remove the 'Realized with Klaro!' text in the consent modal.
    // Please don't do this! We provide Klaro as a free open source tool.
    // Placing a link to our website helps us spread the word about it,
    // which ultimately enables us to make Klaro! better for everyone.
    // So please be fair and keep the link enabled. Thanks :)
    //disablePoweredBy: true,

    // you can specify an additional class (or classes) that will be added to the Klaro `div`
    //additionalClass: 'my-klaro',

    // You can define the UI language directly here. If undefined, Klaro will
    // use the value given in the global "lang" variable. If that does
    // not exist, it will use the value given in the "lang" attribute of your
    // HTML tag. If that also doesn't exist, it will use 'en'.
    //lang: 'en',

    // You can overwrite existing translations and add translations for your
    // service descriptions and purposes. See `src/translations/` for a full
    // list of translations that can be overwritten:
    // https://github.com/KIProtect/klaro/tree/master/src/translations

    // Example config that shows how to overwrite translations:
    // https://github.com/KIProtect/klaro/blob/master/src/configs/i18n.js
    translations: {
        // translationsed defined under the 'zz' language code act as default
        // translations.
        zz: {
            privacyPolicyUrl: '/legal/privacy-policy',
        },
        // If you erase the "consentModal" translations, Klaro will use the
        // bundled translations.
        de: {
            privacyPolicyUrl: '/legal/privacy-policy',
            consentModal: {
                description:
                    'Hier können Sie einsehen und anpassen, welche Information wir über Sie sammeln.',
            },
            inlineTracker: {
                description: 'Beispiel für ein Inline-Tracking Skript',
            },
            externalTracker: {
                description: 'Beispiel für ein externes Tracking Skript',
            },
            adsense: {
                description: 'Anzeigen von Werbeanzeigen (Beispiel)',
                title: 'Google AdSense Werbezeugs',
            },
            matomo: {
                description: 'Sammeln von Besucherstatistiken',
            },
            camera: {
                description:
                    'Eine Überwachungskamera (nur ein Beispiel zu IMG-Tags)',
            },
            cloudflare: {
                description: 'Schutz gegen DDoS-Angriffe',
            },
            intercom: {
                description:
                    'Chat Widget & Sammeln von Besucherstatistiken (nur ein Beispiel)',
            },
            mouseflow: {
                description: 'Echtzeit-Benutzeranalyse (nur ein Beispiel)',
            },
            googleFonts: {
                description: 'Web-Schriftarten von Google gehostet',
            },
            purposes: {
                analytics: 'Besucher-Statistiken',
                security: 'Sicherheit',
                livechat: 'Live Chat',
                advertising: 'Anzeigen von Werbung',
                styling: 'Styling',
            },
        },
        en: {
            consentModal: {
            privacyPolicyUrl: '/legal/privacy-policy',
                description:
                    'Here you can see and customize the information that we collect about you.',
            },
            inlineTracker: {
                description: 'Example of an inline tracking script',
            },
            externalTracker: {
                description: 'Example of an external tracking script',
            },
            adsense: {
                description: 'Displaying of advertisements (just an example)',
                title: 'Google Adsense Advertisement',
            },
            matomo: {
                description: 'Collecting of visitor statistics',
            },
            camera: {
                description:
                    'A surveillance camera (just an example for an IMG tag)',
            },
            cloudflare: {
                description: 'Protection against DDoS attacks',
            },
            intercom: {
                description:
                    'Chat widget & collecting of visitor statistics (just an example)',
            },
            mouseflow: {
                description: 'Real-Time user analytics (just an example)',
            },
            googleFonts: {
                description: 'Web fonts hosted by Google',
            },
            purposes: {
                analytics: 'Analytics',
                security: 'Security',
                livechat: 'Livechat',
                advertising: 'Advertising',
                styling: 'Styling',
            },
        },
    },

    // This is a list of third-party services that Klaro will manage for you.
    services: [
        {
            name: 'twitter',
            purposes: ['marketing'],
            // Setting this to true will exempt this service from the "Accept All"
            // flow, i.e. clicking on "Accept All" will not enable this service.
            contextualConsentOnly: false,
        },
        {
            name: 'youtube',
            purposes: ['marketing'],
            contextualConsentOnly: true,
        },
        

        // The services will appear in the modal in the same order as defined here.
        /*{
            name: 'inlineTracker',
            title: 'Inline Tracker',
            purposes: ['analytics'],
            cookies: ['inline-tracker'],
            optOut: false,
        },
        {
            name: 'externalTracker',
            title: 'External Tracker',
            purposes: ['analytics', 'security'],
            cookies: ['external-tracker'],
        },*/
        {
            name: 'googleAnalytics',
            title: 'Google Analytics',
            purposes: ['analytics'],
			cookies: [
                [/^_g.*$/, '/', '.webflow.io'], // delete already set cookies at loading time of Klaro
			optOut: false,
        },
        {
            name: 'googleFonts',
            title: 'Google Fonts',
            purposes: ['styling'],
			default: true,
			required: true,
        },

    ],
};
