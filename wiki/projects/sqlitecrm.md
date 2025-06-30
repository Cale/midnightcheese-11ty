---
title: SQLite Ham Weekly CMS
excerpt: The CMS I used for Amateur Radio Weekly links ran on SQLite.
layout: post-without-comments.njk
tags:
- Projects
- SQLite
- Amateur Radio Weekly
- wiki-projects
---
# SQLite based CMS for Amateur Radio Weekly

*{{ excerpt }}*

## Weather WX

Get max temp for each day

select date, max(temperature) from wx group by date(date); (Need to account for timezone offset)

## Ham Weekly CRM

Create new DB:   
**   
**   
sqlite3 test.db

Exit:   
.exit

List tables:   
.tables

Create tables:

CREATE TABLE issues ( id INTEGER PRIMARY KEY NOT NULL, number INTEGER NOT NULL, send_date TEXT NOT NULL);

CREATE TABLE articles ( id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, description TEXT, source TEXT, url TEXT, link_name TEXT, article_order INTEGER );

CREATE TABLE classifieds ( id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, description TEXT, url TEXT, link_name TEXT );

Add column to table:

ALTER TABLE articles ADD COLUMN article_order INTEGER;

One to many relationship:

ALTER TABLE articles ADD COLUMN issue_id REFERENCES issues(id) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE classifieds ADD COLUMN issue_id REFERENCES issues(id) ON DELETE CASCADE ON UPDATE CASCADE;