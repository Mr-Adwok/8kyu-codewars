# We need a function that can transform a number (integer) into a string.

# What ways of achieving this do you know?

# Examples (input --> output):
# 123  --> "123"
# 999  --> "999"
# -100 --> "-100"

# solution one
def number_to_string(num):
    return str(num)

# solution two
number_to_string = lambda n: str(n)


print(number_to_string(67))