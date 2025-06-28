import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./WeatherCard.css"

export default function WeatherCard({ data }) {
    const INIT_IMG = "https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    // let data = {
    //     city: "Bhilai",
    //     feelsLike: 25,
    //     temp: 25,
    //     tempMin: 22,
    //     tempMax: 28,
    //     humidity: 50,
    //     description: "mast",
    //     windSpeed: 7,
    // }

    return (
        <div className="WeatherCard">

            <Card sx={{ maxWidth: 400 }} className='card'>
                <CardMedia
                    sx={{ height: 200 }}
                    image={INIT_IMG}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {data.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: "italic" }}>
                        {data.description}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Temperature: {data.temp}&deg;C (Max: {data.tempMax}&deg;C/ Min: {data.tempMin}&deg;C)
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Humidity: {data.humidity}%
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Feels Like: {data.feelsLike}&deg;C
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Wind Speed: {data.windSpeed}km/hr
                    </Typography>
                </CardContent>

            </Card>
        </div>
    )
}