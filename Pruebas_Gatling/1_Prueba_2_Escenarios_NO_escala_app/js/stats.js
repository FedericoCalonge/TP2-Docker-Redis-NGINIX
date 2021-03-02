var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "610",
        "ok": "554",
        "ko": "56"
    },
    "minResponseTime": {
        "total": "421",
        "ok": "421",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60064",
        "ok": "46162",
        "ko": "60064"
    },
    "meanResponseTime": {
        "total": "20462",
        "ok": "16463",
        "ko": "60023"
    },
    "standardDeviation": {
        "total": "14905",
        "ok": "8391",
        "ko": "25"
    },
    "percentiles1": {
        "total": "17107",
        "ok": "15043",
        "ko": "60002"
    },
    "percentiles2": {
        "total": "25212",
        "ok": "23173",
        "ko": "60050"
    },
    "percentiles3": {
        "total": "60002",
        "ok": "31052",
        "ko": "60061"
    },
    "percentiles4": {
        "total": "60058",
        "ok": "33366",
        "ko": "60062"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 552,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "count": 56,
    "percentage": 9
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.865",
        "ok": "5.327",
        "ko": "0.538"
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
        "ok": "261",
        "ko": "44"
    },
    "minResponseTime": {
        "total": "421",
        "ok": "421",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60064",
        "ok": "34857",
        "ko": "60064"
    },
    "meanResponseTime": {
        "total": "21775",
        "ok": "15326",
        "ko": "60029"
    },
    "standardDeviation": {
        "total": "17616",
        "ok": "8622",
        "ko": "25"
    },
    "percentiles1": {
        "total": "16988",
        "ok": "14068",
        "ko": "60041"
    },
    "percentiles2": {
        "total": "26291",
        "ok": "21891",
        "ko": "60054"
    },
    "percentiles3": {
        "total": "60049",
        "ok": "30432",
        "ko": "60061"
    },
    "percentiles4": {
        "total": "60061",
        "ok": "33667",
        "ko": "60063"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 1
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 259,
    "percentage": 85
},
    "group4": {
    "name": "failed",
    "count": 44,
    "percentage": 14
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.933",
        "ok": "2.51",
        "ko": "0.423"
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
        "ok": "293",
        "ko": "12"
    },
    "minResponseTime": {
        "total": "1745",
        "ok": "1745",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60004",
        "ok": "46162",
        "ko": "60004"
    },
    "meanResponseTime": {
        "total": "19150",
        "ok": "17476",
        "ko": "60001"
    },
    "standardDeviation": {
        "total": "11425",
        "ok": "8046",
        "ko": "1"
    },
    "percentiles1": {
        "total": "17119",
        "ok": "16140",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "24254",
        "ok": "24073",
        "ko": "60001"
    },
    "percentiles3": {
        "total": "33245",
        "ok": "31882",
        "ko": "60003"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "33249",
        "ko": "60004"
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
    "count": 293,
    "percentage": 96
},
    "group4": {
    "name": "failed",
    "count": 12,
    "percentage": 4
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.933",
        "ok": "2.817",
        "ko": "0.115"
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
