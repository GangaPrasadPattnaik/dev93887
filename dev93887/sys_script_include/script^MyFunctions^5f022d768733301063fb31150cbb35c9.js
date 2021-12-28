var My_Functions = Class.create();
My_Functions.prototype = Object.extendsObject(AbstractAjaxProcessor, {
	log_info: function(x0){
		var results = {};
		var x = this.getParameter('sysparm_x') || x0;
		gs.info(x);
		results.message = 'success';
		//results.input = sysparm_x
		results.constantReturn ='CONSTANT';
		return JSON.stringify(results);// this is the return statemnt/ testing if it appears in a diffrent browser
	},
	
    type: 'My_Functions'
});