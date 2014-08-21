'use strict';

/* Services */

angular.module('pocketAnnieAppServices', ['ngResource'])
.factory('ParseService', function($resource){
    // Initialize Parse API and objects.
    //the first value is the app id, the second is the javascript key
    Parse.initialize("QwKn1yu5LIpW9aLQJ9xEPqPJEx2hoWdc7VB1SRcB", "avobHSj1OTlvwUGofHr7g29tOs0dtfCFVruGy6hs");

    // Cache current logged in user
    var loggedInUser;

    // Cache list of user's answers
    var myAnswers = [];

    // Define parse model and collection for Answer records
    var Answer = Parse.Object.extend("Answer");
    var AnswerCollection = Parse.Collection.extend({ model:Answer });


    /**
     * ParseService Object
     * This is what is used by the controllers to save and retrieve data from Parse.com.
     * Moving all the Parse.com specific stuff into a service allows me to later swap it out 
     * with another back-end service provider without modifying my controller much, if at all.
     */
    var ParseService = {
      name: "Parse",

      // Login a user
      login : function login(username, password, callback) {
    	  Parse.User.logIn(username, password, {
    	    success: function(user) {
            loggedInUser = user;
    	      callback(user);
    	    },
    	    error: function(user, error) {
    	      alert("Error: " + error.message);
    	    }
        });
      },

        /*
      // Register a user
      signUp : function signUp(username, password, callback) {
      	Parse.User.signUp(username, password, { ACL: new Parse.ACL() }, {
            success: function(user) {
                loggedInUser = user;
                callback(user);
            },

            error: function(user, error) {
              alert("Error: " + error.message);
            }
        });
      },*/

      // Logout current user
      logout : function logout(callback) {
        Parse.User.logOut();
      },

        /*
      // Get all books belonging to logged in user
      getMyBooks : function getMyBooks(callback) {
        // Create a new Parse Query to search Book records by ownerid
        var query = new Parse.Query(Book);
        query.equalTo("owner", loggedInUser.get('username'));
        // use the find method to retrieve all books
        query.find({
          success : function(results) {
            for (var i=0; i<results.length; i++)
            { 
              myBooks[i]  = results[i].get('name');
            }
            callback(results);
          },
          error: function(error) {
            alert("Error: " + error.message);
          }
        });
      },*/

      // Get all of current user's answers
      getAnswers : function getRequests(userToFetch, callback) {

        var query = new Parse.Query(Answer);
        //var userToFetch = 'kathleen.crosier@gmail.com';
        var dateLimit = new Date("February 11, 2014 00:00:00");

        query.equalTo("userid", userToFetch);
        query.greaterThanOrEqualTo("createdAt", dateLimit)
        //query.containedIn("book", myAnswers);
        // use the find method to retrieve all requests
        query.ascending("createdAt");
        query.find({
            success : function(results) {
                console.log('fetched answers!');
                console.log(results.length + ' answers retrieved for ' + userToFetch);
                //console.log(results);
                callback(results);
            },
            error: function(error) {
                alert("Error: " + error.message);
            }
        });

          /*

        if (myAnswers.length == 0) {
          query = new Parse.Query(Answer);
          //query.equalTo("owner", loggedInUser.get('username'));
          // use the find method to retrieve all books
          query.find({
            success : function(results) {




              // Create a new Parse Query to search requests records by userid
              query = new Parse.Query(Answer);
              query.equalTo("userid", userToFetch);
              query.greaterThanOrEqualTo("createdAt", dateLimit)
              //query.containedIn("book", myAnswers);
              // use the find method to retrieve all requests
              query.find({
                success : function(results) {
                   console.log('fetched answers!');
                   console.log(results.length + ' answers retrieved for ' + userToFetch);
                   console.log(results);
                  callback(results);
                },
                error: function(error) {
                  alert("Error: " + error.message);
                }
              });
            },
            error: function(error) {
              alert("Error: " + error.message);
            }
          });
        }
        */
      },



      // Get current logged in user
      getUser : function getUser() {
          loggedInUser=Parse.User.current();
          if(loggedInUser) {
          console.log('user is currently: '+ loggedInUser.get('username'));
            return loggedInUser;
        }
        else {
            console.log('user not logged in');
        }
      }
    
    };

    // The factory function returns ParseService, which is injected into controllers.
    return ParseService;
});
