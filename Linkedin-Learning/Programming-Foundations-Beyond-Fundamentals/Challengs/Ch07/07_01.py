# Debugging: Identifying and fixing bugs

# Types of bugs

# 1. Syntax Error: Code doesn't match the rules of the language
# 2. Run-Time Error: Calling function doesn't defined yet, the calling syntax is right but the function is not exist
# 3. Logix Error: Loop counting is the wrong direction it will be got into infinite loop error

i = 10
while i > 0:
	i += 1 # the error here because it will be counting for ever! i-= 1 is solution of it
	print(i)
