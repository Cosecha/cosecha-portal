Navbar = React.createClass({
	mixins: [ReactMeteorData],
	getMeteorData(){
		var data = {};
		data.navClass = 'collapse';
		return data;
	},

	render(){
		return (
			<div>
				<div id="navbar">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xs-4 col-sm-3 col-lg-2">
								<ButtonSideBarLeft />
							</div>
							<div className="col-xs-4 col-sm-6 col-lg-8">
								<p className="text-center">
									<button type="button" className="btn btn-default center-logo" data-toggle="collapse" data-target="#profile-menu">
										<img src="img/logo.png" className="img-responsive img-center" alt="Cosecha"/>

									</button>
								</p>

								<div className={this.data.navClass} id="profile-menu">
									<nav className=" navbar-collapse nav-justified" aria-expanded="false">
										<ul className="nav navbar-nav">
											<li><a href="/dashboard">Dashboard</a></li>
											<li><a href="/profile">Profile</a></li>
											<li><a href="/signout">Signout</a></li>

										</ul>
									</nav>
								</div>

							</div>
							<div className="col-xs-4 col-sm-3 col-lg-2">
								<ButtonSideBarRight />
							</div>
						</div>
					</div>

				</div>

			</div>
		)
	}
});
