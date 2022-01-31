# 03.Object-Oriented Design

Instructor: Barron Stone and Olivia Chiu Stone

Link: https://www.linkedin.com/learning/programming-foundations-object-oriented-design-3


- **Some Resources:**
    - **Books**
        - Software Requirements by Karl Wiegers
        - Mastering the Requirements Process By Suzanne and James Robertson
        - Writing Effective User Cases By Alistair Cockburn
        - User Stories Applied for Agile Software Development
        - Head First Design Patterns Book by Elisabeth Freeman and Kathy Sierra
    - **UML Notation**

        [UML Notation](https://atomicobject.com/resources/oo-programming/uml-notation)

    - **Abstract and concrete classes**

        [Pure Virtual Functions and Abstract Classes in C++ - GeeksforGeeks](https://www.geeksforgeeks.org/pure-virtual-functions-and-abstract-classes/)

        [Difference between Abstract Class and Concrete Class in Java - GeeksforGeeks](https://www.geeksforgeeks.org/difference-between-abstract-class-and-concrete-class-in-java/)

    - **Abstract and concrete classes**
    - **Abstract and concrete classes**

# **00. Introduction**

- **01. Learn object-oriented design principles**

    **Unified Modeling Language (UML):** Standardized notation for diagrams to visualize object-oriented systems.

- **02. What you should know**

    Basics of programming, vars fun loops conditions

- **Summary**

    بيتكلموا عن وصف الكورس وإنه المطلوب تكون عارف بعض أساسيات وبديهيات البرمجه زي اللوبس و الفانكشنز والمتغيرات و الكونديشينز والكلام ده كله تم شرحه في الكورسين اللي فاتوا، كمان أكدوا إن الكورس ده مش هيكون كود لكن هيكون عباره عن شرح مفاهيم البرمجة الكائنية

# **01. Object-Oriented Fundamentals**

- **01. Object-oriented thinking**

    **Baking  a Cake Example**

    Procedural Approach: Do every thing sequential.

    OOP Approach: I will make each object at the kitchen and what it can do

    Mixer → mix()     |     Pan → add()     |     Oven → bake()

- **02. Objects**

    **COFEE MUG & CELL PGONE EXAMPLE**

    **All objects have:** 

    Identity: Olivia's coffee mug

    Attributes: color,  size, fullness.

    Behaviors: fill(), empty(), clean()

    **Objects** = **Nouns** (I can but the Before them)

    - Things
    - People
    - Places
    - Ideas
    - Concepts
    - The time
    - The event
    - The time
    - The document

    **Behaviors** = **Verbs** (Can't but the before them)

    ~~The texting~~

    ~~The calling~~

    ~~The taking~~

- **03. Classes**

    **Class**: Code-template for creating program objects, describs what the object will be

    The class always comes first, and Each class has 3 components

    **Class Component:**

    **Name/ Type**: What is it? 

    **Attributes/ Properties/ Data:** What describes it?

    **Behavior/ Operations/ Methods**: What can it do?

    **Method**: is basically function but main different is:

    - A program procedure thar can return a value.
    - Defined as part of a class.
    - Can only access data known to its object.

    Existing Classes in OO Languages

    At minimum: 

    - Strings
    - Dates
    - Collections
    - Networking
    - File I/O

    ![Untitled](imgs/Untitled.png)

- **04. Abstraction**

    Terms of OOP: **A PIE**

    Person Example

    **Abstracting**: mean the idea or concept of something with out any unimportant details

- **05. Encapsulation**

    **Cookies JAR EXAMPLE**

    **Encapsulation**: is hiding some methods at class from other class and the main target id reduce dependance on other parts in your program.

- **06. Inheritance**

    ![Untitled](imgs/Untitled%201.png)

    **Inheritance**: is inherited all properties and methods of class to another with ability to add on them at the new one.

    The Pros of it:

    1. Reduce the number of class that  i need to make.
    2. If I need to edit some thing I will only edit it at one place.
- **07. Polymorphism**

    **Dynamic Polymorphism**: uses the same interface for methods on different types of objects

    Different classes that can be used the same interface, same input/output but the way is very different

    **Method Overriding**: is change one or more methods from the superClass with the same name to take the same input but change the function itself.

    **Static (Compile-Time) Polymorphism**: uses the same interface for methods on different types of objects

    **Method Overloading**: Implements multiple methods with the same name, but different parameters.

    Different Input/output but the way is the same

    `brew(coffee, water) → cupOfCoffee`

    `brew(tea, water) → cupOfTea`

    `brew(coffee, tea, water) → cupOfSomething`

- **08. Analysis, design, and programming**

    **Object-Oriented**

    **Analysis**: Understand your problem, What you need to do?

    **Design**: Plan your solution, How are you going to do it?

    **Programming**: Built it, The way to built your design

    The five steps approach:

    1. Gather requirements ( Fetching for a problem to solve)
    2. Describe the application ( Plain text of how the people will use it)
    3. Identify the main object (The start point of making the classes)
    4. Describe the interactions between them 
        1. Understanding each object responsibilities.
        2. The behaviors they need to have.
        3. When they interact with other objects
    5. Create a class diagram
- **09. Unified modeling language (UML)**

    **Unified Modeling Language (UML):** Standardized notation for diagrams to visualize object-oriented systems.

    ![Untitled]imgs/Untitled%202.png)

- **10. Chapter Quiz 20 questions**
    - How does dynamic polymorphism differ from static polymorphism?

        **You are correct!**

        - **It uses overriding instead of overloading.**

        Feedback

        Dynamic polymorphism creates a unique instance.

    - What is overriding a method?

        Creating a unique version of an inherited method.

    - How are analysis and design different?

        Analysis describes a problem; design describes a solution.

    - How do object behaviors and attributes differ?

        Attributes describe a state, but behaviors describe actions.

    - What is the purpose of encapsulation?

        **You are correct!**

        - **to protect an object from unwanted changes**
    - Focusing on the idea of a person instead of an individual is an example of what fundamental idea in object-oriented programming?

        **You are correct!**

        - **abstraction**

- **Summary**

# **02. Requirements**

- **01. Defining requirements**

    **Requirements** = What does it need to do?

    **Functional Req** = What must it do?

    The system must:

    - Heat meals in space-packkaging
    - Allow users to set timer for the meal
    - Notify user when the meal is ready.
    - Change cooking time based on type of meal,
    - Continue to function without network connection

    **Non-Functional Req** = How should it do it?

    - Is it **legal**?
    - **Performance**: Response time, Users Number simultaneously.
    - **Support**: if some problems happen any time what will you do?
    - **Security**

    How should be:

    - Available 24/7
    - Usable while wearing work gloves.
- **02. FURPS+ requirements**

    **Functionality**: **Capability**, **Reusability**, **Security,** the Features of the app

    **Usability**: Human Factors, Aesthetics, Consistency, Documentations**.**

    what affect the person who will use the app? Is it easy on the eyes?

    **Reliability**: Availability, Failure Rate & Duration, Predictability, 

    How Much system downtime is acceptable? Is system can be recovered?

    **Performance**: Speed, Efficiency, Resource Consumption, Scalability.

    **Supportability**: Testability, Extendibility, Serviceability, Configurability.

    Design: constraints on how the application is built.

    Implementation: the language in which the application is built

    Interface: Communication with other devices is a common need.

    Physical: the hardware on which the application must run.

- **03. Challenge: Jukebox requirements**

    Juke box:

    - User select an album from music lib
    - Then select a song from it
    - If one play 3 songs on row and another wanna play one it should be jumb to be the next to play
    - 3 Fun &  3 Non-Fun
- **04. Solution: Jukebox requirements**

    **Fun- the system must:**

    - Have music libirary
    - Allow user to choose any album and select single song
    - After putting any song to play check the queue
    - if the last 3 songs from same user jump it to the next play
    - if not put it in the queue

    **Non- Fun- the system should be:**

    - Available 24/7
    - Should be fast
    - Should be predicted what will play
    - Updatable
    - low power
- **05. Chapter Quiz 5 questions**
    - A requirement that all onscreen text must be at least 20-point font size is an example of which FURPS quality?

        **You are correct!**

        - **usability**
- **Summary**

    إتكلم في الشابتر ده عن المتطلبات وقسمها لمتطلبات عملية (وظيفية) ومتطلبات غير وظيفية، الوظيفية هي اللي بتوصف وظيفة واضحة في النظام زي مثلًا النظام لازم يسمح للمستخدم بتسجيل الدخول، وغالبًا بتعبر عنها بفعل، انما الغير وظيفية بتكون حاجات مش وظيفة واضحة، إنما مبدأ هتراعيه وانت شغال مثلًا زي الأمان العالي والسرعة في الإستجابة وهتلاقي إنك غالبًا بتتكلم عن صفات، والحتة دي مفيهاش صح وغلط طالما إنك بتراعي المعاير المظوبطة وحاطت كل حاجه في تصنيفها الصحيح، وكمان مينفعش يتكتب فيها اي حاجه تيكنيكال أو ليها علاقه بالكود ولا الشابتر الأولاني

# **03. Use Cases and User Stories**

- **01. Use cases**

    Use **Cases**

    - **Title**: What is the goal? Like "Heat Meal"
    - **Primary Actor**: Who desire it? "Customer" "Admin" "Manager" "Another system"
    - **Success Scenario**: How is it accomplished? "Simple Paragraph"

    **Additional Details**

    - **Preconditions**: When this use case is started?
    - Postconditions:
    - Secondary Actors:
    - Stakeholders:
    - Scope:
    - Priority:
    - Owner:

    **Title**: Heat Meal

    **Primary Actor**: Astronaut

    **Success Scenario:**

    1. Astronaut insert meal package. 
    2. System identifies type of meal. 
        1. Step for unidentifiable package
    3. System heats package for length of time required for meal type. 
    4. System notify the astronaut  that meal is ready via space pager. 
        1. If Space-pager system error
    5. Astronaut removes package from system. 

    **Precondition**: Astronaut selects meal to prepare

- **02. Identifying the actors**

    Start thinking about the **peoples** who maybe use your system "If it **multiple users** system". (User Icon)

    Thinking about another **systems** or **organizations** which need to **connect** with your system. (Systems= Box)

    Then; 

    Group them depending on **the goal** of each actor

- **03. Identifying the scenarios**

    **Focus** on the **goal** of each **actor** like cock meal, Generate reports, Change settings, and order supplies

    **Focus** only on the **best scenario** ever then all others can be **alternative paths**

    **Focus** on the **main actions** with out any **details**

    **Focus** on the **function** without the **interface**, Don't use words bottom screen click .. etc.

    **Question to help you thinking:**

    - Who does system admin?
    - Is the system need to started and stoped?
    - Backup on weekends?
    - Is this system have software updates applied?
    - Who does manages users and security?
    - What happens of the system fails? Who does the actor at this case?
    - If some one need reports?  Activity log?
- **04. Diagramming use cases**

    Start with listing your use cases

    then draw the actors with there names, and make circle on each use case, after than draw a big box around use cases as a refer to the system internal

    Draw lines from the actor to each user case he will work with

    If there are another system or second role actor, draw it at the other side with square around and <<actor>> to define it

- **05. User stories**

    User story is simpler than use case, it's focus only on small scenario from the user perspective and focusing only on his goal, As a (type of user) I want (goal) so that (reason)

    As a student, I want to see my courses, so I can focus on studying.

    We start making User Stories to hold the topics then make Use case to Each one or collect smaller together.

- **06. Challenge: Jukebox use cases**

    Use Case 01

    - **Title**: Play song
    - **Primary Actor**: Astronaut
    - **Success Scenario**:
        1. Astronaut open lib
        2. Then pick an album
        3. choose 3 songs or less to play
            1. if choose more tell him max number
            2. if there are 3 same user jump next play
        4. choose play setting (loop, shuffle)
            1. if not selected ask after queue, time 10sec then shuffle.
        5. play like setting

    Use Case 02

    - **Title**: Update Lib
    - **Primary Actor**: Admin
    - **Success Scenario**:
        1. Astronaut open sittings
        2. plugin storage
        3. move new data, done editing
        4. remove storage 
        5. close setting
- **08. Chapter Quiz 12 questions**
    - What is the function of a use case diagram?

        **You are correct!**

        - **It connects actors to use cases.**
    - Why are arrows and numbers not found in use case diagrams?
        - **Sequence and direction are not critical at this stage.**

        Feedback

        Listing features and their connectivity is the function of a use case diagram.

    - Marge is working on a short and simple project involving inventory maintenance. Why should she write short use cases?

        **You are correct!**

        - **They help identify problems but do not create the confusing work of full use cases.**

        Feedback

        Casual use cases can be very helpful, but the use cases should be more fully developed for larger projects.

- ملخص

    في هذا الشابتر قاموا بشرح حالات الإستخدام (Use cases) بشكل رائع وبسيط في نفس الوقت وربطها بالجزء السابق الخاص بالمتطلبات، ولكن ما يميز هذا الجزء هو أنهم يجلون كل شئ يبدو سهلًا وبسيطًا عند تلقيه، لكن لو أكتفيت بالسماع فلا أزن ذلك يجدي نفعًا يذكر، يذكر لك كل خطوة تحتاجها لتفكر في الأمر لا يترك شئ لك محط عدم فهم أو تشتيت يمكنك معرفة كل شئ حول الحلالات كيف تصنعها وكيف تنظمها وكيف ترتب الممثلين أو الشخصيات في المشروع كيف أصلا تخلق الشخصيات وما هي الأئلة التي يجب أن تطرحها علي نفسك لتخلقهم.

# **04. Domain Modeling**

- **01. Identifying the objects**

    **Conceptual Model**: Represents important objects and the relationships between them.

    This model is done after analysis phase (Use cases & user stories)

    at this point we pick all our system **objects** and every thing we should be aware of

    Not every object here will be a **class** 

    To get the **objects** we go back to the **use cases** and the **user stories** then pick **all of the nouns**

    ![Untitled](imgs/Untitled%203.png)

    ![Untitled](imgs/Untitled%204.png)

    Now search at them to find duplications and the useless ones

    ![Untitled]imgs/Untitled%205.png)

- **02. Identifying class relationships**

    Now after pick the class to the conceptual model we need to identify the relations between them with draw lines between them

    then write down a work which describe the relation between them

    ![Untitled]imgs/Untitled%206.png)

- **03. Identifying class responsibilities**

    Now we need to know each class (object) responsibilities, so we back to use cases and user stories then searching this time for verbs only

    ![Untitled](imgs/Untitled%207.png)

    An object should be responsible for itself

    like steers asteroid for first look you may said the player who responsible for steer it !

    but no, the player only ask the asteroid to move and the asteroid itself responsible to his move

    ![Untitled](imgs/Untitled%208.png)

    ![Untitled](imgs/Untitled%209.png)

    Don't give much behaviors(responsibilities) to single actor but the mean actor could ask other things to there behaviors

    ![Untitled](imgs/Untitled%2010.png)

    System word here refers to some part of the system should do that not an actor called system will do !

    to avoid doing that :

    ![Untitled](imgs/Untitled%2011.png)

    ![Untitled]imgs/Untitled%2012.png)

