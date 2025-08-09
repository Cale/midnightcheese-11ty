---
title: Setting up an AudioCodes 440HD Phone with Hams Over IP
date: 2025-08-09
excerpt: Getting the latest firmware installed is required.
image: https://assets.midnightcheese.com/images/audiocodes-440hd-phone.jpg
tags:
- post
- Hams Over IP
- Amateur Radio
- AudioCodes
---
<h1 class="full-bleed">{{ title }}</h1><p class="date">{{ date | date: "%B %d, %Y"}}</p>

[![AudioCodes 440HD connected to Hams Over IP](https://assets.midnightcheese.com/images/audiocodes-440hd-phone.jpg)](https://assets.midnightcheese.com/images/audiocodes-440hd-phone.jpg)

The [Nashville Amateur Radio Club](https://nashvilleamateurradio.club/) came into a surplus of [AudioCodes 440HD](https://www.audiocodes.com/media/15420/440hd-ip-phone-for-microsoft-skype-for-business-quick-guide.pdf) (PDF) phones so I picked one up with the plan to use it with the [Hams Over IP](https://hamsoverip.com/) VoIP service. With a Hams Over IP [account](https://helpdesk.hamsoverip.com/osticket/) in hand, here are the steps I took to get this phone up and running. 

The first step is to ensure the 440HD is running the latest available firmware. With older firmware installed, my unit was missing a key section that allowed for line setup. At the time of this writing, the latest version of the firmware can be [downloaded from this page](https://audiocodes.sharefile.com/share/view/sc9cdf17f9ec45d09/foeae0b0-f250-4043-816a-ab5b1218e7e5) on the [AudioCodes firmware page](https://audiocodes.sharefile.com/share/view/sc9cdf17f9ec45d09/fo7914a2-4f3a-4000-8957-47bd6f35a3a5). Check the box with the 440HD prefix. The organization on that page is confusing, so be ready. The firmware version that I'm running is 2.2.16.704 which was released in 2024.

With the firmware downloaded, logging into the phone's web interface will be the next step in getting the firmware installed. You'll need to find the phone's IP address on your network. From there you can type the IP address into your web browser.

Log in to the web interface with the **admin** username and **1234** as the password.

On the left side of the page, click on the **Management** button, the **Manual Update** folder, and then click on the **Firmware Upgrade** file. Click to browse for the downloaded firmware file and then click the submit button. The phone will update and restart. 

Once the install is complete, navigate back to the web interface and click on the **Quick Setup** folder on the left side of the page. Next, click on the **Quick Setup** file. On this page you'll see three sections, LAN Setup, SIP Proxy and Registrar, and Line Settings. I left the LAN Setup section alone. Under **SIP Proxy and Registrar**:

- Use SIP Proxy: Enable
- Proxy IP Address or Host Name: pbx-us1.hamsoverip.com
- Proxy Port: 5160
- Use SIP Proxy IP and Port for Registration: Enable
- Use SIP Registrar: Disable

Under **Line Settings**, select Line 1:

- Line 1 Activate: Enable
- Line 1 Display Name: Hams Over IP (This can be anything, your callsign, etc.)
- Line 1 User ID: This is your Hams Over IP username/extension. In my case, 101248
- Line 1 Authentication User Name: This is the same as above.
- Line 1 Authentication Password: Your Hams Over IP password
- Line 1 Mode: Private

[![AudioCodes 440HD web interface](https://assets.midnightcheese.com/images/audiocodes-440hd-web-interface-hams-over-ip.png)](https://assets.midnightcheese.com/images/audiocodes-440hd-web-interface-hams-over-ip.png)

That's it! Click submit. The phone will either reboot or connect straight away. Pick up the receiver and dial any of the [Hams Over IP test numbers](https://hamsoverip.github.io/wiki/reference/test-numbers/#hoip-service-test-phone-numbers) and you should get a response. 

The speed dial buttons on the right side of the phone can be programmed through the web interface by clicking on **Personal Settings** then **Function Keys**. The interface should be straight forward from there. As a test I added *97 to dial voicemail.

How did your experience go? Call me at 101248 and let me know!

73   
K4HCK