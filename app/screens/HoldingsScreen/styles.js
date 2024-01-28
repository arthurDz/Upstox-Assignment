import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/Theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS['Neutrals/neutrals-2'],
  },
  flexVal: {
    flex: 1,
  },
  backColor: {
    backgroundColor: COLORS['Neutrals/neutrals-1'],
  },
  separatorStyle: {
    backgroundColor: COLORS['Neutrals/neutrals-3'],
    height: 2,
    marginHorizontal: 10,
  },
  heading: {
    color: COLORS['Neutrals/neutrals-1'],
    padding: 16,
    fontSize: 20,
    fontWeight: '500',
  },
  emptyListStyle: {
    textAlign: 'center',
    padding: 8,
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: '600',
  },
  overViewLayout: {
    width: '100%',
    padding: 14,
    paddingVertical: 20,
    borderTopColor: COLORS['Neutrals/neutrals-2'],
    borderTopWidth: 1,
  },
});
