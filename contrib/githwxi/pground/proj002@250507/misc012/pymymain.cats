########################################################################

API_URL = \
"https://api.dictionaryapi.dev/api/v2/entries/en/"

def CATS_word_test(word):
    word = word.strip().lower()

    print\
    (f"CATS_word_test: word = {word}")

    if not word.isalpha(): return False

    myurl = API_URL + word

    try:
        response = requests.get(myurl, timeout=10)

        if response.status_code == 404:
            return False

        response.raise_for_status()

        data = response.json()
        return isinstance(data, list) and len(data) > 0

    except requests.RequestException as e:
        raise RuntimeError(f"Dictionary lookup failed: {e}")

########################################################################

def main():
    if len(sys.argv) <= 2:
        print(f"Usage: {sys.argv[0]} WORD1 WORD2")
        sys.exit(1)

    word1 = sys.argv[1]
    word2 = sys.argv[2]

    try:
      DATS_doublets_solve_show(word1, word2)
    except RuntimeError as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)

########################################################################

if __name__ == "__main__": main()

########################################################################
