import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StockItem from './StockItem';

const StocksList = ({stocksData}) => {
  const renderItemSeparator = () => {
    return <View style={styles.separatorStyle}></View>;
  };

  const renderEmptyListDataComponent = () => {
    return (
      <Text style={styles.emptyListStyle}>{constants.Holdings.noItems}</Text>
    );
  };
  return (
    <FlatList
      bounces={false}
      showsVerticalScrollIndicator={false}
      data={stocksData}
      renderItem={StockItem}
      ItemSeparatorComponent={renderItemSeparator}
      contentContainerStyle={styles.listStyle}
      keyExtractor={(item, index) => String(index)}
      ListEmptyComponent={renderEmptyListDataComponent}
    />
  );
};

export default StocksList;

const styles = StyleSheet.create({
  listStyle: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
  },
  separatorStyle: {
    backgroundColor: '#d9d9d9',
    height: 2,
    marginHorizontal: 10,
  },
  emptyListStyle: {
    textAlign: 'center',
    padding: 8,
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '600',
  },
});
