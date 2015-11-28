var Busca = React.createClass({
	getInitialState: function(){
		return {
			query: 'salmos/23/1-5',
			searchString: 'salmos/23/1-5'
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
			<form onSubmit={this.handleSubmit}>
				<input type="search" value={this.state.query} onChange={this.handleChange} placeholder="..." required />
				<input type="button" onClick={this.sendData} value="ok" />
			</form>
		);
	}
});