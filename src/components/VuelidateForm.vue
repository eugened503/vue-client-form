<template>
  <div>
    <h2>Форма создания клиента</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label>Фамилия*</label>
        <input type="text" v-model="surname" class="form-control" />
        <span
          v-if="!$v.surname.required && $v.surname.$dirty"
          class="text-danger"
          >Заполните обязательное поле</span
        >
        <span
          v-if="!$v.surname.nameValidation && $v.surname.$dirty"
          class="text-danger"
          >Поле должно содержать только буквы</span
        >
      </div>
      <div class="form-group">
        <label>Имя*</label>
        <input type="text" v-model="name" class="form-control" />
        <span v-if="!$v.name.required && $v.name.$dirty" class="text-danger"
          >Заполните обязательное поле</span
        >
        <span
          v-if="!$v.name.nameValidation && $v.name.$dirty"
          class="text-danger"
          >Поле должно содержать только буквы</span
        >
      </div>
      <div class="form-group">
        <label>Отчество</label>
        <input type="text" v-model="middleName" class="form-control" />
        <span
          v-if="!$v.middleName.nameValidation && $v.middleName.$dirty"
          class="text-danger"
          >Поле должно содержать только буквы</span
        >
      </div>

      <div class="form-group">
        <label>Дата рождения*</label>
        <input type="date" v-model="startDate" class="form-control" />

        <span
          v-if="!$v.startDate.required && $v.startDate.$dirty"
          class="text-danger"
          >Заполните обязательное поле</span
        >
        <span
          v-if="!$v.startDate.dateValidation && $v.startDate.$dirty"
          class="text-danger"
          >Поле содержит неверное значение</span
        >
      </div>

      <div class="form-group">
        <label>Номер телефона*</label>
        <input
          type="text"
          class="form-control"
          v-model="phone"
          placeholder="+7"
        />

        <span v-if="!$v.phone.required && $v.phone.$dirty" class="text-danger"
          >Заполните обязательное поле</span
        >
        <span
          v-if="!$v.phone.phoneValidation && $v.phone.$dirty"
          class="text-danger"
          >Поле содержит неверное значение</span
        >
      </div>

      <div class="form-group">
        <label for>Пол</label>
        <select v-model="gender" class="form-control">
          <option>Мужской</option>
          <option>Женский</option>
          <option>Другой</option>
        </select>
      </div>

      <div class="form-group">
        <label for>Группа клиентов*</label>
        <select v-model="customers" class="form-control">
          <option>VIP</option>
          <option>Проблемные</option>
          <option>ОМС</option>
        </select>
        <span
          v-if="!$v.customers.required && $v.customers.$dirty"
          class="text-danger"
          >Заполните обязательное поле</span
        >
      </div>

      <div class="form-group">
        <label for>Лечащий врач</label>
        <select v-model="doctor" class="form-control">
          <option>Иванов</option>
          <option>Захаров</option>
          <option>Чернышева</option>
        </select>
      </div>

      <div class="form-check">
        <input type="checkbox" v-model="acceptTerms" class="form-check-input" />
        <label for="" class="form-check-label">Не отправлять СМС</label>
      </div>

      <div class="form-group">
        <label>Индекс</label>
        <input type="number" v-model="index" class="form-control" />
        <span
          v-if="!$v.index.indexValidation && $v.index.$dirty"
          class="text-danger"
          >Поле содержит неверное значение</span
        >
      </div>

      <div class="form-group">
        <label>Выберите страну</label>
        <select
          v-model="country"
          class="form-control"
          name="country"
          id="country"
          ><option>Россия</option
          ><option>Абхазия</option
          ><option>Австралия</option
          ><option>Австрия</option
          ><option>Азербайджан</option
          ><option>Албания</option
          ><option>Алжир</option
          ><option>Ангола</option
          ><option>Ангуилья</option
          ><option>Андорра</option
          ><option>Антигуа и Барбуда</option
          ><option>Антильские острова</option
          ><option>Аргентина</option
          ><option>Армения</option
          ><option>Афганистан</option
          ><option>Багамские острова</option
          ><option>Бангладеш</option
          ><option>Барбадос</option
          ><option>Бахрейн</option
          ><option>Беларусь</option
          ><option>Белиз</option
          ><option>Бельгия</option
          ><option>Бенин</option
          ><option>Бермуды</option
          ><option>Болгария</option
          ><option>Боливия</option
          ><option>Босния/Герцеговина</option
          ><option>Ботсвана</option
          ><option>Бразилия</option
          ><option>Британские Виргинские о-ва</option
          ><option>Бруней</option
          ><option>Буркина Фасо</option
          ><option>Бурунди</option
          ><option>Бутан</option
          ><option>Вануату</option
          ><option>Ватикан</option
          ><option>Великобритания</option
          ><option>Венгрия</option
          ><option>Венесуэла</option
          ><option>Вьетнам</option
          ><option>Габон</option
          ><option>Гаити</option
          ><option>Гайана</option
          ><option>Гамбия</option
          ><option>Гана</option
          ><option>Гваделупа</option
          ><option>Гватемала</option
          ><option>Гвинея</option
          ><option>Гвинея-Бисау</option
          ><option>Германия</option
          ><option>Гернси остров</option
          ><option>Гибралтар</option
          ><option>Гондурас</option
          ><option>Гонконг</option
          ><option>Государство Палестина</option
          ><option>Гренада</option
          ><option>Гренландия</option
          ><option>Греция</option
          ><option>Грузия</option
          ><option>ДР Конго</option
          ><option>Дания</option
          ><option>Джерси остров</option
          ><option>Джибути</option
          ><option>Доминиканская Республика</option
          ><option>Египет</option
          ><option>Замбия</option
          ><option>Западная Сахара</option
          ><option>Зимбабве</option
          ><option>Израиль</option
          ><option>Индия</option
          ><option>Индонезия</option
          ><option>Иордания</option
          ><option>Ирак</option
          ><option>Иран</option
          ><option>Ирландия</option
          ><option>Исландия</option
          ><option>Испания</option
          ><option>Италия</option
          ><option>Йемен</option
          ><option>Кабо-Верде</option
          ><option>Казахстан</option
          ><option>Камбоджа</option
          ><option>Камерун</option
          ><option>Канада</option
          ><option>Катар</option
          ><option>Кения</option
          ><option>Кипр</option
          ><option>Китай</option
          ><option>Колумбия</option
          ><option>Коста-Рика</option
          ><option>Кот-д'Ивуар</option
          ><option>Куба</option
          ><option>Кувейт</option
          ><option>Кука острова</option
          ><option>Кыргызстан</option
          ><option>Лаос</option
          ><option>Латвия</option
          ><option>Лесото</option
          ><option>Либерия</option
          ><option>Ливан</option
          ><option>Ливия</option
          ><option>Литва</option
          ><option>Лихтенштейн</option
          ><option>Люксембург</option
          ><option>Маврикий</option
          ><option>Мавритания</option
          ><option>Мадагаскар</option
          ><option>Македония</option
          ><option>Малайзия</option
          ><option>Мали</option
          ><option>Мальдивские острова</option
          ><option>Мальта</option
          ><option>Марокко</option
          ><option>Мексика</option
          ><option>Мозамбик</option
          ><option>Молдова</option
          ><option>Монако</option
          ><option>Монголия</option
          ><option>Мьянма (Бирма)</option
          ><option>Мэн о-в</option
          ><option>Намибия</option
          ><option>Непал</option
          ><option>Нигер</option
          ><option>Нигерия</option
          ><option>Нидерланды (Голландия)</option
          ><option>Никарагуа</option
          ><option>Новая Зеландия</option
          ><option>Новая Каледония</option
          ><option>Норвегия</option
          ><option>О.А.Э.</option
          ><option>Оман</option
          ><option>Пакистан</option
          ><option>Палау</option
          ><option>Панама</option
          ><option>Папуа Новая Гвинея</option
          ><option>Парагвай</option
          ><option>Перу</option
          ><option>Питкэрн остров</option
          ><option>Польша</option
          ><option>Португалия</option
          ><option>Пуэрто Рико</option
          ><option>Республика Конго</option
          ><option>Реюньон</option
          ><option>Руанда</option
          ><option>Румыния</option
          ><option>США</option
          ><option>Сальвадор</option
          ><option>Самоа</option
          ><option>Сан-Марино</option
          ><option>Сан-Томе и Принсипи</option
          ><option>Саудовская Аравия</option
          ><option>Свазиленд</option
          ><option>Святая Люсия</option
          ><option>Северная Корея</option
          ><option>Сейшеллы</option
          ><option>Сен-Пьер и Микелон</option
          ><option>Сенегал</option
          ><option>Сент Китс и Невис</option
          ><option>Сент-Винсент и Гренадины</option
          ><option>Сербия</option
          ><option>Сингапур</option
          ><option>Сирия</option
          ><option>Словакия</option
          ><option>Словения</option
          ><option>Соломоновы острова</option
          ><option>Сомали</option
          ><option>Судан</option
          ><option>Суринам</option
          ><option>Сьерра-Леоне</option
          ><option>Таджикистан</option
          ><option>Таиланд</option
          ><option>Тайвань</option
          ><option>Танзания</option
          ><option>Того</option
          ><option>Токелау острова</option
          ><option>Тонга</option
          ><option>Тринидад и Тобаго</option
          ><option>Тувалу</option
          ><option>Тунис</option
          ><option>Туркменистан</option
          ><option>Туркс и Кейкос</option
          ><option>Турция</option
          ><option>Уганда</option
          ><option>Узбекистан</option
          ><option>Украина</option
          ><option>Уоллис и Футуна острова</option
          ><option>Уругвай</option
          ><option>Фарерские острова</option
          ><option>Фиджи</option
          ><option>Филиппины</option
          ><option>Финляндия</option
          ><option>Франция</option
          ><option>Французская Полинезия</option
          ><option>Хорватия</option
          ><option>Чад</option
          ><option>Черногория</option
          ><option>Чехия</option
          ><option>Чили</option
          ><option>Швейцария</option
          ><option>Швеция</option
          ><option>Шри-Ланка</option
          ><option>Эквадор</option
          ><option>Экваториальная Гвинея</option
          ><option>Эритрея</option
          ><option>Эстония</option
          ><option>Эфиопия</option
          ><option>ЮАР</option
          ><option>Южная Корея</option
          ><option>Южная Осетия</option
          ><option>Ямайка</option
          ><option>Япония</option></select
        >
      </div>

      <div class="form-group">
        <label>Область</label>
        <input type="text" v-model="region" class="form-control" />
        <span
          v-if="!$v.region.nameValidation && $v.region.$dirty"
          class="text-danger"
          >Поле должно содержать только буквы</span
        >
      </div>

      <div class="form-group">
        <label>Город*</label>
        <input type="text" v-model="city" class="form-control" />
        <span v-if="!$v.city.required && $v.city.$dirty" class="text-danger"
          >Заполните обязательное поле</span
        >
        <span
          v-if="!$v.city.nameValidation && $v.city.$dirty"
          class="text-danger"
          >Поле должно содержать только буквы</span
        >
      </div>

      <div class="form-group">
        <label>Адрес проживания</label>
        <input type="text" v-model="address" class="form-control" />
        <span
          v-if="!$v.address.addressValidation && $v.address.$dirty"
          class="text-danger"
          >Поле не соответствует формату</span
        >
      </div>

      <div class="form-group">
        <label for>Тип документа*</label>
        <select v-model="document" class="form-control">
          <option value="male">Паспорт</option>
          <option value="female">Свидетельство о рождении</option>
          <option value="other">Вод. удостоверение</option>
        </select>
        <span
          v-if="!$v.document.required && $v.document.$dirty"
          class="text-danger"
          >Заполните обязательное поле</span
        >
      </div>

      <div class="form-group">
        <label>Серия</label>
        <input type="text" v-model="series" class="form-control" />
        <span
          v-if="!$v.series.seriesValidation && $v.series.$dirty"
          class="text-danger"
          >Поле не соответствует формату</span
        >
      </div>

      <div class="form-group">
        <label>Номер</label>
        <input type="text" v-model="number" class="form-control" />
        <span
          v-if="!$v.number.numberValidation && $v.number.$dirty"
          class="text-danger"
          >Поле должно содержать только цифры</span
        >
      </div>

      <div class="form-group">
        <label>Кем выдан</label>
        <input type="text" v-model="issued" class="form-control" />
        <span
          v-if="!$v.issued.issuedValidation && $v.issued.$dirty"
          class="text-danger"
          >Поле не соответствует формату</span
        >
      </div>

      <div class="form-group">
        <label>Дата выдачи*</label>
        <input type="date" v-model="dateIssue" class="form-control" />

        <span
          v-if="!$v.dateIssue.required && $v.dateIssue.$dirty"
          class="text-danger"
          >Заполните обязательное поле</span
        >
        <span
          v-if="!$v.dateIssue.dateValidation && $v.dateIssue.$dirty"
          class="text-danger"
          >Поле содержит неверное значение</span
        >
      </div>
      <h6>*Поле обязательное для заполнения</h6>
      <br />
      <input type="submit" class="btn btn-primary mt-2" />
    </form>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import { nameValidation } from "../constants/constants";
