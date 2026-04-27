import { globalStyles } from '@/styles/global-styles'
import { Text, View } from 'react-native'

const CalculatorApp = () => {

  return (
    <View style={globalStyles.calculatorContainer}>
      <Text style={globalStyles.mainResult} numberOfLines={1} adjustsFontSizeToFit>
        50 x 50
      </Text>
      <Text style={globalStyles.subResult}>
        250
      </Text>
    </View>
  )
}

export default CalculatorApp