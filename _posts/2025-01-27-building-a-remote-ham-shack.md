---
title: 'Building a "Remote" Ham Shack'
date: 2025-01-27
excerpt: 
tags:
- post
- Ham Radio
---
<h1 class="full-bleed">{{ title }}</h1><p class="date">{{ date | date: "%B %d, %Y"}}</p>

This project aims to accomplish two goals: Receiving and decoding automatic picture transmissions (APT) from weather satellites and achieve APRS QSOs via the International Space Station APRS digipeater. It's turning into a two-part project as the cost ended up being a bit more than anticipated. Part 1 will focus on receiving while part 2 will focus on a transmit option. 

The "remote" portion of the project includes setting this station up in the little shed attached to our carport. Remote is in quotes because while the station won't be physically located in the house, it will still be accessed on the same home wireless network. One of the sub goals is to get a good understanding of remote access best practices. (Ubuntu is already proving difficult in a way that is compromising security.)

Another sub goal is to introduce an SDR transceiver to the mix. An SDR with transmit capability turned out to be very budget unfriendly, so this will be a hybrid SDR receive, and likely a cheap mobile rig used to transmit. If it all works out and I get good use out of this project, maybe I can justify an SDR transceiver in the future.

## Project Task List

In no real order, various tasks to get this project in a complete state:

**Part 1**

- ~~Properly mount window AC unit~~
- ~~Reseal window AC unit~~
- ~~Permanently mount dehumidifier~~
- ~~Route dehumidifier drain hose~~
- ~~Antenna access ports~~
- ~~Remove junk~~
- Replace door frame
    - Clean surrounding floor
    - Caulk
    - Paint
- ~~Install shelving~~
- ~~Assemble ADS-B antenna~~
- Assemble [EggNOGS antenna kit](https://electronics.halibut.com/product/eggnogs/)
- ~~Mount mast bracket~~
    - Mount EggNOGS antenna kit
    - Mount ADS-B antenna
    - Acquire and mount mast
- ~~Format PC / Install [Ubuntu](https://ubuntu.com/)~~
- ~~Set up remote desktop software~~
- ~~Set up [SDR++](https://www.sdrpp.org/)~~
    - ~~Set up Inmarsat receive~~
    - Set up APT reception and decoding

**Part 2**

- Acquire transmit rig parts
    - Transceiver
    - Audio interface
    - SDR antenna switcher

## Prepping the Space

The remote location is a small building attached to our carport. It's large enough to store the lawn tractor and a small workbench. The structure was added by a previous owner and unfortunately didn't consider water run-off coming from the driveway. As a result of the slab elevation being below the driveway and a rotten doorframe, the building is prone to flooding with water after heavy rains. Securing the structure from water has been a priority. Until the doorframe is repaired I've been able to sandbag both sides of the doorway and keep things dry. Long-term, a drainage channel needs to be cut along the driveway. 

Another water issue was the window mounted AC unit. Another add-on by a previous owner, this was also incorrectly installed resulting in the window frame nearly being at the point of no repair. The unit also wasn't sealed which resulted in insects, and moisture getting in. 

With the addition of a dehumidifier, the space is at least at the point where items stored are no longer at risk of rust or mold. 

## Remote Computer Setup

For the computer I'm repurposing an old custom built gaming rig. It's running an 8 core i7 with 16GB of RAM and an old GeForce GTX 760. In other words, way overpowered for just about anything ham radio related. The hard drive is an old Western Digital IDE Green drive which slows things down but again, still adequate for anything radio related. 

The OS is Ubuntu, by far the most stable and best supported Linux distro. Not looking to experiment with something exotic. Just need an OS that works in the background.

As robust as Ubuntu is, the remote access component of the OS is the only piece that's lacking. From what I've discovered so far, the only way to keep a persistent GUI session running is to keep the user logged in and not allow the lockscreen to kick in when idle. This essentially leaves an open machine to my network on the chance someone walked into the shed and started poking around. Low risk given the environment, but not great.

Ubuntu offers "Remote Login" instead of "Desktop Sharing" which creates a new session on login (and would avoid the open terminal problem) but the session and anything running is destroyed when simply closing the remote connection. 

There's probably a better solution out there, but I haven't found it yet.

## Antennas

The goal is to mount an egg beater type antenna capable of both receive and transmit abilities on a 10-20 foot pole. I'm experimenting with using a length of [chain link fence rail](https://www.lowes.com/pd/Galvanized-Steel-Chain-Link-Fence-Top-Rail/999989216) attached to an antenna mount that's mounted to the external brick of the shed.

A major component to even starting this project is the availability of [Halibut Electronics'](https://electronics.halibut.com/) [EggNOGS antenna](https://electronics.halibut.com/product/eggnogs/). As the names suggests, it's an egg beater antenna design that also provides transmit capabilities. I haven't seen anything else comparable in this price range with most other solutions costing 5-6x that of the EggNOGS.

I went with the 2 meter version of this antenna in order to work the ISS digipeater. What I didn't anticipate was how large the arial loops would be. All the photos online illustrate a much smaller setup for 70cm use. I'll need to acquire a thicker gauge wire before permanently installing this antenna as 14 gauge is way too flimsy and will fall over in the wind.

A bonus antenna project will be upgrading my old ADS-B cantenna that's been in the attic to a proper ADS-B antenna mounted below the EggNOGS.

## ADS-B for FlightAware

With the ADS-B antenna mounted only a few feet off the ground, reception is already better than what I was seeing in the attic. Planes at a much further distance are already being logged. Can't wait to see performance once this antenna is above the houses. 

## Receiving Weather (WX) Satellites

These results are from early tests with the EggNOGS mounted only on a small tripod.

## Receiving SSTV, Voice, and Packet from Satellites

## APRS and Xastir

## Bonus Projects

APRS & Xastir

**GlobalTalk**  
GlobalTalk is a retro computing project that links AppleTalk nodes to one another across the internet. Back in the day, AppleTalk generally functioned as a local area network function. I'm running a node by utilizing QEMU to emulate Apple System 7.6. You can learn more on the GlobalTalk project page.

**Archive Team**   
The Archive Team project seemed interesting and with a dedicated computer running 24/7, I thought I'd give it a try. Resource use is much more minimal than I anticipated, especially in terms of bandwidth usage. A fun and worthy project if you have the dedicated compute and bandwidth available. 