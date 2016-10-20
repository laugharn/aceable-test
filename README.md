# Aceable Test

**Scenario:** Please make a landing page that would help people who searched "Bartender Certification" decide whether they need continuing education or a new certification. An example in this space is SellerServer.com, but please note that this not a potential business model for us, which is why we use it as a sample for testing.

## Getting Started

```
git clone https://github.com/laugharn/aceable-test.git
cd aceable-test
php -S localhost:1983
```

Once you've navigated to http://localhost:1983, you can browse around. Try adding a query string after the URL like "?utm_campaign=ab-test-1" to see the dynamic insertion feature in action.

* You could optionally run `npm install` if you are interested in modifying the JavaScript or SASS.
* There will be console errors from the YouTube embed, because you can't embed Google content without some kind of headache.

## Development Notes

The final delivered product is little more than a static HTML file with a stylesheet and a JavaScript call. I tried to make a simple landing page while kind of maintaining the house style of aceable.com. I used a Gulp-based task runner to compile the JavaScript and SASS assets, Bootstrap and Font Awesome for base styling, and VueJS to create the JavaScript application that powers the page. Ultimately, what I was going for with the page can be broken down to two concepts:

### Programmatic

The content and styling on the page is drawn from a JavaScript object. The VueJS application grabs that object and populates the page. If a query string is present and contains a utm_campaign, the application will look for a different JavaScript object that shares the name of the campaign, and look for any styles or content to be overriden.

For example, if the initial content has a `features.content.h1` value of "Online Alcohol & Sales Training" but a campaign object defines the same property as "Get State-Certified in Alcohol Sales", it will swap in the latter when the page is rendered. By coupling these changes to the campaign, it's very simple to A/B test with queries that are already familiar to Google Analytics users.

### Modular

I tried to make as much of the design into components as I could. Generally speaking, Bootstrap can be very opinionated in your front end, but using SASS and BEM principles allows you to *almost* completely remove Bootstrap's classes from the front end. So, if a new developer wanted to use Foundation instead of Bootstrap, there would be very little recoding necessary in the HTML, he would just need to create a new stylesheet.

This, coupled with using the SASS `@extend` method instead of mixins, allows your stylesheet to have an almost annotated feel that's very easy to understand.
