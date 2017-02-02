'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Update = new Module('update');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Update.register(function(app, auth, database, circles) {

  //We enable routing. By default the Package Object is passed to the routes
  Update.routes(app, auth, database, circles);

  //We are adding a link to the main menu for all authenticated users
  Update.menus.add({
    title: 'update example page',
    link: 'update example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Update.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Update.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Update.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Update;
});
