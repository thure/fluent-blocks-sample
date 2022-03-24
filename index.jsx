import {View, Escape} from "@fluent-blocks/react";
import basicIcons from '@fluent-blocks/basic-icons/basic-icons.svg';
import {render} from 'react-dom'

render(
  <View accentScheme='teams' basicSpriteUrl={basicIcons} main={{
    title: 'Hello, world.',
    blocks: [
      {
        message: {
          title: 'Let’s do this thing…',
          variant: 'big',
          media: {illustration: 'hello', label: 'Hello'},
          viewportHeight: false,
          actions: {
            primary: <Escape contentMeetsAccessibilityAndDesignStandards>
              <span>…for real this time.</span>
            </Escape>
          }
        }
      },
    ],
  }}/>,
  document.getElementById('root')
)
