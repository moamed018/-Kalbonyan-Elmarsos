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