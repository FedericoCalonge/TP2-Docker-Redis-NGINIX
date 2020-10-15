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
        "total": "20",
        "ok": "-",
        "ko": "20"
    },
    "maxResponseTime": {
        "total": "32094",
        "ok": "-",
        "ko": "32094"
    },
    "meanResponseTime": {
        "total": "14112",
        "ok": "-",
        "ko": "14112"
    },
    "standardDeviation": {
        "total": "8842",
        "ok": "-",
        "ko": "8842"
    },
    "percentiles1": {
        "total": "14839",
        "ok": "-",
        "ko": "14839"
    },
    "percentiles2": {
        "total": "22052",
        "ok": "-",
        "ko": "22052"
    },
    "percentiles3": {
        "total": "28165",
        "ok": "-",
        "ko": "28165"
    },
    "percentiles4": {
        "total": "31113",
        "ok": "-",
        "ko": "31113"
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
        "total": "4.167",
        "ok": "-",
        "ko": "4.167"
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
        "total": "13138",
        "ok": "-",
        "ko": "13138"
    },
    "maxResponseTime": {
        "total": "32094",
        "ok": "-",
        "ko": "32094"
    },
    "meanResponseTime": {
        "total": "21463",
        "ok": "-",
        "ko": "21463"
    },
    "standardDeviation": {
        "total": "5335",
        "ok": "-",
        "ko": "5335"
    },
    "percentiles1": {
        "total": "22053",
        "ok": "-",
        "ko": "22053"
    },
    "percentiles2": {
        "total": "26075",
        "ok": "-",
        "ko": "26075"
    },
    "percentiles3": {
        "total": "30165",
        "ok": "-",
        "ko": "30165"
    },
    "percentiles4": {
        "total": "31154",
        "ok": "-",
        "ko": "31154"
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
        "total": "2.083",
        "ok": "-",
        "ko": "2.083"
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
        "total": "20",
        "ok": "-",
        "ko": "20"
    },
    "maxResponseTime": {
        "total": "16994",
        "ok": "-",
        "ko": "16994"
    },
    "meanResponseTime": {
        "total": "6761",
        "ok": "-",
        "ko": "6761"
    },
    "standardDeviation": {
        "total": "4451",
        "ok": "-",
        "ko": "4451"
    },
    "percentiles1": {
        "total": "5989",
        "ok": "-",
        "ko": "5989"
    },
    "percentiles2": {
        "total": "7991",
        "ok": "-",
        "ko": "7991"
    },
    "percentiles3": {
        "total": "15972",
        "ok": "-",
        "ko": "15972"
    },
    "percentiles4": {
        "total": "16989",
        "ok": "-",
        "ko": "16989"
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
        "total": "2.083",
        "ok": "-",
        "ko": "2.083"
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
