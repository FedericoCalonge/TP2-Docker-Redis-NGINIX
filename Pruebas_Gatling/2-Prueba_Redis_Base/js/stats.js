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
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5626",
        "ok": "5626",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1077",
        "ok": "1077",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2142",
        "ok": "2142",
        "ko": "-"
    },
    "percentiles1": {
        "total": "11",
        "ok": "11",
        "ko": "-"
    },
    "percentiles2": {
        "total": "211",
        "ok": "211",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5595",
        "ok": "5595",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5616",
        "ok": "5616",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 495,
    "percentage": 81
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 115,
    "percentage": 19
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
        "total": "5626",
        "ok": "5626",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2082",
        "ok": "2082",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2674",
        "ok": "2674",
        "ko": "-"
    },
    "percentiles1": {
        "total": "13",
        "ok": "13",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5574",
        "ok": "5574",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5608",
        "ok": "5608",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5622",
        "ok": "5622",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 190,
    "percentage": 62
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 115,
    "percentage": 38
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
        "total": "2",
        "ok": "2",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "257",
        "ok": "257",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "72",
        "ok": "72",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "percentiles1": {
        "total": "8",
        "ok": "8",
        "ko": "-"
    },
    "percentiles2": {
        "total": "161",
        "ok": "161",
        "ko": "-"
    },
    "percentiles3": {
        "total": "230",
        "ok": "230",
        "ko": "-"
    },
    "percentiles4": {
        "total": "245",
        "ok": "245",
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
