var SvgComponent = React.createClass({displayName: "SvgComponent",
	render: function(){
		return (React.createElement("svg", React.__spread({},  this.props), this.props.children));
	}
                
});

var Circle = React.createClass({displayName: "Circle",
    render: function() {
        return (React.createElement("circle", React.__spread({},  this.props)));
    }
});

var DesenharSvg = React.createClass({displayName: "DesenharSvg",
	render: function() {
		return (
	    React.createElement(SvgComponent, {height: "100", width: "230"}, 
	        React.createElement(Circle, {
	            cx: "50", cy: "50", r: "25", 
	            fill: "mediumorchid"}), 
	        React.createElement(Circle, {
	            cx: "125", cy: "50", r: "25", 
	            fill: "#ff0099"}), 
	        React.createElement(Circle, {
	            cx: "200", cy: "50", r: "25", 
	            fill: "none", 
	            stroke: "crimson"})
	    )
		)
	}
});

ReactDOM.render(
	React.createElement(DesenharSvg, null),
    document.getElementById('content')
);