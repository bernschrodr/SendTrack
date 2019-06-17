var ServicesUrl = {
    YoutubeMusic: "youtube.music",
    Youtube: "youtube",

}

/*function CreateRequest(serviceObj){

    
    switch (serviceObj.service){
        case ServicesUrl.Youtube :
        var argarr = CreateYoutubeArguments(serviceObj.cutUrl);


            break;
    }
    


}*/

function requestYoutubeObject(argumentsObj) {

    var xhr = new XMLHttpRequest();
    var PREFIX = "";
    for(var argument in argumentsObj){
        PREFIX += argument + '='
    }


    xhr.open('GET', 'phones.json', false);

    // 3. Отсылаем запрос
    xhr.send();

    // 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
        // обработать ошибку
        alert(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    } else {
        // вывести результат
        alert(xhr.responseText); // responseText -- текст ответа.
    }
}

function CreateYoutubeMusicArguments() {

}

function CreateYoutubeArguments(serviceObj) {

    var urlSubstring = serviceObj.cutUrl;

    function eraseYoutubeWatchArg(urlSubstring) {
        var index = urlSubstring.indexOf('watch?');
        return urlSubstring.substring(index + 'watch?'.length);
    }

    var result = {};

    var arrayArguments = eraseYoutubeWatchArg(urlSubstring).split('&');
    for (var i = 0; i < arrayArguments.length; i++) {
        var index = arrayArguments[i].indexOf("=");
        var argument = arrayArguments[i].substring(0, index > 1 ? index - 1 : index);
        var value = arrayArguments[i].substring(index + 1, arrayArguments[i].length);
        result[argument] = value;
    }

    return result;

}

function eraseDomain(urlString) {
    var index = urlString.indexOf('/');
    return urlString.substring(index + 1);
}

function CheckService(inputUrl) {
    var index = -1;
    var serviceName = "";

    for (var Service in ServicesUrl) {
        var finded = checkServiceUrl(inputUrl, ServicesUrl[Service]);
        if (finded !== -1) {
            index = finded;
            serviceName = ServicesUrl[Service];
        }
    }

    var cutUrl = inputUrl.substring(index);
    cutUrl = eraseDomain(cutUrl);

    return {
        service: serviceName,
        cutUrl: cutUrl,
    }

}

function checkServiceUrl(urlString, serviceString) {
    var index = urlString.indexOf(serviceString);
    if (index !== -1)
        index += serviceString.length;

    return index;
}