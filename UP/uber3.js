var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');
var id_names = require("./id_name.json");
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
var port = process.env.PORT || 3000;
var router = express.Router();
var times;
var startUTC = 1464667200;
var endUTC = 1467172800;
var startID = 1116;
var endID;
var itemNum;

router.use(function(req, res, next) {
    // request(options, callback);
    next();
});

router.post('/', function(req, res, next) {
    res.send(res.query);
    startID = (req.query.startID);
    // startID = startIDnum.toString();
    endID = (req.query.endID);
    for (value in id_names) {
        if (endID == id_names[value].id) {
            itemNum = value;
            break;
        } else {
            itemNum = 2;
        }
    }

    console.log('Posting ' + startID, endID);
    request(options, callback);
    next();
});
router.get('/', function(req, res, next) {
    res.json(times);
    res.redirect('response');
    next();
});
var headers = {
    'Origin': 'https://movement.uber.com',
    'Accept-Encoding': 'gzip;q=0, deflate, br',
    'x-csrf-token': '1494258156-01-yCaoPIQshZs_4POlekt95tlxbMzKlG5LwIfGrYtwyK0',
    'Accept-Language': 'en-US,en;q=0.8',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Referer': 'https://movement.uber.com/explore/boston/travel-times/query?lat.=42.3584308&lng.=-71.0597732&z.=12&si=1116&ti=&ag=censustracts&dt[st]=07:00&dt[et]=18:00&dt[wd;]=1,2,3,4,5,6,7&dt[drs][0][sd]=2016-05-31T04:00:00.000Z&dt[drs][0][ed]=2016-06-28T04:00:00.000Z&cd=',
    'Connection': 'keep-alive',
    'Cookie': '__qca=P0-1442216905-1473871116261; mp_e39a4ba8174726fb79f6a6c77b7a5247_mixpanel=%7B%22distinct_id%22%3A%20%2215729907bf537e-0390d04e140f73-3d654c0a-1fa400-15729907bf6138%22%2C%22__mps%22%3A%20%7B%7D%2C%22__mpso%22%3A%20%7B%7D%2C%22__mpa%22%3A%20%7B%7D%2C%22__mpu%22%3A%20%7B%7D%2C%22__mpap%22%3A%20%5B%5D%2C%22Lead%20Page%22%3A%20%22https%3A%2F%2Fnewsroom.uber.com%2Fpittsburgh-self-driving-uber%2F%3Fref%3Dproducthunt%22%2C%22%24initial_referrer%22%3A%20%22%24direct%22%2C%22%24initial_referring_domain%22%3A%20%22%24direct%22%7D; _ga=GA1.2.161272548.1473871116; marketing_vistor_id=9be89e51-282f-4a12-835e-9b16073698c8; _udid=w_64f0963fa73543fe99ec8954b0ab2396; logged_in=true; sid=QA.CAESEIA40NQLNE84iZQFH6yQ5G4YtcXPywUiATEqJDg1MGNjYTE2LWUxM2UtNGJkYS04YWVjLTMxZGY1NmE4ZjY3ZTI8okGI513aRq_9zdlJZXNHKNOBRHWXiADXV24rDBQEBJzp0xMzkM-9TvgUzeHIIOtFqk1_0-I6kBYYDCrkOgEx.Vdztrz_xyNwUXXF6u5_DX24lnuquw7vR0vfSH3mvcnY; csid=1.1500766901832.S+tsU7+ASK/wqT85uD8VHNAXuowqD3+6pQUi1bSdQB8=; AMCV_0FEC8C3E55DB4B027F000101%40AdobeOrg=1611084164%7CMCMID%7C03646294766470423999034654638488004647; _ua=%7B%22id%22%3A%22d25fe3e5-e505-4fef-b22d-9110de4a499a%22%2C%22ts%22%3A1494118093409%7D; web-movement:sess=x2zeyoaCiJxAxypRiL9ufg.WdtsP9O3kYEPNezuYKbBT6Fq0eyNZ0eLxUjwrng5jF-9nvL3wjN-2ghRNfPsTJXSf0JzIdPgKD5Bnd6olGEqgfXsKH0ds8LpL2AfL6nQuI4-r2LA4Psf9KmSJQh8eLFeSee3CozZpG58sngwGAj08teA6qpyxt5OlgGQ4917Hn53IGYdB6GabATd4BmnLtBzmkMXefriK0jtH2eLiJzhtA.1494200462536.1209600000.Cnr4pj5qY-nNs0qRPYdvjOjPtCm6i57xtFVwvme00YE; fsid=973ghg8e-ocfr-jrus-sv0z-sr47y054c46e; utag_main=v_id:01560abe3536001c7bc3ac41b3860506e002506600bd0$_sn:14$_ss:0$_st:1494259957753$segment:a$dc_visit:8$optimizely_segment:b$ses_id:1494258124106%3Bexp-session$_pn:2%3Bexp-session$dc_event:35%3Bexp-session'
};

var dataString = `{"query":{"cityId":6,"dataSet":"censustracts","sourceId":"${startID}","timeRanges":[{"startTime":${startUTC},"endTime":${endUTC}}],"daysOfWeek":[1,2,3,4,5,6,7],"hoursOfDay":[7,8,9,10,11,12,13,14,15,16,17]}}`;
//post request
var options = {
    url: 'https://movement.uber.com/_rpc?rpc=GET_TRAVEL_TIMES',
    method: 'POST',
    headers: headers,
    body: dataString,
    encoding: 'utf8'
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        // unzipped=zlib.createGunzip(body);
        let bodyObject = JSON.parse(body);
        // console.log('data');
        // let data = JSON.parse(bodyObject.data);
        items = Object.keys(bodyObject.data);
        // console.log(items)
        // itemNum=Math.random(items.length)
        // console.log(items.length);

        times = bodyObject.data[items[itemNum]];
        locTag = items[itemNum]
        // console.log(locTag);
        for (elem in id_names) {
            // console.log(elem);
            if (id_names[elem].id == locTag) {
                // console.log('id '+id_names[elem].id)
                times.location = id_names[elem].name;
                // console.log('found');
                break;
            }
        }

        dataParse(times);
        console.log(times);
    }
}

function dataParse(times) {
    return times;
}
// router.post('/testing',function(req,res){
//   req.body.inPoint;
//   req.body.outPoint;
// });
app.get('/response', function(req, res) {
    //return json
    console.log(times);
    res.json(times);
});
app.get("/id_names", function(req, res) {
    res.json(id_names);
});
app.get('/demo', function(req, res) {
    res.sendfile("index.html");
});
app.use(router);
console.log('Defaults ' + startID, endID);
app.listen(port);
