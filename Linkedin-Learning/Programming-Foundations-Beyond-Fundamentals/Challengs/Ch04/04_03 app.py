# This is a lib to search between to inputs
# we will use it to search our Regex at strings
# re.search(first, second)
import re 

five_digit_zip = '98101'
nine_digit_zip = '98101-0003'
phone_number = '234-567-8901'

# r'' tell the comiliar to skip all slash in the string "\"
# Regex syntax is \d{numbers of digits in raw you search}

regexFind5 = r'\d{5}'

# if we make 5 to 6 = all None, If 3 = all will found

Result = print (re.search(regexFind5 , five_digit_zip ) )
Result = print (re.search(regexFind5 , nine_digit_zip ) )
Result = print (re.search(regexFind5 , phone_number ) )