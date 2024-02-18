import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

export default function InputBox() {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        maxWidth: 700,
        width: '100%', // Set width to 100% for responsiveness
        margin: '0 auto', // Center the component
        borderRadius: '10px', // Remove border radius
      }}
    >
      <input
        className='ml-1 flex flex-1 bg-inherit border-none rounded-full outline-none'
        style={{
          ml: 1,
          flex: 1,
          width: '100%', // Set input width to 100% for responsiveness
        }}
        placeholder="Ask anything....."
        inputProps={{ 'aria-label': 'ask anything' }}
      />

      <IconButton
        color="secondary"
        sx={{
          p: '10px',
          borderRadius: '30%',
          backgroundColor: '#f5f5f5',
        }}
        aria-label="directions"
      >
        <ArrowUpwardOutlinedIcon />
      </IconButton>
    </Paper>
  );
}
