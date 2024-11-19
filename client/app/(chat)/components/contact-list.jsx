
import React from 'react'
import Settings from './Settings'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'


const ContactList = ({contacts}) => {

  const renderContacts = (contact) => {
      return <div className='flex justify-between items-center cursor-pointer hover:bg-secondary/50 p-2'>
            <div className='flex items-center gap-2'>
              <div className='relative'>
                <Avatar className="z-40">
                    <AvatarImage src={contact.avatar} alt={contact.email} className="object-cover" />
                    <AvatarFallback className="uppercase">
                      {contact.email[0]}
                    </AvatarFallback>
                </Avatar>
                <div className='size-3 bg-green-500 absolute rounded-full bottom-0 right-0 !z-50' />
              </div>
              <div>
                <h2>{contact.email.split('@')[0]}</h2>
              </div>
            </div>
      </div>
  }

  return (
    <>
    <div className='flex items-center bg-background pl-2 sticky top-0'>
        <Settings />
        <div className='m-2 w-full'>
          <Input className="bg-secondary" type="text" placeholder="Search..." />
        </div>
    </div>

    {contacts.length === 0 && (
        <div className='w-full h-[95vh] flex justify-center items-center text-center text-muted-foreground'>
          <p>Contact list is empty</p>
        </div>
    )}

    {contacts.map(contact => renderContacts(contact))}
    </>
  )
}

export default ContactList