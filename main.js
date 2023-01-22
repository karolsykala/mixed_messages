// make 3 lists with sentences

let goggins_quotes = ["The pain that you are willing to endure is measured by how bad you want it.",
"We’re either getting better or we’re getting worse.",
"Denial is the ultimate comfort zone.",
"It’s time to go to war with yourself.",
"I don’t stop when I’m tired. I stop when I’m done.",
"We all have the ability to come from nothing to something.",
"Life is one big tug of war between mediocrity and trying to find your best self.",
"The path to success will leave you callused, bruised, and very tired. It will also leave you empowered.",
"Everybody comes to a point in their life when they want to quit. But it’s what you do at that moment that determines who you are.",
"We don’t rise to the level of our expectations, we fall to the level of our training.",

];

let stoics_quotes = ["Waste no more time arguing what a good man should be. Be One. — Marcus Aurelius", 
"It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.” — Marcus Aurelius",
"No great thing is created suddenly, any more than a bunch of grapes or a fig. If you tell me that you desire a fig, I answer that there must be time. Let it first blossom, then bear fruit, then ripen. — Epictetus",
"It’s not because things are difficult that we dare not venture. It’s because we dare not venture that they are difficult.” — Seneca",
"You live as if you were destined to live forever, no thought of your frailty ever enters your head, of how much time has already gone by you take no heed. You squander time as if you drew from a full and abundant supply, though all the while that day which you bestow on some person or thing is perhaps your last. ― Seneca",
"You have power over your mind — not outside events. Realize this, and you will find strength. — Marcus Aurelius",
"If you are pained by any external thing, it is not this thing that disturbs you, but your own judgment about it. And it is in your power to wipe out this judgment now. — Marcus Aurelius"];

let gratitude_quotes = ["Gratitude turns what we have into enough. – Anonymous",
"Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow. – Melody Beattie",
"Joy is the simplest form of gratitude. – Karl Barth",
"In ordinary life, we hardly realize that we receive a great deal more than we give, and that it is only with gratitude that life becomes rich. – Dietrich Bonhoeffer",
"At times, our own light goes out and is rekindled by a spark from another person. Each of us has cause to think with deep gratitude of those who have lighted the flame within us. – Albert Schweitzer"
];


// create a loop that takes one of the sentences from each list and displays it on a screen
function createMyQuotes () {
    console.log(`Goggins says: ${goggins_quotes[Math.floor(Math.random() * goggins_quotes.length)]}`)
    console.log(`Stoics says: ${stoics_quotes[Math.floor(Math.random() * stoics_quotes.length)]}`)
    console.log(`Remeber this: ${gratitude_quotes[Math.floor(Math.random() * gratitude_quotes.length)]}`)
}

createMyQuotes()