/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Город — это злая сила… Сильные приезжают, становятся слабыми, город забирает силу… Вот и ты пропал!')
})