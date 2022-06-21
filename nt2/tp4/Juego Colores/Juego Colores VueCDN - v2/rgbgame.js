/* ----------------------------------------------------------- */
/*                  COMPONENTE HEADER COLORS                   */
/* ----------------------------------------------------------- */
Vue.component('header-colors', {
    data() {
        return {
        }
    },
    props: ['color','pickedColor'],
    methods: {
	},
	computed: {
	},
	template: `
		<div id="header" :style="{backgroundColor: color}">
		<h1>The Great <br>
			<span id="colorDisplay">{{pickedColor}}</span>
			<br>
			Guessing Game</h1>
		</div>
    `
})

/* ----------------------------------------------------------- */
/*                    COMPONENTE NAV COLORS                    */
/* ----------------------------------------------------------- */
Vue.component('nav-colors', {
    data() {
        return {
        }
    },
    props: ['reset','easy','hard','restartButton','messageDisplay','isHard'],
    methods: {
	},
	computed: {
	},
	template: `
		<div id="navigator">
			<button id="reset" @click="reset()"> {{restartButton}}</button>
			<span id="message"> {{messageDisplay}} </span>

			<button id="easy" @click="easy()" :class="{'selected': !isHard}">easy</button>
			<button id="hard" @click="hard()" :class="{'selected': isHard}">hard</button>
		</div>
    `
})

/* ----------------------------------------------------------- */
/*                      COMPONENTE SQUARE                      */
/* ----------------------------------------------------------- */
Vue.component('square', {
    data() {
        return {
        }
    },
    props: ['square', 'pickedColor', 'mensajes', 'setAllColorsTo'],
    methods: {
		squareClick(){
			var clickedColor = this.square.backgroundColor;

			if (clickedColor === this.pickedColor) {
				this.mensajes.messageDisplay = "You Picked Right!";
				this.setAllColorsTo(this.pickedColor);
				this.mensajes.restartButton = "Play Again!";
				this.mensajes.headerColor = this.pickedColor;
			} else {
				this.square.backgroundColor = "#232323";
				this.mensajes.messageDisplay = "Try Again!";
			}
		}
	},
	computed: {
	},
	template: `
        <div :style="square" @click="squareClick()"></div>
    `
})

/* ----------------------------------------------------------- */
/*                  COMPONENTE MAIN COLORS                     */
/* ----------------------------------------------------------- */
Vue.component('main-colors', {
    data() {
        return {
        }
	},
    props: ['mensajes','setAllColorsTo','pickedColor','squares'],
    methods: {
	},
	computed: {
	},
	template: `
		<div id="container">
			<square 
				class="square" 
				:mensajes="mensajes"
				:square="square"
				:set-all-colors-to="setAllColorsTo"
				:picked-color="pickedColor"
				v-for="(square,index) in squares"
				:key="index"
			></square>
		</div>
	`
})

/* ----------------------------------------------------------- */
/*                    INSTANCIA PRINCIPAL                      */
/* ----------------------------------------------------------- */
var app = new Vue({
	el: '#app',
	mounted() {
		this.init()
	},

    data: {
		pickedColor : 'RBG',
		mensajes : {
			headerColor : '',
			messageDisplay: '',
			restartButton : 'New colors',
		},
		colorCount : 6,
		isHard : true,
		colors : [],
		squares: []
    },
    methods: {
		reset() {
			this.restart();
		},

		easy() {
			if (this.isHard) {
				this.isHard = false;
				this.colorCount = 3;
				for (var i = 0; i < this.colorCount; i++) {
					this.squares[(i+3)].display = "none";
				}
				this.restart();
			}
		},
		hard() {
			if (!this.isHard) {
				this.isHard = true;
				this.colorCount = 6;
				this.restart();
				for (var i = 3; i < 6; i++) {
					this.squares[i].display = "block";
				}
			}
		},
		init(){
			for(let i=0; i<this.colorCount; i++) {
				this.squares.push({
					display: 'block',
					backgroundColor: ''
				})
			}
			this.restart();
		},
		
		PickColor() {
			var quantity;
			if (this.isHard) {
				quantity = 6;
			} else {
				quantity = 3;
			}
			return Math.floor(Math.random() * quantity );
		},

		createNewColors(numbers){
			var arr = [];
			for (var i = 0; i < numbers; i++) {
				arr.push(this.createRandomStringColor());
			}
			return arr;
		},

		setAllColorsTo(color) {
			this.squares.forEach( square => {
				square.backgroundColor = color;
			})
		},

		createRandomStringColor(){
			var newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")" ;
		//	console.log(newColor);
			return newColor;
		},

		randomInt(){
			return Math.floor(Math.random() * 256);
		},

		restart(){
			this.colors = this.createNewColors(this.colorCount);
			this.pickedColor = this.colors[this.PickColor()];
			this.mensajes.headerColor = "steelblue";
			this.mensajes.messageDisplay = "";
			this.mensajes.restartButton = "New Colors!";
			for (var i = 0; i <this.squares.length; i++) {
				this.squares[i].backgroundColor = this.colors[i];
			}
		}		
	},
    computed: {
    }
})
