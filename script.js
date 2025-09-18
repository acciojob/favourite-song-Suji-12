//your code here
<script type="text/javascript" src="./script.js">
	const div = document.createElement("div");
    const text = document.createTextNode("My current favourite song is ");
    //Create the anchor element
    const link = document.createElement("a");
    link.href = "http://youtube.com/watch?v=OXHTlMPbX7o&list=RDOXHTlMPbX7o&start_radio=1"; //YouTube link
    link.textContent = "Powerhouse"; //song name
    div.appendChild(text);
    div.appendChild(link);
    document.body.appendChild(div);
</script>