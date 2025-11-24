import time
import requests
import random
import string
import json

def test_rate_limit(endpoint, headers=None, payload=None, method='GET', interval=0.5, max_attempts=100):
    """
    Tests an API endpoint for rate-limiting by checking for HTTP status codes 429 or 503.

    Args:
        endpoint (str): The URL of the API endpoint.
        headers (dict): Optional headers to include in the request.
        payload (dict): Optional payload for POST requests.
        method (str): HTTP method to use ('GET' or 'POST').
        interval (float): Time in seconds between each request.
        max_attempts (int): Maximum number of attempts before stopping.

    Returns:
        dict: Results containing the number of successful requests and the attempt when rate limit was hit.
    """
    success_count = 0
    rate_limit_hit = False
    rate_limit_attempt = None

    for attempt in range(1, max_attempts + 1):
        try:
            if method.upper() == 'POST':
                response = requests.post(endpoint, headers=headers, json=payload)
            else:
                response = requests.get(endpoint, headers=headers, params=payload)

            print(f"Attempt {attempt}: Status Code {response.status_code}")

            if response.status_code == 429:
                print(f"Rate limit reached on attempt {attempt}! HTTP 429 Too Many Requests.")
                rate_limit_hit = True
                rate_limit_attempt = attempt
                break
            elif response.status_code == 503:
                print(f"Rate limit reached on attempt {attempt}! HTTP 503 Service Unavailable.")
                rate_limit_hit = True
                rate_limit_attempt = attempt
                break
            elif 200 <= response.status_code < 300:
                success_count += 1

        except requests.RequestException as e:
            print(f"Error during request: {e}")
            break

        time.sleep(interval)

    print(f"Total successful requests: {success_count} at interval {interval} seconds.")
    if rate_limit_hit:
        print(f"Rate limit encountered on attempt {rate_limit_attempt}.")
    else:
        print("No rate limit encountered during the test.")

    return {
        "endpoint": endpoint,
        "success_count": success_count,
        "rate_limit_hit": rate_limit_hit,
        "rate_limit_attempt": rate_limit_attempt,
        "rate_limit_interval": rate_limit_attempt * interval if rate_limit_hit else None
    }

def parse_extra_config(file_path):
    """
    Parses the endpoints[4].extra_config from the given Krakend JSON configuration file.

    Args:
        file_path (str): Path to the Krakend JSON configuration file.

    Returns:
        dict: The `extra_config` of the 5th endpoint, or None if not found.
    """
    try:
        with open(file_path, 'r') as file:
            config = json.load(file)

        # Check if `endpoints` and the 5th endpoint exist
        if "endpoints" in config and len(config["endpoints"]) > 4:
            extra_config = config["endpoints"][4]
            return extra_config
        else:
            print("The 5th endpoint or its `extra_config` is not found in the configuration.")
            return None
    except Exception as e:
        print(f"Error reading or parsing the file: {e}")
        return None

if __name__ == "__main__":
    # Example usage
    random_str_generated = ''.join(random.choices(string.ascii_uppercase + string.digits, k=10))
    api_endpoint = "http://localhost:8080/shop/" + random_str_generated
    results = test_rate_limit(api_endpoint, headers={"apikey": "key", "X-Plan":"premium"}, interval=0.001, max_attempts=10)

    # Output possible rate limit configuration
    if results["rate_limit_hit"]:
        print(f"Endpoint: {results['endpoint']}")
        print(f"Possible rate limit configuration: Allowed {results['success_count']} requests before rate limiting on attempt {results['rate_limit_attempt']}.")
        print(f"Estimated rate limit interval: {results['rate_limit_interval']} seconds.")
    else:
        print(f"Endpoint: {results['endpoint']}")
        print("No rate limit detected. Consider increasing the number of attempts or reducing the interval.")

    # Example usage
    random_str_generated = ''.join(random.choices(string.ascii_uppercase + string.digits, k=10))
    api_endpoint = "http://localhost:8080/shop/" + random_str_generated
    results = test_rate_limit(api_endpoint, headers={"Authorization": "Bearer YOUR_API_TOKEN"}, interval=0.001, max_attempts=10)

    # Output possible rate limit configuration
    if results["rate_limit_hit"]:
        print(f"Endpoint: {results['endpoint']}")
        print(f"Possible rate limit configuration: Allowed {results['success_count']} requests before rate limiting on attempt {results['rate_limit_attempt']}.")
        print(f"Estimated rate limit interval: {results['rate_limit_interval']} seconds.")
    else:
        print(f"Endpoint: {results['endpoint']}")
        print("No rate limit detected. Consider increasing the number of attempts or reducing the interval.")

    # Parse extra_config of the 5th endpoint from Krakend JSON
    config_path = "./config/krakend/krakend.json"
    extra_config = parse_extra_config(config_path)
    if extra_config is not None:
        print("endpoint config")
        print(json.dumps(extra_config, indent=4))
    else:
        print("No extra_config found for the 5th endpoint.")
