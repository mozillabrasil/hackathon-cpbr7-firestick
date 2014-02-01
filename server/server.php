<?
	if(isset($_GET['send']))
	{
		file_put_contents("server.json", json_encode(array($_GET['send'], $_GET['id'])));
	}
?>