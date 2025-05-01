"use client"

import React, {useState} from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { CalculatorIcon } from 'lucide-react'
import { format } from 'date-fns'
import { Calendar } from './ui/calendar'


const TodoList = () => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [open, setOpen] = useState(false);
  return (
    <>
    <h1 className='text-muted-foreground' >To - Do - List</h1>
   <Popover  open={open}  onOpenChange={setOpen}>
  <PopoverTrigger asChild>
    <Button className='w-full '>
        <CalculatorIcon/>
        {date ? format(date, "PPP") : <span>Pic a Date</span>}
    </Button>
  </PopoverTrigger>
  <PopoverContent>
  <Calendar
    mode="single"
    selected={date}
    onSelect={(date)=> {
        setDate(date)
        setOpen(false)
    }}
    className="rounded-md border"
  />
  </PopoverContent>
</Popover>

    <ScrollArea className='max-h-[300px] mt-4 overflow-y-auto'>
       
    <div className='flex flex-col gap-4'>  
    <Card>
            <div className='flex items-center gap-4 p-1 '>
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className='text-muted-foreground text-sm'>Tuch here</label>
            </div>
    </Card>
    <Card>
            <div className='flex items-center gap-4 p-1 '>
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className='text-muted-foreground text-sm'>Tuch here</label>
            </div>
    </Card>
    <Card>
            <div className='flex items-center gap-4 p-1 '>
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className='text-muted-foreground text-sm'>Tuch here</label>
            </div>
    </Card>
    <Card>
            <div className='flex items-center gap-4 p-1 '>
              <Checkbox id="item1"  />
              <label htmlFor="item1" className='text-muted-foreground text-sm'>Tuch here</label>
            </div>
    </Card>
    <Card>
            <div className='flex items-center gap-4 p-1 '>
              <Checkbox id="item1"  />
              <label htmlFor="item1" className='text-muted-foreground text-sm'>Tuch here</label>
            </div>
    </Card>
    <Card>
            <div className='flex items-center gap-4 p-1 '>
              <Checkbox id="item1"  />
              <label htmlFor="item1" className='text-muted-foreground text-sm'>Tuch here</label>
            </div>
    </Card>
    <Card>
            <div className='flex items-center gap-4 p-1 '>
              <Checkbox id="item1"  />
              <label htmlFor="item1" className='text-muted-foreground text-sm'>Tuch here</label>
            </div>
    </Card>
    <Card>
            <div className='flex items-center gap-4 p-1 '>
              <Checkbox id="item1"  />
              <label htmlFor="item1" className='text-muted-foreground text-sm'>Tuch here</label>
            </div>
    </Card>
    <Card>
            <div className='flex items-center gap-4 p-1 '>
              <Checkbox id="item1"  />
              <label htmlFor="item1" className='text-muted-foreground text-sm'>Tuch here</label>
            </div>
    </Card>
    <Card>
            <div className='flex items-center gap-4 p-1 '>
              <Checkbox id="item1"  />
              <label htmlFor="item1" className='text-muted-foreground text-sm'>Tuch here</label>
            </div>
    </Card>
    <Card>
            <div className='flex items-center gap-4 p-1 '>
              <Checkbox id="item1"  />
              <label htmlFor="item1" className='text-muted-foreground text-sm'>Tuch here</label>
            </div>
    </Card>
    </div>
    </ScrollArea>
    
    </>
  )
}

export default TodoList