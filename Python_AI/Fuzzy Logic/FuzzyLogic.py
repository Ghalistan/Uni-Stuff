import csv
import random
import numpy as np

# Fetch data dari csv
def ambilData(keluarga):
    with open('DataTugas2.csv') as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        for row in csv_reader:
            if line_count == 0:
                line_count += 1
            else:
                keluarga = np.append(keluarga, [[row[0], row[1], row[2]]], axis=0)
                line_count += 1
    return(keluarga)

# Membership pendapatan
def pendapatan_rendah(x):
    a = 0.2
    b = 1
    if x <= a:
        return 1
    elif a < x < b:
        return((b-x)/(b-a))
    else:
        return 0
    
def pendapatan_sedang(x):
    a = 0
    b = 1
    c = 2
    if x <= a or x >= c:
        return 0
    elif a < x <= b:
        return((x-a)/(b-a))
    else:
        return(-(x-c)/(c-b))    

def pendapatan_tinggi(x):
    a = 1
    b = 1.8
    if x <= a:
        return 0
    elif a < x < b:
        return((x-a)/(b-a))
    else:
        return 1
    
def Pendapatan(uang):
    rendah, sedang, tinggi = [0 for _ in range(3)]
    rendah = pendapatan_rendah(float(uang[1]))
    sedang = pendapatan_sedang(float(uang[1]))
    tinggi = pendapatan_tinggi(float(uang[1]))
    hasil = []
    hasil.extend((rendah,sedang,tinggi))
    
    return hasil

# Membership hutang
def hutang_dikit(x):
    a = 5
    b = 50
    if x <= a:
        return 1
    elif a < x < b:
        return((b-x)/(b-a))
    else:
        return 0
    
def hutang_sedang(x):
    a = 0
    b = 50
    c = 100
    if a < x <= b:
        return((x-a)/(b-a))
    elif b < x <= c:
        return(-(x-c)/(c-b))
    else:
        return 0
        
        
def hutang_banyak(x):
    a = 50
    b = 100
    if x <= a:
        return 0
    else:
        return((x-a)/(b-a))
    
def Hutang(uang):
    dikit, sedang, banyak = [0 for _ in range(3)]
    dikit = hutang_dikit(float(uang[2]))
    sedang = hutang_sedang(float(uang[2]))
    banyak = hutang_banyak(float(uang[2]))
    hasil = []
    hasil.extend((dikit,sedang, banyak))
    
    return hasil

# Penentuan Rule dan Inference
def Rule_Inference(pendapatan, hutang):
    pR = pendapatan[0]
    pS = pendapatan[1]
    pT = pendapatan[2]
    
    hD = hutang[0]
    hS = hutang[1]
    hB = hutang[2]
    
    R1_M = min(pR, hD)
    R2_Y = min(pR, hS)
    R3_Y = min(pR, hB)
    R4_N = min(pS, hD)
    R5_M = min(pS, hS)
    R6_Y = min(pS, hB)
    R7_N = min(pT, hD)
    R8_N = min(pT, hS)
    R9_M = min(pT, hB)
    
    No = max(R4_N, R7_N, R8_N)
    Maybe = max(R1_M, R5_M, R9_M)
    Yes = max(R2_Y, R3_Y, R6_Y)
    
    return([No, Maybe, Yes])

# Defuzzyfication Takagi
def Defuzz_Takagi(Inference):
    No = Inference[0]
    Maybe = Inference[1]
    Yes = Inference[2]

    Acc_No = 60
    Acc_Maybe = 75
    Acc_Yes = 100

    return(((No*Acc_No)+(Maybe*Acc_Maybe)+(Yes*Acc_Yes))
            /(No+Maybe+Yes))   

# Masukkan kedalam TebakanTugas2.csv
def toCSV(data):
    with open('TebakanTugas2.csv', mode='w', newline='') as masukan:
        writer = csv.writer(masukan)
        writer.writerow(['Index Terbaik'])
        for x in data:
            y = x[0]
            writer.writerow([y])

# Fungsi Fuzzy
def FuzzyLogic(data):
    Membership_pendapatan = np.zeros(shape=(0,3))
    Membership_hutang = np.zeros(shape=(0,3))
    Inference = np.zeros(shape=(0,3))
    Defuzz = []
    
    count = 0
    for x in data:
        # Fuzzyfication
        Membership_pendapatan = np.append(Membership_pendapatan, [Pendapatan(data[count])], axis=0)
        Membership_hutang = np.append(Membership_hutang, [Hutang(data[count])], axis=0)
        
        # Rule & Inference
        Inference = np.append(Inference, [Rule_Inference(Membership_pendapatan[count], Membership_hutang[count])], axis=0)
        
        # Defuzz Takagi Sugeno
        Defuzz = np.append(Defuzz, [Defuzz_Takagi(Inference[count])], axis=0)
        count+=1
    
    count=0
    result = np.zeros(shape=(0,4))
    for x in datakeluarga:
        result = np.append(result, [[datakeluarga[count][0], datakeluarga[count][1], datakeluarga[count][2], Defuzz[count]]], axis=0)
        count+=1
    
    result = result[result[:,3].argsort()]
    toCSV(result[80:100])

# pengambilan data dan running FuzzyLogic
datakeluarga = np.zeros(shape=(0,3))
datakeluarga = ambilData(datakeluarga)
FuzzyLogic(datakeluarga)