- **04. CRC cards**

    CRC =  **C**lass **R**esponsibilities **C**ollaboration

    CRH = **C**omponent **R**esponsibilities  **H**elper

    It should be like that and on a small piece of paper, to make it simple.

    ![Untitled](imgs/Untitled%2013.png)

    Use NOUNS to find **C**lass , And VERBS to **R**esponsibilities 

    ![Untitled]imgs/Untitled%2014.png)

- **05. Challenge: Jukebox conceptual model**

    ![Untitled](imgs/Untitled%2015.png)

    Nouns: 

    - System
    - User
    - Library
    - Album
    - Song
    - queue

    Verbs: 

    - identify-user
    - select-album

    - select-song
    - play-song
    - add-queue
    - check-queue

    System

    - identify-user

    Album

    - select-song

    User

    Song

    - play-song

    Library

    - select-album

    queue

    - check-queue
    - add-queue

    ---

- **06. Solution: Jukebox conceptual model**

    ![Untitled](imgs/Untitled%2016.png)

    ![Untitled](imgs/Untitled%2017.png)

    ![Untitled](imgs/Untitled%2018.png)

    Removing system to Avoiding master class

    ![Untitled](imgs/Untitled%2019.png)

    ![Untitled](imgs/Untitled%2020.png)

    ![Untitled](imgs/Untitled%2021.png)

    ![Untitled]imgs/Untitled%2022.png)

