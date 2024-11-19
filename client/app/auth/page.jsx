import {FaTelegram} from 'react-icons/fa'
import State from './component/State'
import Social from './component/Social'
import { ModeToggle } from '@/components/shared/mode-toggle'

const Page = () => {
  return (
    <div className='container max-w-md w-full h-screen flex justify-center items-center
      flex-col space-y-4
    '>
      <FaTelegram size={120} className='text-blue-500' />
      <div className='flex items-center gap-2'>
        <h1 className='text-4xl font-bold'>Telegram</h1>
        <ModeToggle />
      </div>
      <State />
      <Social />
    </div>
  )
}

export default Page