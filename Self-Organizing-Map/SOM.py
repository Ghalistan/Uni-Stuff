import numpy as np
import matplotlib.pyplot as plt
import math

def visualize(data, neuron):
    global iterate
    for d in data: plt.plot(d[0], d[1], 'ro')
    for n in neuron: plt.plot(n[0], n[1], 'bo')
    plt.title('Iterasi ke-'+str(iterate))
    plt.show()

def readjust(m):
    global neuron
    for i in range(len(neuron)): neuron[i] = [neuron[i][0]+m[i][0], neuron[i][1]+m[i][1]]

def SOM(data, neuron):
    BMU = []
    for n in neuron:
        euclid = math.sqrt(((data[0]-n[0])**2)+((data[1]-n[1])**2))
        BMU = np.append(BMU, [euclid])

    index = np.where(BMU == min(BMU))[0][0] # Get index of BMU
    # Count neighboring
    neighbor = []
    for n in neuron:
        Si = math.sqrt(((neuron[index][0]-n[0])**2)+((neuron[index][1]-n[1])**2))
        Ti = math.exp(((-(Si**2))/2)*(sigma**2))
        neighbor.append([Si, Ti])
    
    y = 0
    movement = []
    for n in neuron:
        x = 0
        placeholder = []
        for i in n:
            XWi = data[x] - i
            DWi = lR*neighbor[y][1]*XWi
            placeholder.append(DWi)
            x+=1
        movement.append(placeholder)
        y+=1
    
    readjust(movement)
    
dataset = np.genfromtxt('Tugas 2 ML Genap 2018-2019 Dataset Tanpa Label.csv', delimiter=',')        
neuron = np.random.random_sample((7,2)) # 5 neuron dengan 2 kelas
lR = 0.1 # Learning Rate
Tn = 2
To = 2
sigma = 2
epoch = 5000
iterate = 0
visualize(dataset, neuron)
for i in range(epoch):
    for obj in dataset:
        SOM(obj, neuron)
        lR = lR*(math.exp((-1)/Tn)) # Update Learning Rate
        sigma = sigma*(math.exp((-1)/To)) # Update Sigma
        iterate+=1
visualize(dataset, neuron)