- **07. Chapter Quiz 10 questions**
    - How can one avoid assigning too many responsibilities to a single object?

        **You are correct!**

        - **Require objects to take care of themselves to a greater extent.**
    - How can you identify candidates for objects?

        **You are correct!**

        - **by listing all of the nouns in the user stories**

        Feedback

        Objects are nouns; they are things.

- **Summary**

    الشابتر ده يبدو معقد  للغاية في الوهلة الأولى، ده أول شابتر أحتاج إني أسمعه كله مرتين من أوله الأخره ولكنه في الأخر طلع أكتر شابتر مفيد لحد دلوقت، أتعملت أزاي استخرج العناصر و التصرفات بتاعتها من حالات الإستخدام وبعدين منها أبدأ ارسم علاقه بين العناصر وبعضها و أوزع عليهم المسؤليات بتاعة كل عنصر، مش بشتغل عشوائي لأ كل حاجه مترابطه ومتصله ومعتمده علي بعضها من أول وصف المشروع لحد أختيار العناصر والدوال بتاعتها و مهام كل عنصر

# **05. Class Diagrams**

- **01. Creating class diagrams: Attributes**

    ![Untitled](imgs/Untitled%2023.png)

    Write down the Attribute: Datatype = "Initial Value"

    ![Untitled]imgs/Untitled%2024.png)

