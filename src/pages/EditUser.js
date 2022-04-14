import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditUser() {
  const [user, setUser] = useState({ gender: "Male" });
  const { userId } = useParams();
  const [updated, setUpdated] = useState(false);
  const [updateSuccessful, setUpdateSuccessful] = useState(false);

  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/api/auth/findUserById?id=${userId}`
      )
      .then((res) => {
        setUser(res.data.usersDtoList);
      });
  }, []);
  const handleOnChange = (e) => {
    setUser({
      ...user,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setUpdated(false);
    axios
      .put(`${process.env.REACT_APP_API_URL}/api/auth/updateUser`, user)
      .then((res) => {
        setUpdated(true);
        setUpdateSuccessful(true);
      })
      .catch((err) => {
        setUpdated(true);
        setUpdateSuccessful(false);
      });
  };
  return (
    <form className="mt-24 px-12" onSubmit={onSubmit}>
      <h1 className="font-bold mb-4 text-lg">Edit User</h1>
      {updated && updateSuccessful && (
        <div
          class="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
          role="alert"
        >
          <span class="font-medium">User Successfully updated!</span>
        </div>
      )}
      {updated && !updateSuccessful && (
        <div
          class="p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
          role="alert"
        >
          <span class="font-medium">Error Occured</span> Change a few things up
          and try submitting again.
        </div>
      )}
      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 mb-6 w-full group">
          <input
            onChange={(e) => {
              handleOnChange(e);
            }}
            type="text"
            name="firstname"
            value={user.firstname || ""}
            id="firstname"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required={true}
          />
          <label
            htmlFor="firstname"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            First name
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            onChange={(e) => {
              handleOnChange(e);
            }}
            type="text"
            name="middlename"
            value={user.middlename || ""}
            id="middlename"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required={true}
          />
          <label
            htmlFor="middlename"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Middle name
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            onChange={(e) => {
              handleOnChange(e);
            }}
            type="text"
            name="lastname"
            value={user.lastname || ""}
            id="lastname"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required={true}
          />
          <label
            htmlFor="lastname"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Last name
          </label>
        </div>
        <div>
          <label
            htmlFor="active"
            className="flex relative items-center mb-4 cursor-pointer"
          >
            <input
              onChange={(e) => {
                handleOnChange(e);
              }}
              type="checkbox"
              id="active"
              className="sr-only"
              name="active"
              checked={user.active || false}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full border border-gray-200 toggle-bg dark:bg-gray-700 dark:border-gray-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Active
            </span>
          </label>
        </div>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          onChange={(e) => {
            handleOnChange(e);
          }}
          id="email"
          type="email"
          value={user.email || ""}
          name="email"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required={true}
        />
        <label
          htmlFor="email"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Email address
        </label>
      </div>
      <div className="relative z-0 mb-6 w-full group">
        <input
          onChange={(e) => {
            handleOnChange(e);
          }}
          id="username"
          value={user.username || ""}
          type="text"
          name="username"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required={true}
        />
        <label
          htmlFor="username"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          User Name
        </label>
      </div>

      <div className="grid xl:grid-cols-2 xl:gap-6">
        <div className="relative z-0 mb-6 w-full group">
          <input
            onChange={(e) => {
              handleOnChange(e);
            }}
            type="tel"
            //pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            value={user.phoneNumber || ""}
            name="phoneNumber"
            id="phoneNumber"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required={true}
          />
          <label
            htmlFor="phoneNumber"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone number
          </label>
        </div>
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

export default EditUser;
