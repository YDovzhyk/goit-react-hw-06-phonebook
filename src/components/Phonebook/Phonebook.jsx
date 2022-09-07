import { useSelector, useDispatch } from "react-redux";

import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";

import { addContact, removeContact } from "../../redux/contacts/items/items-slice";
import {setFilter} from "../../redux/contacts/filter/filter-slice";

import { getFilteredContacts } from "../../redux/contacts/items/items-selectors";
import {getFilter} from "../../redux/contacts/filter/filter-selectors";

import PropTypes from 'prop-types';
import s from "./ContactList/contactList.module.css"

export const Phonebook = () => {

    const contacts = useSelector(getFilteredContacts);
    const filter = useSelector(getFilter);

    const dispatch = useDispatch();

    const onAddContact = data => {
        const action = addContact(data);
        dispatch(action)
    };

    const onRemoveContact = id => {
        dispatch(removeContact(id));
    };

    const handleFilter = ({target}) => {
        dispatch(setFilter(target.value));
    }

    return (
        <div className={s.phonebook}>
            <h2 className={s.phonebookTitle}>Add contact</h2>
            <ContactForm onSubmit={onAddContact} />
            <h2 className={s.phonebookTitle}>Contacts</h2>
                <div className={s.contact}>
                <input value={filter} name="filter" onChange={handleFilter} className={s.contactInput} placeholder="Filter contacts" />
                    <ContactList items={contacts} removeContact={onRemoveContact}/>
                </div>
        </div>
    )
}

export default Phonebook;

Phonebook.defaultProps = {
    getFilteredContacts: () => {},
    getFilter: () => {},
    data: {},
    id: "",
}

Phonebook.propTypes = {
    getFilteredContacts: PropTypes.func,
    getFilter: PropTypes.func,
    target: PropTypes.object,
    id: PropTypes.string,
    data: PropTypes.shape({
        nameId: PropTypes.string,
        numberId: PropTypes.string,
        familyId: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
        family: PropTypes.bool,
        }),
}