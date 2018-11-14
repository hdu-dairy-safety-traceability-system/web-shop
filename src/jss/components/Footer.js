import splitLine from '../base/splitLineWithText'

export default {
  ...splitLine,
  color: '#222',
  '&::before,&::after': {
    ...splitLine['&::before,&::after'],
    top: '0.5em',
    width: '30%',
    height: '1px',
  }
}