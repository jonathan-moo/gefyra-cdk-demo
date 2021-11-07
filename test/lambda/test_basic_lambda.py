"""
File: test_basic_lambda.py
Description: Runs a test for our 'gefyra-basic-lambda' Lambda
"""
import os
import sys
import json

# Getting to the Lambda directory
sys.path.append(os.path.join(os.path.dirname(os.path.realpath(__file__)),"../../src/lambda"))

#pylint: disable=wrong-import-position

from basic_lambda.lambda_function import lambda_handler

#pylint: enable=wrong-import-position

def test_initialization():
    """
    Testing an empty payload event to the Lambda
    """
    event = {}
    context = None

    payload = lambda_handler(event, context)
    assert payload['statusCode'] == 200

def test_s3_notification():
    """
    Testing a mock S3 notification event to the Lambda
    """
    input_dir = os.path.join(os.path.dirname(os.path.realpath(__file__))) + "/input"
    json_file_dir = input_dir + "/s3_notification.json"

    # Extracts the JSON file into a dict
    with open(json_file_dir, encoding="utf-8") as json_file:
        event = json.load(json_file)
    context = None

    payload = lambda_handler(event, context)
    assert payload['statusCode'] == 200

# For direct invocation and testing on the local machine
if __name__ == '__main__':
    test_s3_notification()
