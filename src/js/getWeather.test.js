import { createList } from './getWeather';

describe('createList', () => {
    let el, inputEl, buttonEl, emptyMapEl, weatherInfoEl, weatherTempEl, weatherDescrEl, historyList;

    beforeEach(() => {
        el = document.createElement('section');
        el.id='weather';
        createList(el);
        inputEl = el.querySelector('.map__search');
        buttonEl = el.querySelector('.btn');
        emptyMapEl = el.querySelector('.map__empty');
        weatherInfoEl = el.querySelector('.map__info');
        weatherTempEl = el.querySelector('.map__info-temp');
        weatherDescrEl = el.querySelector('.map__info-descr');
      
        historyList = el.querySelector('.history__list');
    });

    it('has button', () => {
        expect(buttonEl).toBeTruthy();
        expect(buttonEl.textContent).toBe('Show');
    });

    it("has input", () => {
        expect(inputEl).toBeTruthy();
        expect(inputEl.getAttribute('type')).toBe('text');
    });

    it('has empty map', () => {
        expect(emptyMapEl).toBeTruthy();
    });

    it('has weather info', () => {
        expect(weatherInfoEl).toBeTruthy();
        expect(weatherTempEl).toBeTruthy();
        expect(weatherDescrEl).toBeTruthy();
    });

    it('has history list', () => {
        expect(historyList).toBeTruthy();
        expect(historyList.querySelectorAll('li a').length).toBe(3);
    });

    it('has history list item', () => {
        expect(historyList.querySelectorAll('li a')[0].textContent.trim()).toEqual('London');
        expect(historyList.querySelectorAll('li a')[1].textContent.trim()).toEqual('Minsk');
        expect(historyList.querySelectorAll('li a')[2].textContent.trim()).toEqual('Moscow');
    });
});