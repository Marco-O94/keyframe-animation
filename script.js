setTimeout(() => {
return animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'data.json',
    rendererSettings: {
        //preserveAspectRatio: 'xMidYMid meet', // Supports the same options as the svg element's preserveAspectRatio property
        scaleMode: 'noScale',
    }
})}, 1000);
