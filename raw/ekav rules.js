
client.on('message', message =>{

	let args = message.content.substring(prefix.length).split(" ");
	
	switch(args[0]){

		case 'gg':
    			const embed = new Discord.MessageEmbed()
			.setColor('#FA7E0A')
			.setTitle('__ΕΚΑΒ Rules__')
			.addFields(
				{ name: '01. Όταν είστε σε υπηρεσία στο Ε.Κ.Α.Β. θα πρέπει να φοράτε και τα ανάλογα με τον τίτλο σας ρούχα και να είστε συνδεδεμένοι στον ασύρματο του Ε.Κ.Α.Β. στο Discord του Prodigy Roleplay.', value: '\u200b'},
				{ name: '02. Όλοι οι εργαζόμενοι του Ε.Κ.Α.Β. θα πρέπει να πηγαίνουν στις κλήσεις ΜΟΝΟ με τα υπηρεσιακά τους οχήματα και ΜΟΝΟ με τα υπηρεσιακά τους ρούχα.', value: '\u200b'},
				{ name: '03. Όταν είστε εκτός υπηρεσίας θα πρέπει να αλλάζετε τον ρουχισμό σας και να αποθηκεύεται το υπηρεσιακό σας όχημα στο γκαράζ του Ε.Κ.Α.Β. (Τυχόν παραβάτες θα τιμωρούνται αναλόγως).', value: '\u200b'},
				{ name: '04. Δεν μπαίνουμε ΠΟΤΕ υπηρεσία μόνο και μόνο για να σηκώσουμε ένα φίλο μας και μετά να βγούμε. (Τυχόν παραβάτες θα τιμωρούνται αναλόγως).', value: '\u200b'},
				{ name: '05. Απαγορεύεται αυστηρά να σηκώσετε ένα τραυματία με 0 έως 5 παλμούς και με 0% έως 15% αίμα. Κάτω από αυτές τις ενδείξεις γράφουμε /me Nekros.', value: '\u200b'},
				{ name: '06. Απαγορεύεται αυστηρά να σηκώσετε κάποιον που έχει πεθάνει απο έκρηξη ή έχει πέσει από μεγάλο ύψος και έχει χαμηλούς παλμούς και αίμα.', value: '\u200b'},
				{ name: '07. Όταν πάμε σε κλήση και δεν βλέπουμε τον τραυματία περιμένουμε 1-2 λεπτά καθώς ελέγχουμε γύρω γύρω την περιοχή μήπως μετακινήθηκε το σώμα του.', value: '\u200b'},
				{ name: '08. Σε περίπτωση που πάμε σε μια κλήση και μας σημαδεύουν με όπλα και μας λένε να φύγουμε, φεύγουμε και ΔΕΝ ξαναπάμε αν έρθει δεύτερη κλήση από τον ίδιο άνθρωπο στο ίδιο σημείο εντός του χρονικού διαγράμματος των 5 λεπτών.', value: '\u200b'},
				{ name: '09. Όταν μας καλεί η αστυνομία να πάμε σε ενα σημείο και φτάνουμε στο σημείο αλλά ακούμε πυροβολισμούς , φευγουμε απο το σημείο και δεν πλησιάζουμε ξανά μεχρι να μας ενημερώσει η αστυνομία οτι είναι ασφαλές.', value: '\u200b'},
				{ name: '10. Μέσα στο ασθενοφόρο σας πρέπει πάντα να υπάρχουν αρκετές γάζες, τουλάχιστον κατά το ήμισυ της χωρητικότητας του.', value: '\u200b'},
				
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
				{ name: '11. Όσο είστε εν ώρα υπηρεσίας απαγορεύεται να σας κάνουν απαγωγή χωρίς να έχει μέσα 4 εργαζόμενους του Ε.Κ.Α.Β. σε υπηρεσία και 2 Αστυνομικούς σε υπηρεσία, να σας ληστέψουν ή να σας σκοτώσουν.', value: '\u200b'},
				{ name: '12. Όσο είστε στο σώμα του Ε.Κ.Α.Β. ΑΠΑΓΟΡΕΥΕΤΑΙ να παίζετε criminal και θα πρέπει αυστηρός να παραμένετε civilian.', value: '\u200b'},
				{ name: '13. Απαγορεύεται αυστηρά οι εργαζόμενοι του Ε.Κ.Α.Β. να κανει οποιαδήποτε παράνομη δραστηριότητα.', value: '\u200b'},
				{ name: '14. Στην περίπτωση που εργαζόμενος του Ε.Κ.Α.Β. συλληφθεί να κάνει παράνομες δραστηριότητες, χάνει την δουλειά του και οι κυρώσεις και οι ποινές που θα αντιμετώπισει θα είναι οι διπλάσιες από έναν απλό πολίτη.', value: '\u200b'},
				{ name: '15. Απαγορεύεται να αποθηκεύετε εξοπλισμό του Ε.Κ.Α.Β. στο σπίτι σας.', value: '\u200b'},
				{ name: '16. Απαγορεύεται ένας εργαζόμενος του Ε.Κ.Α.Β. να ζητήσει οποιοδήποτε αντάλλαγμα για να προσφέρει τις υπηρεσίες του.', value: '\u200b'},
				{ name: '17. Όλες οι βεβαιώσεις θα υπογράφονται από τον αρμόδιο στην ειδικότητα Γιατρό.', value: '\u200b'},
				{ name: '18. Ελικόπτερο μπορεί να βγάλει μόνο ο Διευθυντής και ο Υποδιευθυντής ή όσοι έχουν το δίπλωμα του Πιλότου.', value: '\u200b'},
				{ name: '19. Προηγούνται οι κλήσεις της ΕΛ.ΑΣ και πάντα με προσοχή όταν πηγαίνουμε σε αυτές.', value: '\u200b'},
				{ name: '20. Σε Redzones πηγαίνουμε ΜΟΝΟ με την συνοδεία της ΕΛ.ΑΣ. (Αν υπάρχουν διαθέσιμες μονάδες της).', value: '\u200b'},
				{ name: '21. Όταν πάμε σε κλήση και ο νεκρός ισχυρίζεται ότι είναι "κυβερνητικό" και να τον σηκώσουμε, τον αγνοούμε εκτός και αν όντως έρθει κυβερνήτης και σας πει να τον σηκώσετε.', value: '\u200b'},
				{ name: '22. Γενικά παίζουμε πάντα RP ακόμα και όταν βάζουμε γάζα σε κάποιον. (π.χ τον ρωτάμε πως και που χτύπησε, να ελέγξετε την πληγή κλπ).', value: '\u200b'},
				{ name: '23. Και ΣΗΜΑΝΤΙΚΟΤΕΡΟ δεν βγαίνουμε ποτέ OOC εκτός και αν έρθει STAFF.', value: '\u200b'},

		)
			message.channel.send(embed);
			break;
	}	
});