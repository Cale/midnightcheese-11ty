---
title: The State of Linux on a PowerMac G5 October 2023
date: 2023-09-27
excerpt: Debian rules and Gentoo drools.
tags:
- post
- Apple
- Linux
---
<h1 class="full-bleed">{{ title }}</h1><p class="date">{{ date | date: "%B %d, %Y"}}</p>

**TL;DR** Debian 12 Sid (PPC64) will install on an early PowerMac G5 start to finish. [Download](https://cdimage.debian.org/cdimage/ports/snapshots/2023-06-18/), then burn the ISO to CD, hold down the "c" key on startup, run through the installer and all should be well. More info on the [MacRumors Forum](https://forums.macrumors.com/threads/power-mac-g5-debian-sid-12.2392730/).

First of all, this entire article is dumb because it's all about trying to run a modern Linux server OS on a 20 year old machine running a CPU architecture (PowerPC) that has largely left the consumer market. There's really no reason this machine should support anything modern, but thanks to some tireless engineers, a lot of modern software can still run on a what is still a fairly capable machine. 

I picked up a [PowerMac G5](https://en.wikipedia.org/wiki/Power_Mac_G5) on a whim for the nostalgia factor. While back in the day I owned Apple hardware with a G3 and G4 chip running as my daily driver, I never did own a G5. I jumped straight from a Titanium PowerBook G4 to one of the very first Intel MacBook Pros. I did work with a few G5 machines at work.

Anyway, besides this machine being old, it's also power hungry, running well over 100 Watts at rest. Two factors against it potentially running as a home server. The [Libre Le Potato](https://libre.computer/products/aml-s905x-cc/) on my pegboard will outperform this machine in almost every way. Bananas. 

So I wanted to try my hand at running my own [Pixelfed](https://pixelfed.org/) instance and decided the G5 is the machine. To make this a reality, I would need to run Linux. Well, most Linux distros no longer officially support older PowerPC architecture, in this case, PPC64. PPC64 is different from the more modern series of POWER chips running PPC64LE. In fact, reading through the top hit when searching for PPC Linux distros, most of the [top 10 distros](https://www.pcwdld.com/best-powerpc-linux-distros) listed no longer support PPC64 at all.

However, I eventually found the [Fienix](http://fienixppc.blogspot.com/) project, a Debian based distro that aims to keep old Apple PowerPC machines afloat with a recent Linux build. This seemed promising even though it appears to be run by one individual with no community around it. As you might guess, this is where things went south. 

The best way to install a new OS on New World Apple machines is via optical disc media. Trying to boot a USB drive via Open Firmware is an absolute nightmare. Devices and device paths are incredibly cryptic. I never could boot Fienix from USB media. I tried multiple USB sticks, all the different device aliases, followed the [special video](https://www.youtube.com/watch?v=cS58kQ10qas), but no luck. I did happen to have some DVD disk media in the back of the closet, but it had all degraded to the point where I couldn't burn a working copy. I must have burned a half dozen or more DVDs but they all produced corrupt discs. The installer would only get so far before hitting read errors. If they booted at all. So no USB, and no DVD based media. Fienix was out.

Mistakenly, I then turned to Gentoo. I previously stated that I was completely [done with Gentoo](http://midnightcheese.com/2022/04/wasting-an-evening-with-distcc/), but what other option did I have? Gentoo is the only major distro that still supports the PPC64 architecture. And they have CD ISO files. My CD media is still functional, and I was able to boot the CD and run through the Gentoo install process without issue. The problems came with Yaboot, the default bootloader [suggested in the Gentoo Handbook install instructions](https://wiki.gentoo.org/wiki/Handbook:PPC64/Installation/Bootloader#Using_yaboot). I went through two lengthy Gentoo installs which ultimately failed when trying to boot with Yaboot. As I mentioned previously, Open Firmware is the most absolute worst piece of software to work with. Pairing Open Firmware with Yaboot summons the devil. The Yaboot man page describes Open Firmware as "[disgusting](https://manpages.debian.org/jessie/yaboot/yaboot.8.en.html)." I couldn't agree more. 

I ran through a couple Gentoo installs and a million tweaks to Yaboot trying to get the G5 to boot into the new Gentoo install. No luck. Turning to the forums, I learned that the Yaboot instructions in the Gentoo Handbook are incorrect because Gentoo's implementation of Yaboot doesn't currently work with the G5. This has been the case for at least a year. Great. 

Rather than simply let it go, I decided I would try to help the next person trying to install Gentoo on a G5 and edit the Gentoo Handbook to note that this would be an impossible task and to save time by avoiding Gentoo like the plague. So I went to try and make an edit to the Handbook. I figured I wouldn't have permission to straight-up edit, but could at least start a discussion so someone with authority could add a note. (It is a Wiki after all!) [Creating an account was a non-starter](https://mastodon.social/@elac/111052512381408863). Then my frustration got the best of me and I decided to post to the Gentoo forum and let people know that the Gentoo Wiki signup process was prohibitive and that a note needed to be added to the Handbook to let people know that installing Gentoo on a G5 using Yaboot is broken. [That did not go well](https://forums.gentoo.org/viewtopic-t-1165052.html). As of this writing, the Handbook has not changed and some poor soul is wasting hours on end trying to get Gentoo installed on a PowerMac G5.

What's that? The [discussion tab](https://wiki.gentoo.org/wiki/Handbook_Talk:PPC64/Installation/Bootloader) on the Handbook suggests using Grub instead of Yaboot? Fool me 100 times, shame on me. I ran through two or three more Gentoo installs, this time trying to boot with Grub. No luck. Once again, I am done with Gentoo. 

At this point I had visions of going back to whatever latest version of OS X would run on the G5 and then run a virtualized Linux install. Turns out virtualization really wasn't a thing people did back when the G5 was in its prime. There was a lot of emulation of x86 for Windows and Linux, but no apps that supported virtualization. (QEMU was a thing, but the only examples I found were already running on a PPC Linux install, not OS X.) 

More Googling, more searching. I kept seeing results from YouTube talking about "[Installing MODERN DEBIAN on a Power Mac G5!](https://www.youtube.com/watch?v=g-Ugfqj1ank)" and just kept ignoring them because who watches videos that should be a blog post. So I finally watched the video (at 1.5 speed, of course). Dude really had this one weird trick to get Debian Sid running on this old PowerMac G5? Yes, yes he did. Somehow, downloading the "unofficial" Debian 12 PPC64 ISO, burning it to CD, and installing the OS just worked. I can't believe such a thing even exists, but it does, and it's amazing. Modern magic.

So huge thanks to [John Paul Adrian Glaubitz](http://users.physik.fu-berlin.de/~glaubitz/), a volunteer Debian developer that still regularly cranks out PowerPC install images and manages the [Debian PowerPC mailing list](https://lists.debian.org/debian-powerpc/). Crazy that it all comes down to one person keeping all this old hardware useful in the modern age. 

