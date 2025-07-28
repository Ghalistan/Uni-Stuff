import csv
import numpy as np
import math

# Fetch DataTrain dari CSV
def fetchTrain(Train):
    with open('DataTrain_Tugas3_AI.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        for row in csv_reader:
            if line_count==0:
                line_count+=1
            else:
                Train = np.append(Train, [[row[0], row[1], row[2], row[3], row[4], row[5], row[6]]], axis=0)
    return(Train)

# Fetch DataTest dari CSV
def fetchTest(Train):
    with open('DataTest_Tugas3_AI.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        for row in csv_reader:
            if line_count==0:
                line_count+=1
            else:
                Train = np.append(Train, [[row[0], row[1], row[2], row[3], row[4], row[5], row[6]]], axis=0)
    return(Train)
    
# Simpan data ke CSV
def toCSV(data):
    with open('TebakanTugas3.csv', mode='w', newline='') as input:
        writer = csv.writer(input)
        for row in data:
            writer.writerow(row[6])

# Proses k-Nearest Neighbors
def KNN(Test, Train):
    count=0
    for dataTest in Test:
        Test[count][6] = countDistance(dataTest[1:6], Train)
        count+=1
    print(Test)

# Hitung jarak dari 1 dataTrain ke semua dataTest, kembalikan kelas yang paling dekat
def countDistance(data, Train):
    distanceholder = []
    for traindata in Train:
        placeholder = Manhattan(data, traindata[1:6])
        distanceholder.append([placeholder, traindata[6]])
    distanceholder = sorted(distanceholder, key=lambda x : x[0])
    return getClass(distanceholder)

# Dapatkan nilai kelas paling sering muncul dari frekuensi k data
def getClass(distance):
    K = 9
    count = 0
    placeholder = [[0,0],[1,0],[2,0],[3,0]]
    while count < K:
        if distance[count][1] == '0':
            placeholder[0][1]+=1
        elif distance[count][1] == '1':
            placeholder[1][1]+=1
        elif distance[count][1] == '2':
            placeholder[2][1]+=1
        else:
            placeholder[3][1]+=1
        count+=1
    placeholder = sorted(placeholder, key=lambda x : x[1], reverse=True)
    return placeholder[0][0]

# Rumus manhattan
def Manhattan(data, trainData):
    count = 0
    distance = 0
    while count < 5:
        distance += abs(float(data[count]) - float(trainData[count]))
        count+=1
    return distance
    
# Rumus Euclidean
def Euclidean(datatest, datatrain):
    count = 0
    distanceValue = 0
    while count < 5:
        distanceValue += (float(datatest[count]) - float(datatrain[count]))**2
        count+=1
    return math.sqrt(distanceValue)

dataTrain = np.zeros(shape=(0,7))
dataTrain = fetchTrain(dataTrain)
dataTest = np.zeros(shape=(0,7))
dataTest = fetchTest(dataTest)
KNN(dataTest, dataTrain)