var Busca = React.createClass({
	render: function(){
		return (
			<header>
				<form action="" className="content">
					<input type="search" placeholder="Digite o texto que você está procurando" />
					<input type="submit" value="buscar" />
					<p>Ex:Joao 3:16</p>
				</form>
			</header>

		);
	}
});

// var url = document.URL;
var urlBase = 'https://mysterious-ridge-5762.herokuapp.com/';
var urlSufix = 'salmos/23/1-4';

ReactDOM.render(
	<div>
		<Busca />
		<MostrarPassagem urlBase={urlBase} urlSufix={urlSufix} />
	</div>,
	document.getElementById("content")
);