import React from 'react';
const facts = ["68.7% of the fresh water on Earth is trapped in glaciers.",
"Approximately 400 billion gallons of water are used in the United States per day.",
"Water can dissolve more substances than any other liquid including sulfuric acid.",
"To create one pint of beer it takes 20 gallons of water.", "Water weighs about 8 pounds a gallon.",
"A jellyfish and a cucumber are each 95% water.",
"70% of the human brain is water.",
"A person can live about a month without food, but only about a week without water.",
"Water expands by 9% when it freezes.",
"300 tons of water are required to manufacture 1 ton of steel.",
"It takes more than twice the amount of water to produce coffee than it does tea."];

const Fact = () => (
	<p className="footer">{facts[Math.floor(Math.random() * 10)]}</p>
);

export default Fact;


				