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
	handleSubmit: function(e){
		e.preventDefault();
		this.sendData();
	},
	render: function(){
		var urlBase = 'https://mysterious-ridge-5762.herokuapp.com/';
		return (
			<div>
				<header>
					<form onSubmit={this.handleSubmit}>
						<input type="search" value={this.state.query} onChange={this.handleChange} />
						<input type="button" onClick={this.sendData} value="buscar" />
						<p>livro/capitulo/versiculo</p> 
						<p>ex: {this.state.searchString}</p>
					</form>
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