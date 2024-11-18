Resonator files must follow the JSON schema below:

```json
{
	"id": 0,
	"name": "string",
	"nickname": "string",
	"birthday": "string",
	"sex": "string",
	"country": "string",
	"influence": "string",
	"bio": "string",
	"talent": {
		"name": "string",
		"description": "string"
	},
	"voice_actors": {
		"CN": "string",
		"JP": "string",
		"EN": "string",
		"KO": "string"
	},
	"combo_teaching": [
		{
			"title": "string",
			"description": "string"
		}
	]
}
```

### Explanation

| Field          | Description              |
| -------------- | ------------------------ |
| id             | Resonator ID             |
| name           | Resonator name           |
| nickname       | Resonator nickname       |
| birthday       | Resonator birthday       |
| sex            | Resonator gender         |
| country        | Resonator country        |
| influence      | Resonator influence      |
| bio            | Resonator biography      |
| talent         | Resonator talent         |
| voice_actors   | Resonator voice actors   |
| combo_teaching | Resonator combo teaching |

### Example

> source: [Aalto.json](./aalto.json)

```json
{
	"id": "1403",
	"name": "Aalto",
	"nickname": "Mistcloak Strike",
	"birthday": "June 11th",
	"sex": "Male",
	"country": "New Federation",
	"influence": "The Black Shores",
	"bio": "June 11th",
	"talent": {
		"name": "Mistcloak Strike",
		"description": "Evaluation Basis: [Resonance Assessment 1617-G]\n\nAccording to Resonator Aalto's reports, there was a rare occurrence of heavy fog on the day of his birth. Aalto's Tacet Mark is located on the left side of his neck. Other than gaining the ability to briefly transform into a mist-like form, no significant physical changes have been observed in Aalto's body after his Awakening.\n\nResonator Aalto excels in the art of camouflage and transformation, often assuming an elusive and fluctuating physical state, akin to the characteristics of mist. Further tests conducted to ascertain the properties of the mist he conjures yielded inconclusive results.\n\nThe Resonance Spectrum Pattern of Aalto matches our known Spectrum Patterns of fog. Strong Syntony Reactions have been observed during testing, confirming the connection between fog and Aalto's Awakening. \nAdditionally, analysis of test samples has revealed a non-convergent Rabelle's Curve with a noticeable periodic waveform, which classifies Aalto as a Congenital Resonator.\n\n\n<i>Researcher's Annotation: As stated in the report, this Resonator is cunning and a master of disguises, thus rendering the credibility of his recounts questionable.</i>\n\n<i>Annotation to the annotation: As a broker honoring integrity. I, Aalto, solemnly swear that the recount I presented is 100% truth. Nothing more, nothing less.</i>"
	},
	"voice_actors": {
		"CN": "VA: Liang DaWei",
		"JP": "VA: Iwasaki Ryota",
		"EN": "VA: James Day",
		"KO": "VA: Im Chae Bin"
	},
	"combo_teaching": [
		{
			"title": "Aalto: <color=#d4bf5f>Basic Attack</color> Tutorial",
			"description": "Perform up to 5 continuous shots, dealing <color=#46c3d4ff>Aero DMG</color>, with Basic Attack IV spreading \"Mist\" forward."
		},
		{
			"title": "Aalto: Resonance Skill Tutorial <color=#d4bf5f>Mist Avatar</color>",
			"description": "Generate \"Mist\" and 1 \"Mist Avatar\" to taunt surrounding targets. The Avatar will inherit part of Aalto's HP, and create 6 <color=#f4d582>Mist Missiles</color> around it, dealing <color=#46c3d4ff>Aero DMG</color> on hit."
		},
		{
			"title": "Aalto: <color=#d4bf5f>Heavy Attack</color> Tutorial",
			"description": "Start aiming to cast a higher-damage attack. After the charging is completed, perform a powerful shot, dealing <color=#46c3d4ff>Aero DMG</color>."
		},
		{
			"title": "Aalto: <color=#d4bf5f>Heavy Attack</color> Tutorial",
			"description": "Start aiming to cast a higher-damage attack. After the charging is completed, perform a powerful shot, dealing <color=#46c3d4ff>Aero DMG</color>."
		},
		{
			"title": "Aalto: Forte Circuit Tutorial <color=#d4bf5f>Mist Salvo</color>",
			"description": "<color=#f4d582>Basic Attack</color> and <color=#f4d582>Mid-Air Attack</color> bullets inflict <color=Wind>Aero DMG</color> and additionally restore \"Mist Drops\" if they pass through \"Mist\"."
		},
		{
			"title": "Aalto: Forte Circuit Tutorial <color=#d4bf5f>Mist Cover</color>",
			"description": "Pass through \"Mist\" or \"Gate of Quandary\" to enter <color=#f4d582>Mistcloak Dash</color>, gaining increased Movement Speed. Continuously consume \"Mist Drops\" during <color=#f4d582>Mistcloak Dash</color> to generate 1 <color=#f4d582>Mist Bullet</color> for each \"Mist Drop\" consumed to automatically attack the target, dealing <color=#46c3d4ff>Aero DMG</color>."
		},
		{
			"title": "Aalto: <color=#d4bf5f>Mid-air Attack</color> Tutorial",
			"description": "Consume STA and shoot consecutive shots at the target in the air, dealing <color=#46c3d4ff>Aero DMG</color>."
		},
		{
			"title": "Aalto: Resonance Liberation Tutorial",
			"description": "Generate a \"Gate of Quandary\" for 10 seconds. Bullets deal increased damage if they pass through the \"Gate of Quandary\"."
		}
	]
}
```
