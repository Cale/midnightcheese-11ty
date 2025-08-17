---
title: Gentoo on a Dell Mini 9
excerpt: Gentoo on an old netbook style laptop.
layout: post-without-comments.njk
tags:
- Projects
- Dell
- Mini 9
- Gentoo
- wiki-projects
---
# Gentoo on a Dell Mini 9

*{{ excerpt }}*

Compile wifi drivers as kernel modules in order for them to function properly.

Xorg   
[https://wiki.gentoo.org/wiki/Xorg/Guide](https://wiki.gentoo.org/wiki/Xorg/Guide)

VIDEO_CARDS="intel"

Set PORTAGE_TMPDIR in make.conf to an external drive in order to have enough space to emerge large packaged like rust and llvm when compiling X server. They require 10+GB of free space.

Reduce core count from 2 to 1 so rust doesn't run out of physical memory during compile: MAKEOPTS="-j1" (This may not be needed with the added temporary large swap partition.)

[https://forums.gentoo.org/viewtopic-t-1118508-highlight-rust+error.html](https://forums.gentoo.org/viewtopic-t-1118508-highlight-rust+error.html)

In addition to the temp portage drive, mount a temp swap partition for rust and overall xorg installation.

Wifi networking encounters a race condition on boot resulting in wifi only pulling down an IP address about half the time. Need to insert a delaty, probably in dhcpd init.

Deleting old portage packages   
[https://wiki.gentoo.org/wiki/Eclean](https://wiki.gentoo.org/wiki/Eclean)

The hard drive on this machine is so small, it can't perform updates because the portage folders become too large.

External HDD

/dev/sdb1   8GB swap space   
The Dell has 1GB of RAM, but the current swap partition is only 300MB

/dev/sdb2 /portage-tmp 50GB   
This has to be as large as 10GB for packages like rust to compile.

/dev/sdb3 /var/cache/distfiles 50GB   
This directory can contain multiple GBs of packages