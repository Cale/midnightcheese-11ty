---
title: CHIP
excerpt: Single board computer.
layout: post-without-comments.njk
tags:
- Projects
- CHIP
- wiki-projects
---
# CHIP

*{{ excerpt }}*

Flashing firmware/OS

Put your CHIP in FEL mode by putting a jumper wire between GND and FEL. Connect the CHIP to your computer with USB (using the microUSB port on the CHIP, not the fullsize USB port).

Download chip-tools [ttps://github.com/Project-chip-crumbs/CHIP-tools](https://github.com/Project-chip-crumbs/CHIP-tools)

install deps: sudo apt install android-tools-fastboot sunxi-tools u-boot-tools

Downgrade sunxi [https://github.com/Thore-Krug/Flash-CHIP/issues/21](https://github.com/Thore-Krug/Flash-CHIP/issues/21)

Here is how you downgrade sunxi-tools on newer versions of Ubuntu based distros.

Append deb http://de.archive.ubuntu.com/ubuntu/ bionic main universe to /etc/apt/sources.list

Do sudo apt update   
Install the package: sudo apt install sunxi-tools=1.4.1-1   
Mark hold to prevent upgrade: apt-mark hold sunxi-tools

To prevent any other complications Remove deb http://de.archive.ubuntu.com/ubuntu/ bionic main universe from /etc/apt/sources.list

./chip-update-firmware.sh -s

Access CHIP from host machine: Plug into USB, then: screen /dev/ttyACM0 115200

user: chip   
pass: chip

Set up wireless

sudo nmtui

[https://yoursunny.com/t/2019/bye-CHIP/](https://yoursunny.com/t/2019/bye-CHIP/)   
[https://yoursunny.com/t/2018/CHIP-flash-offline/](https://yoursunny.com/t/2018/CHIP-flash-offline/)