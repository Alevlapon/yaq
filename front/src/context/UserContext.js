import { createContext, useState, useContext, useEffect } from "react";

const getLocalStorageUsers = () => {
  let user = localStorage.getItem("user-items");
  if (user) {
    return JSON.parse(localStorage.getItem("user-items"));
  } else {
    return [];
  }
};

const getLocalStorageAuth = () => {
  let user = localStorage.getItem("auth-item");
  if (user) {
    return JSON.parse(localStorage.getItem("auth-item"));
  } else {
    return [];
  }
};

const User = createContext({ name: "", auth: false });

function UserProvider({ children }) {
  const [user, setUser] = useState(getLocalStorageAuth());
  const [errorMessage, setErrorMessage] = useState("");
  const [empty, setEmpty] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const [users, setUsers] = useState(getLocalStorageUsers());

  function checkUppercase(str) {
    for (var i = 0; i < str.length; i++) {
      if (
        str.charAt(i) == str.charAt(i).toUpperCase() &&
        str.charAt(i).match(/[a-z]/i)
      ) {
        return true;
      }
    }
    return false;
  }

  function checkLowercase(str) {
    for (var i = 0; i < str.length; i++) {
      if (
        str.charAt(i) == str.charAt(i).toLowerCase() &&
        str.charAt(i).match(/[a-z]/i)
      ) {
        return true;
      }
    }
    return false;
  }

  function checkNumber(str) {
    return /[0-9]/.test(str);
  }

  function checkPhoneNumber(str) {
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) === "_") {
        return true;
      }
    }
    return false;
  }

  const Signup = (details) => {
    if (
      details.name === "" ||
      details.phone === "" ||
      details.email === "" ||
      details.password === "" ||
      details.passwordConf === ""
    ) {
      setEmpty(true);
      setErrorMessage("Заполните поле");
    } else if (checkPhoneNumber(details.phone)) {
      setEmpty(false);
      setErrorMessage("Укажите правильный номер телефона.");
    } else if (!details.email.includes("@")) {
      setEmpty(false);
      setErrorMessage("Укажите правильный электронный адрес.");
    } else if (
      users.filter((user) => user.email === details.email).length > 0
    ) {
      setEmpty(false);
      setErrorMessage(
        "Пользователь с таким e-mail (" + details.email + ") уже существует."
      );
    } else if (
      users.filter((user) => user.phone === details.phone).length > 0
    ) {
      setEmpty(false);
      setErrorMessage(
        "Пользователь с таким номером (" + details.phone + ") уже существует."
      );
    } else if (details.password !== details.passwordConf) {
      setEmpty(false);
      setErrorMessage("Введите корректный повтор пароля.");
    } else if (details.password.length < 8) {
      setEmpty(false);
      setErrorMessage("Пароль должен состоять хотя бы из 8 символов.");
    } else if (!checkUppercase(details.password)) {
      setEmpty(false);
      setErrorMessage("Пароль должен содержать хотя бы одну прописную букву.");
    } else if (!checkLowercase(details.password)) {
      setEmpty(false);
      setErrorMessage("Пароль должен содержать хотя бы одну строчную букву.");
    } else if (!checkNumber(details.password)) {
      setEmpty(false);
      setErrorMessage("Пароль должен содержать хотя бы одну цифру.");
    } else {
      return details;
    }
  };

  // Login updates the user data with a name parameter
  const Login = (details) => {
    if (details.email === "" || details.password === "") {
      setEmpty(true);
      setErrorMessage("Заполните поле");
    } else {
      return details;
    }
  };

  // Logout updates the user data to default
  const Logout = (history) => {
    setUser((user) => ({
      name: "",
      phone: "",
      email: "",
      password: "",
      auth: false,
      saved: [],
      history: [],
    }));
    history.push("/");
    history.go(0);
  };

  const Update = (details) => {
    if (
      details.name === "" ||
      details.phone === "" ||
      details.email === "" ||
      checkPhoneNumber(details.phone) ||
      !details.email.includes("@")
    ) {
      setErrorMessage("Ошибка, повторите попытку");
    } else {
      const currentUser = users.find((element) => element.email === user.email);
      const currentUsers = users;
      for (var i = 0; i < users.length; i++) {
        currentUsers[i] = users[i];
        if (currentUser.id === users[i].id) {
          currentUsers[i].name = details.name;
          currentUsers[i].phone = details.phone;
          currentUsers[i].email = details.email;
        }
      }
      setUsers(currentUsers);
      setUser((item) => ({
        name: details.name,
        phone: details.phone,
        email: details.email,
        password: user.password,
        auth: true,
      }));
      setErrorMessage("Вы успешно изменили и сохранили информацию");
    }
  };

  const ChangePassword = (details) => {
    if (
      details.password === "" ||
      details.newPassword === "" ||
      details.newPasswordConf === "" ||
      details.password !== user.password ||
      details.newPassword !== details.newPasswordConf ||
      details.password === details.newPassword ||
      details.newPassword.length < 8 ||
      !checkUppercase(details.newPassword) ||
      !checkLowercase(details.newPassword) ||
      !checkNumber(details.newPassword)
    ) {
      setErrorMessage("Ошибка, повторите попытку");
      console.log("hello");
    } else {
      const currentUser = users.find((element) => element.email === user.email);
      const currentUsers = users;
      for (var i = 0; i < users.length; i++) {
        currentUsers[i] = users[i];
        if (currentUser.id === users[i].id) {
          currentUsers[i].password = details.newPassword;
        }
      }
      setUsers(currentUsers);
      setUser((item) => ({
        name: user.name,
        phone: user.phone,
        email: user.email,
        password: details.newPassword,
        auth: true,
      }));
      setErrorMessage("Вы успешно изменили и сохранили пароль");
    }
  };

  const handleOpenLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
    setErrorMessage("");
    setEmpty(false);
  };

  const handleClose = () => {
    setShowLogin(false);
    setShowSignup(false);
    setErrorMessage("");
    setEmpty(false);
  };

  const handleOpenRegistration = () => {
    setShowLogin(false);
    setShowSignup(true);
    setErrorMessage("");
    setEmpty(false);
  };

  useEffect(() => {
    localStorage.setItem("user-items", JSON.stringify(users));
    localStorage.setItem("auth-item", JSON.stringify(user));
  }, [users, user]);

  return (
    <User.Provider
      value={{
        user,
        setUser,
        users,
        setUsers,
        errorMessage,
        empty,
        Signup,
        Login,
        Logout,
        Update,
        ChangePassword,
        showLogin,
        handleOpenLogin,
        handleClose,
        showSignup,
        handleOpenRegistration,
      }}
    >
      {children}
    </User.Provider>
  );
}

export const UserState = () => {
  return useContext(User);
};

export default UserProvider;
