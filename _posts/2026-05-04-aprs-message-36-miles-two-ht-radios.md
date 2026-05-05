---
title: APRS Messaging 36 Miles with Two HTs
date: 2026-05-04
excerpt: What I really wanted to see was a true RF to RF message setup.
image: https://assets.midnightcheese.com/images/aprs/aprs-messages-ham-shack.png
tags:
- post
- APRS
---
<h1 class="full-bleed">{{ title }}</h1><p class="date">{{ date | date: "%B %d, %Y"}}</p>

Open up [aprs.fi](https://aprs.fi/) and most of the traffic you'll see is position based. I've spent many years playing around with that aspect of [APRS](https://www.aprs.org/) but recently had an opportunity to play with the messaging side. With the rise of [Meshtastic](https://meshtastic.org/), I've become more curious about what APRS messaging is capable of considering availability of greater transmit power and a long established network of igates and digipeaters. I've successfully received messages over RF from an internet connected source such as [APRS Graffiti Wall](https://radiorabbit.ca/aprs-wall/) and [APRS WX Bot](https://sites.google.com/site/ki6wjp/wxbot). What I really wanted to see was a true RF to RF message setup.

I run an igate here in Murfreesboro with both receive and transmit capability, so one side of the RF based messaging equation has already been complete for some time. It's a modest station powered by [Direwolf](https://github.com/wb2osz/direwolf) and a lowly Quansheng UV-K5 5 watt HT. But it's connected to a large dual-band vertical about 20 feet off the ground which provides excellent reception and decent transmission to local digipeaters.

A few months ago I had the chance to set up a temporary APRS station in the Nashville Metro Center area. This station was very similar, a 5 watt Kenwood HT powered by Direwolf, but connected to a j-pole set up on a 4th story balcony practically with line of sight to one of the most powerful digipeaters in the area, [W4CAT-1](https://aprs.fi/#!v=heard&call=a%2FW4CAT-1&timerange=3600&tail=3600). W4CAT-1 sits at about 1,000 feet atop Music Mountain.

[![Looking toward W4CAT-1 from 4 stories up](https://assets.midnightcheese.com/images/aprs/view-toward-w4cat-1-n4zk-2.jpg)](https://assets.midnightcheese.com/images/aprs/view-toward-w4cat-1-n4zk-2.jpg)

Looking toward W4CAT-1 from 4 stories up.

The goal was to see if I could successfully send messages between the igate in Murfresboro and the station just north of downtown Nashville. [Beeline](https://www.scadacore.com/tools/rf-path/rf-line-of-sight/), that's about 36 miles with a solid ridge in between. Running simplex, there's no chance the two HTs are reaching each other even with the enhanced antenna setups.

[![Google Maps showing the distance between Nashville and Murfreesboro](https://assets.midnightcheese.com/images/aprs/murfreesboro-nashville-distance-map.png)](https://assets.midnightcheese.com/images/aprs/murfreesboro-nashville-distance-map.png)

[![Elevation map between Nashville and Murfreesboro](https://assets.midnightcheese.com/images/aprs/radio-path-study.png)](https://assets.midnightcheese.com/images/aprs/radio-path-study.png)

Elevation in meters. Nashville sits in a bowl.

For this experiment I was at the Nashville location using my laptop to remote into my shack in Murfreesboro. Both stations were running [Xastir](https://github.com/Xastir/Xastir) on top of Direwolf to send and receive messages. To my delight, messaging worked surprisingly well! It wasn't perfect. There were several messages received by each station that never acked back. Some messages were never received, period. My best guess is a combination of low transmit power and significant traffic (packet collision) resulted in the failed messages. (There's near constant APRS activity in the Middle Tennessee area.) But it was successful enough to conduct reliable communication if the Nashville station were permanent.

[![K4HCK station in Murfreesboro running Xastir](https://assets.midnightcheese.com/images/aprs/aprs-messages-ham-shack.png)](https://assets.midnightcheese.com/images/aprs/aprs-messages-ham-shack.png)

K4HCK station in Murfreesboro running Xastir.

Here's a breakdown of how the packets traversed the various digipeaters in the area:

If I'm reading the aprs.fi logs correctly, packets originating from Nashville followed the path of:

K4HCK-11 -> NZ4K-1 -> W4CAT-1 -> W4DMM-3 -> K4HCK

Unfortunately it doesn't look like I was able to capture a screenshot of the RF path of packets originating from Murfreesboro, but usually they follow a route like this:

K4HCK -> W4DMM-3 -> W4CAT-1 -> destination

The idea of reliable messaging across nearly 40 miles is impressive. I just wish I had a good use case to keep the second station running permanently.

[![RF packet path.](https://assets.midnightcheese.com/images/aprs/aprs-path.jpg)](https://assets.midnightcheese.com/images/aprs/aprs-path.jpg)

RF Packet Path.

[![K4HCK-11 station setup with a j-pole, Kenwood HT, and Raspberry Pi](https://assets.midnightcheese.com/images/aprs/aprs-raspberry-pi-setup.jpg)](https://assets.midnightcheese.com/images/aprs/aprs-raspberry-pi-setup.jpg)

K4HCK-11 station setup with a j-pole, Kenwood HT, and Raspberry Pi.

[![K4HCK-11 station setup with a j-pole](https://assets.midnightcheese.com/images/aprs/j-pole.jpg)](https://assets.midnightcheese.com/images/aprs/j-pole.jpg)

J-pole detail.

[![K4HCK-11 station detail](https://assets.midnightcheese.com/images/aprs/k4hck-11-xastir-direwolf.jpg)](https://assets.midnightcheese.com/images/aprs/k4hck-11-xastir-direwolf.jpg)

K4HCK-11 station detail.
