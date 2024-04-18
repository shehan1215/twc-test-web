import axios from "axios";


export const getContacts = async ()=>{

    try{

        const contacts = await axios.get('http://localhost:5001/api/contacts');
        console.log(contacts)
        return contacts
    }catch(error){
        return console.log(error)
    }

}

