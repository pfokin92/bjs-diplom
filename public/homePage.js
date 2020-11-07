const logout = new LogoutButton;

logout.action = () => ApiConnector.logout( (response) => {
    if (response.success) 
        location.reload();
} );

ApiConnector.current( (response) => {
        if (response.success)
        ProfileWidget.showProfile(response.data)
    }
)
rates = new RatesBoard;

function showRates() {
    ApiConnector.getStocks( (response) => {
        if (response.success) {
            rates.clearTable()
            rates.fillTable(response.data)
            console.log("Курсы валют загружены");
        }
    })
}


showRates()
setInterval(showRates, 1000*60)