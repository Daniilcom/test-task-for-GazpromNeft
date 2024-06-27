import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

export const Loader = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(255, 255, 255, 0.7)',
      }}
    >
      <CircularProgress />
    </Box>
  )
}
