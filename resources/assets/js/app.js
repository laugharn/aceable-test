import _ from 'underscore';
import mixins from './mixins';
_.mixin(mixins);

import campaigns from './campaigns';
import content from './content';
import services from './services';

import queryString from 'query-string';
import scrollStyle from './libraries/scroll-style';
import smoothScroll from 'smooth-scroll';
import Vue from 'vue';

let app = new Vue({
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
    data: {
        campaign: null,
        content: content,
        serviceFilter: '',
        services: services
    },
    el: 'html',
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
    ready() {
        this.setCampaign();
        smoothScroll.init();
        scrollStyle.init();
    }
});
