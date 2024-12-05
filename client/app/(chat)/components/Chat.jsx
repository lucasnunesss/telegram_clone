import MessageCard from '@/components/cards/MessageCard'
import ChatLoading from '@/components/loadings/ChatLoading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Paperclip, Send, Smile } from 'lucide-react'
import React, { useRef } from 'react'
import { useForm, Controller, get } from 'react-hook-form'
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ModeToggle } from '@/components/shared/mode-toggle'
import { useTheme } from 'next-themes'

const Chat = () => {
  const inputRef = useRef(null)
  const {resolvedTheme} = useTheme()
  const form = useForm({
    defaultValues: {
      text: '',
      image: ''
    }
  })

  const {handleSubmit, control, getValues, setValue} = form
  const onSendMessage = (values) => {
   
    console.log("valor", values)
  }
  const handleEmojiSelect = (emoji) => {
    const input = inputRef.current;
    if(!input) return
    const currentValue = getValues('text');
    const start = input.selectionStart ?? 0
    const end = input.selectionEnd ?? 0

    const newText = currentValue.slice(0, start) + emoji.native + currentValue.slice(end)
    setValue('text', `${newText}`);

  
  };


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
          name="text"
          control={control}
          render={({ field }) => (
            <Input
            className='bg-secondary border-l border-l-muted-foreground border-r border-r-muted-foreground h-9'
            placeholder="Type a message"
            value={field.value}
            onBlur={() => field.onBlur()}
            onChange={(e) => field.onChange(e.target.value)}
            ref={inputRef}
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