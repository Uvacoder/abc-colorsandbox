import * as React from 'react'
import { alpha } from '@allthings/colors'
import { View } from '@allthings/elements'
import Text from '../components/Text'
import { matchingTextColor } from '../utils/contrast'
import { textColors } from '../utils/palette'
import Drop from './Drop'

class Logo extends React.Component {
  public render(): JSX.Element {
    const bgColor = document.body.style.backgroundColor || '#ffffff'
    const textColor = matchingTextColor(textColors.dark, bgColor)

    return (
      <View
        direction="row"
        fill
        alignH="start"
        alignV="center"
        style={{ marginLeft: 10 }}
      >
        <Drop color="#24C333" gradientColor="#13A021" size={0.07} />
        <View style={{ marginLeft: 5, textTransform: 'uppercase' }}>
          <Text logoFont color={textColor} size="xs">
            scenario
          </Text>
        </View>
      </View>
    )
  }
}

export default Logo
