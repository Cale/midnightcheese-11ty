---
layout: post-without-comments.njk
title: Art | Midnight Cheese
excerpt: Art projects.
permalink: /art/
---
# Art Projects

{% for page in collections.artprojects | reverse %}
            <a href="{{ page.url | url }}">{{ page.data.title }}</a>
            <br>{{ page.data.excerpt }}
{% endfor %}