const selector = document.querySelector("input[type='tel']");
// const phoneElement = document.querySelector(".form__input-phone");

const im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

const validateLogin = name =>
  validate(name)
    .notLessThan(2)
    .notLongerThan(10)
    .hasOnly(['a-z','A-Z']);


new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 10
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
    mail: {
      required: true,
      email: true
    },
  },

  messages: {
    name: {
      required: 'Вы не ввели имя',
      minLength: 'Слишком короткое',
      maxLength: 'Слишко длинное',
      format: 'Недопустимый'
    },

    tel: 'Вы не ввели телефон',

    mail: {
      required: 'Вы не ввели e-mail'
    }
  }
});

