first_name = 'malala'
last_name = 'yousafzai'
note = 'award: Nobel Peace Prize first one to give it was Mr.Nobel'

# .capitalize() →  Method of Capitalize the first Char of word

# firstNameCap = first_name.capitalize()
# lastNameCap = last_name.capitalize()
# print(firstNameCap, lastNameCap)

# Finding text Methods 

# .find() | .rfind()  → Finding an word from sting, find = first time to see it, rfind = last time to see it
# if the word is be founded in the string one time only so find = rfind
# .rindex  | .index() → Find the lawest index of the word, rindex fint the highest 

# note = 'award: Nobel Peace Prize first one to give it was Mr.Nobel'
#         0123456789012345678901234567890123456789012345678901234567
#         0000000000111111111122222222223333333333444444444455555555
#         0         10        20        30        40        50

findt = note.find('Nobel') 
findrt = note.rfind('Nobel') 

indext = note.index('Nobel')
indexrt = note.rindex('Nobel')

print(findt)
print(findrt)

print(indext)
print(indexrt)

# Slicing : Getting part of a string value

# string[start:end]
print(note[40:50])