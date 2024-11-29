import MessageCard from '@/components/cards/MessageCard'
import ChatLoading from '@/components/loadings/ChatLoading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Paperclip, Send, Smile } from 'lucide-react'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'

const Chat = ({messages}) => {
  const form = useForm({
    defaultValues: {
      text: '',
      image: ''
    }
  })

  const {handleSubmit, control} = form
  const onSendMessage = (values) => {
    console.log(values)
  }
  return (
    <div className='flex flex-col justify-end z-40 min-h-[92vh]'>
      {/* Loading */}
      {/* <ChatLoading /> */}
      {/* Messages */}
      {/* <MessageCard isReceived /> */}
    


      {/* <MessageCard isReceived /> */}

      {/* Start Conversation*/}
      
      {/* Message Input */}
      {/* <form onSubmit={handleSubmit(onSendMessage)} className='w-full flex relative'>
          <Button size={'icon'} type='button' variant={'secondary'}>
            <Paperclip />
          </Button>

          <Controller
          name="otp"
          control={control}
          render={({ field }) => (
            <Input
            className='bg-secondary border-l border-l-muted-foreground border-r border-r-muted-foreground h-9'
            placeholder="Type a message"
            value={field.value}
            onBlur={() => field.onBlur()}
            onChange={(e) => field.onChange(e.target.value)}
            />
          )} />

          <Button size='icon' type='button' variant='secondary'>
              <Smile />
          </Button>
          <Button type='submit' size={'icon'}>
            <Send />
          </Button>
      </form> */}
    </div>
  )
}

export default Chat