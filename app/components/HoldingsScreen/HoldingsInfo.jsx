import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {StringConstants} from '../../utils/StringConstants';
import {COLORS} from '../../utils/Theme';

const HoldingsInfo = ({holdingsData}) => {
  const HoldingsInfoItem = ({title, value}) => {
    return (
      <View style={styles.row}>
        <Text style={[styles.textStyle, styles.textWeight]}>{title}:</Text>
        <Text style={styles.textStyle}>₹{value}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <HoldingsInfoItem
        title={StringConstants.Holdings.currVal}
        value={holdingsData.currentValue}
      />
      <HoldingsInfoItem
        title={StringConstants.Holdings.totInvst}
        value={holdingsData.totalInvestment}
      />
      <HoldingsInfoItem
        title={StringConstants.Holdings.today}
        value={holdingsData.todayPL}
      />
      <View style={{marginTop: 24}}>
        <HoldingsInfoItem
          title={StringConstants.Holdings.proLos}
          value={holdingsData.pl}
        />
      </View>
    </View>
  );
};

export default HoldingsInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS['Neutrals/neutrals-1'],
    width: '100%',
    padding: 14,
    paddingVertical: 20,
    borderTopColor: COLORS['Neutrals/neutrals-2'],
    borderTopWidth: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
    marginHorizontal: 4,
  },
  textStyle: {
    color: COLORS['Neutrals/neutrals-4'],
    fontSize: 20,
  },
  textWeight: {
    fontWeight: '700',
  },
});
