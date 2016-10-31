import { colors } from '../styles/theme';

const fullStyles = {
  background: colors.main,
  color: colors.brand,
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  height: '100%',
  margin: 0,
  padding: 0,
};

/*eslint-disable*/
const styles = {
  body: fullStyles,
  html: fullStyles,
  mediaQueries: {
    '(max-width: 600px)': { body: { background: colors.secondary } },
    '(max-width: 400px)': {
      body: { background: colors.brand },
      'p, h1': { color: 'white' },
    },
  },
};
/*eslint-enable*/

export default styles;
