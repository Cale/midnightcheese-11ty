---
title: Raspberry Pi Touchscreen
excerpt: Notes to get the XPT2046 LCD touchscreen working with a Raspberry Pi.
layout: post-without-comments.njk
tags:
- Projects
- Raspberry Pi
- Touchscreen
- wiki-projects
---
# Raspberry Pi Touchscreen

*{{ excerpt }}*

hdmi_group=2   
hdmi_mode=87   
hdmi_cvt=800 480 60 6 0 0 0   
max_usb_current=1   
dtparam=spi=on   
dtoverlay=ads7846,penirq=25,speed=10000,penirq_pull=2,xohms=150   
display_rotate=2

Install driver   
[https://github.com/CytronTechnologies/xpt2046-LCD-Driver-for-Raspberry-Pi](https://github.com/CytronTechnologies/xpt2046-LCD-Driver-for-Raspberry-Pi)

download and install touch calibrator:

wget [http://adafruit-download.s3.amazonaws.com/xinput-calibrator_0.7.5-1_armhf.deb](http://adafruit-download.s3.amazonaws.com/xinput-calibrator_0.7.5-1_armhf.deb)

sudo dpkg -i -B xinput-calibrator_0.7.5-1_armhf.deb   
Run calibration from menu item

[https://www.reddit.com/r/raspberry_pi/comments/4vy2p5/how_to_install_xpt2046_resistive_touch_screen/](https://www.reddit.com/r/raspberry_pi/comments/4vy2p5/how_to_install_xpt2046_resistive_touch_screen/)