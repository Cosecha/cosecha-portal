ButtonSideBarRight = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData(){
		let data = {};

		return data;
	},
	getInitialState(){
		return {
			toggleState: false
		};
	},
	toggleVisibility(){
		if(this.state.toggleState){
			Session.set('rsbClass', 'animated slideOutRight col-xs-5 col-3 col-md-3');
			this.data.toggle = !this.data.toggle;
			this.state.toggleState = !this.state.toggleState;
		}else{
			Session.set('rsbClass', 'animated slideInRight  col-xs-5 col-3 col-md-3');
			this.state.toggleState = !this.state.toggleState;
		}
	},
	handleClick(e){
		e.preventDefault();
		this.toggleVisibility();
	},
	render(){
		return (
			<div>
				<button onClick={this.handleClick} id="sidebar-right" className="btn btn-primary">
					<i className="fa fa-bars"></i>
				</button>
			</div>
		)
	}
});
