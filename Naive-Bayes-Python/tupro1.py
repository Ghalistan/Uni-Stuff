import pandas as pd

trainSet = pd.read_excel('TrainsetTugas1ML.xlsx', sheet_name='Sheet1')
testSet = pd.read_excel('TestsetTugas1ML.xlsx', sheet_name='Sheet1')

# most of commented command is used for tracing/develop purposes

trainData = []
for i in trainSet.index:
    trainData.append([
        trainSet['age'][i],
        trainSet['workclass'][i],
        trainSet['education'][i],
        trainSet['marital-status'][i],
        trainSet['occupation'][i],
        trainSet['relationship'][i],
        trainSet['hours-per-week'][i],
        trainSet['income'][i]
    ])

testData = []
for i in testSet.index:
    testData.append([
        testSet['age'][i],
        testSet['workclass'][i],
        testSet['education'][i],
        testSet['marital-status'][i],
        testSet['occupation'][i],
        testSet['relationship'][i],
        testSet['hours-per-week'][i],
        testSet['income'][i]
    ])

totalY = 0  # Income = >50K
totalN = 0  # Income = <=50K
for data in trainData:
    if data[7] == '>50K':
        totalY+=1
    else:
        totalN+=1

# print(totalY, "/", len(trainData), "=", totalY/len(trainData))
# print(totalN, "/", len(trainData), "=", totalN/len(trainData))

AnswerTuple = []
for test in testData:
    # print(test)
    ageY = 0
    ageN = 0
    for train in trainData:
        if train[0] == test[0] and train[7] == '>50K':
            ageY+=1
        elif train[0] == test[0]:
            ageN+=1
    # print("P(AgeY):", ageY, "P(ageN):", ageN)
    # print("P(ageY|Y):", ageY/totalY, "P(ageN|N):", ageN/totalN)

    workY = 0
    workN = 0
    for train in trainData:
        if train[1] == test[1] and train[7] == '>50K':
            workY+=1
        elif train[1] == test[1]:
            workN+=1
    # print("P(workY):", workY, "P(workN):", workN)
    # print("P(workY|Y):", workY/totalY, "P(workN|N):", workN/totalN)

    eduY = 0
    eduN = 0
    for train in trainData:
        if train[2] == test[2] and train[7] == '>50K':
            eduY+=1
        elif train[2] == test[2]:
            eduN+=1
    # print("P(eduY):", eduY, "P(eduN):", eduN)
    # print("P(eduY|Y):", eduY/totalY, "P(eduN|N):", eduN/totalN)

    maritalY = 0
    maritalN = 0
    for train in trainData:
        if train[3] == test[3] and train[7] == '>50K':
            maritalY+=1
        elif train[3] == test[3]:
            maritalN+=1
    # print("P(maritalY):", maritalY, "P(maritalN):", maritalN)
    # print("P(maritalY|Y):", maritalY/totalY, "P(maritalN|N):", maritalN/totalN)

    occuY = 0
    occuN = 0
    for train in trainData:
        if train[4] == test[4] and train[7] == '>50K':
            occuY+=1
        elif train[4] == test[4]:
            occuN+=1
    # print("P(occuY):", occuY, "P(occuN):", occuN)
    # print("P(occuY|Y):", occuY/totalY, "P(occuN|N):", occuN/totalN)

    relatY = 0
    relatN = 0
    for train in trainData:
        if train[5] == test[5] and train[7] == '>50K':
            relatY+=1
        elif train[5] == test[5]:
            relatN+=1
    # print("P(relatY):", relatY, "P(relatN):", relatN)
    # print("P(relatY|Y):", relatY/totalY, "P(relatN|N):", relatN/totalN)

    hpwY = 0
    hpwN = 0
    for train in trainData:
        if train[6] == test[6] and train[7] == '>50K':
            hpwY+=1
        elif train[6] == test[6]:
            hpwN+=1
    # print("P(hpwY):", hpwY, "P(hpwN):", hpwN)
    # print("P(hpwY|Y):", hpwY/totalY, "P(hpwN|N):", hpwN/totalN)

    # print(ageY/totalY, workY/totalY, eduY/totalY, maritalY/totalY, occuY/totalY, relatY/totalY, hpwY/totalY)
    # print(ageN/totalN, workN/totalN, eduN/totalN, maritalN/totalN, occuN/totalN, relatN/totalN, hpwN/totalN)
    countY = (ageY/totalY)*(workY/totalY)*(eduY/totalY)*(maritalY/totalY)*(occuY/totalY)*(relatY/totalY)*(hpwY/totalY)
    countN = (ageN/totalN)*(workN/totalN)*(eduN/totalN)*(maritalN/totalN)*(occuN/totalN)*(relatN/totalN)*(hpwN/totalN)
    # print(max(countY, countN), countY, countN)

    if countY*(totalY/len(trainData)) > countN*(totalN/len(trainData)):
        # print('>50K', countY*(totalY/len(trainData)))
        AnswerTuple.append('>50K')
    else:
        # print('<=50K', countN*(totalN/len(trainData)))
        AnswerTuple.append('<=50K')
    # break
# print(AnswerTuple)
toAppend = pd.DataFrame({'data': AnswerTuple})
writer = pd.ExcelWriter('TebakanTugas1ML.xlsx', engine='xlsxwriter')
toAppend.to_excel(writer, sheet_name='Sheet1', index=False, header=False)
writer.save()