- **02. Creating class diagrams: Behaviors**

    At behavior we can use Responsibilities from Conceptional model which we had created

    Responsibility(Input datatype) : Return datatype

    ![Untitled](imgs/Untitled%2025.png)

    Incapsolation: + Public -Private

    ![Untitled](imgs/Untitled%2026.png)

    The rule: to make many as you can every thing is private, and only public if another object will need to use it

    You should focus on what object should do, and to do that you should work on the past things we had done.

- **03. Converting class diagrams into cod**

    ![Untitled](imgs/Untitled%2027.png)

    ```java
    public class Spaceship {

    	// instance variables
    	public String callsign;
    	private int shieldStrength;

    	// methods
    	public String fireMissile() {
    	return "Pew!";
    	}

    	public void reduceShield(int amount) {
    	shieldStrength -= amount;
    	}
    }
    ```

    ```csharp
    public class Spaceship {

    	// instance variables
    	public String callsign;
    	private int shieldStrength;

    	// methods
    	public String fireMissile() {
    	return "Pew!";
    	}

    	public void reduceShield(int amount) {
    	shieldStrength -= amount;
    	}
    }
    ```

    ```swift
    public class Spaceship {

    	// instance variables
    	public var callsign: String
    	private var _shieldStrength: Int

    	// methods
    	func fireMissile() -> String {
    	return "Pew!"
    	}

    	func reduceShield(amount: Int) {
    	_shieldStrength -= amount
    	}
    }
    ```

    ```python
    class Spaceship():

    	def _init__(self):

    		# instance variables
    		self.callSign = ' '
    		self._shieldStrength = 100

    	# methods
    	def fireMissile(self):
    		return "Pew!"

    	def reduceShield(self, amount):
    		self.shieldStrength -= amount
    ```

    ```ruby
    class Spaceship

    	# instance variables
    	@call_sign
    	@shield_strength

    	# methods
    	def fire_missile
    		return "Pew!"
    	end

    	def reduce_Shield(amount)
    		shield_strength -= amount
    	end
    end
    ```

- **04. Instantiating classes**

     To make a new object in different languages:

    ![Untitled](imgs/Untitled%2028.png)

    **Constructor**: A special method that gets called to create an object

    It should contain the initial values that i want to be for each new object of this class.

    And it should be a method on the class with same name of it and be + (Public)

