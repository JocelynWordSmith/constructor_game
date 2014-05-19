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
}

var thePlayer = new Player('brawler');
console.log(thePlayer.str);

