#!/bin/bash

cd /home/cale/Documents/projects/midnightcheese-11ty/
npx @11ty/eleventy
rsync -a _site/ cale@calemooth.com:/var/www/html/midnightcheese.com/public_html