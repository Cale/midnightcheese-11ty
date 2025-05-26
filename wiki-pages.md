---
layout: post-without-comments.njk
title: Wiki | Midnight Cheese
excerpt: All my digital detritus.
permalink: /wiki/
---
# The Midnight Cheese Wiki

This wiki is a collection of items that I've saved in private spaces such as browser bookmarks, notes apps, and cloud storage spaces. Some of the items in the wiki go back to the first time I was able to store digital information beginning in the 1990s. Rather than have all that data live in the dark, perhaps surfacing it here will allow others to find interest. This space will grow (almost certainly very slowly) over time.

{% for page in collections.wiki | reverse %}
            <a href="{{ page.url | url }}">{{ page.data.title }}</a>
            <br>{{ page.data.excerpt }}
{% endfor %}