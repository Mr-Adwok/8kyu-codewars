# In this simple assignment you are given a number and have
# to make it negative. But maybe the number is already negative?

# Examples
# make_negative(1);  # return -1
# make_negative(-5); # return -5
# make_negative(0);  # return 0
# Notes
# The number can be negative already, in which case no change is required.
# Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

#  solution one
def make_negative(number):
    if  number <= 0:
        return number
    else:
        return int(f"-{number}")

#  solution two

def make_negative2(number):
    if  number <= 0:
        return number
    else:
        return number * -1

# solution three
def make_negative3(number):
    return -abs(number)


print(make_negative(0))