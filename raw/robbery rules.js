
client.on('message', message =>{

	let args = message.content.substring(prefix.length).split(" ");
	
	switch(args[0]){

		case 'gg':
			const embed = new Discord.MessageEmbed()
		.setColor('#FA7E0A')
		.setTitle('__Robbery Rules__')
		.addFields(
			{ name: '1. Σε κάθε ληστεία πρέπει να ανακοινωθεί στην αστυνομία ο αριθμός ληστών (Εσωτερικοί, Εξωτερικοί) και αν υπάρχει όμηρος.', value: '\u200b'},
			{ name: '2. Σε περίπτωση σεναρίου ομηρίας, η αστυνομία είναι υποχρεωμένη να συνεργαστεί με τους ληστές και να τεθεί μια διαπραγμάτευση σε λειτουργία για την διάσωση του ομήρου.', value: '\u200b'},
			{ name: '2.1 Οι αποφάσεις που θα παρθούν μπορεί να μην είναι δίκαιες για κάποια απο τις δύο πλευρές.', value: '\u200b'},
			{ name: '3. Βασικός σκοπός της αστυνομίας είναι η διασφάλιση του ομήρου.', value: '\u200b'},
			{ name: '4. Απαγορεύεται η οποιαδήποτε εγκληματική ενέργεια εναντίον του διαπραγματευτή.', value: '\u200b'},
			{ name: '5. Μόλις η αστυνομία διασφαλίσει την ζωή του ομήρου και παραλάβει τον όμηρο παύει να ισχύει οποιονδήποτε συμφωνία-διαπραγμάτευση με τους απαγωγείς/ληστες και μπορούν οι ληστές να δράσουν κατά της αστυνομίας και το αντίθετο.', value: '\u200b'},
			{ name: '6. Η αστυνομία έχει το δικαίωμα να ανοίξει πυρ εάν κρίνει πως είναι αναγκαίο. Π.χ. Εαν κάποιος αστυνομικός κινδυνεύει ή κινδυνεύει η ζωή κάποιου πολίτη.', value: '\u200b'},
			{ name: '7. Σε περίπτωση που γίνει σύλληψη από κάποιον αστυνομικό, αυτόματα αφαιρείται ο ασύρματος και το κινητό σας (δεν χρειάζεται να το πει ή να το γράψει με /me), επομένως δεν μπορείτε να ενημερώσετε κανέναν.', value: '\u200b'},
			{ name: '8. Ο κάθε αστυνομικός έχει δικαίωμα να τοποθετήσει ΕΩΣ 3 καρφιά.', value: '\u200b'},
			{ name: '9. Σε περίπτωση που δεν υπάρχει όμηρος η αστυνομία μπορεί να προβεί σε οποιαδήποτε ενέργεια ώστε να αποτραπεί η ληστεία.', value: '\u200b'},
			{ name: '10. Από την στιγμή που ξεφύγετε από την αστυνομία σε κάποιο σκηνικό απαγορεύεται να αλλάξετε ρούχα, να μπείτε σε σπίτια ή να βγείτε από το παιχνίδι (𝘾𝙤𝙢𝙗𝙖𝙩 𝙇𝙤𝙜) πριν περάσουν τουλάχιστον 20 λεπτά.', value: '\u200b'},

	)
		message.channel.send(embed);
		break;
}	
});

client.on('message', message =>{

	let args = message.content.substring(prefix.length).split(" ");
	
	switch(args[0]){

		case 'gg':
    			const embed = new Discord.MessageEmbed()
			.setColor('#FA7E0A')
			.addFields(
				{ name: '11. Σε μία κατάσταση το μέγιστο ποσό που μπορείτε να ζητήσετε είναι:', value: '\u200b'},
				{ name: '•Πολίτης:10.000 (καθαρά)\n•Εκαβίτη η αστυνομικό: 15.000 (καθαρά)\n•Διοικητή αστυνομίας/διευθυντή ΕΚΑΒ: 30.000 (καθαρά)', value: '\u200b'},
				{ name: '12. Θεωρείται __RedZone__ μια διάμετρος ΄100 μέτρα από την περιοχή που διεξάγεται η ληστεία. Οποιοσδήποτε βρίσκεται σε αυτήν την διάμετρο θεωρείται ύποπτος και μπορεί να συλληφθεί.', value: '\u200b'},
				{ name: '13. Οι εγκληματίες σε κάθε σενάριο μπορούν να είναι μέχρι 1 λιγότερος από την αστυνομία.', value: '\u200b'},
				{ name: '14. Δεν μπορούν να γίνουν διαφορετικές ληστείες ταυτόχρονα εκτός αν υπάρχουν τουλάχιστον 14 αστυνομικοί και 5 εκάβ και κάθε ληστεία έχει cooldown 30 λεπτά από την ώρα που τελείωσε η προηγούμενη.', value: '\u200b'},
				{ name: '15. Απαγορεύετε το __counter__ οποιασδήποτε ληστείας!.', value: '\u200b'},
				{ name: '16. Απαγορεύετε να φοράτε κράνος της αστυνομίας!.', value: '\u200b'},
				{ name: '17. Απαγορεύεται ο όμηρος να προέρχεται από την ίδια ομάδα, μαφία, gang κτλπ ο όμηρος πρέπει να βρεθεί μέσα από την πόλη και να μην γνωρίζεται με τους ληστές.', value: '\u200b'},
				{ name: '18. Για να κάνετε ληστεία χρειάζεστε:', value: '\u200b'},
				{ name: '•Shop: 1-3 ληστές\n•Μικρή τράπεζα 2-4 ληστές\n•Μεγάλη τράπεζα 4-10 ληστές', value: '\u200b'},

		)
			message.channel.send(embed);
			break;
	}	
});