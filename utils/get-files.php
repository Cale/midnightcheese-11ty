<?php
$directory = "/var/www/html/assets.midnightcheese.com/public_html/images/art/abstract/";

foreach (new DirectoryIterator($directory) as $file) {
  if ($file->isFile()) {
      print '"'.$file->getFilename() .'",'."\n";
  }
}
?>