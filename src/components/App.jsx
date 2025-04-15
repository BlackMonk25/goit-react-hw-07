import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./contactForm/ContactForm";
import SearchBox from "./searchBox/SearchBox";
import ContactList from "./contactList/ContactList";
import { ErrorMessage } from "formik";
import { fetchContacts } from "../redux/contactsOps";
import {
  selectContacts,
  selectIsError,
  selectIsLoading,
} from "../redux/contactsSlice";
import css from "../components/App.module.css";

export default function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.wrapper}>
      <h1 className={css.header}>Phonebook</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <ErrorMessage />}
      <ContactForm />
      <SearchBox />
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}


























