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
      title: "Futuristic Portrait",
      badge: "Claimed",
      image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5",
      count: 340
    },
    {
      id: 4,
      title: "Mystical Forest",
      badge: "Subscription",
      image: "https://images.unsplash.com/photo-1605460375648-278bcbd579a6",
      count: 175
    },
    {
      id: 5,
      title: "Space Explorer",
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
      image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5",
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
    <div className=''>
        <h1 className='text-xl font-medium mb-6'>{title}</h1>
        <div className='flex flex-col gap-2 px-1'>

            {/* map */}
  {List.map((item) => (
    <Card key={item.id} className='flex items-center gap-2 p-2'>
      <div className='w-8 h-8 rounded-full relative overflow-hidden'>
        <Image src={item.image} alt={item.title} fill className='object-cover' />
      </div>

      <div className="flex flex-1 flex-col justify-center gap-1">
        <CardTitle className='text-[12px] font-light ' >{item.title}</CardTitle>
        <Badge variant="secondary">{item.badge}</Badge>
      </div>

      <CardFooter className="text-sm font-semibold ">
        {item.count / 1000}k
      </CardFooter>
    </Card>
  ))}
</div>

    </div>
  )
}

export default CardList