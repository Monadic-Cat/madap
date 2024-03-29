//@flow
// This file is part of MAM, a manager for MASKS character sheets.
//
// MAM is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// MAM is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

import { range } from 'lodash';

type Move = {
	name: string,
	body: string,
	summary?: string
}

export function moveString(move: Move): string {		
	return [
		`__${move.name}__`,
		move.body
	].join("\n");
}

function bulletList(arr: Array<string>): string {
	return arr.map(x => `\n - ${x}`).join("");
}
function emph(s: string): string {
	return `**${s}**`;
}
function blankLine(): string {
	return `\n${range(10).map(_ => "_").join("")}\n`;
}

const moves: Array<Move> = [
	// Soldier Moves
	{
		name: "Before we get started",
		body: [
			"When you have time to closely observe your opposition before a",
			"fight, roll + Savior. On a 10+, hold 3. On a 7-9, hold 2.",
			"On a miss, hold 1 and mark a condition. During the fight, you can",
			"spend your hold to name a character you observed and...:",
			bulletList([
				[
					"...redirect their attack to another character or",
					"nowhere--into a wall or the sky."
				].join(" "),
				"...cross a distance between them and you.",
				"...stun them, close up or from a distance.",
				"...ignore all harm from one of their attacks.",
				"...escape any bindings or impediments they attempt to place on you."
			])
		].join(" ")
	},
	{
		name: "No, you move",
		body: [
			"When you demand that an NPC live up to a higher moral code, roll",
			"+ Savior. On a hit, they have to meet your standard or mark a",
			"Condition. On a 10+, take Influence over them as well. On a miss,",
			"they reveal that the conflict in question is more complicated than",
			"it seems; give them Influence over you."
		].join(" ")
	},
	{
		name: "I can do this all day",
		body: [
			"When something causes you to remove yourself from a fight, you can",
			"shift Savior down (and another Label up) instead. If shifting Savior",
			"down would move it below -2, you have to leave the fight instead of",
			"shifting Labels."
		].join(" ")
	},
	{
		name: "It kinda feels personal",
		body: [
			"When you discover that someone has mislead you or betrayed your",
			"cause, mark a condition to take +1 ongoing against them until they",
			"are brought to justice."
		].join(" ")
	},
	{
		name: "Mission first",
		body: [
			"When you secure a valuable resource by defeating a powerful foe,",
			"you can shift your Savior up and any other Label down. If you",
			"(and your team) managed to avoid causing any collateral damage,",
			"clear a condition as well."
		].join(" ")
	},
	{
		name: "More than a shield",
		body: [
			`When you ${emph("directly engage a threat")} by heading directly into`,
			"danger without regard for your own safety, roll with Savior instead",
			"of Danger. On a miss, your focused attack leaves someone in grave",
			"danger; the GM will tell you what it takes to keep them save."
		].join(" ")
	},
	// Brain Moves
	{
		name: "Above the fray",
		body: [
			`When you ${emph("enter battle as a Team against a dangerous foe,")}`,
			"if you have Influence over the leader and provide tactical input, add",
			"1 Team to the pool. When you",
			`${emph("contradict the leader during the battle,")} you may return`,
			"Influence over the leader to add an additional 1 Team to the pool."
		].join(" ")
	},
	{
		name: "Mission debrief",
		body: [
			"During a debrief, when you",
			emph("downplay your role in helping a teammate during the mission,"),
			"mark potential and shift Superior down and any other Label up.",
			`When you ${emph(
				"exaggerate your role in helping a teammate during the mission,"
			)} clear a condition and either give them Influence or lose Influence`,
			"over them."
		].join(" ")
	},
	{
		name: "Logical angle",
		body: [
			`When you ${emph("comfort or support someone")} by rationally pointing`,
			"out their mistakes so they can do better next time, roll + Superior",
			"instead of + Mundane. If they do not open up to you, mark a condition."
		].join(" ")
	},
	{
		name: "Scientific Insight",
		body: [
			"You have achieved mastery over a field of science and technology,",
			"Name it:",
			blankLine(),
			`Whenever you ${emph("assess the situation")} and your field of`,
			"study is directly relevant, you may as a single follow-up question."
		].join(" ")
	},
	{
		name: "Always prepared",
		body: [
			"When you have a chance to restock your supplies, hold up to 2-gadgets.",
			`When you ${emph("unleash your powers")} by producing a new minor`,
			"invention or gadget from your supply, spend 1-gadget and roll",
			"+ Superior. When you reach 0-gadgets, mark a condition."
		].join(" ")
	},
	{
		name: "Tactical genius",
		body: [
			"When you point out the obvious flaw in a known foe's plan,",
			"roll + Savior. On a hit, you're right and another teammate",
			"(your choice) can take advantage; they get +1 ongoing to act on your",
			"information. On a 7-9, pick one:",
			bulletList([
				"You missed something important. The GM will tell you what.",
				[
					"You look like a showoff. Your chosen teammate takes Influence",
					"over you, and you lose Influence over them."
				].join(" "),
				[
					"You make your teammates feel like little more than pawns.",
					"Your chosen teammate marks a condition."
				].join(" ")
			]),
			"On a miss, you've played into your enemy's hands; watch the trap spring."
		].join(" ")
	},
	// Star Moves
	{
		name: "The gossip mags",
		body: [
			"When you tap into the gossip and rumor of the celebrity industry for",
			"information on an important city figure, roll + Superior. On a hit,",
			"you can ask the GM questions. On a 10+, ask three. On a 7-9, ask one:",
			bulletList([
				"What are they up to?",
				"What or who do they most care about?",
				"What allies do they have? Enemies?",
				"Where and when can I find them?",
				"How could I make them vulnerable to me?"
			]),
			"On a miss, ask one anyway, but they hear about your interest in them."
		].join(" ")
	},
	{
		name: "Stage-fighting",
		body: [
			`When you ${emph("directly engage a threat")} with an audience`,
			"watching, mark a condition to roll + Superior instead of Danger."
		].join(" ")
	},
	{
		name: "Time for the show",
		body: [
			"When you put on a flamboyant display of your poewrs, roll + Superior.",
			"On a 7-9, name one NPC present. On a 10+, name two NPCs present.",
			"The named NPCs must either volunteer help or information, express",
			"admiration, or ask for your help, GM's choice. On a miss, your display",
			"catches someone watching in the wrong way."
		].join(" ")
	},
	{
		name: "Take it from me",
		body: [
			`When you ${emph("comfort or support")} someone who openly admires`,
			"your celebrity persona, roll + Superior instead of Mundane."
		].join(" ")
	},
	{
		name: "Cold and Cruel",
		body: [
			"When you shut someone down, roll + Superior. On a 10+, you either",
			"inflict a condition on them, make them lose Influence over you, or",
			"take Influence over them, your choice. On a 7-9, you either each",
			"inflict a condition on the other, or both lose Influence over each",
			"other, your choice. On a miss, they gain Influence over you."
		].join(" ")
	},
	// Reformed Moves
	{
		name: "What the hell, hero",
		body: [
			"When you call out an injustice that a hero has perpetrated, roll",
			"+ Danger. On a hit, take Influence over them. On a 7-9 choose, one.",
			"On a 10+, choose two.",
			bulletList([
				"You get them to admit their wrongdoing",
				"You win over an onlooker; take Influence over them",
				"You don't turn their attention and anger onto yourself"
			]),
			"On a miss, they dismiss you; mark a condition (their choice),",
			"shift Danger up, Savior down."
		].join(" ")
	},
	{
		name: "Wrong side of the tracks",
		body: [
			"You always get to ask an additional question when you",
			`${emph("pierce the mask")} of a villain, even on a miss. When you`,
			`${emph("pierce the mask")} of a hero (your call), add this question`,
			`to the list: ${bulletList(["what was your darkest moment?"])}`
		].join(" ")
	},
	{
		name: "Not so different",
		body: [
			`When you ${emph("provoke someone")} to criminal or villainous action,`,
			"you can use Danger instead of Superior."
		].join(" ")
	},
	{
		name: "Dark past",
		body: [
			"When you confess to a serious crime you committed as a villain",
			"while in the presence of someone involved, shift Danger up and",
			"any other Label down, say what you did, and choose one.",
			bulletList([
				"No one was hurt badly by the crime",
				"You aren't in legal danger from the crime",
				"You aren't being actively pursued for extralegal retribution"
			])
		].join(" ")
	},
	{
		name: "Blowing off steam",
		body: [
			"When you commit a misdemeanor or small \"victimless\" crime, you may",
			"clear a condition of your choice."
		].join(" ")
	},
	{
		name: "Do me a favor",
		body: [
			"When you go to an ordinary citizen you know for a favor, roll",
			"+ Mundane. On a 10+, they'll lend you a hand. On a 7-9, they need",
			"a promise up front. On a miss, you catch them up in your superpowered",
			"nonsense, and they suffer for it."
		].join(" ")
	},
	// Newborn Moves
	{
		name: "Not from around here",
		body: [
			"When you act clueless, goofy, or confused to get out of a sticky",
			"mundane situation, roll + Freak. On a hit, you create an opportunity",
			"a distrction, or a plausible excuse. On a 7-9, you also feel all the",
			"weight of playing the clown and of the people staring at you. The GM",
			"shifts one of your Labels up and one down. On a miss, no one is",
			"fooled, and you've put yourself in their crosshairs."
		].join(" ")
	},
	{
		name: "Thermodynamic miracle",
		body: [
			`When you ${emph("comfort or support")} someone by telling them what`,
			"makes them unique, roll + Freak instead of Mundane. If they open up",
			"to you, shift Freak up and Mundane down. If they don't,",
			"mark a condition."
		].join(" ")
	},
	{
		name: "A mind of their own",
		body: [
			"Your powers evolve and mutate. When you are facing an obstacle or",
			"threat that your powers would not be able to deal with, you can mark",
			"a condition to gain brand new abilities adapted to the situation.",
			"You lose these new powers once the danger is gone."
		].join(" ")
	},
	{
		name: "Damage",
		body: [
			"You get an additional condition called Damaged. While marked, take a",
			`+1 to ${emph("take a powerful blow.")}`,
			"\nTo clear the Damaged condition, you need time, external help, or",
			"special equipment or abilities."
		].join(" ")
	},
	{
		name: "Regeneration",
		body: [
			"When you're taken out, you can trigger an emergency regeneration",
			"process. If you do, your body undergoes an unpredictable",
			"transformation, and in mere moments, you're back on your feet and",
			"ready to fight. Clear three conditions and choose three from the",
			"list below:",
			bulletList([
				"Change your gender identity or presentation",
				"Change your physical appearance",
				"Forget all your lessons",
				"Lose an important memory of a teammate; they lose Influence over you",
				"Swap an ability with another one from the Newborn playbook"
			])
		].join(" ")
	},
	// Innocent Moves
	{
		name: "Making amends",
		body: [
			"When you make yourself vulnerable while",
			emph("comforting or supporting"),
			"someone you (or your future self) has fought or hurt, take +2 to",
			"the roll. If you miss or they refuse to open up, mark a condition and",
			"take a powerful blow."
		].join(" ")
	},
	{
		name: "Growing into power",
		body: [
			`When you ${emph("unleash your powers")} to do something your future`,
			"self can do, mark a condition to roll + Savior instead of + Freak."
		].join(" ")
	},
	{
		name: "See it their way",
		body: [
			`When you ${emph("reject someone's Influence")} when they equate you`,
			"with your future self, roll + Savior instead of + nothing. When",
			"you accept someone's Influence when they equate you with your future",
			"self, mark potential."
		].join(" ")
	},
	{
		name: "What's this thing?",
		body: [
			"When you ask for someone else's guidance on the modern world, they",
			"must tell you what they think you should do or how you should act.",
			"If you act that way, clear a condition and shift Mundane up and any",
			"other Label down. If you act that way and it goes poorly,",
			"mark potential."
		].join(" ")
	},
	{
		name: "White knight",
		body: [
			"When you give a speech on morality and heroism, you can",
			`${emph("provoke someone")} with Savior instead of Superior.`
		].join(" ")
	},
	{
		name: "Martyr",
		body: [
			`When you ${emph("take a powerful blow")} while defending someone or`,
			"something, you may shift Savior up and any other Label down."
		].join(" ")
	},
	// Harbinger Moves
	{
		name: "Stick to the mission",
		body: [
			`When you ${emph("defend someone")} or something critically important`,
			"to the future (tell us why), you may mark a condition to shift down",
			"one Label and shift up Savior before the roll. If you do, you cannot",
			`choose to clear a condition for the ${emph("defend")} move.`
		].join(" ")
	},
	{
		name: "Tomorrow's golden promise",
		body: [
			`When you ${emph("comfort or support someone")} with tales of what you`,
			"think their future will be, you may roll + Savior instead of",
			"+ Mundane. Mark a condition unless you are confident the stories are",
			"true."
		].join(" ")
	},
	{
		name: "Applied history",
		body: [
			`When you ${emph("pierce the mask")} of someone you believe will shape`,
			"the future, roll + Savior instead of + Mundane."
		].join(" ")
	},
	{
		name: "You haven't learned you can do that yet",
		body: [
			"When you tell a teammate about a new, never-before-performed",
			"trick that they've never considered, spend a Team from the pool",
			"to allow them to",
			emph("unleash their powers, directly engage a threat,"),
			`or ${emph("defend someone")} using your Superior as if it was their`,
			"Label. Any costs or complications from their move affect you, as well."
		].join(" ")
	},
	{
		name: "I learned the solution in grade school",
		body: [
			`When you ${emph("unleash your powers")} to extend your senses or`,
			"overcome an intellectual obstacle, you may roll + Superior instead",
			"of + Freak."
		].join(" ")
	},
	{
		name: "21st century studies",
		body: [
			`When you ${emph("assess the situation")}, you may always ask`,
			"\"what does the future know about this moment?\", even on a miss.",
			"You take +1 ongoing to act on the answers."
		].join(" ")
	},
	// Nomad Moves
	{
		name: "No good at being a kid",
		body: "When you clear a condition, you can shift Labels, your choice."
	},
	{
		name: "Watched C-beams glitter",
		body: [
			"When you make a claim about a strange situation or phenomenon based",
			"on your experience, roll + Freak. On a hit, you were right; the GM",
			"will tell you what opportunity your knowledge grants you. On a 7-9",
			"your claim is incomplete, flawed, or tangential; the GM will tell you",
			"how. On a miss, your experiences are deeply incomplete; the GM will",
			"tell you what mistake your flawed understanding leads you to."
		].join(" ")
	},
	{
		name: "I hate calling the cavalry",
		body: [
			"When you call the allies you made beyond this world to ask them for",
			"help, mark a condition and roll + Superior. On a hit, someone shows",
			"up to lend you a hand. On a 7-9, they're dragging their own problems.",
			"On a miss, your call reaches someone you wish it hadn't."
		].join(" ")
	},
	{
		name: "The littlest space bandit",
		body: [
			`When you ${emph("directly engage a threat")} that underestimates you,`,
			"roll + + Superior instead of + Danger."
		].join(" ")
	},
	{
		name: "Out of this world",
		body: [
			"When you plug into the cosmic aether and tune out of this world,",
			"roll + Freak. On a hit, you come to a new interesting insight about",
			"your current problems and situation; the GM will tell you what.",
			"On a 10+, you can also shift your own Labels according to match your",
			"new understanding. On a miss, you realize something dangerous or",
			"terrible; the GM will tell you what, and shift your Labels accordingly."
		].join(" ")
	},
	{
		name: "Sharpened eyes",
		body: [
			`When you ${emph("assess the situation,")} you may always ask one of`,
			"the following questions, even on a miss:",
			bulletList([
				"What's my best way out/way in/way past?",
				"What here would be handy to grab?",
				"Who here is susceptible to my words?"
			])
		].join(" ")
	},
	// Scion Moves
	{
		name: "I'll show them",
		body: [
			`When you ${emph("defend someone")} who doesn't believe in you, you`,
			"can always take Influence over them, even on a miss."
		].join(" ")
	},
	{
		name: "Changed sides",
		body: [
			"When you mislead or trick an enemy by pretending to be on their side,",
			"roll + Danger. On a hit, they buy your charade for now. On a 7-9,",
			"choose 1. On a 10+, choose 2.",
			bulletList([
				"You avoid having to provide concrete evidence",
				"You create an opportunity",
				"You expose a weakness or flaw"
			]),
			"On a miss, someone else watching comes to the worst possible",
			"conclusion."
		].join(" ")
	},
	{
		name: "They don't deserve forgiveness",
		body: [
			"When you accuse an enemy of being irredeemable, you can mark two",
			"conditions to take Influence over you away from them. When you",
			`${emph("directly engage")}, someone who has no Infuence over you,`,
			"you can always choose 1 additional option, even on a miss."
		].join(" ")
	},
	{
		name: "Moldable",
		body: [
			`When you ${emph("pierce the mask")} of someone whose respect you`,
			"crave, you can always ask \"How could I gain Influence over you?\",",
			"even on a miss. Take +1 ongoing to acting on the answer."
		].join(" ")
	},
	{
		name: "All the best stuff",
		body: [
			"You've compiled access to caches of equipment and weaponry other",
			"supers have hidden in the city. When you access a cache, say whose",
			"cache it is. If it's a hero's, roll + Savior.",
			"If it's a villain's, roll + Danger. On a hit, you find a tool or",
			"intel useful to your situation; the GM will detail. On a 7-9,",
			"you leave evidence that you've been here. On a miss, you tripped",
			"an alarm and they're coming; prepare to explain yourself."
		].join(" ")
	},
	{
		name: "White lies",
		body: [
			`When you ${emph("comfort or support")} someone by telling them how`,
			"they are your role model as a hero, roll + Savior instead of",
			"+ Mundane. On any hit, if they open up to you, take",
			"Influence over them."
		].join(" ")
	},
	// Transformed Moves
	{
		name: "I am not my body",
		body: [
			`When you ${emph("take a powerful physical blow")}, you may roll as if`,
			"you had two fewer conditions marked. If you do, on a 10+ you must",
			"choose to lose control of yourself in a terrible way."
		].join(" ")
	},
	{
		name: "Not human enough",
		body: [
			`When you ${emph("directly engage a threat")} in a terrifying fashion`,
			"mark a condition to choose an additional option, even on a miss."
		].join(" ")
	},
	{
		name: "Unstoppable",
		body: [
			"When you smash your way through scenery to get to or away from",
			"something, roll + Danger. On a hit, the world breaks before you,",
			"and you get what you want. On a 7-9, choose one: mark a",
			"condition, leave something behind, or take something with you.",
			"On a miss, you smash through, but leave devastation in your",
			"wake or wind up somewhere worse, GM's choice."
		].join(" ")
	},
	{
		name: "Coming for you",
		body: [
			"When you mark a condition, take +1 forward against the person",
			"you most blame for causing it."
		].join(" ")
	},
	{
		name: "Wish I could be",
		body: [
			`When you ${emph("comfort or support someone")}, if you tell them`,
			"what you most envy about them, you can roll + Freak instead of",
			"+ Mundane."
		].join(" ")
	},
	{
		name: "Be the monster",
		body: [
			"When you frighten, intimidate, or cow others with your monstrous",
			"form, roll + Freak. On a hit, they are thrown off and make themselves",
			"vulnerable to you, or they flee. On a 10+, choose one. On a 7-9,",
			"choose two.",
			bulletList([
				"you frighten others you had not intended to scare",
				"you hurt someone or break sometihng you shouldn't have",
				[
					"you feel like more of a monster afterward;",
					"mark a condition (GM's choice)"
				].join(" ")
			]),
			"On a miss, they react with violence, hatred, and paranoia, and",
			"you suffer the brunt of it."
		].join(" ")
	},
	// Protege Moves
	{
		name: "Been reading the files",
		body: [
			"You've learned about the superhuman world through your mentor's",
			"resources. When you first encounter an important superpowered",
			"phenomenon (your call), roll + Superior. On a hit, tell the team",
			"one important detail you've learned from your studies. The GM will",
			"tell you what, if anything, seems different from what you remember.",
			"On a 10+, ask the GM a follow-up question; they will answer it",
			"honestly. On a miss, the situation is well outside your base of",
			"knowledge; the GM will tell you why."
		].join(" ")
	},
	{
		name: "Captain",
		body: [
			`When you ${emph("enter battle as a team")}, add an extra Team to the`,
			"pool and carry +1 forward if you are the leader."
		].join(" ")
	},
	{
		name: "Venting frustration",
		body: [
			`When you ${emph("directly engage")} while you are Angry, you can roll`,
			"you can roll + the Label your mentor denies and clear Angry."
		].join(" ")
	},
	{
		name: "Fireside chat",
		body: [
			"When you seek advice from your mentor, roll + the Label they embody.",
			"On a hit they will tell you what to do. On a 10+, mark potential if you",
			"follow their advice, and take +1 ongoing to follow through. On a 7-9,",
			"you get +1 forward to see it through if you do it their way. On a miss,",
			"they don't have time for you because something big has gone down; mark",
			"a condition, GM's choice."
		].join(" ")
	},
	{
		name: "Be mindful of your surroundings",
		body: [
			`When you ${emph("assess the situation")} before entering into a fight,`,
			"you may ask one additional question, even on a miss."
		].join(" ")
	},
	{
		name: "Heroic tradition",
		body: [
			"When you give someone the advice that you think your mentor would give,",
			"you can roll + the Label your mentor embodies to",
			`${emph("comfort or support someone")}, instead of rolling + Mundane.`
		].join(" ")
	},
	// Outsider Moves
	{
		name: "Belong in two worlds",
		body: [
			"You have the resources that come with your station. Whenever you",
			"contact your people, roll + Superior. On a 10+, hold 3. On a 7-9,",
			"hold 2. On a miss, hold 1, but your people make an uncomfortable",
			"demand of you. Spend your hold 1 for 1 to:",
			bulletList([
				["receive a useful piece of alien technology that will allow you",
				 "to use any ability from another playbook once (choose the",
				 "ability when you spend the hold)"].join(" "),
				["consult your people's knowledge to ask the GM a question about",
				 "the current situation"].join(" "),
				"clear a condition through the comfort of contact with your home"
			])
		].join(" ")
	},
	{
		name: "Alien tech",
		body: [
			"When you alter a human device with your alien technology,",
			"roll + Freak. On a hit, you can create a device that can do",
			"something impossible once and then fizzle. When you roll a 10+,",
			"choose one:",
			bulletList([
				"it works exceptionally well",
				"you get an additional use out of it"
			]),
			"On a miss, the device works, but it has a completely unintended",
			"side effect that the GM will reveal when you use it."
		].join(" ")
	},
	{
		name: "Alien ways",
		body: [
			"Whenever you openly disregard or undermine an important Earth",
			"custom in favor of one of your own people's customs, shift",
			"Superior up and any other Label down."
		].join(" ")
	},
	{
		name: "Kirby-craft",
		body: [
			"You have a vehicle, something from your home. Detail its look,",
			"and choose two strengths and two weaknesses. When you are flying",
			"your ship, you can use it to",
			emph("unleash your powers, directly engage a threat"),
			`or ${emph("defend someone")} using Superior.`,
			"\n",
			emph("Strengths:"),
			"Fast & maneuverable, chameleon plating, powerful weaponry,",
			"regenerating, dimension-shifting, size-shifting, telepathic",
			"\n",
			emph("Weaknesses:"),
			`Bizarre fuel source, susceptible to ${blankLine()}, easily`,
			"detectable, slow and clumsy, unarmed, difficult to repair"
		].join(" ")
	},
	{
		name: "The best of them",
		body: [
			`When you ${emph("comfort or support someone")} by telling`,
			"them how they exemplify the best parts of Earth, roll + Freak",
			"instead of + Mundane."
		].join(" ")
	},
	{
		name: "Not so different after all",
		body: [
			"When you talk about your home, roll + Freak. On a 10+ choose two.",
			"On a 7-9, choose one. During the conversation, you:",
			bulletList([
				"confess a flaw of your home; add 1 Team to the pool",
				"mislead them about your home; take Influence over them",
				"describe the glories of your home; clear a condition"
			]),
			"On a miss, you inadvertently reveal more about yourself than you",
			"planned; tell them a secret or vulnerability you hadn't shared",
			"with Earthlings before now."
		].join(" ")
	},
	// Nova Burn
	{
		name: "Reality storm",
		body: [
			"You channel a destructive burst with your powers. Spend 1 burn to",
			`${emph("directly engage a threat")} using your powers, rolling`,
			"+ Freak instead of + Danger. If you do, you will cause unwanted",
			"collateral damage unless you spend another burn."
		].join(" ")
	},
	{
		name: "Shielding",
		body: [
			"You call up a fast protective field to stop a danger. Spend 1 burn",
			`to ${emph("defend someone")} else from an immediate threat, rolling`,
			"+ Freak instead of + Savior."
		].join(" ")
	},
	{
		name: "Constructs",
		body: [
			"Spend 1 burn to create any object with your powers, up to the size",
			"of a person. Spend an additional burn to animate it independently of",
			"yourself. The construct dissolves at the end of the scene."
		].join(" ")
	},
	{
		name: "Moat",
		body: [
			"Spend 1 burn to create a barrier that will hold back threats as long",
			"as you keep your attention on it. The GM may call for you to spend",
			"another burn if the barrier is threatened by particularly powerful",
			"enemies."
		].join(" ")
	},
	{
		name: "Worship",
		body: [
			"You put out a tremendous display of your might. Spend 1 burn to awe",
			"an audience into silence, respect, and attention when you",
			emph("unleash your powers.")
		].join(" ")
	},
	{
		name: "Move",
		body: [
			"Spend 1 burn to move to any place you choose within the scene, breaking",
			"through or slipping past any barriers or restraints in your way.",
			"Spend a second burn to move to any place you've previously been."
		].join(" ")
	},
	{
		name: "Boost",
		body: [
			"Spend 1 burn to supercharge a teammate's efforts with your powers,",
			"giving them a +1 bonus to their roll as if you had spent Team from",
			"the pool."
		].join(" ")
	},
	{
		name: "Overcharge",
		body: [
			"You channel the full capacity of your incredible powers to overcome",
			"an obstacle, reshape your environment, or extend your senses.",
			"Spend 2 burn to take a 10+ when you unleash your powers."
		].join(" ")
	},
	{
		name: "Elemental awareness",
		body: [
			"Spend 1 burn and mark a condition to open your mind up to the world",
			"around you with your powers. You can ask any one question about the",
			"world around you, and the GM will answer honestly."
		].join(" ")
	},
	{
		name: "Snatch",
		body: [
			"Spend 1 burn to use your powers to seize any one object up to the",
			"size of a person from someone within view."
		].join(" ")
	}
]

export default moves;
