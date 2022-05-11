import "./App.css";
import React from "react";
import ContactForm from "./Components/Form/Form";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";
import { useFetchContactsQuery } from "redux/CreateApiSlice";
import { Toaster } from 'react-hot-toast';

export default function App() {

  const { data } = useFetchContactsQuery();
  console.log(data)

    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm contacts={data} />
        <h2>Contacts</h2>
        <Filter />
        {data && <ContactList contacts={data} /> }
        <Toaster />
      </div>
    );
}

