var ShowMessage = React.createClass({displayName: "ShowMessage",
	render: function(){
		var msg;
		this.props.mensagem === undefined ? msg = 'mundo!' : msg = this.props.mensagem;
		return (React.createElement("h1", null, "Olá ", msg));
	}
});

var FillInput = React.createClass({displayName: "FillInput",
	getInitialState: function(){
		return {value: undefined};
	},
	handleChange: function(event){
		this.setState({value: event.target.value});
	},
	render: function(){
		var value = this.state.value;
		return (
			React.createElement("div", null, 
				React.createElement(ShowMessage, {mensagem: value}), 
				React.createElement("input", {
					type: "text", 
					value: value, 
					onChange: this.handleChange}
				)
			)
		);
	}

});

ReactDOM.render(
	React.createElement("div", null, 
		React.createElement(FillInput, null)
	),
	document.getElementById('content')
);
