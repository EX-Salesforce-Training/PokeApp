function open(tool) {
	document.querySelector('#' + tool + '-menu').classList.replace('is-hidden', 'is-visible');
}

function closeAll() {
    Array.from(document.querySelector('#menus').children).forEach(node => node.classList.replace('is-visible', 'is-hidden'));
}

function close(tool) {
    document.querySelector('#' + tool + '-menu').classList.replace('is-visible', 'is-hidden');
}