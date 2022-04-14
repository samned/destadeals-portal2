import React, { useState } from "react";
import axios from "axios";
import TextInput from "../components/TextInput";

// {
//     "name": "string",
//     "description": "string",
//     "rating": "string",
//     "country": "string",
//     "city": "string",
//     "phoneNumber": "string",
//     "emailAddress": "string",
//     "latitudeValue": "string",
//     "longitudeValue": "string",
//     "businessType": [
//       "string"
//     ],
//     "category": [
//       "string"
//     ]
//   }
function CreateCompany() {
  const [company, setUser] = useState({});

  const handleOnChange = (e) => {
    setUser({ ...company, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/auth/addCompany`, {})
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <form className="mt-24 px-12 items-center" onSubmit={onSubmit}>
      <h1 className="font-bold mb-4 text-lg">Add Company</h1>

      <div className="grid xl:grid-cols-2 xl:gap-6">
        <TextInput
          handleOnChange={handleOnChange}
          type={"text"}
          name={"name"}
          id={"name"}
          required={true}
          text={"Name"}
        />
        <TextInput
          handleOnChange={handleOnChange}
          type={"text"}
          name={"description"}
          id={"description"}
          required={true}
          text={"Description"}
        />

        <TextInput
          handleOnChange={handleOnChange}
          type={"text"}
          name={"country"}
          id={"country"}
          required={true}
          text={"Country"}
        />
      </div>
      <TextInput
        handleOnChange={handleOnChange}
        type={"text"}
        name={"city"}
        id={"city"}
        required={true}
        text={"City"}
      />
      <TextInput
        handleOnChange={handleOnChange}
        type={"text"}
        name={"phoneNumber"}
        id={"phoneNumber"}
        required={true}
        text={"Phone Number"}
      />
      <TextInput
        handleOnChange={handleOnChange}
        type={"text"}
        name={"emailAddress"}
        id={"emailAddress"}
        required={true}
        text={"Email Address"}
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

export default CreateCompany;
