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
        "total": "13",
        "ok": "-",
        "ko": "13"
    },
    "maxResponseTime": {
        "total": "2729",
        "ok": "-",
        "ko": "2729"
    },
    "meanResponseTime": {
        "total": "1428",
        "ok": "-",
        "ko": "1428"
    },
    "standardDeviation": {
        "total": "1197",
        "ok": "-",
        "ko": "1197"
    },
    "percentiles1": {
        "total": "1357",
        "ok": "-",
        "ko": "1357"
    },
    "percentiles2": {
        "total": "2638",
        "ok": "-",
        "ko": "2638"
    },
    "percentiles3": {
        "total": "2683",
        "ok": "-",
        "ko": "2683"
    },
    "percentiles4": {
        "total": "2720",
        "ok": "-",
        "ko": "2720"
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
        "total": "14.286",
        "ok": "-",
        "ko": "14.286"
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
        "total": "2341",
        "ok": "-",
        "ko": "2341"
    },
    "maxResponseTime": {
        "total": "2729",
        "ok": "-",
        "ko": "2729"
    },
    "meanResponseTime": {
        "total": "2622",
        "ok": "-",
        "ko": "2622"
    },
    "standardDeviation": {
        "total": "84",
        "ok": "-",
        "ko": "84"
    },
    "percentiles1": {
        "total": "2639",
        "ok": "-",
        "ko": "2639"
    },
    "percentiles2": {
        "total": "2662",
        "ok": "-",
        "ko": "2662"
    },
    "percentiles3": {
        "total": "2702",
        "ok": "-",
        "ko": "2702"
    },
    "percentiles4": {
        "total": "2725",
        "ok": "-",
        "ko": "2725"
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
        "total": "7.143",
        "ok": "-",
        "ko": "7.143"
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
        "total": "13",
        "ok": "-",
        "ko": "13"
    },
    "maxResponseTime": {
        "total": "373",
        "ok": "-",
        "ko": "373"
    },
    "meanResponseTime": {
        "total": "235",
        "ok": "-",
        "ko": "235"
    },
    "standardDeviation": {
        "total": "96",
        "ok": "-",
        "ko": "96"
    },
    "percentiles1": {
        "total": "273",
        "ok": "-",
        "ko": "273"
    },
    "percentiles2": {
        "total": "304",
        "ok": "-",
        "ko": "304"
    },
    "percentiles3": {
        "total": "345",
        "ok": "-",
        "ko": "345"
    },
    "percentiles4": {
        "total": "369",
        "ok": "-",
        "ko": "369"
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
        "total": "7.143",
        "ok": "-",
        "ko": "7.143"
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
