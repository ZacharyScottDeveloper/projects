const wyrQuestions = [
  // --- FUNNY & WEIRD ---
  {
    id: 1,
    optionA: "Always have to sing instead of speaking",
    optionB: "Always have to dance instead of walking",
    category: "Funny",
  },
  {
    id: 2,
    optionA: "Have a permanent clown nose that honks when you are nervous",
    optionB: "Have permanent puppy ears that droop when you are sad",
    category: "Funny",
  },
  {
    id: 3,
    optionA: "Only be able to whisper everything you say",
    optionB: "Only be able to shout everything you say",
    category: "Funny",
  },
  {
    id: 4,
    optionA: "Have your hands replaced with dynamic crab claws",
    optionB: "Have your feet replaced with flippers",
    category: "Funny",
  },
  {
    id: 5,
    optionA: "Sweat warm maple syrup",
    optionB: "Cry cold fizzy lemonade",
    category: "Funny",
  },
  {
    id: 6,
    optionA: "Have to wear a full medieval suit of armor everywhere you go",
    optionB:
      "Have to wear a full scuba diving suit with fins everywhere you go",
    category: "Funny",
  },
  {
    id: 7,
    optionA: "Burp uncontrollably every time someone says your name",
    optionB: "Sneeze uncontrollably every time you look a stranger in the eye",
    category: "Funny",
  },
  {
    id: 8,
    optionA:
      "Have a ghost who constantly narrates your life like an documentary",
    optionB:
      "Have a background laugh track follow you around that reacts to your failures",
    category: "Funny",
  },
  {
    id: 9,
    optionA: "Always smell like freshly fried onions",
    optionB:
      "Always smell like dynamic rotten eggs but you can't smell it yourself",
    category: "Funny",
  },
  {
    id: 10,
    optionA: "Have teeth made of soft sponge cake",
    optionB: "Have nails made of brittle potato chips",
    category: "Funny",
  },
  {
    id: 11,
    optionA: "Accidentally swap bodies with a random street cat once a month",
    optionB:
      "Accidentally swap bodies with your boss for one hour every Monday",
    category: "Funny",
  },
  {
    id: 12,
    optionA: "Every dog you meet aggressively judges your outfit out loud",
    optionB: "Every bird you meet gossips about your secrets to other humans",
    category: "Funny",
  },
  {
    id: 13,
    optionA: "Have everything you touch turn into sticky marshmallows",
    optionB: "Have everything you touch turn into slippery ice cubes",
    category: "Funny",
  },
  {
    id: 14,
    optionA:
      "Your only outfit for the rest of your life is a giant hot dog suit",
    optionB:
      "Your only outfit for the rest of your life is a formal tuxedo made of bubble wrap",
    category: "Funny",
  },
  {
    id: 15,
    optionA: "Have your hair grow 30 centimetres every night",
    optionB: "Have your fingernails grow 5 centimetres every hour",
    category: "Funny",
  },
  {
    id: 16,
    optionA: "Always wake up covered in green glitter",
    optionB: "Always wake up smelling exactly like dynamic wet cardboard",
    category: "Funny",
  },
  {
    id: 17,
    optionA: "Have a third eye on the back of your head that blinks at people",
    optionB:
      "Have a second mouth on your neck that only complains about the weather",
    category: "Funny",
  },
  {
    id: 18,
    optionA:
      "Have your alarm sound be a live mariachi band playing in your room",
    optionB: "Have your alarm sound be a chorus of screaming goats",
    category: "Funny",
  },
  {
    id: 19,
    optionA: "Be completely immune to brain freeze but get it from warm soup",
    optionB:
      "Be completely immune to spicy foods but faint if you eat a strawberry",
    category: "Funny",
  },
  {
    id: 20,
    optionA: "Lose the ability to use zippers forever",
    optionB: "Lose the ability to use buttons forever",
    category: "Funny",
  },

  // --- SUPERPOWERS & SCI-FI ---
  {
    id: 21,
    optionA: "Be able to fly but only at a maximum speed of 5 km/h",
    optionB: "Be able to run at 100 km/h but only while running backwards",
    category: "Superpowers",
  },
  {
    id: 22,
    optionA:
      "Read the minds of animals but they only talk about food and sleeping",
    optionB:
      "Speak all human languages fluently but you forget how to read entirely",
    category: "Superpowers",
  },
  {
    id: 23,
    optionA:
      "Teleport anywhere instantly but you arrive completely soaking wet",
    optionB:
      "Fly beautifully but you must flap your arms rapidly the entire time",
    category: "Superpowers",
  },
  {
    id: 24,
    optionA: "Be invisible but only when your eyes are tightly closed",
    optionB:
      "Be able to walk through walls but only if you are completely naked",
    category: "Superpowers",
  },
  {
    id: 25,
    optionA:
      "Have the power to pause time for everyone except yourself for 10 minutes a day",
    optionB:
      "Have the power to rewind time by exactly 30 seconds once per hour",
    category: "Superpowers",
  },
  {
    id: 26,
    optionA: "Control fire but you are not immune to being burned by it",
    optionB: "Control ice but you are always shivering uncontrollably",
    category: "Superpowers",
  },
  {
    id: 27,
    optionA: "Have X-ray vision but it only works on cardboard boxes",
    optionB: "Have super strength but only when you are aggressively crying",
    category: "Superpowers",
  },
  {
    id: 28,
    optionA:
      "Be able to breathe underwater but you move at a snail's pace on land",
    optionB:
      "Be able to survive in the vacuum of space but you are terrified of heights",
    category: "Superpowers",
  },
  {
    id: 29,
    optionA: "Know the absolute truth to any historical mystery",
    optionB:
      "Know the exact outcome of any future major event 24 hours before it happens",
    category: "Superpowers",
  },
  {
    id: 30,
    optionA: "Have a literal pause button for your own thoughts and emotions",
    optionB: "Have an internal volume slider to mute outside noise completely",
    category: "Superpowers",
  },
  {
    id: 31,
    optionA: "Change your appearance to look like any celebrity at will",
    optionB:
      "Change your voice to sound like any dynamic singer or actor perfectly",
    category: "Superpowers",
  },
  {
    id: 32,
    optionA:
      "Summon any dynamic food item out of thin air but it's always slightly lukewarm",
    optionB:
      "Summon any piece of clothing you want but it only fits you for one hour",
    category: "Superpowers",
  },
  {
    id: 33,
    optionA: "Have a perfect photographic memory for things you read",
    optionB: "Have perfect muscle memory for any physical skill you try once",
    category: "Superpowers",
  },
  {
    id: 34,
    optionA: "Never have to sleep again with zero negative health effects",
    optionB: "Never have to eat again with zero dynamic nutritional issues",
    category: "Superpowers",
  },
  {
    id: 35,
    optionA:
      "Be able to converse flawlessly with your past self from 10 years ago",
    optionB:
      "Be able to receive a 1-page letter from your future self from 20 years away",
    category: "Superpowers",
  },
  {
    id: 36,
    optionA:
      "Grow or shrink your dynamic body size anywhere between 2 cm and 10 metres",
    optionB:
      "Glow in the dark with a brightness slider you control with your mind",
    category: "Superpowers",
  },
  {
    id: 37,
    optionA:
      "Be able to command an army of 10,000 highly coordinated squirrels",
    optionB:
      "Be able to tame and ride any single mythical creature of your choice",
    category: "Superpowers",
  },
  {
    id: 38,
    optionA:
      "Instantly heal any physical wound on yourself by sleeping for 12 hours",
    optionB:
      "Instantly cure any minor sickness in others by giving them a firm high-five",
    category: "Superpowers",
  },
  {
    id: 39,
    optionA:
      "Have internal GPS in your brain so you are never lost anywhere in the universe",
    optionB:
      "Always know exactly where any misplaced object is located within a 5-mile radius",
    category: "Superpowers",
  },
  {
    id: 40,
    optionA:
      "Be able to control the weather but only in a 10-metre bubble around you",
    optionB:
      "Be able to control gravity but only for objects weighing less than a kilogram",
    category: "Superpowers",
  },

  // --- DEEP & EXISTENTIAL ---
  {
    id: 41,
    optionA: "Know the exact date of your death but not the cause",
    optionB: "Know the exact cause of your death but not the date",
    category: "Deep & Existential",
  },
  {
    id: 42,
    optionA:
      "Live a comfortable, simple life and be completely forgotten by history",
    optionB:
      "Change the world drastically but your name is remembered as a villain",
    category: "Deep & Existential",
  },
  {
    id: 43,
    optionA:
      "Be the first person to successfully colonize a brand new planet alone",
    optionB:
      "Be the last person remaining alive on Earth after everyone else leaves",
    category: "Deep & Existential",
  },
  {
    id: 44,
    optionA:
      "Have everyone you meet always speak the absolute, brutal truth to you",
    optionB: "Have everyone you meet only tell you comforting, beautiful lies",
    category: "Deep & Existential",
  },
  {
    id: 45,
    optionA: "Live for 500 years with a dynamic body that ages very slowly",
    optionB:
      "Live a standard lifespan but get to reincarnate with all your memories intact",
    category: "Deep & Existential",
  },
  {
    id: 46,
    optionA:
      "Have a map that shows you where true love is but it takes 10 years to reach",
    optionB:
      "Have a briefcase with 5 million dollars but you can never settle down anywhere",
    category: "Deep & Existential",
  },
  {
    id: 47,
    optionA: "Erase the worst memory from your mind forever",
    optionB:
      "Erase your worst mistake from history so it never happened to anyone",
    category: "Deep & Existential",
  },
  {
    id: 48,
    optionA:
      "Be widely respected by strangers but misunderstood by your closest family",
    optionB:
      "Be deeply loved by your family but hated by the entire outside world",
    category: "Deep & Existential",
  },
  {
    id: 49,
    optionA: "Have the answer to how the universe was created",
    optionB:
      "Have the definitive answer to what happens to human consciousness after death",
    category: "Deep & Existential",
  },
  {
    id: 50,
    optionA: "Never be able to feel physical pain again",
    optionB: "Never be able to feel emotional sadness again",
    category: "Deep & Existential",
  },
  {
    id: 51,
    optionA: "Always know when someone is lying to you",
    optionB: "Always know exactly what someone genuinely likes about you",
    category: "Deep & Existential",
  },
  {
    id: 52,
    optionA: "Be completely forgotten by everyone you know the moment you die",
    optionB:
      "Be constantly remembered but only for an incredibly embarrassing mistake",
    category: "Deep & Existential",
  },
  {
    id: 53,
    optionA:
      "Live in a peaceful, perfect simulation where you are always happy",
    optionB: "Live in the chaotic, painful real world knowing it's flawed",
    category: "Deep & Existential",
  },
  {
    id: 54,
    optionA: "Be born 500 years in the past with your current modern knowledge",
    optionB: "Be born 500 years in the future with zero knowledge of the past",
    category: "Deep & Existential",
  },
  {
    id: 55,
    optionA: "Have the power to save 10 random strangers' lives",
    optionB: "Have the power to extend your closest friend's life by 30 years",
    category: "Deep & Existential",
  },
  {
    id: 56,
    optionA: "Lose all your digital memories (photos, accounts, messages)",
    optionB: "Lose all your physical possessions (clothes, books, home)",
    category: "Deep & Existential",
  },
  {
    id: 57,
    optionA: "Be trapped in a time loop of your best day ever for a whole year",
    optionB:
      "Skip ahead 5 years into the future instantly, missing everything in between",
    category: "Deep & Existential",
  },
  {
    id: 58,
    optionA:
      "Have absolute freedom but have to live entirely alone on an island",
    optionB:
      "Have zero privacy but live in luxury surrounded by a massive community",
    category: "Deep & Existential",
  },
  {
    id: 59,
    optionA:
      "Be able to see the red string of fate connecting romantic couples",
    optionB:
      "Be able to see a countdown timer above everyone's head showing their lifespan",
    category: "Deep & Existential",
  },
  {
    id: 60,
    optionA:
      "Have the genius intellect of Einstein but struggle to communicate basic ideas",
    optionB:
      "Have incredible charisma that makes everyone love you but have an average mind",
    category: "Deep & Existential",
  },

  // --- DAILY LIFE & MODERN DILEMMAS ---
  {
    id: 61,
    optionA: "Give up smartphones and internet browsing completely for 5 years",
    optionB:
      "Give up dynamic cooked meals and hot beverages completely for 5 years",
    category: "Daily Life",
  },
  {
    id: 62,
    optionA:
      "Your phone battery is permanently locked at 1% but never actually dies",
    optionB:
      "Your Wi-Fi disconnects completely for 10 minutes every hour on the dot",
    category: "Daily Life",
  },
  {
    id: 63,
    optionA: "Always arrive exactly 45 minutes early to every single event",
    optionB: "Always arrive exactly 15 minutes late to every single event",
    category: "Daily Life",
  },
  {
    id: 64,
    optionA:
      "Only eat your favourite food for every meal for the rest of your life",
    optionB: "Never be allowed to eat your favourite food ever again",
    category: "Daily Life",
  },
  {
    id: 65,
    optionA: "Have to talk to every single cashier and barista for 10 minutes",
    optionB:
      "Have everyone you try to talk to ignore you for the first 30 seconds",
    category: "Daily Life",
  },
  {
    id: 66,
    optionA: "Never have to stand in a queue or traffic jam again",
    optionB: "Never have to clean dishes, do laundry, or vacuum again",
    category: "Daily Life",
  },
  {
    id: 67,
    optionA: "Have your entire internet browsing history published publicly",
    optionB:
      "Have every single text message you sent last year read aloud to your family",
    category: "Daily Life",
  },
  {
    id: 68,
    optionA: "Always have a dripping wet sock on your left foot",
    optionB: "Always have a tiny, unremovable pebble inside your right shoe",
    category: "Daily Life",
  },
  {
    id: 69,
    optionA:
      "Only listen to one dynamic song on repeat for the rest of your life",
    optionB: "Only watch one movie on repeat for the rest of your life",
    category: "Daily Life",
  },
  {
    id: 70,
    optionA:
      "Get 10,000 dollars added to your bank account every single morning",
    optionB:
      "Get a 100% guarantee that you will never experience any injury or illness",
    category: "Daily Life",
  },
  {
    id: 71,
    optionA: "Have to use a loud typewriter for all your texting and work",
    optionB:
      "Have to use voice-to-text out loud in crowded public spaces for everything",
    category: "Daily Life",
  },
  {
    id: 72,
    optionA: "Every pillow you sleep on is permanently warm on both sides",
    optionB:
      "Every shower you take randomly shifts to freezing cold for 30 seconds",
    category: "Daily Life",
  },
  {
    id: 73,
    optionA:
      "Your dynamic commute to work or school takes 3 hours but it's completely free",
    optionB:
      "Your commute takes 5 minutes but it costs you 50 dollars every single day",
    category: "Daily Life",
  },
  {
    id: 74,
    optionA: "Always have a song stuck in your head that you can't identify",
    optionB:
      "Always feel like you forgot something incredibly important when leaving home",
    category: "Daily Life",
  },
  {
    id: 75,
    optionA:
      "Lose the ability to use streaming platforms (Netflix, YouTube, Spotify)",
    optionB:
      "Lose the ability to order dynamic food delivery or eat out at restaurants",
    category: "Daily Life",
  },
  {
    id: 76,
    optionA:
      "Win a free luxury holiday every year but you have to go with your worst enemy",
    optionB: "Pay full price for holidays but you can bring anyone you want",
    category: "Daily Life",
  },
  {
    id: 77,
    optionA: "Only wear shoes that are two sizes too small",
    optionB: "Only wear trousers that are three sizes too big without a belt",
    category: "Daily Life",
  },
  {
    id: 78,
    optionA: "Have your coffee or tea always serve up completely ice cold",
    optionB: "Have your carbonated drinks always taste completely flat",
    category: "Daily Life",
  },
  {
    id: 79,
    optionA:
      "Always drop your keys twice before successfully unlocking any door",
    optionB:
      "Always have to type your password three times before it accepts it",
    category: "Daily Life",
  },
  {
    id: 80,
    optionA: "Work a dream job that pays almost nothing",
    optionB: "Work a boring, mind-numbing job that pays an absolute fortune",
    category: "Daily Life",
  },
  // --- GAMING & POP CULTURE ---
  {
    id: 81,
    optionA: "Be stuck living inside Minecraft survival mode for a whole month",
    optionB:
      "Be stuck living inside Grand Theft Auto with 3 police stars for a weekend",
    category: "Gaming & Pop Culture",
  },
  {
    id: 82,
    optionA:
      "Have a real-life video game inventory system to carry 30 massive items easily",
    optionB:
      "Have a real-life HUD that shows everyone's health and mood bars above them",
    category: "Gaming & Pop Culture",
  },
  {
    id: 83,
    optionA: "Be a powerful wizard at Hogwarts but you fail every exam",
    optionB:
      "Be a brilliant superhero in the Marvel universe but you have no superpowers",
    category: "Gaming & Pop Culture",
  },
  {
    id: 84,
    optionA: "Every video game you play has a permanent 200ms lag delay",
    optionB:
      "Every movie you watch has the audio out of sync by exactly 2 seconds",
    category: "Gaming & Pop Culture",
  },
  {
    id: 85,
    optionA:
      "Have Pokemon exist in the real world but they are aggressive wild animals",
    optionB:
      "Have anime physics apply to your real life movements and emotions",
    category: "Gaming & Pop Culture",
  },
  {
    id: 86,
    optionA:
      "Be able to quick-save and quick-load your life right before a risky conversation",
    optionB:
      "Be able to see a dialogue tree showing how people will react to your choices",
    category: "Gaming & Pop Culture",
  },
  {
    id: 87,
    optionA:
      "Spend a day being hunted by John Wick but you have a 1-hour head start",
    optionB:
      "Spend a day trapped in a small escape room with Batman while he is furious",
    category: "Gaming & Pop Culture",
  },
  {
    id: 88,
    optionA:
      "Your life has an un-skippable 30-second unskippable ad before you can eat",
    optionB:
      "Your life has an un-skippable 5-minute loading screen when entering a new room",
    category: "Gaming & Pop Culture",
  },
  {
    id: 89,
    optionA:
      "Be the main character of a horror movie who survives but loses everything",
    optionB:
      "Be a background extra in an action movie who gets knocked out in scene one",
    category: "Gaming & Pop Culture",
  },
  {
    id: 90,
    optionA:
      "Have a real-life level up system where you distribute skill points to your attributes",
    optionB:
      "Have a real-life achievement system that rewards you cash for completing tasks",
    category: "Gaming & Pop Culture",
  },
  {
    id: 91,
    optionA:
      "Only play retro arcade games from the 1980s for the rest of your life",
    optionB:
      "Only play modern virtual reality games that give you slight motion sickness",
    category: "Gaming & Pop Culture",
  },
  {
    id: 92,
    optionA: "Live in the Star Wars universe as a moisture farmer on Tatooine",
    optionB:
      "Live in the Lord of the Rings universe as an ordinary citizen in Mordor",
    category: "Gaming & Pop Culture",
  },
  {
    id: 93,
    optionA:
      "Have a small companion animal that acts exactly like a dynamic video game pet",
    optionB:
      "Have a floating arrow in the sky pointing towards your current goal",
    category: "Gaming & Pop Culture",
  },
  {
    id: 94,
    optionA:
      "Get custom background music that changes based on your current situation",
    optionB:
      "Get a glowing exclamation mark above your head when someone has a task for you",
    category: "Gaming & Pop Culture",
  },
  {
    id: 95,
    optionA:
      "Be forced to stream your entire life on Twitch to a live audience of 5,000",
    optionB:
      "Be banned from using any form of social media or gaming platform forever",
    category: "Gaming & Pop Culture",
  },
  {
    id: 96,
    optionA: "Have the ability to double jump in real life",
    optionB:
      "Have the ability to slide across the floor like an apex legends character",
    category: "Gaming & Pop Culture",
  },
  {
    id: 97,
    optionA: "Be a legendary weapon blacksmith in a fantasy realm",
    optionB:
      "Be a master potion brewer who runs a quiet shop in a magic village",
    category: "Gaming & Pop Culture",
  },
  {
    id: 98,
    optionA: "Have your voice permanently sound like Morgan Freeman",
    optionB:
      "Have your voice permanently sound like a highly enthusiastic anime protagonist",
    category: "Gaming & Pop Culture",
  },
  {
    id: 99,
    optionA:
      "Be able to speak with ghosts but they only want to complain about pop music",
    optionB:
      "Be able to see glitches in the matrix like floating coffee cups once a week",
    category: "Gaming & Pop Culture",
  },
  {
    id: 100,
    optionA: "Wake up tomorrow inside the last video game you played",
    optionB: "Wake up tomorrow inside the last movie or TV show you watched",
    category: "Gaming & Pop Culture",
  },
];

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomQuestion() {
  return getRandomItem(wyrQuestions);
}

const randomQuestion = getRandomQuestion();
displayQuestion(randomQuestion);

function displayQuestion(randomQuestion) {
  document.querySelector(".left").textContent = randomQuestion.optionA;
  document.querySelector(".right").textContent = randomQuestion.optionB;
}

const choicesContainer = document.getElementsByClassName("choices")[0];
choicesContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("left") || event.target.classList.contains("right")) {
    const randomQuestion = getRandomQuestion();
    displayQuestion(randomQuestion);
  }
});
