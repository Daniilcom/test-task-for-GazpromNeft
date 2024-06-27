import { useNavigate } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

export const NotFoundPage = () => {
  const navigate = useNavigate()

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
        404 - Страница не найдена
      </Typography>
      <Button variant="outlined" onClick={() => navigate(-1)}>
        Вернуться назад
      </Button>
    </Box>
  )
}
