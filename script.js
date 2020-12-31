/* Info for new personality */
let personality = ["Adventurous", "Helpful", "Affable", "Humble", "Capable", 
    "Imaginative", "Cultured", "Optimistic", "Persistent", "Sociable"]

let hobbies = ["Archery", "Backpacking", "Beekeeping", "Blacksmithing", 
    "Bodybuilding", "Fishing", "Flying", "Foraging", "Hunting", "Kayaking"]

let languages = ["Mandarin-Chinese", "Hindi", "Spanish", "Standard-Arabic", "Bengali",
    "Russian", "Portuguese", "Indonesian", "Urdu", "Japanese"]

/* Logic */    

let random = Math.floor(Math.random())

let randomLang = languages[ Math.floor(Math.random() * languages.length)];
let randomHobbie = hobbies[Math.floor(Math.random() * hobbies.length)];
let randomPersonality = personality[Math.floor(Math.random() * personality.length)];


/* Final string to submit to user */


console.log(`Welcome to your new life.

For your future, our program has decided:

Your new language will be:
${randomLang}.
How does that sound?

Your new favorite hobby is:
${randomHobbie}. 

The personality trait you must embody is:
${randomPersonality}. 


Get to it!!`)