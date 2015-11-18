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
					React.createElement("form", {onSubmit: this.handleSubmit}, 
						React.createElement("label", null, 
							React.createElement("input", {type: "search", value: this.state.query, onChange: this.handleChange, placeholder: "Busque aqui", required: true}), 
							React.createElement("input", {type: "button", onClick: this.sendData, value: "buscar"})
						)
					), 
					React.createElement("p", null, "livro/capitulo/versiculo"), 
					React.createElement("p", null, "busca por: ", this.state.searchString)
				), 
				React.createElement(MostrarPassagem, {urlBase: urlBase, urlSufix: this.state.searchString})
			)
		);
	}
});

ReactDOM.render(
	React.createElement(Busca, null),
	document.getElementById("content")
);