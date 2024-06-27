import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

export const ErrorApp = () => {
  const reloadPage = () => {
    location.reload()
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Произошла непредвиденная ошибка
      </Typography>
      <Button variant="outlined" onClick={reloadPage}>
        Обновить страницу
      </Button>
    </Box>
  )
}
