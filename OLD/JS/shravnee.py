class Army:
    def __init__(self):
        self.name = "Rahul"
        # self.gn = self.show().Gun() 
    def show(self):
        print(self.name)
        class Gun:
            def __init__(self):
                self.name = "Ak47"
                self.cap = "75 Rounds"
                self.lenght = "35.5 in "
            def disp(self):
                print(self.name)

Army()