import os
from openai import OpenAI

# Method 1: Using environment variable (recommended)
client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY")
)

# Method 2: Direct assignment (less secure)
# client = OpenAI(
#     api_key="your-api-key-here"
# )

# Method 3: Loading from .env file
# from dotenv import load_dotenv
# load_dotenv()
# client = OpenAI(
#     api_key=os.environ.get("OPENAI_API_KEY")
# )