function loadComments() {
    fetch("/controllers/GetComments.php")
	.then(res => { console.log(res); })
	.catch();
}
