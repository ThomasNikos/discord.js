client.on('message', message =>{

	let args = message.content.substring(prefix.length).split(" ");
	
	switch(args[0]){
		case 'gg':
    			const embed = new Discord.MessageEmbed()
			.setColor('#FA7E0A')
	    		.setTitle('__General Rules__')
			.setDescription('**``Rule 1`` Απαγορεύονται οι βρισιές σε σημείο που θα θίξετε την προσωπικότητα, την οικογένεια και τα θεία του συμπαίκτη σας. Οι βρισιές εντός χαρακτήρα επιτρέπονται, πάντα με μέτρο και στα πλαίσια του roleplay (RP). Η μη τήρηση του κανόνα οδηγεί σε ban.** \n\n **``Rule 2`` Value of life (VOL), πρέπει να εκτιμάς την ζωή σου και να δρας ανάλογα όπως θα είχες κάνει και εκτιμήσει την αληθινή σου ζωή.** \n\n **``Rule 3`` New life rule (NLR), εάν ξυπνάτε στο νοσοκομείο, ο χαρακτήρας σας ξεχνά τα γεγονότα που οδήγησαν στην κατάρρευση στο τρέχον σενάριο.** \n\n **``Rule 4`` Απαγορεύεται το Metagaming, το να χρησιμοποιείται πληροφορίες που ο χαρακτήρας σας δεν έμαθε πότε μέσo RP . Για παράδειγμα όταν παρακολουθεις ενα livestream δεν μπορείς να εκμεταλλευτείς οποιαδήποτε πληροφορία.** \n\n **``Rule 5`` Απαγορεύεται το RDM (random death match) δηλαδή η επίθεση σε user από άλλο user χωρίς να έχει προηγηθεί κάποια αλληλεπίδραση μεταξύ τους (Εξαιρούνται τα redzones).** \n\n **``Rule 6`` Combat log, απαγορεύεται την ώρα που βρίσκεστε στην εξέλιξη ενός σεναρίου να αποχωρήσετε από τον server είτε είστε ζωντανός, είτε νεκρός.** \n\n **``Rule 7`` Το όριο ατόμων σε οποιοδήποτε σκηνικό είναι αυστηρά 10, σε περίπτωση συμμαχίας μέχρι 20, εξαιρούνται οι αστυνομικοί οι οποίοι μπορούν να είναι 11.** \n\n **``Rule 8`` Απαγορεύεται το να προκαλλεις τους αστυνομικους cop baiting.** \n\n **``Rule 9`` Απαγορεύεται να βγαίνεις εκτός χαρακτήρα (out of character, OOC).** \n\n **``Rule 10`` Απαγορεύεται το Powergaming (Η κατάχρηση της μηχανικής του παιχνιδιού.) για παράδειγμα δεν μπορείς να κάνεις 10 τούμπες με το αμάξι και να συνεχίσεις λες και δεν έγινε τίποτα.**')
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
			.setDescription('**``Rule 11`` Απαγορεύεται η χρήση του κράνους. (εξαιρουνται οι ΔΙ.ΑΣ).** \n\n **``Rule 12`` Απαγορεύεται το call bait δηλαδή να καλέσεις κάποια υπηρεσία και να τους κλέψεις, πάρεις απαγωγή ή ακόμη να τους σκοτώσεις.** \n\n **``Rule 13`` Απαγορεύεται η διαφήμιση (advertise) άλλων servers στο community μας.** \n\n **``Rule 14`` Το KOS (Kill on sight) επιτρέπεται μόνο στα redzones.** \n\n **``Rule 15`` (VDM): Απαγορεύεται να χτυπήσεις/σκοτώσεις κάποιον με το αμάξι σου και να φύγεις.** \n\n **``Rule 16`` Απαγορεύεται να μιλάτε στο discord χωρίς να έχετε το item ασύρματος.** \n\n **``Rule 17`` Απαγορεύεται εκτός υπηρεσίας να χρησιμοποιείτε τον υπηρεσιακό σας εξοπλισμό.** \n\n **``Rule 18`` Απαγορεύεται να ξεκινήσει κάποιο εγκληματικό σενάριο σε GREENZONE.** \n\n **``Rule 19`` Aπαγορεύεται το RAID στο τμήμα είτε έχει προηγηθεί RP είτε οχι. Ακόμη αν ο κρατούμενος σας βρίσκεται στα κελιά δεν μπορείτε να πάτε για να τον σώσετε.** \n\n **``Rule 20`` Απαγορεύεται να κάνεις ληστεία- ομηρία με Donate Car.**')
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
			.setDescription('**``Rule 21`` Απαγορεύεται να χρησιμοποιήσεις τις ικανότητες του Job σου, ενώ είσαι εκτός υπηρεσίας. (π.χ Μηχανικός να κάνει repair απο το menu του Job του,ενώ είναι εκτος).** \n\n **``Rule 22`` Απαγορεύεται να πας κάποιον νεκρό στο Ε.Κ.Α.Β εκτός αν κρίνει ο Εκαβίτης πως χρειάζεται ιατρική περίθαλψη.** \n\n **``Rule 23`` Απαγορεύται να παρατάτε τα οχήματα σας σε τυχαία σημεία της πόλης.** \n\n **``Rule 24`` 15 Λεπτά πριν το Restart απαγορεύεται ΚΑΘΕ εγκληματική δραστηριότητα.** \n\n **``Rule 25`` Για να πραγματοποιήσει οποιαδήποτε εγκληματική ενέργεια απέναντι σε κάποιον πρέπει να έχεις αριθμητικό πλεονέκτημα(π.χ Δεν μπορεί 1 άτομο να ληστέψει 2, πρέπει οι ληστές να είναι +1 από τα θύματα, εξερούναι οι καταστάσεις 1ν1, που πλεονέκτημα έχει αυτός που έβγαλε πρώτος όπλο).** \n\n **``Rule 26`` Για να κλέψεις κάποιον πρέπει να υπάρχει λόγος (π.χ Να γίνει επιθετικό rp μεταξύ σας τουλάχιστον 30 δευτερολέπτων, ο κανόνας αυτός ισχύει μόνο μέσα στην πόλη και στα πορτοκαλί κυκλάκια).** \n\n **``Rule 27`` Δεν επιτρέπεται να φοράτε το ped του παιδιού, εκτός αν έχετε άδεια από Owner.** \n\n **``Rule 28`` Απαγορεύεται να κάνετε advertise το μαγαζί σας με /tweet, παραμόνο με /ad.** \n\n **``Rule 29`` Απαγορεύεται να ζητάτε όπλα στην διαπραγμάτευση από τους αστυνομικούς.** \n\n **``Rule 30`` Απαγορεύεται αυστηρά να επιστρέψεις σε σκηνικό που έχεις πεθάνει. Η μόνη προϋπόθεση είναι να περάσουν 30 λεπτά και σίγουρα να υπάρχει κάποιος ο οποίος μπορεί να σου θυμίσει το σκηνικό.**')
			message.channel.send(embed);
			break;
	}	
});