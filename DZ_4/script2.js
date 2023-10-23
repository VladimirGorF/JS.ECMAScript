async function saveUserData(user) {
  fetch("https://reqres.in/api/users")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error of reading DataBase!");
      }
    })
    .then((response) => {
      const dataArray = response.data;

      // const userJson = JSON.stringify(user);
      // const xhr = new XMLHttpRequest();
      // xhr.open("POST", url);
      // xhr.onload = () => {
      //   xhr.status != 201
      //     ? console.log(`Error here ${xhr.status}:${xhr.statusText}`)
      //     : console.log(`User: ${xhr.response}`);
      // };
      // xhr.send(userJson);

      console.log(dataArray);
      return dataArray;

      // throw new Error(`Пользователя  с ID: ${ID} не существует!`);
    })
    .catch((error) => {
      console.log(error);
    });
}

saveUserData(user);
