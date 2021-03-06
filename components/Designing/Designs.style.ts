import { styled } from '../../styles/theme.config'

export const DesignsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  '@media only screen and (max-width: 414px)': {
    alignItems: 'center',
  },
})

export const DesignsHeader = styled('h1', {
  display: 'inline-block',
  background: '$gradient',
  width: 'fit-content',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: '$5',
  margin: '150px 100px',
  variants: {
    dribbble: {
      true: {
        margin: '50px 100px',
        '@media only screen and (max-width: 414px)': {
          margin: '50px 0',
        },
      },
    },
  },
  '@media only screen and (max-width: 414px)': {
    margin: '150px 0',
  },
})

export const DesignsBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  margin: 0,
})

export const DesignContainer = styled('div', {
  display: 'flex',
  width: '100vw',
  justifyContent: 'center',
  '@media only screen and (max-width: 1024px)': {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
})

export const FirstDesignContainer = styled('a', {
  width: 550,
  height: 630,
  transition: '0.1s linear',
  '&:hover': {
    transform: 'scale(0.99, 0.99)',
  },
  '@media only screen and (max-width: 414px)': {
    width: 340,
    height: 390,
  },
  '@media only screen and (max-width: 320px)': {
    width: 280,
    height: 320,
  },
})

export const SecondDesignContainer = styled('a', {
  marginLeft: 50,
  marginTop: 100,
  width: 550,
  height: 630,
  transition: '0.1s linear',
  '&:hover': {
    transform: 'scale(0.99, 0.99)',
  },
  '@media only screen and (max-width: 1024px)': {
    margin: '50px 0',
  },
  '@media only screen and (max-width: 414px)': {
    width: 340,
    height: 390,
  },
  '@media only screen and (max-width: 320px)': {
    width: 280,
    height: 320,
  },
})

export const DesignGraphic = styled('img', {
  width: 550,
  height: 630,
  '@media only screen and (max-width: 414px)': {
    width: 340,
    height: 390,
  },
  '@media only screen and (max-width: 320px)': {
    width: 280,
    height: 320,
  },
})

export const DribbbleContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  marginTop: 100,
})

export const DribbbleImageParent = styled('a', {
  width: 350,
  height: 300,
  overflow: 'hidden',
  borderRadius: 7,
  transition: '0.1s linear',
  '&:hover': {
    transform: 'translateY(7px)',
  },
  '@media only screen and (max-width: 320px)': {
    width: 250,
    height: 215,
  },
  '@media only screen and (max-width: 414px)': {
    width: 340,
    height: 290,
  },
  '@media only screen and (max-width: 768px)': {
    width: 300,
  },
})

export const DesignsGrid = styled('div', {
  width: 1150,
  display: 'grid',
  gap: '2rem',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 0fr))',
  overflow: 'hidden',
  placeItems: 'center',
  marginLeft: 100,
  '@media only screen and (max-width: 768px)': {
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 0fr))',
  },
  '@media only screen and (max-width: 414px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 0,
  },
})

export const DribbbleBox = styled('img', {
  transition: '0.1s linear',
  overflow: 'hidden',
  transform: 'translate(-200px, -120px)',
})
