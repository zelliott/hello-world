var freqData=[
	{State:'AL',freq:{low:4786, mid:1319, high:249}}
	,{State:'AZ',freq:{low:1101, mid:412, high:674}}
	,{State:'CT',freq:{low:932, mid:2149, high:418}}
	,{State:'DE',freq:{low:832, mid:1152, high:1862}}
	,{State:'FL',freq:{low:4481, mid:3304, high:948}}
	,{State:'GA',freq:{low:1619, mid:167, high:1063}}
	,{State:'IA',freq:{low:1819, mid:247, high:1203}}
	,{State:'IL',freq:{low:4498, mid:3852, high:942}}
	,{State:'IN',freq:{low:797, mid:1849, high:1534}}
	,{State:'KS',freq:{low:162, mid:379, high:471}}
];

//var data;
//d3.json("https://s3-us-west-2.amazonaws.com/govpredict.development/congress/cosponsors_cosponsors_by_congress.json", function(error, json) {
//  if (error) return console.warn(error);
//  data = json;
//  console.log(data);
//});

var num_name_map = {
  "Name": 101010,
  "Name 2": 1189
};

var data = {
  "h": {
    "110": {
      "00102": {
        "committees": [

        ],
        "cosponsors": {
          "01681": {
            "count_cosponsored": 46,
            "committees": [
              "HSAS",
              "HSII",
              "HSSM",
              "HSPW"
            ]
          },
          "01513": {
            "count_cosponsored": 32,
            "committees": [
              "HSIF"
            ]
          },
          "00868": {
            "count_cosponsored": 8,
            "committees": [
              "HSHM",
              "HSGO",
              "HSPW"
            ]
          },
          "01510": {
            "count_cosponsored": 9,
            "committees": [
              "HSHM",
              "HSWM"
            ]
          },
          "01874": {
            "count_cosponsored": 9,
            "committees": [
              "HSAS",
              "HSED",
              "HSSM"
            ]
          },
          "00299": {
            "count_cosponsored": 12,
            "committees": [
              "HSIF"
            ]
          },
          "01804": {
            "count_cosponsored": 51,
            "committees": [
              "HSFA",
              "HSHM",
              "HSSY",
              "HSSO"
            ]
          },
          "01188": {
            "count_cosponsored": 7,
            "committees": [
              "HSAP"
            ]
          },
          "00502": {
            "count_cosponsored": 10,
            "committees": [
              "HSIF",
              "HSHM"
            ]
          },
          "00689": {
            "count_cosponsored": 34,
            "committees": [
              "HSWM"
            ]
          },
          "01877": {
            "count_cosponsored": 58,
            "committees": [
              "HSED",
              "HSHM",
              "HSSM"
            ]
          },
          "01668": {
            "count_cosponsored": 7,
            "committees": [
              "HSHM",
              "HLIG"
            ]
          },
          "01884": {
            "count_cosponsored": 2,
            "committees": [
              "HSAS",
              "HSBU"
            ]
          },
          "01832": {
            "count_cosponsored": 10,
            "committees": [
              "HSSY",
              "HSPW",
              "HSVR"
            ]
          },
          "01558": {
            "count_cosponsored": 6,
            "committees": [
              "HSIF",
              "HSJU"
            ]
          },
          "01834": {
            "count_cosponsored": 54,
            "committees": [
              "HSAS",
              "HSII",
              "HSVR"
            ]
          },
          "01779": {
            "count_cosponsored": 41,
            "committees": [
              "HSGO",
              "HSSM",
              "HSPW"
            ]
          },
          "01491": {
            "count_cosponsored": 6,
            "committees": [
              "HSBU",
              "HSIF",
              "HSSY"
            ]
          },
          "00113": {
            "count_cosponsored": 12,
            "committees": [
              "HSIF",
              "HSJU"
            ]
          },
          "00587": {
            "count_cosponsored": 9,
            "committees": [
              "HSAP"
            ]
          },
          "01656": {
            "count_cosponsored": 33,
            "committees": [
              "HSAG",
              "HSSM",
              "HSPW"
            ]
          },
          "01480": {
            "count_cosponsored": 9,
            "committees": [
              "HSFA",
              "HSJU",
              "HSSO"
            ]
          },
          "00805": {
            "count_cosponsored": 2,
            "committees": [

            ]
          },
          "01101": {
            "count_cosponsored": 5,
            "committees": [
              "JSTX",
              "HSWM"
            ]
          },
          "00666": {
            "count_cosponsored": 39,
            "committees": [
              "HSAP"
            ]
          },
          "01885": {
            "count_cosponsored": 36,
            "committees": [
              "HSAG",
              "HSPW"
            ]
          },
          "01634": {
            "count_cosponsored": 13,
            "committees": [
              "HSAP"
            ]
          },
          "01683": {
            "count_cosponsored": 41,
            "committees": [
              "HSAS",
              "HSJU"
            ]
          },
          "01738": {
            "count_cosponsored": 35,
            "committees": [
              "HSBA",
              "HSII"
            ]
          },
          "01595": {
            "count_cosponsored": 15,
            "committees": [
              "HSAS",
              "HSII",
              "HSSY"
            ]
          },
          "01064": {
            "count_cosponsored": 17,
            "committees": [
              "HSAS"
            ]
          },
          "01137": {
            "count_cosponsored": 10,
            "committees": [
              "HSFA",
              "HSWM"
            ]
          },
          "01802": {
            "count_cosponsored": 50,
            "committees": [
              "HSFA",
              "HSPW"
            ]
          },
          "00566": {
            "count_cosponsored": 9,
            "committees": [

            ]
          },
          "01043": {
            "count_cosponsored": 48,
            "committees": [
              "HSIF"
            ]
          },
          "01596": {
            "count_cosponsored": 33,
            "committees": [
              "HSIF"
            ]
          },
          "00902": {
            "count_cosponsored": 7,
            "committees": [
              "HSED",
              "HSFA"
            ]
          },
          "01811": {
            "count_cosponsored": 6,
            "committees": [
              "HSBU",
              "HSBA",
              "HSSM"
            ]
          },
          "01587": {
            "count_cosponsored": 30,
            "committees": [
              "HSWM"
            ]
          },
          "00231": {
            "count_cosponsored": 11,
            "committees": [
              "HSAS",
              "HSBU",
              "HSGO"
            ]
          },
          "01749": {
            "count_cosponsored": 59,
            "committees": [
              "HSBU",
              "HSBA"
            ]
          },
          "00367": {
            "count_cosponsored": 3,
            "committees": [
              "HSFA",
              "HSII"
            ]
          },
          "00303": {
            "count_cosponsored": 3,
            "committees": [
              "JSEC",
              "HSBU",
              "HSWM"
            ]
          },
          "01482": {
            "count_cosponsored": 12,
            "committees": [
              "HSAG",
              "HSBU",
              "HSHM"
            ]
          },
          "00407": {
            "count_cosponsored": 6,
            "committees": [
              "HSBA"
            ]
          },
          "00281": {
            "count_cosponsored": 5,
            "committees": [
              "HSAP",
              "HSBU"
            ]
          },
          "01880": {
            "count_cosponsored": 10,
            "committees": [
              "HSAG",
              "HSPW"
            ]
          },
          "01003": {
            "count_cosponsored": 4,
            "committees": [
              "HSIF"
            ]
          },
          "00541": {
            "count_cosponsored": 5,
            "committees": [
              "JSEC",
              "HSAP",
              "HSII"
            ]
          },
          "00922": {
            "count_cosponsored": 6,
            "committees": [
              "HSAG",
              "HSWM"
            ]
          },
          "01151": {
            "count_cosponsored": 5,
            "committees": [
              "HSHM"
            ]
          },
          "00930": {
            "count_cosponsored": 6,
            "committees": [
              "HSAP"
            ]
          },
          "01890": {
            "count_cosponsored": 4,
            "committees": [

            ]
          },
          "01730": {
            "count_cosponsored": 14,
            "committees": [
              "HSSM",
              "HSPW",
              "HSVR"
            ]
          },
          "00717": {
            "count_cosponsored": 36,
            "committees": [
              "JSLC",
              "HSBU",
              "HSHM",
              "HSHA",
              "HSJU"
            ]
          },
          "01184": {
            "count_cosponsored": 4,
            "committees": [
              "HSBA",
              "HSSM"
            ]
          },
          "01583": {
            "count_cosponsored": 9,
            "committees": [
              "HSWM"
            ]
          },
          "01207": {
            "count_cosponsored": 7,
            "committees": [
              "HSBA",
              "HSJU"
            ]
          },
          "01879": {
            "count_cosponsored": 9,
            "committees": [
              "HSGO",
              "HSRU"
            ]
          },
          "01209": {
            "count_cosponsored": 9,
            "committees": [
              "HSIF",
              "HSGO"
            ]
          },
          "00877": {
            "count_cosponsored": 3,
            "committees": [
              "HSAP"
            ]
          },
          "00688": {
            "count_cosponsored": 8,
            "committees": [
              "HSWM"
            ]
          },
          "01567": {
            "count_cosponsored": 7,
            "committees": [
              "HSAP"
            ]
          },
          "00997": {
            "count_cosponsored": 12,
            "committees": [
              "HSAP",
              "HSSO"
            ]
          },
          "01861": {
            "count_cosponsored": 6,
            "committees": [
              "HSAS",
              "HSED"
            ]
          },
          "01846": {
            "count_cosponsored": 7,
            "committees": [
              "HSAS",
              "HSED"
            ]
          },
          "00683": {
            "count_cosponsored": 8,
            "committees": [
              "JSTX",
              "HSWM"
            ]
          },
          "00478": {
            "count_cosponsored": 11,
            "committees": [
              "HSBA",
              "HSJU"
            ]
          },
          "01857": {
            "count_cosponsored": 6,
            "committees": [
              "HSBA",
              "HSJU"
            ]
          },
          "00132": {
            "count_cosponsored": 11,
            "committees": [
              "HSPW",
              "HSVR"
            ]
          },
          "00099": {
            "count_cosponsored": 11,
            "committees": [
              "HSBU",
              "HSWM"
            ]
          },
          "01069": {
            "count_cosponsored": 6,
            "committees": [
              "HSRU"
            ]
          },
          "01854": {
            "count_cosponsored": 4,
            "committees": [
              "HSED",
              "HSII",
              "HSGO"
            ]
          },
          "01686": {
            "count_cosponsored": 7,
            "committees": [
              "HSBA",
              "HSGO"
            ]
          },
          "01564": {
            "count_cosponsored": 11,
            "committees": [
              "JSPR",
              "HSBA",
              "HSHA",
              "HSPW"
            ]
          },
          "01504": {
            "count_cosponsored": 13,
            "committees": [
              "HSBU",
              "HSRU"
            ]
          },
          "01781": {
            "count_cosponsored": 9,
            "committees": [
              "HSSY",
              "HSSM",
              "HSPW"
            ]
          },
          "01723": {
            "count_cosponsored": 12,
            "committees": [
              "HSAS",
              "HSII"
            ]
          },
          "00735": {
            "count_cosponsored": 5,
            "committees": [
              "HSIF",
              "HSHM",
              "HSII"
            ]
          },
          "01598": {
            "count_cosponsored": 9,
            "committees": [
              "HSED",
              "HSFA",
              "HSSY"
            ]
          },
          "00511": {
            "count_cosponsored": 8,
            "committees": [
              "HSRU"
            ]
          },
          "00824": {
            "count_cosponsored": 9,
            "committees": [
              "HSAP"
            ]
          },
          "01256": {
            "count_cosponsored": 40,
            "committees": [
              "HSII",
              "HSPW"
            ]
          },
          "01785": {
            "count_cosponsored": 9,
            "committees": [

            ]
          },
          "01597": {
            "count_cosponsored": 8,
            "committees": [
              "HSIF",
              "HSJU"
            ]
          },
          "01853": {
            "count_cosponsored": 8,
            "committees": [
              "HSED",
              "HSGO"
            ]
          },
          "01537": {
            "count_cosponsored": 11,
            "committees": [
              "HSBA",
              "HSFA",
              "HSJU"
            ]
          },
          "00887": {
            "count_cosponsored": 9,
            "committees": [
              "HSIF",
              "HSII"
            ]
          },
          "01875": {
            "count_cosponsored": 12,
            "committees": [
              "HSAS",
              "HLIG"
            ]
          },
          "01498": {
            "count_cosponsored": 15,
            "committees": [
              "HSII",
              "HSWM"
            ]
          },
          "01830": {
            "count_cosponsored": 9,
            "committees": [
              "HSSY",
              "HSPW",
              "HSVR"
            ]
          },
          "00729": {
            "count_cosponsored": 11,
            "committees": [
              "JSEC",
              "HSBA",
              "HSGO"
            ]
          },
          "01841": {
            "count_cosponsored": 14,
            "committees": [
              "HSAG",
              "HSBA"
            ]
          },
          "01842": {
            "count_cosponsored": 11,
            "committees": [
              "HSBA",
              "HSFA"
            ]
          },
          "01708": {
            "count_cosponsored": 11,
            "committees": [
              "HSED",
              "HSII",
              "HSSM"
            ]
          },
          "00371": {
            "count_cosponsored": 6,
            "committees": [
              "HSAP"
            ]
          },
          "00344": {
            "count_cosponsored": 13,
            "committees": [
              "HSIF",
              "HSFA"
            ]
          },
          "00316": {
            "count_cosponsored": 17,
            "committees": [
              "HSIF",
              "HSSO",
              "HSVR"
            ]
          },
          "01836": {
            "count_cosponsored": 10,
            "committees": [
              "HSAS",
              "HSED"
            ]
          },
          "01878": {
            "count_cosponsored": 18,
            "committees": [
              "HSJU",
              "HSPW"
            ]
          },
          "01876": {
            "count_cosponsored": 15,
            "committees": [
              "HSHM",
              "HSPW"
            ]
          },
          "01840": {
            "count_cosponsored": 27,
            "committees": [
              "HSSM",
              "HSPW",
              "HSVR"
            ]
          },
          "01867": {
            "count_cosponsored": 9,
            "committees": [
              "HSRU",
              "HSPW"
            ]
          },
          "00021": {
            "count_cosponsored": 10,
            "committees": [
              "HSAS",
              "HSBU",
              "HSED"
            ]
          },
          "01461": {
            "count_cosponsored": 12,
            "committees": [
              "HSBU",
              "HSIF"
            ]
          },
          "01869": {
            "count_cosponsored": 15,
            "committees": [
              "HSBA",
              "HSSY"
            ]
          },
          "01870": {
            "count_cosponsored": 11,
            "committees": [
              "HSJU",
              "HSRU"
            ]
          },
          "01756": {
            "count_cosponsored": 15,
            "committees": [
              "HSAP"
            ]
          },
          "01851": {
            "count_cosponsored": 11,
            "committees": [
              "HSAG",
              "HSAS",
              "HSSM"
            ]
          },
          "00900": {
            "count_cosponsored": 20,
            "committees": [
              "JSEC",
              "HSBA",
              "HSFA"
            ]
          },
          "01071": {
            "count_cosponsored": 23,
            "committees": [
              "HSFA"
            ]
          },
          "01469": {
            "count_cosponsored": 14,
            "committees": [
              "JSPR",
              "JSLC",
              "HSAS",
              "HSHA"
            ]
          },
          "01728": {
            "count_cosponsored": 8,
            "committees": [
              "HSAP",
              "HLIG"
            ]
          },
          "01516": {
            "count_cosponsored": 13,
            "committees": [
              "HSAS",
              "HLIG"
            ]
          },
          "00785": {
            "count_cosponsored": 10,
            "committees": [
              "HSWM"
            ]
          },
          "01845": {
            "count_cosponsored": 7,
            "committees": [
              "HSGO",
              "HSSM",
              "HSPW"
            ]
          },
          "00667": {
            "count_cosponsored": 33,
            "committees": [
              "HSBA",
              "HSPW"
            ]
          },
          "01803": {
            "count_cosponsored": 9,
            "committees": [
              "HSBA",
              "HSHM"
            ]
          },
          "00438": {
            "count_cosponsored": 23,
            "committees": [
              "HSII",
              "HSPW"
            ]
          },
          "01888": {
            "count_cosponsored": 7,
            "committees": [
              "HSBA"
            ]
          },
          "01852": {
            "count_cosponsored": 16,
            "committees": [
              "HSAG",
              "HSAS"
            ]
          },
          "00238": {
            "count_cosponsored": 12,
            "committees": [
              "HSSY",
              "HSPW"
            ]
          },
          "00002": {
            "count_cosponsored": 12,
            "committees": [
              "HSAS",
              "HSII"
            ]
          },
          "01731": {
            "count_cosponsored": 32,
            "committees": [
              "HSHM",
              "HSPW"
            ]
          },
          "01484": {
            "count_cosponsored": 26,
            "committees": [
              "HSIF"
            ]
          },
          "01709": {
            "count_cosponsored": 16,
            "committees": [
              "HSAG",
              "HSRU"
            ]
          },
          "01674": {
            "count_cosponsored": 50,
            "committees": [
              "HSWM"
            ]
          },
          "01871": {
            "count_cosponsored": 18,
            "committees": [
              "HSAG",
              "HSPW",
              "HSVR"
            ]
          },
          "01775": {
            "count_cosponsored": 9,
            "committees": [
              "HSAG",
              "HSPW",
              "HSVR"
            ]
          },
          "01706": {
            "count_cosponsored": 30,
            "committees": [

            ]
          },
          "00880": {
            "count_cosponsored": 12,
            "committees": [
              "HSAS",
              "HSII"
            ]
          },
          "01507": {
            "count_cosponsored": 28,
            "committees": [
              "HSAG",
              "HSPW",
              "HSVR"
            ]
          },
          "01675": {
            "count_cosponsored": 9,
            "committees": [
              "HSAS",
              "HSSM",
              "HSPW"
            ]
          },
          "01648": {
            "count_cosponsored": 22,
            "committees": [
              "HSAG",
              "HSPW"
            ]
          },
          "01843": {
            "count_cosponsored": 11,
            "committees": [
              "HSAS",
              "HSJU",
              "HSSM"
            ]
          },
          "00510": {
            "count_cosponsored": 16,
            "committees": [

            ]
          },
          "01891": {
            "count_cosponsored": 4,
            "committees": [

            ]
          },
          "01849": {
            "count_cosponsored": 15,
            "committees": [
              "HSED",
              "HSVR"
            ]
          },
          "01866": {
            "count_cosponsored": 12,
            "committees": [
              "HSAG",
              "HSAS"
            ]
          },
          "01761": {
            "count_cosponsored": 9,
            "committees": [
              "HSIF"
            ]
          },
          "01747": {
            "count_cosponsored": 20,
            "committees": [
              "HSAG",
              "HSBA"
            ]
          },
          "00091": {
            "count_cosponsored": 16,
            "committees": [
              "HSAP"
            ]
          },
          "01255": {
            "count_cosponsored": 25,
            "committees": [
              "HSAP"
            ]
          },
          "00297": {
            "count_cosponsored": 3,
            "committees": [
              "HSAP",
              "HSHM"
            ]
          },
          "01539": {
            "count_cosponsored": 25,
            "committees": [
              "HSIF",
              "HLIG"
            ]
          },
          "01042": {
            "count_cosponsored": 8,
            "committees": [
              "HSAP"
            ]
          },
          "01216": {
            "count_cosponsored": 29,
            "committees": [
              "HSWM"
            ]
          },
          "01215": {
            "count_cosponsored": 38,
            "committees": [
              "HSAP"
            ]
          },
          "01158": {
            "count_cosponsored": 39,
            "committees": [
              "HSAP",
              "HLIG"
            ]
          },
          "01592": {
            "count_cosponsored": 28,
            "committees": [
              "HSFA",
              "HSII"
            ]
          },
          "01089": {
            "count_cosponsored": 46,
            "committees": [
              "HSED",
              "HSHM",
              "HSGO"
            ]
          },
          "01860": {
            "count_cosponsored": 43,
            "committees": [
              "HSAG",
              "HSBU",
              "HSII",
              "HSSY"
            ]
          },
          "01590": {
            "count_cosponsored": 30,
            "committees": [
              "HSAP",
              "HSBU"
            ]
          },
          "01848": {
            "count_cosponsored": 42,
            "committees": [
              "HSBA"
            ]
          },
          "01794": {
            "count_cosponsored": 10,
            "committees": [
              "HSGO",
              "HSSM",
              "HSPW"
            ]
          },
          "01722": {
            "count_cosponsored": 12,
            "committees": [
              "HSAG",
              "HSBA",
              "HSFA"
            ]
          },
          "01792": {
            "count_cosponsored": 56,
            "committees": [
              "HSBU",
              "HSBA",
              "HSGO"
            ]
          },
          "00733": {
            "count_cosponsored": 45,
            "committees": [
              "HSBA",
              "HSFA"
            ]
          },
          "00642": {
            "count_cosponsored": 26,
            "committees": [
              "HSAP"
            ]
          },
          "00462": {
            "count_cosponsored": 13,
            "committees": [
              "HSIF",
              "HSFA",
              "HSSO"
            ]
          },
          "01647": {
            "count_cosponsored": 29,
            "committees": [
              "HSAP"
            ]
          },
          "01492": {
            "count_cosponsored": 28,
            "committees": [
              "HSWM"
            ]
          },
          "01801": {
            "count_cosponsored": 46,
            "committees": [
              "HSJU",
              "HSII",
              "HSSM"
            ]
          },
          "01716": {
            "count_cosponsored": 64,
            "committees": [
              "HSBA",
              "HSJU",
              "HSSY"
            ]
          },
          "01784": {
            "count_cosponsored": 46,
            "committees": [
              "HSAS",
              "HSBA"
            ]
          },
          "01470": {
            "count_cosponsored": 36,
            "committees": [
              "HSJU",
              "HSII",
              "HSGO"
            ]
          },
          "00166": {
            "count_cosponsored": 46,
            "committees": [
              "HSWM"
            ]
          },
          "01753": {
            "count_cosponsored": 29,
            "committees": [
              "HSAS",
              "HSED",
              "HSII"
            ]
          },
          "00062": {
            "count_cosponsored": 29,
            "committees": [
              "HSIF"
            ]
          },
          "01503": {
            "count_cosponsored": 8,
            "committees": [
              "HSED",
              "HSBA"
            ]
          },
          "01682": {
            "count_cosponsored": 8,
            "committees": [
              "HSFA",
              "HSGO"
            ]
          },
          "01743": {
            "count_cosponsored": 39,
            "committees": [
              "HSBA",
              "HSPW"
            ]
          },
          "01855": {
            "count_cosponsored": 63,
            "committees": [
              "HSAG",
              "HSED"
            ]
          },
          "01177": {
            "count_cosponsored": 40,
            "committees": [
              "HSIF"
            ]
          },
          "01499": {
            "count_cosponsored": 10,
            "committees": [
              "HSED",
              "HSGO"
            ]
          },
          "01790": {
            "count_cosponsored": 10,
            "committees": [
              "HSBA"
            ]
          },
          "01856": {
            "count_cosponsored": 11,
            "committees": [
              "HSAG",
              "HSPW",
              "HSVR"
            ]
          },
          "01037": {
            "count_cosponsored": 8,
            "committees": [
              "HSBU",
              "HSED",
              "HSJU"
            ]
          },
          "01530": {
            "count_cosponsored": 10,
            "committees": [
              "HSAS",
              "HSVR"
            ]
          },
          "01526": {
            "count_cosponsored": 9,
            "committees": [
              "HSBA",
              "HSFA",
              "HSJU"
            ]
          },
          "01555": {
            "count_cosponsored": 11,
            "committees": [
              "HSIF",
              "HSHA",
              "HSSM"
            ]
          },
          "01525": {
            "count_cosponsored": 59,
            "committees": [
              "HSRU"
            ]
          },
          "01635": {
            "count_cosponsored": 15,
            "committees": [
              "HSAP",
              "HSJU",
              "HLIG"
            ]
          },
          "00998": {
            "count_cosponsored": 32,
            "committees": [
              "HSBA",
              "HSFA"
            ]
          },
          "01602": {
            "count_cosponsored": 9,
            "committees": [
              "HSII",
              "HSPW"
            ]
          },
          "00808": {
            "count_cosponsored": 9,
            "committees": [
              "HSED",
              "HSII"
            ]
          },
          "01092": {
            "count_cosponsored": 8,
            "committees": [
              "HSAS",
              "HSBU"
            ]
          },
          "00687": {
            "count_cosponsored": 28,
            "committees": [
              "HSAP"
            ]
          },
          "00631": {
            "count_cosponsored": 13,
            "committees": [
              "HSED",
              "HSII"
            ]
          },
          "00766": {
            "count_cosponsored": 11,
            "committees": [
              "HSWM"
            ]
          },
          "00381": {
            "count_cosponsored": 11,
            "committees": [
              "HSPW",
              "HSVR"
            ]
          },
          "00347": {
            "count_cosponsored": 36,
            "committees": [
              "JSEC",
              "HSWM"
            ]
          },
          "00547": {
            "count_cosponsored": 50,
            "committees": [
              "HSED",
              "HLIG"
            ]
          },
          "00307": {
            "count_cosponsored": 40,
            "committees": [

            ]
          },
          "00294": {
            "count_cosponsored": 27,
            "committees": [
              "HSRU"
            ]
          },
          "00533": {
            "count_cosponsored": 54,
            "committees": [
              "JSTX",
              "HSWM"
            ]
          },
          "01839": {
            "count_cosponsored": 8,
            "committees": [
              "HSAS",
              "HSRU"
            ]
          },
          "00254": {
            "count_cosponsored": 53,
            "committees": [
              "HSIF"
            ]
          },
          "01471": {
            "count_cosponsored": 13,
            "committees": [
              "HSIF",
              "HSII"
            ]
          },
          "00154": {
            "count_cosponsored": 66,
            "committees": [
              "HSFA",
              "HSGO"
            ]
          },
          "01795": {
            "count_cosponsored": 57,
            "committees": [
              "HSAG",
              "HSED",
              "HSPW"
            ]
          },
          "01577": {
            "count_cosponsored": 37,
            "committees": [
              "HSED",
              "HSBA",
              "HSSY"
            ]
          },
          "00082": {
            "count_cosponsored": 12,
            "committees": [
              "HSFA",
              "HSJU"
            ]
          },
          "00512": {
            "count_cosponsored": 28,
            "committees": [
              "HSRU",
              "HSSO"
            ]
          },
          "00070": {
            "count_cosponsored": 7,
            "committees": [
              "HSBU",
              "HSWM"
            ]
          },
          "01892": {
            "count_cosponsored": 16,
            "committees": [
              "HSII",
              "HSVR"
            ]
          },
          "00985": {
            "count_cosponsored": 32,
            "committees": [
              "HSFA"
            ]
          },
          "01645": {
            "count_cosponsored": 47,
            "committees": [
              "HSBA"
            ]
          },
          "00951": {
            "count_cosponsored": 25,
            "committees": [
              "HSAP"
            ]
          },
          "00800": {
            "count_cosponsored": 33,
            "committees": [
              "HSGO",
              "HSPW"
            ]
          },
          "00979": {
            "count_cosponsored": 33,
            "committees": [
              "HSFA",
              "HSSY"
            ]
          },
          "00763": {
            "count_cosponsored": 29,
            "committees": [
              "JSTX",
              "HSWM"
            ]
          },
          "01733": {
            "count_cosponsored": 61,
            "committees": [
              "HSAS",
              "HSED",
              "HSSO"
            ]
          },
          "01644": {
            "count_cosponsored": 44,
            "committees": [
              "HSED",
              "HSJU"
            ]
          },
          "00635": {
            "count_cosponsored": 30,
            "committees": [
              "HSBA",
              "HSHM"
            ]
          },
          "00335": {
            "count_cosponsored": 9,
            "committees": [
              "HSAP",
              "HSBU"
            ]
          },
          "00627": {
            "count_cosponsored": 11,
            "committees": [
              "HSAP",
              "HSII"
            ]
          },
          "01487": {
            "count_cosponsored": 50,
            "committees": [
              "HSAP"
            ]
          },
          "01791": {
            "count_cosponsored": 49,
            "committees": [
              "HSAG",
              "HSED",
              "HSGO"
            ]
          },
          "00277": {
            "count_cosponsored": 39,
            "committees": [
              "HSIF"
            ]
          },
          "01688": {
            "count_cosponsored": 68,
            "committees": [
              "HSAS",
              "HSED",
              "HSFA"
            ]
          },
          "00912": {
            "count_cosponsored": 26,
            "committees": [
              "HSED",
              "HSPW"
            ]
          },
          "01807": {
            "count_cosponsored": 14,
            "committees": [
              "HSAG",
              "HSHM",
              "HSSM"
            ]
          },
          "00279": {
            "count_cosponsored": 7,
            "committees": [
              "HSHM",
              "HSII",
              "HSPW"
            ]
          },
          "01669": {
            "count_cosponsored": 46,
            "committees": [
              "HSII",
              "HSPW",
              "HSVR"
            ]
          },
          "00869": {
            "count_cosponsored": 3,
            "committees": [

            ]
          },
          "01739": {
            "count_cosponsored": 37,
            "committees": [
              "HSBU",
              "HSWM"
            ]
          },
          "01197": {
            "count_cosponsored": 24,
            "committees": [
              "HSAP"
            ]
          },
          "01226": {
            "count_cosponsored": 20,
            "committees": [
              "SSAS",
              "SSCM",
              "SSVA"
            ]
          },
          "01882": {
            "count_cosponsored": 43,
            "committees": [
              "HSHM",
              "HSSY"
            ]
          },
          "01844": {
            "count_cosponsored": 4,
            "committees": [
              "HSED",
              "HSSM",
              "HSPW"
            ]
          },
          "01847": {
            "count_cosponsored": 46,
            "committees": [
              "HSII",
              "HSGO"
            ]
          },
          "00603": {
            "count_cosponsored": 52,
            "committees": [
              "HSWM"
            ]
          },
          "01560": {
            "count_cosponsored": 32,
            "committees": [
              "HSBU",
              "HSWM"
            ]
          },
          "01724": {
            "count_cosponsored": 44,
            "committees": [
              "HSAG",
              "HSJU",
              "HSSM"
            ]
          },
          "01800": {
            "count_cosponsored": 26,
            "committees": [
              "HSED",
              "HSFA",
              "HSII"
            ]
          },
          "01748": {
            "count_cosponsored": 62,
            "committees": [
              "HSIF"
            ]
          },
          "01023": {
            "count_cosponsored": 28,
            "committees": [
              "JSEC",
              "HSAS",
              "HSII"
            ]
          },
          "00939": {
            "count_cosponsored": 44,
            "committees": [
              "HSIF"
            ]
          },
          "01858": {
            "count_cosponsored": 50,
            "committees": [
              "HSBA"
            ]
          },
          "01593": {
            "count_cosponsored": 14,
            "committees": [
              "HSWM",
              "HLIG"
            ]
          },
          "00944": {
            "count_cosponsored": 7,
            "committees": [
              "JSTX",
              "HSWM"
            ]
          },
          "01238": {
            "count_cosponsored": 35,
            "committees": [
              "HSAP"
            ]
          },
          "01886": {
            "count_cosponsored": 33,
            "committees": [
              "HSAS",
              "HSII"
            ]
          },
          "01893": {
            "count_cosponsored": 4,
            "committees": [

            ]
          },
          "01751": {
            "count_cosponsored": 47,
            "committees": [
              "HSIF"
            ]
          },
          "00788": {
            "count_cosponsored": 1,
            "committees": [

            ]
          },
          "01199": {
            "count_cosponsored": 52,
            "committees": [
              "HSAP"
            ]
          },
          "00322": {
            "count_cosponsored": 28,
            "committees": [
              "HSII",
              "HSGO",
              "HSPW"
            ]
          },
          "01818": {
            "count_cosponsored": 11,
            "committees": [
              "HSFA",
              "HSPW"
            ]
          },
          "01479": {
            "count_cosponsored": 7,
            "committees": [
              "HSIF"
            ]
          },
          "01664": {
            "count_cosponsored": 40,
            "committees": [
              "HSBU",
              "HSWM"
            ]
          },
          "01075": {
            "count_cosponsored": 45,
            "committees": [
              "HSHM",
              "HSJU",
              "HSSY"
            ]
          },
          "01667": {
            "count_cosponsored": 47,
            "committees": [
              "HSED",
              "HSGO",
              "HSPW"
            ]
          },
          "01514": {
            "count_cosponsored": 51,
            "committees": [
              "HSIF"
            ]
          },
          "00910": {
            "count_cosponsored": 18,
            "committees": [
              "HSAG"
            ]
          },
          "01835": {
            "count_cosponsored": 9,
            "committees": [
              "HSBA",
              "HSHM"
            ]
          },
          "01465": {
            "count_cosponsored": 32,
            "committees": [
              "HSIF"
            ]
          },
          "01868": {
            "count_cosponsored": 50,
            "committees": [
              "HSBU",
              "HSJU",
              "HSGO"
            ]
          },
          "00849": {
            "count_cosponsored": 58,
            "committees": [
              "HSIF"
            ]
          },
          "00832": {
            "count_cosponsored": 10,
            "committees": [
              "HSAP"
            ]
          },
          "01561": {
            "count_cosponsored": 13,
            "committees": [
              "HSBU",
              "HSBA"
            ]
          },
          "01581": {
            "count_cosponsored": 11,
            "committees": [
              "HSSO",
              "HSWM"
            ]
          },
          "00778": {
            "count_cosponsored": 48,
            "committees": [
              "HSAS",
              "HSED"
            ]
          },
          "01672": {
            "count_cosponsored": 14,
            "committees": [

            ]
          },
          "01671": {
            "count_cosponsored": 15,
            "committees": [
              "HSIF",
              "HSSY"
            ]
          },
          "01806": {
            "count_cosponsored": 56,
            "committees": [
              "HSED",
              "HSBA",
              "HSGO"
            ]
          },
          "00701": {
            "count_cosponsored": 12,
            "committees": [
              "JSLC",
              "HSHM",
              "HSHA",
              "HSJU"
            ]
          },
          "00575": {
            "count_cosponsored": 40,
            "committees": [
              "HSAS"
            ]
          },
          "01578": {
            "count_cosponsored": 15,
            "committees": [
              "JSEC",
              "HSIF",
              "HSSY"
            ]
          },
          "00484": {
            "count_cosponsored": 50,
            "committees": [
              "HSIF",
              "HSSY"
            ]
          },
          "00446": {
            "count_cosponsored": 45,
            "committees": [
              "HSAG",
              "HSJU"
            ]
          },
          "01710": {
            "count_cosponsored": 34,
            "committees": [
              "HSWM"
            ]
          },
          "01793": {
            "count_cosponsored": 35,
            "committees": [
              "HSAG",
              "HSFA",
              "HSSM"
            ]
          },
          "01633": {
            "count_cosponsored": 31,
            "committees": [
              "HSFA",
              "HSII"
            ]
          },
          "01720": {
            "count_cosponsored": 56,
            "committees": [
              "HSAS",
              "HSSY"
            ]
          },
          "01481": {
            "count_cosponsored": 36,
            "committees": [
              "HSAP"
            ]
          },
          "00339": {
            "count_cosponsored": 24,
            "committees": [
              "JSPR",
              "JSLC",
              "HSED",
              "HSHA",
              "HSSY",
              "HSPW"
            ]
          },
          "00592": {
            "count_cosponsored": 8,
            "committees": [

            ]
          },
          "01850": {
            "count_cosponsored": 12,
            "committees": [
              "HSAG",
              "HSBA",
              "HSVR"
            ]
          },
          "00274": {
            "count_cosponsored": 28,
            "committees": [
              "HSHM",
              "HSGO"
            ]
          },
          "01486": {
            "count_cosponsored": 42,
            "committees": [
              "HSAP"
            ]
          },
          "01641": {
            "count_cosponsored": 8,
            "committees": [
              "JSPR",
              "HSAS",
              "HSED",
              "HSHA"
            ]
          },
          "01600": {
            "count_cosponsored": 42,
            "committees": [
              "HSAG",
              "HSAS",
              "HSPW"
            ]
          },
          "01670": {
            "count_cosponsored": 46,
            "committees": [
              "HSAP"
            ]
          },
          "01535": {
            "count_cosponsored": 3,
            "committees": [
              "HSED",
              "HSGO",
              "HLIG"
            ]
          },
          "00854": {
            "count_cosponsored": 7,
            "committees": [
              "HSWM"
            ]
          },
          "00247": {
            "count_cosponsored": 16,
            "committees": [
              "HSAP",
              "HLIG"
            ]
          },
          "01837": {
            "count_cosponsored": 4,
            "committees": [
              "HSBA",
              "HSGO"
            ]
          },
          "01805": {
            "count_cosponsored": 55,
            "committees": [
              "HSAG",
              "HSAS",
              "HSBU"
            ]
          },
          "01520": {
            "count_cosponsored": 11,
            "committees": [
              "HSAP",
              "HSSY"
            ]
          },
          "01759": {
            "count_cosponsored": 13,
            "committees": [
              "HSAP",
              "HSSY"
            ]
          },
          "00060": {
            "count_cosponsored": 44,
            "committees": [
              "HSAS",
              "HSSY",
              "HSSM"
            ]
          },
          "00183": {
            "count_cosponsored": 22,
            "committees": [
              "HSED",
              "HSBA"
            ]
          },
          "00165": {
            "count_cosponsored": 53,
            "committees": [
              "HSAP"
            ]
          },
          "01655": {
            "count_cosponsored": 44,
            "committees": [
              "HSAS",
              "HSSY",
              "HSSM"
            ]
          },
          "01713": {
            "count_cosponsored": 49,
            "committees": [
              "HSBA",
              "HSHM",
              "HSVR"
            ]
          },
          "00711": {
            "count_cosponsored": 40,
            "committees": [
              "HSAG",
              "HSBA",
              "HSSY"
            ]
          },
          "01490": {
            "count_cosponsored": 11,
            "committees": [
              "HSED",
              "HSBA",
              "HSFA"
            ]
          },
          "01467": {
            "count_cosponsored": 18,
            "committees": [
              "HSAP",
              "HSBU"
            ]
          },
          "00933": {
            "count_cosponsored": 25,
            "committees": [
              "HSBA"
            ]
          },
          "01466": {
            "count_cosponsored": 17,
            "committees": [
              "HSAG",
              "HSPW",
              "HLIG"
            ]
          },
          "01464": {
            "count_cosponsored": 65,
            "committees": [
              "HSIF"
            ]
          },
          "01557": {
            "count_cosponsored": 6,
            "committees": [
              "HSBU",
              "HSSY",
              "HSPW"
            ]
          },
          "01744": {
            "count_cosponsored": 27,
            "committees": [
              "HSIF"
            ]
          },
          "01222": {
            "count_cosponsored": 28,
            "committees": [
              "HSIF"
            ]
          },
          "00208": {
            "count_cosponsored": 5,
            "committees": [

            ]
          },
          "01251": {
            "count_cosponsored": 9,
            "committees": [

            ]
          },
          "01632": {
            "count_cosponsored": 21,
            "committees": [
              "HSIF",
              "HSSY"
            ]
          },
          "00364": {
            "count_cosponsored": 33,
            "committees": [
              "HSAG",
              "HSAS",
              "HLIG"
            ]
          },
          "00439": {
            "count_cosponsored": 10,
            "committees": [

            ]
          },
          "01732": {
            "count_cosponsored": 68,
            "committees": [
              "HSBA"
            ]
          },
          "00636": {
            "count_cosponsored": 36,
            "committees": [
              "HSAP"
            ]
          },
          "01707": {
            "count_cosponsored": 54,
            "committees": [
              "HSAS",
              "HSJU"
            ]
          },
          "00582": {
            "count_cosponsored": 22,
            "committees": [
              "HSFA",
              "HSSY"
            ]
          },
          "00087": {
            "count_cosponsored": 38,
            "committees": [
              "HSGO",
              "HSSY",
              "HSVR"
            ]
          },
          "00160": {
            "count_cosponsored": 40,
            "committees": [
              "HSIF",
              "HSVR"
            ]
          },
          "01103": {
            "count_cosponsored": 35,
            "committees": [
              "HSIF",
              "HSVR"
            ]
          },
          "01705": {
            "count_cosponsored": 13,
            "committees": [
              "HSHA",
              "HSJU",
              "HSWM"
            ]
          },
          "01663": {
            "count_cosponsored": 12,
            "committees": [
              "HSAP"
            ]
          },
          "01727": {
            "count_cosponsored": 35,
            "committees": [
              "HSAP",
              "HSBU"
            ]
          },
          "01518": {
            "count_cosponsored": 13,
            "committees": [
              "HSAP",
              "HSVR"
            ]
          },
          "01653": {
            "count_cosponsored": 10,
            "committees": [
              "HSAP",
              "HSGO"
            ]
          },
          "01640": {
            "count_cosponsored": 47,
            "committees": [
              "HSJU",
              "HSGO",
              "HLIG"
            ]
          },
          "01777": {
            "count_cosponsored": 9,
            "committees": [
              "JSLC",
              "HSAP",
              "HSJU"
            ]
          },
          "01473": {
            "count_cosponsored": 7,
            "committees": [

            ]
          },
          "00102": {
            "count_cosponsored": 116,
            "committees": [

            ]
          },
          "01205": {
            "count_cosponsored": 5,
            "committees": [
              "HSBA",
              "HSJU"
            ]
          },
          "00850": {
            "count_cosponsored": 7,
            "committees": [
              "HSJU",
              "HSPW"
            ]
          },
          "01636": {
            "count_cosponsored": 7,
            "committees": [
              "HSIF",
              "HSII"
            ]
          },
          "01831": {
            "count_cosponsored": 10,
            "committees": [
              "HSAS",
              "HSFA",
              "HSSY"
            ]
          },
          "01522": {
            "count_cosponsored": 8,
            "committees": [
              "JSEC",
              "HSAS",
              "HSHM"
            ]
          },
          "01533": {
            "count_cosponsored": 15,
            "committees": [
              "HSAS",
              "HSPW"
            ]
          },
          "00229": {
            "count_cosponsored": 5,
            "committees": [
              "HSJU"
            ]
          },
          "01649": {
            "count_cosponsored": 56,
            "committees": [
              "HSFA",
              "HSJU"
            ]
          },
          "01566": {
            "count_cosponsored": 56,
            "committees": [
              "HSIF"
            ]
          },
          "01798": {
            "count_cosponsored": 8,
            "committees": [
              "HSBU",
              "HSWM"
            ]
          },
          "01745": {
            "count_cosponsored": 52,
            "committees": [
              "HSBU",
              "HSBA",
              "HSFA",
              "HSSO"
            ]
          },
          "00905": {
            "count_cosponsored": 3,
            "committees": [

            ]
          },
          "01528": {
            "count_cosponsored": 8,
            "committees": [
              "HSAS",
              "HSFA"
            ]
          },
          "01041": {
            "count_cosponsored": 32,
            "committees": [
              "HSJU",
              "HSSY"
            ]
          },
          "01468": {
            "count_cosponsored": 47,
            "committees": [
              "JSEC",
              "HSWM"
            ]
          },
          "00414": {
            "count_cosponsored": 20,
            "committees": [
              "HSAP"
            ]
          },
          "00693": {
            "count_cosponsored": 40,
            "committees": [
              "HSWM"
            ]
          },
          "01865": {
            "count_cosponsored": 5,
            "committees": [
              "HSPW",
              "HSVR"
            ]
          },
          "00584": {
            "count_cosponsored": 8,
            "committees": [
              "HSIF",
              "HSII"
            ]
          },
          "01155": {
            "count_cosponsored": 38,
            "committees": [
              "HSAS",
              "HLIG"
            ]
          },
          "01580": {
            "count_cosponsored": 9,
            "committees": [
              "HSED",
              "HSII",
              "HLIG"
            ]
          },
          "01477": {
            "count_cosponsored": 14,
            "committees": [
              "HSED",
              "HSGO"
            ]
          },
          "00047": {
            "count_cosponsored": 20,
            "committees": [

            ]
          },
          "00038": {
            "count_cosponsored": 39,
            "committees": [
              "HSBA"
            ]
          },
          "00588": {
            "count_cosponsored": 10,
            "committees": [
              "HSFA",
              "HSHM",
              "HSJU"
            ]
          },
          "01500": {
            "count_cosponsored": 17,
            "committees": [
              "HSAG",
              "HSSY",
              "HSPW"
            ]
          },
          "00699": {
            "count_cosponsored": 26,
            "committees": [
              "HSAS",
              "HSPW"
            ]
          },
          "00773": {
            "count_cosponsored": 38,
            "committees": [
              "HSAS",
              "HSGO",
              "HLIG"
            ]
          },
          "01752": {
            "count_cosponsored": 53,
            "committees": [
              "HSAP"
            ]
          },
          "01758": {
            "count_cosponsored": 48,
            "committees": [
              "HSAG",
              "HSBA",
              "HSSY"
            ]
          },
          "01810": {
            "count_cosponsored": 22,
            "committees": [
              "HSHM",
              "HSSY",
              "HSPW"
            ]
          },
          "00876": {
            "count_cosponsored": 8,
            "committees": [
              "HSPW"
            ]
          },
          "00616": {
            "count_cosponsored": 8,
            "committees": [
              "HSAP",
              "HSBU"
            ]
          },
          "01588": {
            "count_cosponsored": 7,
            "committees": [
              "HSIF",
              "HLIG"
            ]
          },
          "01778": {
            "count_cosponsored": 46,
            "committees": [
              "HSED",
              "HSBA"
            ]
          },
          "01725": {
            "count_cosponsored": 7,
            "committees": [
              "HSWM"
            ]
          },
          "01737": {
            "count_cosponsored": 49,
            "committees": [
              "HSBU",
              "HSBA"
            ]
          },
          "01654": {
            "count_cosponsored": 9,
            "committees": [
              "HSBA",
              "HSGO"
            ]
          },
          "01462": {
            "count_cosponsored": 12,
            "committees": [
              "HSAP",
              "HSBU"
            ]
          },
          "01864": {
            "count_cosponsored": 6,
            "committees": [
              "HSED",
              "HSHM",
              "HSSM"
            ]
          },
          "01123": {
            "count_cosponsored": 15,
            "committees": [
              "HSIF"
            ]
          },
          "01576": {
            "count_cosponsored": 14,
            "committees": [
              "HSVR",
              "HSWM"
            ]
          },
          "01604": {
            "count_cosponsored": 17,
            "committees": [
              "HSFA",
              "HSWM"
            ]
          },
          "01742": {
            "count_cosponsored": 48,
            "committees": [
              "HSAS",
              "HSII"
            ]
          },
          "00709": {
            "count_cosponsored": 3,
            "committees": [
              "HSAP",
              "HSHM"
            ]
          },
          "01809": {
            "count_cosponsored": 45,
            "committees": [
              "HSAS",
              "HSED",
              "HSII"
            ]
          },
          "01506": {
            "count_cosponsored": 9,
            "committees": [
              "HSBA",
              "HSFA"
            ]
          },
          "01512": {
            "count_cosponsored": 31,
            "committees": [
              "HSAP"
            ]
          },
          "01657": {
            "count_cosponsored": 40,
            "committees": [
              "HSAP"
            ]
          },
          "01815": {
            "count_cosponsored": 46,
            "committees": [
              "HSAG",
              "HSPW"
            ]
          },
          "01689": {
            "count_cosponsored": 42,
            "committees": [
              "HSIF"
            ]
          },
          "01718": {
            "count_cosponsored": 17,
            "committees": [
              "HSAG",
              "HSAS",
              "HSBA"
            ]
          },
          "01729": {
            "count_cosponsored": 8,
            "committees": [
              "HSGO",
              "HSWM"
            ]
          },
          "01740": {
            "count_cosponsored": 12,
            "committees": [
              "HSBU",
              "HSED",
              "HSPW"
            ]
          },
          "01584": {
            "count_cosponsored": 36,
            "committees": [
              "HSBA",
              "HSPW"
            ]
          },
          "01614": {
            "count_cosponsored": 18,
            "committees": [
              "HSAG",
              "HSBA",
              "HSII"
            ]
          },
          "01787": {
            "count_cosponsored": 51,
            "committees": [
              "HSAG",
              "HSED",
              "HSPW"
            ]
          },
          "01659": {
            "count_cosponsored": 26,
            "committees": [
              "HSIF"
            ]
          },
          "00612": {
            "count_cosponsored": 44,
            "committees": [
              "HSAS",
              "HSBA"
            ]
          },
          "00879": {
            "count_cosponsored": 5,
            "committees": [
              "HSAP"
            ]
          },
          "01816": {
            "count_cosponsored": 48,
            "committees": [
              "HSBU",
              "HSBA"
            ]
          },
          "01799": {
            "count_cosponsored": 31,
            "committees": [
              "HSHM",
              "HSPW"
            ]
          },
          "01808": {
            "count_cosponsored": 50,
            "committees": [
              "HSAS",
              "HSPW"
            ]
          },
          "00942": {
            "count_cosponsored": 19,
            "committees": [
              "HSWM"
            ]
          },
          "00550": {
            "count_cosponsored": 20,
            "committees": [
              "HSAG",
              "HSPW"
            ]
          },
          "00977": {
            "count_cosponsored": 41,
            "committees": [
              "HSAP"
            ]
          },
          "01048": {
            "count_cosponsored": 38,
            "committees": [
              "HSBA",
              "HSHM",
              "HSGO"
            ]
          },
          "01741": {
            "count_cosponsored": 31,
            "committees": [
              "HSAS",
              "HSGO",
              "HSVR"
            ]
          },
          "01704": {
            "count_cosponsored": 28,
            "committees": [
              "HSAG",
              "HSAS",
              "HSHM"
            ]
          },
          "00186": {
            "count_cosponsored": 53,
            "committees": [
              "HSFA",
              "HSJU",
              "HSSM"
            ]
          },
          "00355": {
            "count_cosponsored": 8,
            "committees": [
              "HSIF",
              "HLIG"
            ]
          },
          "01460": {
            "count_cosponsored": 38,
            "committees": [
              "HSAP"
            ]
          },
          "00599": {
            "count_cosponsored": 10,
            "committees": [
              "HSSY",
              "HSPW"
            ]
          },
          "00844": {
            "count_cosponsored": 9,
            "committees": [
              "HSAP"
            ]
          },
          "00211": {
            "count_cosponsored": 42,
            "committees": [
              "HSJU",
              "HSPW"
            ]
          },
          "01814": {
            "count_cosponsored": 12,
            "committees": [
              "HSRU",
              "HSPW"
            ]
          },
          "01474": {
            "count_cosponsored": 4,
            "committees": [
              "HSHM",
              "HSII"
            ]
          },
          "01889": {
            "count_cosponsored": 10,
            "committees": [
              "HSBA"
            ]
          },
          "01833": {
            "count_cosponsored": 48,
            "committees": [
              "JSPR",
              "HSBA",
              "HSHA"
            ]
          },
          "01776": {
            "count_cosponsored": 30,
            "committees": [
              "HSBU",
              "HSFA",
              "HSPW"
            ]
          },
          "00893": {
            "count_cosponsored": 11,
            "committees": [
              "HSAP"
            ]
          },
          "01501": {
            "count_cosponsored": 7,
            "committees": [
              "HSAP",
              "HSFA"
            ]
          },
          "01717": {
            "count_cosponsored": 44,
            "committees": [
              "HSBU",
              "HSSY",
              "HSPW"
            ]
          },
          "00940": {
            "count_cosponsored": 13,
            "committees": [
              "HSII",
              "HSPW"
            ]
          },
          "00663": {
            "count_cosponsored": 6,
            "committees": [

            ]
          },
          "01687": {
            "count_cosponsored": 48,
            "committees": [
              "HSFA",
              "HSPW",
              "HSVR"
            ]
          },
          "00545": {
            "count_cosponsored": 25,
            "committees": [
              "HSAP"
            ]
          },
          "00615": {
            "count_cosponsored": 12,
            "committees": [
              "HSBA",
              "HSGO",
              "HSSY"
            ]
          },
          "01711": {
            "count_cosponsored": 58,
            "committees": [
              "HSAG",
              "HSSM"
            ]
          },
          "01757": {
            "count_cosponsored": 10,
            "committees": [
              "HSED",
              "HSFA",
              "HSJU"
            ]
          },
          "01872": {
            "count_cosponsored": 48,
            "committees": [
              "HSII",
              "HSSM",
              "HSPW"
            ]
          },
          "00256": {
            "count_cosponsored": 8,
            "committees": [
              "JSEC",
              "HSAS",
              "HSGO",
              "HSPW"
            ]
          },
          "01786": {
            "count_cosponsored": 16,
            "committees": [
              "HSIF",
              "HSSY"
            ]
          },
          "01703": {
            "count_cosponsored": 45,
            "committees": [
              "HSAP",
              "HSBU",
              "HSSO"
            ]
          },
          "01789": {
            "count_cosponsored": 9,
            "committees": [
              "HSFA",
              "HSSY",
              "HSPW"
            ]
          },
          "00659": {
            "count_cosponsored": 26,
            "committees": [
              "HSAP"
            ]
          },
          "01651": {
            "count_cosponsored": 45,
            "committees": [
              "HSIF",
              "HLIG"
            ]
          },
          "00317": {
            "count_cosponsored": 39,
            "committees": [
              "HSRU"
            ]
          },
          "01859": {
            "count_cosponsored": 18,
            "committees": [
              "HSII",
              "HSSM",
              "HSPW"
            ]
          },
          "01497": {
            "count_cosponsored": 7,
            "committees": [
              "HSAP"
            ]
          },
          "01735": {
            "count_cosponsored": 4,
            "committees": [
              "HSBA",
              "HSFA",
              "HSSY"
            ]
          },
          "01760": {
            "count_cosponsored": 16,
            "committees": [
              "HSAG",
              "HSII",
              "HSVR"
            ]
          },
          "01883": {
            "count_cosponsored": 7,
            "committees": [
              "HSSY",
              "HSPW"
            ]
          },
          "01242": {
            "count_cosponsored": 7,
            "committees": [
              "HSED",
              "HSFA",
              "HSSY"
            ]
          },
          "01643": {
            "count_cosponsored": 34,
            "committees": [
              "HSAP"
            ]
          },
          "00004": {
            "count_cosponsored": 9,
            "committees": [
              "HSBA",
              "HSFA"
            ]
          },
          "01796": {
            "count_cosponsored": 19,
            "committees": [
              "HSAS",
              "HSBA",
              "HSII"
            ]
          },
          "01873": {
            "count_cosponsored": 19,
            "committees": [
              "HSED",
              "HSSM",
              "HSPW"
            ]
          },
          "01780": {
            "count_cosponsored": 19,
            "committees": [
              "HSAG",
              "HSIF"
            ]
          },
          "01862": {
            "count_cosponsored": 9,
            "committees": [
              "HSBA",
              "HSGO"
            ]
          },
          "01774": {
            "count_cosponsored": 15,
            "committees": [
              "HSAG",
              "HSFA",
              "HSII"
            ]
          },
          "01838": {
            "count_cosponsored": 32,
            "committees": [
              "HSFA",
              "HSHM",
              "HSVR"
            ]
          },
          "00368": {
            "count_cosponsored": 11,
            "committees": [
              "HSAP"
            ]
          },
          "01165": {
            "count_cosponsored": 9,
            "committees": [
              "HSIF",
              "HSGO"
            ]
          },
          "01676": {
            "count_cosponsored": 37,
            "committees": [
              "HSBA",
              "HSPW"
            ]
          },
          "01685": {
            "count_cosponsored": 49,
            "committees": [
              "HSAS",
              "HSVR"
            ]
          },
          "01142": {
            "count_cosponsored": 10,
            "committees": [
              "HSAS",
              "HSPW"
            ]
          },
          "01505": {
            "count_cosponsored": 18,
            "committees": [
              "HSAG",
              "HSAS"
            ]
          },
          "01863": {
            "count_cosponsored": 37,
            "committees": [
              "HSBA"
            ]
          },
          "00448": {
            "count_cosponsored": 17,
            "committees": [
              "HSIF",
              "HSSY"
            ]
          },
          "01527": {
            "count_cosponsored": 40,
            "committees": [
              "HSIF"
            ]
          },
          "00425": {
            "count_cosponsored": 48,
            "committees": [
              "HSFA",
              "HSJU",
              "HSII",
              "HLIG"
            ]
          },
          "01782": {
            "count_cosponsored": 12,
            "committees": [
              "HSBA",
              "HSSM"
            ]
          },
          "01715": {
            "count_cosponsored": 10,
            "committees": [
              "HSAS",
              "HSWM"
            ]
          },
          "02223": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02242": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02247": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02251": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02252": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02267": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02272": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02277": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02278": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01916": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02040": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02027": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01895": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "00867": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02154": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02105": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02168": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02035": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01987": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02072": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02141": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02137": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02131": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02158": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02134": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02133": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02099": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02153": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02170": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02171": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01922": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02057": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02157": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02142": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02200": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01976": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02094": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01933": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01970": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02199": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02174": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02179": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02194": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02049": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02009": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01997": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01989": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02062": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02043": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02032": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02073": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02060": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02064": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02100": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02140": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02126": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02151": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02115": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02096": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02146": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02145": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02112": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02127": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02150": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01979": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02034": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02071": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01924": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02001": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02103": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02155": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02152": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02128": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02197": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02169": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02123": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02113": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02166": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01915": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01931": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02059": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02015": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01913": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01908": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02065": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02017": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02008": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02130": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02160": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02107": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01954": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01009": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02058": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02129": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01910": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01962": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02004": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02092": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02014": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02143": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02161": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02116": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02121": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01959": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01996": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02025": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02055": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01914": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02172": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02102": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02111": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02119": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01992": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02159": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01920": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01012": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02023": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02162": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01936": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02022": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02046": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02011": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02156": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02144": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02191": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02109": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02044": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02002": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02089": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01907": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01940": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02114": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02020": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01994": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02106": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02110": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01930": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02051": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01901": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02076": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01937": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "00209": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02185": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01395": {
            "count_cosponsored": 0,
            "committees": [
              "SSAF",
              "SSAP",
              "SSRA",
              "SLIN"
            ]
          },
          "02182": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02175": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01984": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02176": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01542": {
            "count_cosponsored": 0,
            "committees": [
              "SSBK",
              "SSHR",
              "SSSB",
              "SSBU"
            ]
          },
          "00924": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02086": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01981": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01986": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02036": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01927": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01988": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02021": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01991": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01912": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02068": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02050": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02029": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02038": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02003": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01955": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02074": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02070": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01797": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02013": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01929": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02052": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02033": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02067": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02090": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01967": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02026": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01939": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01942": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02061": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01921": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01982": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01823": {
            "count_cosponsored": 0,
            "committees": [
              "SSEV",
              "SSBU",
              "SSJU",
              "SLIN",
              "SPAG"
            ]
          },
          "00153": {
            "count_cosponsored": 0,
            "committees": [
              "SSEG",
              "SSHR",
              "SLIA",
              "SSVA",
              "SLIN"
            ]
          },
          "01828": {
            "count_cosponsored": 0,
            "committees": [
              "SSAF",
              "SSBK",
              "SSFR",
              "JSEC",
              "SPAG"
            ]
          },
          "01965": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02079": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01409": {
            "count_cosponsored": 0,
            "committees": [
              "SSAP",
              "SSHR",
              "SSRA",
              "SSBU",
              "SSVA",
              "JSPR"
            ]
          },
          "01541": {
            "count_cosponsored": 0,
            "committees": [
              "SSAS",
              "SSGA",
              "SPAG"
            ]
          },
          "01820": {
            "count_cosponsored": 0,
            "committees": [
              "SSAS",
              "SSCM",
              "SSGA",
              "SLIA",
              "SPAG"
            ]
          },
          "01983": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02075": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01692": {
            "count_cosponsored": 0,
            "committees": [
              "SSAS",
              "SSBU",
              "SSJU",
              "SLET"
            ]
          },
          "01897": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01900": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01825": {
            "count_cosponsored": 0,
            "committees": [
              "SSBK",
              "SSEG",
              "SSFR",
              "SSSB",
              "SPAG"
            ]
          },
          "02085": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02084": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01969": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01881": {
            "count_cosponsored": 0,
            "committees": [
              "SSEG",
              "SSEV",
              "SSFR",
              "SLIA"
            ]
          },
          "01896": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02080": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02082": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "00213": {
            "count_cosponsored": 0,
            "committees": [
              "SSAF",
              "SSAP",
              "SSRA"
            ]
          },
          "00326": {
            "count_cosponsored": 0,
            "committees": [
              "SSAP",
              "SSRA",
              "SSJU"
            ]
          },
          "01049": {
            "count_cosponsored": 0,
            "committees": [
              "SSAP",
              "SSBK",
              "SPAG"
            ]
          },
          "00452": {
            "count_cosponsored": 0,
            "committees": [
              "SSAF",
              "SSAS",
              "SSBU",
              "SSJU",
              "SSVA"
            ]
          },
          "01036": {
            "count_cosponsored": 0,
            "committees": [
              "SSBK",
              "SSFI",
              "SSRA",
              "SSJU",
              "JSLC",
              "JSEC"
            ]
          },
          "00791": {
            "count_cosponsored": 0,
            "committees": [
              "SSBK",
              "SSEG",
              "SSFR",
              "SSBU"
            ]
          },
          "00116": {
            "count_cosponsored": 0,
            "committees": [
              "SSCM",
              "SSEV",
              "SSFR",
              "SLET"
            ]
          },
          "01956": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01383": {
            "count_cosponsored": 0,
            "committees": [
              "SSAF",
              "SSAP",
              "SSJU"
            ]
          },
          "00136": {
            "count_cosponsored": 0,
            "committees": [
              "SSAF",
              "SSBK",
              "SSHR",
              "SSVA"
            ]
          },
          "01826": {
            "count_cosponsored": 0,
            "committees": [
              "SSAF",
              "SSCM",
              "SSEV",
              "JSEC"
            ]
          },
          "00968": {
            "count_cosponsored": 0,
            "committees": [
              "SSAF",
              "SSFI",
              "SSHR",
              "SLET"
            ]
          },
          "01534": {
            "count_cosponsored": 0,
            "committees": [
              "SSAF",
              "SSAS",
              "SSCM",
              "SSSB"
            ]
          },
          "00457": {
            "count_cosponsored": 0,
            "committees": [
              "SSAF",
              "SSFI",
              "SSBU",
              "SSJU",
              "JSTX",
              "SCNC"
            ]
          },
          "00802": {
            "count_cosponsored": 0,
            "committees": [
              "SSAP",
              "SSHR",
              "SLIN"
            ]
          },
          "01332": {
            "count_cosponsored": 0,
            "committees": [
              "SSAP",
              "SSRA",
              "SSJU",
              "JSPR",
              "JSLC",
              "SLIN",
              "SCNC"
            ]
          },
          "00949": {
            "count_cosponsored": 0,
            "committees": [
              "SSAP",
              "SSAS",
              "SSBK",
              "SSHR"
            ]
          },
          "01695": {
            "count_cosponsored": 0,
            "committees": [
              "SSAP",
              "SSEV",
              "SSHR",
              "SSRA"
            ]
          },
          "00859": {
            "count_cosponsored": 0,
            "committees": [
              "SSAS",
              "SSCM",
              "SSFR",
              "SSBU",
              "SLIN",
              "SPAG"
            ]
          },
          "00754": {
            "count_cosponsored": 0,
            "committees": [
              "SSAS",
              "SSCM",
              "SLIA"
            ]
          },
          "01829": {
            "count_cosponsored": 0,
            "committees": [
              "SSBK",
              "SSEG",
              "SSGA",
              "SLIA",
              "SSSB",
              "SSVA"
            ]
          },
          "00172": {
            "count_cosponsored": 0,
            "committees": [
              "SSCM",
              "SSEG",
              "SSFI",
              "SLIA",
              "SSSB"
            ]
          },
          "01609": {
            "count_cosponsored": 0,
            "committees": [
              "SSCM",
              "SSEV",
              "SSFR",
              "SSSB",
              "SPAG"
            ]
          },
          "01694": {
            "count_cosponsored": 0,
            "committees": [
              "SSEG",
              "SSFR",
              "SSHR",
              "SLIA"
            ]
          },
          "00174": {
            "count_cosponsored": 0,
            "committees": [
              "SSEV",
              "SSFR",
              "SSSB",
              "SSBU",
              "SSJU"
            ]
          },
          "01351": {
            "count_cosponsored": 0,
            "committees": [
              "SSFI",
              "SSHR",
              "SSJU",
              "JSTX",
              "SLIN"
            ]
          },
          "00952": {
            "count_cosponsored": 0,
            "committees": [
              "SSRA",
              "SLIN"
            ]
          },
          "02063": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01952": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02054": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02097": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02028": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01531": {
            "count_cosponsored": 0,
            "committees": [
              "SSAF",
              "SSFI",
              "SSBU"
            ]
          },
          "02019": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02018": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02117": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "00179": {
            "count_cosponsored": 0,
            "committees": [
              "SSBK",
              "SSCM",
              "SSEV",
              "SSGA",
              "SPAG"
            ]
          },
          "02098": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01010": {
            "count_cosponsored": 0,
            "committees": [
              "SSEG",
              "SSEV",
              "SSHR",
              "SSBU",
              "SSVA"
            ]
          },
          "00583": {
            "count_cosponsored": 0,
            "committees": [
              "SSAS",
              "SSEV"
            ]
          },
          "01999": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "00250": {
            "count_cosponsored": 0,
            "committees": [
              "SSAF",
              "SSBK",
              "SSFI",
              "SSBU"
            ]
          },
          "01894": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01909": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02069": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01960": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02048": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01950": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02056": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02047": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02104": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02148": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02165": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02202": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02230": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02237": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02241": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02271": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02167": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02239": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02243": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02256": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02244": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02253": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02248": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02275": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02229": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02274": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02201": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02234": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02257": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02254": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02263": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02225": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02228": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02258": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02163": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02122": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02226": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02240": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02246": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02203": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02276": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02221": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02224": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02236": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02249": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02265": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02235": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02149": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02196": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02227": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02250": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02261": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02190": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02233": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02255": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02269": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02259": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02273": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02264": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02238": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02268": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02262": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02231": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02245": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02222": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02260": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02101": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02232": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02270": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02266": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02289": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01925": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02173": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02138": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02286": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02291": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02283": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02288": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02290": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01998": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01247": {
            "count_cosponsored": 0,
            "committees": [
              "SSEG",
              "SSFI",
              "SSBU",
              "SLIN",
              "SPAG"
            ]
          },
          "01995": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01973": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "02053": {
            "count_cosponsored": 0,
            "committees": [

            ]
          },
          "01548": {
            "count_cosponsored": 0,
            "committees": [
              "SSAS",
              "SSEG",
              "SSBU",
              "SSJU",
              "SCNC"
            ]
          },
          "01608": {
            "count_cosponsored": 0,
            "committees": [
              "SSEV",
              "SSFR",
              "SSHR",
              "SSSB",
              "SSVA",
              "SLET"
            ]
          }
        }
      }
    }
  }
};