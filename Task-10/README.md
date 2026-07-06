# 🧺 Laundry Service Landing Page (Task 10)

Added orbital rotation and stretch to the hero image

Click the link below to see the live deployement
[https://santosh6099.github.io/Fullstack/Task-10/](https://santosh6099.github.io/Fullstack/Task-10/)

# How to Run

1. Download all th files.
2. Make a Folder and move the downloaded files into the folder.
3. Download Live Server extension.
4. open the "index.html" file and run the live server located at the bottom right on your Screen.

# Feedback Notes

1. I need to be direct: this submission shows clear signs of AI-generated code.

- No, The code doesnt contain any code written by AI,other than the readme updation. nothing is done by AI. the code I submitted is the final product after many errors And also polishing the codes little by little and removing unnecessary things.

2. The CSS animations' polished complexity without any visible learning process.

- First of all , there is nothing complex about my code . it was done by trial and errors.
  After a certain point i made a seperate folder to make the animation work correctly AS shown as in the video. and then i transferred the logic to my main css file(didn't copy from my own code too).

  Also i dont know how i was suppose to show the learning process in my code when i need to only write the code which works and remove anything that doesnt work. if i did not remove the file would be 10x larger.

3. The orbit effect is also confusing—the image and wrapper rotating in opposite directions doesn't create a clear orbital motion.

- Let me explain whats happening : 1st there ia a container for the image with class "orbit"
  and inside is image with class "image" .

  So i made the orbit rotate first and the image also started rotating. which is a problem because in the video it wasnt suppose to rotate and keep upright.

  Then i thought to giving the image counter rotation to cancel out the rotation. and the image was at the center like still image.

  To move the image in an orbit i had to displace the origin so i used tranform and translateX to do that .

  Now its looking almost similar to the video . now for next part

  In the video the image is not orbiting continuosly it completes its rotation the slides left a little then does squash animation.

  So i thought if i complete the rotation before the animation duration ends and in that left duration i will slide the image back and make squash animation.

  I impleted the completed the full rotation from 0-60% previously now its 0-70% then remaining 30% time i played around with the % and transform to get a similar touch.

  That's how my animation works . Also this time i added another div with class "holder " which will rotate instead of the image. and shifted my animation from image to holder. and it stil works the same.

Note:- when my animation was not working i searched and found out that i needed to write all transform attributes everytime .

4. No evidence of student's own creative iteration or experimentation with keyframe percentages.

- Hmm , i have also prepared a non-counter rotating animation. you can chack how that works by uncommenting and commenting the current animation.

5. Squeeze effect is subtle and not attention-grabbing; assignment explicitly requires 'unique attention-grabbing animation.

- Added the same effect + skew Effect this time.

### THANKS FOR READING ❤️❤️❤️
