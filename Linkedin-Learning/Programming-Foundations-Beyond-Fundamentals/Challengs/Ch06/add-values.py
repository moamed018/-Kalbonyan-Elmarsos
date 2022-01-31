# define the sourse of data as a file with r- reading, t- text mode

infile = open('values.txt', 'rt')

# define where the output distenation of data as a file with w- writing, t- text mode

outfile = open('values-totaled.txt', 'wt')
print('Processing input')
sum = 0

# for loop will check each line of the source file and store summition of all
# at sum variable which has initialiesed value of zero
# then print each value after summion with rstrip method
# (without paramiter of any character) to remove spaces 
# bedore storing them, and file parameter to define
# the place where first will be printed

for line in infile:
    sum += int(line)
    print(line.rstrip(), file=outfile)

# print() method with parameter file to define 
# the place where the print will save print the first parameter 
# the first parameter is string concatinated 
# with another one converted with str() method

print('\nTotal: ' + str(sum), file=outfile)
outfile.close()
print('Output complete')
