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
					<div className="content center">
						<div className="logo">
							<img src="img/logo.svg" alt="" />
							<h1>Bible Search</h1>
						</div>
						<form onSubmit={this.handleSubmit}>
							<input type="search" value={this.state.query} onChange={this.handleChange} placeholder="..." required />
							<input type="button" onClick={this.sendData} value="ok" />
						</form>
						<span className="share">
							<a href="#"><img src="img/share/twitter.gif" alt="" /></a>
							<a href="#"><img src="img/share/facebook.png" alt="" /></a>
						</span>
					</div>
				</header>
				<MostrarPassagem urlBase={urlBase} urlSufix={this.state.searchString.toLowerCase()} queryString={this.state.searchString} />
			</div>
		);
	}
});

ReactDOM.render(
	<Busca />,
	document.getElementById("content")
);