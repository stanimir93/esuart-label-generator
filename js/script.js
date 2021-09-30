document.addEventListener('DOMContentLoaded', () => {
  // Populating dropdown menu
  dropDownCandles();
  dropDownScents();
  // Adding event listeners
  document.querySelector('nav').addEventListener('input', initPopulation);
  document.querySelector('.menu').addEventListener('input', decorateSelectedDropDown);
});

// Populating labels with content
function initPopulation(ev) {
  // Populating label - weight
  if (ev.target.name === 'candles') {
    let candle = ev.target.value;
    candle = candle.split(': ');
    document.querySelector(`.${ev.target.parentElement.className} .weight`).textContent = candle[1];
  }
  // Populating label - text and images
  if (ev.target.name === 'scents') {
    let scentName = ev.target.parentElement.className;
    contentPopulator(ev.target.value, scentName);
  }
}
// Populate label contents - text and images
let contentPopulator = function (spice, scentName) {
  // Finding all elements
  let scentTitle = document.querySelector(`.${scentName} .scent-title`);
  let allergents = document.querySelector(`.${scentName} .allergents`);
  let warningParagraph = document.querySelector(`.${scentName} .warning-paragraph`);
  let firstAidParagraph = document.querySelector(`.${scentName} .first-aid-paragraph`);
  let imgContainer = document.querySelector(`.${scentName} .images-container`);
  let addressParagraph = document.querySelector(`.${scentName} .address`);
  let warningTitle = document.querySelector(`.${scentName} .warning-title`);
  let firstAidTitle = document.querySelector(`.${scentName} .first-aid-title`);

  // If spice has been selected - populate all
  if (spice) {
    // Populating text on labels
    scentTitle.textContent = scents[spice]['spiceName'];
    allergents.textContent = scents[spice]['allergents'];
    warningParagraph.textContent = scents[spice]['warning'];
    firstAidParagraph.textContent = scents[spice]['firstAid'];
    warningTitle.textContent = 'Warning';
    firstAidTitle.textContent = 'First Aid Measures';
    addressParagraph.textContent = address;
    addressParagraph.style.display = 'block';

    // Populating pictograms on labels
    let df = new DocumentFragment();
    imgContainer.innerHTML = '';
    scents[spice]['pictograms'].forEach((imagePath) => {
      if (imagePath === 'address.png') {
        addressParagraph.style.display = 'none';
      }
      let img = document.createElement('img');
      img.setAttribute('src', `../pictograms/${imagePath}`);
      df.appendChild(img);
    });
    imgContainer.appendChild(df);
  }

  // If no spice has been selected - clear all
  else {
    scentTitle.textContent = '';
    allergents.textContent = '';
    warningParagraph.textContent = '';
    firstAidParagraph.textContent = '';
    addressParagraph.textContent = '';
    warningTitle.textContent = '';
    firstAidTitle.textContent = '';
    imgContainer.innerHTML = '';
  }
};

// Populating candles in dropdown menu
function dropDownCandles() {
  let df = new DocumentFragment();
  document.querySelectorAll('select[name="candles"]').forEach((candleSelect) => {
    Object.keys(candles).forEach((key) => {
      let text = `${key}: ${candles[key]}`;
      let option = document.createElement('option');
      option.textContent = text;
      df.appendChild(option);
    });
    candleSelect.appendChild(df);
  });
}
// Populating scents in dropdown menu
function dropDownScents() {
  let df = new DocumentFragment();
  document.querySelectorAll('select[name="scents"]').forEach((candleSelect) => {
    Object.keys(scents).forEach((key) => {
      let text = `${key}`;
      let option = document.createElement('option');
      option.textContent = text;
      df.appendChild(option);
    });
    candleSelect.appendChild(df);
  });
}

// Highlighting dropdown menu on selection
function decorateSelectedDropDown(ev) {
  if (ev.target.value) {
    ev.target.classList.add('selected');
  } else {
    ev.target.classList.remove('selected');
  }
}
