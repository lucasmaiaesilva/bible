var HelloMessage = React.createClass ({displayName: "HelloMessage",
	render: function(){
		return (
			React.createElement("h1", null, "Olá em breve um app muito legal sobre a Bíbia feito em React!!")
		);
	}
});

ReactDOM.render(React.createElement(HelloMessage, null), document.getElementById("content"));