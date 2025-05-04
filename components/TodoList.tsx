"use client"

import React, { useState } from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { CalculatorIcon } from 'lucide-react'
import { format } from 'date-fns'
import { Calendar } from './ui/calendar'

const initialTodos = [
  { id: 1, label: "Touch here", checked: true },
  { id: 2, label: "Touch here", checked: true },
  { id: 3, label: "Touch here", checked: true },
  { id: 4, label: "Touch here", checked: false },
  { id: 5, label: "Touch here", checked: false },
  { id: 6, label: "Touch here", checked: false },
  { id: 7, label: "Touch here", checked: false },
  { id: 8, label: "Touch here", checked: false },
  { id: 9, label: "Touch here", checked: false },
  { id: 10, label: "Touch here", checked: false },
  { id: 11, label: "Touch here", checked: false }
]

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  const [todos, setTodos] = useState(initialTodos);

  const toggleCheckbox = (id: number) => {
    setTodos(prev =>
      prev.map(item =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h1 className='text-muted-foreground text-lg font-medium mb-2'>To - Do - List</h1>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className='w-full justify-start gap-2'>
            <CalculatorIcon className="w-4 h-4" />
            {date ? format(date, "PPP") : <span>Pick a Date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            className="rounded-md border"
          />
        </PopoverContent>
      </Popover>

      <ScrollArea className='max-h-[300px] mt-4 overflow-y-auto'>
        <div className='flex flex-col gap-2'>
          {todos.map((item) => (
            <Card key={item.id} className='p-2'>
              <div className='flex items-center gap-2'>
                <Checkbox
                  id={`todo-${item.id}`}
                  checked={item.checked}
                  onCheckedChange={() => toggleCheckbox(item.id)}
                />
                <label htmlFor={`todo-${item.id}`} className='text-muted-foreground text-sm'>
                  {item.label}
                </label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default TodoList;
