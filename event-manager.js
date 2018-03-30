/**
 * author: Nils Gehlenborg - nils@hms.harvard.edu
*/

/** basic event bus (http://stackoverflow.com/questions/2967332/jquery-plugin-for-event-driven-architecture) */
var EventManager = {};

/** how to use:

 $(EventManager).on("tabClicked", function() {
    // do something
});

 $(EventManager).trigger("tabClicked");

 $(EventManager).unbind("tabClicked");

 */
