---
title: Windows 98 QEMU AARON
excerpt: Running the computational art screensaver AARON with QEMU and Windows 98.
layout: post-without-comments.njk
tags:
- Projects
- AARON
- QEMU
- Windows
- wiki-projects
---
# Windows 98 QEMU AARON

*{{ excerpt }}*

[https://computernewb.com/wiki/QEMU/Guests/Windows_98#Display_driver_installation]()

[https://archive.org/details/kurzweilcyberart_aaron]()

Once Installed

qemu-system-i386 -hda aaron-win98.img -cdrom win98.iso -device VGA,vgamem_mb=64 -cpu host -m 256 -accel kvm -M pc-i440fx-2.4,hpet=off -netdev user,id=lan -device pcnet,netdev=lan -usb -device usb-mouse -rtc base=localtime -monitor stdio