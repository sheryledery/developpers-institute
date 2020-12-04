import random
from random import sample


def get_words_from_file():
    word_list = open("wordlist.txt", "r")
    contents = word_list.read().split()
    return contents
print(get_words_from_file())
get_words_from_file()



def get_random_sentence():
    word_list = get_words_from_file()('').join
    return random.sample(word_list, 8)
print(get_random_sentence())
    
get_random_sentence()
