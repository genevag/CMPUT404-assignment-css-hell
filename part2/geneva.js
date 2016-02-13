window.onload = function() {
	var navItems = document.getElementsByClassName('nav-item');

	for (var i = 0; i < navItems.length; i++) {
		var item = navItems[i];

		item.onclick = function() {
			this.style.color = 'black';
			var panelID = this.id + 'Panel';
			var panel = document.getElementById(panelID);
			panel.classList.add('active');

			var id = this.id;
			var navItems = document.getElementsByClassName('nav-item');
			for (var i = 0; i < navItems.length; i++) {
				var navItem = navItems[i];
				if (navItem.id !== id) {
					navItem.style.color = '#FFFFFF';

					var panelID = navItem.id + 'Panel';
					var panel = document.getElementById(panelID);
					panel.classList.remove('active')
				}
			}
		}
	}
};