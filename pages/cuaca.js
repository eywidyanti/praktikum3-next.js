import { useState } from 'react';

export default function Cuaca() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        if (!city) {
            setError("Masukkan nama kota terlebih dahulu.");
            return;
        }

        setError(null);
        setWeather(null);

        try {
            const response = await fetch(`/api/cuaca?city=${city}`);
            const data = await response.json();

            if (response.ok) {
                setWeather(data);
            } else {
                setError(data.error);
            }
        } catch (err) {
            setError("Gagal mengambil data cuaca.");
        }
    };

    return (
        <div>
        <div style={{ 
            maxWidth: '500px', 
            margin: '50px auto', 
            textAlign: 'center', 
            fontFamily: 'Arial', 
            backgroundColor: 'green', 
            color: 'white', 
            padding: '20px', 
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.2)'
        }}>
            <h1 style={{ marginBottom: '20px' }}><strong>Cuaca Saat Ini</strong></h1>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Masukkan nama kota"
                style={{ 
                    padding: '10px', 
                    width: '80%', 
                    marginBottom: '10px', 
                    textAlign: 'center',
                    borderRadius: '5px',
                    border: 'none'
                }}
            />
            <br />
            <button 
                onClick={fetchWeather} 
                style={{ 
                    padding: '10px 20px', 
                    cursor: 'pointer', 
                    background: 'white', 
                    color: 'blue',
                    border: 'none',
                    borderRadius: '5px',
                    fontWeight: 'bold'
                }}>
                 Cek Cuaca
            </button>

            {error && <p style={{ color: 'red', marginTop: '10px' }}><strong>{error}</strong></p>}

            {weather && (
                <div style={{ 
                    marginTop: '20px', 
                    border: '1px solid white', 
                    padding: '20px', 
                    borderRadius: '10px', 
                    background: '#0051a3'
                }}>
                    <h2>{weather.city}</h2>
                    <p>Suhu: {weather.temperature}°C</p>
                    <p>Cuaca: {weather.weather}</p>
                    <p>Kelembaban: {weather.humidity}%</p>
                    <p>Kecepatan Angin: {weather.windSpeed} m/s</p>
                </div>
            )}

        </div>
        
            <h1 style={{fontSize: '15px', marginTop: '50px'}}>3. API ROUTE - OpenWeatherMap</h1>
        </div>
    );
}
