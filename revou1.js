document.querySelector('.form-belajar').addEventListener('submit', function(event) {
	event.preventDefault();
	const formData = new FormData(event.target);
	const data = {
		nama: formData.get('nama'),
		tanggalLahir: formData.get('tanggal-lahir'),
		jenisKelamin: formData.get('jenis-kelamin'),
		pesan: formData.get('pesan'),
	};
	console.log(data);
});

document.querySelectorAll('.profiles .profile .read-more').forEach(function(button) {
	button.addEventListener('click', function(event) {
		const profile = event.target.closest('.profile');
		const name = profile.querySelector('h2').innerText;
		alert(`Read more about ${name}`);
	});
});
const form = document.querySelector('#form form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
});