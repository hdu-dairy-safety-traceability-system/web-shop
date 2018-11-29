const splitLineWithText = {
  position: 'relative',
  fontWeight: 'normal',
  textAlign: 'center',
  margin: '0 auto',
  overflow: 'hidden',
  '&::before,&::after': {
    content: '""',
    position: 'absolute',
    width: '20%',
    height: '1.5px',
    display: 'block',
    background: '#222',
    top: '0.7em',
  },
  '&::before': {
    left: '0px',
  },
  '&::after': {
    right: '0px',
  }
}
export default splitLineWithText