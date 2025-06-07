---
layout: post-without-comments.njk
title: Projects
excerpt: Notes from projects I'm worked on or created.
permalink: /wiki/projects/
tags:
- Projects
- wiki
---
# Projects

{% for page in collections.wiki-projects | reverse %}
            <a href="{{ page.url | url }}">{{ page.data.title }}</a>
            <br>{{ page.data.excerpt }}
{% endfor %}