# Odd or Even

# Write a program that accepts user input
# Print 'Even' or 'Odd' in the console depending on the input

user_input = input('Input a number: ')


def isValid(input):
    try:
        number = int(input)
        isEven(number)
    except:
        print('Invalid Input')

def isEven(number):
    if number % 2 == 0:
        print(f'{number} is Even')
    else:
        print(f'{number} is Odd')


isValid(user_input)
