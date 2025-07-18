#Welcome the suer to the calculator app
print("Welcome to the Calculator App! ")

#Loop until the choice is input if user fails to type yes or no
while True:
    #Ask if the user wants to calculate
    choice= input("Do you want to calculate? Yes/No ").lower()

    #Check if user says yes in order to continue, if not, exit and say goodbye.
    #loop until a valid choice is made

    if choice =="yes":
        print("Okay let's calculate : ) !")

        #Assign the variables to a float.
        num1 = float(input("Enter your first number "))
        num2 = float(input("Enter your second number "))

        #Results Obtained
        sum_result = num1 + num2
        difference_result = num1 - num2
        quotient_result = num1 / num2
        product_result = num1 * num2

        #Print out the results
        print(f"Here are your results! ")
        print(f"Sum:{sum_result}" )
        print(f"Difference:{difference_result}" )
        print(f"Quotient:{quotient_result}" )
        print(f"Product:{product_result}" )

    elif choice =="no":
        print("Okay, Goodbye!" )
        break #exits the loop when the condition has been met

    else:
        print("Please enter a valid option, Yes or No." )
        
