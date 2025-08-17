---
title: Gentoo on a PowerBook G3
excerpt: The effort is futile.
layout: post-without-comments.njk
tags:
- Projects
- Apple
- PowerGook G3
- Gentoo
- wiki-projects
---
# Gentoo on a PowerBook G3

*{{ excerpt }}*

Use grub as bootloader   
[https://forums.gentoo.org/viewtopic-t-1082746-highlight-powerbook+grub.html](https://forums.gentoo.org/viewtopic-t-1082746-highlight-powerbook+grub.html)

External firewire drive doesn't mount at boot. portage tmp partition and swap partition on external FW hard drive must be mounted manually.

This was a result of the swap partition not having been mounted:

Larger builds like spidermonkey failing potentially due to lack of memory. Chaning makeopts from 2 to 1

MAKEOPTS="-j1"

[https://forums.gentoo.org/viewtopic-t-1109384-highlight-spidermonkey+emake.html?sid=dc0389d3e49cacb737fb108aa9a3cbf4](https://forums.gentoo.org/viewtopic-t-1109384-highlight-spidermonkey+emake.html?sid=dc0389d3e49cacb737fb108aa9a3cbf4)

VIDEO_CARDS="r128"

[https://forums.gentoo.org/viewtopic-t-1078182-highlight-startx+module+r128.html](https://forums.gentoo.org/viewtopic-t-1078182-highlight-startx+module+r128.html)

webkit-gtk errors on compile:

[https://forums.gentoo.org/viewtopic-t-1060688-highlight-webkitgtk+error+relocation+overflow.html](https://forums.gentoo.org/viewtopic-t-1060688-highlight-webkitgtk+error+relocation+overflow.html)

[https://forums.gentoo.org/viewtopic-p-8044312.html#8044312](https://forums.gentoo.org/viewtopic-p-8044312.html#8044312)

echo 'LDFLAGS="${LDFLAGS} -Wl,-fuse-ld=bfd"' >> /etc/portage/env/force-bfd.conf   
echo 'categoty/package force-bfd.conf' >> /etc/portage/package.env

Browser alternatives   
netsurf (recent updates)   
falkon   
otter based on opera 12

[http://scan0017.net/gentoo_ibook.php#misc_files](http://scan0017.net/gentoo_ibook.php#misc_files)

I recently installed Gentoo on an old Pismo PowerBook G3 and thought I'd share a handful of observations for anyone out there that might be attempting this going forward.

The good news is, it's still entirely possible to get a functional Gentoo installation up and running with internet connectivity and an X interface.