FlowRouter.route('/', {
	action: function() {
		BlazeLayout.render("layout", {templateAtual: "home"});
	}
})

FlowRouter.route('/contatos', {
	action: function() {
		BlazeLayout.render("layout", {templateAtual: "contatos"});
	}
})

