var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "0",
        "ko": "200"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "-",
        "ko": "6"
    },
    "maxResponseTime": {
        "total": "1655",
        "ok": "-",
        "ko": "1655"
    },
    "meanResponseTime": {
        "total": "899",
        "ok": "-",
        "ko": "899"
    },
    "standardDeviation": {
        "total": "636",
        "ok": "-",
        "ko": "636"
    },
    "percentiles1": {
        "total": "807",
        "ok": "-",
        "ko": "807"
    },
    "percentiles2": {
        "total": "1556",
        "ok": "-",
        "ko": "1556"
    },
    "percentiles3": {
        "total": "1611",
        "ok": "-",
        "ko": "1611"
    },
    "percentiles4": {
        "total": "1643",
        "ok": "-",
        "ko": "1643"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 200,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "15.385",
        "ok": "-",
        "ko": "15.385"
    }
},
contents: {
"req_request-1-46da4": {
        type: "REQUEST",
        name: "request_1",
path: "request_1",
pathFormatted: "req_request-1-46da4",
stats: {
    "name": "request_1",
    "numberOfRequests": {
        "total": "100",
        "ok": "0",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "1181",
        "ok": "-",
        "ko": "1181"
    },
    "maxResponseTime": {
        "total": "1655",
        "ok": "-",
        "ko": "1655"
    },
    "meanResponseTime": {
        "total": "1521",
        "ok": "-",
        "ko": "1521"
    },
    "standardDeviation": {
        "total": "115",
        "ok": "-",
        "ko": "115"
    },
    "percentiles1": {
        "total": "1556",
        "ok": "-",
        "ko": "1556"
    },
    "percentiles2": {
        "total": "1595",
        "ok": "-",
        "ko": "1595"
    },
    "percentiles3": {
        "total": "1615",
        "ok": "-",
        "ko": "1615"
    },
    "percentiles4": {
        "total": "1645",
        "ok": "-",
        "ko": "1645"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 100,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.692",
        "ok": "-",
        "ko": "7.692"
    }
}
    },"req_request-2-93baf": {
        type: "REQUEST",
        name: "request_2",
path: "request_2",
pathFormatted: "req_request-2-93baf",
stats: {
    "name": "request_2",
    "numberOfRequests": {
        "total": "100",
        "ok": "0",
        "ko": "100"
    },
    "minResponseTime": {
        "total": "6",
        "ok": "-",
        "ko": "6"
    },
    "maxResponseTime": {
        "total": "432",
        "ok": "-",
        "ko": "432"
    },
    "meanResponseTime": {
        "total": "277",
        "ok": "-",
        "ko": "277"
    },
    "standardDeviation": {
        "total": "143",
        "ok": "-",
        "ko": "143"
    },
    "percentiles1": {
        "total": "328",
        "ok": "-",
        "ko": "328"
    },
    "percentiles2": {
        "total": "389",
        "ok": "-",
        "ko": "389"
    },
    "percentiles3": {
        "total": "422",
        "ok": "-",
        "ko": "422"
    },
    "percentiles4": {
        "total": "430",
        "ok": "-",
        "ko": "430"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 100,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.692",
        "ok": "-",
        "ko": "7.692"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
