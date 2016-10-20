/**
 * Underscore Imports
 *
 * Imports Underscore and a custom mixin for doing nested gets with dot notation.
 */
import _ from 'underscore';
import mixins from './mixins';
_.mixin(mixins);

/**
 * Library Imports
 *
 * Libraries referenced in the application for parsing the query string and manipulating scroll.
 */
import queryString from 'query-string';

// This library is Bootstrap's suggested replacement for the deprecated Affix library if you want an "on stick" event. It's not available through NPM so I had to tweak it, but in a real life application this would be imported through NPM.
import scrollStyle from './libraries/scroll-style';
import smoothScroll from 'smooth-scroll';

/**
 * Vue Import
 *
 * Vue is a reactive JavaScript library that powers the whole application. React or Angular could go here.
 */
import Vue from 'vue';

/**
 * Content Imports
 *
 * This is the content referenced throughout the site.
 * In a real life application, these would be retrieved via GET to some sort of GUI'd content manager.
 */
import campaigns from './content/campaigns';
import content from './content/default';
import services from './content/services';

/**
 * Vue Application
 *
 * The JavaScript application that binds to the HTML element and creates dynamic functionality.
 */
let app = new Vue({
    // Computed properties that reference and mutate the application's data store to make custom bindable data.
    computed: {
        featureCards: {
            get() {
                return this.getContent('features.cards');
            }
        },
        testimonialCards: {
            get() {
                return this.getContent('testimonials.cards');
            }
        },
        youtubeEmbedSrc: {
            get() {
                let youtubeId = this.getContent('mainGraphic.video.id');
                return 'https://www.youtube.com/embed/' + youtubeId;
            }
        }
    },

    // The application's data store. All elements on the front end react to changes here.
    data: {
        campaign: null,
        content: content,
        serviceFilter: '',
        services: services
    },

    // The element to bind the application to.
    el: 'html',

    // Functions that can be referenced in the application and also from the front end.
    methods: {
        alertForPageThatDoesNotExist() {
            alert('This link would go to an inside page of some kind in real life.');
        },
        checkCampaign(key) {
            return _.deep(this.campaign, key)
        },
        clearServiceFilter() {
            this.$set('serviceFilter', '');
        },
        getContent(key) {
            let campaignContent = _.deep(this.campaign, key);
            if(_.isEmpty(campaignContent)) {
                return _.deep(this.content, key);
            }

            return campaignContent;
        },
        setCampaign() {
            let parsedQueryString = queryString.parse(location.search);
            let campaign = _.deep(campaigns, parsedQueryString.utm_campaign);
            this.$set('campaign', campaign);
        }
    },

    // Functions to run when the application is ready.
    ready() {
        this.setCampaign();
        smoothScroll.init();
        scrollStyle.init();
    }
});
