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
						<label>
							<input type="search" value={this.state.query} onChange={this.handleChange} placeholder="Busque aqui" required />
							<input type="button" onClick={this.sendData} value="buscar" />
						</label>
					</form>
					<p>livro/capitulo/versiculo / ex: salmos/23/1-5</p> 
					<p>busca por: {this.state.searchString}</p>
				</header>
				<MostrarPassagem urlBase={urlBase} urlSufix={this.state.searchString.toLowerCase()} />
			</div>
		);
	}
});

ReactDOM.render(
	<Busca />,
	document.getElementById("content")
);