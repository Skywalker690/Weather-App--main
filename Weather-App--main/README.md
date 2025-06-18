## **Weather App – Real-time Weather Information**  

### **Overview**  
The **Weather App** is a simple web application that allows users to check real-time weather updates for any city. It fetches weather data from the **OpenWeatherMap API** and displays key details such as **temperature, humidity, weather conditions, and an emoji representation** of the current weather.  

### **Features**  
- **User Input:** Enter a city name to fetch weather details.  
- **Live Weather Data:** Retrieves real-time weather information from the OpenWeatherMap API.  
- **Temperature & Humidity Display:** Shows temperature (Kelvin by default, with conversion options for Fahrenheit or Celsius) and humidity percentage.  
- **Weather Description & Emoji:** Displays a short weather description (e.g., "Clear sky") and an appropriate emoji based on the weather condition.  
- **Error Handling:** Provides error messages for invalid city names or network issues.  

### **Technologies Used**  
- **HTML & CSS** (for structure and styling)  
- **JavaScript (ES6+):** Fetch API, async/await, DOM manipulation  
- **OpenWeatherMap API** (for real-time weather data)  

### **How It Works**  
1. The user enters a city name in the input field and submits the form.  
2. The app sends a request to the OpenWeatherMap API to fetch weather data.  
3. If the request is successful, it displays:  
   - City Name  
   - Temperature (converted from Kelvin)  
   - Humidity Percentage  
   - Weather Description  
   - A relevant weather emoji  
4. If the request fails (e.g., invalid city name, no internet), an error message is displayed.  

