export default async function handler(req, res) {
    const API_KEY = 'c74bc8b809afd6b9280a948ad20474f3';
    const city = req.query.city || 'Malang'; // Default ke Malang jika tidak ada parameter

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );

        if (!response.ok) {
            throw new Error("Gagal mengambil data cuaca");
        }

        const data = await response.json();

        res.status(200).json({
            city: data.name,
            temperature: data.main.temp,
            weather: data.weather[0].description,
            humidity: data.main.humidity,
            windSpeed: data.wind.speed,
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
