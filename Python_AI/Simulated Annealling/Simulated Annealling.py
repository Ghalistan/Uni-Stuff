import math
import random

def algo(x1,x2):
	return -(abs(math.sin(x1) * math.cos(x2) * math.exp(abs(1-(math.sqrt(x1**2 + x2**2)/math.pi)))))

def Generate(x1,x2):
	global check
	change = random.uniform(0.1,0.2)
	if check == True:
		if abs(x1-change) <= 10:
			x1 -= change
			check = False
		else:
			x1 = 0
	else:
		if abs(x2+change) <= 10 :
			x2 += change
		else:
			x2 = 0
			check = True
	return x1,x2

check = True
X = [0,0]
E = algo(X[0],X[1])
T = 10**5

print("Temperature: " + str(T) + "	X1: " + str(X[0]) + "	X2: " + str(X[1]) + "	Energy: " + str(E))

Xb = [X[0],X[1]]
Eb = E
while T >= 1:
	Xn = Generate(X[0],X[1])
	En = algo(Xn[0],Xn[1])

	ZE = En - E
	if ZE < 0:
		X = Xn
		E = En
		if En < Eb:
			Xb = Xn
			Eb = En
			print("Temperature: " + str(T) + "	X1: " + str(Xb[0]) + "	X2: " + str(Xb[1]) + "	Energy: " + str(Eb))
	else:
		P = math.exp(-ZE/T)
		R = random.random()
		if R < P:
			X = Xn
	T -= 1