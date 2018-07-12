# Water Works

An app built with React/Redux, to the following specifications:
- Allow the user to log when and how much water they have consumed
- Allow the user to view how much water they have consumed on the current day

Nice to have:

- Allow the user to view how much water they have consumed on previous days


## To run this app

Required: yarn, vagrant, command line tool.

1. In the command line, run ```git@github.com:KateHoward10/water-api.git```
2. Navigate into water-api
3. Run ```vagrant up```
4. In another terminal window run ```git clone git@github.com:KateHoward10/water-works.git```
5. Navigate into water-works/water-works
6. Run yarn start


## Initial thoughts

I started off by making some rough wireframes and coming up with features I'd like the app to include:
- the ability to edit the amount and time of each drink (user might have entered the amount incorrectly/inaccurately, or had the drink some time ago)
- daily total visualised with stylised water glasses, or maybe just blue blobs
- list of drinks separated into days, with user able to select one day at a time
- facts about water intake in the footer, maybe changing randomly on page reload

Having rustled up the basic structure of the app, which retained amounts and times in its state, I set about using Laravel to build an API, which would persist the data and allow the user to look back on previous days.

I also shared my designs and ideas with some friends, who really did seem to like all the features I had come up with, and also suggested being able to set a target (or even calculate how much water to aim for) and having some sort of visualisation in the app of progress towards this target.