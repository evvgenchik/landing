'use strict';

const GIFTS = {
  vidget: '30 виджетов',
  armocrm: 'Месяц аmoCRM',
};

const giftVidgetBlock = document.querySelector('.gift-vidget');
const giftArmoCrmBlock = document.querySelector('.gift-armocrm');

if (window.innerWidth < 768) {
  giftVidgetBlock.textContent = GIFTS.vidget;
  giftArmoCrmBlock.textContent = GIFTS.armocrm;
}
