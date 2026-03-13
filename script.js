/* SMOOTH SCROLL */
document.querySelectorAll('nav a').forEach(link => {
	link.addEventListener('click', e => {
		if (link.getAttribute('href').startsWith('#')) {
			e.preventDefault()
			document
				.querySelector(link.getAttribute('href'))
				.scrollIntoView({ behavior: 'smooth' })
		}
	})
})

/* SCROLL ANIMATION (Intersection Observer) */
const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('active')
		}
	})
})

document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

/* DARK MODE */
const btn = document.getElementById('themeToggle')

if (localStorage.getItem('theme') === 'dark') {
	document.body.classList.add('dark')
	btn.innerHTML = '<i class="fas fa-sun"></i>'
}

btn.onclick = () => {
	document.body.classList.toggle('dark')

	if (document.body.classList.contains('dark')) {
		localStorage.setItem('theme', 'dark')
		btn.innerHTML = '<i class="fas fa-sun"></i>'
	} else {
		localStorage.setItem('theme', 'light')
		btn.innerHTML = '<i class="fas fa-moon"></i>'
	}
}
