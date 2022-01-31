# Instance Variable: Variable for which each instantiated 
# object of a class has separated copy

# Like the strength of each spaceship 
# should be unique and not depending on another ships

class Spaceship():

	def _init__(self):

		# instance variables
		self.callSign = ''
		self._shieldStrength = 100

	# methods
	def fireMissile(self):
		return "Pew!"

	def reduceShield(self, amount):
		self.shieldStrength -= amount