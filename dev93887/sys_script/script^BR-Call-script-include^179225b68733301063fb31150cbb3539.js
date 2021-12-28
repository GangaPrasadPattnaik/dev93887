(function executeRule(current, previous /*null when async*/) {

	// Add your code here
	
	var y = new My_Functions().log_info('THIS TESTING MESSAGE IS FROM BUSINESS RULE');
	gs.addInfoMessage('From Business rule'+y);

})(current, previous);