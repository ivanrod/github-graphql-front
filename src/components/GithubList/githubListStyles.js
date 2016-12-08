import { colors } from '../../styles/theme';

/*eslint-disable*/
const styles = {
  base: {
    color: colors.secondary
  },

  counter: {
    display: 'inline-block',
    padding: '0.1rem 0.3rem',
    fontSize: '0.8rem',
    fontWeight: '600',
    lineHeight: '1',
    color: '#666',
    backgroundColor: '#eee',
    borderRadius: '1.1rem',
  },

  title: {
    color: '#333',
    display: 'block',
    padding: '9px 10px 10px',
    margin: '0',
    fontSize: '14px',
    lineHeight: '17px',
    backgroundColor: '#babec0',
    borderBottom: '0',
    borderRadius: '3px 3px 0 0',
  },

  boxedInner: {
    color: '#666',
    background: '#fff',
    border: '1px solid #d8d8d8',
    borderBottomRightRadius: '3px',
    borderBottomLeftRadius: '3px',
  },

  repoList: {
    listStyle: 'none',
    paddingLeft: 0,
    marginTop: 0,
    marginBottom: 0,
  },

  repoListItem: {
    position: 'relative',
    display: 'block',
    padding: '6px 64px 6px 30px',
    fontSize: '14px',
    borderTop: '1px solid #e5e5e5',
  }

};
/*eslint-enable*/

export default styles;
