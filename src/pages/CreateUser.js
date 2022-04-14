import React, { useState } from "react";
import axios from "axios";
import TextInput from "../components/TextInput";

function CreateUser() {
  const [user, setUser] = useState({
    gender: "Male",
    role: ["USER"],
  });
  const [passwordError, setPasswordError] = useState(false);

  const handleOnChange = (e) => {
    if (e.target.name !== "gender") {
      setUser({ ...user, [e.target.id]: e.target.value });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
    if (user.password1.length > 0) {
      if (user.password1 !== user.password2) setPasswordError(true);
      else if (user.password1 === user.password2) {
        setPasswordError(false);
      }
    }
  };
  const validateInputs = () => {
    if (user.password1 === user.password2 && user.password1.length >= 4) {
      return true;
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (validateInputs) {
      const {
        username,
        firstName,
        middleName,
        lasttName,
        gender,
        userPhone,
        email,
        role,
        password1: password,
      } = user;

      axios
        .post(`${process.env.REACT_APP_API_URL}/api/auth/signup`, {
          username,
          firstName,
          lasttName,
          middleName,
          gender,
          userPhone,
          email,
          role,
          password,
        })
        .then((res) => {
          console.log(res);
        });
    }
  };
  return (
    <form className="mt-24 px-12 items-center" onSubmit={onSubmit}>
      <h1 className="font-bold mb-4 text-lg">Create User</h1>
      {passwordError && (
        <h1 className="font-bold mb-4 text-md text-red-500">
          Password mismatch
        </h1>
      )}
      <div className="grid xl:grid-cols-2 xl:gap-6">
        <TextInput
          handleOnChange={handleOnChange}
          type={"text"}
          name={"firstName"}
          id={"firstName"}
          required={true}
          text={"First Name"}
        />
        <TextInput
          handleOnChange={handleOnChange}
          type={"text"}
          name={"middleName"}
          id={"middleName"}
          required={true}
          text={"Middle Name"}
        />

        <TextInput
          handleOnChange={handleOnChange}
          type={"text"}
          name={"lasttName"}
          id={"lasttName"}
          required={true}
          text={"Last Name"}
        />
      </div>
      <TextInput
        handleOnChange={handleOnChange}
        type={"email"}
        name={"email"}
        id={"email"}
        required={true}
        text={"Email"}
      />
      <TextInput
        handleOnChange={handleOnChange}
        type={"text"}
        name={"username"}
        id={"username"}
        required={true}
        text={"User Name"}
      />
      <div>
        <label
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 "
          for="cars"
        >
          Role:{" "}
        </label>

        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
      <TextInput
        handleOnChange={handleOnChange}
        type={"password"}
        name={"password"}
        id={"password1"}
        required={true}
        text={"Password"}
      />
      <TextInput
        handleOnChange={handleOnChange}
        type={"password"}
        name={"password"}
        id={"password2"}
        required={true}
        text={"Confirm Password"}
      />

      <div className="grid xl:grid-cols-2 xl:gap-6">
        <TextInput
          handleOnChange={handleOnChange}
          type={"tel"}
          name={"userPhone"}
          id={"userPhone"}
          required={true}
          text={"Phone Number"}
        />
        <div className="flex items-center mb-4 space-x-4">
          <input
            onChange={(e) => {
              handleOnChange(e);
            }}
            id="gender-option-1"
            type="radio"
            name="gender"
            value="Male"
            checked={user.gender === "Male"}
            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            aria-labelledby="gender-option-1"
            aria-describedby="gender-option-1"
          />
          <label
            htmlFor="gender-option-1"
            className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Male
          </label>
          <input
            onChange={(e) => {
              handleOnChange(e);
            }}
            id="gender-option-2"
            type="radio"
            name="gender"
            checked={user.gender === "Female"}
            value="Female"
            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            aria-labelledby="gender-option-2"
            aria-describedby="gender-option-2"
          />
          <label
            htmlFor="gender-option-2"
            className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Female
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create
      </button>
    </form>
  );
}

export default CreateUser;