- **05. Class with multiple constructors**

    At this point maybe some one say: What if I need to make an object with different initial values from the one you made the constructor with ? I will reply then make **multiple constructors!**

    M**ultiple Constructors:** Also called **[overloading]()** its to let the first constructor take in value at the argument ( ) to make another object with different initial value**s**

    Overloading was mentioned before at [Chap01]() Lesson **[07.Polymorphism]()**

    **Method Overloading**: Implements multiple methods with the same name, but different parameters.

    at Java: 

    ```java
    public class Spaceship { 

    	// instance variables 
    	public String callSign; 
    	private Int shieldStrength 
    	
    	// constructor methods 
    	public Spaceship() { 
    		name = "The nameless ship"; 
    		shieldStrength = 100; } 
    	
    	// overload constructor 
    	public Spaceship(String name) { 
    		callSign = name; 
    		shieldStrength = 200; 
    	
    	// other methods omitted 
    }
    ```

    ---

    **Destructor:** A special method that gets called when an object is destroyed

    **Finalizer:** A special method that gets called when the object is destroyed

- **06. Static attributes and methods**

    **Instance Variable:** Variable for which each instantiated object of a class has separated copy

    Like the strength of each spaceship should be unique and not depending on another ships

    **(Shared, Class) / Static Variable:**  Variable that is shared across all object in a class.

    At Java/C#

    Add Static word after the mode (public)

    ```java
    public class Spaceship {

    	// instance variables 
    	public String callSign; 
    	private int shieldStrength; 
    	
    	// class variables 
    	public static float toughness; 
    	
    	// other code omitted
    }
    ```

    Just define it inside the class but out side the _ init_ function:

    ```python
    class Spaceship():

    	# class variables
    	toughness = 0.8
    	
    	def _init_(self):
    	
    		# instance variables
    		self.callsign = "
    		self._shieldStrength = 100

    	# other code omitted
    ```

    But to access it we should use className.classVariable NOT just as a normal Var

    ![Untitled](imgs/Untitled%2029.png)

    ## Static Methods:

    At UML Statics member should be Underlined 

    ![Untitled]imgs/Untitled%2030.png)

- **07. Challenge: Jukebox class diagrams**

    ![Untitled](imgs/Untitled%2031.png)

    Here You make vars private so made two public get methods to access them

    ![Untitled](imgs/Untitled%2032.png)

    ![Untitled](imgs/Untitled%2033.png)

    ![Untitled](imgs/Untitled%2034.png)

    ![Untitled](imgs/Untitled%2035.png)

    ![Untitled]imgs/Untitled%2036.png)

- **09. Chapter Quiz 22 questions**
    - Instantiating a class in many languages looks similar to that in C++, DinnerPlate *myPlate = new DinnerPlate(). What is the main difference between Python and Swift for achieving the same goal?

        Swift uses `let`, but neither Swift nor Python use `new`.

    - Which class diagram correctly specifies data types and default values?
        - **`Asteroid
        size: Integer=5
        position: Coordinate=(0.5,0.5,0.6)
        velocity: Coordinate=(1,0,0)`**

        Feedback

        It helps to have standard syntax even in UML, as it makes later jobs easier.

    - A class diagram contains the following behavior specifications. The explodePieces() behavior breaks up an object into a number of pieces. What is the data type for that number? The answer will take the place of the '???'.

        **You are correct!**

        - **Integer**

        Feedback

        An argument is contained within parentheses.

    - What other terminology is used for variables that are declared static?

        **You are correct!**

        - **class or shared**

        Feedback

        Class or shared will imply that there is one variable used across the whole class.

    - setSize(Integer):Integer

        the data types for the argument, and return of the function setSize

    - Which is the purpose of a constructor?

        to initialize attribute values

    - Which restrictions apply to the use of static methods?

        **You are correct!**

        - **They cannot act on instance variables, but only `static` variables.**

        Feedback

        Static methods can be applied to class-wide variables.

    - What does it mean if a class attribute is private?

        **You are correct!**

        - **It can only be accessed from within the class.**
    - How do you declare a private variable in Python?

        **You are correct!**

        - **Python does not have private or public variables.**
- **Summary**

    بيعلمك في الشابتر ده إزاي تكون الكلاس وتستنتجه من الجاجات اللي عملتها قبل كده وإزاي تحدد المعادلات بتاعته بسهولة وإزاي تعمل لينك ما بين الكلاسات وبعضها من الأخر بيعلمك ازاي تفكر أصلا وانا بتعمل البرنامج كل المطلوب منك تفهم وتطبق وتدي المبادئ دي حقها من الإستيعاب وأبشر !

# **06. Inheritance and Composition**

- **01. Identifying inheritance situations**

    **inheritance:** subclasses or child classes automatically have all of the attributes and methods of their parent class. And they can have their own unique attributes and methods in addition to those.

    The best way to identify if it's inheritance, is with two simple words, **is a (a kind of , or  type of )** Inheritance describes an is a relationship between objects. Like: A star fighter **is a** spaceship, or A cargo shuttle **is a** spaceship.

    ![Untitled](imgs/Untitled%2037.png)

    ![Untitled](imgs/Untitled%2038.png)

    **Overriding:** Allowing a subclass to replace the implementation of a method from the superclass

    **Method Overriding**: is change one or more methods from the superClass with the same name to take the same input but change the function itself.

    And you can make a multilevel Inheritance

    It's Normal to didn't use any inheritance on every diagram you make!

