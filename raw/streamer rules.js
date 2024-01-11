
client.on('message', message =>{

	let args = message.content.substring(prefix.length).split(" ");
	
	switch(args[0]){
		
		case 'gg':
    			const embed = new Discord.MessageEmbed()
			.setColor('#FA7E0A')
			.setTitle('__Streamer Rules__')
			.addFields(
				{ name: '1. Ως streamer δεν θα έχεις την δυνατότητα να δείξεις καμία κρυφή τοποθεσία!', value: '\u200b'},
				{ name: '2. Δεν θα υπάρχει κάποιο προβάδισμα σε σχέση με κάποιον παίκτη!', value: '\u200b'},
				{ name: '3. Εαν έχεις πάνω από 50 viewers, επικοινώνησε με κάποιο @staff για να πάρεις την ανάλογη ανταμοιβή για την διαφήμιση του server μας!', value: '\u200b'},
				{ name: '4. Κατά την διάρκεια του livestream, απαγορεύεται να σπάτε χαρακτήρα.', value: '\u200b'},
				{ name: '5. Το livestream δεν σας δίνει κανένα προβάδισμα σε σχέση με τους υπόλοιπους παίκτες, τα Staff θα σας αντιμετωπίζουν ισότιμα σε κάθε περίπτωση.', value: '\u200b'},
				{ name: '6. Κατά την διάρκεια του livestream παίζοντας στον server του prodigy roleplay πρέπει να είστε απόλυτα συνετοί, να μην βρίζετε, να μην ωρύεστε για κάποια απόφαση ή κάποιο αποτέλεσμα σκηνικού.', value: '\u200b'},
				{ name: '6.1 Με λίγα λόγια απαγορεύεται να δυσφημίσετε τον server μας.', value: '\u200b'},
				
		)
			message.channel.send(embed);
			break;
	}	
});
			
