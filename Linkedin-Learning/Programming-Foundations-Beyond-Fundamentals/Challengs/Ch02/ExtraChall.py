# At end of the solution video the instractor suggests
# to train on another loop of number then make some Arthimitric operations on it

nums = [ 1,2,3,4,5,6,7,8,9,10,20,30,40,500,600,700,800,900,1000]


print("Lets paly!")
for num in nums:
    print(nums[18] - num)
print("First game is done here")


print("Lets paly Another one Please ^^!")

for num in nums:
    x = nums[18] - num
    while x >= 500:
        print(x)
        x = 0
print("The Value is less than 500x Pound, you are poor man! =P")


