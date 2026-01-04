# Terminal game move function
# In this game, the hero moves from left to right. The player rolls the die and moves the number of spaces indicated by the die two times.

# Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

# Example:
# move(3, 6) should equal 15


def move(position, roll):
    # your code here
    result = (roll*2) + position
    return result

def move2(position,roll):
    steps = roll*2
    return(steps + position)


print(move(3,6))
print(move(0,4))
print(move(2,5))