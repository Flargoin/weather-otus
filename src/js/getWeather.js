const app = document.querySelector(".weather");

export const createList = (el) => {
  el.innerHTML = `
      <div class="inner-container weather__container">
        <div class="map">
          <search>
            <input
              class="map__search"
              type="text"
              placeholder="Search for a city..."
            />
            <button class="btn">Show</button>
          </search>

          <div class="map__block">
            <div class="map__empty"></div>

            <div class="map__info">
              <span class="map__info-temp">16°C</span>
              <span class="map__info-descr">Overcast</span>
            </div>
          </div>
        </div>

        <div class="history">
          <h2 class="history__title">History</h2>
          <ul class="history__list">
            <li>
              <a href="">London</a>
            </li>

            <li>
              <a href="">Minsk</a>
            </li>

            <li>
              <a href="">Moscow</a>
            </li>
          </ul>
        </div>
      </div>
  `;
};

document.addEventListener('DOMContentLoaded', () => {
  createList(app);
});