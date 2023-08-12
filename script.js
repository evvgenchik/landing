'use strict';

const GIFTS = {
  vidget: '30 виджетов',
  armocrm: 'Месяц аmoCRM',
};

const giftVidgetBlock = document.querySelector('.gift-vidget');
const giftArmoCrmBlock = document.querySelector('.gift-armocrm');

const redBall = document.querySelector('.red-ball__img');
const purpleBall = document.querySelector('.purple-ball__img');

if (window.innerWidth < 768) {
  giftVidgetBlock.textContent = GIFTS.vidget;
  giftArmoCrmBlock.textContent = GIFTS.armocrm;
}
