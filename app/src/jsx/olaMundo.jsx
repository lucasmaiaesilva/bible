var HelloMessage = React.createClass ({
	render: function(){
		return (
			<h1>Olá em breve um app muito legal sobre a Bíbia feito em React!!</h1>
		);
	}
});

ReactDOM.render(<HelloMessage />, document.getElementById("content"));