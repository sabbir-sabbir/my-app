import React from 'react'
import { Card,  CardFooter, CardTitle } from './ui/card';
import Image from 'next/image';
import { Badge } from './ui/badge';

// first data set
const popularContent = [
    {
      id: 1,
      title: "Fantasy Wild",
      badge: "Claimed",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
      count: 120
    },
    {
      id: 2,
      title: "Cyberpunk City",
      badge: "Subscription",
      image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5",
      count: 200
    },
    {
      id: 3,
      title: "Futuristic ",
      badge: "Claimed",
      image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5",
      count: 340
    },
    {
      id: 4,
      title: "Mystical Forest",
      badge: "Subscription",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      count: 175
    },
    {
      id: 5,
      title: "Space Explorer",
      badge: "Claimed",
      image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5",
      count: 290
    },
    {
      id: 6,
      title: "Abstract Wild",
      badge: "Claimed",
      image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5",
      count: 290
    }
  ];

//   data set two
const latestTransactions = [
    {
      id: 1,
      title: "Abstract wild",
      badge: "Subscribed",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      count: 1
    },
    {
      id: 2,
      title: "Neon Jungle",
      badge: "Claimed",
      image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5",
      count: 2
    },
    {
      id: 3,
      title: "Robot Portrait",
      badge: "Exclusive",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      count: 1
    },
    {
      id: 4,
      title: "Surreal Dream",
      badge: "Free Trial",
      image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5",
      count: 3
    },
    {
      id: 5,
      title: "Galactic Traveler",
      badge: "Premium",
      image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5",
      count: 1
    }
  ];
  
  

const CardList = ({title}:{title:string}) => {

    const List = title === "Popular Content" ? popularContent : latestTransactions;
  return (
   <>
   <div className='w-full flex flex-col items-start justify-start'>
    <h1 className='text-xl mb-3 tracking-wide'>{title}</h1>
    <div className='flex flex-col gap-2 '>
      {
        List.map((item)=> (
          <div className='flex items-center justify-between gap-4' key={item.title}>
         <Image src={item.image} alt={item.badge} width={30} height={30} className='rounded-full object-cover'  />
         <div className='flex flex-col items-center justify-start '>
         <p className='text-[14px] tracking-wide'>{item.title}</p>
         <p className='bg-golden-pink text-[12px] text-gradient-end px-1 py-0 rounded-full'>{item.badge}</p>
         </div>
        
         <p className='font-bold tracking-wide '>{(item.count / 1000).toFixed(1)}k</p>

          </div>
        ))
      }
    </div>
   </div>
   </>
  )
}

export default CardList