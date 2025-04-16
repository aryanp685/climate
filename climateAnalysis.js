function analyzeLocation() {
  const location = document.getElementById('locationInput').value;
  const results = document.getElementById('results');
  if(location=="nagpur"){
  results.innerHTML = `
      <h2>Microclimate Data for ${location}</h2>
      <ul>
          <li>Temperature: 38°C</li>
          <li>Humidity: 50%</li>
          <li>Surface Temperature: 42°C</li>
          <li>Green Cover: 28%</li>
          <li>UHI Index: High</li>
      </ul>
  `}

  else if(location=="chandrapur"){
    results.innerHTML = `
        <h2>Microclimate Data for ${location}</h2>
        <ul>
            <li>Temperature: 39°C</li>
            <li>Humidity: 49%</li>
            <li>Surface Temperature: 43°C</li>
            <li>Green Cover: 15%</li>
            <li>UHI Index: High</li>
        </ul>
    `}

    else if(location=="mumbai"){
      results.innerHTML = `
          <h2>Microclimate Data for ${location}</h2>
          <ul>
              <li>Temperature: 33°C</li>
              <li>Humidity: 55%</li>
              <li>Surface Temperature: 36°C</li>
              <li>Green Cover: 12%</li>
              <li>UHI Index: High</li>
          </ul>
      `}
  
      else if(location=="delhi"){
        results.innerHTML = `
            <h2>Microclimate Data for ${location}</h2>
            <ul>
                <li>Temperature: 29°C</li>
                <li>Humidity: 56%</li>
                <li>Surface Temperature: 34°C</li>
                <li>Green Cover: 9%</li>
                <li>UHI Index: High</li>
            </ul>
        `}
    
        else if(location=="jammu and kashmir"){
          results.innerHTML = `
              <h2>Microclimate Data for ${location}</h2>
              <ul>
                  <li>Temperature: 9°C</li>
                  <li>Humidity: 69%</li>
                  <li>Surface Temperature: 16°C</li>
                  <li>Green Cover: 30%</li>
                  <li>UHI Index: Low</li>
              </ul>
          `}
      
          else if(location=="wardha"){
            results.innerHTML = `
                <h2>Microclimate Data for ${location}</h2>
                <ul>
                    <li>Temperature: 32°C</li>
                    <li>Humidity: 48%</li>
                    <li>Surface Temperature: 39°C</li>
                    <li>Green Cover: 20%</li>
                    <li>UHI Index: High</li>
                </ul>
            `}
        else{
          results.innerHTML = `
          <h2>Microclimate Data for ${location}</h2>
          <ul>
              <li>Temperature: 28°C</li>
              <li>Humidity: 45%</li>
              <li>Surface Temperature: 32°C</li>
              <li>Green Cover: 19%</li>
              <li>UHI Index: High</li>
          </ul>
`
}
}
