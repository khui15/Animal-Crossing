---
title: Animal Crossing Project
date: "2019-04-09T22:40:32.169Z"
featuredImage: "./hero.jpg"
---

## The Motivation

Basically, I jumped on the Animal Crossing bandwagon and have never looked back. As with many other games such as Terraria, Stardew Valley and Harvest Moon, my favourite activity is fishing. I can spend hours just fishing - collecting clams, making bait, collecting fish. However, I realised that I was tired of having to look at the Animal Crossing Wiki to try and figure out what fish are available and when... thus, I created [this](https://animal-crossing-catches.eunike.dev) website.

There are existing alternatives which allow users to figure out what fish are available, such as the [Animal Crossing Wiki](https://animalcrossing.fandom.com/wiki/Fish_(New_Horizons)#Southern%20Hemisphere) itself and this [Google Sheets compilation](https://docs.google.com/spreadsheets/d/1Wm5wZov6PIVCX5lYsipK6DQJrh_tdTH92z1jJSzv5Bo/edit#gid=54869885). However, I wanted something low effort for my lazy soul and I also wanted to have some fun creating it. My React skills were getting a little rusty as well, so this was the perfect mini project.

## The Project

So there were three main features I wanted on the site.

**#1 Available Now** 

I wanted something which showed me what fish and bugs were available at the current time so that I did not waste my time grinding a fish that wasn't even available.

**#2 Available This Season**

I also wanted to know what fish/bugs were available this season, just so that I did not get my hopes up waiting for a fish that would never even appear until 6 months.

**#3 Best Time**

The last feature I wanted would be the ability to search what the best time would be to catch each fish. This would be especially important if I wanted to catch a fish which had a very common size.

## The Data

Since I knew what features I wanted, the next problem would be how I would store the data. JSON objects were the first thing that came to mind, but obtaining those JSON objects were another problem on its own. I ended up recruiting the help of my partner to scrape the data off the fish Wiki for me.

He then gave me the script so that I would be able to learn from it and adjust it depending on what I'd like to change as the project progressed. 

## Deployment

Once I was ready to deploy a basic version of the site, I realised that Github Pages did not like Browser Router. Another solution would be to use Hash Router, but for some reason that did not work for me either. Thus, I moved onto Netlify! I actually enjoy it a bit more than Github as it actually shows you the progress of your deployment so I didn't have to keep refreshing and waiting to see if the page was broken or if it just wasn't ready yet. I considered deploying on AWS but that seems a bit overkill for this small project.

## The Result

Now I have both a vision and the data... so BAM website created. Well the basic foundations of it anyway. I can't wait to see how it'll grow over time.
