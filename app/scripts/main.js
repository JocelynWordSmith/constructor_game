//hides buttons not in use
$('.in-line').hide();

//defines player and monster empty obj
var thePlayer;
var theMonster = {name: 'goblin'};
var n = 0;


// establish properties of the player constructor
function Player (type) {

	if (type == 'fighter') {
		this.hero = type;
		this.str = 5;
		this.wis = 2;
		this.def = 3;
	}
	else if (type == 'mage') {
		this.hero = type;
		this.str = 3;
		this.wis = 5;
		this.def = 2;
	}
	else if (type == 'brawler') {
		this.hero = type;
		this.str = 4;
		this.wis = 2;
		this.def = 6;
	}

	this.hp = 10;

}

//establish the monster constructor
function Monster (level) {
	this.level = level;
	this.str = level;
	this.hp = level * 2;
	if (n >= 0) {this.name = ' Hob-goblin'}
	if (n > 4) {this.name = ' Rob-goblin'}
	if (n > 9) {this.name = ' NAN-G0bl1n'}
		
	if (n == 5) {
	thePlayer.str += 2; 
	thePlayer.wis += 2; 
	thePlayer.def += 1; 
	thePlayer.hp += 20; 
	updateStats(thePlayer)
	}
	if (n == 7) {
	thePlayer.str += 2; 
	thePlayer.wis += 2; 
	// thePlayer.def += 1; 
	thePlayer.hp += 8; 
	updateStats(thePlayer)
	}
	if (n == 10) {
	thePlayer.str += 3; 
	thePlayer.wis += 3; 
	thePlayer.def += 1; 
	thePlayer.hp += 20; 
	updateStats(thePlayer)
	}	
	if (n == 11) {
		document.write('YOU HAVE SAVED THE KINGDOM');
	}
}

function summonMonster (level) {
	return theMonster = new Monster(level);
}

//hides the current buttons, shows the next buttons, sets player
function begin (last, next, message) {
	last.hide();
	next.show();
	$('.message').html(message);



}

// function to update the stats
function updateStats (obj) {

	if (obj == thePlayer){

		$('.stats').html('STR: ' + obj.str + '<br>WIS: ' + obj.wis + '<br>DEF: ' + obj.def + '<br>HP: ' + obj.hp );
	}
	else if (obj == theMonster){
		
		$('.baddy').html('LVL: ' + obj.level + '<br>HP: ' + obj.hp);
	}

}
//sets the player to fighter
$('.fighter-select').click(function(){
	begin($('.intro'),$('.ready'), 'You have chosen the fighter');
	thePlayer = new Player('fighter');
	updateStats(thePlayer);
});

//sets the player to mage
$('.mage-select').click(function(){
	begin($('.intro'),$('.ready'), 'You have chosen the mage');
	thePlayer = new Player('mage');
	updateStats(thePlayer);
});

//sets the player to brawler
$('.brawler-select').click(function(){
	begin($('.intro'),$('.ready'), 'You have chosen the brawler');
	thePlayer = new Player('brawler');
	updateStats(thePlayer);
});

//logs the current player stats in the console
$('.log-stats').click(function(){
	console.log('strength: ' + thePlayer.str);
	console.log('wisdom: ' + thePlayer.wis);
	console.log('deffense: ' + thePlayer.def);
	console.log('health: ' + thePlayer.hp);

});

//begins monster fight
$('.fight').click(function(){
	n = n + 1;

	summonMonster(n);
	begin($('.ready'),$('.battle'), 'You have encountered a level ' + theMonster.level + theMonster.name);
	updateStats(theMonster);
});


$('.attack').click(function(){
	theMonster.hp -= thePlayer.str;
	updateStats(theMonster);
	if (theMonster.hp < 1) {
		begin($('.battle'),$('.ready'), 'You have killed a level ' + theMonster.level + theMonster.name);
	}
	else {
		begin($('.battle'),$('.monster-turn'), 'the monster is going to attack for ' + theMonster.str + ' damage');
	}
});
$('.spell').click(function(){
	theMonster.hp -= thePlayer.wis;
	updateStats(theMonster);
	if (theMonster.hp < 1) {
		begin($('.battle'),$('.ready'), 'You have killed a level ' + theMonster.level + theMonster.name);
	}
	else {
		begin($('.battle'),$('.monster-turn'), 'the monster is going to attack for ' + theMonster.str + ' damage');
	}
});
$('.tackle').click(function(){
	theMonster.hp -= (thePlayer.def * 2);
	thePlayer.hp -= (thePlayer.def / 2);
	updateStats(theMonster);
	updateStats(thePlayer);
	if (theMonster.hp < 1) {
		begin($('.battle'),$('.ready'), 'You have killed a level ' + theMonster.level + theMonster.name);
	}
	else {
		begin($('.battle'),$('.monster-turn'), 'the monster is going to attack for ' + theMonster.str + ' damage');
	}
});



//does damage to the player
$('.monster-turn').click(function(){		
	
	thePlayer.hp -= theMonster.str;
	if (thePlayer.hp <= 0){
		document.write('THEY HAVE SET US UP THE BOMB. you lose.')
	}
	else {
		updateStats(thePlayer);
		begin($('.monster-turn'),$('.battle'), 'Your Turn', null);
	}
});









