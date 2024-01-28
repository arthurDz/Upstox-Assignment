import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StringConstants} from '../../utils/StringConstants';
import {COLORS} from '../../utils/Theme';

const StockItem = ({item}) => {
  return (
    <View style={styles.card}>
      <View style={[styles.cardRow, {marginBottom: 12}]}>
        <Text style={[styles.textColor, {fontSize: 20, fontWeight: '700'}]}>
          {item?.symbol}
        </Text>
        <Text style={[styles.textColor, styles.textSize]}>
          {StringConstants.StockItem.ltp}:
          <Text style={styles.textWeight}> ₹ {item?.ltp}</Text>
        </Text>
      </View>
      <View style={styles.cardRow}>
        <Text style={[styles.textColor, {fontSize: 16, fontWeight: '500'}]}>
          {item?.quantity}
        </Text>
        <Text style={[styles.textColor, styles.textSize]}>
          {StringConstants.StockItem.pl}:{' '}
          <Text style={styles.textWeight}>
            ₹ {item?.ltp * item?.quantity - (item?.avgPrice - item?.quantity)}
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default StockItem;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS['Neutrals/neutrals-1'],
    padding: 12,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textColor: {
    color: 'black',
  },
  textSize: {
    fontSize: 18,
  },
  textWeight: {
    fontWeight: '600',
  },
});
