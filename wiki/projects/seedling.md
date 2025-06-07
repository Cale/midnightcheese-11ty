---
title: Seedling
excerpt: Seedling was a garden tracking web app.
layout: post-without-comments.njk
tags:
- Projects
- Seedling
- wiki-projects
---
# Seedling

*Seedling was a garden tracking web app that I developed and first released around 2011. It gained a few organic users but I eventually let the project languish. The project lived at [http://seedlinglog.com](https://web.archive.org/web/20130104023217/http://seedlinglog.com/)*

class DATABASE_CONFIG {

var $default = array(                 'driver' => 'mysql',                 'persistent' => false,                 'host' => 'localhost',                 'login' => 'johnny',                 'password' => '',  
                'database' => 'seedling',  
                'prefix' => '',  
        );

var $test = array(                 'driver' => 'mysql',                 'persistent' => false,                 'host' => 'localhost',                 'login' => 'johnny',                 'password' => '',  
                'database' => 'seedling',  
                'prefix' => '',  
        );  
}

class DATABASE_CONFIG {

var $default = array(  
                'driver' => 'mysql',  
                'persistent' => false,

'host' => '[db379736361.db.1and1.com](http://db379736361.db.1and1.com)',

'login' => 'dbo379736361',  
                'password' => '',  
                'database' => 'db379736361',  
                'prefix' => '',  
        );

var $test = array(  
                'driver' => 'mysql',  
                'persistent' => false,

'host' => '[db379736361.db.1and1.com](http://db379736361.db.1and1.com)',

'login' => 'dbo379736361',  
                'password' => '',  
                'database' => 'db379736361',  
                'prefix' => '',  
        );  
}

Little Details:  
    Lower case P on Plant on plant view  
    XXSmaller font-size on milestone Notes  
    Button Hierarchy. Give Color to top tier. (Blue)  
    Alert Notes when creating a new account.  
    XXContact link on footer.  
    Graphs color scheme.  
    Add Twitter link to footer & blog.  
    If not following, display response.  
    If no plants, display message to add some.  
    XXRemove Start Tracking button from homepage if logged in.  
    XXLogin, redirect to what's growing.

To-Do:  
    Page Titles  
    Height Graphs  
    Milestone Types graph  
    Custom Milestone types

Milestone Types

Types DB  
id  
type_name  
user_id  
created  
modified

- Invite system  
        - Invite table  
            - id, code, used  
            - INSERT INTO 'invitecodes' SET col = substring(MD5(RAND()), -8) ;  
        - Add code input to sign-up page

For Public Launch:

- Ability to add custom milestone types

X- Comments on milestones  
X- Ability to view user profiles  
X- Ability to edit user profiles  
X- User avatars

- Plant form validation

X- Delete milestones  
X- Delete plants  
X- Delete comments  
X- Meaningful URLs for plants and users  
X- Follow (users)  
X- Add name field to users table, users/edit, users/view

X- Users can only delete own comments/milestones/plants (and comments posted on their milestones)

X- Users can only add comments/milestones/plants to their own accounts

X- http://planetcakephp.org/aggregator/items/1620-creating-a-community-in-five-minutes-with-cakephp

X    - Validate password  
X    - Change password  
X    - Retrieve password

X    - (Alt retrieve password http://frodosghost.com/2009/07/07/cakephp-forgotten-password/)

Homepage

- Screenshots
- Features
- Screencast?

Form validation

- No empty milestone entries

Post-Launch:

- News/Tips on login page
- Rewrite copy for password reset emails
- int only on height entry
- Edit Plants
- Edit milestones  
        - Users can only edit comments/milestones/plants of their own accounts
- Plant Thumbnails  
        - Add thumbnail column to plants table ([milestone.id](http://milestone.id))
- Favorites (plants)
- PayPal integration

Visual design notes

- Dark (Aperture like) right info column?

Free:

- No private logs
- Three logs

Paying Accounts:

- Ability to mark logs 'private'
- Unlimited logs

Homepage

Seedling provides a simple way to track the progress of your garden. We're replacing traditional printed journals and log books (and even the dreaded spreadsheet) with graphs, photos and an easy logging system.

We're just getting started, but you can follow our progress on our blog.

You can also sign-up for preview release updates through email.

Garden tracking with a social twist.

Intro Email  
Good morning!

We're excited to announce the preview release of Seedling, a brand-new web based garden tracking tool.

You can get started right away:

http://preview.seedlinglog.com/

Here are a few features you'll be able to work with in this first release:

- Create and track your plants by adding milestones such as yield counts, plant height, photos, and more.
- Visualize your data through graphs and growth charts. In fact, the app will automatically graph your data as it's entered.
- View and comment on other users plants and their milestones. Learning from others has never been easier.

As you use the application, please feel free to give us feedback. We want to know what you like and don't like. Do you feel as though something is missing? Need help getting started? You can email us about anything at [feedback@seedlinglog.com](mailto:feedback@seedlinglog.com). We'd love to hear from you.

This is a preview release, so expect to run into a minor bug here and there.

A few issues that we're already aware of:

- Images uploaded in portrait orientation will look a little funky on the Photos tab.
- Currently, only yield counts will show up as a graph on the Graphs tab. More graphs will follow soon.

If you run into a bug not mentioned above, please email us.

Thank you for your help and support! We hope you enjoy Seedling.  
Sincerely,  
Cale Mooth

P.S. For more in-depth profiles about Seedling and its feature-set, navigate over to our blog at http://blog.seedlinglog.com

Seedling is a product of Midnight Cheese Productions