import os

if __name__ == '__main__':
    #test in cli = "say 'hello"
    print("welcome to robo speaker!")
    x = input("what do you what me to speak")
    command = f"say {x}"
    os.system(command)

#press grenn button to run gutter the scripts