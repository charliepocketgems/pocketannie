'use strict';

/* Services */

angular.module('pocketAnnieAppServices', ['ngResource'])
.factory('ParseService', function($resource){
    // Initialize Parse API and objects.
    //the first value is the app id, the second is the javascript key
    Parse.initialize("QwKn1yu5LIpW9aLQJ9xEPqPJEx2hoWdc7VB1SRcB", "avobHSj1OTlvwUGofHr7g29tOs0dtfCFVruGy6hs");

    // Cache game titles
    var gameTitles=[];


    // Define parse model and collection for GameMonthly records
    var GameTitles = Parse.Object.extend("GameTitles");
    var GameTitlesCollection = Parse.Collection.extend({model:GameTitles});

    // Define parse model and collection for Answer records
    var Answer = Parse.Object.extend("Answer");
    var GameMetrics = Parse.Object.extend("GameMetrics");
    var AnswerCollection = Parse.Collection.extend({ model:Answer });


    /**
     * ParseService Object
     * This is what is used by the controllers to save and retrieve data from Parse.com.
     * Moving all the Parse.com specific stuff into a service allows me to later swap it out 
     * with another back-end service provider without modifying my controller much, if at all.
     */
    var ParseService = {
      name: "Parse",

      getGameTitles : function getGameTitles(callback) {

        if(gameTitles.length==0)  {
            var query = new Parse.Query(GameTitles);
            query.descending("rev");
            query.limit(1000);
            query.find({
               success : function(results) {
                for (var i=0; i<results.length; i++)
                {
                    gameTitles[i]  = results[i].get('game');
                }
                    //console.log(gameTitles);
                    callback(gameTitles);
               },
                error: function(error) {
                    alert("Error: " + error.message);
                }
            });
        }
        else {
            callback(gameTitles);
        }



      },

      getGameData : function getGameData(title, callback) {
        var query = new Parse.query(GameMonthly);
        //query.
      },



      getAvgInstalls : function getRequests(callback, gamename, device, country) {
        var query = new Parse.Query(GameMetrics);
        var device = 'iphone';
        var country = 'JP'
        var gamename = 'Sky Adventure';

        query.equalTo("device", device);
        query.equalTo("country", country);
        query.equalTo("game", gamename);

        query.find({
            success : function(results) {
                //console.log(results);
                callback(results);
                //console.log(results);
            },
            error: function(error) {
                alert("Error: " + error.message);
            }
        });
      }


    };

    // The factory function returns ParseService, which is injected into controllers.
    return ParseService;
});
