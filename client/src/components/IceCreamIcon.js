import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import _ from 'lodash';

const IceCreamIcon = props => {
  console.info('ICON: ', props);
  const { _id, cherry, convoId, flavor, from, nuts, size, status } = props;

  const icons = [
    { size: 'large', flavor: 'Vanilla', cherry: 'yes', nuts: 'yes' },
    { size: 'large', flavor: 'Strawberry', cherry: 'yes', nuts: 'yes' },
    { size: 'large', flavor: 'Chocolate', cherry: 'yes', nuts: 'yes' },
    { size: 'medium', flavor: 'Vanilla', cherry: 'yes', nuts: 'yes' },
    { size: 'medium', flavor: 'Strawberry', cherry: 'yes', nuts: 'yes' },
    { size: 'medium', flavor: 'Chocolate', cherry: 'yes', nuts: 'yes' },
    { size: 'small', flavor: 'Vanilla', cherry: 'yes', nuts: 'yes' },
    { size: 'small', flavor: 'Strawberry', cherry: 'yes', nuts: 'yes' },
    { size: 'small', flavor: 'Chocolate', cherry: 'yes', nuts: 'yes' }
  ];

  const renderIcon = () => {
    console.log('looking for', { size, flavor, cherry, nuts });
    const macthingIcon = _.find(icons, { size, flavor, cherry, nuts });
    console.log('FOUND IT!', macthingIcon);
    return <Text>Hey!</Text>;
  };

  return <View>{renderIcon()}</View>;
};

export default IceCreamIcon;
