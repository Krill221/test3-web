import user from './user';
//top for generator
import door from './door';
import comment from './comment';
import room from './room';

const ruRU = {
  props: {
    main: {
      AppName: "New App",
      AppTel: "+7 (900) 000-00-00",

    },
    menu: {
      Main: "Главная",
      Users: "Users",
      Rooms: "Rooms",
      Comments: "Coms",
      Profile: "Профиль",
      SignIn: "Войти",
    },
    footer: {
      Copyrights: "Все права защищены",
      Phone: "Тел",
      Tel: "Тел",
      Person: "Конфиденциальность",
      Terms: "Условия",
    },
    profile: {
      SignIn: "Войти",
      SignOut: "Выйти",
      SignUp: "Зарегистрироваться",
      SignInHeader: "Вход",
      SignUpHeader: "Регистрирация",
      UserNotFound: "Пользователь не найден",
      ConfirmPassword: "Повторите пароль",
    },
    components: {
      New: "Новый",
      Add: "Добавить",
      Edit: "Редактироовать",
      Delete: "Удалить",
      Choose: "Выбрать",
      Yes: "Да",
      No: "Нет",
      Upload: "Загрузить",
      Change: "Изменить",
      Join: "Присоединиться",
      Error: "Ошибка",
    },
    models: {
      // models for generator
			door : { ...door },
			comment : { ...comment },
			room : { ...room },
			user: { ...user },
    }
  }
};
export default ruRU;