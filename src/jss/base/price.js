export const price = {
  color: '#f8513b',
  fontSize: '1.3em',
  fontWeight: '700',
  margin: '0 0',
  '&::before': {
    //@ref  https://stackoverflow.com/questions/40965977/cant-target-before-pseudo-selector-in-jss
    content: '"¥"',
    marginRight: '3px',
  },
}
export default price
