function convertTemperature() {
    const tempInput = document.getElementById("temperature");
    const fromScale = document.getElementById("fromScale").value;
    const toScale = document.getElementById("toScale");
    const result = document.getElementById("result");
    const errorMessage = document.getElementById("errorMessage");

    const rawValue = tempInput.value;

    if(rawValue === "") {
        errorMessage.innerHTML = "*Give a value!!";
        result.innerHTML = "";
        return;
    }
    const value = Number(rawValue);
    if (isNaN(value)) {
        errorMessage.innerHTML ="*please enter a valid number";
        result.innerHTML = "";
        return;
    }
    const from = fromScale.value;
    const to = toScale.value;
    let celsius;
    if(from === "celsius") {
        celsius = value;
    } 
    else if (from === "fahrenheit") {
        celsius = (value -32) *5/9;
    }
    else if (from === "kelvin") {
        celsius = value -273.15;
    }

    let converted;
    if (to === "celsius") {
        converted = celsius;
    }
    else if (to === "fahrenheit") {
        converted = celsius * 9/5 + 32;
    }
    else if (to === "kelvin") {
        converted = celsius + 273.15;
    }
    
    const formatted = converted.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits:2
    });
    const unitSymbols = {
        celsius: "C",
        fahrenheit: "F",
        kelvin: "K"
    };
    result.innerHTML = `${formatted} ${unitsymbols[to]}`;

    function resetConverter() {
        document.getElementById("temperature").value = "";
        document.getElementById("fromScale").value = "celsius";
        document.getElementById("toScale").value = "celsius";
        document.getElementById("result").inner = "Result will appear here";
        document.getElementById("errorMessage").innerHTML = "";
    }
}