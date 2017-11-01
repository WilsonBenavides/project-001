#!/bin/bash
#running program on start..
pwd
cd /home/pi/Desktop/projects
echo "launching browser..."
chromium-browser --kiosk 192.168.1.6:3000/public
node server
