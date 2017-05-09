'use strict';

function IncompleteMetamorphosesInsect(){

	this.Agge = function(){/*...*/}

	this.Larva = function(){/*...*/}

	this.Imago = function(){/*..*/}
}

function TotalMetamorphosesInsect(){

	IncompleteMetamorphosesInsect.call(this);

	this.Chrysalis = function(){/*...*/}

}

var Buttrefly = new TotalMetamorphosesInsect();
var Dragonfly = new IncompleteMetamorphosesInsect();

