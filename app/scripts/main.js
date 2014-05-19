$('.round-one').hide();

// establish properties of the player constructor
function Player (type) {

	if (type == 'fighter') {
		this.str = 5;
		this.wis = 2;
		this.def = 3;
	}
	else if (type == 'mage') {
		this.str = 3;
		this.wis = 5;
		this.def = 2;
	}
	else if (type == 'brawler') {
		this.str = 4;
		this.wis = 2;
		this.def = 6;
	}

	this.hp = this.def + this.str + this.wis;
	this.atk = this.str * 2;
	this.mgc = this.wis * 2;
	this.blk = this.def / 2;
}

//establish the monster constructor
function Monster (level) {
	this.hp = level * level;
	this.atk = level * 2;
}

//hides the current buttons, shows the next buttons, sets player
function begin (last, next, type) {
	last.hide();
	next.show();
	next.before('You have chosen the ' + type);
	return thePlayer = new Player(type);
}
//sets the player to fighter
$('.fighter-select').click(function(){
	begin($('.intro'),$('.round-one'), 'fighter');
});

//sets the player to mage
$('.mage-select').click(function(){
	begin($('.intro'),$('.round-one'), 'mage');
});

//sets the player to brawler
$('.brawler-select').click(function(){
	begin($('.intro'),$('.round-one'), 'brawler');
});

//logs the current player stats in the console
$('.log-stats').click(function(){
	console.log('strength: ' + thePlayer.str);
	console.log('wisdom: ' + thePlayer.wis);
	console.log('deffense: ' + thePlayer.def);
	console.log('health: ' + thePlayer.hp);

});

//does damage to the player
$('.take-hit').click(function(){
	if (thePlayer.hp < 1) {
		document.write('You Died');
	}
	else {		
		return thePlayer.hp = thePlayer.hp - 20;
	}
});









