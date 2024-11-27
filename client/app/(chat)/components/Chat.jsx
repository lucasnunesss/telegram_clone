import MessageCard from '@/components/cards/MessageCard'
import ChatLoading from '@/components/loadings/ChatLoading'
import { Button } from '@/components/ui/button'
import { Paperclip } from 'lucide-react'
import React from 'react'
import { useForm } from 'react-hook-form'

const Chat = () => {
  const form = useForm({
    defaultValues: {
      text: '',
      image: ''
    }
  })

  const {handleSubmit} = form
  const onSendMessage = (values) => {
    console.log(values)
  }
  return (
    <div className='flex flex-col justify-end z-40 min-h-[92vh]'>
      {/* Loading */}
      {/* <ChatLoading /> */}
      {/* Messages */}
      {/* <MessageCard isReceived /> */}
      {/* Message input */}

      <form onSubmit={handleSubmit(onSendMessage)} className='w-full flex relative'>
          <Button size={'icon'} type='button' variant={'secondary'}>
            <Paperclip />
          </Button>
      </form>
    </div>
  )
}

export default Chat