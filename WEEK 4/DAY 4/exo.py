#write a function that has 1 parameter called mylist
#it must return the total sum that list



# def mylist(nums = [1, 2, 3, 4]):
#     return mylist(nums)



def sum_list(mylist):
    total = 0 

    for number in mylist:
        total += number
    return total

account = [100, 200, 300]
balance = sum_list(account)
print(balance)