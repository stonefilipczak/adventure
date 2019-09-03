# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

Scene.create(blurb:"intro", prompt:"Thank you for agreeing to meet me here. It's been a long time since I've had visitors. You've been here before, haven't you?", choiceA:"Yes", choiceB:"No", pathA: "Yes", pathB: "No")

Scene.create(blurb:"Yes", prompt:"I thought so! I remember you! So, are you interested in writing a story for me to read?", choiceA:"Definitely!", choiceB:"Not at all.", pathA:"readme", pathB:"oh")

Scene.create(blurb:"No", prompt:"Really? I thought...well, if you say so. So, are you interested in writing a story for me to read?", choiceA:"Yes!", choiceB:"Not really.", pathA:"readme", pathB:"oh")

Scene.create(blurb:"readme", prompt:"Great! Consult my readme for some instructions, or just start hacking away. I'm excited to play a part in your tale!")

Scene.create(blurb:"oh", prompt:"Oh...ok. Well, I hope you change your mind. Non-linear storytelling is very in right now.")



