import { cn } from '@/lib/utils'
import React from 'react'

const MessageCard = ({isReceived}) => {
  return (
    <div className={cn('m-2.5 font-medium text-xs flex', isReceived ? 'justify-start' : 'justify-end')}>
      <div className={cn('relative inline p-2 pl-2.5 pr-12 max-w-full', isReceived ? 'bg-black' : 'bg-secondary')}>
          <p className='text-sm text-white'>Hello World</p>
          <span className='text-xs right-1 bottom-0 absolute opacity-60'>✓</span>
      </div>
    </div>
  )
}

export default MessageCard