- **02. Using inheritance**

    At different languages:

    ![Untitled](imgs/Untitled%2039.png)

    To calling a method from the super class you may use the keyword **Super** like that:

    ![Untitled]imgs/Untitled%2040.png)

- **03. Abstract and concrete classes**
    - Abstract from GeeksForGeeks.Org

        **C++:** Sometimes implementation of all function cannot be provided in a base class because we don’t know the implementation. Such a class is called abstract class. For example, let Shape be a base class. We cannot provide implementation of function draw() in Shape, but we know every derived class must have implementation of draw(). Similarly an Animal class doesn’t have implementation of move() (assuming that all animals move), but all animals must know how to move. We cannot create objects of abstract classes.
        **Java**: An abstract class that is declared by the abstract keyword. An abstract class cannot be instantiated directly, i.e. the object of such class cannot be created directly using the new keyword. An abstract class can be instantiated either by a concrete subclass or by defining all the abstract method along with the new statement. It may or may not contain an abstract method. An abstract method is declared by abstract keyword, such methods cannot have a body. If a class contains an abstract method, then it also needs to be abstract.

    - Concrete from GeeksForGeeks.Org

        **Java**: A concrete class in Java is a type of subclass, which implements all the abstract method of its super abstract class which it extends to. It also has implementations of all methods of interfaces it implements.

    - Important points (Java)'
        - A concrete class is a subclass of an abstract class, which implements all its abstract method.
        - Abstract methods cannot have body.
        - Abstract class can have static fields and static method, like other classes.
        - An abstract class cannot be declared as final.
        - Only abstract class can have abstract methods.
        - A private, final, static method cannot be abstract, as it cannot be overridden in a subclass.
        - Abstract class cannot have abstract constructors.
        - Abstract class cannot have abstract static methods.
        - If a class extends an abstract class, then it should define all the abstract methods (override) of the base abstract class. If not, the subclass(the class extending abstract class) must also be defined as abstract class.

    **Abstract Class**: it's exists to be inherited by other classes, and it t can't be instantiated, and it should contains at least one abstract method, And not all of his methods should be abstract some of them can be implemented.

    The benefit of including keywords like abstract and final is to communicate your intentions for a class to other programmers. It let's them know whether or not a class was designed with inheritance in mind.

- **04. Interfaces**

    **Interface**: (is a form of abstraction) it list of methods for a class to implement. It doesn't contain any actual behavior.

    A class can implement multiple interfaces.

    Different between Interface and Abstract Class:

    - Interface represent a **capability, that class implements**.
    - Abstract represent a **type,** that another class can inherit from.

    The Implementation of interface at UML:

    ![Untitled]imgs/Untitled%2041.png)

- **05. Aggregation**

    **Aggregation**: is often referred to as a **has a(has Many or Uses a or Uses Many)**  relationship like: the road has cars.

    UML is:

    ![Untitled]imgs/Untitled%2042.png)

- **06. Composition**

    **Composition: (Is a more specific form of aggregation):** Like aggregation, composition is based around a has-a relationship between objects but it specifically implies ownership so i say **owns a(n)** . Like: the spaceship owns the engine.

    the owned element has no meaning or purpose with out the owner element, like the engine if I destroys the spaceship the engine would be destroyed too !

    SO. When you creating a class which will has a **Composition** relation take care of **constructor** and **destructor**

    UML is:

    ![Untitled]imgs/Untitled%2043.png)

- **07. Challenge: Jukebox class relationships**

    ![Untitled](imgs/Untitled%2044.png)

    ![Untitled](imgs/Untitled%2045.png)

    ![Untitled]imgs/Untitled%2046.png)

- **09. Chapter Quiz 16 questions**
    - A concrete class has no _____.

        **You are correct!**

        - **children**
    - Why would you create an abstract class, if it can have no real instances?

        **You are correct!**

        - **to avoid redundant coding in child classes**
    - An aggregation is a _____.

        **You are correct!**

        - **collection of objects**
    - How are the contents of a composition different from those of an aggregation?

        **You are correct!**

        - **If a composition dies, the contents die.**
    - What do most languages have in common for referring to a method defined in the parent class?

        **You are correct!**

        - **the use of `super` in the prefix to the method name**

        Feedback

        The word `super` is used for the common need for code within a subclass, to call a method that was originally defined in the super class.

    - Why should you use abstract and final in class definitions?

        **You are correct!**

        - **to better communicate intentions**

        Feedback

        Their use makes the code easier to read and maintain.

    - When is an interface used instead of an abstract class?

        **You are correct!**

        - **when you need to describe the capabilities of a class**
