import { Button } from '@/components/ui/button'
import { Menu, Settings2, UserPlus, VolumeOff } from 'lucide-react'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { useTheme } from 'next-themes'

const Settings = () => {
  const {resolvedTheme, setTheme} = useTheme()
  return (
    <>
    <Popover>
      <PopoverTrigger asChild>
      <Button size={'icon'} variant={'secondary'}>
          <Menu />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='p-0 w-80'>
          <h2 className='pt-2 pl-2 text-muted-foreground'>
            <span className='text-white'>Settings: info@mail.com</span>
          </h2>
          <Separator className='my-2'/>
          <div className='flex flex-col'>
            <div className='flex justify-between items-center p-2 hover:bg-secondary cursor-pointer'>
                <div className='flex items-center gap-1'>
                  <Settings2 size={16} />
                  <span className='text-sm'>Profile</span>
                </div>
            </div>
        
          <div className='flex justify-between items-center p-2 hover:bg-secondary cursor-pointer'>
              <div className='flex items-center gap-1'>
                <UserPlus size={16} />
                <span className='text-sm'>Create contact</span>
              </div>
            </div>

          <div className='flex justify-between items-center p-2 hover:bg-secondary cursor-pointer'>
              <div className='flex items-center gap-1'>
                <VolumeOff size={16} />
                <span className='text-sm'>Mute</span>
              </div>
              <Switch />
          </div>

          <div className='flex justify-between items-center p-2 hover:bg-secondary cursor-pointer'>
              <div className='flex items-center gap-1'>
                {resolvedTheme === 'dark'}
                <span className='text-sm'>Mute</span>
              </div>
              <Switch />
            </div>
        </div>    
        </PopoverContent>
    </Popover>

    
    </>
 
  )
}

export default Settings