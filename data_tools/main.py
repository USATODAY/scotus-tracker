from flask import Flask, render_template, request, make_response
from authomatic.adapters import WerkzeugAdapter
from authomatic import Authomatic
import os
import config

app = Flask(__name__)


authomatic = Authomatic(config.authomatic_config, os.environ.get('AUTHOMATIC_SALT'))
SPREADSHEET_URL_TEMPLATE = 'https://docs.google.com/feeds/download/spreadsheets/Export?exportFormat=xlsx&key=%s'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/authenticate', methods=['GET', 'POST'])
def authenticate():
    """
    Run OAuth workflow.
    """
    response = make_response()
    context = {}

    result = authomatic.login(WerkzeugAdapter(request, response), 'google')

    if result:
        context['result'] = result

        if not result.error:
            save_credentials(result.user.credentials)
            get_document(config.GOOGLE_DOC_KEY, config.COPY_PATH)

        return render_template('authenticate.html', **context)

    return response


def get_credentials():
    """
    Read Authomatic credentials object from disk and refresh if necessary.
    """
    file_path = os.path.expanduser(config.GOOGLE_OAUTH_CREDENTIALS_PATH)

    try:
        with open(file_path) as f:
            serialized_credentials = f.read()
    except IOError:
        return None

    credentials = authomatic.credentials(serialized_credentials)

    if not credentials.valid:
        credentials.refresh()
        save_credentials(credentials)

    return credentials



def save_credentials(credentials):
    """
    Take Authomatic credentials object and save to disk.
    """
    file_path = os.path.expanduser(config.GOOGLE_OAUTH_CREDENTIALS_PATH)
    with open(file_path, 'w') as f:
        f.write(credentials.serialize())

def get_document(key, file_path):
    """
    Uses Authomatic to get the google doc
    """
    credentials = get_credentials()
    url = SPREADSHEET_URL_TEMPLATE % key
    response = authomatic.access(credentials, url)

    if response.status != 200:
        if response.status == 404:
            raise KeyError("Error! Your Google Doc does not exist or you do not have permission to access it.")
        else:
            raise KeyError("Error! Google returned a %s error" % response.status)

    with open(file_path, 'wb') as writefile:
        writefile.write(response.content)


def _has_api_credentials():
    """
    Test for API credentials
    """
    client_id = os.environ.get('GOOGLE_OAUTH_CLIENT_ID')
    client_secret = os.environ.get('GOOGLE_OAUTH_CONSUMER_SECRET')
    salt = os.environ.get('AUTHOMATIC_SALT')
    return bool(client_id and client_secret and salt)

# Run the app.
if __name__ == '__main__':
    app.run(debug=True, port=8888)
