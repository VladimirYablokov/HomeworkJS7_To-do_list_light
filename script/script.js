const resuldDoneElem = document.querySelector('#done')
let done = localStorage.getItem('valueOfDone') || 0
resuldDoneElem.innerText = done

const resuldCanceledElem = document.querySelector('#canceled')
let canceled = localStorage.getItem('valueOfCanceled') || 0
resuldCanceledElem.innerText = canceled

const formElem = document.querySelector('form');
const titleElem = document.querySelector('#title');
const markElem = document.querySelector('#markup');
const btn = document.querySelector('button');
const cardsElem = document.querySelector('.cards');

formElem.addEventListener('submit', (event) => {
	event.preventDefault();
	if (titleElem.value && markElem.value != '') {
		const card = document.createElement('div');
		const cardTitleElem = document.createElement('div');
		const cardTitleH2Elem = document.createElement('h2');
		const cardMarikupH2Elem = document.createElement('h2');
		const acceptBtnElem = document.createElement('div');
		const cancelBtnElem = document.createElement('div');
		cardsElem.append(card);
		card.append(cardTitleElem, acceptBtnElem, cancelBtnElem);
		cardTitleElem.append(cardTitleH2Elem, cardMarikupH2Elem);
		card.classList.add('card');
		cardTitleElem.classList.add('cardTitle');
		acceptBtnElem.classList.add('acceptBtn');
		cancelBtnElem.classList.add('cancelBtn');
		cardTitleH2Elem.innerText = titleElem.value;
		cardMarikupH2Elem.innerText = markElem.value;
		acceptBtnElem.innerText = '✔️';
		cancelBtnElem.innerText = '❌';
		titleElem.value = '';
		markElem.value = '';
		acceptBtnElem.addEventListener('click', (event)=>{
			resuldDoneElem.innerText = ++done;
			localStorage.setItem('valueOfDone', done)
			card.remove();
			alert('Вы успешно завершили дело!');

		});
		cancelBtnElem.addEventListener('click', (event)=>{
			resuldCanceledElem.innerText = ++canceled;
			localStorage.setItem('valueOfCanceled', canceled)
			card.remove()
			alert('Попробуем в следуйщик раз..');
		});
	} else {
		alert('Заполните все поля ввода');
	};
});