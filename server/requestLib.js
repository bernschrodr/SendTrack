const constants = require('./consts');
const fs = require('fs');
const fetch = require('node-fetch');

async function youtube(request, type) {

    let answerObject = { youtube: "" };
    let{track,artist,id} = request;
    const isCorrect = (track && artist) || id;

    if (!isCorrect) {
        return answerObject;
    }

    let youtubeOptions = { ...constants.YOUTUBE_OPTIONS };
    let requestUrl = "";
    switch (type) {
        case constants.SEARCH_REQUEST:
            requestUrl = "/search?q=" + artist + " " + track;
            break;
        case constants.TRACK_REQUEST:
            requestUrl = "/videos?id=" + id
            break;
        default:
            return answerObject;
    }

    requestUrl += "&part=snippet&key=" + constants.YOUTUBE_API_KEY;
    youtubeOptions.path = encodeURI(requestUrl);

    function setJson(json) {
        answerObject.youtube = json;
    }
    await fetch(youtubeOptions.url + requestUrl, youtubeOptions)
        .then(res => res.json())
        .then(json => {
            setJson(json);
            console.log(json)
        }).catch(e => console.log(e));

    return answerObject;
}

var spotifyToken;
async function tokenSpotify() {
    let token;
    if (spotifyToken) {
        token = spotifyToken
    }
    else {
        token = { key: "", date: 0 }
    }


    console.log(new Date(token.date).toString());
    console.log(new Date(Date.now() + 3600000).toString());

    if (token.key === "" || Date.now() > token.expires || token.date === 0) {

        function callback(json) {
            if (json) {

                let info = json;
                token = {
                    key: info.access_token,
                    date: Date.now(),
                    expires: Date.now() + 3600000
                }
                console.log(token.date.toString());
            } else
                console.log(json);
            console.log(token);
        }

        function error() {
            token = undefined;
        }

        await fetch(constants.SPOTIFY_TOKEN_OPTIONS.url
            , constants.SPOTIFY_TOKEN_OPTIONS)
            .then(res => res.json())
            .then(json => callback(json))
            .catch(e => {
                console.log(e);
                error();
            })

        spotifyToken = token;
        return spotifyToken;
    } else
        return { token: token.key, expires: token.expires };
};

async function spotify(request, type) {
    let answerObject = { spotify: "" };
    let {track,artist,id} = request;
    const isCorrect = (track && artist) || id;

    if (!isCorrect) {
        return answerObject;
    }
    
    let options = {
        ...constants.SPOTIFY_OPTIONS, headers: {
            "Authorization": "Bearer ",
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    };

    function setOptions(token) {
        options.headers["Authorization"] = "Bearer " + token;
    }

    for (let i = 0; i < 5; i++) {
        await tokenSpotify().then(token => {
            if (token && token.key)
                setOptions(token.key)
        })
        if (options.headers.Authorization !== 'Bearer ') {
            break;
        }
    }

    let requestUrl = "";
    switch (type) {
        case constants.SEARCH_REQUEST:
            requestUrl = "/search?q=" + artist + " " + track + "&type=track";
            break;
        case constants.TRACK_REQUEST:
            requestUrl = "/tracks/" + id;
            break;
        default:
            return answerObject;
    }

    function setJson(json) {
        answerObject.spotify = json;
    }

    options.url += requestUrl;

    await fetch(options.url, options)
        .then(res => res.json())
        .then(json => setJson(json))
        .catch(e => console.log(e));

    return answerObject;
}

async function deezer(request,type){
    let answerObject = { deezer: "" };
    let {track,artist,id} = request;
    const isCorrect = (track && artist) || id;

    if (!isCorrect) {
        return answerObject;
    }

    let options = {...constants.DEEZER_OPTIONS};
    let requestUrl = options.url;
    switch (type) {
        case constants.SEARCH_REQUEST:
            requestUrl += '/search?q=artist:"' + artist + '" track:"' + track + '"';
            break;
        case constants.TRACK_REQUEST:
            requestUrl += "/track/" + id;
            break;
        default:
            return answerObject;
    }

    function setJson(json) {
        answerObject.deezer = json;
        return answerObject.spotify;
    }

    await fetch(requestUrl, options)
        .then(res => res.json())
        .then(json => setJson(json))
        .catch(e => console.log(e));

    return answerObject;

}

exports.youtube = youtube;
exports.spotify = spotify;
exports.tokenSpotify = tokenSpotify;
exports.deezer  = deezer;