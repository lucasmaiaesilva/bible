var Busca = React.createClass({
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
	render: function(){
		var urlBase = 'https://mysterious-ridge-5762.herokuapp.com/';
		return (
			<div>
				<header>
					
						<input type="search" value={this.state.query} onChange={this.handleChange} />
						<input type="button" onClick={this.sendData} value="buscar" />
						<p>buscando por {this.state.query}</p>
						<p>livro/capitulo/versiculo {this.state.searchString}</p>
					
				</header>
				<MostrarPassagem urlBase={urlBase} urlSufix={this.state.searchString} />
			</div>
		);
	}
});

ReactDOM.render(
	<Busca />,
	document.getElementById("content")
);