def lambda_handler(event, context):
    return {
        "statusCode":200
    }

# For direct invocation and testing on the local machine
if __name__ == '__main__':
    print(lambda_handler(None,None))