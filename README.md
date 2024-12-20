# Advent of Code 2024, in JavaScript with the help of AI
This time in JavaScript with the help of AI ([Cursor IDE](https://www.cursor.com/))

## Description
Every year I take a stab at Advent of Code, each year I try something new so it's not only fun but also a learning experience.

Since I skipped 2023 because life was too busy - this year I decided to go for a langauge I'm familiar with. I still wanted to try something new and since AI is all the rage - I decided to use an AI assistant while doing the challenges.

I'll be documenting my learnings in this README.md file and also in random skeets on [BlueSky](https://bsky.app/profile/mazur.today) or Mastodon [Mastodon](https://hachyderm.io/@mazur).

## Findings

### Pre-work
- Since I've been away from coding for a while - it was nice to have suggestions on project structure and tools to use. 
- Most of the suggestions I got were wrong, or just dumb. For example using Jest instead of the built in testing framework or using async to wait for syncronous reads.
- Refactoring my code to a generator automatically was nice, but it didn't do a great job as it started to change things. I spent a lot of time fixing AI misstakes.
- AI is really bad at git!
- Lastly, when suggesting authors it just started adding in random names of other people.
- Today I went from intigued to worried.
- I'm not sure AI saved me any time today - probably would have been quicker without it.

### Day 01
- I miss read the puzzle and was trying to be to clever. AI saved me by being able to refactor out the stuff I did not need.
- It's starting to feel a bit better working with the AU as I get more familiar with it.
- Feed the AI smaller asks, it will do better. Be very specific in your prompts and pick words wisely.
- The auto-complete is quite nice, especially when you've been away from coding for a while. It gives you decent code to work from.

### Day 02
- Working with AI can be stressful and confusing - it just adds code that I need to spend figuring out.
- It does give some clever solutions to specific problems. Like using Math.sign to check the direction of the change.
- It's helpful in refactoring simple code like tests in bulk.
- Overall, I'm slightly frustrated. Still would have been quicker to do it manually; we are both learning.
- I find it tough to trust the AI. It actually suggested a correct solution for Part 2; but I wanted to be more clever. I ended up reverting my clever solution and went with the AI suggested one.

### Day 03
- AI helped a lot with regexp
- For this specific puzzle the AI assistant was surprisingly helpful.
- The "high-jacking" of [TAB] key to autocomplete code is quite annoying as I sometimes just want to write a tab.

### Day 04
- Initially on part 1 the AI was legitimately helpful. It generated a solution which was almost correct and only needed some minor fixes.
- On part 2 it was not helpful at all. Even on smaller tasks it was generating code which was too complex or not solving the problem correctly.
- I eventually rewrote all of part 2 by hand, just to get it done.
- I've also discovered that the AI keeps jumping between code styles a lot, this would lead to a code base that does not have a consistent style.
- I also ran my prompts through chatGPT-4o and compared them to Claud3.5-sonnet that is default in Cursor. I would say the chatGPT-4o generated slightly better code.
- Generally, I'm back to hating the experience of an AI coding companion.

### Day 05
- Coding with AI is less fun. You spend less time figuring out the problem and more time debugging code.
- AI makes simple misstakes like mixing up logical tests.
- WOW! AI loves complicated solutions. I tried to get me to implement part 2 using a dependency graphg and Kahn's algorithm. Way to over engineer it AI buddy!
- Personal refelction is that the more/better help I get the less fun I'm having solving the puzzles.

### Day 06
- Damn I hate JavaScript. I hate Sets and Maps and how they work. The langauge is so primitive!
- I'm getting into the flow of working with AI, but damn it is dumb.
- The rythem is something like, prompt, run tests, debug, prompt, clean up manualy.
- While useful at times I do find it annoying that it keeps changing and rewriting code from scratch, even when not needed.
- AI also sucks att efficient codeand optimizing code. The first solution I had for part 2 today took 8s to run. I would have never implemented it that way to begin with. The AI also failed all optimization attempts. I finally did a manual optimization, which isn't the best one; but it brings it donw to 2s - and that was only a very minor change that the AI couldn't figure out.

### Day 07
- Today the AI did really good. I spent some time on engineering the prompt to explain what I wanted and that made it generate code that was much more aligned with how I would solve it.
- The AI threw in some, unexpected, but clever solutions on part 2.
- All in all, I think I'm getting the hang of how to work with an AI companion; both on larger solutions and smaller line-by-line fixes.
- Somehow, it feels like cheating; but since this year was about trying out AI coding assistants I will keep at it.
