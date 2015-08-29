# Testing with Jasmine on a Feed Reader

## Setup

1. Download or clone the repository on your local machine.
2. Open `index.html` in your browser to see the test report on the bottom portion of the site*

*Note: If you modify the allFeeds object, please make sure that you have at least two feeds. If not, the test for "New Feed" will fail.

## About

Created tests for the following scenarios:

1. Ensure that all feed objects have a `url` property and that the `url` property is not empty
2. Ensure that all feed objects have a `name` property and that the `name` property is not empty
3. Check that the menu element is hidden by default
4. Check whether the menu icon toggles the visibility of the menu
5. Ensure that the asynchronous request for feed items return at least one object
6. Ensure that the content on the page changes when a new asynchronous is made for new feed items
