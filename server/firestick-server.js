$(function()
{
	pengine.listen("server.json", firestick, pengine);
});

function firestick(data)
{
	
	key_map = [0,"U","D","L","R","A","B"];
	
	if(data[0]!=0)
	{
		press(key_map[parseInt(data[0])], data[1]);
		pengine.send("server.php", {'send':0, 'id' : data[1]})
		
	}
}