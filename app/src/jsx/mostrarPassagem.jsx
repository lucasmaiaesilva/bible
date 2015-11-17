var MostrarPassagem = React.createClass({
	getInitialState: function() {
		return {data: []};
	},
	 loadCommentsFromServer: function() {
		$.ajax({
			url: this.props.urlBase+this.props.urlSufix,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data.text});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	componentDidMount: function() {
		this.loadCommentsFromServer();
	},
	render: function() {
		return (
			<section id="passagem" className="text">
				<p> {this.state.data} </p>
			</section>
		);
	}
});

ReactDOM.render(
	<MostrarPassagem urlBase={urlBase} urlSufix={urlSufix} />,
	document.getElementById("passagem")
);