var Busca = React.createClass({displayName: "Busca",
	getInitialState: function(){
		return {
			query: 'joao/3/16',
			searchString: 'joao/3/16'
		};
	},
	sendData: function(){
		this.replaceState({searchString: this.state.query});
	},
	handleChange: function(e) {
		this.setState( { query: e.target.value } );
	},
	handleSubmit: function(e){
		e.preventDefault();
		this.sendData();
	},
	render: function(){
		var urlBase = 'https://mysterious-ridge-5762.herokuapp.com/';
		return (
			React.createElement("div", null, 
				React.createElement("header", null, 
					React.createElement("div", {className: "content center"}, 
						React.createElement("div", {className: "logo"}, 
							React.createElement("img", {src: "img/logo.svg", alt: ""}), 
							React.createElement("h1", null, "Bible Search")
						), 
						React.createElement("form", {onSubmit: this.handleSubmit}, 
							React.createElement("input", {type: "search", value: this.state.query, onChange: this.handleChange, placeholder: "...", required: true}), 
							React.createElement("input", {type: "button", onClick: this.sendData, value: "ok"})
						), 
						React.createElement("span", {className: "share"}, 
							React.createElement("a", {href: "#"}, React.createElement("img", {src: "img/share/twitter.gif", alt: ""})), 
							React.createElement("a", {href: "#"}, React.createElement("img", {src: "img/share/facebook.png", alt: ""}))
						)
					)
				), 
				React.createElement(MostrarPassagem, {urlBase: urlBase, urlSufix: this.state.searchString.toLowerCase(), queryString: this.state.searchString})
			)
		);
	}
});

ReactDOM.render(
	React.createElement(Busca, null),
	document.getElementById("content")
);