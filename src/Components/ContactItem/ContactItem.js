import { Item, Button } from "../ContactList/ContactList.styled";
import { useDeleteContactMutation } from "redux/CreateApiSlice";



export const ContactItem = ({ contact }) => {

    const [deleteContact, { isLoading }] = useDeleteContactMutation();

    return (
    
        <Item>
            {contact.name}: {contact.phone}
            <Button type="button" id={contact.id} onClick={() => deleteContact(contact.id)}>
                { isLoading? 'Processing...' : 'Delete' }
            </Button>
        </Item>
    );
};