# Complete the solution so that it reverses the string passed into it.
# 'world'  =>  'dlrow'
# 'word'   =>  'drow'

# solution one
def solution(string):
    result = ''
    for s in string:
        result = s + result
    return result

# solution two
def solution2(string):
    return "".join(reversed(string))


#  solution three
def solution3(str):
  return str[::-1]

print(solution("world"))
print(solution2("world"))

