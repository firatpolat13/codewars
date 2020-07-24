#Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
#move_zeros([false,1,0,1,2,0,1,3,"a"]) # returns[false,1,1,2,1,3,"a",0,0]

def move_zeros(array):
    new_arr = []
    count = 0
    for i in range(len(array)):
        if type(array[i]) == bool:
            new_arr.append(array[i])
        elif array[i] != int(0):
            new_arr.append(array[i])
        else:
            count += 1
    for j in range(count):
        new_arr.append(0)
    return new_arr