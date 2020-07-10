import React from 'react';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classnames';
import deathsimg from '../../img/icons/deaths.svg';
import infectedimg from '../../img/icons/infected.svg';
import recoveredimg from '../../img/icons/recovered.svg';

const Cards = ({ data: { confirmed, recovered, deaths } }) => {
  if (!confirmed) {
    return 'loading...';
  }

  const icons = [infectedimg,recoveredimg,deathsimg];

  const dataItems = [confirmed, recovered, deaths];
  dataItems[0].name = 'infected';
  dataItems[1].name = 'recovered';
  dataItems[2].name = 'deaths';

  return (
    <div className={styles.container}>
      {dataItems.map((item,i) => (
        <div key={item.name} className={cx(styles.card, styles[item.name])}>
          <img src={icons[i]}
            alt={item.name} 
            className={styles.cardIcon}
          />
          <h3 className={styles.cardValue}>
            <CountUp start={0} end={item.value} duration={2.5} separator="." />
          </h3>
          <h2 className={styles.cardTitle}>{item.name}</h2>
        </div>
      ))}
    </div>
  )}
      
    

export default Cards;
