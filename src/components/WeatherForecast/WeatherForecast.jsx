import "./WeatherForecast.css"
import { WeatherIcon } from "../WeatherIcon/WeatherIcon.jsx"
import { WeatherData } from "../WeatherData/WeatherData.jsx"

export const WeatherForecast = ({ forecast }) => {
  return (
    <div className="weather">
      <h2>{forecast.day}</h2>
      <WeatherIcon forecast={forecast} />
      <WeatherData forecast={forecast} />
    </div>
  )
}
