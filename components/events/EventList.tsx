import React from "react";
import Link from 'next/link'
import classes from './event-list.module.css'
import Button from "./ui/Button";
import DateIcon from './icons/date-icon'
import AddressIcon from './icons/address-icon'
import ArrowRightIcon from './icons/arrow-right-icon'

interface DataType {
  id: string; 
  title: string;
  date: string;
  location: string;
  image: string
}

interface DataProps {
  data: DataType[] | DataType;
}

const EventList = ({ data }: DataProps) => {
  const receivedData = Array.isArray(data) ? data : [data];


  return (
    <div>
      <ul className={classes.list}>
        {receivedData.map((itemData) => {
          const humanReadableDate = new Date(itemData.date).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          });

          const formatedAddress = itemData.location.replace(', ' , "\n")

          const imgSrc = `/${itemData.image}`

          const exploreLink = `./events/${itemData.id}`

          return (
            <li key={itemData.id} className={classes.item}>
              <img src={imgSrc} alt={itemData.title} />
              <div className={classes.content}>
                  <div>
                      <h2>{itemData.title}</h2>
                      <div>
                        <time className={classes.date}><DateIcon />{humanReadableDate}</time>
                      </div>
                  </div>
                  <div>
                      <address className={classes.address}><AddressIcon />{formatedAddress}</address>
                  </div>
                  <div className={classes.actions}>
                      <Button link={exploreLink}>
                        <span>navigate</span>
                        <span className={classes.icon}><ArrowRightIcon /></span>
                      </Button>
                  </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default EventList;
