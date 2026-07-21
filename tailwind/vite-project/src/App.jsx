import React from 'react'
import Card from "./components/Card"
 const App = () => {
  const Data = [
  { id:1,
    imageUrl: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?q=80&w=400&auto=format&fit=crop",
    title: "Paket Reseller Daging sapi segaer",
    price: "Rs 4900"
  },
  {id:2,
    imageUrl: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=400&auto=format&fit=crop",
    title: "Premium Basmati Rice 5kg",
    price: "Rs 1200"
  },
  {id:3,
    imageUrl: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?q=80&w=400&auto=format&fit=crop",
    title: "Fresh Chicken Breast 1kg",
    price: "Rs 350"
  },
  {id:4,
    imageUrl: "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=400&auto=format&fit=crop",
    title: "Organic Mixed Vegetables Box",
    price: "Rs 150"
  },
  {id:5,
    imageUrl: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=400&auto=format&fit=crop",
    title: "Pure Desi Ghee 1L Pack",
    price: "Rs 750"
  },
  {id:6,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0QXMQjeX_M8WyYVYnhN0u8mg-g5mRDyeZ7cDhEFP9A&s=10",
    title: "Fresh Mutton Curry Cut 1kg",
    price: "Rs 850"
  },
  {id:7,
    imageUrl: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=400&auto=format&fit=crop",
    title: "Atlantic Salmon Fish Fillet",
    price: "Rs 1500"
  },
  {id:8,
    imageUrl: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?q=80&w=400&auto=format&fit=crop",
    title: "Farm Fresh Eggs (Tray of 30)",
    price: "Rs 210"
  },
  {id:9,
    imageUrl: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=400&auto=format&fit=crop",
    title: "Mixed Indian Spices Combo",
    price: "Rs 450"
  },
  {id:10,
    imageUrl: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=400&auto=format&fit=crop",
    title: "Fresh Seasonal Fruits Basket",
    price: "Rs 600"
  },
  {id:11,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSC5rpfe0nysDA02YgwCJwqvs8hKA1ICBFsCDJc0YVUCSUPikvhbI18LSSvL1cdWSfd1eCaV8rGUuLFP9POsC0tjT2AlXMgFavIpjhJxTFQ&s=10",
    title: "chicken chilli",
    price: "Rs 600"
  },
  {
    id:12,
    title:"sundarkant special panner chilli",
    price:"Rs 99",
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9c7SAtZdCqF_TH3VpYozhL8msovqjWixKinr6S_so3A&s=10"
  }
];
  return (
    <div className='grid grid-cols-2 lg:grid-cols-5 '>
{Data.map((elem)=>(
  <Card 
  key={elem.id}
  image={elem.imageUrl}
  title={elem.title}
  price={elem.price}
  />
 ))}
    </div>
  )
}
export default App;