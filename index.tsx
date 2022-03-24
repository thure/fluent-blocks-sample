import {View, Escape} from "@fluent-blocks/react";
import {render} from 'react-dom'
// @ts-ignore
import basicIcons from '@fluent-blocks/basic-icons/basic-icons.svg';

render(
  <View accentScheme='teams' iconSpriteUrl={basicIcons} main={{
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
