
define(['vendor/angular/angular', 'vendor/lodash'], function(angular, _) {
    'use strict';

    return angular
        .module('sug-paris-controllers', [])
        .controller('HomeController', [
            '$scope', function($scope) {
                $scope.event = {
                    headline: 'Paris Spring User Group reloaded',
                    externalLink: 'http://paris-sug-201306.eventbrite.com/'
                };
                $scope.talks = [
                    {
                        type: 'QUICKIE',
                        language: 'FR',
                        headline: 'Spring 3 profiles',
                        speakers: [
                            {
                                firstName: 'Mathieu',
                                lastName: 'Parisot',
                                twitterId: 'matparisot'
                            }
                        ]
                    },
                    {
                        type:'QUICKIE',
                        language:'FR',
                        headline:'Live Coding Spring Roo/Spring MVC',
                        speakers: [
                            {
                                firstName: 'Mehdi',
                                lastName: 'Ben Haj Abbes',
                                twitterId: 'MehdiAbbes'
                            }
                        ]
                    },
                    {
                        type:'CONFERENCE',
                        language:'EN',
                        headline:'“Data Access 2.0? Please welcome - Spring Data!”',
                        speakers: [
                            {
                                firstName: 'Oliver',
                                lastName: 'Gierke',
                                twitterId: 'olivergierke',
                                avatar: 'https://secure.gravatar.com/avatar/da342295465d0d0b3c6fc576ea14b3a7',
                                bio: 'Oliver Gierke is engineer at SpringSource, a division of VMware, ' +
                                    'project lead of the Spring Data JPA, MongoDB and core module and member ' +
                                    'of the JPA 2.1 expert group. He has been into developing enterprise applications ' +
                                    'and open source projects for over 6 years now. His working focus is centered around ' +
                                    'software architecture, Spring and persistence technologies. He is regularly speaking ' +
                                    'at German and international conferences as well as author of technology articles and ' +
                                    'the first book on Spring Data.'
                            }
                        ],
                        description: 'Spring always provided sophisticated support for various Java data access technologies. ' +
                        'The lately coined Spring Data project now takes the next step and introduces a consistent programming ' +
                        'model for non-relational data stores and helps implementing data access layers in a consistent and easy-to grasp fashion -' +
                        'for both the NoSQL stores as well as more traditional APIs like JPA. '+
                        'The talk introduces the umbrella project, foundational concepts and abstractions and dives down '+
                        'into specialties of particular modules using MongoDB and Neo4j as examples.'
                    }
                ];

                $scope.mainTrack = _.find($scope.talks, {type: 'CONFERENCE'})
            }
        ]);
});