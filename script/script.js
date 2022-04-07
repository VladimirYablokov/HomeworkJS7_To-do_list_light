const formElem = document.querySelector('form');
const titleElem = document.querySelector('#title');
const markElem = document.querySelector('#markup');
const btn = document.querySelector('button');
const cardsElem = document.querySelector('.cards');


const readCards = ()=>JSON.parse(localStorage.getItem('cards')) || [];
const writeCards = data =>localStorage.setItem('cards', JSON.stringify(data))
const cards = readCards()

const resuldDoneElem = document.querySelector('#done');
let done = localStorage.getItem('valueOfDone') || 0;
resuldDoneElem.innerText = done;

const resuldCancelElem = document.querySelector('#canceled');
let canceled = localStorage.getItem('valueOfCancel') || 0;
resuldCancelElem.innerText = canceled;

formElem.addEventListener('submit', (event) => {
	event.preventDefault();
	if (titleElem.value && markElem.value != '') {
		const card = document.createElement('div');
		const cardTitleElem = document.createElement('div');
		const cardTitleH2Elem = document.createElement('h2');
		const cardMarkupH2Elem = document.createElement('h2');
		const acceptBtnElem = document.createElement('div');
		const cancelBtnElem = document.createElement('div');

		cardsElem.append(card);
		card.append(cardTitleElem, acceptBtnElem, cancelBtnElem);
		cardTitleElem.append(cardTitleH2Elem, cardMarkupH2Elem);

		card.classList.add('card');
		cardTitleElem.classList.add('cardTitle');
		acceptBtnElem.classList.add('acceptBtn');
		cancelBtnElem.classList.add('cancelBtn');

		cardTitleH2Elem.innerText = titleElem.value;
		cardMarkupH2Elem.innerText = markElem.value;

		let title = cardTitleH2Elem.innerText;
		let markup = cardMarkupH2Elem.innerText;
		cards.push({title, markup});
		writeCards(cards)

		acceptBtnElem.innerText = '✔️';
		cancelBtnElem.innerText = '❌';
		titleElem.value = '';
		markElem.value = '';

		acceptBtnElem.addEventListener('click', (event) => {
			resuldDoneElem.innerText = ++done;
			localStorage.setItem('valueOfDone', done);
			card.remove();
			alert('Вы успешно завершили дело!');
		});
		cancelBtnElem.addEventListener('click', (event) => {
			resuldCancelElem.innerText = ++canceled;
			localStorage.setItem('valueOfCancel', canceled);
			card.remove();
			alert('Попробуем в следующий раз..');
		});
	} else {
		alert('Заполните все поля ввода');
	};
});