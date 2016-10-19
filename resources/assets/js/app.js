import _ from 'underscore';
import Vue from 'vue';

let app = new Vue({
    computed: {
        //
    },
    data: {
        serviceFilter: '',
        services: [
            {
                description: 'Get certified to serve an Alabama Slammer in the birthplace of the drink.',
                price: {
                    discount: '$25',
                    retail: '$45'
                },
                state: 'Alabama',
            },
            {
                description: 'You\'ve got Grapefruit Sculpin on tap. Get state-certified to serve it.',
                price: {
                    discount: '$50',
                    retail: '$75'
                },
                state: 'California',
            },
            {
                description: 'Off the Florida Keys, there\'s a place called Kokomo. Get certified in Florida.',
                price: {
                    discount: '$20',
                    retail: '$25'
                },
                state: 'Florida',
            },
            {
                description: 'Popping bottles in the club? Make sure you\'re state-certified in Georgia.',
                price: {
                    discount: '$25',
                    retail: '$40'
                },
                state: 'Georgia',
            },
            {
                description: 'If somebody orders an Old Style, you\'ll be state-certified to serve them.',
                price: {
                    discount: '$40',
                    retail: '$50'
                },
                state: 'Illinois',
            },
            {
                description: 'Whatever bourbon you put in your julep, make sure you\'re certified to serve it.',
                price: {
                    discount: '$25',
                    retail: '$35'
                },
                state: 'Kentucky',
            },
            {
                description: 'You make a perfect Sazerac, now you can be state-certified to serve it.',
                price: {
                    discount: '$20',
                    retail: '$25'
                },
                state: 'Louisiana',
            },
            {
                description: 'Prickly pear margaritas for everyone when you get yourself state-certified!',
                price: {
                    discount: '$25',
                    retail: '$45'
                },
                state: 'New Mexico',
            },
            {
                description: 'Serve up a mean Manhattan in Manhattan when you get your state certification.',
                price: {
                    retail: '$75'
                },
                state: 'New York',
            },
            {
                description: 'Get certified, because everything is bigger in Texas, including the tallboys.',
                price: {
                    discount: '$35',
                    retail: '$50'
                },
                state: 'Texas',
            },
            {
                description: 'Man, Utah drinking laws are crazy. All the same we can get you state-certified.',
                price: {
                    discount: '$40',
                    retail: '$45'
                },
                state: 'Utah',
            },
            {
                description: 'A Wisconsin Old-Fashioned is not the same as an Old-Fashioned, but you know that.',
                price: {
                    discount: '$25',
                    retail: '$30'
                },
                state: 'Wisconsin',
            }
        ]
    },
    el: 'html',
    filters: {
        //
    },
    methods: {
        clearServiceFilter() {
            this.$set('serviceFilter', '');
        }
    },
    ready() {
        console.log('Hello World');
    }
});
