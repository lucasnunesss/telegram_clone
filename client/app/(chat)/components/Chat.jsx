import MessageCard from '@/components/cards/MessageCard'
import ChatLoading from '@/components/loadings/ChatLoading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Paperclip, Send, Smile } from 'lucide-react'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ModeToggle } from '@/components/shared/mode-toggle'
import { useTheme } from 'next-themes'

const Chat = ({messages}) => {
  const {resolvedTheme} = useTheme()
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

  const handleEmojiSelect = (emoji) => {
    me
  }
  return (
    <div className='flex flex-col justify-end z-40 min-h-[92vh]'>
      {/* Loading */}
      {/* <ChatLoading /> */}
      {/* Messages */}
      {/* <MessageCard isReceived /> */}
    


      {/* <MessageCard isReceived /> */}

      {/* Start Conversation*/}
      {/* <div className='w-full h-[88vh] flex items-center justify-center'>
          <div className='text-[100px] cursor-pointer' onClick={() => onSendMessage({text: '🖐️'})}>🖐️</div>
      </div> */}
      
      {/* Message Input */}
      <form onSubmit={handleSubmit(onSendMessage)} className='w-full flex relative'>
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

          <Popover>
            <PopoverTrigger asChild>
              <Button size='icon' type='button' variant='secondary'>
                <Smile />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0 border-none rounded-md absolute right-6 bottom-0">
                <Picker data={data} theme={resolvedTheme==='dark' ? 'dark' : 'light'} onEmojiSelect={(emoji) => handleEmojiSelect(emoji)} />
            </PopoverContent>
          </Popover>


     
          <Button type='submit' size={'icon'}>
            <Send />
          </Button>

          <ModeToggle />
      </form>
    </div>
  )
}

export default Chat