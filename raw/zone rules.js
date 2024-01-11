client.on('message', message =>{

	let args = message.content.substring(prefix.length).split(" ");

	switch(args[0]){
		case 'gg':
    			const embed = new Discord.MessageEmbed()
			.setColor('#2EFF00')
			.setTitle('__Green Zone Rules__')
			.addFields(
				{ name: 'Τα Green Zones είναι οι ζώνες οι οποίες δεν μπορεί να ξεκινήσει καμία εγκληματική ενέργεια και είναι οι εξής:', value: '\u200b'},
				{ name: '1. Αστυνομία', value: '\u200b'},
				{ name: '1.1 Το κτήριο της αστυνομίας και το parking μπροστά στην είσοδο.', value: '\u200b'},
				{ name: '2. Νοσοκομείο', value: '\u200b'},
				{ name: '2.1 Το κτήριο του νοσοκομείου και το parking μπροστά στην είσοδο.', value: '\u200b'},
				{ name: '3. Car Dealer', value: '\u200b'},
				{ name: '4. Το κεντρικο Garage', value: '\u200b'},
				{ name: '5. Συνεργεία', value: '\u200b'},
				{ name: '6. Μαγαζιά', value: '\u200b'},

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
			.setColor('#FF0000')
			.setTitle('__Red Zone Rules__')
			.addFields(
				{ name: 'Οι περιοχές των redzone είναι οι περιοχές οι οποίες δεν χρειάζεται να προηγηθεί κάποια ενέργεια για να σε σκοτώσουν. Οι περιοχές αυτές είναι kos=(kill on sight) οπότε πας με δική σου ευθύνη και είναι οι εξής', value: '\u200b'},
				{ name: '1. Drug Dealer ', value: '\u200b'},
				{ name: '1.1 (το σημείο όπου πωλούνται όλα τα ναρκωτικά)', value: '\u200b'},
				{ name: '2. Drug Field', value: '\u200b'},
				{ name: '2.1 (Σε όλα τα σημεία που μαζεύεις ναρκωτικά)', value: '\u200b'},
				{ name: '3. Drug Process', value: '\u200b'},
				{ name: '3.1 (Το σημείο όπου γίνετε η επεξεργασία ναρκωτικών)', value: '\u200b'},
				{ name: '4. Van Meth', value: '\u200b'},
				{ name: '4.1 To van meth θα θεωρείτε red zone μόνο όταν κάνει process την meth.', value: '\u200b'},
				{ name: 'Όλος ο υπόλοιπος χάρτης είναι yellow zone, αυτό σημαίνει ότι θα πρέπει να έχει προηγηθεί κάποια αλληλεπίδραση 30 δευτερολέπτων για να ξεκινήσει οποιαδήποτε εγκληματική ενέργεια!', value: '\u200b'},

		)	
			message.channel.send(embed);
			break;
	}	
});