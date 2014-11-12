Ext.define('App.view.home.TopBar', {
	extend : 'Ext.container.Container',
	alias : 'widget.topbar',
	layout : 'border',
	// style : 'background-image: url(resources/images/bg.png) !important;background-repeat:repeat-x;',
	initComponent : function() {
		this.items = [{}];
		this.callParent(arguments);
	}
});