import React from 'react';
import Button from './Button';

const Buttonlist = () => {
  const list = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Soccer",
    "Cricket",
    "Cooking",
    "Dance",
    "News",
    "Tech",
    "Comedy",
    "Fitness",
    "Travel",
    "Fashion",
    "Education",
  ];

  return (
    <div className="flex">
     {list.map((item,index)=> {
          return <Button key={index} name={item}/>
     })}
    </div>
  );
};

export default Buttonlist;
