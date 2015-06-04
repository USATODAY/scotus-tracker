from authomatic.providers import oauth2
from authomatic import Authomatic
import os

"""
OAUTH
"""

GOOGLE_OAUTH_CREDENTIALS_PATH = '~/.google_oauth_credentials'

GOOGLE_DOC_KEY = "1Q6kpuMGLNHBuqP3HWzC3ycSEHSw_4Fftz9UP4aEYROw"

COPY_PATH = 'data_tools/src/data.xlsx'

authomatic_config = {
    'google': {
        'id': 1,
        'class_': oauth2.Google,
        'consumer_key': os.environ.get('GOOGLE_OAUTH_CLIENT_ID'),
        'consumer_secret': os.environ.get('GOOGLE_OAUTH_CONSUMER_SECRET'),
        'scope': ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/userinfo.email'],
        'offline': True,
    },
}

