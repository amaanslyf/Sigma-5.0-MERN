import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({info}){
    const HOT_URL= "https://images.unsplash.com/photo-1594315590298-329f49c8dcb9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL= "https://images.unsplash.com/photo-1706696951283-04927dfe50a9?q=80&w=581&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL= "https://plus.unsplash.com/premium_photo-1675968514495-7f3be70dddd6?q=80&w=1616&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return (
        <div className='InfoBox'>
            <h3>Weather Info - <i>{info.weather}</i></h3>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
            info.humidity>80 ? RAIN_URL :
            info.temp>30 ? HOT_URL :
            COLD_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature: {info.temp}°C</p>
            <p>Feels Like: {info.feelsLike}°C</p>
            <p>Min Temperature: {info.tempMin}°C</p>
            <p>Max Temperature: {info.tempMax}°C</p>
            <p>Humidity: {info.humidity}%</p>
          
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}