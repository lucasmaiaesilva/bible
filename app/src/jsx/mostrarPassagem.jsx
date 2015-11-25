var MostrarPassagem = React.createClass({
	getInitialState: function() {
		return {
			data: [],
			url: this.props.urlSufix
		};
	},
	componentWillReceiveProps: function(nextProps) {
		if(this.state.url !== nextProps.urlSufix){
			this.loadTextsFromServer(nextProps.urlSufix);
			this.setState({url: nextProps.urlSufix});
		}
	},
	loadTextsFromServer: function(url) {
		$.ajax({
			url: this.props.urlBase+url,
			dataType: 'json',
			cache: false,
			success: function(data) {
				this.setState({data: data.text});
			}.bind(this),
			error: function(xhr, status, err) {
				console.error(this.props.urlBase, status, err.toString());
			}.bind(this)
		});
	},
	componentDidMount: function() {
		this.loadTextsFromServer(this.state.url);
	},
	render: function() {
		return (<p style={{ fontSize: 27 }}>{this.state.data}</p>);
	}
});