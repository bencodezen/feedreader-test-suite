$(function() {
  describe('RSS Feeds', function() {

    // Check for allFeeds definition and that it contains content
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    // Verifies URL property being returned is defined and not empty
    it('has a URL property that is not empty', function() {
      allFeeds.forEach(function(element, index) {
        expect(element.hasOwnProperty('url')).toBe(true);
        expect(element['url']).toBeDefined();
        expect(element['url'].length > 0).toBe(true);
      });
    });

    // Verifies that the name property returned is defined and not empty
    it('has a name property that is not empty', function() {
      allFeeds.forEach(function(element, index) {
        expect(element.hasOwnProperty('name')).toBe(true);
        expect(element['name'].length > 0).toBe(true);
      });
    });
  });

  describe('The Menu', function() {
    var $body,
        $menuIcon,
        hideMenuClass,
        spyEvent;

    beforeEach(function() {
      // Store elements in variables to minimize processing
      $menuIcon = $('.menu-icon-link');
      $body = $('body');
      hideMenuClass = 'menu-hidden';
      
      // Allow Jasmine to watch for the click event on the link
      spyEvent = spyOnEvent($menuIcon, 'click');
    });

    // Check to ensure that the menu is hidden by default
    it('hides by default', function() {
      expect($body.hasClass(hideMenuClass)).toBe(true);
    });

    // Simulates the action of clicking the menu icon to test the menu visibility
    it('changes visibility when the icon is clicked', function() {
      // Tests that the menu displays when clicked
      $menuIcon.click();
      expect('click').toHaveBeenTriggeredOn($menuIcon);
      expect(spyEvent).toHaveBeenTriggered();
      expect($body.hasClass(hideMenuClass)).toBe(false);

      // Tests that the menu hides when clicked again
      $menuIcon.click();
      expect($body.hasClass(hideMenuClass)).toBe(true);
    });
  });

  describe('Initial Entries', function() {
    // Ensure that loadFeed has completed running before each test
    beforeEach(function(done) {
      loadFeed(0, done);
    });

    // Checks for at least one entry upon initial load
    it('should contain at least one entry', function() {
      expect($('.entry-link').length > 0).toBe(true);
    });
  });

  describe('New Feed Selection', function() {
    var originalContent,
        newContent;

    // Ensure that loadFeed has completed running before each test
    beforeEach(function(done) {

      // Check to make sure there is more than one feed
      expect(allFeeds.length > 1).toBe(true);

      loadFeed(0, function() {
        originalContent = $('.entry').html();
        loadFeed(1, function() {
          newContent = $('.entry').html();
          done();
        });
      });
    });

    /* Takes content from initial load and compares to new content 
     * after a new feed it loaded */
    it('should contain new content when the feed channel changes', function() {
      expect(originalContent).not.toEqual(newContent);
    });
  });
}());