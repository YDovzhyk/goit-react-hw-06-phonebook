
export const getContacts = ({contacts}) => contacts.items;

export const getFamilyContacts = ({contacts}) => contacts.items.filter(({family}) => family)

export const getFilteredContacts = ({contacts}) => {
    const {items, filter} = contacts;
    if(!filter) {
        return items;
    }

    const normalizedFilter = filter.toLowerCase();
    const result = items.filter(({name, number}) => {
        const normalizedName = name.toLowerCase();
        const normalizedNumber = number.toLowerCase();
        return (normalizedName.includes(normalizedFilter) || normalizedNumber.includes(normalizedFilter));
    });

    return result;
}
