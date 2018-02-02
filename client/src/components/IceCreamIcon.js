import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

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

  const svgs = [
    { path: require('../../assets/svgs/large-vanilla-yes-yes.svg') },
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
    // const SVGpath = `../../assets/svgs/${size}-${flavor}-${cherry}-${nuts}.svg`;
    // const stringPath = String(SVGpath);
    // console.log('SVG Path', SVGpath);
    const macthingIcon = _.find(icons, { size, flavor, cherry, nuts });
    const imgNum = icons.indexOf(macthingIcon);
    console.log('FOUND IT!', macthingIcon, imgNum);
    return <Image style={styles.stretch} source={svgs[0].path} />;
  };

  return <View>{renderIcon()}</View>;
};

const styles = StyleSheet.create({
  stretch: {
    width: 50,
    height: 200
  }
});

export default IceCreamIcon;
