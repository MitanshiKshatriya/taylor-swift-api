const allQuotes = [
  {
    quote:
      "I don't know what I want, so don't ask me / 'Cause I'm still trying to figure it out",
    song: "A Place In This World",
    album: "Taylor Swift",
  },
  {
    quote: "When you think Tim McGraw, I hope you think of me.",
    song: "Tim McGraw",
    album: "Taylor Swift",
  },
  {
    quote: "“So watch me strike a match on all my wasted time.",
    song: "Picture To Burn",
    album: "Taylor Swift",
  },
  {
    quote: "I'll be strong, I'll be wrong, oh but life goes on…",
    song: "A Place In This World",
    album: "Taylor Swift",
  },
  {
    quote: "And when you take, you take the very best of me.",
    song: "Cold As You",
    album: "Taylor Swift",
  },
  {
    quote: "But no one notices until it's too late to do anything.",
    song: "The Outside",
    album: "Taylor Swift",
  },
  {
    quote:
      "Our song is the slamming screen door, sneakin' out late, tapping on your window.",
    song: "Our Song",
    album: "Taylor Swift",
  },
  {
    quote:
      "And I don't know why, but with you I'd dance in a storm in my best dress, fearless.",
    song: "Fearless",
    album: "Fearless",
  },
  {
    quote:
      "But in your life, you'll do things greater than dating the boy on the football team…But I didn't know it at fifteen.",
    song: "Fifteen",
    album: "Fearless",
  },
  {
    quote:
      "I've found time can heal most anything and you just might find who you're supposed to be.",
    song: "Fifteen",
    album: "Fearless",
  },
  {
    quote:
      "Romeo, save me. They're trying to tell me how to feel. This love is difficult but it's real.",
    song: "Love Story",
    album: "Fearless",
  },
  {
    quote:
      "Why are people always leaving? I think you and I should stay the same.",
    song: "Hey Stephen",
    album: "Fearless",
  },
  {
    quote:
      "My mistake, I didn't know to be in love you had to fight to have the upper hand.",
    song: " White Horse",
    album: "Fearless",
  },
  {
    quote:
      "This is a big world, that was a small town there in my rear view mirror disappearing now",
    song: "White Horse",
    album: "Fearless",
  },
  {
    quote: "You've got a smile that could light up this whole town.",
    song: "You Belong With Me",
    album: "Fearless",
  },
  {
    quote:
      "And we know it's never simple, never easy. Never a clean break, no one here to save me.",
    song: "Breathe",
    album: "Fearless",
  },
  {
    quote:
      "You took a swing, I took it hard. And down here from the ground I see who you are.",
    song: "Tell Me Why",
    album: "Fearless",
  },
  {
    quote:
      "All this time I was wasting, hoping you would come around… I've been giving out chances every time and all you do is let me down.",
    song: "You're Not Sorry",
    album: "Fearless",
  },
  {
    quote: "And then you feel so low you can't feel nothing at all.",
    song: "Forever And Always",
    album: "Fearless",
  },
  {
    quote: "It rains when you're here and it rains when you're gone.",
    song: "Forever And Always",
    album: "Fearless",
  },
  {
    quote: "These walls that they put up to hold us back will fall down…",
    song: "Change",
    album: "Fearless",
  },
  {
    quote: "My mind forgets to remind me you're a bad idea.",
    song: "Sparks Fly",
    album: "Speak Now",
  },
  {
    quote: "It turns out freedom ain't nothing but missing you.",
    song: "Back To December",
    album: "Speak Now",
  },
  {
    quote:
      "She floats down the aisle like a pageant queen, but I know you wish it was me… don’t you?",
    song: "Speak Now",
    album: "Speak Now",
  },
  {
    quote: "I lived in your chess game, but you changed the rules every day.",
    song: "Dear John",
    album: "Speak Now",
  },
  {
    quote: "I'm shining like fireworks over your sad, empty town.",
    song: "Dear John",
    album: "Speak Now",
  },
  {
    quote:
      "Someday I'll be living in a big, old city and all you're ever gonna be is mean.",
    song: "Mean",
    album: "Speak Now",
  },
  {
    quote:
      "I'd tell you I miss you, but I don't know how, I've never heard silence quite this loud.",
    song: "The Story Of Us",
    album: "Speak Now",
  },
  {
    quote:
      "This is looking like a contest of who can act like they care less. But I liked it better when you were on my side.",
    song: "The Story Of Us",
    album: "Speak Now",
  },
  {
    quote:
      "And don't lose the way that you dance around in your pj's getting ready for school.",
    song: "Never Grow Up",
    album: "Speak Now",
  },
  {
    quote:
      "This night is sparkling, don't you let it go.  I'm wonderstruck, blushing all the way home.",
    song: "Enchanted",
    album: "Speak Now",
  },
  {
    quote: "2AM, who do you love?",
    song: "Enchanted",
    album: "Speak Now",
  },
  {
    quote:
      "Your string of lights is still bright to me… Who you are is not where you've been.",
    song: "Innocent",
    album: "Speak Now",
  },
  {
    quote: "Today is never too late to be brand new.",
    song: "Innocent",
    album: "Speak Now",
  },
  {
    quote:
      "You and I walk a fragile line; I have known it all this time. But I never thought I'd live to see it break.",
    song: "Haunted",
    album: "Speak Now",
  },
  {
    quote: "I don't know how to be something you miss.",
    song: "Last Kiss",
    album: "Speak Now",
  },
  {
    quote: "Bring on all the pretenders. One day, we will be remembered.",
    song: "Long Live",
    album: "Speak Now",
  },
  {
    quote:
      "So don't you worry your pretty, little mind, people throw rocks at things that shine.",
    song: "Ours",
    album: "Speak Now",
  },
  {
    quote:
      "We are alone with our changing minds. We fall in love 'til it hurts or bleeds or fades in time.",
    song: "State Of Grace",
    album: "Red",
  },
  {
    quote: "Love is a ruthless game unless you play it good and right.",
    song: "State Of Grace",
    album: "Red",
  },
  {
    quote:
      "He's long gone when he's next to me and I realize the blame is on me.",
    song: "I Knew You Were Trouble",
    album: "Red",
  },
  {
    quote:
      "No apologies. He'll never see you cry. Pretends he doesn't know that he's the reason why.",
    song: " I Knew You Were Trouble",
    album: "Red",
  },
  {
    quote:
      "The saddest fear comes creeping in - that you never loved me or her, or anyone, or anything...",
    song: "I Knew You Were Trouble",
    album: "Red",
  },
  {
    quote:
      "…That magic's not here no more. And I might be OK, but I'm not fine at all.",
    song: "All Too Well",
    album: "Red",
  },
  {
    quote:
      "And your mother's telling stories about you on a tee ball team. You taught me 'bout your past, thinking your future was me.",
    song: "All Too Well",
    album: "Red",
  },
  {
    quote: "I forget about you long enough to forget why I needed to...",
    song: "All Too Well",
    album: "Red",
  },
  {
    quote:
      "Maybe we got lost in translation, maybe I asked for too much. But maybe this thing was a masterpiece 'til you tore it all up. Running scared, I was there, I remember it all too well.",
    song: "All Too Well",
    album: "Red",
  },
  {
    quote:
      "You call me up again just to break me like a promise, so casually cruel in the name of being honest.",
    song: "All Too Well",
    album: "Red",
  },
  {
    quote:
      "Time won't fly, it's like I'm paralyzed by it. I'd like to be my old self again, but I'm still trying to find it.",
    song: "All Too Well",
    album: "Red",
  },
  {
    quote:
      "Cause there we are again, when I loved you so. Back before you lost the one, real thing you've ever known.",
    song: "All Too Well",
    album: "Red",
  },
  {
    quote:
      "Now you mail back my things and I walk home alone / But you keep my old scarf from that very first week, 'cause it reminds you of innocence and it smells like me.",
    song: "All Too Well",
    album: "Red",
  },
  {
    quote: "Photo album on the counter / Your cheeks were turning red / You used to be a little kid in glasses in a twin-sized bed",
    song: "All Too Well",
    album: "Red",
  },
  {
    quote:
      "Stay, and I'll be loving you for quite some time / No one else is gonna love me when I get mad",
    song: "Stay Stay Stay",
    album: "Red",
  },
  {
    quote:
      "We're happy, free, confused, and lonely at the same time. It's miserable and magical.",
    song: "22",
    album: "Red",
  },
  {
    quote:
      "I wish I could run to you. And I hope you know that every time I don't I almost do.",
    song: "I Almost Do",
    album: "Red",
  },
  {
    quote: "You wear your best apology, but I was there to watch you leave.",
    song: "The Last Time",
    album: "Red",
  },
  {
    quote: "But sometimes I wonder how you think about it now.",
    song: "Holy Ground",
    album: "Red",
  },
  {
    quote: "But I don't wanna dance if I'm not dancing with you.",
    song: "Holy Ground",
    album: "Red",
  },
  {
    quote: "Words, how little they mean when you're a little too late.",
    song: "Sad Beautiful Tragic",
    album: "Red",
  },
  {
    quote:
      "“And they tell you that you're lucky, but you're so confused, 'cause you don't feel pretty, you just feel used.",
    song: "The Lucky One",
    album: "Red",
  },
  {
    quote:
      "I've been spending the last eight months thinking all love ever does is break and burn and end…",
    song: "Begin Again",
    album: "Red",
  },
  {
    quote:
      "And what do you do when the one who means the most to you is the one who didn't show?",
    song: "The Moment I Knew",
    album: "Red",
  },
  {
    quote:
      "Your close friends always seem to know / When there's something really wrong",
    song: "The Moment I Knew",
    album: "Red",
  },
  {
    quote:
      'You called me later / And said, "I\'m sorry I didn\'t make it" / And I said, "I\'m sorry, too"',
    song: "The Moment I Knew",
    album: "Red",
  },
  {
    quote:
      "Loving him is like driving a new Maserati down a dead-end street / Faster than the wind, passionate as sin, ending so suddenly",
    song: "Red",
    album: "Red",
  },
  {
    quote: "The lights are so bright, but they never blind me.",
    song: "Welcome To New York",
    album: "1989",
  },
  {
    quote: "Love's a game, wanna play?",
    song: "Blank Space",
    album: "1989",
  },
  {
    quote: "So it's gonna be forever or it's gonna go down in flames.",
    song: "Blank Space",
    album: "1989",
  },
  {
    quote:
      "But you'll come back each time you leave 'cause darling, I'm a nightmare dressed like a daydream.",
    song: "Blank Space",
    album: "1989",
  },
  {
    quote:
      "When we go crashing down, we come back every time 'cause we never go out of style.",
    song: "Style",
    album: "1989",
  },
  {
    quote: "I got that red lip, classic thing that you like.",
    song: "Style",
    album: "1989",
  },
  {
    quote:
      "The rest of the world was black and white, but we were in screaming color.",
    song: "Out Of The Woods",
    album: "1989",
  },
  {
    quote:
      "The more I think about it now, the less I know, all I know is that you drove us off the road.",
    song: "All You Had To Do Was Stay",
    album: "1989",
  },
  {
    quote:
      "People like you always want back the love they pushed aside, but people like me are gone forever when you say goodbye.",
    song: "All You Had To Do Was Stay",
    album: "1989",
  },
  {
    quote: "Why'd you have to go and lock me out when I let you in?",
    song: "All You Had To Do Was Stay",
    album: "1989",
  },
  {
    quote:
      "While you've been getting down and out about the liars and the dirty, dirty cheats of the world… You could've been getting down to this sick beat.",
    song: "Shake It Off",
    album: "1989",
  },
  {
    quote: "We're a crooked love in a straight line down.",
    song: "I Wish You Would",
    album: "1989",
  },
  {
    quote: "And I wish you knew that I miss you too much to be mad anymore.",
    song: "I Wish You Would",
    album: "1989",
  },
  {
    quote: "You give me everything and nothing.",
    song: "I Wish You Would",
    album: "1989",
  },
  {
    quote:
      "Makes you wanna run and hide, but it made us turn right back around.",
    song: "I Wish You Would",
    album: "1989",
  },
  {
    quote: "Band-aids don't fix bullet holes. You say sorry just for show.",
    song: "Bad Blood",
    album: "1989",
  },
  {
    quote: "Someday when you leave me, I bet these memories follow you around.",
    song: "Wildest Dreams",
    album: "1989",
  },
  {
    quote:
      "When you're young, you just run, but you come back to what you need.",
    song: "This Love",
    album: "1989",
  },
  {
    quote: "This love left a permanent mark.",
    song: "This Love",
    album: "1989",
  },
  {
    quote:
      "Your kiss, my cheek / I watch you leave / Your smile, my ghost / I fall to my knees",
    song: "This Love",
    album: "1989",
  },
  {
    quote:
      "It was months and months of back and forth, you're still all over me like a wine-stained dress I can't wear anymore.",
    song: "Clean",
    album: "1989",
  },
  {
    quote: "When I was drowning that's when I could finally breathe.",
    song: "Clean",
    album: "1989",
  },
  {
    quote: "Just because you're clean, don't mean you don't miss it.",
    song: "Clean",
    album: "1989",
  },
  {
    quote:
      "Didn't it all seem new and exciting? …It's all fun and games 'til somebody loses their mind.",
    song: "Wonderland",
    album: "1989",
  },
  {
    quote:
      "You search the world for something else to make you feel like what we had. And in the end in wonderland, we both went mad.",
    song: "Wonderland",
    album: "1989",
  },
  {
    quote: "Heartbreak is the national anthem, we sing it proudly.",
    song: "New Romantics",
    album: "1989",
  },
  {
    quote: "They'll take their shots, but we are bulletproof.",
    song: "I Know Places",
    album: "1989",
  },
  {
    quote:
      "So I punched a hole in the roof / Let the flood carry away all my pictures of you.",
    song: "Clean",
    album: "1989",
  },
  {
    quote:
      "When all you wanted / Was to be wanted / Wish you could go back / And tell yourself what you know now",
    song: "Fifteen",
    album: "Fearless",
  },
  {
    quote:
      "32 and still growing up now / Who you are is not what you did / You're still an innocent",
    song: "Innocent",
    album: "Speak Now",
  },
  {
    quote: "We play dumb / But we know exactly what we're doing",
    song: "New Romantics",
    album: "1989",
  },
  {
    quote:
      "Please don't ever become a stranger whose laugh I could recognize anywhere",
    song: "New Year's Day",
    album: "Reputation",
  },
  {
    quote: "Can we always be this close forever and ever?",
    song: "Lover",
    album: "Lover",
  },
  {
    quote: "I'm only seventeen / I don't know anything but I know I miss you",
    song: "Betty",
    album: "Folklore",
  },
  {
    quote:
      "I was walking home on broken cobblestones just thinking of you, when she pulled up like a figment of my worst intentions",
    song: "Betty",
    album: "Folklore",
  },
  {
    quote: "You play stupid games, you win stupid prizes",
    song: "Miss Americana And The Heartbreak Prince",
    album: "Lover",
  },
  {
    quote: "I had a marvelous time ruining everything",
    song: "The Last Great American Dynasty",
    album: "Folklore",
  },
  {
    quote:
      "Untouchable, burning brighter than the sun / And when you're close I feel like coming undone",
    song: "Untouchable",
    album: "Fearless",
  },
  {
    quote:
      "Barefoot in the kitchen / Sacred new beginnings / That became my religion, listen",
    song: "Cornelia Street",
    album: "Lover",
  },
  {
    quote: "I could build a castle out of all the bricks they threw at me",
    song: "New Romantics",
    album: "1989",
  },
  {
    quote:
      "Cold was the steel of my axe to grind for the boys who broke my heart / Now I send their babies presents",
    song: "Invisible String",
    album: "Folklore",
  },
  {
    quote:
      "He says he's so in love / He's finally got it right / I wonder if he knows he's all I think about at night",
    song: "Teardrops On My Guitar",
    album: "Taylor Swift",
  },
  {
    quote: "Back when you fit in my poems like a perfect rhyme",
    song: "Holy Ground",
    album: "Red",
  },
  {
    quote: "I once believed love would be burning red / But it's golden",
    song: "Daylight",
    album: "Lover",
  },
  {
    quote:
      "I think I've seen this film before / And I didn't like the ending / You're not my homeland anymore / So what am I defending now?",
    song: "Exile",
    album: "Folklore",
  },
  {
    quote:
      "He said the way my blue eyes shined / Put those Georgia stars to shame that night / I said, 'That's a lie'",
    song: "Tim McGraw",
    album: "Taylor Swift",
  },
  {
    quote:
      "The monsters turned out to be just trees / When the sun came up you were looking at me",
    song: "Out Of The Woods",
    album: "1989",
  },
  {
    quote:
      "The night you danced like you knew our lives would never be the same / You held your head like a hero / On a history book page / It was the end of a decade / But the start of an age",
    song: "Long Live",
    album: "Speak Now",
  },
  {
    quote: "I can't decide if it's a choice: Getting swept away",
    song: "Treacherous",
    album: "Red",
  },
  {
    quote:
      "They told me all of my cages were mental / So I got wasted like all my potential",
    song: "This Is Me Trying",
    album: "Folklore",
  },
  {
    quote:
      "But she wears short skirts / I wear T-shirts / She's cheer captain / And I'm on the bleachers",
    song: "You Belong With Me",
    album: "Fearless",
  },
  {
    quote: "I don't like that falling feels like flying till the bone crush.",
    song: "Gold Rush",
    album: "Evermore",
  },
  {
    quote:
      'I\'m doing good, I\'m on some new shit / Been saying "yes" instead of "no" / I thought I saw you at the bus stop, I didn\'t though',
    song: "The 1",
    album: "Folklore",
  },
  {
    quote:
      "I guess you never know, never know / And if you wanted me, you really should've showed",
    song: "The 1",
    album: "Folklore",
  },
  {
    quote:
      "I persist and resist the temptation to ask you / If one thing had been different / Would everything be different today?",
    song: "The 1",
    album: "Folklore",
  },
  {
    quote: "When you are young they assume you know nothing",
    song: "Cardigan",
    album: "Folklore",
  },
  {
    quote: "You drew stars around my scars / But now I'm bleedin'",
    song: "Cardigan",
    album: "Folklore",
  },
  {
    quote:
      "I knew you'd miss me once the thrill expired / And you'd be standin' in my front porch light / And I knew you'd come back to me",
    song: "Cardigan",
    album: "Folklore",
  },
  {
    quote: "You wear the same jewels that I gave you, as you bury me",
    song: "My Tears Ricochet",
    album: "Folklore",
  },
  {
    quote:
      "We gather stones, never knowing what they'll mean / Some to throw, some to make a diamond ring",
    song: "My Tears Ricochet",
    album: "Folklore",
  },
  {
    quote:
      "You know I didn't want to have to haunt you / But what a ghostly scene",
    song: "My Tears Ricochet",
    album: "Folklore",
  },
  {
    quote:
      "Do you remember when I pulled up and said 'get in the car' / And then cancelled my plans just in case you called",
    song: "August",
    album: "Folklore",
  },
  {
    quote:
      'To live for the hope of it all / Cancel plans just in case you\'d call / And say, "Meet me behind the mall"',
    song: "August",
    album: "Folklore",
  },
  {
    quote:
      "Bold was the waitress on our three-year trip / Getting lunch down by the Lakes / She said I looked like an American singer",
    song: "Invisible String",
    album: "Folklore",
  },
  {
    quote:
      "Time, mystical time / Cutting me open, then healing me fine / Were there clues I didn't see?",
    song: "Invisible String",
    album: "Folklore",
  },
  {
    quote: "One single thread of gold tied me to you",
    song: "Invisible String",
    album: "Folklore",
  },
  {
    quote:
      "I know where it all where wrong, your favorite song was playing from the far side of the gym / I was nowhere to be found I hate the crowds / Plus I saw you dance with him",
    song: "Betty",
    album: "Folklore",
  },
  {
    quote:
      "Knew I was a robber first time that he saw me / Stealing hearts and running off and never sayin' sorry",
    song: "...Ready For It?",
    album: "Reputation",
  },
  {
    quote: "I swear I don't love the drama, it loves me",
    song: "End Game",
    album: "Reputation",
  },
  {
    quote: "I bury hatchets, but I keep maps of where I put 'em",
    song: "End Game",
    album: "Reputation",
  },
  {
    quote: "Love made me crazy, if it doesn't, you ain't doin' it right",
    song: "Don't Blame Me",
    album: "Reputation",
  },
  {
    quote: "My name is whatever you decide / And I'm just gonna call you mine",
    song: "Don't Blame Me",
    album: "Reputation",
  },
  {
    quote: "Handsome, you're a mansion with a view",
    song: "Delicate",
    album: "Reputation",
  },
  {
    quote: "Sometimes I wonder when you sleep / Are you ever dreaming of me?",
    song: "Delicate",
    album: "Reputation",
  },
  {
    quote:
      "The world goes on another day, another drama / But not for me, all I think about is karma.",
    song: "Look What You Made Me Do",
    album: "Reputation",
  },
  {
    quote:
      "I've got a list of names and yours is in red, underlined / I check it once, then I check it twice",
    song: "Look What You Made Me Do",
    album: "Reputation",
  },
  {
    quote: "You asked me for a place to sleep, locked me out and threw a feast",
    song: "Look What You Made Me Do",
    album: "Reputation",
  },
  {
    quote: "You know I'm not a bad girl, but I / Do bad things with you",
    song: "So It Goes...",
    album: "Reputation",
  },
  {
    quote: "You did a number on me but, honestly, baby, who's counting?",
    song: "So It Goes...",
    album: "Reputation",
  },
  {
    quote:
      "Ocean blue eyes looking in mine / I feel like I might sink and drown and die",
    song: "Gorgeous",
    album: "Reputation",
  },
  {
    quote:
      "You make me so happy it turns back to sad / There's nothing I hate more than what I can't have / And you are so gorgeous it makes me so mad",
    song: "Gorgeous",
    album: "Reputation",
  },
  {
    quote:
      "We were jet-set, Bonnie and Clyde / Until I switched to the other side / It's no surprise I turned you in / 'Cause us traitors never win",
    song: "Getaway Car",
    album: "Reputation",
  },
  {
    quote:
      "We met a few weeks ago / Now you try on callin' me \"Baby\" like tryin' on clothes",
    song: "King Of My Heart",
    album: "Reputation",
  },
  {
    quote: "Your love is a secret I'm hoping, dreaming, dying to keep",
    song: "King Of My Heart",
    album: "Reputation",
  },
  {
    quote: "Is this the end of all the endings? / My broken bones are mending",
    song: "King Of My Heart",
    album: "Reputation",
  },
  {
    quote: "I loved you in spite of deep fears that the world would divide us",
    song: "Dancing With Our Hands Tied",
    album: "Reputation",
  },
  {
    quote: "Say that we got it / I'm a mess, but I'm the mess that you wanted",
    song: "Dancing With Our Hands Tied",
    album: "Reputation",
  },
  {
    quote:
      "But you stabbed me in the back while shaking my hand / And therein lies the issue / Friends don't try to trick you / Get you on the phone and mind-twist you / So I took an axe to a mended fence",
    song: "This Is Why We Can't Have Nice Things",
    album: "Reputation",
  },
  {
    quote: "I brought a knife to a gunfight",
    song: "Call It What You Want",
    album: "Reputation",
  },
  {
    quote: "He built a fire just to keep me warm",
    song: "Call It What You Want",
    album: "Reputation",
  },
  {
    quote:
      "I want to wear his initial on a chain round my neck, not because he owns me, but cause he really knows me, which is more than they can say",
    song: "Call It What You Want",
    album: "Reputation",
  },
  {
    quote:
      'Holding my breath, slowly, I said "You don\'t need to save me, but would you run away with me?"',
    song: "Call It What You Want",
    album: "Reputation",
  },
  {
    quote:
      "Would've been right there, front row even if nobody came to your show",
    song: "I Forgot That You Existed",
    album: "Lover",
  },
  {
    quote: "I'm always waiting for you to be waiting below",
    song: "Cruel Summer",
    album: "Lover",
  },
  {
    quote:
      "Devils roll the dice, angels roll their eyes / What doesn't kill me makes me want you more",
    song: "Cruel Summer",
    album: "Lover",
  },
  {
    quote: "I don't wanna keep secrets just to keep you",
    song: "Cruel Summer",
    album: "Lover",
  },
  {
    quote:
      "I'm drunk in the back of the car / And I cried like a baby coming home from the bar / Said, \"I'm fine,\" but it wasn't true",
    song: "Cruel Summer",
    album: "Lover",
  },
  {
    quote:
      "For whatever it's worth, I love you, ain't that the worst thing you ever heard?",
    song: "Cruel Summer",
    album: "Lover",
  },
  {
    quote: "I've got a hundred thrown-out speeches I almost said to you",
    song: "The Archer",
    album: "Lover",
  },
  {
    quote: "I am an architect, I'm drawing up the plans",
    song: "I Think He Knows",
    album: "Lover",
  },
  {
    quote:
      "I'll never let you go 'cause I know this is a fight that someday we're gonna win",
    song: "Miss Americana And The Heartbreak Prince",
    album: "Lover",
  },
  {
    quote: "I'm with you even if it makes me blue",
    song: "Paper Rings",
    album: "Lover",
  },
  {
    quote:
      "Without all the exes, fights, and flaws, we wouldn't be standing here so tall",
    song: "Paper Rings",
    album: "Lover",
  },
  {
    quote: "We were a fresh page on the desk, filling in the blanks as we go",
    song: "Cornelia Street",
    album: "Lover",
  },
  {
    quote:
      "We were in the backseat drunk on something stronger than the drinks in the bar",
    song: "Cornelia Street",
    album: "Lover",
  },
  {
    quote: "If the story is over, why am I still writing pages?",
    song: "Death By A Thousand Cuts",
    album: "Lover",
  },
  {
    quote:
      "I ask the traffic lights if it will be alright, they say I don't know.",
    song: "Death By A Thousand Cuts",
    album: "Lover",
  },
  {
    quote:
      "They say home is where the heart is, but that's not where mine lives",
    song: "London Boy",
    album: "Lover",
  },
  {
    quote:
      "I pinned your hands behind your back / Thought I had reason to attack, but no",
    song: "Afterglow",
    album: "Lover",
  },
  {
    quote:
      "Fighting with a true love is boxing with no gloves / Chemistry 'til it blows up, 'til there's no us",
    song: "Afterglow",
    album: "Lover",
  },
  {
    quote:
      "And I can't talk to you when you're like this, staring out the window like I'm not your favorite town",
    song: "False God",
    album: "Lover",
  },
  {
    quote: "They say the road gets hard and you get lost",
    song: "False God",
    album: "Lover",
  },
  {
    quote: "Remember how I said I'd die for you?",
    song: "False God",
    album: "Lover",
  },
  {
    quote: "I come back stronger than a '90s trend",
    song: "Willow",
    album: "Evermore",
  },
  {
    quote:
      "Wait for the signal, and I'll meet you after dark / Show me the places where the others gave you scars",
    song: "Willow",
    album: "Evermore",
  },
  {
    quote:
      "Bustling crowds or silent sleepers / You're not sure which is worse",
    song: "Champagne Problems",
    album: "Evermore",
  },
  {
    quote:
      "You told your family for a reason / You couldn't keep it in / Your sister splashed out on the bottle",
    song: "Champagne Problems",
    album: "Evermore",
  },
  {
    quote:
      '"This dorm was once a madhouse" I made a joke, "Well, it\'s made for me"',
    song: "Champagne Problems",
    album: "Evermore",
  },
  {
    quote:
      "One for the money, two for the show / I never was ready so I watch you go",
    song: "Champagne Problems",
    album: "Evermore",
  },
  {
    quote:
      "Sometimes you just don't know the answer 'til someone's on their knees and asks you",
    song: "Champagne Problems",
    album: "Evermore",
  },
  {
    quote:
      "And then it fades into the gray of my day-old tea 'Cause it could never be",
    song: "Gold Rush",
    album: "Evermore",
  },
  {
    quote: "I can't dare to dream about you anymore",
    song: "Gold Rush",
    album: "Evermore",
  },
  {
    quote:
      "My mind turns your life into folklore / I can't dare to dream about you anymore",
    song: "Gold Rush",
    album: "Evermore",
  },
  {
    quote:
      "I parked my car right between the Methodist and the school that used to be ours",
    song: "'Tis The Damn Season",
    album: "Evermore",
  },
  {
    quote:
      "I'll go back to L.A. and the so-called friends who'll write books about me if I ever make it and wonder about the only soul who can tell which smiles I'm fakin'",
    song: "'Tis The Damn Season",
    album: "Evermore",
  },
  {
    quote:
      "What would you do if I break free and leave us in ruins, took this dagger in me and removed it, gain the weight of you then loose it?",
    song: "Tolerate It",
    album: "Evermore",
  },
  {
    quote:
      "I made you my temple, my mural, my sky. Now I'm begging for footnotes in the story of your life / Drawing hearts in the byline always taking up too much space or time",
    song: "Tolerate It",
    album: "Evermore",
  },
  {
    quote:
      "Your nemesis will defeat themselves before you get the chance to swing",
    song: "Long Story Short",
    album: "Evermore",
  },
  {
    quote: "My waves meet your shore ever and evermore",
    song: "Long Story Short",
    album: "Evermore",
  },
  {
    quote:
      "I replay my footsteps on each stepping stone, trying to find the one where I went wrong",
    song: "Evermore",
    album: "Evermore",
  },
  {
    quote:
      "So yeah, it's a fire, it's a goddamn blaze in the dark and you've started it / So yeah, it's a war, it's the goddamn fight of my life and you started it",
    song: "Ivy",
    album: "Evermore",
  },
  {
    quote:
      "Did you ever hear about the girl who got frozen? / Time went on for everybody else, she won't know it / She's still twenty-three inside her fantasy",
    song: "Right Where You Left Me",
    album: "Evermore",
  },
  {
    quote:
      "Breaking down and coming undone / It's a rollercoaster kind of rush",
    song: "The Way I Loved You",
    album: "Fearless",
  },
  {
    quote:
      "He can't see the smile I'm faking and my heart's not breaking 'cause I'm not feeling anything at all",
    song: "The Way I Loved You",
    album: "Fearless",
  },
  {
    quote:
      "Well, I like the way your hair falls in your face / You got the keys to me / I love each freckle on your face",
    song: "Jump Then Fall",
    album: "Fearless",
  },
  {
    quote:
      "With your face and the beautiful eyes / And the conversation with the little white lies / And the faded picture of a beautiful night",
    song: "The Other Side Of The Door",
    album: "Fearless",
  },
  {
    quote:
      "Never be so kind / You forget to be clever / Never be so clever / You forget to be kind",
    song: "Marjorie",
    album: "Evermore",
  },
  {
    quote:
      "Sometimes I feel like everybody is a sexy baby / And I'm the monster on the hill",
    song: "Anti-Hero",
    album: "Midnights",
  },
  {
    quote:
      "It's me, hi, I'm the problem, it's me / At tea time, everybody agrees",
    song: "Anti-Hero",
    album: "Midnights",
  },
  {
    quote:
      "Did you hear my covert narcissism I disguise as altruism / Like some kind of congressman?",
    song: "Anti-Hero",
    album: "Midnights",
  },
  {
    quote: "I'm damned if I do give a damn what people say",
    song: "Lavender Haze",
    album: "Midnights",
  },
  {
    quote: "All they keep asking me / Is if I'm gonna be your bride",
    song: "Lavender Haze",
    album: "Midnights",
  },
  {
    quote:
      "And I lost you / The one I was dancing with / In New York, no shoes",
    song: "Maroon",
    album: "Midnights",
  },
  {
    quote:
      "The mark they saw on my collarbone / The rust that grew between telephones / The lips I used to call home",
    song: "Maroon",
    album: "Midnights",
  },
  {
    quote: "How the hell did we lose sight of us again?",
    song: "Maroon",
    album: "Midnights",
  },
  {
    quote: "Flying in a dream / stars by the pocketful",
    song: "Snow On The Beach",
    album: "Midnights",
  },
  {
    quote:
      "I've never seen someone lit from within / Blurring out my periphery",
    song: "Snow On The Beach",
    album: "Midnights",
  },
  {
    quote:
      "From sprinkler splashes to fireplace ashes / I waited ages to see you there / I search the party of better bodies / Just to learn that you never cared",
    song: "You're On Your Own, Kid",
    album: "Midnights",
  },
  {
    quote:
      "I gave my blood, sweat, and tears for this / I hosted parties and starved my body / Like I'd be saved by a perfect kiss",
    song: "You're On Your Own, Kid",
    album: "Midnights",
  },
  {
    quote: "He wanted it comfortable, I wanted that pain",
    song: "Midnight Rain",
    album: "Midnights",
  },
  {
    quote: "A slow-motion, love potion / jumping off things in the ocean",
    song: "Midnight Rain",
    album: "Midnights",
  },
  {
    quote: "Did you ever have someone kiss you in a crowded room",
    song: "Question...?",
    album: "Midnights",
  },
  {
    quote: "And what's that that I heard? That you're still with her?",
    song: "Question...?",
    album: "Midnights",
  },
  {
    quote: "Draw the cat eye sharp enough to kill a man",
    song: "Vigilante Shit",
    album: "Midnights",
  },
  {
    quote: "I don't start shit, but I can tell you how it ends",
    song: "Vigilante Shit",
    album: "Midnights",
  },
  {
    quote: "When I walk in the room / I can still make the whole place shimmer",
    song: "Bejeweled",
    album: "Midnights",
  },
  {
    quote: "Did all the extra credit, then got graded on a curve",
    song: "Bejeweled",
    album: "Midnights",
  },
  {
    quote: "Never trust it if it rises fast / It can't last",
    song: "Labyrinth",
    album: "Midnights",
  },
  {
    quote:
      "I thought the plane was goin' down / How'd you turn it right around?",
    song: "Labyrinth",
    album: "Midnights",
  },
  {
    quote: "A relaxing thought / Aren't you envious that for you it's not?",
    song: "Karma",
    album: "Midnights",
  },
  {
    quote: "Flexing like a goddamn acrobat / Me and karma vibe like that",
    song: "Karma",
    album: "Midnights",
  },
  {
    quote: "You're talking shit for the hell of it",
    song: "Karma",
    album: "Midnights",
  },
  {
    quote: "They said the end is comin' / Everyone's up to somethin'",
    song: "Sweet Nothing",
    album: "Midnights",
  },
  {
    quote:
      "I spy with my little tired eye / Tiny as a firefly / A pebble that we picked up last July",
    song: "Sweet Nothing",
    album: "Midnights",
  },
  {
    quote:
      "I laid the groundwork, and then / Just like clockwork / The dominoes cascaded in a line",
    song: "Mastermind",
    album: "Midnights",
  },
  {
    quote:
      "What if I told you none of it was accidental? / And the first night that you saw me / Nothing was gonna stop me",
    song: "Mastermind",
    album: "Midnights",
  },
  {
    quote: "Uh-huh, we're burned for better / I vowed I would always be yours",
    song: "The Great War",
    album: "Midnights",
  },
  {
    quote:
      "You said I have to trust more freely / But diesel is desire, you were playing with fire",
    song: "The Great War",
    album: "Midnights",
  },
  {
    quote:
      "I'm never gonna meet / What could've been would've been / What should've been you",
    song: "Bigger Than The Whole Sky",
    album: "Midnights",
  },
  {
    quote: "You were more than just a short time",
    song: "Bigger Than The Whole Sky",
    album: "Midnights",
  },
  {
    quote: "I'm so in love that I might stop breathing",
    song: "Paris",
    album: "Midnights",
  },
  {
    quote: "Confess my truth / In swooping, sloping, cursive letters",
    song: "Paris",
    album: "Midnights",
  },
  {
    quote:
      "Put on your records and regret me / I bent the truth too far tonight",
    song: "High Infidelity",
    album: "Midnights",
  },
  {
    quote:
      "Do you really wanna know where I was April 29th? / Do I really have to chart the constellations in his eyes?",
    song: "High Infidelity",
    album: "Midnights",
  },
  {
    quote:
      "Lock broken, slur spoken / Wound open, game token / I didn't know you were keeping count",
    song: "High Infidelity",
    album: "Midnights",
  },
  {
    quote: "And I'm not even sorry, nights are so starry",
    song: "Glitch",
    album: "Midnights",
  },
  {
    quote:
      "I would've stayed / On my knees / And I damn sure never would've danced with the devil",
    song: "Would've, Could've, Should've",
    album: "Midnights",
  },
  {
    quote: "Never take advice from someone who's falling apart",
    song: "Dear Reader",
    album: "Midnights",
  },
  {
    quote:
      "Desert all your past lives / And if you don't recognize yourself / That means you did it right",
    song: "Dear Reader",
    album: "Midnights",
  },
  {
    quote: "They say that if it's right, you know",
    song: "Hits Differents",
    album: "Midnights",
  },
];

module.exports = {
  allQuotes,
};
