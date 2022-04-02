/* eslint-disable @typescript-eslint/naming-convention */
import { GlobalStyleProps, mode } from '@chakra-ui/theme-tools';

export const styles = {
  global: (props: GlobalStyleProps) => ({
    fontFamily: 'body',
    color: mode('black', 'white')(props),
    'html, body, #root': {
      width: '100%',
      height: '100%',
    },
  }),
};
