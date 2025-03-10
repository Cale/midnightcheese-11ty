---
title: Notes From Setting up GlobalTalk Using QEMU on Ubuntu
date: 2025-03-10
excerpt: Overcoming the bridged network requirement was a challenge.
image: https://assets.midnightcheese.com/images/qemu-globaltalk-macintosh-system-7.6.png
tags:
- post
- QEMU
- GlobalTalk
- MARCHintosh
- Apple
---
<h1 class="full-bleed">{{ title }}</h1><p class="date">{{ date | date: "%B %d, %Y"}}</p>

I signed up for [GlobalTalk](https://marchintosh.com/globaltalk.html) in 2024, but never found the time to get a machine set up. Fast-forward to MARCHintosh 2025 and I wasn't going to let another year go by. This is a series of notes from my experience getting System 7.6 up and running on [QEMU 68k](https://wiki.qemu.org/Documentation/Platforms/m68k) on Ubuntu. Hopefully this will help others that might be hitting a roadblock. I certainly hit several!

[![QEMU running GlobalTalk with Apple System 7.6 on an Ubuntu host machine.](https://assets.midnightcheese.com/images/qemu-globaltalk-macintosh-system-7.6.png)](https://assets.midnightcheese.com/images/qemu-globaltalk-macintosh-system-7.6.png)

It's worth pointing out that the documentation the GlobalTalk community has put together around getting all the Apple specific pieces configured has been spectacular. The vast majority of the issues I've run into have been related to virtual machine software interacting with its host, specifically networking and setting up a bridge between the host and virtual machine. With that said, on to the pain-points:

The first roadblock was realizing that the physical hardware I had planned on using for GlobalTalk wasn't going to be compatible. I have a PowerBook G3, but even though I've been an Apple user since the Apple II days, I completely forgot about the new world vs. old world ROM situation. The PowerBook being new world meant that System 7 was a non-starter on that machine. (I tried Basilisk on the G3, but that just wasn't happening. Never could get anything to boot.)

Fortunately I had an amd64 based home server of sorts running Ubuntu that I could dedicate a 24/7 emulated setup to. This turned out to be very challenging. I started with [Basilisk II](https://basilisk.cebix.net/) but ran into problems when starting Apple Internet Router. System 7 would bomb every time. This happened on three different machines, two Ryzen CPUs and an old i7. 

Switching to QEMU immediately solved the AIR bombing issue, but networking quickly became problematic since built-in, plug and play network bridge support isn't really a thing for QEMU on Linux. This was such a tough problem to solve, I almost gave up. I'm very comfortable in Linux, but networking has always been somewhat of a black box for me. To solve the bridge issue, I ended up following the method [described in a post from europlus](https://blog.europlus.zone/community/marchintosh-wrap-up-globaltalk-news/). While that post talks about needing a dedicated separate network interface card, I was able to apply the process without an external NIC. 

With that obstacle removed, the rest was fairly painless. There was some trial and error getting additional virtual hard drives to be recognized by QEMU. I wanted to have a couple drives separate from the main Macintosh HD, one to serve as a staging area to filter through what I wanted to share with the GlobalTalk network and another drive dedicated completely to sharing over the network. Getting the QEMU command just right to share those additional drives took some trial and error, but here is what I ended up with:

> qemu-system-m68k -M q800 -m 128 -bios Quadra800.ROM -display gtk -g 1152x870x8 -drive file=pram.img,format=raw,if=mtd -device scsi-hd,scsi-id=0,drive=hd0 -drive file=System7.6.hda,format=raw,media=disk,if=none,id=hd0 -device scsi-hd,scsi-id=1,drive=hd1 -drive file=GlobalTalkStaging.img,format=raw,media=disk,if=none,id=hd1 -device scsi-hd,scsi-id=2,drive=hd2 -drive file=GlobalTalkShare.img,format=raw,media=disk,if=none,id=hd2 -nic bridge,model=dp83932,br=br0

Properly formatting the drives via System 7.6 took some trial and error as well, eventually figuring out that Drive Setup 1.5 got the job done.

There seems to be conflicting info on how large an additional virtual hard drive can be, but without a lot of trial and error, I was able to create a pair of 2GB drives. The qemu-img utility is great for this.

> qemu-img create -f raw -o size=2G my-new-drive.img

That's about it! If you're on GlobalTalk, look for the MidnightCheese server. Maybe next year I can plan on having my old SE/30 online.