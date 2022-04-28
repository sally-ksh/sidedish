import React, { useState } from 'react';

import { CARD_SIZE } from '../../constants/card';

import exhibition from '../../data/exhibition';
import { dish10 } from '../../data/dishes';

import Exhibition from '../exhibition/Exhibition';
import Category from '../category/Category';

const Main = () => {
  return (
    <>
      <Exhibition {...exhibition} />
      <Category cardSize={CARD_SIZE.MEDIUM} {...dish10} />
    </>
  );
};

export default Main;
