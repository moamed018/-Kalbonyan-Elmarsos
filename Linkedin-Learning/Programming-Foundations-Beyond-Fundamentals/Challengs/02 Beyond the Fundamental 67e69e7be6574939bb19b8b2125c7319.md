# 02. Beyond the Fundamental

Instructor: Sasha Vodnik
Link: https://www.linkedin.com/learning/programming-foundations-beyond-the-fundamentals?contextUrn=urn%3Ali%3AlyndaLearningPath%3A56db2b643dd5596be4e4989b
No.: 10
Tags: Front-End, Programmig, Web
Time (h): 2
التقدم: ██░░░░░░░░ 20%
الحالة: نشط
المصدر: LinkedIn
تم دراسة: 2
سلسلة: PROGRAMMING FOUNDATIONS, مسابقة البنيان المرصوص
عناصر الغرس: https://www.notion.so/10-39c7e902a5e84f9badf70ea320633719
مشروع: https://www.notion.so/Programmer-0e1559f0e78b4cf9a797728c041df8aa
⏬⏬⏬: Yes

- **Some Resources:**
    - String All methods - W3 Schools, Programiz

        [Python String Methods](https://www.w3schools.com/python/python_ref_string.asp)

        [Python Standard Library Functions | Programiz](https://www.programiz.com/python-programming/methods)

    - find(), index(), rfind(), rindex()

        [Python String find()](https://www.programiz.com/python-programming/methods/string/find)

        [Python String rfind()](https://www.programiz.com/python-programming/methods/string/rfind)

        [Python String index()](https://www.programiz.com/python-programming/methods/string/index)

        [Python String rindex()](https://www.programiz.com/python-programming/methods/string/rindex)

        [Difference Between find( ) and index( ) in Python - GeeksforGeeks](https://www.geeksforgeeks.org/difference-between-find-and-index-in-python/)

    - open(), rstrip()

        [Python open() Function](https://www.w3schools.com/python/ref_func_open.asp)

        [Python String rstrip() Method](https://www.w3schools.com/python/ref_string_rstrip.asp)

    - file parameter of Python’s print() Function

        [file parameter of Python's print() Function - GeeksforGeeks](https://www.geeksforgeeks.org/python-file-parameter-print/)

    - If and elif and else

        [Python if...else Statement](https://www.programiz.com/python-programming/if-elif-else)

    - No Resources here

---

# **00.** Introduction

- ملخص السيكشن

    الكورس محتاج تكون عارف شوية بديهيات ، اللي إتشرحت في الكورس اللي قبله، المتغيرات والفانكشن وشويه في المتغيرات الشرطية اللي هي if بإختصار.

    واكيد تكون عارف برضه بديهيات البايثون او السينتاكس بتاعها يعني واللي برضه اتشرح في الكورس اللي فات.

    في الكورس ده تخطوا موضوع ضرب امثله انيميشن وبدأ يوريك امثله عمليه ومن الواقع علي مفاهيم برمجيه معقدة وبنفس الطريقه السابقه خلق مشكله، عرض المعلومه علي هيئة حل = فهم عميق لكيفيه العمل والجدوى أصلا من الشئ.

    خلال الكورس هيعلمك برضه ازاي تكود بفعاليه من خلال إنه هيعلمك اختصارات وشورت كاتس طول ما هو ماشي وهتتعلمهم من غير ما تحس!

---

# **01.** Collections

- **01.Understanding collections**

    Collection: Grouping multiple items together and store them with a single name(variable)

    Pros & Cons

    types: 1.Dectionarys 2.Lists

- **02.Creating simple collections**

    List: Simple collection that groups pieces of data together in a certain order and assigns the collection a name.

    ```python
    guests = [
    	'mansour',
    	'ahmed',
    ]
    ```

- **03.Creating more complex collections**

    ```python
    food = {
    	'appetizr': 'hummus',
    	'entree': 'gyro wraps',
    	****'dessert': 'baklava',
    }

    # # California state symbols
    # state_bird = 'California quail'
    # state_animal = 'Grizzly bear'
    # state_flower = 'California poppy'
    # state_fruit = 'Avocado'

    # Collections 
    # Name of collection = { 
    #     'Label' : 'Value',
    # }

    California_state_symbols = {
        'bird': 'California quail',
        'animal': 'Grizzly bear',
        'flower': 'California poppy',
        'fruit': 'Avocado',
    }
    ```

- **04.Working with collections**

    ```python
    # California state symbols
    # state_bird = 'California quail'
    # state_animal = 'Grizzly bear'
    # state_flower = 'California poppy'
    # state_fruit = 'Avocado'

    # Collections 
    # Name of collection = { 
    #     'Label' : 'Value',
    # }
    #Putting comma at end item of list or dict is not necessary,
    #but this is the best practice 

    CaliSym = {
        'bird': 'California quail',
        'animal': 'Grizzly bear',
        'flower': 'California poppy',
        'fruit': 'Avocado',
    }

    print(CaliSym['bird'])
    ```

    ```python
    # Office locations
    # city1 = 'Tokyo'
    # city2 = 'Dakar'
    # city3 = 'Mumbai'
    # city4 = 'Buenos Aires'

    cities = [
        'Tokyo', 
        'Dakar', 
        'Mumbai', 
        'Buenos Aires',
    ]

    print(cities[0],cities[1],cities[2],cities[3])
    ```

- **05.Collections in other languages**

    ## Data type

    ```python
    #List items can be any type of data
    [
    	'Apple',
    	15,
    	true,
    ]
    ```

    ```python
    #List items should be the same type of data
    [
    	'Apple',
    	'tomato',
    	'panana',
    ]
    ```

    ## Mutable / Immutable:

    Ability to edit and change list items

     Name  →  Python              -     JavaScript\C++

                   →  List                   -    Array

                   →  Dictionary     -    Associative array\ Map\ Table

- **06.Challenge: Working with a collection**

    ```python
    # Nearest stars to Earth
    #Task is Replace the vars. with list 'Stars'
    # statement prints 4th nearst star
    # star1 = 'Sol'
    # star2 = 'Alpha Centauri'
    # star3 = 'Barnard'
    # star4 = 'Wolf 359'

    # Highest peak on each tectonic plate
    # create a dic. "peaks" stores all values
    # Create statement prints name of highest peak on pacific plate

    # African = 'Kilimanjaro'
    # Antarctic = 'Vinson'
    # Australian = 'Puncak Jaya'
    # Eurasian = 'Everest'
    # North_American = 'Denali'
    # Pacific = 'Mauna Kea'
    # South_American = 'Aconcagua'

    stars = [
        'Sol',
        'Alpha Centauri',
        'Barnard',
        'Wolf 359',
    ]

    peaks = {
        'African' : 'Kilimanjaro' ,
        'Antarctic' : 'Vinson' ,
        'Australian' : 'Puncak Jaya' ,
        'Eurasian' : 'Everest' ,
        'North_American' : 'Denali' ,
        'Pacific' : 'Mauna Kea' ,
        'South_American' : 'Aconcagua' ,
    }

    print(stars[3])
    print(peaks['Pacific'])
    ```

- **08.Chapter Quiz 5 questions**
- **Summary**

    بيتكلم عن مجموعات البيانات وازاي تعمل متغير واحد بيشيل عدد كبير من القيم والبيانات، وازاي ده مُفيد في البرمجة، وضرب مثال انه الموضوع شبه الفايل (الدوسيه) والبوكس اللي بنشيل فيه الفايلات وطبق ده علي ال

    Dictionary and list

    في البايثون وقارنهم بال 

    Array 

     في لغة زي الجافاسكريبت و ال 

    C++

---

# **02.** Iteration

- **01.Introduction to iteration**

    **Iteration**: Repeats the same procedure multiple times until it reaches a specified end point.

    **Loop**: Code iterates, moving from the beginning to end of the process, then start over again.

    **What you need to Iterate some process:**

    - Specify the data
    - What should happen to the data during each iteration
    - Indicate when the loop should stop : to avoid infinite loop error
- **02.Iterating through collections**

    Omelet  Egg preparation

    Spices: Egg, Slat, water

    **for:** Specifies a variable name that we can use in each iteration of the loop to reference the current value

    **in:** Indicates that what follows is the set of values that we want to iterate through

    When I iterate at list of items and didn't make an end point for the loop, It will ends with last item in the list

    ```python
    spices = [
        'salt',
        'pepper',
        'cumin',
        'turmeric',
    ]
    for spice in spices:
    	print(spice)
    ```

    REMEBER: If you indent statement at the same level after the loop it will excute each iterate of the loop

    ```python
    spices = [
        'salt',
        'pepper',
        'cumin',
        'turmeric',
    ]
    for spice in spices:
    	print(spice)
    	print("الأومليت ممل")
    ```

    ```python
    spices = [
        'salt',
        'pepper',
        'cumin',
        'turmeric',
    ]
    for spice in spices:
    	print(spice)
    print("الأومليت ممل")
    ```

- **03.Iterating to a custom endpoint**

    While: is the iterational loop with step and condition

    i is referring to Iteration

    ```python
    i = 0
    print("I will count to 200 by tens:")
    while i <= 200:
        print(i)
        i += 10
    print("Wo Hoo Donne =D")
    ```

- **04.Challenge: Creating a for loop**

    ```python
    fruits = [
        'apples',
        'bananas',
        'dragon fruit',
        'mangos',
        'nectarines',
        'pears',
    ]
    print('Our fruit selection:')
    for fruit in fruits:
        print(fruit)
    ```

- **05.Extra Challenge: Creating a for loop**

    ```python
    # At end of the solution video the instractor suggests
    # to train on another loop of number then make some Arthimitric operations on it

    nums = [ 1,2,3,4,5,6,7,8,9,10,20,30,40,500,600,700,800,900,1000]

    print("Lets paly!")
    for num in nums:
        print(nums[18] - num)
    print("First game is done here")

    # This following code takes from me about 15 min to done ! 
    # But it worth the YEAAHHHHHH point when it work
    print("Lets paly Another one Please ^^!")

    for num in nums:
        x = nums[18] - num
        while x >= 500:
            print(x)
            x = 0
    print("The Value is less than 500x Pound, you are poor man! =P")
    ```

- **06.Chapter Quiz 3 questions**

    Why would you create a loop in Python with the while keyword rather than the for keyword?

    The while keyword allows you to create a loop that continues until the program arrives at a certain state.

- **Summary**

    في هذا الفصل تطرق الممحاضر للمفهوم المسارات المُتكرره او ال 

    loops

    ولكن بشرح المفهوم الأشمل وهو مبدأ العمليات المتكرره وفرق بين أنواع المتكررات في لغة بايثون وقارنها بغيرها من اللغات وكالعاده الأسلوب مبهر وبسيط للغاية بحيث يناسب يافع في ال14 من عمره أو اقل
    وكما قلنا سابقاً إنه يستخدم أشياء عمليه بدلاً من فقط ضرب المثال بل يحضر البيض علي الطاوله ويقوم أولا بتكررار فقش (فقس) عدة بيضات ومن ثم يشرح لك كيف تكتب لهذه العمليه كود

    وهنا وبهذه الطريقة تحديداً يقدم لك البرمجه كعمليه حيه! ليس مجرد مجموعه من الأكود والرموز المجرده! بل إن كل حرف وكل متغير يعني شيئاً ما كل متغير قد يمثل حياة إنسان ما، أنا متشوق لمعرفة المرحلة التاليه ! اشوفكم هنا

---

# **0**3. Using External Code

- 01.Comparing types of external code

    CAKE EXAMPLE

    Module: Python file that contains code, like variables or functions.

    Library\Package: Using multiple modules together so they are distributed and used in a group.

    Framework: when a set of code is not just used together but used in a specific way.

- 02.Working with a module

    Test Module

    ```python
    def mult(x, y):
        print(f'{x} * {y} = {x * y}')
    ```

    Use of the module

    ```python
    import testmodule
    testmodule.mult(10,20)
    ```

    The Module file should be in the same directory of the code which will be used in.

- 03.Understanding libraries and frameworks
    - Python Famous lib : TensorFlow, pandas = Machine Learning tasks || NumPy, SciPy = Mathematics
    - JavaScript Famous lib : Lodash = General Programming utilities || jQuery = Tools for selecting and work with webpage elements
    - Python Famous Frameworks: Django, Flask = Web content management
    - JavaScript Famous Frameworks: React, Angular, Vue = Building Web Apps
- 04.Chapter Quiz 3 questions
    - How is a framework different from a library?

    **You are correct!**

    - **A framework essentially defines how you should accomplish a task.**

    Feedback

    - A framework gives you a structure to use as a starting point and customize.
- Summary

    شُرح في هذا الفصل بشكل سريع أهميه إستخدام القطع الجاهزة لحل مشكله ما متكرره بدلاً من إختراع العجلةة وأن هذا ليس عيباً في المبرمج، وإنه ربنا من وقت للأخر يكتب برنامج من الصفر ولكن ليس هذا هو الوضع الطبيعي وتعلم التقنيات المساعِده أمر حتمي لأي مطور كي يواكب التطور السريع و يستثمر الوقت بشكل أفضل وضرب مثلا بالكيكا (أه والله جاب كيكا =D 

---

# **0**4. Working with Strings

- 01.Combining and manipulating strings

    String: is a box can hold any type of data char, int, symbol

    Concatenation: When multiple strings are combined into a single string.

    ```python
    # input() method Takes the input as a string
    # int() method converts any data type to intger
    # to can use it in arthimatric operations

    value = int(input('Enter a number: '))

    print(value)

    print(value, " Is my fav Number")

    print(value * 10, " Is my fav number 10 Times =D")
    ```

- 02.Finding patterns in strings

    .capitalize() →  Method of Capitalize the first Char of word

    ```python
    first_name = 'malala'
    last_name = 'yousafzai'
    note = 'award: Nobel Peace Prize'

    firstNameCap = first_name.capitalize()
    lastNameCap = last_name.capitalize()
    print(firstNameCap, lastNameCap)
    ```

    Finding text Methods 

    .find() | .rfind()  → Finding an word from sting, find = first time to see it, rfind = last time to see it

    if the word is be founded in the string one time only so find = rfind

    ![Untitled](02%20Beyond%20the%20Fundamental%2067e69e7be6574939bb19b8b2125c7319/Untitled.png)

    .rindex  | .index() → Find the lawest index of the word, rindex fint the highest 

    ```python
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
    ```

    Both index() and find () methods can do the same job but in different conditions 

    ![Untitled](02%20Beyond%20the%20Fundamental%2067e69e7be6574939bb19b8b2125c7319/Untitled%201.png)

    Slicing : Getting part of a string value

    string[start:end]

- 03.Creating regular expressions

    Regular Expression (Regex): Allows you to create a description of a pattern that you want to match

    its can be: Letters, Numbers, Special characters

    /hello/ → You search for specific text = hello     |     \d → Indicate a digit      |     \w → Indicate a word     |

    |      . → Indicate any character     |      + → to make concatenation of more then one     |    * → Indicate Zero and more |      |      ? → Indicate zero or one     |

    ```python
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
    ```

- 04.Challenge: Strings

    Challenge takes 3 min

    ```python
    # take value from user
    # conver it to km
    # Print it with text discription
    # you can use float() Method to convert int to float

    miles = input('Enter a distance in miles: ')

    # kilometers_value = miles_value * 1.609344

    km = ( float(miles) * 1.609344 )

    print ("The distance is ",km , "kilometers5")

    # It takes 3 min
    ```

- 06.Chapter Quiz 3 questions

    No hard questions

- Summary

    فصل خفيف في الوقت لكن تقيل في المُحتوي شرح ال

    Strings 

    كلها والأكسبريشن وبعض طرق إستخدامها طبعاً بنفس الطريقة لكن المرادي بمكعبات، الموضوع سهل أوي لحد ما تجرب تكتب كود بإيدك 😭

---

# **0**5. Planning a Program

- 01.Choosing a code style

    Style Guide: Documentation on approaches to code

    Popular Style guide of Python is: PEP8, Google.

    and for JavaScript for example we have Airbnb Style guide.

- 02.Writing pseudocode

    Pseudocode : Is planning phase it's writing a description of what you're trying to do using plain language

    ```
    check if the user has entered a number
    	if no
    display a message asking the user ti enter a number
    	if yes
    calculate the square root of thr number
    	display the result
    ```

    ```python
    # The Pseudocode:
    # check if the user has entered a number
    # 	if no
    # display a message asking the user ti enter a number
    # 	if yes
    # calculate the square root of thr number
    # 	display the result
    # python code:

    number = 0
    if number == 0 :
        number = int(input("Please Enter a number: "))
        print("The square root of",number, "is: ",number * number)
    else:
        print("The square root of",number, "is: ",number * number)
    ```

    # The Pseudocode:

    # check if the user has entered a number

    #   if no

    # display a message asking the user ti enter a number

    #   if yes

    # calculate the square root of thr number

    #   display the result

    # python code:

    number = 0

    if number == 0 :

    number = int(input("Please Enter a number: "))

    print("The square root of",number, "is: ",number * number)

    else:

    print("The square root of",number, "is: ",number * number)

---

# **0**6. Input and Output

- 01.Introduction to input and output

    study You project before starting write a single line of code, select language and technologies you will use, and the scope of you work, then finally define the inputs/outputs of you project what will be like!

- 02.Working with file input and output

    python excute → Solve the file error  
    Excute in file dir

    open() → opens a file, and returns it as a file object, it takes two parameters; filename, and mode

    There are four different methods (modes) for opening a file:

    `"r"` - Read - Default value. Opens a file for reading, error if the file does not exist

    `"a"` - Append - Opens a file for appending, creates the file if it does not exist

    `"w"` - Write - Opens a file for writing, creates the file if it does not exist

    `"x"` - Create - Creates the specified file, returns an error if the file exists

    In addition you can specify if the file should be handled as binary or text mode

    `"t"` - Text - Default value. Text mode

    `"b"` - Binary - Binary mode (e.g. images)

    # Syntax

    To open a file for reading it is enough to specify the name of the file:

    f = open("demofile.txt")

    The code above is the same as:

    f = open("demofile.txt", "rt")

    Because `"r"` for read, and `"t"` for text are the default values, you do not need to specify them.

    ---

    rstrip() →  method removes any trailing characters (characters at the end a string), space is the default trailing character to remove.

    Syntax: string.rstrip(characters) , characters(Optional) = A set of characters to remove as trailing characters

    ```python
    txt = "banana,,,,,ssqqqww....."

    x = txt.rstrip(",.qsw")

    print(x)
    ```

    ---

    file parameter of print() → which specifies where the function should write a given object(s) to the name of the required file, If the file does not exist, a new file by that name is created and written to.

    Note : The ‘file’ parameter is found only in Python 3.x or later.

    ```python
    # Code for printing to a file
    sample = open('samplefile.txt', 'w')

    print('GeeksForGeeks', file = sample)
    sample.close()
    ```

    ```python
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
    ```

- Summary

    الفصل ده قد يكون بسيط ولكنه يحوى في طياته الكثير والكثير، تحديداً الجزء الخاص بالتخزين في الملفات، هو أنا بعد ما لفيت لفة أم العروسه عشان افهم القصه بتاعة الكود ده منصحش حد يلفها، لإنها غالباً مسئلة سينتاكس ولما تحتاج تكتب كود بايثون تبقا تفهمهم بدل ما تهلك نفسك وانت لسه بتقول يا هادي، ومع ذلك فأنت طالما بتقرأ دلوقت فأنت يا أما في مقال لينكيد إن أو وصف الجيت هاب او نوشن وفي جميع الأحوال هتلاقي شرح اللفه دي بشكل بسيط، ولو عاوز تلف بقا فشمر إيدك واطلع فوق للمصادر هتلاقي كل حاجه إن شاء الله

---

# **0**7. Debugging

- 01.Introduction to debugging

    Debugging: Identifying and fixing bugs

    Types of bugs

    1. Syntax Error: Code doesn't match the rules of the language
    2. Run-Time Error: Calling function doesn't defined yet, the calling syntax is right but the function is not exist
    3. Logix Error: Loop counting is the wrong direction it will be got into infinite loop error

    ```python
    i = 10
    while i > 0:
    	i += 1 # the error here because it will be counting for ever! i-= 1 is solution of it
    	print(i)
    ```

- 05.Creating a test case

    Test Cases: Commands or scripts designed to test a specific scenario

    ```python
    # at the code elif
     def plant_recommendation(care):
        if care = 'low':
            print('aloe')
        elif care == 'medium':
            print('pothos')
        elif care == 'medium':
            print('orchid')

    plant_rec('low')
    plant_recommendation('medium')
    plant_recommendation('high')
    ```

    ![Untitled](02%20Beyond%20the%20Fundamental%2067e69e7be6574939bb19b8b2125c7319/Untitled%202.png)

- 06.Challenge: Debugging

    ```python
    def plant_recommendation(care):
        # Syntax Error
        if care == 'low':
            print('aloe')
        elif care == 'medium':
            print('pothos')
        # Logic Error
        elif care == 'high':
            print('orchid')

    # Runtime Error
    plant_recommendation('low')
    plant_recommendation('medium')
    plant_recommendation('high')
    ```

- 08.Chapter Quiz 5 questions

    When a program contains multiple bugs, the interpreter generally reports a list of all the bugs when you run the program.

    **You are correct!**

    - **FALSE**

    Feedback

    Interpreters often report just the error that causes them to stop execution, so fixing one error can cause the interpreter to run into and report the next one.

- Summary

    الشابتر ده جميل جدًا وبيعلمك ازاي تفكر حرفيًا بين ثنايا الأفكار بيقولك ازاي تفكر بترتيب منطقي واضح، وأنواع المشاكل اللي هتواجهك بيدخل علينا ف اول فيديو بدريل أو شينيور ويبدأ يشرح عليه، وبعدين بياخدك في رحله من تصحيح الأخطاء هتطلع من الشابتر ده عارف تميز رسايل الخطأ اللي كانت ومازلت بتطلع في التيرمنال وكنت بكل تلقائية تسميها كلها أيرور - طلعت أيرورز كتير وقصه كبيره

---

# **0**8. Object Orientation

- 01.Introduction to object-oriented programming

    Bags.

    OOP: Breaks the program to smaller parts called objects, Each on has focused purpose, they communicate together to make the program functions.

    Each object has Attributes(The data of the object)[Properties] and Behaviors(What the object can do)[Methods]

     The main Object called CLASS: You can make class for each type of object, and make unlimited number objects from it with same pattern but contain different properties values

- 02.Using built-in classes

    For Example

     This list is an object of class his name is array and 
     list is one of his objects, list items is the object properties
     this class has many methods number of them is pop().

    ```python

    flips = [
        'heads',
        'tails',
        'tails',
        'heads',
        'tails',
    ]

    print(flips.count(heads))
    print(flips.count(tails))
    print(flips.pop())
    ```

- 03.Creating custom classes and objects

    ```python
    class Attendee:
        'Common base class for all attendees'

        def __init__(self, name, tickets):
            self.name = name
            self.tickets = tickets

        def displayAttendee(self):
            if self.tickets == 0:
                print('Name : {}, Tickets: {}'.format(self.name, "Kick Him !!"))
            else:
                print('Name : {}, Tickets: {}'.format(self.name, self.tickets))

        def addTicket(self):
            self.tickets += 1
            print('{} tickets increased to {}'.format(self.name, self.tickets))

        def delTicket(self):
            if self.tickets >= 1:
                self.tickets -= 1
                print('{} tickets decreased to {}'.format(self.name, self.tickets))
            else:
                print("You can't make it -Ve MAN >_< !!")

    Attendee1 = Attendee('Mansour Ashraf', 2)
    Attendee2 = Attendee('Ahmed Mansour', 2)
    Attendee3 = Attendee('T. Hosney', 5)

    Attendee1.displayAttendee()
    Attendee2.displayAttendee()
    Attendee3.displayAttendee()

    Attendee1.addTicket()
    Attendee1.addTicket()
    Attendee1.addTicket()

    Attendee3.delTicket()
    Attendee3.delTicket()
    Attendee3.delTicket()

    Attendee2.delTicket()
    Attendee2.delTicket()
    Attendee2.delTicket()

    Attendee1.displayAttendee()
    Attendee2.displayAttendee()
    Attendee3.displayAttendee()
    ```

- 04.Chapter Quiz3 questions

    Why aren't all possible methods made available to every object?

    **You are correct!**

    - **to avoid overloading computer memory with unneeded methods**

    Feedback

    If all objects had access to all methods in the language, your programs would need more computer memory.

- Summary

---

# **0**9. Advanced Topics

- 02.Memory management across languages

    Dishes Example

    Memory Management: Code that decides what's kept in memory and what's thrown away

    Garbage Collection: An automated memory management process that keeps track of which items aren't needed and deletes them.

    - Python, JavaScript, and Ruby support it
- 03.Introduction to multithreading

    Rise and carrot

     Multithreading: is code structured as separated tasks that are executed simultaneously.

    Each task called thread and requires additional processing power and memory

    Multithreading is not asynchronous code but it's very similar.

- 04.Introduction to algorithms

    Algorithm: A set of instructions to describe the exact result

- 05.Chapter Quiz 3 questions

    What's an advantage of using multithreading?

    **You are correct!**

    - **It can make your computer programs faster and more responsive.**

    Feedback

    Structuring your code to do multiple things at once can increase a program's speed and responsiveness.

- Summary

---

# **00.** Conclusion

- 00.Continuing your programming quest

---