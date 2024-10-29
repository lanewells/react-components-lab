export const WeatherData = ({ forecast }) => {
  return (
    <>
      <p>
        <span>conditions: </span>
        {forecast.conditions}
      </p>
      <p>
        <span>time: </span>
        {forecast.time}
      </p>
    </>
  )
}
