function newSettings(){
    var apiKey = document.getElementById('apiKey').value;
    var sheetID = document.getElementById('sheetID').value;
    var alertDanger = document.getElementById('alertDanger');
    var alertSucc = document.getElementById('alertSucc');
    if (apiKey && sheetID != ""){
        alertSucc.style.display = 'block'
        alertDanger.style.display = 'none';
        userSettings = [apiKey, sheetID]
        localStorage.setItem('userSettings', JSON.stringify(userSettings));
        showSettings();
    }
    else{
        alertSucc.style.display = 'none'
        alertDanger.style.display = 'block';
    }
}

function showSettings(){
    userSettings = JSON.parse(localStorage.getItem('userSettings')) || [];
    var apiKeyShow = document.getElementById('apiKeyShow');
    var sheetIDShow = document.getElementById('sheetIDShow');
    apiKeyShow.value = userSettings[0];
    sheetIDShow.value = userSettings[1];
}

var userSettings = JSON.parse(localStorage.getItem('userSettings')) || [];

var newSettingsBtn = document.getElementById('newSettingsBtn');

newSettingsBtn.addEventListener('click', newSettings);
showSettings();