- ملخص

    الشابتر ده رحلة طويلة معرفتش خالص أكتفي بالكورس وعطلت كتير من أول ما بدأ في Abstract (التجريد) لدرجة إني سمعت الشابتر كله مرتين، مره كاملة ومرة بقف أكتب وأبحث، هنا بيتلكم عن علاقات التوريث و اللي شبهها، أي علاقة ممكن تبقى مفيدة وتوضح وتخلي فيه تواصل مع أعضاء الفريق من مجرد النظر في الكود، يعني بدأ في علاقة التجريد (Abstract)  وهي ببساطة علاقة بنستخدمها في إننا نقول إن Class ده مش هاينفع يبقي موجود كعنصر (Object) في النظام ولكن عاملينه عشان يتاخد منه نسخ أشكال وألوان، زي مثلًا عاوز أعبر عن الحلل في المطبخ هاعمل تصنيف مجرد (Abstract Class) إسمه وعاء و من الخصائص(Attributes) بتاعته نوع المادة، العمق، الحجم، واخد منه Class تاني اسمه تيفال بعلاقة توريث(inheritance ) عادي (لإنه نوع منه) وهغير فيه نوع المادة بس، و واحد تاني إسمه اكروبال ولا مش عارف بيسموه إيه وتالت ستانليس ستيل، وكل حله بقا هتبقي عنصر. في الحالة دي بقا طقم التيفال يبقا حاجه منتهية! بنسموه concrete class وده يعني الشكل النهائي ماينفعش أخد منه نسخ تانية، طيب وعلي إيه الدوشة دي؟ الدوشة دي عشان لما نيجي نشتغل علي الكود أكتر من مطور يبقوا فاهمين هما اشتغلوا علي ققصة التوريث دي ولا لأ فلما اشوف كلمه concrete  أفهم إن المطور اللي اشتغل قبلي خلص توريث في الحته دي مراجعش وراه وكمان تسهلي فهم الطريقة اللي إشتغل بيها مين مجرد ومين سوبر وهكذا،
    بعدين هيدخل في قصة تانية وهي قصة التجميع (Aggregation) والتركيب أو التكوين (Aggregation) ببساطه التجميع زي سرب النحل لو روحت حدفت عليهم لوح خشب هيموتوا كلهم؟ لأ ولكن التجميع بتاعهم باظ، إنما التركيب زي الإنسان العربية كده لو العربية لو روحت حدفت علي العربية عبوه ناسفه هل هيبقي فيها حاجه شغالة أو بمعني أصح ليها لازمه فب الوقت الفعلي؟ لا لازم تاخدها تصلحها و*تركبها* في عربية تانية، يبقي ببساطه القطع اللي متنفعش تبقي مفيده لوحده بتتركب إنما القطع اللي ليها وظيفة فرديه بتتجمع ( وده بناء علي فهمي البسيط للمفهوم والشرح)

# **07. Software Development**

- **01. OOP support in different languages**

    Typing = The data type of variables when declaration

    JavaScript didn't support classes

    ![Untitled]imgs/Untitled%2047.png)

- **02. General development principles**

    SOLID

    **Single Responsibility Principle:** A class should have only a single responsibility.

    **Open/Close Principle:**

    **Liskov substitution Principle:**

    **Interface segregation Principle:**

    **DRY:** **D**on't **R**epeat **Y**ourself

    **YAGNI**: **Y**ou **A**in't **G**onna **N**eed **I**t

    Code Smell: Any characteristic in a program's code that possibly indicates a deeper problem

- **04. Design patterns**

    Design Pattern: The re-usable form of a solution to a design problem

    **Factory Method Pattern**: which could provide a structured way to instantiate different types of enemy spaceships based on the current level and difficulty setting.

    ![Untitled](imgs/Untitled%2048.png)

    M**emento design pattern**: which outlines a proven approach for restoring an object to a previous state.

    ![Untitled](imgs/Untitled%2049.png)

    Patterns:

    - **Creational patterns:** focused on the instantiation of objects and provide clever ways to have more flexibility
    - in how objects are actually created.

    ![Untitled](imgs/Untitled%2050.png)

    - **structural patterns**: describe how classes are actually designed. How things like inheritance and composition and aggregation can be used to provide extra functionality.
    - 

    ![Untitled](imgs/Untitled%2051.png)

    - **behavioral patterns**: describe how classes are actually designed. How things like inheritance and composition and aggregation can be used to provide extra functionality.
    - 

    ![Untitled]imgs/Untitled%2052.png)

- **05. Chapter Quiz 8 questions**
    - You have developed an application with three classes of objects. One of the classes has 50 subclasses. What would style critics call this class?
        - **a god object**

        Feedback

        God objects do a lot of things that are not related to each other, and you should consider breaking up the class into two or more classes.

    - How does dynamic typing hinder troubleshooting?

        It can be difficult to identify variables that are incorrectly typed.

    - Why is code duplication so insidious?

        One has to maintain all the duplicates.

- **Summary**

    بيتكلم عن القواعد العامة لكتابة كود سهل وبسيط وشوية معلومات عامه عن أنماط التصميم الجاهزة، نبذه عن الفروقات بين اللغات اللي بتدعم البرمجة الكائنية

# **08. Conclusion**

ملخص قصير - لينكد إن

لسه مخلص الكورس ده ودي مراجعتي ليه

“Programming Foundations: Object-Oriented Design”!

تقييم عام للكورس:

