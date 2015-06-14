import config
from main import get_document


def get_data():
    get_document(config.GOOGLE_DOC_KEY, config.COPY_PATH)

if __name__ == "__main__":
    get_data()
