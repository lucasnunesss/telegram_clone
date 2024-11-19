import { Loader2 } from "lucide-react"

import ContactList from "./components/contact-list"


const HomePage = () => {
  return (
    <>
    <div className="w-80 h-screen border-r fixed inset-0 z-50">
        {/* Loading */}
        {/* <div className="w-full h-[95vh] flex justify-center items-center">
            <Loader2 size={50} className="animate-spin" />

        </div> */}

        {/* Contact List */}
        <ContactList contacts={contacts} />
    </div>
    {/* Chat area */}
    </>
  )
}


const contacts = [
  {email: 'john@gmail.com', _id: '1', avatar: 'https://github.com/shadcn.png'},
  {email: 'anna@gmail.com', _id: '2'},
  {email: 'paul@gmail.com', _id: '3'},
  {email: 'gabriela@gmail.com', _id: '4'},
  {email: 'jorge@gmail.com', _id: '5'},

]

export default HomePage