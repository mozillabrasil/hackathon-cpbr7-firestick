pengine =
{
	
  	listen : function(path,callback,self)
	{
		$.ajax({url:path,context: document.body,cache: false})
		.done(function(data){callback(data); self.listen(path,callback,self);})
		.error(function(){ self.listen(path,callback,self);});
		return true;
	},

	send : function(path,stuff)
	{
		$.ajax({url:path,context: document.body, data: stuff,cache: false})
		.done(function(){return true;})
		.error(function(){return false;});
	}
	
};