import { phoneValidation } from "../constants/constants";
import { indexValidation } from "../constants/constants";
import { numberValidation } from "../constants/constants";
import { dateValidation } from "../constants/constants";
import { addressValidation } from "../constants/constants";
import { seriesValidation } from "../constants/constants";
import { issuedValidation } from "../constants/constants";

export default {
  data: () => ({
    name: "",
    surname: "",
    middleName: "",
    startDate: "",
    phone: "",
    gender: "",
    customers: "",
    doctor: "",
    acceptTerms: "",
    index: "",
    country: "",
    region: "",
    city: "",
    address: "",
    document: "",
    series: "",
    number: "",
    issued: "",
    dateIssue: "",
  }),
  validations: {
    name: {
      required,
      nameValidation,
    },
    surname: {
      required,
      nameValidation,
    },
    middleName: {
      nameValidation,
    },

    startDate: {
      required,
      dateValidation,
    },
    phone: {
      required,
      phoneValidation,
    },
    customers: {
      required,
    },
    index: {
      indexValidation,
    },
    region: {
      nameValidation,
    },
    city: {
      required,
      nameValidation,
    },
    address: {
      addressValidation,
    },

    document: {
      required,
    },
    series: {
      seriesValidation,
    },

    number: {
      numberValidation,
    },

    issued: {
      issuedValidation,
    },
    dateIssue: {
      required,
      dateValidation,
    },
  },
  methods: {
    submitForm() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        alert("Форма клиента создана");
      }
    },
  },
};
</script>

