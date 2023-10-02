const formInput = document.querySelector("form");
const pizzaSize = document.querySelectorAll("[name='radioo']");
const checkBoxes = document.querySelectorAll(".item");
const delivery = document.querySelector("#delivery");
const text = document.querySelector(".price-text");

class pizzaOrder {
  constructor() {
    this.checkboxValues = [];
    this.radioValue = null;
    this.selectValue = null;
  }

  addCheckboxvalue(value) {
    this.checkboxValues.push(value);
  }

  setRadioValue(value) {
    this.radioValue = value;
  }

  setSelectValue(value) {
    this.selectValue = value;
  }

  /*class method*/

  calculateTotal() {
    let total = 0;

    for (let i = 4; i < this.checkboxValues.length; i++) {
      const checkboxvalue = this.checkboxValues[i];
      total += checkboxvalue;
    }

    if (this.radioValue != null) {
      total += this.radioValue;
    }

    if (this.selectValue != null) {
      total += this.selectValue;
    }
    return total;
  }
}

function pizzaPriceTotal() {
  const calculator = new pizzaOrder();

  checkBoxes.forEach((checkbox) => {
    if (checkbox.checked) {
      calculator.addCheckboxvalue(parseInt(checkbox.value));
    }
  });
  pizzaSize.forEach((size) => {
    if (size.checked) {
      calculator.setRadioValue(parseInt(size.value));
    }
  });
  calculator.setSelectValue(parseInt(delivery.value));

  const total = calculator.calculateTotal();

  text.textContent = total + "€";
}

formInput.addEventListener("change", pizzaPriceTotal);
