import os
import json

obj = [
    {
        "courseNum": 1004,
        "courseNameZh": "計算機概論",
        "courseNameEn": "Introduction to Cumputer Science",
        "courseTerm": "大一上",
        "courseClass": "主修",
        "courseMajor": "必修",
        "courseUrl": "./coursePage.html?courseNum=1004"
    },
    {
        "courseNum": 1001,
        "courseNameZh": "微積分(一)",
        "courseNameEn": "Calculas I",
        "courseTerm": "大一上",
        "courseClass": "主修",
        "courseMajor": "必修",
        "courseUrl": "./coursePage.html?courseNum=1001"
    },
    {
        "courseNum": 1008,
        "courseNameZh": "微積分(二)",
        "courseNameEn": "Calculas II",
        "courseTerm": "大一下",
        "courseClass": "主修",
        "courseMajor": "必修",
        "courseUrl": "./coursePage.html?courseNum=1008"
    },
    {
        "courseNum": 1002,
        "courseNameZh": "程式設計",
        "courseNameEn": "Computer Programming",
        "courseTerm": "大一下",
        "courseClass": "主修",
        "courseMajor": "必修",
        "courseUrl": "./coursePage.html?courseNum=1002"
    },
    {
        "courseNum": 1072,
        "courseNameZh": "程式設計實作",
        "courseNameEn": "Computer Programming Practice",
        "courseTerm": "大一下",
        "courseClass": "主修",
        "courseMajor": "必修",
        "courseUrl": "./coursePage.html?courseNum=1072"
    },
    {
        "courseNum": 1015,
        "courseNameZh": "離散數學",
        "courseNameEn": "Discrete Mathematics",
        "courseTerm": "大一下",
        "courseClass": "主修",
        "courseMajor": "必修",
        "courseUrl": "./coursePage.html?courseNum=1015"
    },
    {
        "courseNum": 1013,
        "courseNameZh": "資料結構",
        "courseNameEn": "Data Structures",
        "courseTerm": "大二上",
        "courseClass": "主修",
        "courseMajor": "必修",
        "courseUrl": "./coursePage.html?courseNum=1013"
    },
    {
        "courseNum": 1007,
        "courseNameZh": "線性代數",
        "courseNameEn": "Linear Algebra",
        "courseTerm": "大二上",
        "courseClass": "主修",
        "courseMajor": "必修",
        "courseUrl": "./coursePage.html?courseNum=1007"
    },
    {
        "courseNum": 1088,
        "courseNameZh": "認知科學",
        "courseNameEn": "Cognitive Sciences",
        "courseTerm": "大二上",
        "courseClass": "主修",
        "courseMajor": "必修",
        "courseUrl": "./coursePage.html?courseNum=1088"
    },
    {
        "courseNum": 1023,
        "courseNameZh": "機率與統計",
        "courseNameEn": "Probability and Statistics",
        "courseTerm": "大二下",
        "courseClass": "主修",
        "courseMajor": "必修",
        "courseUrl": "./coursePage.html?courseNum=1023"
    },
    {
        "courseNum": 1016,
        "courseNameZh": "系統分析與設計",
        "courseNameEn": "Systems Analysis and Design",
        "courseTerm": "大二下",
        "courseClass": "主修",
        "courseMajor": "必修",
        "courseUrl": "./coursePage.html?courseNum=1016"
    },
    {
        "courseNum": 1040,
        "courseNameZh": "學習理論",
        "courseNameEn": "Learning Theories",
        "courseTerm": "大二下",
        "courseClass": "主修",
        "courseMajor": "必修",
        "courseUrl": "./coursePage.html?courseNum=1040"
    },
    {
        "courseNum": 1034,
        "courseNameZh": "演算法",
        "courseNameEn": "Algorithms",
        "courseTerm": "大三上",
        "courseClass": "主修",
        "courseMajor": "必修",
        "courseUrl": "./coursePage.html?courseNum=1034"
    },
    {
        "courseNum": 1041,
        "courseNameZh": "資料庫系統",
        "courseNameEn": "Database Systems",
        "courseTerm": "大三上",
        "courseClass": "系統組",
        "courseMajor": "必修",
        "courseUrl": "./coursePage.html?courseNum=1041"
    },
    {
        "courseNum": 1047,
        "courseNameZh": "管理資訊系統",
        "courseNameEn": "Management Information System",
        "courseTerm": "大三上",
        "courseClass": "系統組",
        "courseMajor": "選修",
        "courseUrl": "./coursePage.html?courseNum=1047"
    },
    {
        "courseNum": 1030,
        "courseNameZh": "電腦圖學",
        "courseNameEn": "Computer Graphics",
        "courseTerm": "大二下",
        "courseClass": "內容組",
        "courseMajor": "必修",
        "courseUrl": "./coursePage.html?courseNum=1030"
    },
    {
        "courseNum": 1027,
        "courseNameZh": "資訊倫理與法律",
        "courseNameEn": "Information Morality and Laws",
        "courseTerm": "大二上",
        "courseClass": "內容組",
        "courseMajor": "選修",
        "courseUrl": "./coursePage.html?courseNum=1027"
    }
]
# for i in obj:
#     print(i['courseNum'])
pathListCourse = os.listdir('./library')
pathListFiles = []
for course in pathListCourse:
    for i in obj:
        if course == str(i['courseNum']):
            temp = {
                'courseNum': course,
                'courseNameZh': i['courseNameZh'],
                'courseMiddleExam': os.listdir('./library/' + course + '/m'),
                'courseFinalExam': os.listdir('./library/' + course + '/f')
            }
            pathListFiles.append(temp)
with open('output.json', 'w', encoding="utf-8") as f:
    json.dump(pathListFiles, f, ensure_ascii=False)
