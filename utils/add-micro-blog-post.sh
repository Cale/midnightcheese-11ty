#!/bin/bash
date=$(date '+%Y%m%d%H%M%S')

cat > /home/cale/Documents/projects/midnightcheese-11ty/micro-blog/$date.md <<'_EOF'
---
layout: post-without-comments.njk
title: 
tags:
---
_EOF

echo "$date.md created"
