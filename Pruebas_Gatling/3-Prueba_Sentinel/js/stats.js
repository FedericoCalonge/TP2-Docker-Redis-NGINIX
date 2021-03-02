var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "610",
        "ok": "610",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1300",
        "ok": "1300",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "263",
        "ok": "263",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "471",
        "ok": "471",
        "ko": "-"
    },
    "percentiles1": {
        "total": "10",
        "ok": "10",
        "ko": "-"
    },
    "percentiles2": {
        "total": "183",
        "ok": "183",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1269",
        "ok": "1269",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1293",
        "ok": "1293",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 499,
    "percentage": 82
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 107,
    "percentage": 18
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "12.449",
        "ok": "12.449",
        "ko": "-"
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
        "total": "305",
        "ok": "305",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "3",
        "ok": "3",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1300",
        "ok": "1300",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "464",
        "ok": "464",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "597",
        "ok": "597",
        "ko": "-"
    },
    "percentiles1": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1242",
        "ok": "1242",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1285",
        "ok": "1285",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1297",
        "ok": "1297",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 194,
    "percentage": 64
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 4,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 107,
    "percentage": 35
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.224",
        "ok": "6.224",
        "ko": "-"
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
        "total": "305",
        "ok": "305",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "1",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "257",
        "ok": "257",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "61",
        "ok": "61",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "80",
        "ok": "80",
        "ko": "-"
    },
    "percentiles1": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "percentiles2": {
        "total": "152",
        "ok": "152",
        "ko": "-"
    },
    "percentiles3": {
        "total": "205",
        "ok": "205",
        "ko": "-"
    },
    "percentiles4": {
        "total": "233",
        "ok": "233",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 305,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "6.224",
        "ok": "6.224",
        "ko": "-"
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