الكورس تقيل ومحتاج تركيز قوي، قبل ما تبدأ الكورس اتأكد من إنك في مود مناسب للتركيز وفي مكان مناسب كمان وبالك مش مشغول ومعاك وقت (عشان قطعًا هتحتاج تعيد أجزاء كتير أكتر من 3 مرات) ولكن مع ذلك مش هتمل ومش هتزهق ومش هتفقد الأمل في الفهم طول ما انت بتتفرج مع الكابل المرح بارون وأوليفيا ستون

الفئة المُستهدفة من الكورس:

شخص محتاج يتعمق في فهم البرمجة الكائنية (OOP) وإتعرض بشكل كبير للغة من لغات البرمجة الكائنية، وشخص محتاج يتعلم إزاي يفكر في الكود والبرنامج قبل ما يبدأ يكود حاجة أصلا هيفيده اوي

محتاج إيه قبل ما تبدأ الكورس:

1. وبديهيات البرمجه
2. وبس و الفانكشنز والمتغيرات و الكونديشينز

متقلقش الكلام ده كله تم شرحه في الكورسين اللي فاتوا

المُحاضر وأسلوب الكورس:

1. بشكل عام الإتنين متناسقين ومكملين بعض بشكل مش طبيعي
2. كالعادة التمثيل بالأشياء الملومسه عنصر مهم ومتواجد في الكورس ده كمان
3. محتاج تشغل إيدك وخيالك مع الكورس وتعيش معاهم جو اللعبهلا (هتفهم قصدي جوا الكورس)

متوقع أطلع بإيه من الكورس:

1. تعرف عن المتطلبات الوظيفية وغير الوظيفية للكود (Requirements):
    1. الوظيفية هي اللي بتوصف وظيفة واضحة في النظام زي مثلًا النظام لازم يسمح للمستخدم بتسجيل الدخول، وغالبًا بتعبر عنها بفعل
    2. انما الغير وظيفية بتكون حاجات مش وظيفة واضحة، إنما مبدأ هتراعيه وانت شغال مثلًا زي الأمان العالي والسرعة في الإستجابة وهتلاقي إنك غالبًا بتتكلم عن صفات

    والحتة دي مفيهاش صح وغلط طالما إنك بتراعي المعاير المظوبطة وحاطت كل حاجه في تصنيفها الصحيح، وكمان مينفعش يتكتب فيها اي حاجه تيكنيكال أو ليها علاقه بالكود 

2. هتعرف حالات الإستخدام (Use cases) :

    يمكنك معرفة كل شئ حول الحلالات كيف تصنعها وكيف تنظيمها وكيف ترتب الممثلين أو الشخصيات في المشروع كيف أصلا تخلق الشخصيات وما هي الأسئلة التي يجب أن تطرحها علي نفسك لتخلقهم، وخليني أفكرك لو مكتبتش بإيدك مش هتسفيد الفايدة المطلوبه من الشابتر ده.

3. هتتعلم إزاي تكون الكلاس من الUse cases:

    وإزاي تحدد المعادلات بتاعته بسهولة وإزاي تعمل لينك ما بين الكلاسات وبعضها من الأخر بيعلمك ازاي تفكر أصلا وانا بتعمل البرنامج كل المطلوب منك تفهم وتطبق وتدي المبادئ دي حقها من الإستيعاب وأبشر

4. تعرف يعني إيه Inheritance (توريث) و Abstract (التجريد) والفرق بين ال Concrete class و ال Abstract : 

    وهي ببساطة علاقة بنستخدمها في إننا نقول إن Class ده مش هاينفع يبقي موجود كعنصر (Object) في النظام ولكن عاملينه عشان يتاخد منه نسخ أشكال وألوان، زي مثلًا عاوز أعبر عن الحلل في المطبخ هاعمل تصنيف مجرد (Abstract Class) إسمه وعاء و من الخصائص(Attributes) بتاعته نوع المادة، العمق، الحجم، واخد منه Class تاني اسمه تيفال بعلاقة توريث(inheritance ) عادي (لإنه نوع منه) وهغير فيه نوع المادة بس، و واحد تاني إسمه اكروبال ولا مش عارف بيسموه إيه وتالت ستانليس ستيل، وكل حله بقا هتبقي عنصر. في الحالة دي بقا طقم التيفال يبقا حاجه منتهية! بنسموه concrete class وده يعني الشكل النهائي ماينفعش أخد منه نسخ تانية.

5. وتعرف قصة التجميع (Aggregation) والتركيب أو التكوين (Composition) 

    التجميع زي سرب النحل لو روحت حدفت عليهم لوح خشب هيموتوا كلهم؟ لأ ولكن التجميع بتاعهم باظ، إنما التركيب زي العربية كده لو العربية لو روحت حدفت علي العربية عبوه ناسفه هل هيبقي فيها حاجه شغالة أو بمعني أصح ليها لازمه فب الوقت الفعلي؟ لا لازم تاخدها تصلحها و*تركبها* في عربية تانية، يبقي ببساطه القطع اللي متنفعش تبقي مفيده لوحده بتتركب إنما القطع اللي ليها وظيفة فرديه بتتجمع ( وده بناء علي فهمي البسيط للمفهوم والشرح)

6. وتاخد نبذه عن  القواعد العامة لكتابة كود سهل وبسيط:

    وهتعرف عنهم اكتر في كورس الـ Design Patterns