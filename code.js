$(document).ready(()=>{
    const sendRequestToServer = (city) => {
        const url = `http://api.weatherapi.com/v1/current.json?key=9eff55cd1e2042779a1141950220407&q=${city}&aqi=no`

        $.get(url, function(resp) {
            $("#icon-image").attr("src", resp.current.condition.icon);
            $("#temperature").text(resp.current.temp_c + "°C")
            console.log(resp.current.temp_c)

        })
    }

    $("#myform").submit(function(e) {
        e.preventDefault();
        const city = $("#TextBar").val();
        sendRequestToServer(city);
    })
})