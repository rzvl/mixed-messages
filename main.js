// choose a random number based on the number provided

function random(num) {
  return Math.floor(Math.random() * num);
}

// messages

const luckLevel = random(101);
const loveLevel = random(101);
const karmaScore = random(101);

const horoscopeMsg = [
  'Things are speeding up, surprising you day after day, and bringing new things to the table when you least expect them. A lot has already changed so you might as well take that next step and bravely pursue a different goal that resonates better with the core of your motivation.',
  'The mind may be playing tricks on you, but your emotions are stable enough and won’t change easily or be affected until you deal with their messages. It is time to release them and see where they lead, leaving painful or stagnant choices behind and moving on where you will feel happier.',
  'It may not be possible to see or anticipate the outcome, but you have faith that everything will turn out in the best possible way. Some relationships are more promising than they seemed to be, and pieces of a much larger puzzle are finally finding their place and fitting where they are supposed to fit.',
  'The fastest bicycle ride on record had the speed of over 180 mph. You are willing to return to the past to check certain information and things that seem impossible from this point of view. Keep in mind that no other person needs to believe you when you share the truth.',
  'The fastest bicycle ride on record had the speed of over 180 mph. You are willing to return to the past to check certain information and things that seem impossible from this point of view. Keep in mind that no other person needs to believe you when you share the truth.',
  'It is important to enjoy your mornings and start your days with a tender energy of self-care. Wherever the atmosphere and relationships might take you as the day progresses, you can be sure that a solid and healthy foundation will give a certain glow to all your responses.',
  'You are hopeful but at the same time feel a bit lost about the meaning of certain events and losses from the past. In search for balance, you could find most of it in other people, their advice, and words shared with those who have an entirely different perspective than you do.',
  'It has just become clear that you cannot give too much attention to the job you don’t love doing and something must be clarified before you continue with hard work. Parts of your energy may get wasted if you aren’t listening to your inner voice and following your actual path instead of simply striving for status or pure survival.',
  'Finances have been pressuring for a while, but you have established a solid plan that you need to stick to in weeks to come. This month comes with emotional challenges that could distance you and pull you away from material and rational goals. Be careful to seek balance instead of dismissing them altogether, for your most important goals include your emotional world at peace as well.',
  'It has been estimated that traces of cocaine can be found on more than 90% of U. S. dollar bills. When you think about the history of your own possessions, you could feel strange not knowing where they’ve been and how their path came to intertwine with yours. Stay flexible and open to release what you don’t need any longer.'
];

const message = `Luck Level: ${luckLevel}%\nLove Level: ${loveLevel}%\nKarma Score: ${karmaScore}\n${horoscopeMsg[random(horoscopeMsg.length)]}`;

console.log(message);


// Horoscope messages were taken from https://www.astrology-zodiac-signs.com/