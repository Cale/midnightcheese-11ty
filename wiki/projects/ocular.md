---
title: Ocular
excerpt: Ocular was an RSS reader built with Meteor.js
layout: post-without-comments.njk
tags:
- Projects
- Ocular
- wiki-projects
---
# Ocular

*Ocular was a web based RSS reader utilizing the Google Feed API and the [Meteor.js](https://www.meteor.com/) framework. [Read more about Ocular](/2013/06/building-an-rss-reader-with-meteor/)*

To-do:

- [X] Dim feeds with 0 items
- [X] Remove 'Refresh feeds' button
- [ ] Style homepage
- [X] Article should disappear when added to favorites
- [ ] Style login/logout modal
- [X] Links should be visible on hover after link has been clicked
- [ ] Icons
- [ ] Google Analytics
- [ ] Favicon & iOS icons
- [ ] Style 'currently reading' icon

mongod run --config /usr/local/Cellar/mongodb/1.8.2-x86_64/mongod.conf

Install a different version of node
n 0.8.18

Mongo URL
heroku config | grep "MONGOHQ"

Export Mongo DB from Heroku

mongodump --host [linus.mongohq.com:10021](http://linus.mongohq.com:10021) --db app12575696 -u cale -p cale -o ~/Desktop

Import

mongodb://cale:cale@[linus.mongohq.com:10021](http://linus.mongohq.com:10021)/app12575696

Update buildpack for existing app:

heroku config:add BUILDPACK_URL=https://github.com/v8squirrel/heroku-buildpack-meteor