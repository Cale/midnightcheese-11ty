---
title: Pixelfed
excerpt: I briefly ran a personal Pixelfed server.
layout: post-without-comments.njk
tags:
- Projects
- Pixelfed
- Photography
- wiki-projects
---
# Pixelfed

*{{ excerpt }}*

config/backup.php
@@ -96,7 +96,7 @@ return [
            /*
              * The filename prefix used for the backup zip file.
              */

'filename_prefix' => '',
+            'filename_prefix' => 'pixelfed-backup-',

+++ b/config/image-optimizer.php
@@ -43,7 +43,7 @@ return [
    /*

* The maximum time in seconds each optimizer is allowed to run separately.

*/

'timeout' => 59,
+    'timeout' => 600,

+++ b/public/.htaccess
@@ -1,21 +1,10 @@
-

Options -MultiViews -Indexes

+Options +FollowSymLinks -Indexes
+RewriteEngine On

RewriteEngine On
+RewriteCond %{HTTP:Authorization} .
+RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

Handle Authorization Header

RewriteCond %{HTTP:Authorization} .

RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
+RewriteCond %{REQUEST_FILENAME} !-d

Backup
php artisan backup:run