import {View, Text, Alert, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import ApiSets from '../../services/ApiSets';
import {GetClient} from '../../services/ApiHelper';
import {holdingsDataCalculator} from '../../utils/AppUtil';
import {StringConstants} from '../../utils/StringConstants';
import StocksList from '../../components/common/StocksList';
import {COLORS} from '../../utils/Theme';
import HoldingsInfo from '../../components/HoldingsScreen/HoldingsInfo';

const Holdings = () => {
  const [showLoader, setShowLoader] = useState(true);
  const [stocksData, setStocksData] = useState([]);
  const [holdingsData, setHoldingsData] = useState({
    currentValue: 0,
    totalInvestment: 0,
    todayPL: 0,
    pl: 0,
  });

  const getStocksData = async () => {
    try {
      const data = await GetClient(ApiSets.GET_STOCKS_DATA);
      const {currentValue, totalInvestment, todayPL, pl} =
        holdingsDataCalculator(data.userHolding);
      setStocksData(data?.userHolding);
      setHoldingsData({
        currentValue,
        totalInvestment,
        todayPL,
        pl,
      });
    } catch (error) {
      Alert.alert(
        'Error',
        'Something went wrong while fetching the data. Please try again after some time.',
        [{text: 'OK'}],
      );
    }
    setShowLoader(false);
  };

  useEffect(() => {
    getStocksData();
  }, []);

  return (
    <>
      {showLoader ? (
        <View style={[styles.container, {justifyContent: 'center'}]}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={[styles.container, {justifyContent: 'space-between'}]}>
          <View style={styles.flexVal}>
            {/* Header */}
            <View style={{backgroundColor: COLORS['primary-purple']}}>
              <Text style={styles.heading}>
                {StringConstants.Holdings.upstox}
              </Text>
            </View>
            {/* Header */}

            {/* List of Stocks/Holdings */}
            <StocksList stocksData={stocksData} />
            {/* List of Stocks/Holdings */}
          </View>

          {/* Total Investment Details */}
          <HoldingsInfo holdingsData={holdingsData} />
          {/* Total Investment Details */}
        </View>
      )}
    </>
  );
};

export default Holdings;
