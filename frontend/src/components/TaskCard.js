import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, CardHeader, Divider, FormControlLabel, IconButton, Radio, RadioGroup } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

 function Tasks() {
  return (
    <Card sx={{ maxWidth: 420, padding:"4px 8px", margin:"16px" }}>
      <CardContent>
        <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <Typography variant="h5">
          Task Title
        </Typography>
        <Typography variant="subtitle1">
            Pending
          </Typography>
        </Box>
        <Divider />
        <Typography variant="subtitle2" color="text.secondary" margin={"16px 0"}>
          Task Description
          Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
        </Typography>
        <Divider />
        <Typography variant="body2" color="text.primary" margin={"16px 0"}>
          Due Date: 2023-05-27
        </Typography>
        <Divider />
      </CardContent>
      <CardActions sx={{display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:"0px"}}>
        <RadioGroup
        row
      >
        <FormControlLabel value="pending" checked control={<Radio size="small"/>} label="pending" />
        <FormControlLabel value="ongoing" control={<Radio size="small"/>} label="ongoing" />
        <FormControlLabel value="complete" control={<Radio size="small"/>} label="complete" />

      </RadioGroup>
      <IconButton sx={{color:"red", padding:"8px 0"}}>
        <DeleteIcon />
      </IconButton>
      <Link to="/edittask">
      <IconButton>
      <EditIcon />
      </IconButton>
      </Link>
      </CardActions>
    </Card>
  );
}

export default Tasks